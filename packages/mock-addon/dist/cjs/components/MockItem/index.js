"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theming = require("@storybook/theming");
var _blocks = require("@storybook/blocks");
var _components = require("@storybook/components");
var _Card = require("../Card");
var _statusMap = _interopRequireDefault(require("../../utils/statusMap"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var statusCodes = Object.keys(_statusMap["default"]);
var SBField = _components.Form.Field,
  Select = _components.Form.Select;
var ObjectContent = _theming.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex: 1 0 0;\n    padding: 1rem;\n\n    > div {\n        flex: 1 0 0;\n    }\n"])));
var Method = _theming.styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-weight: 700;\n    border-right: 1px solid ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.appBorderColor;
});
var Url = _theming.styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    flex: 1;\n    overflow-x: auto;\n"])));
var UrlMethodContainer = _theming.styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    border: ", ";\n    background: ", ";\n    border-radius: ", ";\n\n    > * {\n        padding: 0.5rem 0.75rem;\n    }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.input.border;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.input.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.input.borderRadius;
});
var StatusDelayContainer = _theming.styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    flex: 1 0 0;\n    padding: 0.5rem 0.75rem;\n    gap: 1rem;\n\n    > label:last-child {\n        margin-bottom: 0;\n    }\n"])));
var Field = (0, _theming.styled)(SBField)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    border: none;\n    flex: 1;\n    padding: 0;\n    margin: 0;\n\n    > span {\n        min-width: 0;\n        margin-right: 0.75rem;\n    }\n\n    > select {\n        width: 6em;\n        flex: 1 1 auto;\n    }\n\n    & input {\n        min-width: 2em;\n    }\n"])));
var MockItem = function MockItem(_ref5) {
  var id = _ref5.id,
    url = _ref5.url,
    method = _ref5.method,
    status = _ref5.status,
    skip = _ref5.skip,
    response = _ref5.response,
    delay = _ref5.delay,
    _onChange = _ref5.onChange;
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    onToggle: function onToggle(value) {
      return _onChange('skip', !value);
    },
    enabled: !skip
  }, /*#__PURE__*/_react["default"].createElement(UrlMethodContainer, null, /*#__PURE__*/_react["default"].createElement(Method, null, method), /*#__PURE__*/_react["default"].createElement(Url, null, url)), /*#__PURE__*/_react["default"].createElement(StatusDelayContainer, null, /*#__PURE__*/_react["default"].createElement(Field, {
    label: "Status"
  }, /*#__PURE__*/_react["default"].createElement(Select, {
    onChange: function onChange(event) {
      return _onChange('status', event.target.value);
    },
    value: status,
    name: "status"
  }, statusCodes.map(function (code) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: code,
      value: code
    }, code, " - ", _statusMap["default"][code]);
  }))), /*#__PURE__*/_react["default"].createElement(Field, {
    label: "Delay"
  }, /*#__PURE__*/_react["default"].createElement(_blocks.RangeControl, {
    name: "delay",
    value: delay,
    onChange: function onChange(value) {
      return _onChange('delay', value);
    },
    min: 0,
    max: 10000,
    step: 500
  }))), /*#__PURE__*/_react["default"].createElement(_components.TabsState, {
    initial: "response".concat(id)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "response".concat(id),
    title: "Response"
  }, typeof response === 'function' ? /*#__PURE__*/_react["default"].createElement(_components.Placeholder, null, "This is a custom function. You can only change it from the declaration.") : /*#__PURE__*/_react["default"].createElement(ObjectContent, null, /*#__PURE__*/_react["default"].createElement(_blocks.ObjectControl, {
    name: "",
    value: response,
    onChange: function onChange(value) {
      return _onChange('response', value);
    }
  })))));
};
exports.MockItem = MockItem;
MockItem.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  url: _propTypes["default"].string.isRequired,
  method: _propTypes["default"].string.isRequired,
  status: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  skip: _propTypes["default"].bool.isRequired,
  response: _propTypes["default"].any,
  delay: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired
};