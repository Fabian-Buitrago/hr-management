(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notfound-notfound-module"],{

/***/ "./src/app/notfound/notfound-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notfound/notfound-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NotfoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundRoutingModule", function() { return NotfoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound/notfound.component.ts");




var routes = [
    { path: '', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"] },
];
var NotfoundRoutingModule = /** @class */ (function () {
    function NotfoundRoutingModule() {
    }
    NotfoundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotfoundRoutingModule);
    return NotfoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.module.ts":
/*!*********************************************!*\
  !*** ./src/app/notfound/notfound.module.ts ***!
  \*********************************************/
/*! exports provided: NotfoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundModule", function() { return NotfoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notfound_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound-routing.module */ "./src/app/notfound/notfound-routing.module.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound/notfound.component.ts");





var NotfoundModule = /** @class */ (function () {
    function NotfoundModule() {
    }
    NotfoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _notfound_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotfoundRoutingModule"]
            ]
        })
    ], NotfoundModule);
    return NotfoundModule;
}());



/***/ }),

/***/ "./src/app/notfound/notfound/notfound.component.html":
/*!***********************************************************!*\
  !*** ./src/app/notfound/notfound/notfound.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\n<p>Oops! Something is wrong. {{countdown}}</p>"

/***/ }),

/***/ "./src/app/notfound/notfound/notfound.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/notfound/notfound/notfound.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500);\n.button {\n  font-weight: 300;\n  color: #fff;\n  font-size: 1.2em;\n  text-decoration: none;\n  border: 1px solid #efefef;\n  padding: .5em;\n  border-radius: 3px;\n  float: left;\n  margin: 6em 0 0 -155px;\n  left: 50%;\n  position: relative;\n  transition: all .3s linear; }\n.button:hover {\n  background-color: #007aff;\n  color: #fff; }\np {\n  font-size: 2em;\n  text-align: center;\n  font-weight: 100; }\nh1 {\n  text-align: center;\n  font-size: 15em;\n  font-weight: 100; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQvQzpcXFVzZXJzXFxmYnVpdHJhZ292XFxEb2N1bWVudHNcXGJvb3RjYW1wXFxoci1tYW5hZ2VtZW50L3NyY1xcYXBwXFxub3Rmb3VuZFxcbm90Zm91bmRcXG5vdGZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFZO0FBRVo7RUFDRSxpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLHVCQUFzQjtFQUN0QixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLDJCQUEwQixFQUMzQjtBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLFlBQVcsRUFDWjtBQUVEO0VBQ0UsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMTAwLDMwMCw1MDApO1xyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gIHBhZGRpbmc6IC41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogNmVtIDAgMCAtMTU1cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FmZjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/notfound/notfound/notfound.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/notfound/notfound/notfound.component.ts ***!
  \*********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent(router) {
        this.router = router;
        this.COUNTDOWN_INTERVAL = 1000;
        this.TRANSITION_SECONDS = 5;
    }
    NotfoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countdown = this.TRANSITION_SECONDS;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.COUNTDOWN_INTERVAL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(this.TRANSITION_SECONDS)).subscribe(function () {
            _this.countdown--;
        }, null, function () { return _this.goToLogin(); });
    };
    NotfoundComponent.prototype.goToLogin = function () {
        this.router.navigate(['login']);
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/notfound/notfound/notfound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ })

}]);
//# sourceMappingURL=notfound-notfound-module.js.map