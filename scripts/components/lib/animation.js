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
var Animation = (function () {
    function Animation(element) {
        this.onAnimationStart = new core_1.EventEmitter();
        this.onAnimationEnd = new core_1.EventEmitter();
        this.animationClasses = '';
        this.play = false;
        this.id = ''; // use for query filtering
        this.group = ''; // use for query filtering
        this._animationQueue = [];
        this._callbacks = [];
        this.element = element.nativeElement;
    }
    Animation.prototype.ngOnChanges = function () {
        this.setup();
    };
    Animation.prototype.ngOnInit = function () {
        this.setup();
    };
    Animation.prototype.addAnimation = function (animationClasses) {
        var _this = this;
        animationClasses.split(' ')
            .map(function (c) { return _this._animationQueue.push(c); });
        this.animationClasses += " " + animationClasses;
        return this;
    };
    Animation.prototype.setup = function () {
        this._animationQueue = this.animationClasses
            .split(" ")
            .filter(function (c) { return c.length > 0; });
        if (this.play && this._animationQueue.length > 0)
            this.startAnimation();
        return this;
    };
    Animation.prototype.startAnimation = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        if (callback != null)
            this._callbacks.push(callback);
        this._animationQueue.shift()
            .split('.')
            .filter(function (c) { return c.length > 0; })
            .map(function (c) { return _this.element.classList.add(c); });
        return this;
    };
    Animation.prototype.cleanAnimation = function () {
        var _this = this;
        this.animationClasses
            .replace('.', ' ')
            .split(' ')
            .filter(function (c) { return c.length > 0; })
            .map(function (c) {
            _this.element.classList.remove(c);
        });
        return this;
    };
    Animation.prototype.animationStarted = function (event) {
        this.onAnimationStart.next(null);
    };
    Animation.prototype.animationEnded = function (event) {
        this.cleanAnimation();
        if (this._animationQueue.length > 0) {
            this.startAnimation();
            return;
        }
        while (this._callbacks.length > 0)
            this._callbacks.shift()();
        this.onAnimationEnd.next(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Animation.prototype, "onAnimationStart");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Animation.prototype, "onAnimationEnd");
    __decorate([
        core_1.Input('animation'), 
        __metadata('design:type', String)
    ], Animation.prototype, "animationClasses");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Animation.prototype, "play");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Animation.prototype, "id");
    __decorate([
        // use for query filtering
        core_1.Input(), 
        __metadata('design:type', String)
    ], Animation.prototype, "group");
    Animation = __decorate([
        core_1.Directive({
            selector: '[animation]',
            host: {
                '(animationstart)': 'animationStarted($event)',
                '(webkitAnimationStart)': 'animationStarted($event)',
                '(oanimationstart)': 'animationStarted($event)',
                '(MSAnimationStart)': 'animationStarted($event)',
                '(animationend)': 'animationEnded($event)',
                '(webkitAnimationEnd)': 'animationEnded($event)',
                '(oanimationend)': 'animationEnded($event)',
                '(MSAnimationEnd)': 'animationEnded($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Animation);
    return Animation;
})();
exports.Animation = Animation;
//# sourceMappingURL=animation.js.map