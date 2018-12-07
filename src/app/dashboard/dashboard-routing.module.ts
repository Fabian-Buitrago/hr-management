import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [ 
    { 
        path: 'dashboard', 
        component: DashboardComponent, 
        canActivate: [ AuthenticationGuard ] 
    } 
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: [],
})
export class DashboardRoutingModule {}
