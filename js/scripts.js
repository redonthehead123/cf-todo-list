function newItem() {
  // Add a new item to the list
  let inputValue = $('#input').val().trim();
  if (!inputValue) return;
  let li = $('<li></li>').text(inputValue);

  // Cross out an item from the list upon clicking the item
  li.on('click', function() {
    $(this).toggleClass('strike');
  });

  // Delete an item from the list
  let deleteBtn = $('<button></button>')
    .text('X')
    .addClass('crossOutButton')
    .on('click', function(e) {
      e.stopPropagation();
      li.addClass('delete');
    });
  
  li.append(deleteBtn);
  $('#list').append(li);

  // Make the list sortable
  $('#list').sortable();

  // Clear input
  $('#input').val('');
}

$('#input').keypress(function(e) {
  if (e.which === 13) {
    newItem();
    return false;
  }
});