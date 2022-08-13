class Validator {
  isEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      return "Не соответствует";
    } else {
      return "Соответствует";
    }
  }

  isDate(data) {
    let regex = /[0-9]{2}[\s\.][0-9]{2}[\s\.]?[0-9]{4}$/;
    if (!regex.test(data)) {
      return "Не соответствует";
    } else {
      return "Соответствует";
    }
  }
  isPhone(tel) {
    let regex =
      /^\+3|8|0?[\s\-]?\(?[29][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!regex.test(tel)) {
      return "Не соответствует";
    } else {
      return "Соответствует";
    }
  }
}

var validator = new Validator();

console.log(validator.isEmail("phphtml@gmail.com"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+380 (29) 817-68-92")); //тут можете формат своей страны
