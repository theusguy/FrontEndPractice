//Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})

//Click on X to delete todo
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//Grabbing new todo text from input
		var todoText = $(this).val();
		//Make the input empty agian
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li");
	}
})

$(".fa-pencil-square-o").click(function() {
	$("input[type='text']").fadeToggle(200);
})