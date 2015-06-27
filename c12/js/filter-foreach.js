$(function(){
	//DATA ABOUT PEOPLE GOES HERE (shown on p534)
	
	//CHECKS EACH PERSON AND ADDS THOSE IN RANGE TO ARRAY
	var results = [];	//Array for people in range
	people.forEach(function(person){ //For each person
		if (person.rate >= 65 && person.rate <= 90){ //Is rate in range
			results.push(person);
		}
	});
	
	//LOOP THROUGH RESULTS ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
});