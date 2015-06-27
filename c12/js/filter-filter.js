$(function(){
	//DATA ABOUT PEOPLE GOES HERE (shown on left-hand page)
	
	
	
	
	
	//FILTERING CODE (see p537) GOES HERE - CREATES A NEW ARRAY CALLED RESULTS
	
	var $tableBody = $('<tbody></tbody>'); //New content jQuery
	for (var i = 0; i < results.length; i++){ //Loop through matches
		var person = results[i]; //Store current person
		var $row = $('<tr></tr>'); //Create a row for them
		$row.append($('<td></td>').text(person.name)); //Add their name
		$row.append($('<td></td>').text(person.rate)); //Add their rate
		$tableBody.append($row); //Add row to new content
	}
	
	//Add the new content after the body of the page
	$('thead').after($tableBody); //Add tbody after thead
	
	//THIS FUNCTION ACTS AS A FILTER
	function priceRange(person){ //Declare priceRange()
		return (person.rate >= 65 && (person.rate <= 90)); //In range returns true
	};
	
	//FILTER THE PEOPLE ARRAY & ADD MATCHES TO THE RESULTS ARRAY
	var results = [];	//Array for matching people
	results = people.filter(priceRange); //filter() calls priceRange();
});