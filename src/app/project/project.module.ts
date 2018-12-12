import { ApiService } from 'src/app/core/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectFormComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProjectRoutingModule,
    ReactiveFormsModule
  ],
  providers:[ApiService]
})
export class ProjectModule { }
