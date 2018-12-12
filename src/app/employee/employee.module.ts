import { EmployeeRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { MaterialModule } from '../material/material.module';
import { ApiService } from '../core/api.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  providers:[ApiService]
})
export class EmployeeModule { }
