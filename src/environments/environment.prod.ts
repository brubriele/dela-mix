export const environment = {
  production: true
};

export const SpotifyConfiguration = {
  clientId: '6fa3daaca88d47e797acf777c6ba8b2a',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http//localhost:4200/login/',
  scopes: [
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "user-modify-playback-state",
    "user-read-currently-playing user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
    "streaming",
    "user-library-modify",
    "user-library-read"        
  ]
}
