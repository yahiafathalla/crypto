if (self.CavalryLogger) { CavalryLogger.start_js(["lZCFu"]); }

__d("MWChatMediaRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3067366190029158",metadata:{},name:"MWChatMediaRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MWChatMediaRoot.entrypoint",["JSResourceForInteraction","MWChatMediaRootQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.routeParams;var c=a.message_id;a=a.thread_id;return{queries:{messengerMediaRootQueryReference:{parameters:b("MWChatMediaRootQuery$Parameters"),variables:{messageID:c,scale:b("WebPixelRatio").get(),threadID:a}}}}},root:b("JSResourceForInteraction")("MWChatMediaRoot.react").__setRef("MWChatMediaRoot.entrypoint")};e.exports=a}),null);