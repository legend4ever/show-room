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
require('rxjs/add/operator/map');
var MenuService = (function () {
    function MenuService() {
        var _this = this;
        this._courses = new Array();
        this._categories = new Array();
        this._orders = null;
        //getCourses = () => {
        //    return this.http
        //        .get('./api/get')
        //        .map(res => res.json());
        //}
        this.getCourses = function () {
            return _this._courses;
        };
        this.getCategories = function () {
            return _this._categories;
        };
        this.getOrder = function () {
            var basket = new Array();
            _this._orders.forEach(function (x) {
                basket.push({
                    Id: _this._orders.length + 1,
                    ItemId: x.Id,
                    Name: x.Name,
                    ImageUrl: x.ImageUrl,
                    Qty: 1,
                    Price: x.Price
                });
            });
            return basket;
        };
        this.addToOrder = function (item) {
            if (_this._orders === null)
                _this._orders = new Array();
            _this._orders.push({
                Id: _this._orders.length + 1,
                ItemId: item.Id,
                Name: item.Name,
                ImageUrl: item.ImageUrl,
                Qty: 1,
                Price: item.Price
            });
        };
        this.replaceOrder = function (orders) {
            _this._orders = orders;
        };
        this.populateCourses();
        this.populateCategories();
    }
    MenuService.prototype.setupCourses = function () {
        this._courses.forEach(function (item) {
            item.ImageUrl = "images/courses/" + item.Name + ".jpg";
            item.Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, tortor at feugiat eleifend, ipsum mi mollis felis, sed vehicula tortor erat sit amet eros.\n            Nunc a lectus quis mi pharetra aliquam.Duis imperdiet diam bibendum facilisis viverra.Morbi blandit orci commodo elementum porta.Sed volutpat metus orci,\n            eu tempus dui sodales pellentesque.Phasellus vitae hendrerit mi, vehicula blandit dui.Integer aliquet metus sit amet justo porttitor vulputate.";
        });
    };
    MenuService.prototype.populateCategories = function () {
        this._categories.push({ Id: 7, Name: 'Soup' });
        this._categories.push({ Id: 1, Name: 'Appetizer' });
        this._categories.push({ Id: 2, Name: 'Chicken' });
        this._categories.push({ Id: 3, Name: 'Beef' });
        this._categories.push({ Id: 5, Name: 'Pork' });
        this._categories.push({ Id: 4, Name: 'Seafood' });
        this._categories.push({ Id: 6, Name: 'Vegetable' });
        this._categories.push({ Id: 8, Name: 'Special' });
    };
    MenuService.prototype.populateCourses = function () {
        this._courses.push({ Id: 1, CategoryId: 2, Name: 'Asparagus Chicken', Description: '', Price: 8.75 });
        this._courses.push({ Id: 2, CategoryId: 2, Name: 'Baby Corn Chicken', Description: '', Price: 8.75 });
        this._courses.push({ Id: 3, CategoryId: 5, Name: 'BBQ Pork Asparagus', Description: '', Price: 9.00 });
        this._courses.push({ Id: 4, CategoryId: 3, Name: 'Beef & Broccoli', Description: '', Price: 9.75 });
        this._courses.push({ Id: 5, CategoryId: 3, Name: 'Beef & Vegetables', Description: '', Price: 9.75 });
        this._courses.push({ Id: 6, CategoryId: 2, Name: 'Cashew Chicken', Description: '', Price: 8.75 });
        this._courses.push({ Id: 7, CategoryId: 2, Name: 'Chicken & Vegetable', Description: '', Price: 8.75 });
        this._courses.push({ Id: 8, CategoryId: 8, Name: 'Chicken Lo Mein', Description: '', Price: 6.75 });
        this._courses.push({ Id: 9, CategoryId: 7, Name: 'Egg Drop Soup', Description: '', Price: 2.75 });
        this._courses.push({ Id: 11, CategoryId: 4, Name: 'Four Happy (Beef, Chicken, Shrimp & Pork)', Description: '', Price: 12.95 });
        this._courses.push({ Id: 12, CategoryId: 1, Name: 'Fried Eggrolls', Description: '', Price: 3.50 });
        this._courses.push({ Id: 13, CategoryId: 2, Name: 'Garlic Chicken', Description: '', Price: 8.75 });
        this._courses.push({ Id: 14, CategoryId: 2, Name: "General Tso's Chicken", Description: '', Price: 9.75 });
        this._courses.push({ Id: 15, CategoryId: 4, Name: "Honey Walnut Shrimp", Description: '', Price: 10.95 });
        this._courses.push({ Id: 16, CategoryId: 6, Name: "Hot & Sour Eggplant", Description: '', Price: 6.75 });
        this._courses.push({ Id: 17, CategoryId: 7, Name: "Hot & Sour Soup", Description: '', Price: 3.25 });
        this._courses.push({ Id: 18, CategoryId: 3, Name: "Mongolian Beef", Description: '', Price: 9.75 });
        this._courses.push({ Id: 19, CategoryId: 5, Name: "Mu Shu Pork", Description: '', Price: 9.25 });
        this._courses.push({ Id: 20, CategoryId: 4, Name: "Orange Hot Shrimp", Description: '', Price: 10.50 });
        this._courses.push({ Id: 21, CategoryId: 1, Name: "Pan-fired Pork Dumplings", Description: '', Price: 5.50 });
        this._courses.push({ Id: 22, CategoryId: 3, Name: "Pepper Beef", Description: '', Price: 9.50 });
        this._courses.push({ Id: 23, CategoryId: 2, Name: "Pineapple Chicken", Description: '', Price: 8.75 });
        this._courses.push({ Id: 24, CategoryId: 4, Name: "Seafood Delight in Black Bean Sauce", Description: '', Price: 12.95 });
        this._courses.push({ Id: 25, CategoryId: 4, Name: "Seafood Delight in White Wine Sauce", Description: '', Price: 12.95 });
        this._courses.push({ Id: 26, CategoryId: 2, Name: "Sesame Chicken", Description: '', Price: 8.75 });
        this._courses.push({ Id: 27, CategoryId: 8, Name: "Shrimp Fried Rice", Description: '', Price: 6.75 });
        this._courses.push({ Id: 28, CategoryId: 4, Name: "Shrimp in Lobster Sauce", Description: '', Price: 9.75 });
        this._courses.push({ Id: 29, CategoryId: 6, Name: "Snow Peas & Water Chestnuts", Description: '', Price: 5.75 });
        this._courses.push({ Id: 30, CategoryId: 2, Name: "Snow Peas Chicken", Description: '', Price: 8.75 });
        this._courses.push({ Id: 31, CategoryId: 4, Name: "Steamed Fish", Description: '', Price: 10.95 });
        this._courses.push({ Id: 32, CategoryId: 1, Name: "Steamed Pork Dumplings", Description: '', Price: 5.50 });
        this._courses.push({ Id: 33, CategoryId: 2, Name: "Sweet & Sour Chicken", Description: '', Price: 8.75 });
        this._courses.push({ Id: 34, CategoryId: 4, Name: "Tripple Delight (Chicken, Beef & Shrimp)", Description: '', Price: 12.95 });
        this.setupCourses();
    };
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MenuService);
    return MenuService;
})();
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map