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
var carousel_1 = require('./components/ng2-bootstrap/carousel');
var router_1 = require('angular2/router');
var courses_component_1 = require('./components/menu/courses.component');
var course_component_1 = require('./components/menu/course.component');
var order_component_1 = require('./components/menu/order.component');
var toast_component_1 = require('./components/toast.component');
var menu_service_1 = require('./services/menu.service');
var toast_service_1 = require('./services/toast.service');
var AppComponent = (function () {
    function AppComponent(window, toastService) {
        this.window = window;
        this.toastService = toastService;
        this.interval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
        this.addSlide();
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.toastService);
        this.toastService.activate("Application initialization completed.");
    };
    AppComponent.prototype.addSlide = function () {
        this.slides.push({ image: 'images/meatball.jpg', text: 'Meatball' });
        this.slides.push({ image: 'images/pork.jpg', text: 'Pork' });
        this.slides.push({ image: 'images/lobster.jpg', text: 'Lobster' });
        this.slides.push({ image: 'images/sweet-sour-pork.jpg', text: 'Sweet Sour Pork' });
        this.slides.push({ image: 'images/duck.jpg', text: 'Duck' });
        this.slides.push({ image: 'images/egg-roll.jpg', text: 'Egg-roll' });
        this.slides.push({ image: 'images/brown-sauce-pork.jpg', text: 'Brown Sauce Pork' });
        this.slides.push({ image: 'images/chicken.jpg', text: 'Chicken' });
        this.slides.push({ image: 'images/chicken-shrimp.jpg', text: 'Chicken Shrimp' });
        this.slides.push({ image: 'images/combination.jpg', text: 'Combination' });
        this.slides.push({ image: 'images/crab-pot.jpg', text: 'Crab Pot' });
    };
    AppComponent.prototype.removeSlide = function (index) {
        this.slides.splice(index, 1);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '/templates/app.html',
            directives: [courses_component_1.CoursesComponent, course_component_1.CourseComponent, toast_component_1.ToastComponent, carousel_1.CAROUSEL_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [menu_service_1.MenuService, toast_service_1.ToastService]
        }),
        router_1.RouteConfig([
            { path: '/courses', name: 'Courses', component: courses_component_1.CoursesComponent, useAsDefault: true },
            { path: '/course/:id', name: 'Course', component: course_component_1.CourseComponent },
            { path: '/order', name: 'Order', component: order_component_1.OrderComponent }
        ]), 
        __metadata('design:paramtypes', [Window, toast_service_1.ToastService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map