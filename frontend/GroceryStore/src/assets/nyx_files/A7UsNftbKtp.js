if (self.CavalryLogger) { CavalryLogger.start_js(["na4OEyw"]); }

__d("NullStateNoResults",["IconSource","bx"],(function(a,b,c,d,e,f,g){"use strict";a={dark:new(c("IconSource"))("nullStateGlyphs",c("bx").getURL(c("bx")("1160064")),112),"default":new(c("IconSource"))("nullStateGlyphs",c("bx").getURL(c("bx")("1160065")),112)};g["default"]=a}),98);
__d("MarketplaceUnifiedDropdownFilter.react",["fbt","ix","CometPressable.react","CometScreenReaderText.react","CometSelectMenuTrigger.react","TetraIcon.react","TetraText.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useMemo,m={button:{display:"q9uorilb",marginEnd:"cgat1ltu",marginStart:"kkf49tns"},grow:{flexGrow:"buofh1pr",marginBottom:"qzhwtbm6",marginTop:"knvmm38d",minWidth:"hpfvmrgz"},overlayHoveredWhenActive:{backgroundColor:"l4sirx1s"},pressable:{borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",marginTop:"aov4n071"},pressableMobile:{backgroundColor:"tdjehn4e",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",position:"l9j0dhe7"},pressableMobileActive:{backgroundColor:"oo1teu6h"},root:{boxSizing:"rq0escxv",display:"j83agx80",justifyContent:"taijpn5t",paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr",width:"k4urcfbm"},rootDesktop:{position:"l9j0dhe7","@media (max-width: 899px)":{display:"hlyrhctz"}},rootMobile:{"@media (min-width: 900px)":{display:"en3zacjc"}}},n=j.memo(function(a){var b=a.disabled;b=b===void 0?!1:b;a=a.isHighlighted;a=a===void 0?!1:a;return j.jsx(c("TetraIcon.react"),{color:b?"disabled":a?"highlight":"secondary",icon:d("fbicon")._(i("481884"),20)})});function a(a){var b=a.clearable,e=b===void 0?!0:b;b=a.disabled;var f=b===void 0?!1:b;b=a.isResponsive;b=b===void 0?!1:b;var g=a.label,o=a.labelIsHidden,p=o===void 0?!1:o,q=a.onChange,r=a.options,s=a.selectedLabel;o=a.selectedValue;a=a.testid;a=k(function(){q()},[q]);var t=k(function(a){q(a)},[q]),u=o!=null,v=j.jsx(c("CometPressable.react"),{"aria-label":h._(/*FBT_CALL*/"X\u00f3a b\u1ed9 l\u1ecdc {Filter Name}"/*FBT_CALL*/,[h._param("Filter Name",g)]),disabled:f,display:"inline",onPress:a,overlayRadius:"50%",testid:void 0,children:j.jsx(c("TetraIcon.react"),{color:f?"disabled":"highlight",icon:d("fbicon")._(i("491581"),20)})}),w=l(function(){if(u)return m.overlayHoveredWhenActive},[u]);a=l(function(){return r.map(function(a){return babelHelpers["extends"]({},a,{testid:"Marketplace-DropdownFilterItem-"+String(a.label)})})},[r]);var x=j.memo(function(a){var b=a.isHighlighted;b=b===void 0?!1:b;a=a.isMobile;a=a===void 0?!1:a;return j.jsxs("div",{className:c("stylex")(m.root),children:[j.jsx("div",{className:c("stylex")(m.grow),children:u?j.jsx(c("TetraText.react"),{color:f?"disabled":"highlight",numberOfLines:1,testid:void 0,type:"bodyLink3",children:p?j.jsxs(j.Fragment,{children:[j.jsx(c("CometScreenReaderText.react"),{text:h._(/*FBT_CALL*/"L\u1ecdc theo {filter name}, \u0111\u00e3 ch\u1ecdn:"/*FBT_CALL*/,[h._param("filter name",g)])}),h._(/*FBT_CALL*/"{selectedlabel}"/*FBT_CALL*/,[h._param("selectedlabel",s)])]}):j.jsxs(j.Fragment,{children:[j.jsx(c("CometScreenReaderText.react"),{text:h._(/*FBT_CALL*/"L\u1ecdc theo"/*FBT_CALL*/)}),h._(/*FBT_CALL*/"{label}{colon}{selectedlabel}"/*FBT_CALL*/,[h._param("label",g),h._param("colon",g!==null?": ":""),h._param("selectedlabel",s)])]})}):j.jsxs(j.Fragment,{children:[j.jsx(c("CometScreenReaderText.react"),{text:h._(/*FBT_CALL*/"L\u1ecdc theo"/*FBT_CALL*/)}),j.jsx(c("TetraText.react"),{color:f?"disabled":b?"highlight":"primary",numberOfLines:1,type:a?"bodyLink3":"body3",children:g})]})}),j.jsx("div",{className:c("stylex")(m.button),children:u&&e?v:j.jsx(n,{disabled:f,isHighlighted:b})})]})}),y=j.jsx(c("CometSelectMenuTrigger.react"),{align:"stretch",disabled:f,onChange:t,options:a,selectedValue:o,size:"full",children:function(a,b){return j.jsx(c("CometPressable.react"),babelHelpers["extends"]({},b,{"aria-haspopup":"listbox",expanding:!0,id:b!=null?((b=b.id)!=null?b:"")+"-left":void 0,overlayHoveredStyle:w,ref:a,testid:void 0,xstyle:m.pressable,children:j.jsx(x,{})}))}});if(!b)return y;b=j.jsx(c("CometSelectMenuTrigger.react"),{align:"stretch",disabled:f,onChange:t,options:a,selectedValue:o,size:"full",children:function(a,b,d){return j.jsx(c("CometPressable.react"),babelHelpers["extends"]({},b,{"aria-haspopup":"listbox",expanding:!0,id:b!=null?((b=b.id)!=null?b:"")+"-left-mobile":void 0,ref:a,testid:void 0,xstyle:[m.pressableMobile,(u||d)&&m.pressableMobileActive],children:j.jsx(x,{isHighlighted:u||d,isMobile:!0})}))}});return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:c("stylex")(m.rootDesktop),children:y}),j.jsx("div",{className:c("stylex")(m.rootMobile),children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometResults.react",["deferredLoadComponent","react","requireDeferredForDisplay","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("deferredLoadComponent")(c("requireDeferredForDisplay")("SearchCometResultsInitialResults.react").__setRef("SearchCometResults.react"));function a(a){var b,d=a.resultsLayoutStrategy,e=a.rootLayoutStrategyFactory,f=a.routeProps;a=a.searchQueryReference;b=(b=a.variables.args.context)==null?void 0:b.bsid;if(b==null)throw c("unrecoverableViolation")("Search result page session id is missing from timespent metadata","search");return e({resultContent:h.jsx(i,{resultsLayoutStrategy:d,routeProps:f,searchQueryReference:a,sessionID:b}),sessionID:b})}g["default"]=a}),98);
__d("searchCometResultsResultReducer",[],(function(a,b,c,d,e,f){"use strict";function g(){return{childResults:[],hasIemTriggered:!1,hasNoResults:!1,isLoading:!0,resultRefs:{current:new Map()},results:[]}}function a(a){return new Map([[a,g()]])}function b(a,b){var c=b.sessionID,d=new Map(a);switch(b.type){case"UPDATE_RESULT_STATE":var e,f=b.hasIemTriggered,h=b.hasNoResults,i=b.isLoading,j=b.results;d.set(c,{childResults:((e=a.get(c))==null?void 0:e.childResults)||[],hasIemTriggered:f,hasNoResults:h,isLoading:i,resultRefs:(e=a.get(c))==null?void 0:e.resultRefs,resultRefsByIndex:(f=a.get(c))==null?void 0:f.resultRefsByIndex,results:j});break;case"UPDATE_RESULT_REFS_BY_INDEX":i=((h=a.get(c))==null?void 0:h.childResults)||[];f=((e=a.get(c))==null?void 0:e.resultRefsByIndex)||{current:new Map()};j=[];h=b.isChildResults;e=b.resultRefsByIndex;for(var e=e.current,k=Array.isArray(e),l=0,e=k?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var m,n;if(k){if(l>=e.length)break;n=e[l++]}else{l=e.next();if(l.done)break;n=l.value}n=n;var o=n[0];n=n[1];f==null?void 0:(m=f.current)==null?void 0:m.set(o,n);h&&j.push(String(n.loggingUnitID))}o=(m=a.get(c))!=null?m:g();d.set(c,babelHelpers["extends"]({},o,{childResults:i.concat(j),resultRefsByIndex:f}));break;case"UPDATE_RESULT_REFS":l=((n=a.get(c))==null?void 0:n.childResults)||[];e=((k=a.get(c))==null?void 0:k.resultRefs)||{current:new Map()};h=[];m=b.isChildResults;o=b.resultRefs;for(var i=o.current,j=Array.isArray(i),f=0,i=j?i:i[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(j){if(f>=i.length)break;n=i[f++]}else{f=i.next();if(f.done)break;n=f.value}k=n;b=k[0];o=k[1];e==null?void 0:(n=e.current)==null?void 0:n.set(b,o);m&&h.push(String(b.logging_unit_id))}n=(k=a.get(c))!=null?k:g();d.set(c,babelHelpers["extends"]({},n,{childResults:l.concat(h),resultRefs:e}));break}return d}f.searchCometResultsResultsInitialState=g;f.searchCometResultsResultReducerInitialState=a;f.searchCometResultsResultReducer=b}),66);
__d("SearchCometResultsResultContext",["SearchCometResultsQueryContext","react","searchCometResultsResultReducer","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useContext,j=e.useReducer,k=h.createContext(),l=h.createContext();f=function(a){var b=a.children;a=a.sessionID;a=j(d("searchCometResultsResultReducer").searchCometResultsResultReducer,a,d("searchCometResultsResultReducer").searchCometResultsResultReducerInitialState);var c=a[0];a=a[1];return h.jsx(k.Provider,{value:a,children:h.jsx(l.Provider,{value:c,children:b})})};function a(){var a=i(k);if(a==null)throw c("unrecoverableViolation")("SearchCometResultsResultDispatchContext not setup","search");return a}function m(){var a=d("SearchCometResultsQueryContext").useSearchCometResultsQueryContext();a=a.sessionID;var b=i(l);if(b==null)throw c("unrecoverableViolation")("SearchCometResultsResultStateContext not setup","search");b=b.get(a);return b==null?d("searchCometResultsResultReducer").searchCometResultsResultsInitialState():b}function b(){var a=m();return a.results.some(function(a){return((a=a.node)==null?void 0:a.role)==="SEARCH_INTERCEPT"})}g.SearchCometResultsResultContextProvider=f;g.useSearchResultsResultDispatcher=a;g.useSearchResultsResultState=m;g.useSearchResultsIntercepted=b}),98);
__d("SearchCometResultsEndOfResultsNotice.react",["fbt","CometColumn.react","CometColumnItem.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){return i.jsx(c("CometColumn.react"),{paddingTop:12,paddingVertical:0,ref:b,spacing:8,children:i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("TetraText.react"),{align:"center",color:"secondary",type:"body3",children:h._(/*FBT_CALL*/"\u0110\u00e3 h\u1ebft k\u1ebft qu\u1ea3"/*FBT_CALL*/)})})})}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("SearchCometResultsSingleColumnRootLayout.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.content;a=a.width;return h.jsx("div",{className:c("stylex").dedupe({"max-width-1":"d2edcug0","width-1":"oh7imozk"},a==="wide"?{"width-1":"o7dlgrpb"}:null),role:"feed",children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometResultsTwoColumnRootLayout.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.content;a=a.sideRail;return h.jsxs("div",{className:"j83agx80",children:[h.jsx("div",{className:"iahi5gft o7dlgrpb d2edcug0 pfnyh3mw buofh1pr",role:"feed",children:b}),h.jsx("div",{className:"i6t7qrcs n5hh3s10 i0u1bx94",children:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useSearchCometHasBootstrapEntityModule",["CometRouteParams"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteParams").useRouteParams();a=a.__pei__;return a!=null}g["default"]=a}),98);
__d("SearchCometResultsColumnRootLayoutStrategy.react",["CometPlaceholder.react","CometSuspenseList.react","SearchCometResultsCardGlimmer.react","SearchCometResultsEndOfResultsNotice.react","SearchCometResultsResultContext","SearchCometResultsSingleColumnRootLayout.react","SearchCometResultsTwoColumnRootLayout.react","react","useSearchCometHasBootstrapEntityModule"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.emptyResultsCard,e=a.layoutProps;a=a.resultContent;e=e||{};var f=e.beforeResultContent,g=e.rightRail;e=e.singleColumnWidth;var i=d("SearchCometResultsResultContext").useSearchResultsResultState(),j=i.hasNoResults;i=i.isLoading;var k=d("SearchCometResultsResultContext").useSearchResultsIntercepted(),l=c("useSearchCometHasBootstrapEntityModule")();if(j&&!l)return b;f=h.jsxs(c("CometSuspenseList.react"),{revealOrder:"forwards",tail:"collapsed",children:[h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("SearchCometResultsCardGlimmer.react"),{}),children:k?null:(b=f)!=null?b:null}),!k&&j&&l?h.jsx(c("SearchCometResultsEndOfResultsNotice.react"),{}):null,h.jsxs(c("CometPlaceholder.react"),{fallback:h.jsx(c("SearchCometResultsCardGlimmer.react"),{}),children:[a,i?h.jsx(c("SearchCometResultsCardGlimmer.react"),{}):null]})]});return h.jsx("div",{className:"fjf4s8hc tu1s4ah4 f7vcsfb0 k3eq2f2k d2edcug0 rq0escxv",children:!k&&g!=null?h.jsx(c("SearchCometResultsTwoColumnRootLayout.react"),{content:f,sideRail:g}):h.jsx(c("SearchCometResultsSingleColumnRootLayout.react"),{content:f,width:e})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BrowseEntryPointAction",[],(function(a,b,c,d,e,f){a=Object.freeze({BACKGROUND:"BACKGROUND",CAMPUS_DIRECTORY_SEARCH_TILE:"CAMPUS_DIRECTORY_SEARCH_TILE",CELEBRITY_HCM:"CELEBRITY_HCM",CHALLENGE_POST_CTA:"CHALLENGE_POST_CTA",CORRECTION:"CORRECTION",CREATION_IDEAS_FOR_PUBLIC_FIGURES:"CREATION_IDEAS_FOR_PUBLIC_FIGURES",DEADEND_SEARCHES:"DEADEND_SEARCHES",DEEP_LINK:"DEEP_LINK",DEEP_LINK_VOYAGER:"DEEP_LINK_VOYAGER",DYNAMIC_KEYWORD_CHAINING:"DYNAMIC_KEYWORD_CHAINING",ENTITY_ACTION_BAR:"ENTITY_ACTION_BAR",EXPLORE:"EXPLORE",FEED_HASHTAG_CONNECTED_GROUP_CTA:"FEED_HASHTAG_CONNECTED_GROUP_CTA",FEED_INTEREST_BUMPER:"FEED_INTEREST_BUMPER",FEED_INTEREST_IFR:"FEED_INTEREST_IFR",FEED_INTEREST_QP:"FEED_INTEREST_QP",FILTER_LINK:"FILTER_LINK",FILTERS:"FILTERS",FOLLOW_UP_FEED_PIVOT:"FOLLOW_UP_FEED_PIVOT",GROUP_MALL_ANNOUNCEMENT_HASHTAG_CARD:"GROUP_MALL_ANNOUNCEMENT_HASHTAG_CARD",GROUP_MALL_EXTERNALLY_POPULAR_RELATED_HASHTAGS:"GROUP_MALL_EXTERNALLY_POPULAR_RELATED_HASHTAGS",GROUP_MALL_HASHTAG_CREATE_POST_CTA:"GROUP_MALL_HASHTAG_CREATE_POST_CTA",GROUP_MALL_UNIT_POPULAR_TOPIC_HASHTAG:"GROUP_MALL_UNIT_POPULAR_TOPIC_HASHTAG",GROUP_POST_HASHTAG_FOOTER:"GROUP_POST_HASHTAG_FOOTER",GROUP_TOPIC_TAB_HASHTAG:"GROUP_TOPIC_TAB_HASHTAG",GROUPS_HSCROLL_SUGGESTION_CARD:"GROUPS_HSCROLL_SUGGESTION_CARD",GROUPS_INTEREST:"GROUPS_INTEREST",HASHTAG:"HASHTAG",HASHTAG_CTA:"HASHTAG_CTA",LOCAL_SEARCH_LOCATION_UPSELL_REFRESH:"LOCAL_SEARCH_LOCATION_UPSELL_REFRESH",LOCATION_PIVOT:"LOCATION_PIVOT",MAP:"MAP",MUSIC_ARTIST_PMV:"MUSIC_ARTIST_PMV",MUSIC_ARTIST_POST:"MUSIC_ARTIST_POST",MUSIC_ARTIST_QP:"MUSIC_ARTIST_QP",NULLSTATE_ALERT:"NULLSTATE_ALERT",PAGE_CATEGORY:"PAGE_CATEGORY",PHOTO_STREAM:"PHOTO_STREAM",PHOTOS_MODULE_PIVOT:"PHOTOS_MODULE_PIVOT",PLACES_HCM_TO_NEEDLE_SEARCH_PIVOT:"PLACES_HCM_TO_NEEDLE_SEARCH_PIVOT",PLACES_HCM_TO_SET_SEARCH_PIVOT:"PLACES_HCM_TO_SET_SEARCH_PIVOT",PLACES_MODULE_PIVOT:"PLACES_MODULE_PIVOT",POST_CHAINING:"POST_CHAINING",QUERYLESS_CONTAINER:"QUERYLESS_CONTAINER",QUICK_PROMOTION:"QUICK_PROMOTION",REFERRAL_GROUP_POST_MALL_DD_CTA:"referral_group_post_mall_dd_cta",RELATED_HASHTAGS:"RELATED_HASHTAGS",RELATED_PUBLISHER_CUE:"RELATED_PUBLISHER_CUE",RELATED_SEARCHES:"RELATED_SEARCHES",RELATED_SEARCHES_EXPLORE:"RELATED_SEARCHES_EXPLORE",SEARCH_BOX:"SEARCH_BOX",SEARCH_INTERCEPT:"SEARCH_INTERCEPT",SEE_MORE:"SEE_MORE",SERP_NULL_STATE_CLEAR_FILTERS:"SERP_NULL_STATE_CLEAR_FILTERS",SERP_NULL_STATE_SEARCH_GLOBAL:"SERP_NULL_STATE_SEARCH_GLOBAL",SERP_TAB:"SERP_TAB",SPORTS_MODULE:"SPORTS_MODULE",SUBTOPIC_PIVOTS:"SUBTOPIC_PIVOTS",SUGGESTED_SEARCH_CUE:"SUGGESTED_SEARCH_CUE",SWIPE_LEFT:"SWIPE_LEFT",SWIPE_RIGHT:"SWIPE_RIGHT",SYMT_PAGES:"SYMT_PAGES",TOPIC_DEEP_DIVE_API:"TOPIC_DEEP_DIVE_API",TRENDING:"TRENDING",UNKNOWN__DO_NOT_USE:"UNKNOWN__DO_NOT_USE",VIDEO_APP:"VIDEO_APP",VOICE:"VOICE",WATCH_NULLSTATE_TOPICS:"WATCH_NULLSTATE_TOPICS",WEBVIEW_SUGGESTION_CARD:"WEBVIEW_SUGGESTION_CARD",WORK_KNOWLEDGE_SERP:"WORK_KNOWLEDGE_SERP",WORKPLACE_GROUP_POPULAR_HASHTAGS:"WORKPLACE_GROUP_POPULAR_HASHTAGS",WORKPLACE_GROUP_SCOPED_HASHTAG_PAGE_SEE_MORE:"WORKPLACE_GROUP_SCOPED_HASHTAG_PAGE_SEE_MORE",WORKPLACE_TRENDING_HASHTAGS:"WORKPLACE_TRENDING_HASHTAGS",WORKPLACE_WATCH:"WORKPLACE_WATCH"});f["default"]=a}),66);
__d("extractEntrypointData",["BrowseEntryPointAction","SearchCometInterestsDeepDiveUtil"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var e=b.__epa__;b=b.__eps__;e=typeof e==="string"?c("BrowseEntryPointAction")[e]:null;a=a!=null?d("SearchCometInterestsDeepDiveUtil").getHashtagTag(a):null;e==null&&a!=null&&(e="HASHTAG");a=typeof b==="string"?b:null;return{entryPointAction:e,entryPointSurface:a}}g["default"]=a}),98);
__d("searchCometResultsSpellerLogEvent",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("ODS").__setRef("searchCometResultsSpellerLogEvent");function a(a){h.onReady(function(b){b.bumpEntityKey(4154,"search_browse_logging",a,1)})}g["default"]=a}),98);
__d("useSearchCometSerpTtbrTracker",["cr:1791501","cr:1919446","performanceAbsoluteNow","react"],(function(a,b,c,d,e,f,g){"use strict";e=d("react");var h=e.useCallback,i=e.useRef;function a(a,d){var e=b("cr:1919446")!=null?b("cr:1919446")(d):null,f=i(null);return h(function(g){if(e==null||d==null||f.current===g)return;f.current=g;if(g){if(b("cr:1791501")){var h=c("performanceAbsoluteNow")(),i=b("cr:1791501").getCurrentVCTraces();i.forEach(function(a){a.addMountPoint(g,h,"SearchTTBR")})}e.endTtbr(a)}},[e,a,d])}g["default"]=a}),98);
__d("useSearchCometResultsClientSERPUnitIDForSessionID",["uuid"],(function(a,b,c,d,e,f,g){"use strict";var h=new Map();function a(a){var b=h.get(a);if(b!=null)return b;b="www_serp:"+c("uuid")();h.set(a,b);return b}g["default"]=a}),98);
__d("SearchResultPageLoggingResultsLoadedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744353");c=b("FalcoLoggerInternal").create("search_result_page_logging_results_loaded",a);e.exports=c}),null);
__d("useSearchCometResultsResultsLoadedLogger",["CometRouteParams","InteractionTracingMetrics","SearchResultPageLoggingResultsLoadedFalcoEvent","extractEntrypointData","gkx","react","searchCometResultsSpellerLogEvent"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect,i=new Set();function a(a){var b=a.entryPointScope,e=a.filterType,f=a.loggingUnitID,g=a.query,j=a.sessionID,k=a.typeaheadSessionID;a=d("CometRouteParams").useRouteParams();var l=a.__epa__;a=c("extractEntrypointData")(g,a);var m=a.entryPointAction,n=a.entryPointSurface;h(function(){if(f==null||i.has(j))return;l==="CORRECTION"&&c("searchCometResultsSpellerLogEvent")("alert_ref_dym_link");i.add(j);c("InteractionTracingMetrics").currentInteractionLogger().addMetadata("comet_search_results_session_id",j);var a={common:{logging_unit_id:f,session_id:j,timestamp:Date.now().toString(),typeahead_sid:k},entry_point_action:m,entry_point_scope:b,entry_point_surface:n,filter_type:e,query:g};c("SearchResultPageLoggingResultsLoadedFalcoEvent").logImmediately(function(){return a})},[l,m,b,n,e,f,g,j,k])}g["default"]=a}),98);
__d("CometTypeaheadBaseStaticDataSource",["CometTypeaheadDataCacheProvider","CometTypeaheadInMemoryMapDataCache","cometTypeaheadStartsWithMatchBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){var b=a.entries,d=a.keyBuilder;a=a.matchBuilder;a=a===void 0?c("cometTypeaheadStartsWithMatchBuilder"):a;this.$1=new(c("CometTypeaheadDataCacheProvider"))({cache:new(c("CometTypeaheadInMemoryMapDataCache"))(),keyBuilder:d,matchBuilder:a});this.$1.add(b)}var b=a.prototype;b.fetchCache=function(a){var b=a.query;return{entries:this.$1.match(b),params:a}};return a}();g["default"]=a}),98);
__d("useCometTypeaheadStaticDataSource",["CometTypeaheadBaseStaticDataSource","cometSearchTypeaheadPayloadDecoratorAddLimit","react","useDeepEqualMemo"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo;function a(a){var b=a.limit;a=babelHelpers.objectWithoutPropertiesLoose(a,["limit"]);var d=h(function(){return c("cometSearchTypeaheadPayloadDecoratorAddLimit")(b)},[b]),e=c("useDeepEqualMemo")(a),f=h(function(){return new(c("CometTypeaheadBaseStaticDataSource"))(e)},[e]);return h(function(){return{fetchCache:function(a){return d(f.fetchCache(a))}}},[f,d])}g["default"]=a}),98);