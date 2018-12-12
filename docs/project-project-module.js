(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./src/app/project/components/project-form/project-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/project/components/project-form/project-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-container\">\n    <form [formGroup]=\"projectForm\" novalidate (ngSubmit)=\"onSubmit()\">\n        <h2>{{hasIdProperty ? 'Update' : 'Create'}} Project</h2>\n\n        <div class=\"project-content-form\">\n            <mat-form-field>\n                <input autofocus type=\"text\" matInput placeholder=\"Name\" formControlName=\"name\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input autofocus type=\"text\" matInput placeholder=\"Client Name\" formControlName=\"clientName\">\n            </mat-form-field>\n        </div>\n\n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!projectForm.valid\">{{hasIdProperty ? 'Update' : 'Create'}}</button>\n        <button type=\"button\" mat-raised-button (click)=\"refresh()\">Cancel</button>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/project/components/project-form/project-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/project/components/project-form/project-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-container {\n  display: flex;\n  justify-content: center; }\n  .project-container form {\n    width: 50%; }\n  .project-container button {\n    float: right;\n    margin: 10px 10px 0px; }\n  .project-content-form {\n  padding: 20px;\n  background: #fff;\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9jb21wb25lbnRzL3Byb2plY3QtZm9ybS9DOlxcVXNlcnNcXGZidWl0cmFnb3ZcXERvY3VtZW50c1xcYm9vdGNhbXBcXGhyLW1hbmFnZW1lbnQvc3JjXFxhcHBcXHByb2plY3RcXGNvbXBvbmVudHNcXHByb2plY3QtZm9ybVxccHJvamVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QixFQVUxQjtFQVpEO0lBS1EsV0FBVSxFQUNiO0VBTkw7SUFTUSxhQUFZO0lBQ1osc0JBQXFCLEVBQ3hCO0VBR0w7RUFDSSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYix1QkFBc0IsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L2NvbXBvbmVudHMvcHJvamVjdC1mb3JtL3Byb2plY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBmb3Jte1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNvbnRlbnQtZm9ybXtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project/components/project-form/project-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/project/components/project-form/project-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFormComponent", function() { return ProjectFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/api.service */ "./src/app/core/api.service.ts");





var ProjectFormComponent = /** @class */ (function () {
    function ProjectFormComponent(api, fb, router, activatedRoute) {
        var _this = this;
        this.api = api;
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.urlProjects = 'api/projects';
        this.currentProject = {};
        this.activatedRoute.params.subscribe(function (res) {
            if (res.id) {
                _this.fillFields(res.id);
            }
        });
        this.projectForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ProjectFormComponent.prototype.fillFields = function (id) {
        var _this = this;
        this.api.get(this.urlProjects + "/" + id).subscribe(function (data) {
            _this.currentProject = data;
            _this.projectForm.patchValue(data);
            _this.projectForm.get('name').disable();
        });
    };
    ProjectFormComponent.prototype.ngOnInit = function () {
    };
    ProjectFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var project = this.projectForm.value;
        console.log(this.currentProject['teamSize']);
        project.teamSize = this.currentProject['teamSize'] ? this.currentProject['teamSize'] : 0;
        if (this.hasIdProperty) {
            project.id = this.currentProject['id'];
            this.api.put(this.urlProjects, project).subscribe(function (data) {
                _this.refresh();
            });
        }
        else {
            this.api.post(this.urlProjects, project).subscribe(function (data) {
                _this.refresh();
            });
        }
    };
    Object.defineProperty(ProjectFormComponent.prototype, "hasIdProperty", {
        get: function () {
            return this.currentProject.hasOwnProperty('id');
        },
        enumerable: true,
        configurable: true
    });
    ProjectFormComponent.prototype.refresh = function () {
        this.router.navigate(['/dashboard/project']);
    };
    ProjectFormComponent.prototype.compareFn = function (value1, value2) {
        return value1 && value2 ? value1.id === value2.id : value1 === value2;
    };
    ProjectFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-form',
            template: __webpack_require__(/*! ./project-form.component.html */ "./src/app/project/components/project-form/project-form.component.html"),
            styles: [__webpack_require__(/*! ./project-form.component.scss */ "./src/app/project/components/project-form/project-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProjectFormComponent);
    return ProjectFormComponent;
}());



/***/ }),

/***/ "./src/app/project/components/project-list/project-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/project/components/project-list/project-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  \n    <div class=\"button-row clearfix\">\n      <button mat-raised-button color=\"primary\" [routerLink]=\"['./projectForm']\">Create</button>\n    </div>\n  \n    <h1>Projects</h1>\n  \n    <table mat-table [dataSource]=\"dataSource\">\n  \n      <!-- Id Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n  \n      <!-- Team Size Column -->\n      <ng-container matColumnDef=\"teamSize\">\n        <th mat-header-cell *matHeaderCellDef> Team Size </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.teamSize}} </td>\n      </ng-container>\n  \n      <!-- Client Name Column -->\n      <ng-container matColumnDef=\"clientName\">\n        <th mat-header-cell *matHeaderCellDef> Client Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.clientName}} </td>\n      </ng-container>\n\n          <!-- Action Column -->\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> Action </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-icon [routerLink]=\"['./projectForm', element.id]\">edit</mat-icon>\n          <mat-icon (click)=\"delete(element.id)\" *ngIf=\"element.teamSize <= 0\">delete</mat-icon>\n        </td>\n      </ng-container>\n  \n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/project/components/project-list/project-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/project/components/project-list/project-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-elevation-z8 {\n  padding: 40px 40px 0px; }\n\n.button-row button {\n  margin: 10px 0px;\n  float: right; }\n\nmat-icon {\n  cursor: pointer; }\n\nmat-icon:hover {\n    color: #3f51b5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9jb21wb25lbnRzL3Byb2plY3QtbGlzdC9DOlxcVXNlcnNcXGZidWl0cmFnb3ZcXERvY3VtZW50c1xcYm9vdGNhbXBcXGhyLW1hbmFnZW1lbnQvc3JjXFxhcHBcXHByb2plY3RcXGNvbXBvbmVudHNcXHByb2plY3QtbGlzdFxccHJvamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGFBQVksRUFDYjs7QUFFRDtFQUNJLGdCQUFlLEVBS2xCOztBQU5EO0lBSVEsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvY29tcG9uZW50cy9wcm9qZWN0LWxpc3QvcHJvamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZWxldmF0aW9uLXo4IHtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweCAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbm1hdC1pY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project/components/project-list/project-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/project/components/project-list/project-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/api.service */ "./src/app/core/api.service.ts");




var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(api) {
        this.api = api;
        this.url = 'api/projects';
        this.displayedColumns = ['id', 'name', 'teamSize', 'clientName', 'action'];
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.populateTable();
    };
    ProjectListComponent.prototype.populateTable = function () {
        var _this = this;
        this.api.get(this.url).subscribe(function (projects) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](projects);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    ProjectListComponent.prototype.delete = function (id) {
        var _this = this;
        this.api.delete(this.url + "/" + id).subscribe(function (data) {
            _this.populateTable();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ProjectListComponent.prototype, "paginator", void 0);
    ProjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/project/components/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.scss */ "./src/app/project/components/project-list/project-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/project/project-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/project/project-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/project-list/project-list.component */ "./src/app/project/components/project-list/project-list.component.ts");
/* harmony import */ var _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project-form/project-form.component */ "./src/app/project/components/project-form/project-form.component.ts");





var routes = [
    { path: '', component: _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectListComponent"] },
    { path: 'projectForm', component: _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__["ProjectFormComponent"] },
    { path: 'projectForm/:id', component: _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__["ProjectFormComponent"] }
];
var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/project/project.module.ts":
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_core_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project-form/project-form.component */ "./src/app/project/components/project-form/project-form.component.ts");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/project/project-routing.module.ts");
/* harmony import */ var _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project-list/project-list.component */ "./src/app/project/components/project-list/project-list.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__["ProjectFormComponent"],
                _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_6__["ProjectListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _project_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [src_app_core_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-module.js.map