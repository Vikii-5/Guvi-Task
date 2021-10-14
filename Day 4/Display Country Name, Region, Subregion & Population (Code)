// Displaying Countries Name, Region, Subregion & Population using Restcountries API
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);

  for (let i in data) {
    let country = data[i].name;
    let region = data[i].region;
    let subregion = data[i].subregion;
    let population = data[i].population;

    console.log({
      country,
      region,
      subregion,
      population,
    });
  }
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();
