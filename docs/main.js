(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 50px 30%;\n}\n\n.head {\n  height: 100px;\n  background: #f9f9f9;\n  border-bottom: 1px solid #d6d6d6;\n}\n\n.head img {\n  margin-top: 20px;\n  padding: 5px;\n  border: 1px solid #d6d6d6;\n  background-color: #ffffff;\n}\n\n.detail {\n  padding-top: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNTBweCAzMCU7XG59XG5cbi5oZWFkIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQ2ZDY7XG59XG5cbi5oZWFkIGltZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q2ZDZkNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRldGFpbCB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <c-card class=\"u-text--centered\">\n    <div class=\"head\">\n      <img\n        class=\"u-image--rounded\"\n        *ngIf=\"user?.picture\"\n        [src]=\"user?.picture\"\n      />\n    </div>\n    <div class=\"detail\">\n      <c-tabs>\n        <c-tab\n          [src]=\"'./assets/icons/svg/misc/user.svg'\"\n          [description]=\"'Hi, My name is'\"\n          [value]=\"user?.name\"\n        >\n        </c-tab>\n        <c-tab\n          [src]=\"'./assets/icons/svg/misc/email.svg'\"\n          [description]=\"'My email address is'\"\n          [value]=\"user?.email\"\n        >\n        </c-tab>\n        <c-tab\n          [src]=\"'./assets/icons/svg/misc/calendar.svg'\"\n          [description]=\"'My birthday is'\"\n          [value]=\"user?.dob\"\n        >\n        </c-tab>\n        <c-tab\n          [src]=\"'./assets/icons/svg/misc/map-location.svg'\"\n          [description]=\"'My address is'\"\n          [value]=\"user?.address\"\n        >\n        </c-tab>\n        <c-tab\n          [src]=\"'./assets/icons/svg/misc/call.svg'\"\n          [description]=\"'My phone number is'\"\n          [value]=\"user?.cell\"\n        >\n        </c-tab>\n        <c-tab\n          [src]=\"'./assets/icons/svg/misc/locked.svg'\"\n          [description]=\"'My password is'\"\n          [value]=\"user?.password\"\n        >\n        </c-tab>\n      </c-tabs>\n    </div>\n  </c-card>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .fetchUser()
            .subscribe(function (data) { return (_this.user = _this.mapToUser(data.results[0])); }, function (err) { return console.error(err); });
    };
    AppComponent.prototype.mapToUser = function (user) {
        return {
            name: user.name.first + " " + user.name.last,
            email: user.email,
            dob: this.formatDate(new Date(user.dob.date)),
            cell: user.cell,
            address: user.location.postcode + " - " + user.location.street,
            password: user.login.password,
            picture: user.picture.large
        };
    };
    AppComponent.prototype.formatDate = function (date) {
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_c_card_c_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/c-card/c-card.component */ "./src/app/components/c-card/c-card.component.ts");
/* harmony import */ var _components_c_tabs_c_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/c-tabs/c-tabs.component */ "./src/app/components/c-tabs/c-tabs.component.ts");
/* harmony import */ var _components_c_tab_c_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/c-tab/c-tab.component */ "./src/app/components/c-tab/c-tab.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_c_card_c_card_component__WEBPACK_IMPORTED_MODULE_4__["CCardComponent"], _components_c_tabs_c_tabs_component__WEBPACK_IMPORTED_MODULE_5__["CTabsComponent"], _components_c_tab_c_tab_component__WEBPACK_IMPORTED_MODULE_6__["CTabComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/c-card/c-card.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/c-card/c-card.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c-card {\n  background-color: #fff;\n  border: 1px solid #ced9e1;\n  color: #262626;\n  max-width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jLWNhcmQvYy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jLWNhcmQvYy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYy1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDllMTtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/c-card/c-card.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/c-card/c-card.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-card\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/components/c-card/c-card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/c-card/c-card.component.ts ***!
  \*******************************************************/
/*! exports provided: CCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CCardComponent", function() { return CCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CCardComponent = /** @class */ (function () {
    function CCardComponent() {
    }
    CCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "c-card",
            template: __webpack_require__(/*! ./c-card.component.html */ "./src/app/components/c-card/c-card.component.html"),
            styles: [__webpack_require__(/*! ./c-card.component.css */ "./src/app/components/c-card/c-card.component.css")]
        })
    ], CCardComponent);
    return CCardComponent;
}());



/***/ }),

/***/ "./src/app/components/c-tab/c-tab.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/c-tab/c-tab.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYy10YWIvYy10YWIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/c-tab/c-tab.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/c-tab/c-tab.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!active\">\n  <p class=\"c-card__subtitle u-margin--none\">\n    {{ description }}\n  </p>\n  <p class=\"c-card__title u-text--lg\">{{ value }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/c-tab/c-tab.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/c-tab/c-tab.component.ts ***!
  \*****************************************************/
/*! exports provided: CTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTabComponent", function() { return CTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _c_tabs_c_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../c-tabs/c-tabs.component */ "./src/app/components/c-tabs/c-tabs.component.ts");



var CTabComponent = /** @class */ (function () {
    function CTabComponent(tabs) {
        tabs.add(this);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CTabComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CTabComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CTabComponent.prototype, "value", void 0);
    CTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "c-tab",
            template: __webpack_require__(/*! ./c-tab.component.html */ "./src/app/components/c-tab/c-tab.component.html"),
            styles: [__webpack_require__(/*! ./c-tab.component.css */ "./src/app/components/c-tab/c-tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_c_tabs_c_tabs_component__WEBPACK_IMPORTED_MODULE_2__["CTabsComponent"]])
    ], CTabComponent);
    return CTabComponent;
}());



/***/ }),

/***/ "./src/app/components/c-tabs/c-tabs.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/c-tabs/c-tabs.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  display: inline;\n  text-decoration: none;\n  padding: 15px;\n  cursor: pointer;\n}\n\nli:hover {\n  background-color: #439539;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jLXRhYnMvYy10YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jLXRhYnMvYy10YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzOTUzOTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/c-tabs/c-tabs.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/c-tabs/c-tabs.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n<ul>\n  <li *ngFor=\"let tab of tabs\" (mouseenter)=\"selectTab(tab)\">\n    <img class=\"u-image--24\" src=\"{{ tab.src }}\" />\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/c-tabs/c-tabs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/c-tabs/c-tabs.component.ts ***!
  \*******************************************************/
/*! exports provided: CTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTabsComponent", function() { return CTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CTabsComponent = /** @class */ (function () {
    function CTabsComponent() {
        this.tabs = [];
    }
    CTabsComponent.prototype.add = function (tab) {
        if (this.tabs.length === 0)
            tab.active = true;
        this.tabs.push(tab);
    };
    CTabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (t) {
            t.active = false;
        });
        tab.active = true;
    };
    CTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "c-tabs",
            template: __webpack_require__(/*! ./c-tabs.component.html */ "./src/app/components/c-tabs/c-tabs.component.html"),
            styles: [__webpack_require__(/*! ./c-tabs.component.css */ "./src/app/components/c-tabs/c-tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CTabsComponent);
    return CTabsComponent;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.fetchUser = function () {
        return this.http.get("https://randomuser.me/api/");
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/siseko/fooling-around/osiris-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map