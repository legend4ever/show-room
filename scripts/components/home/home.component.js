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
var carousel_1 = require('../ng2-bootstrap/carousel');
var router_1 = require('angular2/router');
var menu_service_1 = require('../../services/menu.service');
//import {MenuComponent} from '../menu/menu.component';
var courses_component_1 = require('../menu/courses.component');
var course_component_1 = require('../menu/course.component');
var HomeComponent = (function () {
    function HomeComponent(window) {
        this.window = window;
        this.interval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
        //for (let i = 0; i < 4; i++) {
        this.addSlide();
        //}
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.addSlide = function () {
        //let newWidth = 600 + this.slides.length + 1;
        //this.slides.push({
        //    image: `//placekitten.com/${newWidth}/300`,
        //    text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
        //            ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
        //});
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
    HomeComponent.prototype.removeSlide = function (index) {
        this.slides.splice(index, 1);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: 'templates/home.html',
            directives: [courses_component_1.CoursesComponent, course_component_1.CourseComponent, carousel_1.CAROUSEL_DIRECTIVES, router_1.RouterLink],
            providers: [menu_service_1.MenuService]
        }),
        router_1.RouteConfig([
            { path: '/courses', name: 'Courses', component: courses_component_1.CoursesComponent, useAsDefault: true },
            { path: '/course/:id', name: 'Course', component: course_component_1.CourseComponent }
        ]), 
        __metadata('design:paramtypes', [Window])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map