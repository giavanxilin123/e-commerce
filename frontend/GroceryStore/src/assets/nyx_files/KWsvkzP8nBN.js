if (self.CavalryLogger) { CavalryLogger.start_js(["Lmc78WV"]); }

__d("ProfileCometFeaturedHighlightsHScrollCard_featured.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:[{kind:"Literal",name:"height",value:500},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometFeaturedHighlightsHScrollCard_featured",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"StoryHighlightContainerToHighlightedCardsConnection",kind:"LinkedField",name:"highlighted_cards",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"cover_card",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},a],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[a],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"StoryHighlightContainer",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsViewPaginationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3753285588089988"}),null);
__d("ProfileCometFeaturedHighlightsViewPaginationQuery.graphql",["ProfileCometFeaturedHighlightsViewPaginationQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:3,kind:"LocalArgument",name:"count"},c={defaultValue:null,kind:"LocalArgument",name:"cursor"},d={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"scale"},f=[{kind:"Variable",name:"id",variableName:"id"}],g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"}],j={alias:null,args:[{kind:"Literal",name:"height",value:500},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},k=[h];return{fragment:{argumentDefinitions:[a,c,d,e],kind:"Fragment",metadata:null,name:"ProfileCometFeaturedHighlightsViewPaginationQuery",selections:[{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsIntroCardHScroll_page"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,e,d],kind:"Operation",name:"ProfileCometFeaturedHighlightsViewPaginationQuery",selections:[{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,h,{kind:"InlineFragment",selections:[{alias:null,args:i,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,h,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"StoryHighlightContainerToHighlightedCardsConnection",kind:"LinkedField",name:"highlighted_cards",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"cover_card",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[g,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},j],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[j],type:"Video",abstractKey:null},{kind:"InlineFragment",selections:k,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:k,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null},h],storageKey:null}],type:"StoryHighlightContainer",abstractKey:null}],storageKey:null},g],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:i,filters:null,handle:"connection",key:"ProfileCometTileFeaturedHighlightsView_profile_tile_items",kind:"LinkedHandle",name:"profile_tile_items"}],type:"ProfileTileView",abstractKey:null}],storageKey:null}]},params:{id:b("ProfileCometFeaturedHighlightsViewPaginationQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometFeaturedHighlightsViewPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsIntroCardHScroll_page.graphql",["ProfileCometFeaturedHighlightsViewPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["profile_tile_items"],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:3,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["node"],operation:b("ProfileCometFeaturedHighlightsViewPaginationQuery.graphql"),identifierField:"id"}},name:"ProfileCometFeaturedHighlightsIntroCardHScroll_page",selections:[{alias:"profile_tile_items",args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"__ProfileCometTileFeaturedHighlightsView_profile_tile_items_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{args:null,kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsHScrollCard_featured"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},c],type:"ProfileTileView",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsIntroCardHScroll_view.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometFeaturedHighlightsIntroCardHScroll_view",selections:[{alias:"all_featured_highlights",args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],type:"ProfileTileView",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTileFeaturedHighlightsView_viewStyleRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"first",value:3}],b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],e={alias:null,args:[{kind:"Literal",name:"height",value:500},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},f=[c];return{kind:"SplitOperation",metadata:{},name:"ProfileCometTileFeaturedHighlightsView_viewStyleRenderer$normalization",selections:[{alias:null,args:null,concreteType:"ProfileTileView",kind:"LinkedField",name:"view",plural:!1,selections:[{alias:null,args:a,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[b,c,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"StoryHighlightContainerToHighlightedCardsConnection",kind:"LinkedField",name:"highlighted_cards",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"cover_card",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[b,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},e],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[e],type:"Video",abstractKey:null},{kind:"InlineFragment",selections:f,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:f,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:f,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:f,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null},c],storageKey:null}],type:"StoryHighlightContainer",abstractKey:null}],storageKey:null},b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:"profile_tile_items(first:3)"},{alias:null,args:a,filters:null,handle:"connection",key:"ProfileCometTileFeaturedHighlightsView_profile_tile_items",kind:"LinkedHandle",name:"profile_tile_items"},c,{alias:"all_featured_highlights",args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:d,storageKey:null},{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileTileEditFeaturedHighlightsRenderer"]}],concreteType:null,kind:"LinkedField",name:"view_style_edit_renderer",plural:!1,selections:[b,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTileFeaturedHighlightsView_viewStyleRenderer",fragmentName:"ProfileCometFeaturedHighlightsEditButton_viewStyleEditRenderer",fragmentPropName:"viewStyleEditRenderer",kind:"ModuleImport"}],type:"ProfileTileEditFeaturedHighlightsRenderer",abstractKey:null}],storageKey:'view_style_edit_renderer(supported:["ProfileTileEditFeaturedHighlightsRenderer"])'}],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometTileFeaturedHighlightsView_viewStyleRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTileFeaturedHighlightsView_viewStyleRenderer",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"ProfileTileView",kind:"LinkedField",name:"view",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsIntroCardHScroll_page"},{args:null,kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsIntroCardHScroll_view"},{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileTileEditFeaturedHighlightsRenderer"]}],concreteType:null,kind:"LinkedField",name:"view_style_edit_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTileFeaturedHighlightsView_viewStyleRenderer",fragmentName:"ProfileCometFeaturedHighlightsEditButton_viewStyleEditRenderer",fragmentPropName:"viewStyleEditRenderer",kind:"ModuleImport"}],type:"ProfileTileEditFeaturedHighlightsRenderer",abstractKey:null}],storageKey:'view_style_edit_renderer(supported:["ProfileTileEditFeaturedHighlightsRenderer"])'}],storageKey:null},action:"LOG",path:"view"}],type:"ProfileTileViewFeaturedHighlightsRenderer",abstractKey:null};e.exports=a}),null);
__d("CometLegacyFlexibleHScroll.react",["fbt","ix","BaseScrollableAreaContext","CometCircleButton.react","CometLeftRailLayoutContext","CometRouteRenderType","CometScreenReaderText.react","CometTrackingNodeProvider.react","ExecutionEnvironment","FocusInertRegion.react","Locale","UserAgent","emptyFunction","fbicon","focusScopeQueries","react","stylex","useLayoutEffect_SAFE_FOR_SSR","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useContext,m=b.useMemo,n=b.useRef,o=b.useState,p={buttonContainer:{position:"l9j0dhe7",zIndex:"du4w35lb"},buttonShadow:{borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",boxShadow:"fpf4h9qb",marginTop:"ku2m03ct",marginEnd:"o3lre8g0",marginBottom:"oud54xpy",marginStart:"gu00c43d"},buttonWrapper:{boxSizing:"rq0escxv",display:"a8c37x1j",opacity:"pedkr2u6",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"pmk7jnqg",top:"d3dyzuny",transform:"ke6wolob",transitionDuration:"dpja2al7",transitionProperty:"art1omkt",transitionTimingFunction:"nw2je8n7",zIndex:"tkr6xdv7"},buttonWrapperLeft:{left:"olfbdlsu"},buttonWrapperLeftPeek:{left:"tu783bs0"},buttonWrapperRight:{right:"crelghtz"},buttonWrapperRightPeek:{right:"kcz9t1cc"},card:{alignItems:"gs1a9yip",boxSizing:"rq0escxv",display:"j83agx80",flexShrink:"pfnyh3mw",marginEnd:"cgat1ltu",marginStart:"kkf49tns",scrollSnapAlign:"qdtcsgvi",whiteSpace:"l3itjdph"},container:{MsOverflowStyle:"q5bimw55",WebkitOverflowScrolling:"gvuykj2m",boxSizing:"rq0escxv",display:"j83agx80",marginBottom:"nvd5e08m",marginEnd:"dlv3wnog",marginStart:"rl04r1d5",overflowX:"d76ob5m9",overflowY:"eg9m0zos",paddingBottom:"tu1s4ah4",paddingTop:"cxgpxx05",scrollbarWidth:"ofs802cu",scrollPadding:"rx6hrq12",scrollSnapDestination:"fq9i8bis",scrollSnapPointsX:"cvgtb6nh",whiteSpace:"g0qnabr5",width:"g2wf7z4h","::-webkit-scrollbar":{display:"pohlnb88",height:"dkue75c7",width:"mb9wzai9"}},containerNoPeek:{marginEnd:"nks68n2l",marginStart:"pvr25hwf",width:"ojx2bl83"},containerNoScroll:{overflowX:"ni8dbmo4",overflowY:"stjgntxs"},containerSnap:{scrollSnapType:"tu18w1b4"},hidden:{opacity:"b5wmifdl",pointerEvents:"hzruof5a"},root:{marginBottom:"c8r2yrt7",marginTop:"o7xrwllt",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingBottom:"dy7m38rt",paddingTop:"jktsbyx5",position:"l9j0dhe7",width:"k4urcfbm"}},q=(e={},e[0]={width:"sb3ic3sl","@media (max-width: 299px)":{width:"tfksjxg8"}},e[404]={width:"ggcypfsu","@media (min-width: 404px) and (max-width: 561px)":{width:"sobqwnqt"}},e[562]={width:"ofd9me3t","@media (min-width: 562px) and (max-width: 719px)":{width:"td7blb7a"}},e[720]={width:"sdrevmf3","@media (min-width: 720px) and (max-width: 877px)":{width:"glyio8i8"}},e[878]={width:"l03c6b1c","@media (min-width: 878px) and (max-width: 1035px)":{width:"k16hv5iz"}},e[1036]={width:"krip0r2g","@media (min-width: 1036px) and (max-width: 1193px)":{width:"n7ax3ju6"}},e[1194]={width:"k053btz7","@media (min-width: 1194px) and (max-width: 1351px)":{width:"qyq3bng9"}},e[1352]={width:"ou6256eu","@media (min-width: 1352px) and (max-width: 1509px)":{width:"jx5ewjth"}},e[1510]={width:"os5xbxp4","@media (min-width: 1510px) and (max-width: 1667px)":{width:"matrw453"}},e[1668]={width:"imn5sp6r","@media (min-width: 1668px) and (max-width: 1825px)":{width:"qzh5gji1"}},e[1826]={width:"fhmu4ftv","@media (min-width: 1826px) and (max-width: 1983px)":{width:"rktfhwv6"}},e[1984]={width:"qmkk6tzr","@media (min-width: 1984px) and (max-width: 2142px)":{width:"cb2rhssz"}},e),r=(b={},b[0]={width:"sb3ic3sl","@media (max-width: 299px)":{width:"tfksjxg8"}},b[404]={width:"ggcypfsu","@media (min-width: 404px) and (max-width: 561px)":{width:"s1av8jbn"}},b[562]={width:"ofd9me3t","@media (min-width: 562px) and (max-width: 719px)":{width:"td7blb7a"}},b[720]={width:"sdrevmf3","@media (min-width: 720px) and (max-width: 1237px)":{width:"fi71shic"}},b[1238]={width:"l03c6b1c","@media (min-width: 1238px) and (max-width: 1395px)":{width:"ocjw1uzi"}},b[1396]={width:"krip0r2g","@media (min-width: 1396px) and (max-width: 1553px)":{width:"c8rtk9va"}},b[1554]={width:"k053btz7","@media (min-width: 1554px) and (max-width: 1711px)":{width:"o3vjum15"}},b[1712]={width:"ou6256eu","@media (min-width: 1712px) and (max-width: 1869px)":{width:"bublhacv"}},b[1870]={width:"os5xbxp4","@media (min-width: 1870px) and (max-width: 2027px)":{width:"c3erg5wm"}},b[2028]={width:"imn5sp6r","@media (min-width: 2028px) and (max-width: 2300px)":{width:"j8ox1cbs"}},b),s=(e={},e[0]={width:"sb3ic3sl","@media (max-width: 703px)":{width:"in26lqiz"}},e[704]={width:"ggcypfsu","@media (min-width: 704px) and (max-width: 1071px)":{width:"qooh2bza"}},e[1072]={width:"ofd9me3t","@media (min-width: 1072px) and (max-width: 1319px)":{width:"lp0f6e9c"}},e[1320]={width:"sdrevmf3","@media (min-width: 1320px) and (max-width: 1627px)":{width:"p4x3ivwe"}},e[1628]={width:"l03c6b1c","@media (min-width: 1628px) and (max-width: 1935px)":{width:"q4xfv403"}},e[1936]={width:"krip0r2g","@media (min-width: 1936px) and (max-width: 2243px)":{width:"sob1zstr"}},e[2244]={width:"k053btz7","@media (min-width: 2244px) and (max-width: 2552px)":{width:"npfc6u9o"}},e),t=(b={},b[0]={width:"sb3ic3sl","@media (max-width: 703px)":{width:"in26lqiz"}},b[704]={width:"ggcypfsu","@media (min-width: 704px) and (max-width: 1371px)":{width:"baq9rg7i"}},b[1372]={width:"ofd9me3t","@media (min-width: 1372px) and (max-width: 1679px)":{width:"d11r8mdz"}},b[1680]={width:"sdrevmf3","@media (min-width: 1680px) and (max-width: 1987px)":{width:"rnemfwoz"}},b[1988]={width:"l03c6b1c","@media (min-width: 1988px) and (max-width: 2295px)":{width:"b6spqgn4"}},b[2296]={width:"krip0r2g","@media (min-width: 2296px) and (max-width: 2604px)":{width:"mez6i6k5"}},b),u=4,v=16,w=h._(/*FBT_CALL*/"M\u1ee5c ti\u1ebfp theo"/*FBT_CALL*/),x=h._(/*FBT_CALL*/"M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"/*FBT_CALL*/);e=d("ExecutionEnvironment").canUseDOM&&window.matchMedia("(prefers-reduced-motion: reduce)");var y=e&&e.matches,z=c("UserAgent").isBrowser("Chrome"),A=document.documentElement!=null&&"scrollBehavior"in document.documentElement.style,B=function(a,b){typeof a.scrollTo==="function"?A?a.scrollTo({behavior:y?"auto":"smooth",left:b,top:0}):a.scrollTo(b,0):a.scrollLeft=b},C=d("Locale").isRTL(),D=function(a){return a%1<.2?Math.floor(a):Math.ceil(a)},E=function(a){return a%1>.8?Math.ceil(a):Math.floor(a)};function F(a){var b=a.children;a=a.xstyle;var e=o(!1),f=e[0],g=e[1];e=c("useVisibilityObserver")({onHidden:function(){return g(!1)},onVisible:function(){return g(!0)}});return j.jsx("div",{"aria-hidden":!f,className:c("stylex")(a),ref:e,children:j.jsx(c("FocusInertRegion.react"),{disabled:f,focusQuery:d("focusScopeQueries").tabbableScopeQuery,children:b})})}F.displayName=F.name+" [from "+f.id+"]";function a(a){var b=a.accessibilityLabel,e=a.baseCardWidth,f=a.children,g=a.disableScrolling;g=g===void 0?!1:g;var h=a.hideArrows;h=h===void 0?!1:h;var y=a.maxWidth,A=y===void 0?Infinity:y;y=a.nextButtonLabel;y=y===void 0?w:y;var G=a.prevButtonLabel;G=G===void 0?x:G;var H=a.onPressNext,I=H===void 0?c("emptyFunction"):H;H=a.peek;var J=H===void 0?!1:H;H=a.peekPadding;a=a.peekPaddingEnd;var K=l(c("BaseScrollableAreaContext")),L=l(c("CometLeftRailLayoutContext")),M=d("CometRouteRenderType").useIsHosted(),N=J?(H=H)!=null?H:0:0;a=J?(H=a)!=null?H:44:0;H=o(!0);var O=H[0],P=H[1];c("useLayoutEffect_SAFE_FOR_SSR")(function(){if(z){var a=window.requestAnimationFrame(function(){P(!0)});return function(){window.cancelAnimationFrame(a),P(!1)}}},[f.length]);var Q=L||M;H=o(C?null:!0);L=H[0];var R=H[1];M=o(C?!0:null);H=M[0];var S=M[1],T=n(null),U=function(){var a=T.current;if(a==null)return;var b=a.clientWidth,c=a.scrollLeft;a=a.scrollWidth;R(c<=u);S(a-b-c<=u)};c("useLayoutEffect_SAFE_FOR_SSR")(function(){U()},[f.length]);M=function(){U()};var V=k(function(a,b){var c=T.current;if(c==null)return;var d=c.clientWidth,e=c.scrollLeft,f=c.scrollWidth,g=f-88;d=d-88;var h=J?44:C?88:0,i=C?d-f%d:0;h=h+i-(C?-N:N);i=D(g/d);g=e+h;e=g%d;e=e<v?g-e:d-e<v?g+(d-e):g;g=b(e/d);b=Math.min(i,Math.max(0,g+a));e=b===i-1&&b!==0?f:b*d-h;g=b===0?0:b*d-h;B(c,C?g:e)},[J,N]),W=function(){return V(-1,D)},X=function(){V(1,E),I()},Y=e===150?Q?r:q:Q?t:s,Z=Object.keys(Y).filter(function(a){return Q?a<=A+360:a<=A}).map(function(a){return Y[a]}),aa=m(function(){return[].concat(K,[{getDOMNode:function(){return T.current}}])},[K]),$=h||!!L;h=h||!!H;return j.jsxs("div",{className:c("stylex")(p.buttonContainer),children:[j.jsx("div",{"aria-hidden":$,className:c("stylex")(p.buttonWrapper,p.buttonWrapperLeft,J&&p.buttonWrapperLeftPeek,$&&p.hidden),style:L==null?{maxWidth:68,minWidth:0,width:"calc(("+f.length*(e+8)+"px - 100%) * 9999)"}:{},children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:C?420:419,children:j.jsx("div",{className:c("stylex")(p.buttonShadow),children:j.jsx(c("CometCircleButton.react"),{color:"secondary",focusable:!$,icon:d("fbicon")._(i("492488"),20),label:C?y:G,onPress:W,size:48,testid:void 0,type:"overlay"})})})}),j.jsxs("div",{className:c("stylex")(p.root),children:[b!=null?j.jsx(c("CometScreenReaderText.react"),{text:b}):null,j.jsxs("div",{className:c("stylex")(p.container,O&&p.containerSnap,!J&&p.containerNoPeek,g&&p.containerNoScroll),onScroll:M,ref:T,children:[!J&&j.jsx("div",{style:{minWidth:44}}),J&&N>0&&j.jsx("div",{style:{minWidth:N}}),j.jsx(c("BaseScrollableAreaContext").Provider,{value:aa,children:f.map(function(a,b){return j.jsx(F,{xstyle:[p.card,Z],children:a},b)})}),!J&&j.jsx("div",{style:{minWidth:44}}),J&&a>0&&j.jsx("div",{style:{minWidth:a}})]})]}),j.jsx("div",{"aria-hidden":h,className:c("stylex")(p.buttonWrapper,p.buttonWrapperRight,J&&p.buttonWrapperRightPeek,h&&p.hidden),style:H==null?{maxWidth:68,minWidth:0,width:"calc(("+f.length*(e+8)+"px - 100%) * 9999)"}:{},children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:C?419:420,children:j.jsx("div",{className:c("stylex")(p.buttonShadow),children:j.jsx(c("CometCircleButton.react"),{color:"secondary",focusable:!h,icon:d("fbicon")._(i("492536"),20),label:C?G:y,onPress:X,size:48,testid:void 0,type:"overlay"})})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometFeaturedHighlightsHScrollGlimmerCard.react",["BaseGlimmer.react","CometCard.react","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.onVisible;a=c("useVisibilityObserver")({onVisible:a,options:{rootMargin:200}});return h.jsx("div",{className:"k4urcfbm datstx6m j83agx80",ref:a,children:h.jsx(c("CometCard.react"),{background:"white",border:"solid",dropShadow:1,children:h.jsx("div",{className:"k4urcfbm d5it6em2",children:h.jsx(c("BaseGlimmer.react"),{className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",index:0})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometFeaturedHighlightsHScroll.react",["CometLegacyFlexibleHScroll.react","ProfileCometFeaturedHighlightsHScrollGlimmerCard.react","ProfileCometFeaturedHighlightsStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useTransition;function a(a){var b=a.baseCardWidth;b=b===void 0?150:b;var e=a.cards,f=a.hasNext,g=a.loadNext,j=a.maxWidth;j=j===void 0?562:j;var k=a.pageCardCount,l=k===void 0?3:k;k=a.totalCardCount;a=i();var m=a[0],n=a[1];a=function(){if(!f||m)return;n(function(){g(l*3)})};var o=Array.from(e);if(f){k=Math.min(l,k-e.length);for(var e=0;e<k;e++)o.push(h.jsx(c("ProfileCometFeaturedHighlightsHScrollGlimmerCard.react"),{onVisible:a},"glimmer"))}return h.jsx(c("CometLegacyFlexibleHScroll.react"),{accessibilityLabel:d("ProfileCometFeaturedHighlightsStrings").FEATURED_SECTION,baseCardWidth:b,maxWidth:j,children:o})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometFeaturedHighlightsHScrollCard.react",["fbt","CometCard.react","CometColumn.react","CometColumnItem.react","CometRelay","ProfileCometContext","ProfileCometFeaturedHighlightsHScrollCard_featured.graphql","StoriesTrayTileView.react","StoriesTrayUtils","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useContext;function a(a){var e,f,g,l=a.canViewCollection;l=l===void 0?!1:l;var m=a.featured;a=a.testid;a=a===void 0?"":a;a=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometFeaturedHighlightsHScrollCard_featured.graphql"),m);m=k(c("ProfileCometContext"));m=m.isInViewAs;e=(a==null?void 0:(e=a.cover_card)==null?void 0:(e=e.attachments)==null?void 0:e.length)?(e=a.cover_card.attachments[0])==null?void 0:(e=e.media)==null?void 0:(e=e.image)==null?void 0:e.uri:null;if(a==null||e==null)return null;f=(f=(f=a.cover_card)==null?void 0:(f=f.attachments[0])==null?void 0:(f=f.media)==null?void 0:f.accessibility_caption)!=null?f:h._(/*FBT_CALL*/"\u1ea2nh b\u00eca"/*FBT_CALL*/);g=(g=a.highlighted_cards)==null?void 0:g.count;g=g!=null&&g>1?"+ "+((g=g-1)==null?void 0:g.toString()):null;return j.jsxs(c("CometColumn.react"),{expanding:!0,testid:void 0,children:[j.jsx(c("CometColumnItem.react"),{paddingHorizontal:0,children:j.jsx(c("CometCard.react"),{children:j.jsx(c("StoriesTrayTileView.react"),{bucketUrl:l?d("StoriesTrayUtils").getBucketURL((l=a.id)!=null?l:""):void 0,coverImage:e,disablePreloadOnMouseHover:m,label:f,text:g!=null?g:void 0})})}),j.jsx(c("CometColumnItem.react"),{align:"center",paddingHorizontal:0,paddingTop:8,children:j.jsx(c("TetraText.react"),{align:"center",numberOfLines:3,type:"bodyLink4",children:a.name})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometFeaturedHighlightsIntroCardHScroll.react",["CometRelay","ProfileCometFeaturedHighlightsHScroll.react","ProfileCometFeaturedHighlightsHScrollCard.react","ProfileCometFeaturedHighlightsIntroCardHScroll_page.graphql","ProfileCometFeaturedHighlightsIntroCardHScroll_view.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");function a(a){var e=a.page;a=a.view;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometFeaturedHighlightsIntroCardHScroll_view.graphql"),a);a=a.all_featured_highlights;e=d("CometRelay").useBlockingPaginationFragment(i!==void 0?i:i=b("ProfileCometFeaturedHighlightsIntroCardHScroll_page.graphql"),e);var f=e.data.profile_tile_items,g=e.hasNext;e=e.loadNext;f=f==null?void 0:f.edges;a=a==null?void 0:a.count;if(f==null||a==null)return null;f=f.map(function(a,b){a=a.node;a=a==null?void 0:a.node;return a==null?null:j.jsx(c("ProfileCometFeaturedHighlightsHScrollCard.react"),{canViewCollection:!0,featured:a,testid:void 0},(a=a.id)!=null?a:b)}).filter(Boolean);return j.jsx("div",{className:"rtmu0sqt",children:j.jsx(c("ProfileCometFeaturedHighlightsHScroll.react"),{cards:f,hasNext:g,loadNext:e,totalCardCount:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometTileFeaturedHighlightsView.react",["CometRelay","ProfileCometFeaturedHighlightsIntroCardHScroll.react","ProfileCometTileFeaturedHighlightsView_viewStyleRenderer.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.viewStyleRenderer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometTileFeaturedHighlightsView_viewStyleRenderer.graphql"),a);if(a==null)return null;a=a.view;var e=a.view_style_edit_renderer;e=e!==null?i.jsx("div",{children:i.jsx(d("CometRelay").MatchContainer,{match:e,props:{}})}):null;return i.jsxs(i.Fragment,{children:[i.jsx(c("ProfileCometFeaturedHighlightsIntroCardHScroll.react"),{page:a,view:a}),e]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);