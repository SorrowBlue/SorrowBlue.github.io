(window.webpackJsonp=window.webpackJsonp||[]).push([[15,7],{525:function(t,e,r){"use strict";r.r(e);r(18),r(307);var n=r(10),o=r(15),c=r(38),l=r(34),f=r(25),d=r(13),v=r(523);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},h=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"formatDate",value:function(t){return"".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate())}}]),r}(v.Vue);y([Object(v.Prop)()],h.prototype,"item",void 0);var O=h=y([Object(v.Component)({})],h),j=r(82),w=r(96),_=r.n(w),C=r(202),P=r(76),R=r(526),x=r(528),k=r(306),V=r(128),S=r(200),D=r(58),B=r(515),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[t.$vuetify.theme.dark?r("v-card",{attrs:{raised:n,color:t.$vuetify.theme.dark?n?"grey darken-3":"grey darken-4":null,height:"100%",width:"344",ripple:""}},[r("v-list-item",[r("v-list-item-avatar",{attrs:{color:"white"}},[r("v-img",{attrs:{src:t.item.user.profile_image_url,height:"194","aspect-ratio":3.2}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s("@"+t.item.user.id)}})],1)],1),t._v(" "),r("v-img",{attrs:{src:"/images/qiichan/qiichan-trend_0.webp",height:"auto","aspect-ratio":16/9}},[r("v-card-title",{staticClass:"body-1 white--text",domProps:{textContent:t._s(t.item.title)}})],1),t._v(" "),r("v-card-text",[r("v-row",{attrs:{justify:"space-between"}},[r("v-col",{staticClass:"caption",attrs:{cols:"auto"},domProps:{textContent:t._s(t.formatDate(new Date(t.item.created_at)))}}),t._v(" "),r("v-col",{staticClass:"caption",attrs:{cols:"auto"},domProps:{textContent:t._s(t.item.likes_count+" likes")}})],1)],1)],1):r("v-card",{attrs:{raised:n,height:"100%",width:"344",ripple:""}},[r("v-list-item",[r("v-list-item-avatar",{attrs:{color:"white"}},[r("v-img",{attrs:{src:t.item.user.profile_image_url}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s("@"+t.item.user.id)}})],1)],1),t._v(" "),r("v-img",{attrs:{src:"/images/qiichan/qiichan-trend_0.webp",height:"194","aspect-ratio":3.2}},[r("v-card-title",{staticClass:"body-1 white--text",domProps:{textContent:t._s(t.item.title)}})],1),t._v(" "),r("v-card-text",[r("v-row",{attrs:{justify:"space-between"}},[r("v-col",{staticClass:"caption",attrs:{cols:"auto"},domProps:{textContent:t._s(t.formatDate(new Date(t.item.created_at)))}}),t._v(" "),r("v-col",{staticClass:"caption",attrs:{cols:"auto"},domProps:{textContent:t._s(t.item.likes_count+" likes")}})],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;_()(component,{VCard:C.a,VCardText:P.c,VCardTitle:P.d,VCol:R.a,VHover:x.a,VImg:k.a,VListItem:V.a,VListItemAvatar:S.a,VListItemContent:D.b,VListItemTitle:D.d,VRow:B.a})},526:function(t,e,r){"use strict";r(37),r(216),r(20),r(60),r(22),r(28),r(77),r(59),r(61),r(217),r(218),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(49),r(90);var n=r(2),o=(r(230),r(1)),c=r(66),l=r(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),h=v.reduce((function(t,e){return t["order"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(m),offset:Object.keys(y),order:Object.keys(h)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var n=r[t],o=j(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},566:function(t,e,r){"use strict";r.r(e);r(307),r(30);var n=r(3),o=r(10),c=r(38),l=r(34),f=r(25),d=r(13),v=r(523),m=r(525);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(c.a)(r,t);var e=y(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return r}(v.Vue),j=O=h([Object(v.Component)({layout:"qiichan",components:{"qiita-item":m.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,e.next=3,r.$qiitaApiClient.requestItems(1,20);case 3:return e.t0=e.sent,e.abrupt("return",{items:e.t0});case 5:case"end":return e.stop()}}),e)})))()}})],O),w=r(82),_=r(96),C=r.n(_),P=r(526),R=r(506),x=r(515),component=Object(w.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"mr-auto",attrs:{justify:"center"}},t._l(t.items,(function(t){return r("v-col",{key:t.id,attrs:{cols:"auto"}},[r("qiita-item",{attrs:{item:t}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;C()(component,{VCol:P.a,VContainer:R.a,VRow:x.a})}}]);