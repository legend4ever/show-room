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
var modal_service_1 = require('./modal.service');
var KEY_ESC = 27;
var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this._defaults = {
            title: 'Confirmation',
            message: 'Do you want to cancel your changes?',
            cancelText: 'Cancel',
            okText: 'OK'
        };
        modalService.activate = this.activate.bind(this);
    }
    ModalComponent.prototype.activate = function (message, title) {
        var _this = this;
        if (message === void 0) { message = this._defaults.message; }
        if (title === void 0) { title = this._defaults.title; }
        this.title = title;
        this.message = message;
        this.okText = this._defaults.okText;
        this.cancelText = this._defaults.cancelText;
        var promise = new Promise(function (resolve, reject) {
            _this.negativeOnClick = function (e) { return resolve(false); };
            _this.positiveOnClick = function (e) { return resolve(true); };
            _this._show();
        });
        return promise;
    };
    ModalComponent.prototype.ngOnInit = function () {
        this._modalElement = document.getElementById('confirmationModal');
        this._cancelButton = document.getElementById('cancelButton');
        this._okButton = document.getElementById('okButton');
    };
    ModalComponent.prototype._show = function () {
        var _this = this;
        document.onkeyup = null;
        if (!this._modalElement || !this._cancelButton || !this._okButton)
            return;
        this._modalElement.style.opacity = 0;
        this._modalElement.style.zIndex = 9999;
        this._cancelButton.onclick = (function (e) {
            e.preventDefault();
            if (!_this.negativeOnClick(e))
                _this._hideDialog();
        });
        this._okButton.onclick = (function (e) {
            e.preventDefault();
            if (!_this.positiveOnClick(e))
                _this._hideDialog();
        });
        this._modalElement.onclick = function () {
            _this._hideDialog();
            return _this.negativeOnClick(null);
        };
        document.onkeyup = function (e) {
            if (e.which == KEY_ESC) {
                _this._hideDialog();
                return _this.negativeOnClick(null);
            }
        };
        this._modalElement.style.opacity = 1;
    };
    ModalComponent.prototype._hideDialog = function () {
        var _this = this;
        document.onkeyup = null;
        this._modalElement.style.opacity = 0;
        window.setTimeout(function () { return _this._modalElement.style.zIndex = 0; }, 400);
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'modal-confirm',
            templateUrl: 'app/blocks/modal/modal.component.html',
            styleUrls: ['app/blocks/modal/modal.component.css']
        }), 
        __metadata('design:paramtypes', [modal_service_1.ModalService])
    ], ModalComponent);
    return ModalComponent;
})();
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map