function checkUsername(){
	var username = el.value; //store username in variable
	if (username.length < 5){
		elMsg.className = 'warning';
		elMsg.textContent = 'Not long enough, yet...';
	} else{
		elMsg.textContent = '';
	}
}
function tipUsername(){
	elMsg.className = 'tip';
	elMsg.innerHTML = 'Username must be at least 5 characters';
}

var el = document.getElementById('username'); //Username input
var elMsg = document.getElementById('feedback'); //Element to hold message

//When the username input gains/loses focus call functions above:
el.addEventListener('focus', tipUsername, false); //focus call tipUsername()
el.addEventListener('blur', checkUsername, false); //focus call checkUsername()