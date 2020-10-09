/* eslint-disable no-use-before-define */

declare global {
  interface Window {
    Spotify: any;
  }
}

export const initializeSpotifyPlayer = (): any => {
  const playerToken = localStorage.getItem('playerToken');

  let token = '';
  if (playerToken) {
    token = JSON.parse(playerToken);
  }

  let player: any = null;

  if (player === null && window.Spotify)
    player = new window.Spotify.Player({
      name: "Sasa's Spotify Player",
      getOAuthToken: (cb: any) => {
        localStorage.setItem('token', token);
        cb(token);
      },
    });

  const transferPlaybackHere = (device_id: string): void => {
    fetch('https://api.spotify.com/v1/me/player', {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        device_ids: [device_id],
        play: false,
      }),
    });
  };

  player.on('initialization_error', (e: any) => {
    console.error(e);
  });

  player.on('authentication_error', (e: any) => {
    console.error(e);
  });

  player.on('account_error', (e: any) => {
    console.error(e);
  });

  player.on('playback_error', (e: any) => {
    console.error(e);
  });

  player.on('player_state_changed', (state: any) => {
    localStorage.setItem('state', JSON.stringify(state));
  });

  player.addListener('ready', async (data: any) => {
    const { device_id } = data;
    localStorage.setItem('device_id', device_id);
    transferPlaybackHere(device_id);
  });

  if (sessionStorage.getItem('connected') !== 'true') {
    player.connect();
    sessionStorage.setItem('connected', 'true');
  }

  return player;
};
