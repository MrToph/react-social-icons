'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socialSvgMask = exports.socialSvgContent = exports.socialSvg = exports.socialContainer = exports.socialIcon = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socialIcon = exports.socialIcon = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  overflow: 'hidden',
  verticalAlign: 'middle'
};

var socialContainer = exports.socialContainer = {
  width: '100%',
  height: '100%'
};

var socialSvg = exports.socialSvg = {
  width: '100%',
  height: '100%',
  fillRule: 'evenodd'
};

var socialSvgContent = exports.socialSvgContent = {
  msTransition: 'fill 170ms ease-in-out',
  OTransition: 'fill 170ms ease-in-out',
  MozTransition: 'fill 170ms ease-in-out',
  WebkitTransition: 'fill 170ms ease-in-out',
  transition: 'fill 170ms ease-in-out',
  fill: 'transparent'
};

var socialSvgMask = exports.socialSvgMask = (0, _extends3.default)({}, socialSvgContent, {
  fill: '#0f0b0b'
});