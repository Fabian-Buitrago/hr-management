import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {
	constructor(
		private router: Router,
		private authenticationService: AuthenticationService
	) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> | Promise<boolean> | boolean {
		if (!this.authenticationService.isLoggedIn()) {
			this.router.navigate(['/login']);
			return false;
		}
		
		return true;
	}
}
