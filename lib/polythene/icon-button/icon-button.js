"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneIconIcon=require("polythene/icon/icon");var _polytheneIconIcon2=_interopRequireDefault(_polytheneIconIcon);var _polytheneButtonButton=require("polythene/button/button");var _polytheneButtonButton2=_interopRequireDefault(_polytheneButtonButton);require("polythene-theme/icon-button/icon-button");var component=undefined,createView=undefined;createView=function(ctrl){var opts=arguments[1]===undefined?{}:arguments[1];var content=undefined;if(opts.icon){content=_mithril2["default"].component(_polytheneIconIcon2["default"],opts.icon)}else if(opts.content){content=opts.content}opts.content=(0,_mithril2["default"])("span",content);opts.parentClass=opts.parentClass||"icon-button";opts.wash=opts.wash!==undefined?opts.wash:false;return _mithril2["default"].component(_polytheneButtonButton2["default"],opts)};component={view:function view(ctrl){var opts=arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];