$('#register').on('submit', function(e){
	e.preventDefault();
	var details = $('#register').serialize(); //Serialize form data
	$.post('register.php', details, function(data){ //Use $.post() to send it
		$('#register').html(data); //Where to display result
	});
});