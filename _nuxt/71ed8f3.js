(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{538:function(t,e,r){var content=r(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("e8b41e5e",content,!0,{sourceMap:!1})},539:function(t,e,r){var n=r(11)(!1);n.push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=n},562:function(t,e,r){"use strict";r.r(e);r(45),r(30);var n=r(3),o={watchQuery:["page"],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.params,o=t.query,e.next=3,r.$axios.$get("https://qiita.com/api/v2/tags/".concat(n.tag,"/items"),{params:{page:o.page||1,per_page:o.per_page||20}});case 3:return c=e.sent,l=c.map((function(t,i,a){var e=new Date,r=new Date(t.updated_at);return Object.assign({time_lag:(e.getFullYear()-r.getFullYear()>0?"".concat(e.getFullYear()-r.getFullYear()," years"):e.getMonth()-r.getMonth()>0?"".concat(e.getMonth()-r.getMonth()," months"):e.getDate()-r.getDate()>0?"".concat(e.getDate()-r.getDate()," days"):e.getHours()-r.getHours()>0?"".concat(e.getHours()-r.getHours()," hours"):e.getMinutes()-r.getMinutes()>0?"".concat(e.getMinutes()-r.getMinutes()," minutes"):"".concat(e.getSeconds()-r.getSeconds()," seconds"))+" ago"},t)})),v=o.page-0||1,m=[1,2,3,4,5].map((function(t,i){return v<=3?t:v-2+i})),e.abrupt("return",{pages:m,page:v,items:l,tag:n.tag});case 8:case"end":return e.stop()}}),e)})))()}},c=r(82),l=r(96),v=r.n(l),m=r(513),d=r(506),h=r(514),f=r(507),_=r(306),x=r(508),y=r(198),w=r(128),O=r(199),j=r(58),P=r(200),V=r(2),D=(r(538),r(14)),C=r(5);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(V.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(C.a)(D.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:L({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-layout",{attrs:{column:"","align-center":""}},[r("v-flex",[1!=t.pages[0]?r("v-chip",{attrs:{to:"/qiita_api_v2/tags/"+t.tag+"?page="+(t.page-1),ripple:""},domProps:{textContent:t._s("<")}}):t._e(),t._v(" "),t._l(t.pages,(function(i){return[r("v-chip",{key:i,attrs:{ripple:"",disabled:t.page==i,to:"/qiita_api_v2/tags/"+t.tag+"?page="+i},domProps:{textContent:t._s(i+"")}})]})),t._v(" "),100!=t.pages[4]?r("v-chip",{attrs:{to:"/qiita_api_v2/tags/"+t.tag+"?page="+(t.page+1),ripple:""},domProps:{textContent:t._s(">")}}):t._e()],2)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm11:"",md10:"",lg8:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-list",[r("v-subheader",{domProps:{textContent:t._s(t.tag)}}),t._v(" "),t._l(t.items,(function(e,n){return[n<t.items.length?r("v-divider",{key:n}):t._e(),t._v(" "),r("v-list-item",{key:e.title,attrs:{ripple:""}},[r("v-list-item-avatar",[r("v-img",{attrs:{src:e.user.profile_image_url}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),t._v(" "),r("v-list-item-subtitle",{domProps:{innerHTML:t._s("Posted by "+e.user.name)}})],1),t._v(" "),r("v-list-item-action",[r("v-list-item-action-text",{domProps:{textContent:t._s(e.time_lag+" update")}})],1)],1)]}))],2)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VChip:m.a,VContainer:d.a,VDivider:h.a,VFlex:f.a,VImg:_.a,VLayout:x.a,VList:y.a,VListItem:w.a,VListItemAction:O.a,VListItemActionText:j.a,VListItemAvatar:P.a,VListItemContent:j.b,VListItemSubtitle:j.c,VListItemTitle:j.d,VSubheader:k})}}]);