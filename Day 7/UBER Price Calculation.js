//Calculating UBER Ride Price
class Uber {
  constructor(carType, distance) {
    this.carType = carType;
    this.distance = distance;
  }
// Creating getPrice() method to get ride price by Car Type
  getPrice() {
      // Calculating Normal Car Ride Price
    if (this.carType === "normal") {
      if (this.distance <= 4) {
        let fixedRate = 75; // For 1st 4KMs Fixed rate is 75 Rupees
        return `Your Ride Fare is ${fixedRate} Rupees`;
      } else {
        let fixedRate = 75; // After 4KMs, additional rate is 18 Rupees per KM
        let price = fixedRate + (this.distance - 4) * 18;
        return `Your Ride Fare is ${price} Rupees`;
      }
    }
    // Calculating Luxury Car Ride Price
    else if (this.carType === "luxury") {
      if (this.distance <= 4) {
        let fixedRate = 100; // For 1st 4KMs Fixed rate is 100 Rupees
        return `Your Ride Fare is ${fixedRate} Rupees`;
      } else {
        let fixedRate = 100; // After 4KMs, additional rate is 24 Rupees per KM
        let price = fixedRate + (this.distance - 4) * 24;
        return `Your Ride Fare is ${price} Rupees`;
      }
    }
  }
}

let ride = new Uber ("luxury", 6);
console.log(ride.getPrice());
