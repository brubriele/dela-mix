import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';
import { SpotifyUserToUserApp } from '../common/spotify-helper';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser

  constructor() {
    this.spotifyApi = new Spotify()
  }

  async initiateUser() {
    if (!!this.user)
      return true

    const token = localStorage.getItem('token')

    if (!token) {
      return false
    }

    try {
      this.definesAccessToken(token);
      await this.getSpotifyUser();
      return !!this.user

    } catch (ex) {
      return false
    }
  }

  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
    console.log(userInfo)
    this.user = SpotifyUserToUserApp(userInfo);
  }

  getLoginURL() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getTokenUrl() {
    if (!window.location.hash) {
      return ''
    }

    const params = window.location.hash.substring(1).split('&')
    return params[0].split('=')[1]
  }

  definesAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token)
    localStorage.setItem('token', token)
  }
}
