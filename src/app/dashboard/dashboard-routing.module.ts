import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [ 
    { 
        path: '', 
        component: SidenavComponent,
        children:[
            { path: '', component: DashboardComponent },
            { path: 'employee', loadChildren: './../employee/employee.module#EmployeeModule' },
            { path: 'project', loadChildren: './../project/project.module#ProjectModule' },
        ]
    }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
	declarations: [],
})
export class DashboardRoutingModule {}
