import { LitElement, html } from '../web_modules/lit-element.js';
import { routed } from '@internetarchive/dweb-archivecontroller';
import React from 'react';

//import { fetch } from '../web_modules/whatwg-fetch.js';
//import URLSearchParams from '../web_modules/@ungap/url-search-params.js';
import Throttler from '../util/throttler.js';

// Typical items can be found with https://archive.org/search.php?query=collection%3Aradio-archive%20AND%20format%3A%22JSON%20SRT%22&scope=all
// VOA_Global_English_20190802_160000
// TODO-RADIO browser needs access to web_modules (symlink into dist ?) if go WebComponent route

import {
  RadioPlayerConfig,
  TranscriptConfig,
  TranscriptEntryConfig,
  AudioSource,
} from '../web_modules/@internetarchive/radio-player.js';

export default class RadioPlayerControllerReact extends React.Component {
  render() {
    return <radio-player-controller itemId={this.props.itemId}/>
  }
  componentDidMount() {
    const rpc = document.querySelector('radio-player-controller');
    rpc.item = this.props.item;
  }
}

class RadioPlayerController extends LitElement {
  static get properties() {
    // In LitElement: Modifying these propogates to component render etc
    return {
      itemId: { type: String },
      //item: { type: Object }, // Used by dweb-archive as ArchiveItem
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
    // In LitElement: .xxx are objects, and @xxx are event handlers ?xxx are boolean
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
    if (showDefaultTranscript) {
      this.transcriptConfig = this.baseTranscriptConfig;
    }

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
    this.updateQueryParams();
  }

  /* Doesnt appear to be used anywhere
  doInitialSetup() {
    this.fetchTranscript();
  }
  */
  async doSearch(term) {
    //TODO-RADIO needs to handle offline etc and cors
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

  async fetchMetadata() {
    const url = `https://archive.org/metadata/${this.itemId}`;
    const response = await fetch(url);
    data = await response.json();
    this.metadata = data;
    return data;
  }

  async loadItemMetadata() {
    const hiddenMetadataField = document.querySelector('.js-ia-metadata');
    const data = (hiddenMetadataField)
      ? JSON.parse( hiddenMetadataField.value)
      : this.item
      ? this.item.exportMetadataAPI() // It needs: .metadata, .files munged,
      : await this.fetchMetadata();
    this.handleMetadataResponse(data);
  }

  // Encapsulate to make it easier to switch between item (dweb) and metadata version
  audioSources({item=undefined, metadata=undefined}) {
    const validFormats = ['vbr mp3', 'ogg vorbis'];
    if (item) {
      return item.files
        .filter( af => validFormats.includes(af.metadata.format.toLowerCase()))
        .map(af => new AudioSource(
            af.httpUrl(),
            af.metadata.format.toLowerCase() === 'ogg vorbis' ? 'audio/ogg' : 'audio/mpeg'
        ));
    } else {
      return metadata.files
        .filter( file => ['vbr mp3', 'ogg vorbis'].includes(file.format.toLowerCase()))
        .map( file => new AudioSource(
          `https://archive.org/download/${this.itemId}/${file.name}`,
          file.format.toLowerCase() === 'ogg vorbis' ? 'audio/ogg' : 'audio/mpeg'
        ));
    }
  }
  waveFormImageUrl({item=undefined, metadata=undefined}) {
    // Turn either item or metadata into a URL of the waveform image
    function originalAudioFileMatches(file) {
      return (file.source === 'original' &&
        ['vbr mp3', 'ogg vorbis', 'advanced audio coding'].includes(file.format.toLowerCase()));
    }
    function waveFormFileMatches(file, name) {
      return (file.format.toLowerCase() === 'png') && (file.original === name);
    }
    if (item) {
      const originalAudioArchiveFile = item.files.find(
        af => originalAudioFileMatches(af.metadata));
      const waveFormImageArchiveFile = item.files.find(
        af => waveFormFileMatches(af.metadata, originalAudioArchiveFile.metadata.name,));
      return waveFormImageArchiveFile.httpUrl();
    } else {
      const originalAudioFile = metadata.files.find(
        (file) => originalAudioFileMatches(file));
      const waveFormImageFile = metadata.files.find(
        af => waveFormFileMatches(file, originalAudioFile.name,));
      return `https://archive.org/download/${this.itemId}/${waveFormImageFile.name}`;
    }
  }
  handleMetadataResponse(response) {
    const metadata = response;
    const collectionIdentifier = metadata.metadata.collection[0];
    const srtFile = metadata.files.find((file) => file.format === 'JSON SRT');
    this.fileName = srtFile.name;
    const logoBaseUrl = `https://archive.org/services/img/${collectionIdentifier}`;
    const logoUrl = routed(logoBaseUrl, { wantOneHttp: true });
    this.radioPlayerConfig = new RadioPlayerConfig(
      metadata.metadata.contributor,
      metadata.metadata.start_localtime || metadata.metadata.start_time,
      logoUrl,
      this.waveFormImageUrl({item: this.item, metadata: metadata}),
      this.audioSources({item: this.item, metadata: metadata}),
    );
    this.baseTranscriptConfig = new TranscriptConfig(
      metadata.speech_vs_music_asr.map(
        (entry) => new TranscriptEntryConfig(
          entry.id, entry.start, entry.end, entry.text, entry.is_music, entry.search_match_index,
        ),
      )
    );
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
