// Problem 1 - A
// Creating a class called "Movie"
class Movie {
    constructor(title, studio, rating){
        // Setting values to its propertiies
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

let film1 = new Movie("Red Notice", "Seven Bucks", "PG13");
console.log(film1);

// Problem 1 - B
// Creating a class called "Movie"
class Movie {
    //For Rating parameter setting a default value to "PG"
    constructor(title, studio, rating = "PG"){
        // Setting values to its propertiies
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

let film1 = new Movie("Red Notice", "Seven Bucks");
console.log(film1);

// Problem 1 - C
// Creating a class called "Movie"
class Movie {
  constructor(title, studio, rating){
      // Setting values to its propertiies
      this.title = title;
      this.studio = studio;
      this.rating = rating;
  }
// Assigning a getPG() method to return movie title rated with PG
  getPG (){
      if(this.rating === "PG"){
          return `${this.title} is rated with PG`;
      } else{
          return `${this.title} is not rated with PG`;
      }
  }
}

let film1 = new Movie("Red Notice", "Seven Bucks", "PG13");
let film2 = new Movie("Annathe", "Sun Pictutes", "PG");
console.log(film1.getPG());
console.log(film2.getPG());

// Problem 1 - D
// Creating a class called "Movie"
class Movie {
    constructor(title, studio, rating){
        // Setting values to its propertiies
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// Creating an instance of the class Movie
let film1 = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(film1);
