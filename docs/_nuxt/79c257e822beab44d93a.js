(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(t,e,n){var map={"./article-1.md":[152,7],"./article-2.md":[153,8]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=147,t.exports=r},155:function(t,e,n){"use strict";n.r(e);n(48);var r=n(5),o={asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,n(147)("./".concat(r.slug,".md"));case 3:return o=t.sent,t.abrupt("return",{attributes:o.attributes,content:o.html});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},c=n(17),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{key:t.$route.params.slug},[n("section",{staticClass:"hero is-medium is-dark is-bold",style:{background:"url("+t.attributes.cover+")"}},[n("div",{staticClass:"hero-body"},[n("h1",{staticClass:"title is-size-2"},[t._v("\n        "+t._s(t.attributes.title)+"\n      ")]),t._v(" "),t.attributes.date?n("h2",{staticClass:"subtitle"},[t._v("\n        "+t._s(new Date(t.attributes.date).toLocaleDateString())+"\n      ")]):t._e()])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-justified",domProps:{innerHTML:t._s(t.content)}})])])},[],!1,null,null,null);e.default=component.exports}}]);