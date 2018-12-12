import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiService } from 'src/app/core/api.service';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  url = 'api/projects';
  displayedColumns = [ 'id', 'name', 'teamSize', 'clientName', 'action' ];
  dataSource: MatTableDataSource<IEmployee>;
  
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor( private router: Router, private api: ApiService) {}

	ngOnInit() {
        this.populateTable();
    }

    populateTable(){
        this.api.get(this.url).subscribe((projects) => {
            this.dataSource = new MatTableDataSource<IEmployee>(projects);
            this.dataSource.paginator = this.paginator;
        });
    }
    
    delete(id){
        this.api.delete(`${this.url}/${id}`).subscribe((data) => {
            this.populateTable();
        })
    }
}
