import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';


const routes: Routes = [ 
  { path: '', component: ProjectListComponent },
	{ path: 'projectForm', component: ProjectFormComponent },
	{ path: 'projectForm/:id', component: ProjectFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
