"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,n,e){e.r(n);var r=e(439),c=e(791),a=e(689),u=e(693),o=e(184);n.default=function(){var t=(0,a.UO)().movieId,n=(0,c.useState)(),e=(0,r.Z)(n,2),i=e[0],s=e[1];(0,c.useEffect)((function(){t&&(0,u.fI)(t).then((function(t){s(t.results)})).catch((function(t){return console.log(t)}))}),[t]);return(0,o.jsx)("ul",{children:i&&(i.length>0?i.map((function(t,n){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:null===t||void 0===t?void 0:t.author}),(0,o.jsx)("p",{children:null===t||void 0===t?void 0:t.content})]},n)})):(0,o.jsx)("p",{children:"We don't have any reviews for this movie"}))})}},693:function(t,n,e){e.d(n,{Yc:function(){return v},Pg:function(){return f},Ph:function(){return d},fI:function(){return y},BC:function(){return s}});var r=e(861),c=e(757),a=e.n(c),u=e(243),o="https://api.themoviedb.org/3",i="a28892c9adcb905c064a29bd23dc557e";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.b04d6fa2.chunk.js.map