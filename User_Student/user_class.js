class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

//////////////////////////////////////////////////////////////

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    let course = 2022 - this.year;
    if (course >= 1 && course <= 5) {
      return course;
    } else {
      let f = "you aren`t student";
      return f;
    }
  }
}

var student = new Student("Иван", "Иванов", 2020);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2019
console.log(student.getCourse(), "course"); //выведет 3 - третий курс, так как текущий год 2022
