// Getting all the countries from Asia region using Filter function
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload = function () {
  let data = JSON.parse(this.response);
  // Filtering countries in Asia region
  let asiaRegion = data
    .filter((data) => data.region === "Asia")
    .map((data) => {
      return data.name;
    });
  console.log(asiaRegion);
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();

// Getting all the countries with a population of less than 2 lakhs using Filter function
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload = function () {
  let data = JSON.parse(this.response);
  // Filtering countries by popolation
  let population = data
    .filter((data) => data.population < 200000)
    .map((data) => {
      return [data.name, data.population];
    });
  console.log(population);
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();

// Print name, capital, flag using forEach function
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload = function () {
  let data = JSON.parse(this.response);
  data.forEach(function (d) {
    console.log(`
    Name: ${d.name},
    Capital: ${d.capital},
    Flag: ${d.flag}`);
  });
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();

// Calculating Total Population
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload = function () {
  let data = JSON.parse(this.response);
  let population = data.filter((data) => data.population)
  .map((data) => {return data.population})
  .reduce((prev, cur) => prev + cur);
  console.log(population);
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();

// Displaying countries using US Cuurency
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload = function () {
  let data = JSON.parse(this.response);

  let currency = data
    .filter((x) => {
      for (let curr in x.currencies) {
        if (x.currencies[curr].code === "USD") {
         return true;
        }
      }
    })
    .map((x) => {
      console.log(x.name);
    });
  
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();
