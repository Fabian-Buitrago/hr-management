import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs'
import { take, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  readonly COUNTDOWN_INTERVAL = 1000;
  readonly TRANSITION_SECONDS = 5;
  countdown: number;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.countdown = this.TRANSITION_SECONDS;
    interval(this.COUNTDOWN_INTERVAL)
      .pipe(
        take(this.TRANSITION_SECONDS)
      ).subscribe(
          () => {
            this.countdown--;
          },
          null,
          () => this.goToLogin(),
      );
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

}
