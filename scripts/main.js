var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
var core_1 = require("angular2/core");
var router_1 = require('angular2/router');
//import {Http, HTTP_PROVIDERS} from 'angular2/http'
core_1.enableProdMode();
browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
    core_1.provide(Window, { useValue: window })]).then(function () {
    var toggle = document.getElementsByClassName('navbar-toggle')[0];
    var collapse = document.getElementsByClassName('navbar-collapse')[0];
    var menuItem = document.getElementsByClassName('navbar-nav a');
    var toggleMenu = function () {
        collapse.classList.toggle('collapse');
        collapse.classList.toggle('in');
    };
    toggle.addEventListener('click', toggleMenu, false);
    for (var i = 0; i < menuItem.item.length; i++) {
        menuItem.item(i).addEventListener('click', toggleMenu, false);
    }
    window.onscroll = function () {
        var featureEl = document.getElementById('featured');
        var style = window.getComputedStyle(featureEl);
        var el = document.querySelector('header nav');
        //console.log(' ==> ' + window.scrollY + ' | ' + Number(style.getPropertyValue('height').replace('px', '')));
        if (window.scrollY >= Number(style.getPropertyValue('height').replace('px', ''))) {
            el.setAttribute('style', 'padding: 0');
            el.classList.add("mini-bar");
        }
        else {
            document.querySelector('header nav').setAttribute('style', 'padding: 30px 0');
            el.classList.remove("mini-bar");
        }
    };
});
//# sourceMappingURL=main.js.map