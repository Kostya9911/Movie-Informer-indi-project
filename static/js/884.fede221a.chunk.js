"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{687:function(e,n,t){t.d(n,{Bt:function(){return l},Y5:function(){return p},Yx:function(){return u},bI:function(){return h},y:function(){return d}});var r=t(861),a=t(757),c=t.n(a),s=t(243),i="597f2644d0be3c5b2ab09a53bdbbc182",o="https://api.themoviedb.org/3",u=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(n,"&include_adult=false&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},884:function(e,n,t){t.r(n);var r=t(433),a=t(861),c=t(439),s=t(757),i=t.n(s),o=t(689),u=t(87),p=t(791),d=t(687),l=t(184);n.default=function(){var e=(0,p.useState)([]),n=(0,c.Z)(e,2),t=n[0],s=n[1],h=(0,p.useState)(null),f=(0,c.Z)(h,2),v=f[0],x=f[1],g=(0,p.useState)([]),m=(0,c.Z)(g,2),j=m[0],w=m[1],b=(0,p.useState)("start"),k=(0,c.Z)(b,2),y=k[0],Z=k[1],_=(0,o.UO)().id;(0,p.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Y5)(_);case 3:n=e.sent,s(n),Z("resolved"),w(n.genres),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),Z("rejected"),x(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}Z("pending"),function(){e.apply(this,arguments)}()}),[_]);var S=t.poster_path,U=void 0===S?"https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png":S,C=t.vote_average,Y=t.title,L=t.overview;return"pending"===y?(0,l.jsx)("h2",{children:"Loading..."}):"rejected"===y?(0,l.jsxs)("h2",{children:["Sorry! Something went wrong: ",v]}):"resolved"===y?(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[U?(0,l.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(U),alt:"movies poster",height:"200px"}):(0,l.jsx)("img",{src:"https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",alt:"movies poster",height:"200px"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:Y}),(0,l.jsxs)("p",{children:["User score: ",Math.round(10*C),"%"]}),(0,l.jsx)("h4",{children:"Overview"}),(0,l.jsx)("p",{children:L}),(0,l.jsx)("h4",{children:"Genres"}),(0,l.jsx)("p",{children:(0,r.Z)(j).map((function(e){return"".concat(e.name," ")}))})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,l.jsx)(p.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading page..."}),children:(0,l.jsx)(o.j3,{})})]}):void 0}}}]);
//# sourceMappingURL=884.fede221a.chunk.js.map