import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tokenUrlVerify()
  }

  tokenUrlVerify() {
    const token = this.spotifyService.getTokenUrl()

    if (!!token) {
      this.spotifyService.definesAccessToken(token)
      this.router.navigate(['/player'])
    } 
  }

  openLoginPage() {
    window.location.href = this.spotifyService.getLoginURL()
  }

}
