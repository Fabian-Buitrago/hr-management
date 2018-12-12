import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiService } from 'src/app/core/api.service';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { filter, mergeMap } from 'rxjs/operators';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: [ './employee-list.component.scss' ],
})
export class EmployeeListComponent implements OnInit {
    urlEmployees = 'api/employees';
    urlProjects = 'api/projects'
    displayedColumns = [ 'id', 'name', 'company', 'age', 'birthday', 'favoriteColor', 'project', 'action' ];
    dataSource: MatTableDataSource<IEmployee>;
  
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private api: ApiService) {}

	ngOnInit() {
        this.populateTable();
    }

    populateTable(){
        this.api.get(this.urlEmployees).subscribe((employees) => {
            this.dataSource = new MatTableDataSource<IEmployee>(employees);
            this.dataSource.paginator = this.paginator;
        });
    }
    
    delete(id, element){
        this.api.delete(`${this.urlEmployees}/${id}`)
        .subscribe(() => {
            this.api.get(this.urlProjects)
            .subscribe((projects) => {
                let project = projects.filter((item)=>{
                    return item.id === element.project.id
                })

                project[0].teamSize = 0;
                this.api.put(this.urlProjects, project[0]).subscribe(() => {
                    this.populateTable();
                });
            })
        });
    }
}