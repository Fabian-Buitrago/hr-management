import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IProject } from '../../../shared/interfaces/project.interface';
import { IFavoriteColor } from '../../../shared/interfaces/employee.interface';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit{
  urlEmployees = 'api/employees';
  urlProjects = 'api/projects';
  urlColors = 'api/colors';
  currentEmployee = {};

  employeeForm: FormGroup;
  projects: IProject[] = [];
  colors: IFavoriteColor[] = [];

  constructor(
    private api: ApiService, 
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    this.activatedRoute.params.subscribe(res => {
      if(res.id){
        this.fillFields(res.id);
      }
    });

    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      age: [0, Validators.required],
      birthday: ['', Validators.required],
      favoriteColor: ['', Validators.required],
      project: ['', Validators.required]
    });
  }

  fillFields(id){
    this.api.get(`${this.urlEmployees}/${id}`).subscribe((data) => {
      this.currentEmployee = data;
      this.employeeForm.patchValue(data);
    });
  }

  ngOnInit(){
    this.api.get(this.urlProjects).subscribe((data)=>{
      this.projects = data;
    });

    this.api.get(this.urlColors).subscribe((data)=>{
      this.colors = data;
    });
  }

  onSubmit(){
    let employee = this.employeeForm.value;

    employee.project = {
      id: employee.project.id,
      name: employee.project.name
    }

    if(this.hasIdProperty){
      employee.id = this.currentEmployee['id'];
      this.api.put(this.urlEmployees, employee).subscribe((data) =>{  
        this.refresh();  
      });
    }else{
      this.api.post(this.urlEmployees, employee).subscribe((data) =>{  
        this.refresh(); 
      });
    }
  }

  get hasIdProperty(){
    return this.currentEmployee.hasOwnProperty('id');
  }

  refresh(){
    this.router.navigate(['/dashboard/employee']);
  }

  compareFn(value1, value2): boolean {
    return value1 && value2 ? value1.id === value2.id : value1 === value2;
  }
}
