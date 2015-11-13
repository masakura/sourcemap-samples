class Person {
  constructor(name) {
    this.name = name;
  }

  display() {
    alert(this.name);
  }
}

const person = new Person('Taro');

$(document).on('click', '#button1', () => {
  person.display();
});
