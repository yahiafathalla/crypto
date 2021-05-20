if (self.CavalryLogger) { CavalryLogger.start_js(["kA9JHza"]); }

__d("CoronavirusCometRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3638760169577969",metadata:{},name:"CoronavirusCometRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CoronavirusHubCometRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3754523897999413",metadata:{},name:"CoronavirusHubCometRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CoronavirusCometHeaderContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4249438155069706",metadata:{},name:"CoronavirusCometHeaderContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometHomeRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5586411014732556",metadata:{},name:"EventCometHomeRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMemoriesRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3877469582319326",metadata:{},name:"CometMemoriesRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSaveDashboardRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3420852601267516",metadata:{},name:"CometSaveDashboardRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSavePrimaryNavigationQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3433429736669283",metadata:{},name:"CometSavePrimaryNavigationQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildCoronavirusCometRoot.entrypoint",["CoronavirusCometHeaderContainerQuery$Parameters","CoronavirusCometRootContentQuery$Parameters","JSResourceForInteraction","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f){"use strict";a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResourceForInteraction")("CoronavirusCometRoot.react").__setRef("buildCoronavirusCometRoot.entrypoint"),function(a){return{crisisQueryReference:{parameters:b("CoronavirusCometRootContentQuery$Parameters"),variables:{}},headerQueryReference:{parameters:b("CoronavirusCometHeaderContainerQuery$Parameters"),variables:{}}}});e.exports=a}),null);
__d("CoronavirusHubCometRoot.entrypoint",["CoronavirusHubCometRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCoronavirusCometRoot.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildCoronavirusCometRoot.entrypoint")(b("JSResourceForInteraction")("CoronavirusHubCometRoot.react").__setRef("CoronavirusHubCometRoot.entrypoint"),function(a){a=a.routeParams;var c=a.hoisted_content_id;a=a.hoisted_module_type;return{queries:{queryReference:{parameters:b("CoronavirusHubCometRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CoronavirusHubCometRootQuery",displayCommentsContextEnableComment:!0,displayCommentsContextIsAdPreview:!1,displayCommentsContextIsAggregatedShare:!1,displayCommentsContextIsStorySet:!1,displayCommentsFeedbackContext:null,feedLocation:"COMET_CORONAVIRUS_HUB_FEED",feedbackSource:22,focusCommentID:null,hoistedContentID:c,hoistedModuleType:a,privacySelectorRenderLocation:"COMET_CORONAVIRUS_HUB",renderLocation:"coronavirus_hub_feed",scale:b("WebPixelRatio").get(),useDefaultActor:!1}}}}});e.exports=a}),null);
__d("EventCometHomeRoot.entrypoint",["EventCometHomeRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometEventDashboardRoute.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometEventDashboardRoute.entrypoint")(b("JSResourceForInteraction")("EventCometHomeRoot.react").__setRef("EventCometHomeRoot.entrypoint"),function(){return{queries:{homeEvents$key:{parameters:b("EventCometHomeRootQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}});e.exports=a}),null);
__d("CometMemoriesRoot.entrypoint",["CometMemoriesRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){return{queries:{memoriesReference:{parameters:b("CometMemoriesRootQuery$Parameters"),variables:{displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"GOODWILL_THROWBACK_PERMALINK",feedbackSource:0,focusCommentID:null,goodwillTimestamp:a.routeProps.goodwillTimestamp,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"throwback_composer",scale:b("WebPixelRatio").get(),useDefaultActor:!1}}}}},root:b("JSResourceForInteraction")("CometMemoriesRoot.react").__setRef("CometMemoriesRoot.entrypoint")};e.exports=a}),null);
__d("buildSaveRoute.entrypoint",["CometSavePrimaryNavigationQuery$Parameters","JSResourceForInteraction","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f){"use strict";a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResourceForInteraction")("CometSaveRoot.react").__setRef("buildSaveRoute.entrypoint"),function(a){return{navigationQueryReference:{parameters:b("CometSavePrimaryNavigationQuery$Parameters"),variables:{}}}});e.exports=a}),null);
__d("CometSaveDashboardRoot.entrypoint",["CometSaveDashboardRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildSaveRoute.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildSaveRoute.entrypoint")(b("JSResourceForInteraction")("CometSaveDashboardRoot.react").__setRef("CometSaveDashboardRoot.entrypoint"),function(a){return{extraProps:{routeProps:{referrer:a.routeProps.referrer,section:a.routeProps.section}},queries:{rootQueryRef:{parameters:b("CometSaveDashboardRootQuery$Parameters"),variables:{content_filter:a.routeProps.content_filter!=null?[a.routeProps.content_filter]:null,scale:b("WebPixelRatio").get()}}}}});e.exports=a}),null);