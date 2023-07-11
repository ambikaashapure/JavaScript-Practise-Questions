// function to filter out the same key and value pair.

function objectFilter(obj, callback) {
    return Object.entries(obj).reduce((filteredObj, [key, value]) => {
    if (callback(value) === value) {
        filteredObj[key] = value;
    }
    return filteredObj;
    }, {});
}

const cities = {
    London: "LONDON",
    LA: "Los Angeles",
    Paris: "PARIS",
};

// function to convert value in uppercase.

function uppercaseCity(city) {
    return city.toUpperCase();
}

console.log(objectFilter(cities, uppercaseCity));
