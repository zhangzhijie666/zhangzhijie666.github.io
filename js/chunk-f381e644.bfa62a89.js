(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f381e644"],{"35c1":function(t,a,e){},"43f0":function(t,a,e){"use strict";e("35c1")},cf2a:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"order"},t._l(t.orderlist,(function(a,r){return e("div",{key:r,staticClass:"order-card-body"},[a.shopInfo?e("div",{staticClass:"order-card-wrap",on:{click:function(e){return t.$router.push({name:"orderInfo",params:a})}}},[e("img",{attrs:{src:a.image_path,alt:""}}),e("div",{staticClass:"order-card-content"},[e("div",{staticClass:"order-card-head"},[e("div",{staticClass:"title"},[e("a",{attrs:{href:""}},[e("span",[t._v(t._s(a.orderInfo.shopInfo.name))]),e("i",{staticClass:"fa fa-angle-right"})]),e("p",[t._v("订单已完成")])]),e("p",{staticClass:"date-time"},[t._v(t._s(a.date))])]),e("div",{staticClass:"order-card-detail"},[e("p",{staticClass:"detail"},[t._v(t._s(a.orderInfo.selectFoods[0].name))]),e("p",{staticClass:"price"},[t._v("￥"+t._s(a.totalPrice))])])])]):t._e(),e("div",{staticClass:"order-card-bottom"},[e("botton",{staticClass:"cardbutton",on:{click:function(a){return t.$router.push("/shop")}}},[t._v("再来一单")])],1)])})),0)},s=[],o=e("a6f4"),c=e("bc3a"),n=e.n(c),i={name:"Order",beforeRouteEnter:function(t,a,e){e((function(t){t.getData()}))},setup:function(t){var a=Object(o["f"])([]),e=function(){n.a.get("/api/user/orders/".concat(localStorage.ele_login)).then((function(t){a.value=t.data.orderlist}))};return Object(o["d"])((function(){console.log(a.value)})),{orderlist:a,getData:e}}},d=i,l=(e("43f0"),e("2877")),u=Object(l["a"])(d,r,s,!1,null,"c3c02954",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-f381e644.bfa62a89.js.map