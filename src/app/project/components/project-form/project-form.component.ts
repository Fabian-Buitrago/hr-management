import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  urlProjects = 'api/projects';
  currentProject = {};
  projectForm: FormGroup;

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

    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      clientName: ['', Validators.required]
    });
  }

  fillFields(id){
    this.api.get(`${this.urlProjects}/${id}`).subscribe((data) => {
      this.currentProject = data;
      this.projectForm.patchValue(data);
      this.projectForm.get('name').disable();
    });
  }

  ngOnInit(){
  }

  onSubmit(){
    let project = this.projectForm.value;
    console.log(this.currentProject['teamSize']);
    debugger;
    
    project.teamSize = this.currentProject['teamSize'] ? this.currentProject['teamSize'] : 0;

    if(this.hasIdProperty){
      project.id = this.currentProject['id'];
      this.api.put(this.urlProjects, project).subscribe((data) =>{  
        this.refresh();  
      });
    }else{
      this.api.post(this.urlProjects, project).subscribe((data) =>{  
        this.refresh(); 
      });
    }
  }

  get hasIdProperty(){
    return this.currentProject.hasOwnProperty('id');
  }

  refresh(){
    this.router.navigate(['/dashboard/project']);
  }

  compareFn(value1, value2): boolean {
    return value1 && value2 ? value1.id === value2.id : value1 === value2;
  }

}
