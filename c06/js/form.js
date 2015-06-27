var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; //Declare variables
elForm = document.getElementById('formSignup'); //Store elements
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint(){ //Declare function
	var package = this.options[this.selectedIndex].value; //Get selected option
	if (package == 'monthly'){
		elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!'; //Show this msg
	} else{ //Otherwise
		elPackageHint.innerHTML = 'Wise choice!'; //Show this message
	}
}

function checkTerms(event){
	if (!elTerms.checked){ //If checkbox ISN'T ticked
		elTermsHint.innerHTML = 'You must agree to the terms.'; //Show message
		event.preventDefault();
	}
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);