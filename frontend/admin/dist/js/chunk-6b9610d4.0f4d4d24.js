(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b9610d4"],{"0d94":function(t,e,a){"use strict";a("5eff")},"3bdf":function(t,e,a){t.exports=a.p+"img/vehicle2.d59dabf4.jpeg"},"5eff":function(t,e,a){},"96ab":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"optimize"},[i("el-row",{staticStyle:{position:"absolute",top:"60px",width:"95%",right:"50%",transform:"translateX(50%)"}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"vehicle"},[i("div",{staticClass:"tag-vehicle"},[i("div",{staticClass:"icon-truck"},[i("i",{staticClass:"fas fa-truck",staticStyle:{color:"white"}})]),i("div",{staticStyle:{"font-size":"18px",padding:"20px"}},[t._v("Vehicle")])]),i("el-row",{staticClass:"vehicle-type"},[i("el-col",{staticStyle:{"border-right":"1px solid #eee"},attrs:{span:4}},[t._v("Types")]),i("el-col",{attrs:{span:10}},[i("div",{staticStyle:{height:"300px"}},[i("img",{attrs:{src:a("b328"),alt:""}})])]),i("el-col",{attrs:{span:10}},[i("div",{staticStyle:{height:"300px"}},[i("img",{attrs:{src:a("3bdf"),alt:""}})])])],1),i("el-row",{staticClass:"vehicle-capacity"},[i("el-col",{staticStyle:{"border-right":"1px solid #eee"},attrs:{span:4}},[t._v("Capacity")]),i("el-col",{attrs:{span:10}},[i("div",{staticStyle:{padding:"10px","background-color":"#67c23a",color:"white",width:"30%",margin:"0 auto","border-radius":"5px"}},[t._v(" 3 ")])]),i("el-col",{attrs:{span:10}},[i("div",{staticStyle:{padding:"10px","background-color":"#67c23a",color:"white",width:"30%",margin:"0 auto","border-radius":"5px"}},[t._v(" 4 ")])])],1),i("el-row",{staticClass:"vehicle-quantity"},[i("el-col",{staticStyle:{"border-right":"1px solid #eee"},attrs:{span:4}},[t._v("Quantity")]),i("el-col",{attrs:{span:10}},[t._v(" 2 ")]),i("el-col",{attrs:{span:10}},[t._v(" 2 ")])],1)],1)]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"map"},[i("div",{staticClass:"tag-map"},[i("div",{staticClass:"icon-map"},[i("i",{staticClass:"fas fa-map",staticStyle:{color:"white"}})]),i("div",{staticStyle:{"font-size":"18px",padding:"20px"}},[t._v("Google Map")])]),i("div",{attrs:{id:"map"}})])]),i("div",{staticClass:"route-step"},[i("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"success"},on:{click:t.optimizeRoute}},[t._v("Optimize Route")])],1),i("el-col",{staticClass:"sidebar",attrs:{span:24}},[i("div",{staticClass:"panel"}),i("div",{staticClass:"panel"}),i("div",{staticClass:"panel"}),i("div",{staticClass:"panel"})])],1)],1)},s=[],n=a("1da1"),r=(a("96cf"),a("d81d"),a("4de4"),a("bc3a")),o=a.n(r),c={data:function(){return{numVehicle:[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"}],value:1,center:{lat:10.7719937,lng:106.7057951},fullscreenLoading:!1,map:"",marker:"",color:["blue","#f44336","#67c23a","#9c27b0","black"],legs:[]}},methods:{optimizeRoute:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading({lock:!0,text:"Optimizing Route",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e.next=3,o.a.get("https://gv-grocery-api.herokuapp.com/solving-route").then((function(e){var i=e.data.route_legs,s=i.map((function(e){return e.map((function(e){return{location:t.orderProgressingList[e-1]["location"]}}))})),n=function(e){document.getElementsByClassName("panel")[e].innerHTML="Vehicle ".concat(e),(new window.google.maps.DirectionsService).route({origin:t.center,destination:t.center,waypoints:s[e],travelMode:"DRIVING"},(function(a,i){"OK"==i&&new window.google.maps.DirectionsRenderer({panel:document.getElementsByClassName("panel")[e],directions:a,map:t.map,polylineOptions:{strokeColor:t.color[e],strokeWeight:"3",strokeOpacity:"0.5"}})}))};for(var r in s)n(r);a.close()}));case 3:case"end":return e.stop()}}),e)})))()}},computed:{orderProgressingList:function(){return this.$store.state.orders.filter((function(t){return"Progressing"==t.status}))}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchOrders");case 2:t.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:t.center.lat,lng:t.center.lng},zoom:16}),t.marker=new window.google.maps.Marker({position:t.center,map:t.map,animation:window.google.maps.Animation.BOUNCE});case 4:case"end":return e.stop()}}),e)})))()}},l=c,p=(a("0d94"),a("2877")),d=Object(p["a"])(l,i,s,!1,null,"0de84262",null);e["default"]=d.exports},b328:function(t,e,a){t.exports=a.p+"img/vehicle5.44ae1543.jpeg"},d81d:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").map,n=a("1dde"),r=n("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6b9610d4.0f4d4d24.js.map