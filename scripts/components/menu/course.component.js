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
var CourseComponent = (function () {
    function CourseComponent() {
        this.item = { Id: 0, CategoryId: 0, Name: '', Description: '', Price: 0 };
        this.itemAdded = new core_1.EventEmitter();
    }
    CourseComponent.prototype.onClick = function () {
        this.itemAdded.emit(this.item);
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'my-course',
            templateUrl: 'templates/course.html',
            outputs: ['itemAdded']
        }), 
        __metadata('design:paramtypes', [])
    ], CourseComponent);
    return CourseComponent;
})();
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map