import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanLoad {

  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token')

    if (!token) {
      return this.noAuthenticate()
    }

    return new Promise((res) => {
      const userCreated = this.spotifyService.initiateUser();
      if (userCreated)
        res(true);
      else
        res(this.noAuthenticate())
    })

    return true
  }

  noAuthenticate() {
    localStorage.clear();
    this.router.navigate(['/login'])
    return false
  }
}
