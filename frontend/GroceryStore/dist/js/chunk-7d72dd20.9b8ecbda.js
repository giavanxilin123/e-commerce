(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d72dd20"],{"24ba":function(e,r,t){"use strict";t("3166")},"2cfd":function(e,r,t){"use strict";t("e314")},3166:function(e,r,t){},5899:function(e,r){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,r,t){var a=t("1d80"),n=t("577e"),s=t("5899"),o="["+s+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(e){return function(r){var t=n(a(r));return 1&e&&(t=t.replace(i,"")),2&e&&(t=t.replace(u,"")),t}};e.exports={start:c(1),end:c(2),trim:c(3)}},"5e89":function(e,r,t){var a=t("861d"),n=Math.floor;e.exports=function(e){return!a(e)&&isFinite(e)&&n(e)===e}},7156:function(e,r,t){var a=t("861d"),n=t("d2bb");e.exports=function(e,r,t){var s,o;return n&&"function"==typeof(s=r.constructor)&&s!==t&&a(o=s.prototype)&&o!==t.prototype&&n(e,o),e}},"73cf":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"cus-register"},[t("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("HOME")]),t("el-breadcrumb-item",[e._v("REGISTER")])],1),t("section",{attrs:{id:"main"}},[e._m(0),t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"Fullname",prop:"fullname"}},[t("el-input",{model:{value:e.form.fullname,callback:function(r){e.$set(e.form,"fullname",r)},expression:"form.fullname"}})],1),t("el-form-item",{attrs:{label:"Email",prop:"email"}},[t("el-input",{model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),t("el-form-item",{attrs:{label:"Phone (+84)",prop:"phone"}},[t("el-input",{model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",e._n(r))},expression:"form.phone"}})],1),t("el-form-item",{attrs:{label:"Username",prop:"username"}},[t("el-input",{model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"Password",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),t("el-form-item",{attrs:{label:"Confirm",prop:"checkPass"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.checkPass,callback:function(r){e.$set(e.form,"checkPass",r)},expression:"form.checkPass"}})],1),t("el-form-item",[t("el-button",{staticClass:"submitBtn",attrs:{type:"success"},on:{click:function(r){return e.register("form")}}},[e._v("Save")])],1)],1),t("footer",{staticClass:"page-footer"})],1)],1)},n=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("header",{staticClass:"page-header"},[t("div",{staticStyle:{"margin-bottom":"50px"}},[e._v("Create an account")])])}],s=t("1da1"),o=(t("96cf"),t("8ba4"),t("a9e3"),{data:function(){var e=this,r=function(e,r,t){if(!r)return t(new Error("Please input the phone"));setTimeout((function(){Number.isInteger(r)?t():t(new Error("Please input digits"))}),1e3)},t=function(r,t,a){""===t?a(new Error("Please input the password")):(""!==e.form.checkPass&&e.$refs.form.validateField("checkPass"),a())},a=function(r,t,a){""===t?a(new Error("Please input the password again")):t!==e.form.password?a(new Error("Two inputs don't match!")):a()};return{form:{fullname:"",username:"",password:"",phone:"",emaiL:"",checkPass:""},rules:{fullname:[{required:!0,message:"Please input fullname",trigger:"blur"}],username:[{required:!0,message:"Please input username",trigger:"blur"}],password:[{required:!0,validator:t,trigger:"blur"},{min:8,trigger:"blur",message:"Password có ít nhất 8 kí tự"}],checkPass:[{required:!0,validator:a,trigger:"blur"}],phone:[{required:!0,validator:r,trigger:"blur"}],email:[{required:!0,message:"Please input email",trigger:"blur"}]}}},methods:{register:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return e.prev=1,e.next=4,r.$store.dispatch("register",r.form).then((function(){r.alertSuccess(),r.$router.push("/login")}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),r.alertErr(e.t0);case 9:e.next=13;break;case 11:return console.log("error submit!!"),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(r){return e.apply(this,arguments)}}())},alertErr:function(e){this.$message({showClose:!0,message:e.message||"Đã có lỗi xảy ra!",type:"error"})},alertSuccess:function(){this.$message({showClose:!0,message:"Đăng ký thành công!",type:"success"})}}}),i=o,u=(t("2cfd"),t("24ba"),t("2877")),c=Object(u["a"])(i,a,n,!1,null,"56de33a0",null);r["default"]=c.exports},"8ba4":function(e,r,t){var a=t("23e7"),n=t("5e89");a({target:"Number",stat:!0},{isInteger:n})},a9e3:function(e,r,t){"use strict";var a=t("83ab"),n=t("da84"),s=t("94ca"),o=t("6eeb"),i=t("5135"),u=t("c6b6"),c=t("7156"),l=t("d9b5"),f=t("c04e"),m=t("d039"),p=t("7c73"),d=t("241c").f,b=t("06cf").f,h=t("9bf2").f,g=t("58a8").trim,v="Number",w=n[v],E=w.prototype,k=u(p(E))==v,x=function(e){if(l(e))throw TypeError("Cannot convert a Symbol value to a number");var r,t,a,n,s,o,i,u,c=f(e,"number");if("string"==typeof c&&c.length>2)if(c=g(c),r=c.charCodeAt(0),43===r||45===r){if(t=c.charCodeAt(2),88===t||120===t)return NaN}else if(48===r){switch(c.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+c}for(s=c.slice(2),o=s.length,i=0;i<o;i++)if(u=s.charCodeAt(i),u<48||u>n)return NaN;return parseInt(s,a)}return+c};if(s(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var I,N=function(e){var r=arguments.length<1?0:e,t=this;return t instanceof N&&(k?m((function(){E.valueOf.call(t)})):u(t)!=v)?c(new w(x(r)),t,N):x(r)},P=a?d(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;P.length>_;_++)i(w,I=P[_])&&!i(N,I)&&h(N,I,b(w,I));N.prototype=E,E.constructor=N,o(n,v,N)}},e314:function(e,r,t){}}]);
//# sourceMappingURL=chunk-7d72dd20.9b8ecbda.js.map