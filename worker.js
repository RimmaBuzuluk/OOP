class Worker {
  _name;
  _surname;
  _rate;
  _days;

  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }

  getName() {
    return this._name;
  }
  getSurname() {
    return this._surname;
  }

  getRate() {
    return this._rate;
  }

  setRate(rate) {
    this._rate = rate;
  }

  getDays() {
    return this._days;
  }

  setDays(days) {
    this._days = days;
  }

  getSalary() {
    return this._rate * this._days;
  }
}

var worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
