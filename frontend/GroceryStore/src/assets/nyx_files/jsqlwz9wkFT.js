if (self.CavalryLogger) { CavalryLogger.start_js(["uUuVNkZ"]); }

__d("MWChatPhotoRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4004689242955331"}),null);
__d("MWChatPhotoRootQuery$Parameters",["MWChatPhotoRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("MWChatPhotoRootQuery_facebookRelayOperation"),metadata:{},name:"MWChatPhotoRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MWChatPhotoRoot.entrypoint",["JSResourceForInteraction","MWChatPhotoRootQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.routeParams;var c=a.fbid;a=a.message_id;c={attachment_id:c,message_id:a};return{queries:{messengerPhotoRootQueryReference:{parameters:b("MWChatPhotoRootQuery$Parameters"),variables:c}}}},root:c("JSResourceForInteraction")("MWChatPhotoRoot.react").__setRef("MWChatPhotoRoot.entrypoint")};g["default"]=a}),98);