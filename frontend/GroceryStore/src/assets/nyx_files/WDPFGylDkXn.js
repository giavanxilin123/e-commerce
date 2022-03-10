if (self.CavalryLogger) { CavalryLogger.start_js(["3nc7747"]); }

__d("useCometPrivacySelectorOnRowInputMismatchEffect_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"PrivacyRowInput_fragment"}],b={alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:a,storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorOnRowInputMismatchEffect_renderer",selections:[b,{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"selected_row_override",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[b],storageKey:null}],storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"}}();e.exports=a}),null);
__d("CometPrivacySelectorEditableQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4421493241281874"}),null);
__d("CometPrivacySelectorEditableQuery.graphql",["CometPrivacySelectorEditable_renderer$normalization.graphql","CometPrivacySelectorEditableQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"id"},c={defaultValue:!1,kind:"LocalArgument",name:"includePickerData"},d={defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},e={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},g={defaultValue:null,kind:"LocalArgument",name:"tags"},h=[{kind:"Variable",name:"id",variableName:"id"}];return{fragment:{argumentDefinitions:[a,c,d,e,f,g],kind:"Fragment",metadata:null,name:"CometPrivacySelectorEditableQuery",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"includePickerData",variableName:"includePickerData"},{kind:"Variable",name:"localPrivacyRow",variableName:"localPrivacyRow"},{kind:"Variable",name:"renderLocation",variableName:"renderLocation"},{kind:"Variable",name:"tags",variableName:"tags"}],kind:"FragmentSpread",name:"CometPrivacySelectorEditable_renderer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,d,e,f,g,a],kind:"Operation",name:"CometPrivacySelectorEditableQuery",selections:[{alias:null,args:h,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:[{kind:"Variable",name:"CometPrivacySelectorEditable_renderer$includePickerData",variableName:"includePickerData"},{kind:"Variable",name:"CometPrivacySelectorEditable_renderer$localPrivacyRow",variableName:"localPrivacyRow"},{kind:"Variable",name:"CometPrivacySelectorEditable_renderer$renderLocation",variableName:"renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEditable_renderer$tags",variableName:"tags"}],fragment:b("CometPrivacySelectorEditable_renderer$normalization.graphql"),kind:"FragmentSpread"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:b("CometPrivacySelectorEditableQuery_facebookRelayOperation"),metadata:{},name:"CometPrivacySelectorEditableQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometPrivacySelectorEditable_renderer.graphql",["CometPrivacySelectorEditableQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"tags",variableName:"tags"},c=[{kind:"Variable",name:"localPrivacyRow",variableName:"localPrivacyRow"},{kind:"Variable",name:"renderLocation",variableName:"renderLocation"},a];return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"includePickerData"},{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{kind:"RootArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:["node"],operation:b("CometPrivacySelectorEditableQuery.graphql"),identifierField:"id"}},name:"CometPrivacySelectorEditable_renderer",selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer"},{args:c,kind:"FragmentSpread",name:"useCometPrivacySelectorOnRowInputMismatchEffect_renderer"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:c,kind:"FragmentSpread",name:"CometPrivacySelectorEntryPointMatchContainer_renderer"},{condition:"includePickerData",kind:"Condition",passingValue:!0,selections:[{args:c,kind:"FragmentSpread",name:"CometPrivacySelectorPickerContainer_renderer"}]},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},a],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDialog_scope"},{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorPushView_scope"},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy_write_id",storageKey:null}],storageKey:null}],type:"PrivacyScopeEditableRenderer",abstractKey:null}}();e.exports=a}),null);
__d("CometUnavailableFeature.react",["fbt","CometTooltip.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.children;return i.jsx("div",{className:"du4w35lb l9j0dhe7 rj84mg9z iyyx5f41 dhp61c6y dp1hu0rb owwhemhu qowsmv63 cebpdrjk bipmatt0 pk4s997a q3lfd5jv k5wvi7nf t1p8iaqh a8s20v7p abs2jz4q a6sixzi8 tojvnm2t",children:i.jsxs(c("CometTooltip.react"),{position:"above",tooltip:h._(/*FBT_CALL*/"Ch\u01b0a t\u1ea3i \u0111\u01b0\u1ee3c"/*FBT_CALL*/),children:[i.jsx("div",{className:"tkr6xdv7 kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 i09qtzwb"}),i.jsx("div",{className:"du4w35lb hzruof5a iyyx5f41 dhp61c6y dp1hu0rb owwhemhu qowsmv63 cebpdrjk bipmatt0 pk4s997a q3lfd5jv k5wvi7nf t1p8iaqh a8s20v7p abs2jz4q a6sixzi8 tojvnm2t",children:a})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeatureKillswitch.react",["CometUnavailableFeature.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children,d=a.enableFeature;a=a.fallback;return d?b:h.jsx(c("CometUnavailableFeature.react"),{children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometPrivacySelectorOnRowInputMismatchEffect",["CometPrivacySelectorContext","CometRelay","PrivacyRowInput","react","useCometPrivacySelectorOnRowInputMismatchEffect_renderer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useCallback,j=e.useContext,k=e.useEffect,l=e.useRef;function a(a,e,f){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacySelectorOnRowInputMismatchEffect_renderer.graphql"),a);var g=l(e);g.current=e;e=a.scope;var m=j(c("CometPrivacySelectorContext")),n=m[0].localPrivacyRow,o=d("PrivacyRowInput").usePrivacyRowInput(e==null?void 0:e.selected_row_override),p=d("PrivacyRowInput").usePrivacyRowInput(a.privacy_row_input);a=d("PrivacyRowInput").usePrivacyRowInput(e==null?void 0:(m=e.selected_option)==null?void 0:m.privacy_row_input);var q=(e=n)!=null?e:a,r=l(q),s=i(function(){return f(q)},[q,f]);k(function(){var a=r.current;r.current=q;if(!d("PrivacyRowInput").arePrivacyRowInputsEqual(n,o))return g.current();if(n!=null)return;if(!d("PrivacyRowInput").arePrivacyRowInputsEqual(a,q))return g.current(s);if(!d("PrivacyRowInput").arePrivacyRowInputsEqual(p,q))return g.current()},[o,q,n,s,f,p])}g["default"]=a}),98);
__d("useCometPrivacySelectorOnTagsChangedEffect",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function j(a,b){if(a==null&&b==null)return!0;if(a==null||b==null)return!1;if(a.length!==b.length)return!1;var c=new Set(b);return a.every(function(a){return c.has(a)})}function a(a,b){var c=i(b);c.current=b;var d=i(a);h(function(){if(!j(d.current,a))return c.current(function(){d.current=a})},[a])}g["default"]=a}),98);
__d("CometPrivacySelectorEditable.react",["CometFeatureKillswitch.react","CometPrivacySelectorContext","CometPrivacySelectorEditable_renderer.graphql","CometPrivacySelectorEntryPointMatchContainer.react","CometRelay","WebPixelRatio","emptyFunction","killswitch","react","unrecoverableViolation","useCometPrivacySelectorDialog","useCometPrivacySelectorNotifyPrivacyOnInitEffect","useCometPrivacySelectorOnRowInputMismatchEffect","useCometPrivacySelectorOnTagsChangedEffect","useCometPrivacySelectorPushView"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l=e.useMemo,m=e.useRef,n=e.useState,o=e.useTransition;function a(a){var e=a.onPrivacyChange,f=a.onPrivacyChangeStart,g=a.renderer,p=babelHelpers.objectWithoutPropertiesLoose(a,["onPrivacyChange","onPrivacyChangeStart","renderer"]);a=p.pushPage;var q=p.renderLocation,r=p.tags;g=d("CometRelay").useRefetchableFragment(h!==void 0?h:h=b("CometPrivacySelectorEditable_renderer.graphql"),g);var s=g[0],t=g[1],u=s.id;g=s.scope;var v=k(c("CometPrivacySelectorContext")),w=v[0];v=v[1];var x=w.localPrivacyRow;c("useCometPrivacySelectorNotifyPrivacyOnInitEffect")(s,x==null?e:null);var y=o(),z=y[0],A=y[1];y=n(!1);var B=y[0],C=y[1],D=m(!1);y=B||z||D.current;function E(a,b,c,e){a===void 0&&(a=null);b===void 0&&(b=!1);c===void 0&&(c=!0);e===void 0&&(e=null);if(u==null)return;if(B&&!b){D.current=!0;return}var f={id:u,includePickerData:!0,localPrivacyRow:(b=e)!=null?b:x,renderLocation:q,scale:d("WebPixelRatio").get(),tags:r};A(function(){t(f,{fetchPolicy:c?"network-only":"store-and-network",onComplete:function(){D.current=!1,a==null?void 0:a()}})})}var F=j(function(a){C(!0),f&&f(a)},[f]),G=m(E);G.current=E;var H=j(function(a){a.type==="success"&&G.current(null,!0,D.current,a.__newLocalPrivacyRow),C(!1),e&&e(a)},[e]);z=j(function(a){return H({privacyRowInput:a,type:"init"})},[H]);c("useCometPrivacySelectorOnTagsChangedEffect")(r,E);c("useCometPrivacySelectorOnRowInputMismatchEffect")(s,E,z);E=l(function(){return babelHelpers["extends"]({},p,{onPrivacyChange:H,onPrivacyChangeStart:F})},[p,H,F]);if(g==null)throw c("unrecoverableViolation")("Failed to render privacy selector. No scope was received.","comet_privacy_selector");z=g.can_viewer_edit;var I=g.privacy_write_id;if(z!==!0)throw c("unrecoverableViolation")("Trying to render an editable Privacy Selector that the user cannot edit","comet_privacy_selector");if(I==null)throw c("unrecoverableViolation")("Trying to render an editable Privacy Selector without a write ID","comet_privacy_selector");z=c("useCometPrivacySelectorDialog")(g,E,w,v);I=z[0];z=z[1];g=c("useCometPrivacySelectorPushView")(g,E,w,v);E=c("killswitch")("COMET_PRIVACY_SELECTOR_EDITABLE_DISABLED");w=null;E||(w=a!=null?g:I);a=(v=p.enabled)!=null?v:!0;I=i.jsx(c("CometPrivacySelectorEntryPointMatchContainer.react"),{props:{isEnabled:!E&&a,isSaving:y,onPress:(g=w)!=null?g:c("emptyFunction"),onPrivacyChange:H,onPrivacyChangeStart:F,renderLocation:q,triggerRef:z},renderer:s});return i.jsx(c("CometFeatureKillswitch.react"),{enableFeature:!E,fallback:I,children:I})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);