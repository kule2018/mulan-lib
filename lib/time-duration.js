"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _always=require("ramda/src/always"),_always2=_interopRequireDefault(_always),_divide=require("ramda/src/divide"),_divide2=_interopRequireDefault(_divide),_append=require("ramda/src/append"),_append2=_interopRequireDefault(_append),_compose=require("ramda/src/compose"),_compose2=_interopRequireDefault(_compose),_=require("ramda/src/__"),_2=_interopRequireDefault(_),_gte=require("ramda/src/gte"),_gte2=_interopRequireDefault(_gte),_ifElse=require("ramda/src/ifElse"),_ifElse2=_interopRequireDefault(_ifElse),_interval=require("./_/interval"),_interval2=_interopRequireDefault(_interval);exports.default=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=function(e){return function(r){return a=(0,_ifElse2.default)((0,_gte2.default)(r,_2.default),(0,_compose2.default)((0,_append2.default)(_2.default,a),parseInt,(0,_divide2.default)(r)),(0,_always2.default)((0,_append2.default)(0,a)))(e),r%=e}};return(0,_compose2.default)(t((0,_interval2.default)("s")),t((0,_interval2.default)("m")),t((0,_interval2.default)("h")),t((0,_interval2.default)("d")))(Math.abs(r-e)),a};