function checkLength(e, minLength){
	var el, elMsg;
	if (!e){
		e = window.event;
	}
	el = e.target || e.srcElement; //Get the target of event
	elMsg = el.nextSibling; //Get its next sibling
	
	if (el.value.length < minLength){ //If length is too short set msg
		elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';	
	} else{
		elMsg.innerHTML = ''; //Clear message
	}
}

var elUsername = document.getElementById('username'); //Get username input
if (elUsername.addEventListener){
	elUsername.addEventListener('blur', function(e){
		checkLength(e, 5);
	}, false);
}
else{
	elUsername.attachEvent('onblur', function(e){
		checkLength(e, 5);
	});
}