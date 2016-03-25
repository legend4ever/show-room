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
var menu_service_1 = require('../../services/menu.service');
var toast_component_1 = require('../toast.component');
var toast_service_1 = require('../../services/toast.service');
var OrderComponent = (function () {
    function OrderComponent(menuService, toastService) {
        this.menuService = menuService;
        this.toastService = toastService;
        this.items = new Array();
    }
    Object.defineProperty(OrderComponent.prototype, "total", {
        get: function () {
            var t = 0;
            this.items.forEach(function (x) {
                t += (x.Qty * x.Price);
            });
            return t;
        },
        enumerable: true,
        configurable: true
    });
    OrderComponent.prototype.ngOnInit = function () {
        this.items = this.menuService.getOrder();
    };
    OrderComponent.prototype.onDelete = function (item) {
        var idx = this.items.indexOf(item);
        //console.log(this.items[idx].Name);
        if (idx !== -1) {
            this.items.splice(idx, 1);
            this.toastService.activate(item.Name + " removed from order successfully.");
        }
    };
    OrderComponent.prototype.onUpdate = function () {
        this.menuService.replaceOrder(this.items);
        this.toastService.activate("Order information updated.");
    };
    OrderComponent.prototype.onCheckout = function () {
        console.log("Order items refreshed!");
        this.items = null;
        this.items = this.menuService.getOrder();
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'my-order',
            templateUrl: '/templates/order.html',
            directives: [toast_component_1.ToastComponent]
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, toast_service_1.ToastService])
    ], OrderComponent);
    return OrderComponent;
})();
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map