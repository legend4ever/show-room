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
        this.isIE = function () {
            var ua = window.navigator.userAgent;
            // IE 10
            // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
            // IE 11
            // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
            // IE 12 / Spartan
            // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
            // Edge (IE 12+)
            // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
            var msie = ua.indexOf('MSIE ');
            //if (msie > 0) {
            //   return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            //}
            var trident = ua.indexOf('Trident/');
            //if (trident > 0) {
            //    var rv = ua.indexOf('rv:');
            //    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            //}
            //var edge = ua.indexOf('Edge/');
            //if (edge > 0) {
            //    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            //}
            return msie > 0 || trident > 0;
        };
    }
    Slide.prototype.ngAfterViewInit = function () {
        var divEl = (this.carouselItem.nativeElement);
        if (divEl.children.item(0) instanceof HTMLImageElement) {
            var imgEl = divEl.children.item(0);
            divEl.setAttribute('style', 'background-image: url(' + imgEl.src + ')');
            if (this.isIE()) {
                imgEl.setAttribute('style', 'display: none');
            }
            else {
                imgEl.remove();
            }
        }
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