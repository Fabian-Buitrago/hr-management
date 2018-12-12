import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
	declarations: [],
	imports: [ CommonModule ],
	providers: [ ApiService, AuthenticationService],
	exports: []
})
export class CoreModule {}
