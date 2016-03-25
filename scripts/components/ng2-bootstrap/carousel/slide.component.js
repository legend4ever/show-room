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
var carousel_component_1 = require('./carousel.component');
var Slide = (function () {
    function Slide(carousel) {
        this.carousel = carousel;
        this.addClass = true;
    }
    Slide.prototype.ngAfterViewInit = function () {
        var divEl = (this.carouselItem.nativeElement);
        var imgEl = divEl.children.item(0);
        divEl.setAttribute('style', 'background-image: url(' + imgEl.currentSrc + ')');
        imgEl.remove();
    };
    Slide.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    Slide.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Slide.prototype, "index");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Slide.prototype, "direction");
    __decorate([
        core_1.HostBinding('class.active'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Slide.prototype, "active");
    __decorate([
        core_1.HostBinding('class.item'),
        core_1.HostBinding('class.carousel-item'), 
        __metadata('design:type', Boolean)
    ], Slide.prototype, "addClass");
    __decorate([
        core_1.ViewChild('carouselItem'), 
        __metadata('design:type', Object)
    ], Slide.prototype, "carouselItem");
    Slide = __decorate([
        core_1.Component({
            selector: 'slide',
            template: "\n    <div [class.active]=\"active\" class=\"item carousel-item text-center\" #carouselItem>\n      <ng-content></ng-content>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [carousel_component_1.Carousel])
    ], Slide);
    return Slide;
})();
exports.Slide = Slide;
//# sourceMappingURL=slide.component.js.map