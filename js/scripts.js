$(function(){
  $('#main-content form').submit(function(event) {
    var numInput = parseInt($('input#userInput').val());
    event.preventDefault();
    $('#sub-content').show();

    $('#output').text(numInput);
  });
});
