yepnope({
	test: Modernizr.inputtypes.number,
	nope: ['js/numPolyfill.js', 'css/number.css'],
	complete: function(){
		console.log('YepNope + Modernizer are done');
	}
})