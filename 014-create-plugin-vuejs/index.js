(function () {
  // https://github.com/caroso1222/notyf
  if (typeof require === "function") {
    // npm module
    Notyf = require("notyf");
  }
  var notyf = new Notyf();

  var VueNotyf = {
    install: function(Vue) {
      // add to the Vue instance
      Vue.prototype.$notyf = this;
    },
    alert: function(text) {
      return notyf.alert(text);
    },
    confirm: function(text) {
      return notyf.confirm(text);
    }
  };

  if (typeof exports == "object") {
    module.exports = VueNotyf;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return VueNotyf });
  } else if (window.Vue) {
    Vue.use(VueNotyf);
  }
})();