class Traveler {
  constructor(name) {
    (this.name = name), (this.food = 1), (this.isHealthy = true);
  }
  hunt() {
    food += 2;
  }
  eat() {
    food -= 1;
    if (food <= 0) {
      isHealthy = false;
    }
  }
}

class Wagon {
  constructor(cp) {
    (this.capacity = cp), (this.passengers = []);
  }
  getAvailableSeatCount() {
    return cp - this.passengers.length;
  }
  join(traveler) {}
  shouldQuarantine() {
    if (Traveler.isHealthy === false) {
      return true;
    }
  }
  totalFood() {}
}

let traveler1 = new Traveler("John");
console.log(traveler1);
