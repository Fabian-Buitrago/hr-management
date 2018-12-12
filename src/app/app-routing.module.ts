import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/guard/authentication.guard';

const routes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthenticationGuard] },
  { path: '**', loadChildren: './notfound/notfound.module#NotfoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
