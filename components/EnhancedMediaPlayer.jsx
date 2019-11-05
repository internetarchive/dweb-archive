/* eslint-disable no-underscore-dangle */

import { AudioPlayerWithYoutubeSpotify } from '@internetarchive/ia-components';

/* global: React, ReactDOM, window, $ */

/**
 * This loads the enhanced audio player
 * Fetches JWPlayer Playlist
 * Fetches Liner Notes
 * Then renders
 *
 * @param { object } component params
 */
export default async function loadEnhancedMusicPlayer({
  target_selector, // TODO-EMP-where does this come from
  identifier,
  full_audio, // TODO-EMP-where does this come from
  liner_notes_url, // TODO-EMP-where does this come from
}) {
  const audioPlayerHook = document.querySelector(target_selector);
  const itemStr = document.querySelector('.js-ia-metadata').value;
  const item = JSON.parse(itemStr);

  if (!audioPlayerHook) return;

  const defaultProps = {
    albumMetadata: item,
    playFullIAAudio: JSON.parse(full_audio),
  };

  let jwplayerPlaylist;
  try {
    jwplayerPlaylist = await $.ajax({
      url: `/embed/${identifier}?output=json`,
      type: 'GET',
      dataType: 'json',
      crossDomain: true,
    })
      .success((response) => response)
      .error(() => []);
  } catch {
    jwplayerPlaylist = [];
  }

  let linerNotes;
  try {
    linerNotes = await $.ajax({
      url: liner_notes_url, // TODO-EMP-where does this come from
      type: 'GET',
      dataType: 'json',
      xhrFields: {
        withCredentials: true,
      },
      crossDomain: true,
    })
      .success((response) => response)
      .error(() => null);
  } catch {
    linerNotes = null;
  }

  const allProps = {
    ...defaultProps,
    jwplayerPlaylist,
    linerNotes,
  };

  /* eslint-disable react/jsx-props-no-spreading */
  ReactDOM.render(
    <AudioPlayerWithYoutubeSpotify
      {...allProps}
    />,
    audioPlayerHook,
  );
  /* eslint-enable react/jsx-props-no-spreading */
}
