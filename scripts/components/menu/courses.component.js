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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var course_component_1 = require('./course.component');
var course_pipe_1 = require('../../pipes/course.pipe');
var toast_component_1 = require('../toast.component');
var modal_component_1 = require('../modal.component');
var menu_service_1 = require('../../services/menu.service');
var toast_service_1 = require('../../services/toast.service');
var modal_service_1 = require('../../services/modal.service');
var CoursesComponent = (function () {
    function CoursesComponent(menuService, toastService, modalService) {
        this.menuService = menuService;
        this.toastService = toastService;
        this.modalService = modalService;
        this.courses = new Array();
        this.categories = new Array();
    }
    //public get key(): number {
    //    return Math.floor((Math.random() * 1000) + 1);
    //}
    CoursesComponent.prototype.ngOnInit = function () {
        this.categories = this.menuService.getCategories();
        this.courses = this.menuService.getCourses();
        this.selectedCategory = this.categories[0];
    };
    CoursesComponent.prototype.onSelectCategory = function (item) {
        this.selectedCategory = item;
        var el = document.getElementById('category-drop-down');
        el.value = item.Id.toString();
    };
    CoursesComponent.prototype.onSelectCategoryAsId = function (Id) {
        var _this = this;
        //var el = <HTMLSelectElement>event.target;
        this.categories.forEach(function (item) {
            if (item.Id === Number.parseInt(Id))
                _this.selectedCategory = item;
        });
    };
    CoursesComponent.prototype.onToggle = function (item, el) {
        var divEl = el.parentElement.nextElementSibling;
        var spanEl = el.firstElementChild;
        if (divEl.style.display === "none") {
            divEl.style.display = "inline-block";
            spanEl.classList.remove("glyphicon-chevron-down");
            spanEl.classList.add("glyphicon-chevron-up");
        }
        else {
            divEl.style.display = "none";
            spanEl.classList.remove("glyphicon-chevron-up");
            spanEl.classList.add("glyphicon-chevron-down");
        }
    };
    CoursesComponent.prototype.onShowImage = function (item) {
        this.modalService.activate("", item.Name, item.ImageUrl);
    };
    CoursesComponent.prototype.onPlaceOrder = function (item) {
        this.menuService.addToOrder(item);
        this.toastService.activate(item.Name + " added.");
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'my-courses',
            templateUrl: 'templates/courses.html',
            pipes: [course_pipe_1.CoursePipe],
            directives: [course_component_1.CourseComponent, toast_component_1.ToastComponent, modal_component_1.ModalComponent, ng2_bootstrap_1.TOOLTIP_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, toast_service_1.ToastService, modal_service_1.ModalService])
    ], CoursesComponent);
    return CoursesComponent;
})();
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map