var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var toast_service_1 = require('../services/toast.service');
var ToastComponent = (function () {
    function ToastComponent(toastService) {
        this._defaults = {
            title: '',
            message: 'May the Force be with You'
        };
        toastService.activate = this.activate.bind(this);
    }
    ToastComponent.prototype.activate = function (message, title) {
        if (message === void 0) { message = this._defaults.message; }
        if (title === void 0) { title = this._defaults.title; }
        this.title = title;
        this.message = message;
        this._show();
    };
    ToastComponent.prototype.ngOnInit = function () {
        //this._toastElement = <HTMLElement>document.getElementById('toast');
    };
    ToastComponent.prototype._show = function () {
        var _this = this;
        if (this._toastElement == null)
            this._toastElement = document.getElementById('toast');
        this._toastElement.style.opacity = 1;
        this._toastElement.style.zIndex = 99999;
        this._toastElement.style.top = window.pageYOffset + 5 + "px";
        window.setTimeout(function () { return _this._hide(); }, 2500);
    };
    ToastComponent.prototype._hide = function () {
        var _this = this;
        this._toastElement.style.opacity = 0;
        window.setTimeout(function () { return _this._toastElement.style.zIndex = 0; }, 400);
    };
    ToastComponent = __decorate([
        core_1.Component({
            selector: 'toast',
            templateUrl: '/templates/toast.html'
        }), 
        __metadata('design:paramtypes', [toast_service_1.ToastService])
    ], ToastComponent);
    return ToastComponent;
})();
exports.ToastComponent = ToastComponent;
//# sourceMappingURL=toast.component.js.map