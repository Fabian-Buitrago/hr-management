(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "./src/app/employee/components/employee-form/employee-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/employee/components/employee-form/employee-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"employee-container\">\n    <form [formGroup]=\"employeeForm\" novalidate (ngSubmit)=\"onSubmit()\">\n        <h2>{{hasIdProperty ? 'Update' : 'Create'}} Employee</h2>\n\n        <div class=\"employee-content-form\">\n            <mat-form-field>\n                <input autofocus type=\"text\" matInput placeholder=\"Name\" formControlName=\"name\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"Company\" formControlName=\"company\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"number\" matInput placeholder=\"Age\" formControlName=\"age\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Birthday\" formControlName=\"birthday\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n\n            <mat-form-field>\n                <mat-select placeholder=\"Favorite color\" [compareWith]=\"compareFn\" formControlName=\"favoriteColor\">\n                    <mat-option *ngFor=\"let color of colors\" [value]=\"color\">\n                        {{color.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <mat-form-field>\n                <mat-select placeholder=\"Project\" [compareWith]=\"compareFn\" formControlName=\"project\">\n                    <mat-option *ngFor=\"let project of projects\" [value]=\"project\">\n                        {{project.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!employeeForm.valid\">{{hasIdProperty ? 'Update' : 'Create'}}</button>\n        <button type=\"button\" mat-raised-button (click)=\"refresh()\">Cancel</button>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/employee/components/employee-form/employee-form.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/employee/components/employee-form/employee-form.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-container {\n  display: flex;\n  justify-content: center; }\n  .employee-container form {\n    width: 50%; }\n  .employee-container button {\n    float: right;\n    margin: 10px 10px 0px; }\n  .employee-content-form {\n  padding: 20px;\n  background: #fff;\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvY29tcG9uZW50cy9lbXBsb3llZS1mb3JtL0M6XFxVc2Vyc1xcZmJ1aXRyYWdvdlxcRG9jdW1lbnRzXFxib290Y2FtcFxcaHItbWFuYWdlbWVudC9zcmNcXGFwcFxcZW1wbG95ZWVcXGNvbXBvbmVudHNcXGVtcGxveWVlLWZvcm1cXGVtcGxveWVlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isd0JBQXVCLEVBVTFCO0VBWkQ7SUFLUSxXQUFVLEVBQ2I7RUFOTDtJQVNRLGFBQVk7SUFDWixzQkFBcUIsRUFDeEI7RUFHTDtFQUNJLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLHVCQUFzQixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2NvbXBvbmVudHMvZW1wbG95ZWUtZm9ybS9lbXBsb3llZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcGxveWVlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBmb3Jte1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXBsb3llZS1jb250ZW50LWZvcm17XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/employee/components/employee-form/employee-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/employee/components/employee-form/employee-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFormComponent", function() { return EmployeeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/api.service */ "./src/app/core/api.service.ts");





var EmployeeFormComponent = /** @class */ (function () {
    function EmployeeFormComponent(api, fb, router, activatedRoute) {
        var _this = this;
        this.api = api;
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.urlEmployees = 'api/employees';
        this.urlProjects = 'api/projects';
        this.urlColors = 'api/colors';
        this.currentEmployee = {};
        this.projects = [];
        this.colors = [];
        this.activatedRoute.params.subscribe(function (res) {
            if (res.id) {
                _this.fillFields(res.id);
            }
        });
        this.employeeForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            birthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            favoriteColor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            project: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    EmployeeFormComponent.prototype.fillFields = function (id) {
        var _this = this;
        this.api.get(this.urlEmployees + "/" + id).subscribe(function (data) {
            _this.currentEmployee = data;
            _this.employeeForm.patchValue(data);
        });
    };
    EmployeeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get(this.urlProjects).subscribe(function (data) {
            _this.projects = data;
        });
        this.api.get(this.urlColors).subscribe(function (data) {
            _this.colors = data;
        });
    };
    EmployeeFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var employee = this.employeeForm.value;
        employee.project = {
            id: employee.project.id,
            name: employee.project.name
        };
        if (this.hasIdProperty) {
            employee.id = this.currentEmployee['id'];
            this.updateTeamSize(employee);
            this.api.put(this.urlEmployees, employee).subscribe(function (data) {
                _this.refresh();
            });
        }
        else {
            this.api.get(this.urlProjects + "/" + employee.project.id).subscribe(function (project) {
                project.teamSize = project.teamSize + 1;
                _this.api.put(_this.urlProjects, project).subscribe(console.log);
            });
            this.api.post(this.urlEmployees, employee).subscribe(function (data) {
                _this.refresh();
            });
        }
    };
    Object.defineProperty(EmployeeFormComponent.prototype, "hasIdProperty", {
        get: function () {
            return this.currentEmployee.hasOwnProperty('id');
        },
        enumerable: true,
        configurable: true
    });
    EmployeeFormComponent.prototype.updateTeamSize = function (employee) {
        var _this = this;
        var currentEmployeeId = this.currentEmployee['project']['id'];
        var currentEmployeeFormId = employee.project.id;
        if (currentEmployeeId !== currentEmployeeFormId) {
            this.api.get(this.urlProjects)
                .subscribe(function (projects) {
                var projectArray = projects.filter(function (item) {
                    if (item.id === currentEmployeeId) {
                        item.teamSize = item.teamSize - 1;
                    }
                    else if (item.id === currentEmployeeFormId) {
                        item.teamSize = item.teamSize + 1;
                    }
                    return item.id === currentEmployeeId || item.id === currentEmployeeFormId;
                });
                _this.api.put(_this.urlProjects, projectArray[0]).subscribe(console.log);
                _this.api.put(_this.urlProjects, projectArray[1]).subscribe(console.log);
            });
        }
    };
    EmployeeFormComponent.prototype.refresh = function () {
        this.router.navigate(['/dashboard/employee']);
    };
    EmployeeFormComponent.prototype.compareFn = function (value1, value2) {
        return value1 && value2 ? value1.id === value2.id : value1 === value2;
    };
    EmployeeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-form',
            template: __webpack_require__(/*! ./employee-form.component.html */ "./src/app/employee/components/employee-form/employee-form.component.html"),
            styles: [__webpack_require__(/*! ./employee-form.component.scss */ "./src/app/employee/components/employee-form/employee-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EmployeeFormComponent);
    return EmployeeFormComponent;
}());



/***/ }),

/***/ "./src/app/employee/components/employee-list/employee-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/employee/components/employee-list/employee-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  \n  <div class=\"button-row clearfix\">\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['./employeeForm']\">Create</button>\n  </div>\n\n  <h1>Employees</h1>\n\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Company Column -->\n    <ng-container matColumnDef=\"company\">\n      <th mat-header-cell *matHeaderCellDef> Company </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.company}} </td>\n    </ng-container>\n\n    <!-- Age Column -->\n    <ng-container matColumnDef=\"age\">\n      <th mat-header-cell *matHeaderCellDef> Age </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.age}} </td>\n    </ng-container>\n\n     <!-- Birthday Column -->\n     <ng-container matColumnDef=\"birthday\">\n      <th mat-header-cell *matHeaderCellDef> Birthday </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.birthday | date: 'dd/MM/yyyy' }} </td>\n    </ng-container>\n\n    <!-- Favorite Color Column -->\n    <ng-container matColumnDef=\"favoriteColor\">\n      <th mat-header-cell *matHeaderCellDef> Favorite Color </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.favoriteColor.name}} </td>\n    </ng-container>\n\n    <!-- Project Column -->\n    <ng-container matColumnDef=\"project\">\n      <th mat-header-cell *matHeaderCellDef> Project </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.project.name}} </td>\n    </ng-container>\n\n    <!-- Action Column -->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef> Action </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-icon [routerLink]=\"['./employeeForm', element.id]\">edit</mat-icon>\n        <mat-icon (click)=\"delete(element.id, element)\">delete</mat-icon>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/employee/components/employee-list/employee-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/employee/components/employee-list/employee-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-elevation-z8 {\n  padding: 40px 40px 0px; }\n\n.button-row button {\n  margin: 10px 0px;\n  float: right; }\n\nmat-icon {\n  cursor: pointer; }\n\nmat-icon:hover {\n    color: #3f51b5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvY29tcG9uZW50cy9lbXBsb3llZS1saXN0L0M6XFxVc2Vyc1xcZmJ1aXRyYWdvdlxcRG9jdW1lbnRzXFxib290Y2FtcFxcaHItbWFuYWdlbWVudC9zcmNcXGFwcFxcZW1wbG95ZWVcXGNvbXBvbmVudHNcXGVtcGxveWVlLWxpc3RcXGVtcGxveWVlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsYUFBWSxFQUNiOztBQUVEO0VBQ0ksZ0JBQWUsRUFLbEI7O0FBTkQ7SUFJUSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvY29tcG9uZW50cy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejgge1xyXG4gICAgcGFkZGluZzogNDBweCA0MHB4IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxubWF0LWljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/employee/components/employee-list/employee-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/employee/components/employee-list/employee-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/api.service */ "./src/app/core/api.service.ts");




var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(api) {
        this.api = api;
        this.urlEmployees = 'api/employees';
        this.urlProjects = 'api/projects';
        this.displayedColumns = ['id', 'name', 'company', 'age', 'birthday', 'favoriteColor', 'project', 'action'];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.populateTable();
    };
    EmployeeListComponent.prototype.populateTable = function () {
        var _this = this;
        this.api.get(this.urlEmployees).subscribe(function (employees) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](employees);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    EmployeeListComponent.prototype.delete = function (id, element) {
        var _this = this;
        this.api.delete(this.urlEmployees + "/" + id)
            .subscribe(function () {
            _this.api.get(_this.urlProjects)
                .subscribe(function (projects) {
                var project = projects.filter(function (item) {
                    return item.id === element.project.id;
                });
                project[0].teamSize = 0;
                _this.api.put(_this.urlProjects, project[0]).subscribe(function () {
                    _this.populateTable();
                });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EmployeeListComponent.prototype, "paginator", void 0);
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/employee/components/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.scss */ "./src/app/employee/components/employee-list/employee-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee/employee-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/employee/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee-form/employee-form.component */ "./src/app/employee/components/employee-form/employee-form.component.ts");





var routes = [
    { path: '', component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"] },
    { path: 'employeeForm', component: _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeFormComponent"] },
    { path: 'employeeForm/:id', component: _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeFormComponent"] }
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/employee/employee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/employee/employee-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/employee/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-form/employee-form.component */ "./src/app/employee/components/employee-form/employee-form.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"],
                _components_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [_core_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ })

}]);
//# sourceMappingURL=employee-employee-module.js.map