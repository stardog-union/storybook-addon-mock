var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@storybook/theming';
import { ButtonToggle } from '../ButtonToggle';
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 1rem;\n    border: 1px solid ", ";\n    border-radius: 5px;\n    box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.appBorderColor;
});
var Header = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 0.5rem 1rem;\n"])));
var Content = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    opacity: ", ";\n    pointer-events: ", ";\n    padding: 0 0.75rem;\n\n    > label:last-child {\n        padding: 1rem;\n        margin-bottom: 0;\n    }\n"])), function (props) {
  return props.enabled ? 1 : 0.5;
}, function (props) {
  return props.enabled ? 'inherit' : 'none';
});
export var Card = function Card(_ref2) {
  var children = _ref2.children,
    onToggle = _ref2.onToggle,
    _ref2$enabled = _ref2.enabled,
    enabled = _ref2$enabled === void 0 ? true : _ref2$enabled,
    _ref2$showHeader = _ref2.showHeader,
    showHeader = _ref2$showHeader === void 0 ? true : _ref2$showHeader;
  return /*#__PURE__*/React.createElement(Container, null, showHeader && /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(ButtonToggle, {
    name: "Enabled",
    value: enabled,
    onChange: onToggle
  })), /*#__PURE__*/React.createElement(Content, {
    enabled: enabled
  }, children));
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func,
  enabled: PropTypes.bool,
  showHeader: PropTypes.bool
};
Card.defaultProps = {
  showHeader: true,
  enabled: true
};