if (self.CavalryLogger) { CavalryLogger.start_js(["48b+XfD"]); }

__d("CometUFIReactionsCountTooltipContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6632222953514852"}),null);
__d("CometUFIReactionsCountTooltipContentQuery.graphql",["CometUFIReactionsCountTooltipContentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"feedbackTargetID"},{defaultValue:null,kind:"LocalArgument",name:"stagesSessionID"}],c=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],d={alias:null,args:null,concreteType:"ReactionDisplayConfig",kind:"LinkedField",name:"reaction_display_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_display_strategy",storageKey:null}],storageKey:null},e=[{kind:"Literal",name:"first",value:19},{kind:"Literal",name:"orderby",value:["is_viewer","is_viewer_friend","importance"]}],f={kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"session_id",variableName:"stagesSessionID"}],concreteType:"XFBStagesProfileInfoData",kind:"LinkedField",name:"stages_profile_info_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"selected_profile_name",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometUFIReactionsCountTooltipContentQuery",selections:[{alias:null,args:c,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[d,{alias:null,args:e,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[f,g],storageKey:null}],storageKey:'reactors(first:19,orderby:["is_viewer","is_viewer_friend","importance"])'}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometUFIReactionsCountTooltipContentQuery",selections:[{alias:null,args:c,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[d,{alias:null,args:e,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f,g,h],storageKey:null}],storageKey:'reactors(first:19,orderby:["is_viewer","is_viewer_friend","importance"])'},h],storageKey:null}]},params:{id:b("CometUFIReactionsCountTooltipContentQuery_facebookRelayOperation"),metadata:{},name:"CometUFIReactionsCountTooltipContentQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometUFITooltipNamesList.react",["fbt","CometNumber.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.hideReactionCount;b=b===void 0?!1:b;var d=a.names,e=a.totalCount;a=babelHelpers.objectWithoutPropertiesLoose(a,["hideReactionCount","names","totalCount"]);a=[].concat(d);e>d.length&&(d.length===0?a.push(b?h._(/*FBT_CALL*/"nh\u1eefng ng\u01b0\u1eddi kh\u00e1c..."/*FBT_CALL*/):h._(/*FBT_CALL*/"{reactionCount} ng\u01b0\u1eddi kh\u00e1c..."/*FBT_CALL*/,[h._param("reactionCount",i.jsx(c("CometNumber.react"),{decimals:0,number:e-d.length}))])):a.push(b?h._(/*FBT_CALL*/"v\u00e0 h\u01a1n th\u1ebf n\u1eefa..."/*FBT_CALL*/):h._(/*FBT_CALL*/"v\u00e0 {reactionCount} ng\u01b0\u1eddi kh\u00e1c..."/*FBT_CALL*/,[h._param("reactionCount",i.jsx(c("CometNumber.react"),{decimals:0,number:e-d.length}))])));return i.jsx("div",{"data-testid":void 0,children:i.jsx("ul",{className:"hcukyx3x tvmbv18p cxmmr5t8 aahdfvyu",children:i.Children.map(a,function(a){return a!==null?i.jsx("li",{children:a}):null})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFIReactionsCountTooltipContent.react",["CometRelay","CometUFIReactionsCountTooltipContentQuery.graphql","CometUFITooltipNamesList.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("CometUFIReactionsCountTooltipContentQuery.graphql");function a(a){var b=a.queryVariables,e=a.reactionCount;a=a.shownCount;b=d("CometRelay").useLazyLoadQuery(j,b,{fetchKey:a,fetchPolicy:"store-and-network"});a=b.feedback;b=((b=a==null?void 0:(b=a.reactors)==null?void 0:b.nodes)!=null?b:[]).map(function(a){var b;return(b=(b=a.stages_profile_info_data)==null?void 0:b.selected_profile_name)!=null?b:a.name}).filter(Boolean);a=(a==null?void 0:(a=a.reaction_display_config)==null?void 0:a.reaction_display_strategy)==="HIDE_COUNTS";return i.jsx(c("CometUFITooltipNamesList.react"),{hideReactionCount:a,names:b,testid:void 0,totalCount:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);