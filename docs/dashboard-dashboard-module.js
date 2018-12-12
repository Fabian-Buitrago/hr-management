(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/dashboard/sidenav/sidenav.component.ts");





var routes = [
    {
        path: '',
        component: _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"],
        children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            { path: 'employee', loadChildren: './../employee/employee.module#EmployeeModule' },
            { path: 'project', loadChildren: './../project/project.module#ProjectModule' },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/dashboard/sidenav/sidenav.component.ts");







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [routerLink]=\"['./project']\">\r\n    <h1>Projects</h1>\r\n    <mat-icon>folder_special</mat-icon>\r\n</mat-card>\r\n\r\n<mat-card [routerLink]=\"['./employee']\">\r\n    <h1>Employees</h1>\r\n    <mat-icon>face</mat-icon>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  min-height: 100vh; }\n\nmat-card {\n  top: -40px;\n  width: 189px;\n  margin: auto;\n  text-align: center;\n  cursor: pointer; }\n\nmat-card:hover {\n    background: lightblue; }\n\nmat-icon {\n  width: 100%;\n  height: auto;\n  font-size: 100px;\n  color: #3f51b5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9DOlxcVXNlcnNcXGZidWl0cmFnb3ZcXERvY3VtZW50c1xcYm9vdGNhbXBcXGhyLW1hbmFnZW1lbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksV0FBVTtFQUNWLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGdCQUFlLEVBS2xCOztBQVZEO0lBUVEsc0JBQXFCLEVBQ3hCOztBQUdMO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG4gICAgdG9wOiAtNDBweDtcclxuICAgIHdpZHRoOiAxODlweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgIH1cclxufVxyXG5cclxubWF0LWljb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { map } from 'rxjs/operators';
// import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/sidenav/sidenav.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/sidenav/sidenav.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer mode=\"side\"  fixedInViewport=\"true\" >\n    <mat-toolbar>HR MANAGEMENT</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item [routerLink]=\"['./employee']\" (click)=\"drawer.toggle()\">Employees</a>\n      <a mat-list-item [routerLink]=\"['./project']\" (click)=\"drawer.toggle()\">Projects</a>\n      <a mat-list-item (click)=\"logout()\">Logout</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" mat-icon-button (click)=\"drawer.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/dashboard/sidenav/sidenav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/sidenav/sidenav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-nav-list {\n  min-width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NpZGVuYXYvQzpcXFVzZXJzXFxmYnVpdHJhZ292XFxEb2N1bWVudHNcXGJvb3RjYW1wXFxoci1tYW5hZ2VtZW50L3NyY1xcYXBwXFxkYXNoYm9hcmRcXHNpZGVuYXZcXHNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1uYXYtbGlzdHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/sidenav/sidenav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/sidenav/sidenav.component.ts ***!
  \********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/authentication.service */ "./src/app/core/authentication.service.ts");



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/dashboard/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/dashboard/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map