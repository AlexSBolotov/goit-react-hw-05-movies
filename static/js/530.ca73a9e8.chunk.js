"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{541:function(e,t,r){r.d(t,{P:function(){return p},B:function(){return u}});var n=r(861),c=r(757),i=r.n(c),o=r(243),a="https://api.themoviedb.org/3",s="a28892c9adcb905c064a29bd23dc557e";function u(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(a,"/trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(a,"/movie/").concat(t,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},6:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}r.r(t),r.d(t,{default:function(){return d}});var i=r(439),o=r.p+"static/media/motivation_00.36f93fa20fbaf5e7b585.jpg",a=r(689),s=r(87),u=r(791),l=r(541),p=r(184),d=function(){var e,t,r,d=(0,u.useState)({}),f=(0,i.Z)(d,2),h=f[0],j=f[1],v=(0,a.UO)().movieId,b=(0,a.TH)(),x=(0,u.useRef)(null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return console.log(v),(0,u.useEffect)((function(){(0,l.P)(v).then((function(e){console.log(e),j(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))})).catch().finally()}),[v]),console.log(h),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.rU,{to:x.current,children:(0,p.jsx)("button",{type:"button",children:"Go back"})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:null!==(r="https://image.tmdb.org/t/p/w300".concat(h.poster_path))&&void 0!==r?r:o,alt:"",width:"300"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:h.title}),(0,p.jsxs)("p",{children:["User Score ",Math.round(10*h.vote_average),"%"]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:h.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{children:"Additional Information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(u.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(a.j3,{})})]})]})}}}]);
//# sourceMappingURL=530.ca73a9e8.chunk.js.map