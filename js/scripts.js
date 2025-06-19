let list = $('#list');
let li = $('<li></li>');

let inputValue = $('#input').val();
  li.append(inputValue);
  list.append(li);
  //li.addClass("delete");

li.on("click", function() {
    li.addClass("strike");
  });