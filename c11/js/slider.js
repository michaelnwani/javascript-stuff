$('.slider').each(function(){	//For every slider
	var $this = $(this),	//Get the current slider
	var $group = $this.find('.slide-group'),	//Get the slide-group (container)
	var $slides = $this.find('.slide'),	//jQuery object to hold all slides
	var buttonArray = [],	//Create array to hold nav buttons
	var currentIndex = 0,	//Index number of current slide
	var timeout;	//Used to store the timer
	
	// move() - The function to move the slides goes here (see next page)
	
	function advance(){	//Sets a timer between slides
		clearTimeout(timeout);	//Clear timer stored in timeout
		//Start timer to run an anyonymous function every 4 seconds
		timeout = setTimeout(function(){
			if (currentIndex < ($slides.length - 1)){	//If not the last slide
				move(currentIndex + 1);	//Move to next slide
			} else{	//Otherwise
				move(0);	//Move to the first slide
			}
		}, 4000);	//Milliseconds timer will wait
	}
	
	$.each($slides, function(index){	
		//Create a button element for the button
		var $button = $('<button type="button" class="slide-btn">&bull;</button>');
		if (index === currentIndex){	//If index is the current item
			$button.addClass('active');	//Add the active class
		}
		$button.on('click', function(){	//Create event handler for the button
			move(index);	//It calls the move() function
		}).appendTo('.slide-buttons');	//Add to the buttons holder
		buttonArray.push($button);	//Add it to the button array
	});
	
	advance();
	
	//Setup of the script shown on the previous page
	
	function move(newIndex){ //Creates the slide from old to new one
		var animateLeft, slideLeft; //Declare variables
		
		advance(); //When slide moves, call advance() again
		
		//If current slide is showing or a slide is animating, then do nothing
		if ($group.is(':animated') || currentIndex === newIndex){
			return;
		}
		
		buttonArray[currentIndex].removeClass('active'); //Remove class from item
		buttonArray[newIndex].addClass('active'); //Add class to new item
		
		if (newIndex > currentIndex){ //If new item > current
			slideLeft = '100%'; //Sit the new slide to the right
			animateLeft = '-100%'; //Animate the current group to the left
		} else{	//Otherwise
			slideLeft = '-100%'; //Sit the new slide to the left
			animateLeft = '100%'	//Animate the current group to the right
		}
		
		//Position new slide to left (if less) or right (if more) of current
		$slides.eq(newIndex).css({left: slideLeft, display: 'block'});
		$group.animate({left: animateLeft}, function(){ //Animate slides and
			$slides.eq(currentIndex).css({display: 'none'}); //Hide previous slide
			$slides.eq(newIndex).css({left: 0}); //Set position of the new item
			$group.css({left: 0}); //Set position of group of slides
			currentIndex = newIndex; //Set currentIndex to new image
		});
	}
	
	//Handling the slides shown on p519
})