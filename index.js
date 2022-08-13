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
  getSalary() {
    return this._rate * this._days;
  }
}

var worker = new Worker("Иван", "Иванов", 10, 31);
var worker2 = new Worker("Дмитро", "Петров", 12, 25);

console.log(worker._name); //выведет 'Иван'
console.log(worker._surname); //выведет 'Иванов'
console.log(worker._rate); //выведет 10
console.log(worker._days); //выведет 31
console.log(worker.getSalary());
console.log(worker.getSalary() + worker2.getSalary());
