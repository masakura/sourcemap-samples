class Person {
  constructor(name) {
    this.name = name;
  }

  display() {
    alert(this.name);
  }
}

$(document).on('click', '#button1', () => {
  // 名前を取得
  const name = $('#name-input').val();

  // 人のオブジェクトを作って表示する
  const person = new Person(name);
  person.display();

  // 人を追加する
  $('<li>')
    .addClass('list-group-item')
    .text(person.name)
    .appendTo('#names');

  // 入力欄をクリア
  $('#name-input').val('');
});
