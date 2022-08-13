class MyString {
  //   _text = "";

  constructor() {
    // this._text = text;
  }

  //   getText() {
  //     return (this._text = text);
  //   }

  //   setText(text) {
  //     this._text = text;
  //   }

  reverse(text) {
    var newString = "";
    for (var i = text.length - 1; i >= 0; i--) {
      newString += text[i];
    }
    return newString;
  }
  ucFirst(text) {
    return text[0].toUpperCase() + text.slice(1);
  }
  ucWords(text) {
    let newArr = [];
    let sorted = text.slice().split(" ");
    for (var j = 0; j < sorted.length; j++) {
      let word = sorted[j];
      word = word[0].toUpperCase() + word.slice(1);
      newArr.push(word);
    }
    return newArr.join(" ");
  }
}

var str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'
