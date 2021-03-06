'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('/Users/zhentianwan/Documents/Programming/React/react-nuxt-demo/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/zhentianwan/Documents/Programming/React/react-nuxt-demo/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/zhentianwan/Documents/Programming/React/react-nuxt-demo/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/zhentianwan/Documents/Programming/React/react-nuxt-demo/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/zhentianwan/Documents/Programming/React/react-nuxt-demo/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/zhentianwan/Documents/Programming/React/react-nuxt-demo/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _nav = require('../components/nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function (_React$Component) {
    (0, _inherits3.default)(About, _React$Component);

    function About() {
        (0, _classCallCheck3.default)(this, About);
        return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
    }

    (0, _createClass3.default)(About, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'ABOUT PAGE'
                ),
                _react2.default.createElement(_nav2.default, null),
                _react2.default.createElement(
                    'span',
                    null,
                    'This page is rendering from ',
                    this.props.name
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var req = _ref.req;

            var name = req ? 'server' : 'client';
            return {
                name: name
            };
        }
    }]);
    return About;
}(_react2.default.Component);

exports.default = About;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwicHJvcHMiLCJuYW1lIiwicmVxIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7OztpQ0FTUjtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSSxrRUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQ2lDLHlCQUFLQyxLQUFMLENBQVdDO0FBRDVDO0FBSEosYUFESjtBQVNIOzs7OENBakI2QjtBQUFBLGdCQUFOQyxHQUFNLFFBQU5BLEdBQU07O0FBQzFCLGdCQUFNRCxPQUFPQyxNQUFNLFFBQU4sR0FBZ0IsUUFBN0I7QUFDQSxtQkFBTztBQUNIRCxzQkFBTUE7QUFESCxhQUFQO0FBR0g7OztFQVA4QixnQkFBTUUsUzs7a0JBQXBCSixLIiwiZmlsZSI6ImFib3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy96aGVudGlhbndhbi9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvUmVhY3QvcmVhY3QtbnV4dC1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHtyZXF9KSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSByZXEgPyAnc2VydmVyJzogJ2NsaWVudCc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+QUJPVVQgUEFHRTwvaDE+XG4gICAgICAgICAgICAgICAgPE5hdj48L05hdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyBwYWdlIGlzIHJlbmRlcmluZyBmcm9tIHt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ==