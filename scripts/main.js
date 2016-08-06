for (var i = 0; i < 16; i++) {
	for (var j = 0; j < 16; j++) {
  	$("section").append("<div class='row'></div>");
  }
  $("section").append("<div class='space'></div>");
}

$('button').on('click', function(){
	$("section").html("");
  var size = prompt("How many squares per side do you want?");
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      $("section").append("<div class='row'></div>");
    }
    $("section").append("<div class='space'></div>");
  }
  $('section').show();
});