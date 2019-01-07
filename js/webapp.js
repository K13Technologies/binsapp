$(document).ready(function() {
	'use strict';

	$('.nav-link[href="' + window.location.pathname + '"]').closest('.nav-item').addClass('nav-active');

	$('.extra-info').hide();

	$('#commodity').on('input', function(e) {
		$('.extra-info').hide();

		var currentCommodity = $('#commodity').val();

		$('#' + currentCommodity).show();
	})

	// This function is found on step 1 of bin setup. The intent is that each auto-complete commodity creates a drop down of that commodity details if the human consumption radio button is selected.

	var availableCommodity = [
		"Amaranth",
		"Barley",
		"Beans",
		"Buckwheat",
		"Canola",
		"Chia",
		"Chickpeas",
		"Corn",
		"Fababeans",
		"Flax",
		"Lentils",
		"Malt Barley",
		"Oats",
		"Peanuts",
		"Peas",
		"Pumpkin",
		"Quinoa",
		"Wheat",
		"Safflower",
		"Sesame",
		"Sunflowers",
		"Soybeans",
		"Triticale",
		"Rye"
	];

	$("#commodity").autocomplete({
		source: availableCommodity
	});

	// These functions can be found on setp 1 of bin setup
	$("#datepickerstoragestart").datepicker();
	$("#datepickerdeliverymonth").datepicker();

	//These date pickers are found on step 1 of field expense
	$("#datepickerplantdate").datepicker();
	$("#datepickerharvestdate").datepicker();
	$("#create-county-contract").selectable();

	// This section pertains to the Active Bins Table page
	$('#binsTable').DataTable();

	// This section pertains to the Active Field Table page
	$('#fieldsTable').DataTable();

	// This section pertains to the custom contract page where the user is able to pick and select multiple grain elevators to add to their contract for monitoring
	$('#customContractTable').DataTable();

	//This section pertains to the settings-password page where the user can alter their password and we want to offer the user  the option to view their password.
	$('#password').password().on('show.bs.password', function(e) {
		$('#methods').prop('checked', true);
	}).on('hide.bs.password', function(e) {
		$('#methods').prop('checked', false);
	});
	$('#methods').click(function() {
		$('#password').password('toggle');
	});

	$("#password").password({
		eyeClass: 'fa',
		eyeOpenClass: 'fa-eye',
		eyeCloseClass: 'fa-eye-slash'
	})

	$('li.dropdown').on('click', function() {
		var $el = $(this);
		if ($el.hasClass('open')) {
			var $a = $el.children('a.dropdown-toggle');
			if ($a.length && $a.attr('href')) {
				location.href = $a.attr('href');
			}
		}
	});

	// This function is used on the custom contract table - Question is, does this script capture all ROW data when they
	function getRow(n) {
		var row = n.parentNode.parentNode;
		var cols = row.getElementsByTagName("td");
		var i = 0;

		while (i < cols.length) {
			var val = cols[i].childNodes[0].nodeValue
			if (val != null) {
				alert(val);
			}
			i++;
		}
	}

	if(/add-card=success/.test(window.location.href)) {
		$('#success-message').show();
	}

});
