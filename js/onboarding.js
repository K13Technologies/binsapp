amaam$( document ).ready(function() {
    console.log( "ready!" );
    handleBack();
    showStep('step1');	
});

$( ".click" ).click(function(event) {
		console.log('leaving ' + $(this).parents('.steps').attr('id'));

    	// move to the next screen
		var nextStep = $(this).data("next");
		showStep(nextStep);
});

function handleBack() {
  // navigate to a tab when the history changes
  window.addEventListener("popstate", function(e) {
    showStep(e.state);
  });
}

function showStep(stepName) {
	console.log('showing ' + stepName)
	$(".steps").hide();
	if(!stepName){
		stepName = 'step1';
	}
	$("#logo").toggle(stepName !== "step9")
	$("#" + stepName).show();

	// add a hash to the browser history so the back button works
	history.pushState(stepName, null, null);
}