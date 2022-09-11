if (self.CavalryLogger) { CavalryLogger.start_js(["dNo0Z0Y"]); }

__d("CometGamingLoggedFeedUnit_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamingLoggedFeedUnit_story",selections:[a,{args:null,kind:"FragmentSpread",name:"CometFeedUnit_feedUnit"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actors",plural:!0,selections:[b,a],storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{kind:"InlineFragment",selections:[a],type:"PlayWithFriendsAttachment",abstractKey:null},b],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[b,{kind:"InlineFragment",selections:[a,{alias:null,args:null,concreteType:"GameIdName",kind:"LinkedField",name:"tagged_game",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"game_id",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"media_type",storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}}();e.exports=a}),null);
__d("CometGamingDestinationSectionsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5481038528592535"}),null);
__d("CometGamingDestinationSectionsQuery.graphql",["CometGamingDestinationSectionsQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:8,kind:"LocalArgument",name:"count"},c={defaultValue:null,kind:"LocalArgument",name:"cursor"},d={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"launched_game_id"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},g=[{kind:"Variable",name:"id",variableName:"id"}],h={kind:"Variable",name:"launched_game_id",variableName:"launched_game_id"},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},j=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},{fields:[h],kind:"ObjectValue",name:"params"}];return{fragment:{argumentDefinitions:[a,c,d,e,f],kind:"Fragment",metadata:null,name:"CometGamingDestinationSectionsQuery",selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"},h],kind:"FragmentSpread",name:"CometGamingDestinationSections_hasGamingDestinationSections"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,e,f,d],kind:"Operation",name:"CometGamingDestinationSectionsQuery",selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[i,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:j,concreteType:"GamingDestinationSectionRenderersConnection",kind:"LinkedField",name:"gaming_destination_section_renderers",plural:!1,selections:[{"if":null,kind:"Stream",label:"CometGamingDestinationSections_hasGamingDestinationSections$stream$CometGamingDestinationSections_gaming_destination_section_renderers",selections:[{alias:null,args:null,concreteType:"GamingDestinationSectionRenderersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[i,{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationNewForYouSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationNewForYouSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationVideoHScrollSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationVideoSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationGameHScrollSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationGameSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationStreamerHScrollSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationStreamerSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationTournamentHScrollSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationTournamentsSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationContentSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationContentSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationInstantGameActivitySection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationInstantGameActivitySectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationApplicationSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationApplicationSectionRenderer",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null}]},{"if":null,kind:"Defer",label:"CometGamingDestinationSections_hasGamingDestinationSections$defer$CometGamingDestinationSections_gaming_destination_section_renderers$page_info",selections:[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}]}],storageKey:null},{alias:null,args:j,filters:["params"],handle:"connection",key:"CometGamingDestinationSections_gaming_destination_section_renderers",kind:"LinkedHandle",name:"gaming_destination_section_renderers"}],type:"HasGamingDestinationSections",abstractKey:"__isHasGamingDestinationSections"}],storageKey:null}]},params:{id:b("CometGamingDestinationSectionsQuery_facebookRelayOperation"),metadata:{},name:"CometGamingDestinationSectionsQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometGamingDestinationSections_hasGamingDestinationSections.graphql",["CometGamingDestinationSectionsQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["gaming_destination_section_renderers"];return{argumentDefinitions:[{defaultValue:8,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:null,kind:"LocalArgument",name:"launched_game_id"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a,stream:!0}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["node"],operation:b("CometGamingDestinationSectionsQuery.graphql"),identifierField:"id"}},name:"CometGamingDestinationSections_hasGamingDestinationSections",selections:[{alias:"gaming_destination_section_renderers",args:[{fields:[{kind:"Variable",name:"launched_game_id",variableName:"launched_game_id"}],kind:"ObjectValue",name:"params"}],concreteType:"GamingDestinationSectionRenderersConnection",kind:"LinkedField",name:"__CometGamingDestinationSections_gaming_destination_section_renderers_connection",plural:!1,selections:[{kind:"Stream",selections:[{alias:null,args:null,concreteType:"GamingDestinationSectionRenderersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationNewForYouSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationNewForYouSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationVideoHScrollSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationVideoSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationGameHScrollSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationGameSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationStreamerHScrollSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationStreamerSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationTournamentHScrollSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationTournamentsSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationContentSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationContentSectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationInstantGameActivitySection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationInstantGameActivitySectionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometGamingDestinationSections_hasGamingDestinationSections",fragmentName:"CometGamingDestinationApplicationSection_gamingDestinationSectionRenderer",fragmentPropName:"gamingDestinationSectionRenderer",kind:"ModuleImport"}],type:"GamingDestinationApplicationSectionRenderer",abstractKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null}]},{kind:"Defer",selections:[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}]}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"HasGamingDestinationSections",abstractKey:"__isHasGamingDestinationSections"}}();e.exports=a}),null);
__d("CometGamesStyledHScrollFeatured_application.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"CometGamesStyledHScrollFeatured_application",selections:[{args:null,kind:"FragmentSpread",name:"CometGamesStyledCardFeatured_game"}],type:"Application",abstractKey:null};e.exports=a}),null);
__d("CometLayoutSidePaneAndMainContentResponsiveContainer.react",["BaseContainerQueryElement.react","BaseHeadingContext","BaseStickyHeader.react","BaseView.react","CometAppNavigationConstants","CometGlobalPanelLayoutContext","CometLeftRailLayoutContext","CometLeftRailPrimaryContext","CometRouterFocusRegion.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=360,k={containerResponsive:{display:"j83agx80",flexDirection:"btwxx1t3",minHeight:"dp1hu0rb",position:"l9j0dhe7","@media (max-width: 899px)":{flexDirection:"psu0lv52",zIndex:"gpq6b651"}},contentArea:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",minHeight:"dp1hu0rb",minWidth:"hpfvmrgz",position:"l9j0dhe7",zIndex:"du4w35lb"},contentAreaWithLeftRailPrimary:{"@media (max-width: 899px)":{display:"hlyrhctz"}},leftRailResponsive:{display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"dp1hu0rb",overflowAnchor:"rek2kq2y",width:"o36gj0jk",zIndex:"tkr6xdv7","@media (max-width: 899px)":{display:"hlyrhctz"}},leftRailResponsiveWithGlobalPanel:{width:"mvylnr62"},mainContent:{display:"j83agx80",minHeight:"dp1hu0rb","@media (min-width: 900px)":{width:"kh4zg2hq"}},mainContentWithGlobalPanel:{"@media (min-width: 900px)":{width:"ozjrec1p"}},responsiveHeader:{display:"mkhogb32","@media (max-width: 899px)":{display:"f0t0fhil",zIndex:"nakwltuq"}}};function a(a){var b=a.leftRailContent,e=a.leftRailHeading,f=a.leftRailPrimary;f=f===void 0?!1:f;var g=a.mainContent,l=a.mainContentHeading;a=a.testid;a=i(c("BaseHeadingContext"));var m=i(c("CometGlobalPanelLayoutContext")),n=m?j-d("CometAppNavigationConstants").GLOBAL_PANEL_WIDTH:j;a=h.jsx("div",{className:c("stylex")(k.contentArea,f===!0&&k.contentAreaWithLeftRailPrimary),children:h.jsx(c("CometRouterFocusRegion.react"),{children:h.jsx(c("CometLeftRailLayoutContext").Provider,{value:!0,children:h.jsx(c("BaseHeadingContext").Provider,{value:a+1,children:g})})})});g=h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":e,breakpoint:900,inverseToContainer:!0,maxWidth:n,minWidth:n,role:"navigation",xstyle:[k.leftRailResponsive,m&&k.leftRailResponsiveWithGlobalPanel],children:b});e=h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":e,breakpoint:900,inverseToContainer:!0,maxWidth:"100%",minWidth:n,role:"navigation",children:b});b=h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":l,breakpoint:900,inverseToContainer:!0,maxWidth:"100%",minWidth:"calc(100% - "+n+"px)",role:"main",xstyle:[k.mainContent,m&&k.mainContentWithGlobalPanel],children:a});return h.jsx(c("BaseView.react"),{testid:void 0,xstyle:k.containerResponsive,children:h.jsxs(c("CometLeftRailPrimaryContext").Provider,{value:f,children:[h.jsx(c("BaseStickyHeader.react"),{xstyle:k.responsiveHeader,children:e}),g,b]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLayoutSidePaneResponsive.react",["BaseGlimmer.react","CometLeftRailComponent.react","CometPivotLinkTabs.react","CometResponsiveTopNav.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={glimmerContainer:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},left:{display:"j83agx80",minWidth:"dhp61c6y","@media (max-width: 899px)":{display:"hlyrhctz"}},top:{display:"mkhogb32","@media (max-width: 899px)":{backgroundColor:"gcwhehuz",borderBottom:"ac9gatro",display:"q852woou",paddingTop:"j27xe2ae",paddingBottom:"k7o7rpa8",zIndex:"nakwltuq"}},ufiGlimmer:{borderTopStartRadius:"dwerhba3",borderTopEndRadius:"kgjeooe1",borderBottomEndRadius:"kxcb68kb",borderBottomStartRadius:"mwvzfrdb",height:"bsodd3zb",marginTop:"tr9rh885",marginEnd:"wkznzc2l",marginBottom:"sjgh65i0",marginStart:"dhix69tm",width:"pnicyljo"}};function a(a){var b=a.footer,d=a.header,e=a.primaryNav,f=a.search,g=a.secondaryNav,j=a.stickyNav,k=a.topNav;a=a.topTabs;a=((f==null?void 0:f.topSearch)!=null||a!=null)&&h.jsx(c("CometResponsiveTopNav.react"),{action:f!=null?f.topSearch:void 0,tabs:a!=null?h.jsx(c("CometPivotLinkTabs.react"),{tabs:a}):void 0,xstyle:i.top});return h.jsxs(h.Fragment,{children:[h.jsx(c("CometLeftRailComponent.react"),{footer:b,header:d,primaryNav:e,search:f!=null?f.leftSearch:null,secondaryNav:g,stickyNav:j,xstyle:i.left}),(b=k)!=null?b:a]})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.header;a=a.primaryNavPlaceholder;return h.jsxs(h.Fragment,{children:[h.jsx(c("CometLeftRailComponent.react"),{header:b,primaryNav:a,xstyle:i.left}),h.jsxs("div",{className:[c("stylex")(i.top),c("stylex")(i.glimmerContainer)],children:[h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.ufiGlimmer),index:1}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.ufiGlimmer),index:2}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.ufiGlimmer),index:3})]})]})}b.displayName=b.name+" [from "+f.id+"]";g.CometLayoutSidePaneResponsive=a;g.CometLayoutSidePaneResponsiveLoading=b}),98);
__d("CometGamingLoggedFeedUnit",["CometFeedUnit.react","CometGamingImpressionLogger.react","CometGamingLoggedFeedUnit_story.graphql","RelayHooks","react","useGamingVideoDestinationEventLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e,f=d("RelayHooks").useFragment(h!==void 0?h:h=b("CometGamingLoggedFeedUnit_story.graphql"),a.storyKey),g={sub_surface:"feed_story",surface:"for_you"};e=(e=f.attachments)==null?void 0:e[0];var j=e==null?void 0:e.media;(j==null?void 0:j.__typename)==="Video"&&(g.video_id=j.id);if((e==null?void 0:e.media_type)==="VIDEO"&&(j==null?void 0:j.__typename)==="Video"){g.game_id=j==null?void 0:(j=j.tagged_game)==null?void 0:j.game_id}j=e==null?void 0:e.target;(j==null?void 0:j.__typename)==="PlayWithFriendsAttachment"&&(g.ig_app_id=j.id);j=(e=f.actors)==null?void 0:e[0];(j==null?void 0:j.__typename)==="Page"&&(g.page_id=j.id);e=c("useGamingVideoDestinationEventLogger")();var k=e.logClick;return i.jsx(c("CometGamingImpressionLogger.react"),{dataToLog:g,children:i.jsx("div",{onClickCapture:function(){return k(g)},role:"none",children:i.jsx(c("CometFeedUnit.react"),{feedUnit:f,position:a.position,variables:a.variables})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GamesServiceGamingProfileStrings",["fbt","CometLink.react","CometNumber.react","XFacebookHelpCenterContentControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return h._(/*FBT_CALL*/"Ho\u1ea1t \u0111\u1ed9ng trong game"/*FBT_CALL*/)}function b(){return h._(/*FBT_CALL*/"HO\u1ea0T \u0110\u1ed8NG TRONG GAME"/*FBT_CALL*/)}function e(){return h._(/*FBT_CALL*/"Kho\u1ea3nh kh\u1eafc trong game"/*FBT_CALL*/)}function j(){return h._(/*FBT_CALL*/"Ch\u1ec9 m\u00ecnh b\u1ea1n m\u1edbi xem \u0111\u01b0\u1ee3c file n\u00e0y"/*FBT_CALL*/)}function k(){return h._(/*FBT_CALL*/"Clip l\u1ed1i ch\u01a1i s\u1ebd bi\u1ebfn m\u1ea5t sau 28 ng\u00e0y k\u1ec3 t\u1eeb khi t\u1ea1o"/*FBT_CALL*/)}function l(){return h._(/*FBT_CALL*/"Xem t\u1ea5t c\u1ea3"/*FBT_CALL*/)}function m(){return h._(/*FBT_CALL*/"Qu\u1ea3n l\u00fd"/*FBT_CALL*/)}function n(){return h._(/*FBT_CALL*/"Ch\u1ec9nh s\u1eeda"/*FBT_CALL*/)}function o(){return h._(/*FBT_CALL*/"\u0110\u00e3 c\u1eadp nh\u1eadt thi\u1ebft k\u1ebf avatar. B\u1ea1n c\u00f3 th\u1ec3 ch\u1ecdn avatar m\u1edbi b\u1ea5t c\u1ee9 l\u00fac n\u00e0o."/*FBT_CALL*/)}function p(){return h._(/*FBT_CALL*/"Game b\u1ea1n ch\u01a1i"/*FBT_CALL*/)}function q(){return h._(/*FBT_CALL*/"Th\u00e0nh t\u00edch m\u1edbi \u0111\u00e2y"/*FBT_CALL*/)}function r(){return h._(/*FBT_CALL*/"T\u00caN NG\u01af\u1edcI CH\u01a0I"/*FBT_CALL*/)}function s(){return h._(/*FBT_CALL*/"Ch\u1ec9nh s\u1eeda"/*FBT_CALL*/)}function t(){return h._(/*FBT_CALL*/"T\u00ean ng\u01b0\u1eddi ch\u01a1i"/*FBT_CALL*/)}function u(){return h._(/*FBT_CALL*/"T\u00ean ng\u01b0\u1eddi ch\u01a1i v\u00e0 avatar l\u00e0 c\u00e1ch \u0111\u1ea1i di\u1ec7n ch\u00ednh cho b\u1ea1n trong game v\u00e0 \u1edf nh\u1eefng n\u01a1i kh\u00e1c b\u1ea1n ch\u1ecdn chia s\u1ebb ho\u1ea1t \u0111\u1ed9ng ch\u01a1i game. Tr\u00ean Facebook, h\u1ecd t\u00ean v\u1eabn hi\u1ec3n th\u1ecb b\u00ean c\u1ea1nh t\u00ean ng\u01b0\u1eddi ch\u01a1i. {=m1}"/*FBT_CALL*/,[h._implicitParam("=m1",i.jsx(c("CometLink.react"),{href:c("XFacebookHelpCenterContentControllerRouteBuilder").buildURL({cms_id:"504943626757522"}),target:"_blank",children:h._(/*FBT_CALL*/"T\u00ecm hi\u1ec3u th\u00eam"/*FBT_CALL*/)}))])}u.displayName=u.name+" [from "+f.id+"]";function v(){return h._(/*FBT_CALL*/"Game b\u1ea1n theo d\u00f5i"/*FBT_CALL*/)}function w(){return h._(/*FBT_CALL*/"Ng\u01b0\u1eddi ph\u00e1t tr\u1ef1c ti\u1ebfp m\u00e0 b\u1ea1n theo d\u00f5i"/*FBT_CALL*/)}function x(){return h._(/*FBT_CALL*/"G\u1ee3i \u00fd v\u1ec1 game"/*FBT_CALL*/)}function y(){return h._(/*FBT_CALL*/"G\u1ee3i \u00fd v\u1ec1 ng\u01b0\u1eddi ph\u00e1t tr\u1ef1c ti\u1ebfp"/*FBT_CALL*/)}function z(){return h._(/*FBT_CALL*/"Game \u0111\u01b0\u1ee3c g\u1ee3i \u00fd"/*FBT_CALL*/)}function A(){return h._(/*FBT_CALL*/"T\u1ea5t c\u1ea3"/*FBT_CALL*/)}function B(){return h._(/*FBT_CALL*/"Game A - Z"/*FBT_CALL*/)}function C(){return h._(/*FBT_CALL*/"\u1ea2nh"/*FBT_CALL*/)}function D(){return h._(/*FBT_CALL*/"Video"/*FBT_CALL*/)}d=function(a){return h._(/*FBT_CALL*/{"*":"{page like count} th\u00edch trang n\u00e0y"}/*FBT_CALL*/,[h._plural(a),h._param("page like count",i.jsx(c("CometNumber.react"),{decimals:0,number:a}))])};var E=function(a){return h._(/*FBT_CALL*/{"*":"{number} ng\u01b0\u1eddi b\u1ea1n","_1":"1 ng\u01b0\u1eddi b\u1ea1n"}/*FBT_CALL*/,[h._plural(a,"number")])};function F(){return h._(/*FBT_CALL*/"Trang"/*FBT_CALL*/)}F.displayName=F.name+" [from "+f.id+"]";function G(){return h._(/*FBT_CALL*/"Nh\u00f3m"/*FBT_CALL*/)}G.displayName=G.name+" [from "+f.id+"]";f=function(a){return h._(/*FBT_CALL*/{"*":"{number} th\u00e0nh vi\u00ean","_1":"1 th\u00e0nh vi\u00ean"}/*FBT_CALL*/,[h._plural(a,"number")])};var H=function(a){return h._(/*FBT_CALL*/"Ho\u1ea1t \u0111\u1ed9ng c\u1ee7a b\u1ea1n trong {app name} s\u1ebd hi\u1ec3n th\u1ecb \u1edf \u0111\u00e2y."/*FBT_CALL*/,[h._param("app name",i.jsx("strong",{children:a}))])};g.getGamingActivityString=a;g.getGamingActivityStringUpperCase=b;g.getMediaShareSectionTitle=e;g.getMediaLibAvailableText=j;g.getMediaLibAutoDeletionText=k;g.getSeeAllText=l;g.getMediaLibManageText=m;g.getEditProfileText=n;g.getAvatarUpdatedNuxText=o;g.getAppGamingActivitySectionSelfViewTitle=p;g.getRecentAchievementsSectionTitle=q;g.getHeaderPlayerNameText=r;g.getEditText=s;g.getEditPlayerNameText=t;g.getPlayerNameStatementText=u;g.getGamesFollowedSectionSelfViewTitle=v;g.getStreamersFollowedSectionSelfViewTitle=w;g.getSuggestedGamesTitle=x;g.getSuggestedStreamersTitle=y;g.getSuggestedInstantGamesTitle=z;g.getMediaLibFilterAllText=A;g.getMediaLibFilterGamesText=B;g.getMediaLibFilterPhotosText=C;g.getMediaLibFilterVideosText=D;g.getPageLikeCountText=d;g.getFriendsCountText=E;g.getPagesSectionTitle=F;g.getGroupsSectionTitle=G;g.getGroupMemberCountText=f;g.getAppExtraActivityText=H}),98);
__d("CometGamingVideoSectionGlimmer.react",["BaseGlimmer.react","CometColumn.react","CometRow.react","CometRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(c("CometColumn.react"),{children:[h.jsxs(c("CometRow.react"),{expanding:!0,verticalAlign:"center",children:[h.jsx(c("CometRowItem.react"),{children:h.jsx(c("BaseGlimmer.react"),{className:"k6hq67h2 mudddibn",index:0})}),h.jsx(c("CometRowItem.react"),{children:h.jsx(c("BaseGlimmer.react"),{className:"f8ljpb73 jnigpg78",index:1})})]}),h.jsx(c("CometRow.react"),{expanding:!0,children:h.jsx(c("CometRowItem.react"),{expanding:!0,children:h.jsx(c("BaseGlimmer.react"),{className:"sgwjjusx l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:2})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamingDestinationSections.react",["CometErrorBoundary.react","CometGamingDestinationSections_hasGamingDestinationSections.graphql","CometGamingVideoSectionGlimmer.react","CometInfiniteScrollTrigger.react","CometPlaceholder.react","CometRelay","CometSuspenseList.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("CometGamingDestinationSections_hasGamingDestinationSections.graphql");function a(a){var b=a.hasGamingDestinationSections,e=a.postPlayProps;a=d("CometRelay").usePaginationFragment(j,b);var f=a.data,g=a.hasNext,h=a.isLoadingNext,k=a.loadNext;a=d("CometRelay").useIsParentQueryActive(j,b);b=function(){k(5)};f=f==null?void 0:(f=f.gaming_destination_section_renderers)==null?void 0:(f=f.edges)==null?void 0:(f=f.map(function(a){return a==null?void 0:a.node}))==null?void 0:f.filter(Boolean);return f==null||f.length===0?null:i.jsxs(i.Fragment,{children:[i.jsx(c("CometSuspenseList.react"),{revealOrder:"forwards",tail:"collapsed",children:f.map(function(a,b){return i.jsx(c("CometErrorBoundary.react"),{fallback:function(){return null},children:i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("CometGamingVideoSectionGlimmer.react"),{}),children:i.jsx(d("CometRelay").MatchContainer,{match:a,props:{postPlayProps:(a=e)!=null?a:void 0}})})},b)})}),i.jsx(c("CometInfiniteScrollTrigger.react"),{hasMore:g,isLoading:a||h,onLoadMore:b,children:i.jsx(c("CometGamingVideoSectionGlimmer.react"),{})},"CometInfiniteScrollTrigger")]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useShouldRenderHScrollHeroBanner",["useCometWindowSize"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useCometWindowSize")();a=a.innerWidth;return a>1100&&a<2300}g["default"]=a}),98);
__d("CometGamingVideoHeroBannerGlimmer.react",["BaseGlimmer.react","react","stylex","useShouldRenderHScrollHeroBanner"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.isSmallGlimmer;a=a===void 0?!1:a;var b=c("useShouldRenderHScrollHeroBanner")();return h.jsx("div",{className:"k4urcfbm l9j0dhe7 a8nywdso qt6c0cv9 rz4wbd8a jb3vyjys stjgntxs ni8dbmo4 lj85lhky taijpn5t j83agx80 cddn0xzi",children:h.jsx("div",{className:"bglkmn5o d2edcug0 nwf6jgls taijpn5t j83agx80",children:h.jsx(c("BaseGlimmer.react"),{className:c("stylex").dedupe({"height-1":"dp5q0ja0","max-height-1":"nwf6jgls","max-width-1":"d2edcug0","width-1":"bglkmn5o"},b?{"height-1":"fupzvj4l"}:null,a?{"height-1":"l3cscxv3"}:null),index:0})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGamesStyledHScrollFeatured.react",["CometGamesMainColumnHScroll.react","CometGamesStyledCardFeatured.react","CometGamesStyledCardFeaturedGlimmer.react","CometGamesStyledHScrollFeatured_application.graphql","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("CometGamesStyledHScrollFeatured_application.graphql");function a(a){var b=a.games,e=a.headerUnit,f=a.isCompact,g=f===void 0?!1:f;f=a.isEditorial;f=f===void 0?!1:f;var h=a.paginationProps,k=a.section,l=a.source;a=a.title;b=d("CometRelay").useFragment(j,b);b=(b||[]).map(function(a,b){return i.jsx(d("CometGamesStyledCardFeatured.react").CometGamesStyledCardFeatured,{cardIndex:b,game:a,isCompact:g,section:k,source:l},b)});var m=g?d("CometGamesMainColumnHScroll.react").COMET_GRID_CARD_WIDTH_STANDARD:d("CometGamesMainColumnHScroll.react").COMET_GRID_CARD_WIDTH_FEATURED;return i.jsx(d("CometGamesMainColumnHScroll.react").CometGamesMainColumnHScroll,{cardWidth:m,headerUnit:e,isCompact:g,isEditorial:f,paginationProps:h?babelHelpers["extends"]({},h,{cardGlimmer:i.jsx(c("CometGamesStyledCardFeaturedGlimmer.react"),{})}):null,title:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GamingDestinationEntrypoints",[],(function(a,b,c,d,e,f){a=Object.freeze({ARCADE:"arcade",EXAMPLE:"example",CANVAS_RHC:"canvas_rhc",COMET:"comet",COMET_RHC_WIDGET:"comet_rhc_widget",GAMES_VIDEO_BOOKMARK:"games_video_bookmark",GAME_SEARCH_UNIT:"game_search_unit",GAMEROOM_LHC:"gameroom_lhc",GAMEROOM_FOLLOWED_GAME_LHC:"gameroom_followed_game_lhc",GAMEROOM_RHC:"gameroom_rhc",GAMES_APP:"games_app",GROUP_RHC:"group_rhc",GROUP_GAMES_TAB:"group_games_tab",GROUP_HOVERCARD:"group_hovercard",GROUP_METALINE:"group_metaline",NEWSFEED_RHC:"newsfeed_rhc",INSTANT_GAMES_RHC:"instant_games_rhc",VIDEO_ATTRIBUTION_NEWSFEED:"video_newsfeed",AVATAR_NEWSFEED:"avatar_newsfeed",VIDEO_ATTRIBUTION_PAGE:"video_page",VIDEO_ATTRIBUTION_OTHER:"video_other",LIVE_NOTIFICATION:"live_notification",NOTIF:"notif",NONFOLLOWER_NOTIFICATION:"nonfollower_notification",GAME_FOLLOWER_NOTIFICATION:"game_follower_notification",FRIEND_OF_FOLLOWER_NOTIFICATION:"friend_of_follower_notification",GAME_DESTINATION_NOTIFICATION:"game_destination_notification",GAME_HUB_NOTIFICATION:"game_hub_notification",SUGGESTED_GAME_HUB_NOTIFICATION:"suggested_game_hub_notification",GAME_HUB_PUSH_NOTIFICATION:"game_hub_push_notification",GAME_BOOKMARK:"game_bookmark",GAME_SHORTCUT:"game_shortcut",GAMES_VIDEO_QP:"games_video_qp",GAMES_VIDEO_BRAND_PROMO_QP:"games_video_brand_promo_qp",GAMES_VIDEO_CFU:"games_video_cfu",STREAMER_TRAY:"streamer_tray",GAME_PAGES:"game_pages",VIDEO_HOME:"video_home",NEWS_FEED_ON_VIDEO_CLICK:"news_feed_on_video_click",NEWS_FEED_INLINE_REDIRECTION:"news_feed_inline_redirection",NEWS_FEED_AFTER_VIDEO_PLAY:"news_feed_after_video_play",GAMES_VIDEO_SOCIAL_PLUGIN:"games_video_social_plugin",ANDROID_GAMING_SHORTCUT:"android_gaming_shortcut",ANDROID_INSTANT_GAME_SHORTCUT:"android_instant_game_shortcut",ANDROID_INSTANT_GAMES_HUB_SHORTCUT:"android_instant_games_hub_shortcut",INSTANT_GAMEHUB_CROSS_SELL:"instant_gamehub_cross_sell",DEEPLINK:"deeplink",UNKNOWN:"unknown",FEED_NAVIGATION_PILLS:"feed_navigation_pills",FEED_STORY_CONTEXT_HEADER:"feed_story_context_header",FEED_STORY_TITLE:"feed_story_title",PUSH_NOTIFICATION:"push_notification",RAIDING:"raiding",FBLITE_BOOKMARK:"fblite_bookmark",FBLITE_GAMES_TAB:"fblite_games_tab",FBLITE_MESSENGER_TAB:"fblite_messenger_tab",GAMES_TAB:"games_tab",GAMES_TAB_NOTIFICATION:"games_tab_notification",VIDEO_ACTION_LINK:"video_action_link",VIDEO_PLAYER_CONTEXT_SECTION:"video_player_context_section",FB_OTHER_GAMES_NOTIF:"fb_other_games_notif",STREAMER_EVENT_NOTIFICATION:"streamer_event_notification",STREAMER_SCHEDULE:"streamer_schedule",IG_REDIRECTION:"ig_redirection",GV_NOTIFICATION_REDIRECTION:"gv_notification_redirection",TOP_STREAMERS_UNIT:"top_streamers_unit",GAMES_VIDEO_COMMUNITY_FEED:"games_video_community_feed",SUGGESTED_GAMES_UNIT:"suggested_games_unit",SUGGESTED_GAMES_FEED_UNIT:"suggested_games_feed_unit",STREAMER_GAMES_PLAYED:"streamer_games_played",POPULAR_LIVE_NOW_UNIT:"popular_live_now_unit",POPULAR_STREAMERS_FEED_UNIT:"popular_streamers_feed_unit",NATIVE_SEARCH:"native_search",STARS_STREAK_REMINDER:"stars_streak_reminder",GAMES_QP:"games_qp",NEWS_FEED_ATTACHMENT:"news_feed_attachment",PAGE_TIMELINE_REDIRECTION:"page_timeline_redirection",PAGE_TIMELINE_INJECTION:"page_timeline_injection",SUPPORTER_HUB:"supporter_hub",RECENT_ACTIVITY:"recent_activity",INSTANT_GAMES_DIALOG:"instant_games_dialog",GAME_PLAYER_LOAD_ERROR:"game_player_load_error",PLAZA_SHORTCUTS:"plaza_shortcuts",VIDEO_PLAYER_STARS_INELIGIBILITY_BOTTOM_SHEET:"video_player_stars_ineligibility",STREAMER_HUB_WAYFINDING_NAV:"streamer_hub_nav",CUE:"cue",COMET_WNS:"comet_wns",GAMEHUB:"gamehub",INJECTED_TOP_STREAMS_UNIT:"injected_top_streams_unit",GAMING_CONTEXTUAL_PROFILE:"gaming_contextual_profile",COMET_GAMING_PROFILE:"comet_gaming_profile",MIXER:"mixer",FOR_YOU:"for_you",MSITE:"msite",PWA:"pwa",INSTANT_GAMES_CONTINUOUS_BOOKMARK:"instant_games_continuous_bookmark",GAMING_VIDEO_CONTINUOUS_BOOKMARK:"gaming_video_continuous_bookmark"});f["default"]=a}),66);
__d("XCometGamingGamingProfileControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/me/{?feature}/{?id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("GamesServiceGamerProfileTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GamesServiceGamerProfileLoggerConfig")}),null);