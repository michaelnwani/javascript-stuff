var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength){
	if (elUsername.value.length < minLength){
		//Set message
		elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
	} else{
		elMsg.innerHTML = '';
	}
}

if (elUsername.addEventListener){
	elUsername.addEventListener('blur', function(){
		checkUsername(5);
	}, false);
}
else{ //for IE8 and earlier
	elUsername.attachEvent('onblur', function(){
		checkUsername(5);
	})
}