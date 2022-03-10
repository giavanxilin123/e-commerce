if (self.CavalryLogger) { CavalryLogger.start_js(["JcyO4Rr"]); }

__d("useBaseEntityHeaderProfile_profile.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useBaseEntityHeaderProfile_profile",selections:[{alias:"profile_picture_for_sticky_bar",args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Profile",abstractKey:"__isProfile"};e.exports=a}),null);
__d("useCurrentRouteEntityKey",["getCometEntityKey","react","useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo;function a(){var a=c("useCurrentRoute")(),b=h(function(){return a?c("getCometEntityKey")(a):null},[a]);return b}g["default"]=a}),98);
__d("CometHeaderContentArea.react",["CometEntityHeaderScrollToContext","CometRouteRenderType","CometRouterFocusRegion.react","CometSection.react","cr:683059","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react"),j=i.useCallback,k=i.useMemo,l=i.useRef;function e(e){var f=e.children,g=e.header,i=e.scrollKey;e=e.useDeprecatedStyles;e=e===void 0?!1:e;var m=d("CometRouteRenderType").useIsPushView(),n=l(null),o=l(null),p=j(function(c,d){var e=o.current;o.current=i;if(i!=null&&i===e)return;if(n.current==null)return;if(n.current.offsetWidth<940)return;if(c.current!=null&&n.current.contains(c.current)){e=m?-60:0;c=c.current;while(c!=null&&n.current.contains(c))e+=c.offsetTop,c=c.offsetParent;e+=(c=d)!=null?c:0;a.scrollTo(a.pageXOffset,e);b("cr:683059")&&b("cr:683059").setInitialScrollY(e)}},[m,i]),q=k(function(){return{scrollToTop:p}},[p]);return h.jsxs(c("CometSection.react"),{className:"l9j0dhe7 dp1hu0rb cbu4d94t j83agx80",ref:n,role:"main",testid:void 0,children:[h.jsx(c("CometEntityHeaderScrollToContext").Provider,{value:q,children:g}),h.jsx("div",{className:c("stylex").dedupe(e?{"align-items-1":"bp9cbjyn","display-1":"j83agx80","flex-direction-1":"cbu4d94t","max-width-1":"d2edcug0"}:{"display-1":"j83agx80","flex-direction-1":"cbu4d94t","flex-grow-1":"buofh1pr"}),"data-testid":void 0,children:h.jsx(c("CometRouterFocusRegion.react"),{children:f})})]})}e.displayName=e.name+" [from "+f.id+"]";g["default"]=e}),98);
__d("BaseStickyHeader.react",["BaseScrollableAreaContext","BaseView.react","BaseViewportMarginsContext","HiddenSubtreePassiveContext","intersectionObserverEntryIsIntersecting","react","useIntersectionObserver","useMergeRefs"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useMemo,l=b.useRef,m={root:{overflowAnchor:"rek2kq2y",position:"lpgh02oy"}};function a(a,b){var d=a.children,e=a.onStickyActive,f=a.onStickyChange,g=a.onStickyInactive;a.style;var n=a.topOffset;n=n===void 0?0:n;var o=a.xstyle,p=babelHelpers.objectWithoutPropertiesLoose(a,["children","onStickyActive","onStickyChange","onStickyInactive","style","topOffset","xstyle"]),q=l(null),r=l(!1),s=j(c("BaseScrollableAreaContext")),t=j(c("BaseViewportMarginsContext")),u=s[s.length-1],v=j(c("HiddenSubtreePassiveContext")),w=n+(u!=null?0:t.top);s=c("useIntersectionObserver")(i(function(a){var b=v.getCurrentState();b=b.hiddenOrBackgrounded;if(b)return;b=!c("intersectionObserverEntryIsIntersecting")(a);if(b!==r.current){f&&f(b);b?e&&e():g&&g();r.current=b;a=q.current;a!=null&&(a.style.zIndex=b?"1":"")}},[v,e,f,g]),k(function(){return{root:function(){return u!=null?u.getDOMNode():null},rootMargin:{bottom:0,left:0,right:0,top:-w},threshold:0}},[u,w]));n=c("useMergeRefs")(q,b);return h.jsxs(h.Fragment,{children:[h.jsx(c("BaseView.react"),{ref:s}),h.jsx(c("BaseView.react"),babelHelpers["extends"]({},p,{ref:n,style:babelHelpers["extends"]({},a.style,{top:w,zIndex:r.current?"1":""}),xstyle:[m.root,o],children:d}))]})}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometStickyHeaderContentArea.react",["BaseStickyHeader.react","BaseViewportMarginsAddonContextProvider.react","CometAppNavigationConstants","CometAppNavigationTabBarContainer.react","CometHeaderContentArea.react","CometRouteRenderType","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={tabBar:{zIndex:"kavbgo14"}};function a(a){var b=a.headerHeight;b=b===void 0?60:b;var e=a.showTabContainerOnPushView;e=e===void 0?!1:e;a=babelHelpers.objectWithoutPropertiesLoose(a,["headerHeight","showTabContainerOnPushView"]);var f=d("CometRouteRenderType").useIsPushView();b=h.jsx(c("CometHeaderContentArea.react"),babelHelpers["extends"]({},a,{children:h.jsx(c("BaseViewportMarginsAddonContextProvider.react"),{addon:b,children:a.children})}));return e&&f?h.jsxs(h.Fragment,{children:[h.jsx(c("BaseStickyHeader.react"),{xstyle:i.tabBar,children:h.jsx(c("CometAppNavigationTabBarContainer.react"),{})}),h.jsx(c("BaseViewportMarginsAddonContextProvider.react"),{addon:d("CometAppNavigationConstants").HEADER_HEIGHT,children:b})]}):b}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderDivider.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.isMobileOnly;a=a===void 0?!1:a;return h.jsx("div",{className:a?"r6lr99nr":"l6v480f0"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderResponsiveRow.react",["BaseRow.react","BaseRowItem.react","CometFeedWidthStyles","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={container:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}},j=d("CometFeedWidthStyles").getEntityHeaderWidthStyles();function a(a,b){var d=a.children;a=a.xstyle;return h.jsx(c("BaseRow.react"),{align:"center",ref:b,xstyle:a,children:h.jsx(c("BaseRowItem.react"),{expanding:!0,xstyle:[i.container,j.container],children:d})})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometEntityHeader.react",["CometEntityHeaderDivider.react","CometEntityHeaderResponsiveRow.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={background:{backgroundColor:"cddn0xzi"},bgFill:{backgroundColor:"cwj9ozl2"},recessed:{borderTopEndRadius:"hgaippwi",borderTopStartRadius:"fni8adji",marginEnd:"ad2k81qe",marginStart:"f9o22wc5",marginTop:"tm3tmqwh",maxWidth:"qiq4xgj9",paddingBottom:"ihqw7lf3","@media (max-width: 1249px)":{width:"fm7tvsfd"}},rootWithDropShadow:{boxShadow:"dsne8k7f"},topRow:{paddingBottom:"ihqw7lf3"}};function a(a){var b=a.bottomRow,d=a.coverPhotoRow,e=a.secondaryTopRow,f=a.notice;f=f===void 0?h.jsx(c("CometEntityHeaderDivider.react"),{}):f;var g=a.showBackground;g=g===void 0?!1:g;var j=a.showDropShadow;j=j===void 0?!1:j;var k=a.testid;k=a.topRow;a=a.recessed;a=a===void 0?!1:a;return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:c("stylex")(j&&i.rootWithDropShadow,a&&i.bgFill),"data-testid":void 0,children:[d,h.jsx(c("CometEntityHeaderResponsiveRow.react"),{xstyle:[i.topRow,a&&i.recessed,g&&i.background],children:h.jsx(h.Fragment,{children:k})}),e!=null&&h.jsx(c("CometEntityHeaderResponsiveRow.react"),{xstyle:[i.topRow,g&&i.background],children:e}),f!=null&&h.jsx(c("CometEntityHeaderResponsiveRow.react"),{xstyle:g&&i.background,children:f})]}),b]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderBottomRow.react",["BaseRow.react","BaseRowItem.react","CometEntityHeaderResponsiveRow.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{backgroundColor:"cddn0xzi",boxShadow:"dsne8k7f"}};function a(a){var b=a.buttonGroup;a=a.tabs;return h.jsx(c("CometEntityHeaderResponsiveRow.react"),{xstyle:i.root,children:h.jsxs(c("BaseRow.react"),{verticalAlign:"center",children:[h.jsx(c("BaseRowItem.react"),{expanding:!0,children:a}),h.jsx(c("BaseRowItem.react"),{children:b})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderCoverPhotoRow.react",["BaseRow.react","BaseRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={background:{backgroundColor:"cddn0xzi"},coverPhoto:{display:"j83agx80",flexDirection:"cbu4d94t"}};function a(a){var b=a.coverPhoto,d=a.minHeight;a=a.showBackground;a=a===void 0?!0:a;return h.jsx(c("BaseRow.react"),{align:"center",xstyle:a&&i.background,children:h.jsx(c("BaseRowItem.react"),{expanding:!0,style:d!=null?{minHeight:d}:void 0,xstyle:i.coverPhoto,children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderStickyBar.react",["BaseRow.react","BaseRowItem.react","CometBase.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useImperativeHandle,k=b.useRef,l={container:{transitionDuration:"ijkhr0an",transitionProperty:"flx89l3n",transitionTimingFunction:"nna1d5md"},containerSticky:{transform:"i9k17dj3"},fadeInTransition:{transitionDuration:"c0paw9va",transitionProperty:"l23jz15m",transitionTimingFunction:"d4752i1f"},fadeOutTransition:{transitionDuration:"dvqrsczn",transitionProperty:"l23jz15m",transitionTimingFunction:"d4752i1f"},primaryRow:{minHeight:"pxsmfnpt",opacity:"pedkr2u6",visibility:"n1dktuyu"},primaryRowSticky:{opacity:"b5wmifdl",visibility:"kr9hpln1"},root:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7"},stickyRow:{height:"datstx6m",opacity:"b5wmifdl",position:"pmk7jnqg",top:"i42f9fw1",visibility:"kr9hpln1",width:"k4urcfbm"},stickyRowSticky:{opacity:"pedkr2u6",visibility:"n1dktuyu"}};function m(a,b,c){b(!c).split(/\s+/).filter(Boolean).forEach(function(b){return a.classList.remove(b)}),b(c).split(/\s+/).filter(Boolean).forEach(function(b){return a.classList.add(b)})}function a(a,b){var d=a.initialSticky;d=d===void 0?!1:d;var e=a.isStickyExpanding;e=e===void 0?!1:e;var f=a.primaryContent,g=a.stickyContent,n=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["initialSticky","isStickyExpanding","primaryContent","stickyContent","xstyle"]);var o=k(d),p=k(),q=k(),r=k(),s=k(),t=function(){p.current!=null&&(window.cancelAnimationFrame(p.current),p.current=null)};j(b,function(){return{setSticky:function(a){o.current=a,t(),p.current=window.requestAnimationFrame(function(){p.current=null;var b=q.current;b!=null&&m(b,function(a){return c("stylex")(a&&l.containerSticky)},a);b=r.current;b!=null&&m(b,function(a){return c("stylex")(a&&l.primaryRowSticky,a?l.fadeInTransition:l.fadeOutTransition)},a);b=s.current;b!=null&&m(b,function(a){return c("stylex")(a&&l.stickyRowSticky,a?l.fadeOutTransition:l.fadeInTransition)},a)})}}});i(function(){return t},[]);return h.jsx(c("CometBase.react"),babelHelpers["extends"]({},a,{xstyle:[l.root,n],children:h.jsxs(c("CometBase.react"),{ref:q,xstyle:[l.container,o.current&&l.containerSticky],children:[h.jsx(c("BaseRow.react"),{ref:r,xstyle:[l.primaryRow,o.current&&l.primaryRowSticky,o.current?l.fadeInTransition:l.fadeOutTransition],children:h.jsx(c("BaseRowItem.react"),{expanding:!0,children:f})}),h.jsx(c("BaseRow.react"),{ref:s,xstyle:[l.stickyRow,o.current&&l.stickyRowSticky,o.current?l.fadeOutTransition:l.fadeInTransition],children:h.jsx(c("BaseRowItem.react"),{expanding:e,verticalAlign:"center",children:g})})]})}))}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometTabs.react",["fbt","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometFocusGroup.react","CometKeys","CometTab.react","CometVisualCompletionAttributes","CurrentLocale","SVGIcon","TriangleDownFilled20.svg.react","focusScopeQueries","mergeRefs","react","requireDeferred","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useEffect,l=b.useMemo,m=b.useRef,n=b.useState,o=c("requireDeferred")("CometTabMenu.react").__setRef("CometTabs.react"),p={heightGetter:{lineHeight:"soycq5t1",position:"l9j0dhe7"},heightSetter:{overflowX:"ni8dbmo4",overflowY:"stjgntxs",visibility:"kr9hpln1"},moreTab:{height:"cb02d2ww",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},moreWrapper:{display:"q9uorilb",height:"cb02d2ww",position:"l9j0dhe7",verticalAlign:"j1lvzwm4"},moreWrapperAdaptive:{height:"r9glsfau",maxHeight:"gbic8f20",minHeight:"tgvbjcpo",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},root:{height:"cb02d2ww",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm",zIndex:"du4w35lb"},tab:{display:"pq6dq46d","float":"bzsjyuwj",height:"cb02d2ww",verticalAlign:"j1lvzwm4"},tabsContainer:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"}},q={"default":{width:"t4ae4g2e"},englishOrShorter:{width:"ae0w7mvl"}},r=["en_US","en_GB","nl_NL","vi_VN","af_ZA","fy_NL","kk_KZ","cs_CZ","sw_KE","it_IT","pt_BR","pt_PT","bg_BG","hr_HR","nn_NO","es_ES","es_LA","fr_FR","ca_ES","fr_CA","si_LK","sr_RS","nb_NO","sv_SE","zh_HK","zh_TW","he_IL","ne_NP","eo_EO"];function a(a){var b=a.heightXStyle,e=a.maxHeightXStyle,f=a.tabs,g=a.maxTabs,v=g===void 0?f.length:g,w=a.menuSize,x=a.moreTabStyles,y=a.moreTabXStyle,z=a.moreWrapperXStyle,A=a.tabsContainerStyle;g=a.truncateMenu;var B=g===void 0?!1:g,C=a.onMoreTabPress,D=m(null),E=m([]),F=m(null);g=n(u(f.length,v));var G=g[0],H=g[1];k(function(){H(u(f.length,v))},[f.length,v]);var I=v<f.length?f.slice(0,v):f,J=v>=f.length,K=l(function(){return G.some(function(a){return(a=f[a])==null?void 0:a.selected})},[G,f]),L=j(function(a,f){a=c("mergeRefs")(a,F,function(a){(a==null?void 0:a.parentElement)!=null&&a.parentElement instanceof HTMLElement&&(a.parentElement.tabIndex=0)});var g=[{command:{key:c("CometKeys").DOWN},description:h._(/*FBT_CALL*/"M\u1edf menu"/*FBT_CALL*/),handler:f}];return i.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:g,xstyle:[p.moreWrapper,q["default"],r.includes(c("CurrentLocale").get())&&q.englishOrShorter,b,J&&p.moreWrapperAdaptive,z,e],children:i.jsx(c("CometTab.react"),babelHelpers["extends"]({},x,{"aria-haspopup":"menu",icon:d("SVGIcon").svgIcon(c("TriangleDownFilled20.svg.react")),iconSize:16,label:h._(/*FBT_CALL*/"Xem th\u00eam"/*FBT_CALL*/),onPress:function(){f(),C&&C()},pressableXStyle:[p.moreTab,b],ref:a,role:"tab",selected:K,testid:void 0,xstyle:y}))})},[J,b,K,e,x,y,z,C]);return i.jsx(c("CometFocusGroup.react"),{hideArrowSignifiers:!0,orientation:"horizontal",preventScrollOnFocus:!0,role:"tablist",tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:function(a){return i.jsx("div",babelHelpers["extends"]({className:c("stylex")(p.root,a,b),role:"tablist"},c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,{children:i.jsxs("div",{className:c("stylex")(p.heightGetter),children:[J&&i.jsx("div",{className:c("stylex")(p.heightSetter),children:I.map(function(a,b){a.linkProps;a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["linkProps","onPress"]);return i.createElement(c("CometTab.react"),babelHelpers["extends"]({},a,{key:b+"tab",ref:function(a){return E.current[b]=a},role:"tab",selected:a.selected,xstyle:[p.tab,a.xstyle]}))})}),i.jsxs("div",{className:c("stylex")(p.tabsContainer,A),children:[i.jsx(c("CometDeferredPopoverTrigger.react"),{popoverProps:{menuItems:G.map(function(a){return f[a]}).filter(Boolean),menuSize:w,truncate:B},popoverResource:o,children:L}),I.map(function(a,b){return i.createElement(c("CometTab.react"),babelHelpers["extends"]({},a,{containerRef:D,key:b+"tab",onHidden:function(a){H(function(c){return a?s(c,b):t(c,b)})},pressableXStyle:p.tab,ref:function(a){return E.current[b]=a},role:"tab",selected:a.selected}))})]})]})}))}})}a.displayName=a.name+" [from "+f.id+"]";function s(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function t(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}function u(a,b){return Array.from({length:a}).map(function(a,b){return b}).filter(function(a){return a>=b})}g["default"]=a}),98);
__d("CometEntityHeaderTabs.react",["CometTabs.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={entityHeaderTab:{height:"cb02d2ww",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}};function a(a){var b=a.maxTabs,d=a.onMoreTabPress;a=a.tabs;return h.jsx(c("CometTabs.react"),{maxTabs:b,moreTabStyles:{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)"},moreTabXStyle:i.entityHeaderTab,onMoreTabPress:d,tabs:a.map(function(a){return babelHelpers["extends"]({},a,{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)",xstyle:i.entityHeaderTab})}),truncateMenu:!0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderTabBar.react",["CometEntityHeaderTabs.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.maxTabs,d=a.tabs;a=a.tabsRouteTarget;var e=a===void 0?"self":a,f=d.findIndex(function(a){return a.isActive()});a=d.map(function(a,b){a.isActive;var c=a.linkProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["isActive","linkProps"]);return c?babelHelpers["extends"]({},a,{linkProps:babelHelpers["extends"]({},c,{routeTarget:e}),selected:b===f}):babelHelpers["extends"]({},a,{selected:b===f})});return h.jsx(c("CometEntityHeaderTabs.react"),{maxTabs:b,tabs:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityPageHeader.react",["CometEntityHeader.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("CometEntityHeader.react"),babelHelpers["extends"]({},a,{showBackground:!0}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useBaseEntityHeaderProfile",["RelayHooks","react","useBaseEntityHeaderProfile_profile.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;d("react");function a(a){var c;a=d("RelayHooks").useFragment(h!==void 0?h:h=b("useBaseEntityHeaderProfile_profile.graphql"),a);c=(c=a.profile_picture_for_sticky_bar)==null?void 0:c.uri;var e;switch(a.__typename){case"Page":case"User":case"Hashtag":e="circle";break;default:e="roundedRect"}a=a.url;return{profilePhoto:c,profilePhotoShape:e,url:a}}g["default"]=a}),98);
__d("useCometEntityStickyHeaderHeadline",["CometListCellStrict.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useState;function a(a){var b=a.headline,d=a.linkProps,e=a.onPress,f=a.onStickyChange,g=a.paddingHorizontal,l=a.profilePhoto,m=a.profilePhotoShape,n=a.url;a=j(!1);var o=a[0],p=a[1];a=function(a){p(a),f&&f(a)};var q=i(function(){return babelHelpers["extends"]({preventLocalNavigation:!0,url:n},d)},[d,n]);l=h.jsx(c("CometListCellStrict.react"),{addOnStart:l!=null?{shape:m,size:40,source:{uri:l},type:"profile-photo"}:void 0,headline:b,headlineLineLimit:1,level:3,linkProps:q,onPress:(m=e)!=null?m:k,paddingHorizontal:g});return{headline:l,isSticky:o,onStickyChange:a}}function k(a){a.preventDefault(),scrollTo({behavior:"smooth",left:0,top:0})}g["default"]=a}),98);
__d("useResizeObserverLoopLimitSafeCallbackWrapper",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(a){var b=i(null),c=function(c,d,e){b.current!=null&&window.cancelAnimationFrame(b.current),b.current=window.requestAnimationFrame(function(){a(c,d,e)})};h(function(){return function(){b.current!=null&&window.cancelAnimationFrame(b.current)}},[]);return c}g["default"]=a}),98);
__d("useCometEntityStickyHeaderResizeObserver",["react","useResizeObserver","useResizeObserverLoopLimitSafeCallbackWrapper"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useRef,i=b.useState;function a(a){a=a.topOffset;a=a===void 0?0:a;var b=h(),d=i(0),e=d[0],f=d[1];d=c("useResizeObserver")(c("useResizeObserverLoopLimitSafeCallbackWrapper")(function(a){e!==a.height&&f(a.height)}));return{resizeObserverRef:d,stickyHeaderRef:b,topOffset:a}}g["default"]=a}),98);
__d("CometDirectionalDockingView.react",["cr:1619204"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1619204")}),98);
__d("CometDirectionalDockingView.sticky.react",["$InternalEnum","BaseScrollableAreaContext","BaseViewportMarginsContext","ReactDOMComet","react","stylex","useMergeRefs","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useCallback,j=e.useContext,k=e.useEffect,l=e.useRef,m=e.useState,n={main:{position:"lpgh02oy"}},o=b("$InternalEnum")({Down:0,Up:1}),p=Object.freeze({});function a(a){var b=a.bottomStickyAdjustment_DO_NOT_USE,e=b===void 0?0:b;b=a.top;b=b===void 0?16:b;var f=a.bottom;f=f===void 0?b:f;var g=a.children,q=a.tagName;q=q===void 0?"div":q;a=a.xstyle;var r=j(c("BaseScrollableAreaContext")),s=j(c("BaseViewportMarginsContext")),t=b+s.top,u=f+s.bottom;b=m(0);f=b[0];var v=b[1];s=m(p);b=s[0];var w=s[1],x=i(function(){return r.length>0?r[r.length-1].getDOMNode():window},[r]),y=i(function(){var a=x();if(a==null)return null;if(window.HTMLElement!=null){return a instanceof HTMLElement?a.getBoundingClientRect().height:(a=a.innerHeight)!=null?a:null}return null},[x]),z=l(null),A=l(y());s=i(function(a){a=a.height;z.current=a},[]);s=c("useResizeObserver")(s);var B=l(0),C=l(null),D=l(null),E=l(null);s=c("useMergeRefs")(s,D);var F=i(function(a){a=a.top;var b=B.current,c=C.current;b=a>b?o.Down:o.Up;var f=D.current,g=E.current;if(f==null||g==null)return;B.current=a;C.current=b;if(b===c)return;c=(a=A.current)!=null?a:y();if(c==null)return;a=f.getBoundingClientRect();f=g.getBoundingClientRect();g=a.height;var h=a.top-f.top,i;if(g<c-t-u)h=0,i={top:t};else switch(b){case o.Down:a=Math.round(Math.min(t,c-u-g));i={top:a};break;case o.Up:f=Math.round(Math.min(u,c-t-g));i={bottom:f+e}}d("ReactDOMComet").flushSync(function(){w(function(a){if(i.top!=null&&a.top!=null&&i.top===a.top)return a;return i.bottom!=null&&a.bottom!=null&&i.bottom===a.bottom?a:(a=i)!=null?a:p}),v(h)})},[u,t,y]),G=i(function(){var a=x();return a==null?{left:0,top:0}:a instanceof HTMLElement?{left:a.scrollLeft,top:a.scrollTop}:{left:a.scrollY,top:a.scrollY}},[x]);k(function(){var a=x();if(a!=null){var b=function(){F(G())};a.addEventListener("scroll",b);return function(){a.removeEventListener("scroll",b)}}},[x,G,F]);k(function(){var a=function(){A.current=y();var a=C.current;C.current=null;var b=G();F({left:b.left,top:b.top+(a===o.Up?-1:1)})};window.addEventListener("resize",a);return function(){window.removeEventListener("resize",a)}},[G,F,y]);return h.jsxs(h.Fragment,{children:[h.jsx("div",{ref:E,style:{height:f}}),h.jsx(q,{className:c("stylex")(n.main,a),ref:s,style:b,children:g})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometProfilePictureGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={glimmer:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",height:"datstx6m",width:"k4urcfbm"},root:{backgroundColor:"cwj9ozl2",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",paddingTop:"ecm0bbzt",paddingEnd:"ph5uu5jm",paddingBottom:"e5nlhep0",paddingStart:"b3onmgus"}};function a(a){a=a.size;return h.jsx(c("BaseLoadingStateElement.react"),{style:{height:a,width:a},xstyle:i.root,children:h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.glimmer),index:0})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometTabsGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{display:"j83agx80",marginBottom:"n851cfcs",marginStart:"dhix69tm",marginTop:"n1l5q3vz"},tab:{borderTopStartRadius:"lit7pgxp",borderTopEndRadius:"o3c63hce",borderBottomEndRadius:"hqlzco19",borderBottomStartRadius:"lsl2245n",height:"jnigpg78",marginTop:"aov4n071",marginEnd:"gso5pdkr",marginBottom:"bi6gxh9e",marginStart:"hcukyx3x",width:"nxfmr2wi"}};function a(){return h.jsxs(c("BaseLoadingStateElement.react"),{xstyle:i.root,children:[h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:1}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:2}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:3}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:4}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.tab),index:5})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a!=null&&b!=null&&a===b}f.isViewingSelfProfile=a}),66);
__d("cometSearchEntityScopedTypeaheadDialogFallback",["CometCardedDialogLoadingState.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={anchor:{minHeight:"asz1e59d"}};a=function(a){return h.jsx(c("CometCardedDialogLoadingState.react"),{anchorXStyle:i.anchor,onClose:a})};g["default"]=a}),98);
__d("useSearchCometResultsTypeaheadDialogTriggerClickHandler",["cometSearchEntityScopedTypeaheadDialogFallback","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a,b,d){a=c("useCometEntryPointDialog")(a,{entityID:b},"button",c("cometSearchEntityScopedTypeaheadDialogFallback"));var e=a[0],f=a[1],g=a[2],i=a[3];a=a[4];var j=h(function(){e({entityID:b},function(){},"comet.search_scoped."+d)},[b,e,d]);return[j,f,g,i,a]}g["default"]=a}),98);
__d("CometEntityScopedTypeaheadDialogTrigger.react",["fbt","ix","TetraButton.react","fbicon","react","useSearchCometResultsTypeaheadDialogTriggerClickHandler"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.buttonProps,e=a.dialogEntryPoint,f=a.entityID;a=a.entityType;e=c("useSearchCometResultsTypeaheadDialogTriggerClickHandler")(e,f,a);f=e[0];a=e[1];var g=e[2],k=e[3];e=e[4];return j.jsx(c("TetraButton.react"),babelHelpers["extends"]({icon:d("fbicon")._(i("491282"),16),label:h._(/*FBT_CALL*/"T\u00ecm ki\u1ebfm"/*FBT_CALL*/),labelIsHidden:!0,onHoverIn:g,onHoverOut:k,onPress:f,onPressIn:e,ref:a,testid:void 0,type:"secondary"},b))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("MWLightSpeedChatContactsTabs.bs",["fbt","CometTabs.react","bs_curry","gkx","qex","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react"),k={root:{display:"j83agx80",flexDirection:"cbu4d94t",maxHeight:"frmmrliq"},rootV2:{maxHeight:"nwf6jgls"},tab:{display:"j83agx80",flexGrow:"buofh1pr",justifyContent:"taijpn5t",width:"kmruvjm7"},tabsContainer:{boxShadow:"flhsghwj"},thinTab:{width:"cmkr7hnq"}};function a(a){var c=a.renderActiveContacts;a=a.renderSuggestedContacts;var d=j.useState(function(){return!0}),e=d[1];d=d[0];var f=[{label:g._(/*FBT_CALL*/"G\u1ee3i \u00fd"/*FBT_CALL*/),selected:d,onPress:function(a){return b("bs_curry")._1(e,function(a){return!0})},xstyle:[k.tab,b("qex")._("1499")===!0?k.thinTab:!1],underlineColor:"var(--accent)"}];return j.jsxs("div",{className:(i||(i=b("stylex")))(k.root,b("gkx")("4338")?k.rootV2:!1),children:[j.jsx("div",{className:i(k.tabsContainer),children:j.jsx(b("CometTabs.react"),{tabs:f})}),d?b("bs_curry")._1(a,void 0):b("bs_curry")._1(c,void 0)]})}c=a;f.styles=k;f.make=c}),null);
__d("MWLightSpeedChatTabActiveContact.bs",["AvailableListConstants","ImmutableArray.bs","MWChatContactPresenceHook.bs","MWThreadAddOnPrimary.bs","TetraListCell.react","bs_caml_option","bs_curry","createMWChatSearchTypeaheadDataEntry","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=a.hovercardTriggerRef,d=a.setTokens;a=a.result;var e=a[0],f=h.useMemo(function(){return b("createMWChatSearchTypeaheadDataEntry")(e)},[e]),g=f.rawData,i=g.displayName;g=g.imageUrl;a=b("MWChatContactPresenceHook.bs").useHook(a[1].a);if(a!==void 0){var j=a.status;j=j==null?!1:j===b("AvailableListConstants").ACTIVE}else j=!1;if(a!==void 0){a=a.last_active_time;a=a==null||a<=0?void 0:a}else a=void 0;g=b("MWThreadAddOnPrimary.bs").get(b("ImmutableArray.bs").fromArray([g]),void 0,j,"circle",36,a);j={headline:i,level:4,onPress:function(a){return b("bs_curry")._1(d,function(a){return a.concat([f])})},selected:!1,disabled:!1,ref:c};g!==void 0&&(j.addOnPrimary=b("bs_caml_option").valFromOption(g));return h.jsx(b("TetraListCell.react"),j)}c=a;f.make=c}),null);
__d("MWLightSpeedChatTabActiveContacts.bs",["ActorHovercard.react","CometScrollableArea.react","FBID.bs","FocusWithinHandler.react","MWLightSpeedChatTabActiveContact.bs","bs_curry","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react"),i={contactsList:{paddingTop:"cxgpxx05"}};function a(a){var c=a.results,d=a.setTokens;return h.jsx("ul",{children:c.map(function(a){var c=a[0],e=b("FBID.bs").ofStringExn(c.id);return h.jsx("li",{children:h.jsx(b("ActorHovercard.react"),{actorID:e,position:"start",children:function(c){return h.jsx(b("MWLightSpeedChatTabActiveContact.bs").make,{hovercardTriggerRef:c,setTokens:d,result:a})}})},c.id)})})}var j=h.memo(a,function(a,b){return b.preventReording});d={make:j};function c(a){var c=a.results,d=a.setTokens;a=h.useState(function(){return!1});var e=a[1],f=a[0];return h.jsx(b("CometScrollableArea.react"),{horizontal:!0,xstyle:i.contactsList,children:h.jsx("div",{onMouseEnter:function(a){return b("bs_curry")._1(e,function(a){return!0})},onMouseLeave:function(a){return b("bs_curry")._1(e,function(a){return!1})},children:h.jsx(b("FocusWithinHandler.react"),{children:function(a,b){return h.jsx(j,{results:c,setTokens:d,preventReording:f||a||b})}})})})}e=c;f.styles=i;f.ContactListItems=d;f.make=e}),null);
__d("MWLightSpeedChatTabSuggestedContacts.bs",["ActorHovercard.react","CometMiddot.react","CometScrollableArea.react","ImmutableArray.bs","MDSText.react","MWThreadAddOnPrimary.bs","TetraListCell.react","bs_caml_option","bs_curry","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react"),i={contactsList:{paddingTop:"cxgpxx05"}};function a(a){var c=a.tokens,d=a.setTokens;return h.jsx(b("CometScrollableArea.react"),{horizontal:!0,xstyle:i.contactsList,children:h.jsx("ul",{children:c.map(function(a){var c=a.rawData,e=c.id,f=c.displayName,g=c.imageUrl,i=b("MWThreadAddOnPrimary.bs").get(b("ImmutableArray.bs").fromArray([g]),void 0,!1,"circle",36,void 0);g=c.subtext;c=c.isInstagramAccount===!0;var j=c&&g!==""?b("bs_caml_option").some(h.jsxs(b("MDSText.react"),{type:"meta4",numberOfLines:1,children:[g,h.jsx(b("CometMiddot.react"),{}),"Instagram"]})):void 0;return h.jsx("li",{children:h.jsx(b("ActorHovercard.react"),{actorID:e,position:"start",children:function(c){c={headline:f,level:4,onPress:function(c){return b("bs_curry")._1(d,function(b){return[a]})},selected:!1,disabled:!1,testid:"chat_tab_suggested_contact_"+e,ref:c};i!==void 0&&(c.addOnPrimary=b("bs_caml_option").valFromOption(i));j!==void 0&&(c.meta=b("bs_caml_option").valFromOption(j));return h.jsx(b("TetraListCell.react"),c)}})},e)})})})}c=a;f.styles=i;f.make=c}),null);
__d("MWLightSpeedChatTabContactsContainer.bs",["MNetRankType.bs","MWChatSearchFetchContactRecommendations.bs","MWLightSpeedChatTabActiveContacts.bs","MWLightSpeedChatTabSuggestedContacts.bs","cr:1780694","createMWChatSearchTypeaheadDataEntry","react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=a.isSearchView,d=a.setTokens,e=b("MWChatSearchFetchContactRecommendations.bs").useHook(b("MNetRankType.bs").messengerUserSearchNullstate,void 0),f=b("MWChatSearchFetchContactRecommendations.bs").useHook(b("MNetRankType.bs").inboxActiveNow,void 0),g=h.useMemo(function(){return e.map(function(a){return b("createMWChatSearchTypeaheadDataEntry")(a[0])})},[e]);a=h.useCallback(function(a){return h.jsx(b("MWLightSpeedChatTabSuggestedContacts.bs").make,{tokens:g,setTokens:d})},[g,d]);var i=h.useCallback(function(a){return h.jsx(b("MWLightSpeedChatTabActiveContacts.bs").make,{results:f,setTokens:d})},[f,d]);if(!(b("cr:1780694")==null)&&!c)return h.jsx(b("cr:1780694").make,{renderActiveContacts:i,renderSuggestedContacts:a,activeContactsCount:f.length});else return null}c=a;f.$MWLightSpeedChatContactsTabs$OR$null$requireCond=b("cr:1780694");f.make=c}),null);
__d("MWV2ComposeTabHeader.bs",["fbt","MDSText.react","MWPThreadTheme.bs","MWV2HeaderCloseButton.bs","MWV2HeaderContainer.bs","MWV2IsTabFocusedContext.bs","UseMWV2CloseTab.bs","bs_curry","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react"),k={title:{paddingStart:"h4z51re5"}};function l(a){return j.jsx("div",{className:(i||(i=b("stylex")))(k.title),children:j.jsx(b("MDSText.react"),{type:"headline4",children:g._(/*FBT_CALL*/"Tin nh\u1eafn m\u1edbi"/*FBT_CALL*/)})})}c={make:l};function a(a){var c=a.tab;a=a.thread;var d=b("UseMWV2CloseTab.bs").useHook(a,c);a=b("MWV2IsTabFocusedContext.bs").useContext(void 0);c=b("MWPThreadTheme.bs").useTop(void 0);a=a?c:"#BEC2C9";return j.jsx(b("MWV2HeaderContainer.bs").make,{startContent:j.jsx(l,{}),endContent:j.jsx(b("MWV2HeaderCloseButton.bs").make,{onPress:function(a){return b("bs_curry")._1(d,void 0)},color:a,label:g._(/*FBT_CALL*/"\u0110\u00f3ng tab"/*FBT_CALL*/)}),divider:!1})}d=a;f.styles=k;f.ComposeTabTitle=c;f.make=d}),null);
__d("MWV2ComposeTab.bs",["BootloaderResource","CometPlaceholder.react","CometProgressRingIndeterminate.react","JSResource","MAWGating.bs","MWChatLightSpeedSearchTypeahead.bs","MWChatStateActions.bs","MWChatStateV2.bs","MWChatTabsTokenizerLayoutInlineStrategy.react","MWChatTemporarySearchResult.bs","MWChatTokenizerTokenStrategy.react","MWInteropTokenUtils.bs","MWLightSpeedChatTabContactsContainer.bs","MWPSearchSystem.bs","MWPThreadTheme.bs","MWSearchTypeaheadViewItemDisabledHook.bs","MWV2ChatTabComposer.bs","MWV2ComposeTabHeader.bs","MWV2ComposerHasContentContext.bs","MWV2FileDropzone.bs","MWV2NewThreadUtils.bs","MWV2ReplyContext.bs","MWV2TabContainer.bs","ReStore.bs","bs_caml_int64","bs_caml_option","bs_curry","bs_int64","cr:11268","createMWChatSearchTypeaheadDataEntry","gkx","react","stylex","usePrevious"],(function(a,b,c,d,e,f){"use strict";var g,h,i=g||b("react"),j=b("JSResource")("MWV2ThreadPreview.bs").__setRef("MWV2ComposeTab.bs");function k(a,c,d,e,f,g){g={tokens:a,setTokens:c,setPreviewThread:d,children:f};e!==void 0&&(g.nullstate=b("bs_caml_option").valFromOption(e));return g}function l(a){return i.createElement(b("BootloaderResource").read(j).make,a)}c={reasonResource:j,makeProps:k,make:l};var m={toggleContainer:{boxShadow:"rlauoc8d",paddingTop:"l29c1vbm",paddingBottom:"j7796vcc",paddingStart:"dati1w0a",paddingEnd:"hv4rvrfc"},encapsulateZIndex:{zIndex:"du4w35lb",display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m"},preview:{zIndex:"tkr6xdv7",display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",position:"l9j0dhe7",minHeight:"tgvbjcpo"},spinner:{display:"j83agx80",alignItems:"bp9cbjyn",justifyContent:"taijpn5t",flexGrow:"buofh1pr"}};function n(a){return b("createMWChatSearchTypeaheadDataEntry")(b("MWChatTemporarySearchResult.bs").fromContact(void 0,a,void 0))}function o(a){var c=a.length,d=b("usePrevious")(c);a=i.useContext(b("MWV2ReplyContext.bs").context);var e=a.clearReply;i.useEffect(function(){!(d==null)&&c!==d&&b("bs_curry")._2(e,b("bs_caml_int64").zero,!0)},[c,d,e])}function a(a){var c=a.tab;a=a.initialTokens;var d=b("ReStore.bs").useHook(void 0);i.useEffect(function(){b("MWPSearchSystem.bs").makeAll(d)},[d]);var e=i.useState(function(){}),f=e[0],g=i.useState(function(){if(b("gkx")("2761"))return b("MAWGating.bs").isArmadillo(void 0);else return!1}),j=g[1],p=g[0];g=a.map(n);a=b("MWV2NewThreadUtils.bs").useTokens(g,p);var q=a[1],r=a[0];g=b("MWV2NewThreadUtils.bs").useTokensShimmed(r,p);o(r);var s=i.useState(function(){return!1}),t=s[1],u=b("MWChatStateV2.bs").useDispatch(void 0),v=function(a){return b("bs_curry")._1(u,b("MWChatStateActions.bs").lockInTab(Date.now(),c.tabId,a))};v=b("MWV2NewThreadUtils.bs").useOnAddToken(p,t,v);var w=i.useCallback(function(a){return b("bs_curry")._1(t,function(a){return!0})},[t]),x=i.useMemo(function(){return b("MWChatTabsTokenizerLayoutInlineStrategy.react").createMWChatTabsTokenizerLayoutInlineStrategy(!0)},[]),y=b("MWSearchTypeaheadViewItemDisabledHook.bs").useIsDisabled(r,p),z=i.useMemo(function(){return r.some(b("MWInteropTokenUtils.bs").isInterop)},[r]),A=i.jsx(b("CometPlaceholder.react"),{children:i.jsx(b("MWLightSpeedChatTabContactsContainer.bs").make,{isSearchView:!1,setTokens:function(a){return b("bs_curry")._1(q,b("bs_curry")._1(a,[]))}}),fallback:i.jsx("div",{className:(h||(h=b("stylex")))(m.spinner),children:i.jsx(b("CometProgressRingIndeterminate.react"),{color:"disabled",size:24})})}),B=i.useMemo(function(){return{footer:b("cr:11268")==null?null:i.jsx("div",{className:(h||(h=b("stylex")))(m.toggleContainer),children:i.jsx(b("cr:11268").make,{setAreWeCreatingASecureThread:j,areWeCreatingASecureThread:p,stretch:!0,disabled:z})})}},[p,j,z]),C={tab:c};f!==void 0&&(C.thread=b("bs_caml_option").valFromOption(f));if(f!==void 0){var D=f.O;D=b("bs_int64").to_string(D!==void 0?D:f.a);w=i.jsx(b("CometPlaceholder.react"),{children:i.jsx(b("MWPThreadTheme.bs").make,{themeFbid:f.z,children:i.jsx(b("MWV2ChatTabComposer.bs").make,{thread:f,tab:c,isPreviewThread:!0,secureThreadToggle:p,afterSendMessage:w},D)}),fallback:null})}else w=null;D={tab:c,children:i.jsxs("div",{className:h(m.encapsulateZIndex),children:[i.jsx(b("MWV2ComposeTabHeader.bs").make,C),i.jsxs(b("MWV2FileDropzone.bs").make,{children:[i.jsx(b("MWChatLightSpeedSearchTypeahead.bs").make,{isDisabled:s[0],getIsViewItemDisabled:y,onAddToken:v,onChangeTokens:q,onSearchAbandon:function(a){},onSearchCompletion:function(a){},tokens:r,includeRecommendations:!1,excludedIDs:a[2],tokenItemRenderer:b("MWChatTokenizerTokenStrategy.react"),layoutStategyRenderer:x,extraLayoutProps:B}),i.jsx("div",{className:h(m.preview),children:i.jsx(b("CometPlaceholder.react"),{children:i.jsx(l,k(g,q,e[1],b("bs_caml_option").some(A),w,void 0)),fallback:null})})],isMediaOnly:z})]})};f!==void 0&&(D.thread=b("bs_caml_option").valFromOption(f));return i.jsx(b("MWV2ComposerHasContentContext.bs").make,{children:i.jsx(b("MWV2TabContainer.bs").make,D)})}d=a;f.LazyMWV2ThreadPreview=c;f.styles=m;f.$MAWSecureThreadToggle$requireCond=b("cr:11268");f.make=d}),null);