// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const SpotifyConfiguration = {
  clientId: 'fd200d7cedca41398db16b70ad26d200',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
