// Displaying Countries Flag & Name using Restcountries API
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload = function () {
  var t = JSON.parse(this.response);

  for (i = 0; i < t.length; i++) {
    console.log(t[i].flag, t[i].name);
  }
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();
