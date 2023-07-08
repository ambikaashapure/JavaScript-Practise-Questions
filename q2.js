//Solution to question 2

function objectFilter(obj, callback) {
    var filteredObj = {};
  
    for (var key in obj) {
      var value = obj[key];
      if (callback(key) === value) {
        filteredObj[key] = value;
      }
    }
  
    return filteredObj;
  }
  
 
  const cities = {
    London: "LONDON",
    LA: "Los Angeles",
    Paris: "PARIS",
  };
  
  function uppercaseCity(city) {
    return city.toUpperCase();
  }
  
  console.log(objectFilter(cities, uppercaseCity));
  