var username, noteName, textEntered, target; //Declare variables

noteName = document.getElementById('noteName'); //Element that holds note

function writeLabel(e){ //Declare function
	if (!e){ //If event object not present
		e = window.event; //Use IE5-8 fallback
	}
	target = event.target || event.srcElement; //Get target of event
	textEntered = e.target.value; //Value of that element
	noteName.textContent = textEntered; //Update note text
}

//This is where the record / pause controls and functions go...
//See right hand page

if (document.addEventListener){
	document.addEventListener('click', function(e){
		recorderControls(e);
	}, false); //capture during bubble phase
	//If input event fires on username input call writeLabel()
	username.addEventListener('input', writeLabel, false); //input is a type of keypress event
} else{
	document.attachEvent('onclick', function(e){ //IE fallback
		recorderControls(e); 
	});
	//If keyup event fires on username input call writeLabel()
	username.attachEvent('onkeyup', writeLabel, false);
}

function recorderControls(e){
	if (!e){
		e = window.event;
	}
	target = event.target || event.srcElement;
	if (event.preventDefault){
		e.preventDefault(); //Stop default action
	} else{
		event.returnValue = false; //IE fallback
	}
	
	switch (target.getAttribute('data-state')){ //Get the data-state attribute (HTML5 thing)
	case 'record': //If its value is record
		record(target);
		break; 
	case 'stop': //If its value is stop
		stop(target);
		break;
		//More buttons could go here...
	}
}

function record(target){
	target.setAttribute('data-state', 'stop');
	target.textContent = 'stop';
}

function stop(target){
	target.setAttribute('data-state', 'record');
	target.textContent = 'record';
}