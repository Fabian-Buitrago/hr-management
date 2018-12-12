import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiService } from 'src/app/core/api.service';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: [ './employee-list.component.scss' ],
})
export class EmployeeListComponent implements OnInit {
    url = 'api/employees';
    displayedColumns = [ 'id', 'name', 'company', 'age', 'birthday', 'favoriteColor', 'project', 'action' ];
    dataSource: MatTableDataSource<IEmployee>;
  
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private api: ApiService) {}

	ngOnInit() {
        this.populateTable();
    }

    populateTable(){
        this.api.get(this.url).subscribe((employees) => {
            this.dataSource = new MatTableDataSource<IEmployee>(employees);
            this.dataSource.paginator = this.paginator;
        });
    }
    
    delete(id){
        this.api.delete(`${this.url}/${id}`).subscribe((data) => {
            this.populateTable();
        })
    }
}