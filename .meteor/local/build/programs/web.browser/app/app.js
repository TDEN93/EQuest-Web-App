var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// client/template.main.js                                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  // 1
Template.body.addContent((function() {                                                            // 2
  var view = this;                                                                                // 3
  return HTML.Raw('<div id="render-target"></div>');                                              // 4
}));                                                                                              // 5
Meteor.startup(Template.body.renderToDocument);                                                   // 6
Meteor.startup(function() {                                                                       // 7
  var attrs = {"class":"site"};                                                                   // 8
  for (var prop in attrs) {                                                                       // 9
    document.body.setAttribute(prop, attrs[prop]);                                                // 10
  }                                                                                               // 11
});                                                                                               // 12
                                                                                                  // 13
////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// client/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var React = void 0;                                                                               // 1
module.watch(require("react"), {                                                                  // 1
  "default": function (v) {                                                                       // 1
    React = v;                                                                                    // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var render = void 0;                                                                              // 1
module.watch(require("react-dom"), {                                                              // 1
  render: function (v) {                                                                          // 1
    render = v;                                                                                   // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
var renderRoutes = void 0;                                                                        // 1
module.watch(require("../imports/startup/client/routes.js"), {                                    // 1
  renderRoutes: function (v) {                                                                    // 1
    renderRoutes = v;                                                                             // 1
  }                                                                                               // 1
}, 3);                                                                                            // 1
// React Components                                                                               // 8
Meteor.startup(function () {                                                                      // 11
  render(renderRoutes(), document.getElementById('render-target'));                               // 12
});                                                                                               // 13
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"startup":{"client":{"routes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/startup/client/routes.js                                                               //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
  renderRoutes: function () {                                                                     // 1
    return renderRoutes;                                                                          // 1
  }                                                                                               // 1
});                                                                                               // 1
var React = void 0;                                                                               // 1
module.watch(require("react"), {                                                                  // 1
  "default": function (v) {                                                                       // 1
    React = v;                                                                                    // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var Router = void 0,                                                                              // 1
    Route = void 0;                                                                               // 1
module.watch(require("react-router"), {                                                           // 1
  Router: function (v) {                                                                          // 1
    Router = v;                                                                                   // 1
  },                                                                                              // 1
  Route: function (v) {                                                                           // 1
    Route = v;                                                                                    // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var createBrowserHistory = void 0;                                                                // 1
module.watch(require("history/createBrowserHistory"), {                                           // 1
  "default": function (v) {                                                                       // 1
    createBrowserHistory = v;                                                                     // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
var App = void 0;                                                                                 // 1
module.watch(require("../../ui/components/App.js"), {                                             // 1
  "default": function (v) {                                                                       // 1
    App = v;                                                                                      // 1
  }                                                                                               // 1
}, 3);                                                                                            // 1
var Team = void 0;                                                                                // 1
module.watch(require("../../ui/components/Team.js"), {                                            // 1
  "default": function (v) {                                                                       // 1
    Team = v;                                                                                     // 1
  }                                                                                               // 1
}, 4);                                                                                            // 1
var browserHistory = createBrowserHistory();                                                      // 10
                                                                                                  //
var renderRoutes = function () {                                                                  // 12
  return React.createElement(                                                                     // 12
    Router,                                                                                       // 13
    {                                                                                             // 13
      history: browserHistory                                                                     // 13
    },                                                                                            // 13
    React.createElement(                                                                          // 14
      "div",                                                                                      // 14
      null,                                                                                       // 14
      React.createElement(Route, {                                                                // 15
        exact: true,                                                                              // 15
        path: "/",                                                                                // 15
        component: App                                                                            // 15
      }),                                                                                         // 15
      React.createElement(Route, {                                                                // 16
        exact: true,                                                                              // 16
        path: "team",                                                                             // 16
        component: Team                                                                           // 16
      })                                                                                          // 16
    )                                                                                             // 14
  );                                                                                              // 13
};                                                                                                // 12
////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"ui":{"components":{"App.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/ui/components/App.js                                                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                           //
                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                  //
                                                                                                  //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");     //
                                                                                                  //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);            //
                                                                                                  //
var _inherits2 = require("babel-runtime/helpers/inherits");                                       //
                                                                                                  //
var _inherits3 = _interopRequireDefault(_inherits2);                                              //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
module.export({                                                                                   // 1
  "default": function () {                                                                        // 1
    return App;                                                                                   // 1
  }                                                                                               // 1
});                                                                                               // 1
var React = void 0,                                                                               // 1
    Component = void 0;                                                                           // 1
module.watch(require("react"), {                                                                  // 1
  "default": function (v) {                                                                       // 1
    React = v;                                                                                    // 1
  },                                                                                              // 1
  Component: function (v) {                                                                       // 1
    Component = v;                                                                                // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
                                                                                                  //
var FontAwesome = require('react-fontawesome'); // Task component - represents a single todo item
                                                                                                  //
                                                                                                  //
var App = function (_Component) {                                                                 //
  (0, _inherits3.default)(App, _Component);                                                       //
                                                                                                  //
  function App() {                                                                                //
    (0, _classCallCheck3.default)(this, App);                                                     //
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));     //
  }                                                                                               //
                                                                                                  //
  App.prototype.render = function () {                                                            //
    function render() {                                                                           //
      return React.createElement(                                                                 // 11
        "div",                                                                                    // 12
        {                                                                                         // 12
          className: "container"                                                                  // 12
        },                                                                                        // 12
        React.createElement(                                                                      // 14
          "div",                                                                                  // 14
          {                                                                                       // 14
            className: "navigation-grid"                                                          // 14
          },                                                                                      // 14
          React.createElement("i", {                                                              // 15
            "class": "menu-icon fa fa-bars fa-2x",                                                // 15
            "aria-hidden": "true"                                                                 // 15
          })                                                                                      // 15
        ),                                                                                        // 14
        React.createElement(                                                                      // 20
          "div",                                                                                  // 20
          {                                                                                       // 20
            className: "content-grid"                                                             // 20
          },                                                                                      // 20
          React.createElement("img", {                                                            // 21
            className: "mobile-logo",                                                             // 21
            src: "/logo-full.svg"                                                                 // 21
          }),                                                                                     // 21
          React.createElement(                                                                    // 22
            "h1",                                                                                 // 22
            null,                                                                                 // 22
            "THE FUTURE"                                                                          // 22
          ),                                                                                      // 22
          React.createElement(                                                                    // 23
            "span",                                                                               // 23
            null,                                                                                 // 23
            "OF GAMING INTELLIGENCE IS HERE"                                                      // 23
          ),                                                                                      // 23
          React.createElement(                                                                    // 25
            "section",                                                                            // 25
            null,                                                                                 // 25
            React.createElement(                                                                  // 26
              "span",                                                                             // 26
              {                                                                                   // 26
                className: "desc-text"                                                            // 26
              },                                                                                  // 26
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic rem tempora sequi ut, culpa harum illum nam? Illum voluptates accusamus doloribus debitis autem aliquam dolores."
            )                                                                                     // 26
          ),                                                                                      // 25
          React.createElement(                                                                    // 32
            "button",                                                                             // 32
            {                                                                                     // 32
              className: "demo-button"                                                            // 32
            },                                                                                    // 32
            "Request a demo"                                                                      // 32
          )                                                                                       // 32
        ),                                                                                        // 20
        React.createElement(                                                                      // 37
          "div",                                                                                  // 37
          {                                                                                       // 37
            className: "footer-grid"                                                              // 37
          },                                                                                      // 37
          React.createElement("img", {                                                            // 38
            className: "wave",                                                                    // 38
            src: "/mobile-waves.svg"                                                              // 38
          })                                                                                      // 38
        )                                                                                         // 37
      );                                                                                          // 12
    }                                                                                             // 46
                                                                                                  //
    return render;                                                                                //
  }();                                                                                            //
                                                                                                  //
  return App;                                                                                     //
}(Component);                                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////

},"Team.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/ui/components/Team.js                                                                  //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                           //
                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                  //
                                                                                                  //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");     //
                                                                                                  //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);            //
                                                                                                  //
var _inherits2 = require("babel-runtime/helpers/inherits");                                       //
                                                                                                  //
var _inherits3 = _interopRequireDefault(_inherits2);                                              //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
module.export({                                                                                   // 1
  "default": function () {                                                                        // 1
    return Team;                                                                                  // 1
  }                                                                                               // 1
});                                                                                               // 1
var React = void 0,                                                                               // 1
    Component = void 0;                                                                           // 1
module.watch(require("react"), {                                                                  // 1
  "default": function (v) {                                                                       // 1
    React = v;                                                                                    // 1
  },                                                                                              // 1
  Component: function (v) {                                                                       // 1
    Component = v;                                                                                // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
                                                                                                  //
var FontAwesome = require('react-fontawesome');                                                   // 2
                                                                                                  //
var Team = function (_Component) {                                                                //
  (0, _inherits3.default)(Team, _Component);                                                      //
                                                                                                  //
  function Team() {                                                                               //
    (0, _classCallCheck3.default)(this, Team);                                                    //
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));     //
  }                                                                                               //
                                                                                                  //
  Team.prototype.render = function () {                                                           //
    function render() {                                                                           //
      return React.createElement(                                                                 // 6
        "h1",                                                                                     // 7
        null,                                                                                     // 7
        " Write Team Code Here "                                                                  // 7
      );                                                                                          // 7
    }                                                                                             // 9
                                                                                                  //
    return render;                                                                                //
  }();                                                                                            //
                                                                                                  //
  return Team;                                                                                    //
}(Component);                                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("./client/template.main.js");
require("./client/main.js");