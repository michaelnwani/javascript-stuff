var pinLocation = new google.maps.LatLng(40.782710, -73.965310);

var startPosition = new google.maps.Marker({ //Create a new marker
	position: pinLocation,	//Set its position
	map: venueMap,	//Specify the map
	icon: "img/go.png"	//Path to image from HTML
})