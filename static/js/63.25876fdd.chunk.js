"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[63],{693:function(e,t,n){n.d(t,{Yc:function(){return v},Pg:function(){return l},Ph:function(){return f},fI:function(){return m},BC:function(){return u}});var r=n(861),c=n(757),a=n.n(c),i=n(243),s="https://api.themoviedb.org/3",o="a28892c9adcb905c064a29bd23dc557e";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},432:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n.r(t),n.d(t,{default:function(){return j}});var a=n(439),i=n.p+"static/media/motivation_00.36f93fa20fbaf5e7b585.jpg",s=n(689),o=n(87),u=n(791),p=n(693),l="MovieDetails_goback__-NasX",d="MovieDetails_wrapper__LI590",f="MovieDetails_image__E07wX",h="MovieDetails_link__wv3O1",v=n(184),j=function(){var e,t,n=(0,u.useState)(),j=(0,a.Z)(n,2),m=j[0],b=j[1],x=(0,s.UO)().movieId,y=(0,s.TH)(),w=(0,u.useRef)(null!==(e=null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");(0,u.useEffect)((function(){(0,p.Pg)(x).then((function(e){b(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))})).catch().finally()}),[x]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.rU,{to:w.current,children:(0,v.jsx)("button",{className:l,type:"button",children:"Go back"})}),m?function(){var e,t;return(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("img",{className:f,src:m.poster_path&&(null!==(e="https://image.tmdb.org/t/p/w342".concat(m.poster_path))&&void 0!==e?e:i),alt:m.title,loading:"lazy",width:"300",height:"450"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:m.title}),(0,v.jsxs)("p",{children:["User Score ",Math.round(10*m.vote_average),"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:m.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:null===m||void 0===m||null===(t=m.genres)||void 0===t?void 0:t.map((function(e,t){var n=e.name;return(0,v.jsxs)("span",{children:[n," "]},t)}))})]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Additional Information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{className:h,to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{className:h,to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(s.j3,{})})]})]})}():(0,v.jsx)("p",{children:"Loading....."})]})}}}]);
//# sourceMappingURL=63.25876fdd.chunk.js.map