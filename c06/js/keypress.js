var el;

function charCount(e){
	var textEntered, charDisplay, counter, lastKey;
	textEntered = document.getElementById('message').value; //User's text
	charDisplay = document.getElementById('charactersLeft'); //Counter element
	counter = (180 - (textEntered.length)); //Num of chars left
	charDisplay.textContent = counter;
	
	lastKey = document.getElementById('lastKey'); //Get last key used
	lastKey.textContent = 'Last key in ASCII code: ' + String.fromCharCode(e.keyCode); //Create msg
}
el = document.getElementById('message');
el.addEventListener('keypress', charCount, false); //keypress event