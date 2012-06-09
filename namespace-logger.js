// License: CC0 http://creativecommons.org/publicdomain/zero/1.0/
// https://github.com/mostlystatic/namespace-logger

(function()
{
	"use strict";
	
	var truncate = function(string, maxLength)
	{
		if (string.length < maxLength)
		{
			return string;
		}
		return string.substring(0, maxLength - 3) + "...";
	};
	var pluralS = function(count)
	{
		if (count === 1){ return ""; }
		return "s";
	};
	// default window namespace members in Chrome 19.0.1084.53, "\"" + window.namespaceLogger.lastLog.allFields.join("\", \"") + "\""
	var typicalFields = ["window", "top", "location", "external", "chrome", "v8Locale", "document", "MouseEvent", "SVGPathSegCurvetoCubicSmoothAbs", "Text", "SVGPathSegArcAbs", "HTMLLinkElement", "SVGPathSegLinetoVerticalAbs", "devicePixelRatio", "WebSocket", "MutationEvent", "webkitIDBKeyRange", "frameElement", "MediaStreamEvent", "HTMLAudioElement", "CSSRuleList", "SVGTransformList", "SVGPathSegArcRel", "sessionStorage", "SVGNumber", "opener", "Worker", "DOMImplementation", "CanvasGradient", "XMLHttpRequestException", "localStorage", "DOMSettableTokenList", "SVGPathSegCurvetoQuadraticSmoothRel", "WebGLTexture", "Event", "SVGTextElement", "HTMLFieldSetElement", "SVGMatrix", "StyleSheet", "ProcessingInstruction", "TextMetrics", "SVGFETurbulenceElement", "HTMLTableSectionElement", "CanvasPattern", "SVGFESpotLightElement", "HTMLFrameElement", "HTMLHeadElement", "WebGLRenderingContext", "HTMLHeadingElement", "HTMLQuoteElement", "SVGAnimateTransformElement", "XSLTProcessor", "RangeException", "frames", "WebKitCSSFilterValue", "Int8Array", "defaultstatus", "HTMLAppletElement", "BeforeLoadEvent", "XPathEvaluator", "navigator", "CanvasRenderingContext2D", "pageXOffset", "WebGLActiveInfo", "SVGRectElement", "SVGFontFaceUriElement", "SVGElement", "ClientRectList", "SVGFEDisplacementMapElement", "HTMLHRElement", "CSSValueList", "SVGTextContentElement", "WebKitBlobBuilder", "MessagePort", "SVGFEOffsetElement", "StorageEvent", "webkitNotifications", "Storage", "MediaController", "SVGVKernElement", "webkitAudioPannerNode", "HTMLScriptElement", "SharedWorker", "SVGPathSegLinetoHorizontalRel", "console", "Blob", "HTMLIFrameElement", "EventSource", "SVGAElement", "SVGAnimatedEnumeration", "HTMLFormElement", "SVGFEGaussianBlurElement", "Option", "outerWidth", "XMLDocument", "WebKitIntent", "ArrayBuffer", "WebKitCSSKeyframesRule", "SVGPolygonElement", "EventException", "SVGAnimatedInteger", "SVGColor", "HTMLUListElement", "SVGFESpecularLightingElement", "SVGFEComponentTransferElement", "name", "SVGLength", "SVGFEDistantLightElement", "SVGAnimatedNumber", "SVGPathSegCurvetoCubicSmoothRel", "HTMLLegendElement", "Int32Array", "parent", "Image", "SVGPreserveAspectRatio", "WebKitCSSKeyframeRule", "SVGLinearGradientElement", "webkitIDBCursor", "SVGStyleElement", "styleMedia", "AudioProcessingEvent", "HTMLSelectElement", "SVGImageElement", "clientInformation", "WebKitPoint", "SVGAnimatedRect", "FileList", "HTMLMeterElement", "DeviceOrientationEvent", "Uint32Array", "SVGPoint", "SVGFEMorphologyElement", "XPathResult", "StyleSheetList", "HTMLUnknownElement", "screen", "WebGLShader", "MediaError", "DocumentFragment", "offscreenBuffering", "SQLException", "HTMLParagraphElement", "FormData", "SVGPathSegClosePath", "CharacterData", "DataView", "Uint16Array", "SVGFEFuncGElement", "CSSStyleDeclaration", "SVGElementInstanceList", "SVGFEBlendElement", "Uint8Array", "CompositionEvent", "SVGFEFuncRElement", "SVGTextPositioningElement", "HTMLInputElement", "scrollY", "defaultStatus", "CSSFontFaceRule", "locationbar", "HTMLDirectoryElement", "applicationCache", "Counter", "XPathException", "SVGTRefElement", "webkitIDBDatabase", "Node", "SessionDescription", "SVGFEDiffuseLightingElement", "SVGRect", "Notation", "HTMLButtonElement", "CSSStyleRule", "SVGComponentTransferFunctionElement", "HTMLLIElement", "SVGAnimateElement", "WheelEvent", "HTMLMetaElement", "scrollbars", "SVGRadialGradientElement", "SVGAnimateColorElement", "SVGAnimatedLength", "HTMLCollection", "SVGPatternElement", "WebKitCSSRegionRule", "SVGTransform", "innerWidth", "WebGLUniformLocation", "self", "SVGPathSeg", "HTMLOutputElement", "SVGFEFuncBElement", "HTMLAllCollection", "SVGPathSegCurvetoCubicRel", "SVGTitleElement", "DOMTokenList", "SVGSymbolElement", "SVGPathSegCurvetoQuadraticSmoothAbs", "SVGMaskElement", "Plugin", "HTMLBaseElement", "SVGMPathElement", "WebGLProgram", "SVGEllipseElement", "screenLeft", "HTMLEmbedElement", "SVGFontFaceFormatElement", "webkitAudioContext", "SVGPaint", "XMLHttpRequest", "SVGFEMergeElement", "ImageData", "CloseEvent", "HTMLTableCaptionElement", "SVGAnimatedPreserveAspectRatio", "CSSRule", "HTMLSourceElement", "DOMStringMap", "SVGFEDropShadowElement", "screenTop", "SVGFontElement", "NamedNodeMap", "HTMLMapElement", "SVGFEImageElement", "SVGCursorElement", "SVGForeignObjectElement", "HTMLDivElement", "SVGAltGlyphElement", "ProgressEvent", "HTMLOptionElement", "EntityReference", "HTMLStyleElement", "Entity", "SVGFEColorMatrixElement", "SVGFontFaceElement", "webkitIDBTransaction", "scrollX", "CustomEvent", "UIEvent", "HTMLTextAreaElement", "HTMLBRElement", "SVGAnimateMotionElement", "HTMLOListElement", "SVGFilterElement", "PluginArray", "HTMLTableCellElement", "HTMLModElement", "TouchEvent", "WebKitTransitionEvent", "HTMLAreaElement", "HTMLSpanElement", "SVGHKernElement", "HTMLKeygenElement", "screenY", "OfflineAudioCompletionEvent", "HTMLAnchorElement", "SVGPathSegCurvetoQuadraticRel", "HTMLFrameSetElement", "innerHeight", "MessageChannel", "SVGFECompositeElement", "SVGPathSegList", "SVGScriptElement", "SVGLengthList", "DocumentType", "HTMLMenuElement", "event", "SVGAnimatedLengthList", "Element", "SVGLineElement", "personalbar", "HTMLMediaElement", "Uint8ClampedArray", "SVGAnimatedAngle", "toolbar", "SVGFEFloodElement", "SVGNumberList", "MessageEvent", "SVGFontFaceSrcElement", "SVGTextPathElement", "SVGStringList", "Rect", "HTMLDListElement", "KeyboardEvent", "SVGFEFuncAElement", "SVGGElement", "SVGAltGlyphItemElement", "SVGMarkerElement", "HTMLImageElement", "TextEvent", "SVGAnimatedString", "closed", "PageTransitionEvent", "SVGGlyphRefElement", "HTMLHtmlElement", "SVGSVGElement", "DOMStringList", "SVGAnimatedTransformList", "Comment", "webkitIndexedDB", "WebKitAnimationEvent", "CDATASection", "SVGFEPointLightElement", "HTMLTableElement", "HTMLElement", "SVGFEMergeNodeElement", "IceCandidate", "SVGPathSegLinetoVerticalRel", "webkitIDBDatabaseException", "SVGCircleElement", "SVGElementInstance", "webkitURL", "history", "SVGException", "SVGMissingGlyphElement", "WebGLRenderbuffer", "SVGPathSegMovetoAbs", "HTMLMarqueeElement", "webkitIDBRequest", "WebGLFramebuffer", "SVGPathElement", "OverflowEvent", "SVGZoomEvent", "SVGMetadataElement", "HTMLFontElement", "WebKitMutationObserver", "SVGFEConvolveMatrixElement", "SVGAngle", "SVGFETileElement", "SVGFontFaceNameElement", "CSSPageRule", "pageYOffset", "status", "TimeRanges", "HTMLTitleElement", "File", "Clipboard", "SVGPathSegLinetoHorizontalAbs", "HTMLProgressElement", "SVGAnimatedBoolean", "Float64Array", "SVGPathSegLinetoRel", "SVGSwitchElement", "WebKitCSSMatrix", "Window", "SVGPathSegLinetoAbs", "screenX", "webkitIDBIndex", "webkitIDBObjectStore", "NodeFilter", "webkitStorageInfo", "HTMLVideoElement", "FileReader", "WebGLContextEvent", "MimeTypeArray", "MimeType", "Range", "WebGLBuffer", "RGBColor", "Audio", "Selection", "HTMLDocument", "XMLSerializer", "SVGPathSegCurvetoQuadraticAbs", "SVGDescElement", "ErrorEvent", "Float32Array", "crypto", "HTMLBaseFontElement", "length", "NodeList", "SVGClipPathElement", "DOMException", "Document", "SVGDocument", "WebKitCSSTransformValue", "HashChangeEvent", "SVGAnimatedNumberList", "HTMLLabelElement", "CSSValue", "SVGGlyphElement", "webkitIDBDatabaseError", "HTMLObjectElement", "CSSMediaRule", "webkitIDBFactory", "CSSStyleSheet", "SpeechInputEvent", "SVGGradientElement", "statusbar", "SVGTSpanElement", "HTMLParamElement", "HTMLOptGroupElement", "CSSCharsetRule", "SVGUnitTypes", "SVGDefsElement", "CSSPrimitiveValue", "SVGAltGlyphDefElement", "SVGPolylineElement", "HTMLPreElement", "FileError", "PopStateEvent", "DOMParser", "SVGViewElement", "SVGPathSegMovetoRel", "ClientRect", "SVGPathSegCurvetoCubicAbs", "outerHeight", "HTMLTableRowElement", "SVGUseElement", "Int16Array", "Attr", "SVGPointList", "XMLHttpRequestProgressEvent", "MediaList", "SVGStopElement", "menubar", "HTMLBodyElement", "HTMLTableColElement", "SVGRenderingIntent", "HTMLCanvasElement", "XMLHttpRequestUpload", "performance", "CSSImportRule", "SVGSetElement", "onmousemove", "onmouseout", "onabort", "onsuspend", "onmousedown", "onkeyup", "onoffline", "ondragleave", "onloadedmetadata", "ononline", "onfocus", "onselect", "oninvalid", "ondragenter", "onclick", "onstorage", "onresize", "onpause", "onemptied", "ondblclick", "ondrop", "onbeforeunload", "onmouseover", "ondragover", "onsearch", "onwebkitanimationstart", "onpageshow", "ondragend", "onplay", "postMessage", "blur", "oncanplay", "ontimeupdate", "onchange", "onhashchange", "onmessage", "onwaiting", "onerror", "focus", "onmouseup", "onblur", "oncontextmenu", "onloadeddata", "onwebkitanimationiteration", "onunload", "onloadstart", "onpopstate", "close", "onreset", "onscroll", "ondragstart", "onvolumechange", "onkeydown", "webkitPostMessage", "onwebkittransitionend", "onstalled", "onsubmit", "oncanplaythrough", "onended", "ondeviceorientation", "onplaying", "ondurationchange", "oninput", "onmousewheel", "onseeking", "onpagehide", "onwebkitanimationend", "onseeked", "onkeypress", "onprogress", "ondrag", "onload", "onratechange", "getSelection", "print", "stop", "open", "showModalDialog", "alert", "confirm", "prompt", "find", "scrollBy", "scrollTo", "scroll", "moveBy", "moveTo", "resizeBy", "resizeTo", "matchMedia", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "webkitRequestAnimationFrame", "webkitCancelAnimationFrame", "webkitCancelRequestAnimationFrame", "atob", "btoa", "addEventListener", "removeEventListener", "captureEvents", "releaseEvents", "getComputedStyle", "getMatchedCSSRules", "webkitConvertPointFromPageToNode", "webkitConvertPointFromNodeToPage", "dispatchEvent", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL", "openDatabase", "TEMPORARY", "PERSISTENT"];
	
	var nsl = {
		namespace: window,
		printLog: function(info){
			if (info.changeCount === 0){return;}
			if (console && console.log)
			{
				if (info.initializingCall)
				{
					console.log("Found " + info.changeCount + " fields in namespace " + info.namespace);
					if (info.namespace === window && info.specialFields.length !== 0)
					{
						console.log("Found " + info.specialFields.length + " special field" + pluralS(info.specialFields.length) + ": " + truncate(info.specialFields.join(", "), 300));
					}
					console.log("Full log in window.namespaceLogger.lastLog");
				}
				else
				{
					if (info.addedFields.length !== 0)
					{
						console.log(info.addedFields.length + " new field" + pluralS(info.addedFields.length) + ": " + info.addedFields.join(", "));
					}
					if (info.removedFields.length !== 0)
					{
						console.log(info.removedFields.length + " removed field" + pluralS(info.removedFields.length) + ": " + info.removedFields.join(", "));
					}
				}
			}
		},
		log: function(logFunction)
		{	
			var nsl = window.namespaceLogger;
			var initializingCall = nsl.previousState === undefined;
			var info = {};
			info.addedFields = [];
			info.removedFields = [];
			info.allFields = [];
			info.changeCount = 0;
			info.initializingCall = initializingCall;
			info.namespace = nsl.namespace;
			info.when = new Date();
			info.specialFields = [];
			
			if (initializingCall)
			{
				nsl.previousState = [];
			}
			var previousState = nsl.previousState;
			var lengthKey =  nsl.lengthKey;
			var namespace = nsl.namespace;
			var currentState  = [];
			
			for (var fieldName in namespace)
			{
				if (previousState.indexOf(fieldName) === -1)
				{
					info.addedFields.push(fieldName);
					info.changeCount++;
				}
				if (typicalFields.indexOf(fieldName) === -1)
				{
					info.specialFields.push(fieldName);
				}
				currentState.push(fieldName);
			}
			for (var index in previousState)
			{
				fieldName = previousState[index];
				if (currentState.indexOf(fieldName) === -1)
				{
					info.removedFields.push(fieldName);
					info.changeCount++;
				}
			}
			
			info.allFields = currentState.slice();
			nsl.lastLog = info;
			nsl.printLog(info);
	
			nsl.previousState = currentState;
		},
		clearState: function(){
			window.namespaceLogger.previousState = undefined;
		},
		setNamespace: function(namespace){
			window.namespaceLogger.clearState();
			window.namespaceLogger.namespace = namespace;
		}
	};

	window.namespaceLogger = window.namespaceLogger || nsl;
	nsl.log();
})();