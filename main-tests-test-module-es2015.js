(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-tests-test-module"],{

/***/ "+7bk":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/tests/test.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-layout blank p-24\" fusePerfectScrollbar>\n\n    <h2>{{'HOME.TITLE' | translate}}</h2>\n\n    <div [translate]=\"'HOME.TITLE'\"></div>\n\n    <div>{{(company!=null?company.tenDonVi:'')}}</div>\n    <div>{{(user!=null?user.userName:'')}}</div>\n    <div>{{iddv}}</div>\n    \n    <div class=\"px-8 px-md-16\">\n        <a style=\"cursor: pointer;\" (click)=\"openDialog()\"> Chọn dự án </a>\n    </div>\n\n    <imis-test-mat-table [titleComponent]=\"titleChildComponent\" (msgChanged)=\"reviceMsgFromChile($event)\"></imis-test-mat-table>\n\n</div>");

/***/ }),

/***/ "2IIo":
/*!***************************************!*\
  !*** ./src/app/main/tests/i18n/tr.ts ***!
  \***************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'tr',
    data: {
        'HOME': {
            'TITLE': 'Merhaba Dünya!'
        }
    }
};


/***/ }),

/***/ "442m":
/*!***************************************!*\
  !*** ./src/app/main/tests/i18n/vi.ts ***!
  \***************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'vi',
    data: {
        'HOME': {
            'TITLE': 'Xin chào!'
        }
    }
};


/***/ }),

/***/ "M7ey":
/*!*******************************************!*\
  !*** ./src/app/main/tests/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test.component */ "mVpo");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _test_mat_table_test_mat_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-mat-table/test-mat-table.component */ "ksgY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");











// import { MatCheckboxModule } from '@angular/material';
const routes = [
    {
        path: '',
        component: _test_component__WEBPACK_IMPORTED_MODULE_5__["TestComponent"]
    }
];
let TestModule = class TestModule {
};
TestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _test_component__WEBPACK_IMPORTED_MODULE_5__["TestComponent"],
            _test_mat_table_test_mat_table_component__WEBPACK_IMPORTED_MODULE_7__["TestMatTableComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"]
        ],
    })
], TestModule);



/***/ }),

/***/ "OjCo":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/tests/test-mat-table/test-mat-table.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{title}}</h1>\n\n<div>\n    <section>\n        <div class=\"example-button-row\">\n            <button mat-raised-button color=\"primary\" (click)=\"btnChangeData($event)\">Send Event to Parent</button>\n            <button mat-raised-button color=\"primary\" (click)=\"btnTest()\">Test</button>\n            <!-- <button mat-raised-button disabled>Xóa</button> -->\n        </div>\n    </section>\n</div>\n<div>\n    <table mat-table [dataSource]=\"myDataArray\" class=\"mat-elevation-z8\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"position\">\n            <th mat-header-cell *matHeaderCellDef> No. </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"weight\">\n            <th mat-header-cell *matHeaderCellDef> Weight </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"symbol\">\n            <th mat-header-cell *matHeaderCellDef> Symbol </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"selected\">\n            <th mat-header-cell *matHeaderCellDef> Selected </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <mat-checkbox (click)=\"$event.stopPropagation()\"\n                            (change)=\"optChange($event, element.position)\"\n                            [checked]=\"element.selected\">\n              </mat-checkbox>\n            </td>\n          </ng-container>\n\n        <!-- <ng-container matColumnDef=\"select\">\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n              </mat-checkbox>\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n              <mat-checkbox (click)=\"$event.stopPropagation()\"\n                            (change)=\"$event ? selection.toggle(row) : null\"\n                            [checked]=\"selection.isSelected(row)\">\n              </mat-checkbox>\n            </td>\n          </ng-container> -->\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n</div>");

/***/ }),

/***/ "ksgY":
/*!***********************************************************************!*\
  !*** ./src/app/main/tests/test-mat-table/test-mat-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: TestMatTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMatTableComponent", function() { return TestMatTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_mat_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test-mat-table.component.html */ "OjCo");
/* harmony import */ var _test_mat_table_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-mat-table.component.scss */ "psHm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");





const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', selected: true },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', selected: false },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', selected: true },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', selected: false },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', selected: true },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', selected: true },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', selected: false },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', selected: true },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', selected: true },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', selected: true },
];
let TestMatTableComponent = class TestMatTableComponent {
    constructor() {
        this.msgChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'selected'];
    }
    // dataSource = new MatTableDataSource(ELEMENT_DATA);
    ngOnInit() {
        this.myDataArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA);
    }
    btnTest() {
        // this.myDataArray.filteredData = this.myDataArray.filteredData.filter(item => item.position !== 1);
        console.log(this.myDataArray.filteredData);
    }
    btnChangeData(event) {
        // this.msgChanged.emit(event);
        this.msgChanged.emit('event');
    }
    optChange(e, position) {
        console.log(position, e.checked);
    }
};
TestMatTableComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['titleComponent',] }],
    msgChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
TestMatTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'imis-test-mat-table',
        template: _raw_loader_test_mat_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_mat_table_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestMatTableComponent);



/***/ }),

/***/ "mVpo":
/*!**********************************************!*\
  !*** ./src/app/main/tests/test.component.ts ***!
  \**********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test.component.html */ "+7bk");
/* harmony import */ var _test_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.component.scss */ "qbLq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/translation-loader.service */ "gPJw");
/* harmony import */ var _i18n_vi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/vi */ "442m");
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./i18n/en */ "xpJb");
/* harmony import */ var _i18n_tr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18n/tr */ "2IIo");
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/services */ "ZF+8");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











let TestComponent = class TestComponent {
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(_fuseTranslationLoaderService, _router, _dialog, _authService) {
        this._fuseTranslationLoaderService = _fuseTranslationLoaderService;
        this._router = _router;
        this._dialog = _dialog;
        this._authService = _authService;
        this.titleChildComponent = 'Test mat-table component';
        this._fuseTranslationLoaderService.loadTranslations(_i18n_vi__WEBPACK_IMPORTED_MODULE_5__["locale"], _i18n_en__WEBPACK_IMPORTED_MODULE_6__["locale"], _i18n_tr__WEBPACK_IMPORTED_MODULE_7__["locale"]);
        _authService._authUser.subscribe(user => {
            this.user = user;
        });
        _authService._curCompany.subscribe(company => {
            this.company = company;
        });
    }
    loadData() {
        this.iddv = this.company.idDonVi;
        console.log(this.iddv);
    }
    openDialog() {
        // const dialogRef = this._dialog.open(TimKiemDuAnDiaLogComponent, { width: '750px', height: '600px' });
        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed', result);
        //     // this.company = this._authService.company;
        //     // window.location.href = window.location.href;
        //     // window.location.reload();
        //     // this._router.navigateByUrl('/home');
        //     // this._router.navigate(['/home']);
        // });
    }
    reviceMsgFromChile(msg) {
        console.log(msg);
    }
    ngOnInit() {
        this.loadData();
    }
    ngOnDestroy() {
    }
};
TestComponent.ctorParameters = () => [
    { type: _fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["FuseTranslationLoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
TestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'imis-test',
        template: _raw_loader_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_fuse_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["FuseTranslationLoaderService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
        _app_shared_services__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
], TestComponent);



/***/ }),

/***/ "psHm":
/*!*************************************************************************!*\
  !*** ./src/app/main/tests/test-mat-table/test-mat-table.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGVzdC1tYXQtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoidGVzdC1tYXQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */");

/***/ }),

/***/ "qbLq":
/*!************************************************!*\
  !*** ./src/app/main/tests/test.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "xpJb":
/*!***************************************!*\
  !*** ./src/app/main/tests/i18n/en.ts ***!
  \***************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'en',
    data: {
        'HOME': {
            'TITLE': 'Hello world!'
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=main-tests-test-module-es2015.js.map