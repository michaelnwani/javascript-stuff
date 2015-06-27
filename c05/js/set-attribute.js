var firstItem = document.getElementById('one'); //Get the first item
firstItem.className = 'complete'; //Change its class attribute

var fourthItem = document.getElementsByTagName('li').item(3); //Get the fourth item
fourthItem.setAttribute('class', 'cool'); //Add an attribute to it