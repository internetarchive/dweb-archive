import { LitElement, html } from '../web_modules/lit-element.js';

import { fetch } from '../web_modules/whatwg-fetch.js';
import URLSearchParams from '../web_modules/@ungap/url-search-params.js';

import Throttler from '../util/throttler.js';

import {
  RadioPlayerConfig,
  TranscriptConfig,
  TranscriptEntryConfig,
  AudioSource,
} from '../web_modules/@internetarchive/radio-player.js';

export default class RadioPlayerController extends LitElement {
  static get properties() {
    return {
      itemId: { type: String },
      fileName: { type: String },
      radioPlayerConfig: { type: Object },
      transcriptConfig: { type: Object },
      baseTranscriptConfig: { type: Object },
    };
  }

  constructor() {
    super();
    this.itemId = '';
    this.fileName = '';
    this.searchTerm = '';
    this.currentTime = 0;

    this.queryParamThrottler = new Throttler(this.updateQueryParams, 500, this);
  }

  render() {
    return html`
      <radio-player
        .config=${this.radioPlayerConfig}
        .transcriptConfig=${this.transcriptConfig}
        @searchRequested=${this.searchRequested}
        @searchCleared=${this.searchCleared}
        @playbackPaused=${this.playbackPaused}
        @currentTimeChanged=${this.currentTimeChanged}
        @timeChangedFromScrub=${this.timeChangedFromScrub}
        @transcriptEntrySelected=${this.transcriptEntrySelected}
        @canplay=${this.canplay}
      >
      </radio-player>
    `;
  }

  firstUpdated() {
    this.loadItemMetadata();

    const searchParams = new URLSearchParams(window.location.search);
    const searchTerm = searchParams.get('q');
    const startTime = searchParams.get('start');

    if (searchTerm) {
      this.searchTerm = searchTerm;
      this.doSearch(searchTerm);
      if (this.radioPlayer) {
        this.radioPlayer.searchTerm = searchTerm;
      }
    }

    const showDefaultTranscript = !searchTerm;
    this.fetchTranscript(showDefaultTranscript);

    if (startTime) {
      this.startPlaybackAt = parseFloat(startTime);
    }
  }

  get radioPlayer() {
    return this.shadowRoot ? this.shadowRoot.querySelector('radio-player') : null;
  }

  searchRequested(e) {
    const term = e.detail.searchTerm;
    this.searchTerm = term;
    this.doSearch(term);
    this.updateSearchQueryParam();
  }

  doInitialSetup() {
    this.fetchTranscript();
  }

  async doSearch(term) {
    const searchUrl = `https://be-api.us.archive.org/explorer/get_radio_captions_matches/${this.itemId}/${this.fileName}?q=${term}`;
    const response = await fetch(searchUrl);
    const json = await response.json();

    const convertedTranscript = json.transcript.map(
      (entry) => new TranscriptEntryConfig(
        entry.id,
        entry.start,
        entry.end,
        entry.text,
        entry.is_music || false,
        entry.search_match_index,
      ),
    );

    const transcriptConfig = new TranscriptConfig(convertedTranscript);

    if (this.radioPlayer) {
      this.radioPlayer.transcriptConfig = transcriptConfig;
    }
  }

  canplay() {
    if (this.startPlaybackAt && this.radioPlayer) {
      this.radioPlayer.seekTo(this.startPlaybackAt);
      this.startPlaybackAt = undefined;
    }
  }

  searchCleared() {
    this.searchTerm = '';
    this.resetTranscript();
    this.queryParamThrottler.execute();
  }

  currentTimeChanged(e) {
    this.currentTime = e.detail.currentTime;
  }

  playbackPaused() {
    this.queryParamThrottler.execute();
  }

  timeChangedFromScrub(e) {
    this.currentTime = e.detail.newTime;
    this.queryParamThrottler.execute();
  }

  transcriptEntrySelected(e) {
    this.currentTime = e.detail.newTime;
    this.queryParamThrottler.execute();
  }

  resetTranscript() {
    const transcriptConfig = this.baseTranscriptConfig;

    if (this.radioPlayer) {
      this.radioPlayer.transcriptConfig = transcriptConfig;
    }
  }

  async loadItemMetadata() {
    const hiddenMetadataField = document.querySelector('.js-ia-metadata');
    let data = '';

    if (hiddenMetadataField) {
      const metadata = hiddenMetadataField.value;
      data = JSON.parse(metadata);
    } else {
      const url = `https://archive.org/metadata/${this.itemId}`;
      const response = await fetch(url);
      data = await response.json();
    }

    this.handleMetadataResponse(data);
  }

  handleMetadataResponse(response) {
    const metadata = response;
    const collectionIdentifier = metadata.metadata.collection[0];
    const srtFile = metadata.files.find((file) => file.format === 'JSON SRT');
    this.fileName = srtFile.name;

    const originalAudioFile = metadata.files.find(
      (file) => file.source === 'original' &&
        ['vbr mp3', 'ogg vorbis', 'advanced audio coding'].includes(file.format.toLowerCase()),
    );

    const audioFiles = metadata.files.filter(
      (file) => ['vbr mp3', 'ogg vorbis'].includes(file.format.toLowerCase()),
    );

    const audioSources = audioFiles.map((file) => {
      const url = `https://archive.org/download/${this.itemId}/${file.name}`;
      const mimetype = file.format.toLowerCase() === 'ogg vorbis' ? 'audio/ogg' : 'audio/mpeg';
      return new AudioSource(url, mimetype);
    });

    const waveFormImageFile = metadata.files.find(
      (file) => file.format.toLowerCase() === 'png' && file.original === originalAudioFile.name,
    );

    const waveFormImageUrl = `https://archive.org/download/${this.itemId}/${waveFormImageFile.name}`;

    this.radioPlayerConfig = new RadioPlayerConfig(
      metadata.metadata.contributor,
      metadata.metadata.start_localtime || metadata.metadata.start_time,
      `https://archive.org/services/img/${collectionIdentifier}`,
      waveFormImageUrl,
      audioSources,
    );
  }

  async fetchTranscript(setAsActive) {
    const srtUrl = `https://archive.org/cors/${this.itemId}/${this.fileName}`;

    const response = await fetch(srtUrl);
    const json = await response.json();

    const transcriptEntries = json.map(
      (entry) => new TranscriptEntryConfig(
        entry.id, entry.start, entry.end, entry.text, entry.is_music, entry.search_match_index,
      ),
    );

    this.baseTranscriptConfig = new TranscriptConfig(transcriptEntries);

    if (setAsActive) {
      this.transcriptConfig = this.baseTranscriptConfig;
    }
  }

  updateQueryParams() {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('start', `${this.currentTime}`);
    if (this.searchTerm === '') {
      searchParams.delete('q');
    } else {
      searchParams.set('q', `${this.searchTerm}`);
    }
    window.history.replaceState({}, '', `?${searchParams.toString()}`);
  }
}

customElements.define('radio-player-controller', RadioPlayerController);
