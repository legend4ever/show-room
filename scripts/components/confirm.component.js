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
var confirm_service_1 = require('../services/confirm.service');
var KEY_ESC = 27;
var ConfirmComponent = (function () {
    function ConfirmComponent(confirmService) {
        this._defaults = {
            title: 'Message',
            message: '',
            link: '',
            cancelText: 'Cancel',
            okText: 'OK',
        };
        confirmService.activate = this.activate.bind(this);
        confirmService.prompt = this.prompt.bind(this);
    }
    ConfirmComponent.prototype.prompt = function (message, title, link) {
        if (message === void 0) { message = this._defaults.message; }
        if (title === void 0) { title = this._defaults.title; }
        if (link === void 0) { link = this._defaults.link; }
        this.prompted = true;
        return this.activate(message, title, link);
    };
    ConfirmComponent.prototype.activate = function (message, title, link) {
        var _this = this;
        if (message === void 0) { message = this._defaults.message; }
        if (title === void 0) { title = this._defaults.title; }
        if (link === void 0) { link = this._defaults.link; }
        this.title = title;
        this.message = message;
        this.link = link;
        this.okText = this._defaults.okText;
        this.cancelText = this._defaults.cancelText;
        var promise = new Promise(function (resolve, reject) {
            _this.onNegativeClick = function (e) { return resolve(false); };
            _this.onPositiveClick = function (e) { return resolve(true); };
            _this._show();
        });
        return promise;
    };
    ConfirmComponent.prototype.ngOnInit = function () {
        this._modalElement = document.getElementById('dialog');
        this._cancelButton = document.getElementById('cancelButton');
        this._okButton = document.getElementById('okButton');
        this._closeButton = document.getElementById('closeButton');
    };
    ConfirmComponent.prototype._show = function () {
        var _this = this;
        document.onkeyup = null;
        if (!this._modalElement)
            return;
        this._modalElement.style.opacity = 0;
        this._closeButton.onclick = (function (e) {
            e.preventDefault();
            if (!_this.onNegativeClick(e))
                _this._hideDialog();
        });
        if (this.prompted) {
            this._cancelButton.onclick = (function (e) {
                e.preventDefault();
                if (!_this.onNegativeClick(e))
                    _this._hideDialog();
            });
            this._okButton.onclick = (function (e) {
                e.preventDefault();
                if (!_this.onPositiveClick(e))
                    _this._hideDialog();
            });
        }
        else {
            var el = document.getElementsByClassName('button-bar')[0];
            el.setAttribute("style", "display: none");
        }
        this._modalElement.onclick = function () {
            _this._hideDialog();
            return _this.onNegativeClick(null);
        };
        document.onkeyup = function (e) {
            if (e.which === KEY_ESC) {
                _this._hideDialog();
                return _this.onNegativeClick(null);
            }
        };
        this._modalElement.style.zIndex = 9999;
        this._modalElement.style.top = window.pageYOffset + 10 + "px";
        this._modalElement.style.opacity = 1;
    };
    ConfirmComponent.prototype._hideDialog = function () {
        var _this = this;
        document.onkeyup = null;
        this._modalElement.style.opacity = 0;
        window.setTimeout(function () { return _this._modalElement.style.zIndex = -1; }, 400);
    };
    ConfirmComponent = __decorate([
        core_1.Component({
            selector: 'confirm',
            templateUrl: 'templates/confirm.html'
        }), 
        __metadata('design:paramtypes', [confirm_service_1.ConfirmService])
    ], ConfirmComponent);
    return ConfirmComponent;
})();
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map