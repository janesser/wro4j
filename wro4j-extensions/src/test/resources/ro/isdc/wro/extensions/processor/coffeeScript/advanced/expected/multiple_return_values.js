(function() {
  var city, forecast, ref, temp, weatherReport;

  weatherReport = function(location) {
    return [location, 72, "Mostly Sunny"];
  };

  ref = weatherReport("Berkeley, CA"), city = ref[0], temp = ref[1], forecast = ref[2];

}).call(this);