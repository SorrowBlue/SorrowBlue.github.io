(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,4],{545:function(t,e,n){var content=n(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7f6d4ad6",content,!0,{sourceMap:!1})},546:function(t,e,n){var r=n(9)(!1);r.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=r},547:function(t,e,n){"use strict";n.r(e);n(178);var r=n(15),o=n(26),c=n(32),l=n(27),f=n(17),v=n(12),h=n(142);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"change",value:function(t){this.items.some((function(e,i,a){return e.id===t&&(e.user.profile_image_url="",!0)}))}}]),n}(h.Vue);m([Object(h.Prop)()],y.prototype,"items",void 0);var x=y=m([h.Component],y),_=n(70),O=n(85),j=n.n(O),k=n(535),w=n(133),$=n(325),R=n(222),I=n(134),L=n(223),P=n(30),V=n(224),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[t._l(t.items,(function(e,i){return[n("v-list-item",{key:e?e.id:i,attrs:{ripple:"","two-line":"",to:"/qiita/items/"+e.id+"/"}},[n("v-list-item-avatar",[e&&""!=e.user.profile_image_url?n("v-img",{attrs:{src:e.user.profile_image_url},on:{"on:error":function(n){return t.change(e.id)}}}):n("v-icon",{attrs:{size:"48"},domProps:{textContent:t._s("mdi-account-circle")}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[n("span",{domProps:{textContent:t._s(e?e.title:"")}})]),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(e?"by "+e.user.name:"")}})],1),t._v(" "),n("v-list-item-action",[n("v-list-item-action-text",{domProps:{textContent:t._s(e?e.updated_at:"")}}),t._v(" "),e?n("span",[n("v-icon",{attrs:{size:"12"}},[t._v("fas fa-thumbs-up")]),t._v("\n          "+t._s(e.likes_count)+" いいね\n        ")],1):t._e()],1)],1),t._v(" "),i<t.items.length-1?n("v-divider",{key:"divider_"+(e?e.id:i)}):t._e()]}))],2)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VDivider:k.a,VIcon:w.a,VImg:$.a,VList:R.a,VListItem:I.a,VListItemAction:L.a,VListItemActionText:P.a,VListItemAvatar:V.a,VListItemContent:P.b,VListItemSubtitle:P.c,VListItemTitle:P.d})},548:function(t,e,n){"use strict";n.r(e);n(49),n(178),n(48);var r=n(6),o=n(15),c=n(26),l=n(32),f=n(27),v=n(17),h=n(12),d=n(179),m=n(547);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(l.a)(f,t);var e,n=y(f);function f(){var t;return Object(o.a)(this,f),(t=n.apply(this,arguments)).page=1,t.loading=!1,t.items=[],t.query="",t}return Object(c.a)(f,[{key:"pageChanged",value:function(){this.requestItems(this.$vuetify.breakpoint.xs||this.$vuetify.breakpoint.sm?1:this.$vuetify.breakpoint.md?2:3)}},{key:"created",value:function(){this.$nuxt.$on("qiitaQuery",this.queryChange)}},{key:"queryChange",value:function(t){this.query=t,this.pageChanged()}},{key:"requestItems",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var i,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,i=0;case 2:if(!(i<e)){t.next=10;break}return t.next=5,this.$qiitaApi.requestItems(this.page+i,10,this.query);case 5:n=t.sent,this.items[i]=n.map((function(t){var e=new Date,n=new Date(t.updated_at);return e.getFullYear()>n.getFullYear()?t.updated_at=e.getFullYear()-n.getFullYear()+"years ago":e.getMonth()>n.getMonth()?t.updated_at=e.getMonth()-n.getMonth()+"months ago":e.getDate()>n.getDate()?t.updated_at=e.getDate()-n.getDate()+"days ago":e.getHours()>n.getHours()?t.updated_at=e.getHours()-n.getHours()+"hours ago":t.updated_at=e.getMinutes()-n.getMinutes()+"minutes ago",t}));case 7:i++,t.next=2;break;case 10:this.loading=!1;case 11:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),f}(d.Vue);x([Object(d.Watch)("page",{immediate:!0})],_.prototype,"pageChanged",null);var O=_=x([Object(d.Component)({components:{"item-list":m.default}})],_),j=n(70),k=n(85),w=n.n(k),$=n(526),R=n(527),I=n(550),L=n(228),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-progress-linear",{attrs:{active:t.loading,indeterminate:""}}),t._v(" "),t._l(t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?1:t.$vuetify.breakpoint.md?2:3,(function(i){return n("v-flex",{key:i,class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"xs12":t.$vuetify.breakpoint.md?"md6":"lg4"},[n("item-list",{attrs:{items:t.items[i-1]}})],1)})),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-pagination",{attrs:{circle:"",length:100,page:t.page,"total-visible":7},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],2)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VFlex:$.a,VLayout:R.a,VPagination:I.a,VProgressLinear:L.a})},550:function(t,e,n){"use strict";n(21),n(49),n(18),n(22),n(80),n(43);var r=n(37),o=n(2),c=(n(545),n(50)),l=n(143),f=n(24),v=n(244),h=n(13),d=n(5);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(f.a,Object(v.a)({onVisible:["init"]}),h.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,o=Math.floor(e/2),c=this.length-o+1+n;if(this.value>o&&this.value<c){var l=this.value-o+2,f=this.value+o-2-n;return[1,"..."].concat(Object(r.a)(this.range(l,f)),["...",this.length])}if(this.value===o){var v=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,v)),["...",this.length])}if(this.value===c){var h=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(h,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(c,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r,label){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}},[t(c.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},589:function(t,e,n){"use strict";n.r(e);n(178),n(48);var r=n(6),o=n(15),c=n(32),l=n(27),f=n(17),v=n(12),h=n(142),d=n(548);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return n}(h.Vue),_=x=y([Object(h.Component)({layout:"qiita",components:{"qiita-items":d.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.query,o=n.$qiitaApi,e.next=4,o.requestAuthUser();case 4:if(e.t0=e.sent,null==e.t0){e.next=15;break}return e.next=8,o.requestAuthUser();case 8:return c=e.sent,e.next=11,o.requestFollowingTags(c.id);case 11:return l=e.sent,e.abrupt("return",{authUser:c,tags:l});case 15:if(!r.code){e.next=25;break}return e.next=18,o.requestAccessTokens(r.code,r.state+"",(function(t){({message:"認証エラーが発生しました",loading:!1})}));case 18:return e.next=20,o.requestAuthUser();case 20:return f=e.sent,e.next=23,o.requestFollowingTags(f.id);case 23:return v=e.sent,e.abrupt("return",{authUser:f,tags:v});case 25:case"end":return e.stop()}}),e)})))()}})],x),O=n(70),j=n(85),k=n.n(j),w=n(525),component=Object(O.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"grid-list-md":""}},[e("qiita-items")],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{QiitaItems:n(548).default}),k()(component,{VContainer:w.a})}}]);