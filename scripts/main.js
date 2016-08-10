var width = 960;
var height = 960;

for (var i = 0; i < 16; i++) {
	for (var j = 0; j < 16; j++) {
  	$("section").append("<div class='row'></div>");

  }
}

    width = 960/16 - 2;
    height = 960/16 - 2;
    $(".row").height(height + 'px');
    $('.row').width(width + 'px');

$('button').on('click', function(){
	$("section").html("");
  var size = prompt("How many squares per side do you want?");
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      $("section").append("<div class='row'></div>");
    }
  }
      width = 960/size - 2;
    height = 960/size - 2;
    $(".row").height(height + 'px');
    $('.row').width(width + 'px');
  $('section').show();
});
