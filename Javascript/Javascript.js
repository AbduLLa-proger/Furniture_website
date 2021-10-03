"use strict";
var chevronDown = document.querySelectorAll('#chevron-down');
var burger = document.querySelectorAll('.burger');
var burgerStyle = document.querySelectorAll('.burger-style');
var headerText = document.querySelectorAll('.header-text');
var barsStyle = document.querySelectorAll('.bars-style');
var barsText = document.querySelectorAll('.bars-text');
var chevronRight = document.querySelectorAll('#chevron-right');
var barsBurger = document.querySelectorAll('.bars-burger');
var bars = document.querySelector('.bars');
var faBars = document.querySelector('.fa-bars');
var burgerId = -1;
var barsId = -1;
var width = window.innerWidth;
window.addEventListener('resize', function () { var _a; if (window.innerWidth > 500)
    (_a = bars === null || bars === void 0 ? void 0 : bars.classList) === null || _a === void 0 ? void 0 : _a.remove('bars-show'); });
faBars.addEventListener('click', function () {
    var _a, _b, _c;
    if (window.innerWidth <= 500) {
        if ((_a = bars === null || bars === void 0 ? void 0 : bars.classList) === null || _a === void 0 ? void 0 : _a.contains('bars-show'))
            (_b = bars === null || bars === void 0 ? void 0 : bars.classList) === null || _b === void 0 ? void 0 : _b.remove('bars-show');
        else
            (_c = bars === null || bars === void 0 ? void 0 : bars.classList) === null || _c === void 0 ? void 0 : _c.add('bars-show');
    }
});
burgerStyle.forEach(function (items) {
    items.addEventListener('click', function (item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        var dataset = item.target;
        var id = dataset.dataset["id"];
        if (burgerId == parseInt(id)) {
            (_b = (_a = burger[burgerId]) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0 ? void 0 : _b.add('burger-hide');
            (_d = (_c = chevronDown[burgerId]) === null || _c === void 0 ? void 0 : _c.classList) === null || _d === void 0 ? void 0 : _d.remove('burger-transform');
            (_f = (_e = chevronDown[burgerId]) === null || _e === void 0 ? void 0 : _e.classList) === null || _f === void 0 ? void 0 : _f.remove('header-chevron_down');
            (_h = (_g = headerText[burgerId + 1]) === null || _g === void 0 ? void 0 : _g.classList) === null || _h === void 0 ? void 0 : _h.remove('header-focus_text');
            burgerId = -1;
        }
        else {
            if (burgerId >= 0) {
                (_k = (_j = burger[burgerId]) === null || _j === void 0 ? void 0 : _j.classList) === null || _k === void 0 ? void 0 : _k.add('burger-hide');
                (_m = (_l = chevronDown[burgerId]) === null || _l === void 0 ? void 0 : _l.classList) === null || _m === void 0 ? void 0 : _m.remove('burger-transform');
                (_p = (_o = chevronDown[burgerId]) === null || _o === void 0 ? void 0 : _o.classList) === null || _p === void 0 ? void 0 : _p.remove('header-chevron_down');
                (_r = (_q = headerText[burgerId + 1]) === null || _q === void 0 ? void 0 : _q.classList) === null || _r === void 0 ? void 0 : _r.remove('header-focus_text');
            }
            (_t = (_s = burger[parseInt(id)]) === null || _s === void 0 ? void 0 : _s.classList) === null || _t === void 0 ? void 0 : _t.remove('burger-hide');
            (_v = (_u = headerText[parseInt(id) + 1]) === null || _u === void 0 ? void 0 : _u.classList) === null || _v === void 0 ? void 0 : _v.add('header-focus_text');
            (_x = (_w = chevronDown[parseInt(id)]) === null || _w === void 0 ? void 0 : _w.classList) === null || _x === void 0 ? void 0 : _x.add('header-chevron_down');
            (_z = (_y = chevronDown[parseInt(id)]) === null || _y === void 0 ? void 0 : _y.classList) === null || _z === void 0 ? void 0 : _z.add('burger-transform');
            burgerId = parseInt(id);
        }
    });
});
barsStyle.forEach(function (items) {
    items.addEventListener('click', function (item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        var dataset = item.target;
        var id = dataset.dataset["id"];
        barsBurger[parseInt(id)].style.opacity = '0';
        if (barsId == parseInt(id)) {
            barsBurger[barsId].style.opacity = '1';
            var hideContent = setInterval(hide, 30, barsId);
            if (barsId == 1)
                (_c = (_b = (_a = barsStyle[parseInt(id)]) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.remove('bars_move1');
            else
                (_f = (_e = (_d = barsStyle[parseInt(id)]) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.classList) === null || _f === void 0 ? void 0 : _f.remove('bars_move');
            (_h = (_g = chevronRight[parseInt(id)]) === null || _g === void 0 ? void 0 : _g.classList) === null || _h === void 0 ? void 0 : _h.remove('bars_transform');
            barsId = -1;
        }
        else {
            if (barsId >= 0) {
                barsBurger[barsId].style.opacity = '1';
                var hideContent = setInterval(hide, 30, barsId);
                if (barsId == 1)
                    (_l = (_k = (_j = barsStyle[1]) === null || _j === void 0 ? void 0 : _j.parentElement) === null || _k === void 0 ? void 0 : _k.classList) === null || _l === void 0 ? void 0 : _l.remove('bars_move1');
                else
                    (_p = (_o = (_m = barsStyle[barsId]) === null || _m === void 0 ? void 0 : _m.parentElement) === null || _o === void 0 ? void 0 : _o.classList) === null || _p === void 0 ? void 0 : _p.remove('bars_move');
                (_r = (_q = chevronRight[barsId]) === null || _q === void 0 ? void 0 : _q.classList) === null || _r === void 0 ? void 0 : _r.remove('bars_transform');
            }
            barsId = parseInt(id);
            if (parseInt(id) == 1)
                (_u = (_t = (_s = barsStyle[1]) === null || _s === void 0 ? void 0 : _s.parentElement) === null || _t === void 0 ? void 0 : _t.classList) === null || _u === void 0 ? void 0 : _u.add('bars_move1');
            else
                (_x = (_w = (_v = barsStyle[parseInt(id)]) === null || _v === void 0 ? void 0 : _v.parentElement) === null || _w === void 0 ? void 0 : _w.classList) === null || _x === void 0 ? void 0 : _x.add('bars_move');
            (_z = (_y = chevronRight[parseInt(id)]) === null || _y === void 0 ? void 0 : _y.classList) === null || _z === void 0 ? void 0 : _z.add('bars_transform');
            barsBurger[parseInt(id)].style.opacity = '0';
            var displayContent = setInterval(display, 30, barsId);
        }
        function display(id) {
            var opacity = parseFloat(barsBurger[id].style.opacity);
            opacity += 0.1;
            barsBurger[id].style.opacity = opacity.toString();
            if (opacity >= 1)
                clearInterval(displayContent);
        }
        function hide(id) {
            var opacity = parseFloat(barsBurger[id].style.opacity);
            opacity -= 0.1;
            barsBurger[id].style.opacity = opacity.toString();
            if (opacity <= 0)
                clearInterval(hideContent);
        }
    });
});
//# sourceMappingURL=Javascript.js.map