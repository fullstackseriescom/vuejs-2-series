Vue.filter('format-thousands', function (value) {
  // https://stackoverflow.com/a/2901298
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});


new Vue({
  el: "#app",
  data: {
    textSearch: "",
    countries: []
  },
  computed: {
     countriesFilter: function() {
       var textSearch = this.textSearch;
       return this.countries.filter(function(el) {
         return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
       });
     }
  },
  created: function() {
    var that = this;
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(function (response) {
      that.countries = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  mounted: function() {
    $.scrollUp();
  }
})