webpackJsonp([6],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

__webpack_require__(12);

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(4);
var Slider = __webpack_require__(8);

var wrapperStyle = { width: 400, margin: 50 };

var handleStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
  padding: '2px',
  border: '2px solid #abe2fb',
  borderRadius: '3px',
  background: '#fff',
  fontSize: '14px',
  textAlign: 'center'
};

var CustomHandle = React.createClass({
  displayName: 'CustomHandle',

  propTypes: {
    value: React.PropTypes.any,
    offset: React.PropTypes.number
  },
  render: function render() {
    var props = this.props;
    var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ left: props.offset + '%' }, handleStyle);
    return React.createElement(
      'div',
      { style: style },
      'val: ',
      props.value
    );
  }
});

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(
    'div',
    { style: wrapperStyle },
    React.createElement(
      'p',
      null,
      'Default slider'
    ),
    React.createElement(Slider, { min: 0, max: 20, defaultValue: 3 })
  ),
  React.createElement(
    'div',
    { style: wrapperStyle },
    React.createElement(
      'p',
      null,
      'Slider with custom handle'
    ),
    React.createElement(Slider, { min: 0, max: 20, defaultValue: 3, handle: React.createElement(CustomHandle, null) })
  )
), document.getElementById('__react-content'));

/***/ })

},[149]);
//# sourceMappingURL=custom-handles.js.map