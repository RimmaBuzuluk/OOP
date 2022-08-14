import User from "./user_class";

class Student extends User {}

var student = new Student("Иван", "Иванов", 2019);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иван Иванов'
//console.log(worker.year); //выведет 2019console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2022
