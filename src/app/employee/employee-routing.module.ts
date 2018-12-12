import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

const routes: Routes = [
	{ path: '', component: EmployeeListComponent },
	{ path: 'employeeForm', component: EmployeeFormComponent },
	{ path: 'employeeForm/:id', component: EmployeeFormComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
})
export class EmployeeRoutingModule {}
