/*
* Author: Md. Shaon
* Developed by: Md. Shaon
* Version: 1.0;
*/

$(document).ready(function() {
	// Peloader fade out
	$('#preloader').fadeOut(500);

	// Heading Underline set
	$('.line').each(function () {
		var $this = $(this),
		w = $this.parent('h2').width();

		$this.css('border-left-width', w - 20 );
	});

	// WOW animation initialize
	new WOW().init();

	// For counter
	$('.counter').counterUp({
		delay: 50,
		time: 2000
	});

	//Swipe initial 
	$( ".carousel .carousel-inner" ).swipe({
	    swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
	        this.parent( ).carousel( 'next' );
	    },
	    swipeRight: function ( ) {
	        this.parent( ).carousel( 'prev' );
	    },
	    threshold: 0
	});

	// For Pupup image
	$( "a[data-imagelightbox='view-img']" ).imageLightbox({
		activity:		true,
		button: 		true,
		caption: 		true,
		lockBody: 		true,
		overlay: 		true
	});

	// For Load content
	function loadContent(val, btn, posts) {
		$.ajax({
			url: 'load.php',
			method: 'POST',
			data: val,
			success: function (data) {
				if ( data ) {
					btn.remove();
					posts.append(data);

					$( "a[data-imagelightbox='view-img']" ).imageLightbox({
						activity:		true,
						button: 		true,
						caption: 		true,
						lockBody: 		true,
						overlay: 		true
					});
				}
			}
		});
	}
	$(document).on('click', '.load-btn', function () {
		var $this 	= $(this),
			btn 	= $this.parent(),
			posts 	= btn.parent();

		$this.html('loading ...');
		loadContent( { id: $this.data('id'), content: $this.data('content') }, btn, posts );
	});


	// FOR SIGNUP/LOGIN
	var form 	= $('.send-data'),		// Form
		errMsg 	= '.error-msg',			// Error Message
		conMsg 	= '.confirm-msg';		// Confirm Message

	// Send Data for Processing
	function sendData ( val, opr, msg, btn, icn ) {
		// Ajax request
		$.ajax({
			url: 'process-data.php',
			type: "POST",
			data: val,
			contentType: false,
			cache: false,
			processData:false,
			success: function ( data ) {
				// alert(opr);
				btn.html( icn );
				if ( data === 'success' ) {
					if (opr === 'login') location = 'profile.php';
					else if (opr === 'edit') location.reload();
					else if (opr === 'add') {
						msg.html( "Account successfully created! <br /> <span class='text-primary'>Please check your email for confirmation!</span>" ).addClass('text-success').removeClass('text-danger').fadeIn();
					}
					else if (opr === 'feedback') {
						msg.siblings( conMsg ).html( "Thanks for your feedback." ).fadeIn();

						setTimeout(function() {
							$('#feedback').modal('hide');
						}, 3000);
					}
					else if (opr === 'contact') msg.html( "Thanks for your message." ).addClass('text-success').removeClass('text-danger').fadeIn();
					else if (opr === 'recovery') {
						msg.html( "We've emailed you.<br /> <span class='text-primary'>Please check your email!</span>" ).addClass('text-success').removeClass('text-danger').fadeIn();
					}
				}
				else
					msg.html( data ).addClass('text-danger').removeClass('text-success').fadeIn();
			}
		});
	}

	var time = Date.now();
	// Submit Data for Processing
	form.on('submit', function(e) {
		// e.preventDefault();
		var now = Date.now();
		if ( now - time > 1000 ) {
			var frm = this,
			opr = $( frm ).find( "[name='operation']" ).val(),
			msg = $( frm ).find( errMsg ),
			btn = $( frm ).find( "[type='submit']" ),
			icn = btn.html();

			btn.html( "Processing ..." );
			sendData( new FormData( frm ), opr, msg, btn, icn );
		}
		time = Date.now();
		return false;
	});

	// For Focus Reset
	form.on('focusin', function(){
		$( this ).find( errMsg ).fadeOut();
		$( this ).find( conMsg ).fadeOut();
	});

	// Submit with enter key
	$('form').on('keydown', function(e){
		if( e.keyCode == 13 || e.which == 13 ) {
			$(this).submit();
			$( this ).find( errMsg ).fadeOut();
			$( this ).find( conMsg ).fadeOut();
		}
	});
});