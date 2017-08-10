Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value;
});

new Vue({
  el: '#app'
});