//Select the starting point and find its children
var startItem = document.getElementsByTagName('ul')[0];

var firstItem = startItem.firstElementChild;
window.alert(firstItem);
var lastItem = startItem.lastElementChild;
window.alert(lastItem);

//Change the values of the children's class attributes
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');