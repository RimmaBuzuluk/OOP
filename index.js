class Worker {
  name;
  surname;
  rate;
  days;

  constructor(n, s, r, d) {
    this.name = n;
    this.surname = s;
    this.rate = r;
    this.days = d;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

var worker = new Worker("Иван", "Иванов", 10, 31);
var worker2 = new Worker("Дмитро", "Петров", 12, 25);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary());
console.log(worker.getSalary() + worker2.getSalary());
