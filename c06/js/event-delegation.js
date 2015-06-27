function getTarget(e){ //Declare function
	if (!e){ //If there is no event object
		e = window.event; //Use old IE event object
	}
	return e.target || e.srcElement; //Get the target of event
}

function itemDone(e){
	//Remove item from the list
	var target, elParent, elGrandparent;
	target = getTarget(e); //Get the item clicked link
	elParent = target.parentNode; //Get its list item
	elGrandparent = target.parentNode.parentNode; //Get its list
	elGrandparent.removeChild(elParent); //Remove list item from list
	
	//Prevent the link from taking you elsewhere
	if (e.preventDefault()){
		e.preventDefault();
	} else{
		e.returnValue = false; //Use old IE version
	}
}

//Set up event listeners to call itemDone() on click
var el = document.getElementById('shoppingList'); //Get shopping list
if (el.addEventListener){
	el.addEventListener('click', function(e){ //Add listener on click
		itemDone(e);
	}, false); //Use bubbling phase for flow
} else{
	el.attachEvent('onclick', function(e){ //Use old IE model: onclick
		itemDone(e);
	});
}