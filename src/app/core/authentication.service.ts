import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class AuthenticationService {
	url = 'api/users';
	userIsLogged = false;

	constructor(
        private router: Router,
        private api: ApiService, 
    ) {}

	login(usernameToValidate: string, passwordToValidate: string) {
		return this.api.get(this.url).pipe(
			map((users) => {
				let foundUser = users.find((user) => {
                    return user.username === usernameToValidate;
                });
                
                this.userIsLogged = foundUser ? foundUser.password === passwordToValidate : false;

				return this.userIsLogged;
			}),
		);
    }
    
    isLoggedIn(): boolean {
		return this.userIsLogged;
	}

	logout() {
		this.userIsLogged = false;
		this.router.navigate(['login']);
	}
}