$(document).ready(function(){
   $('button').click(function(){
       $('.sidebar').toggleClass('fliph');
   });
  
   
});



$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {
    if ($('.sidebar-offcanvas').css('background-color') == 'rgb(255, 255, 255)') {
	    $('.list-group-item').attr('tabindex', '-1');
    } else {
	    $('.list-group-item').attr('tabindex', '');
    }
    $('.row-offcanvas').toggleClass('active');
    
  });
});

 $(function () {
  $('[data-tooltip="tooltip"]').tooltip()
	});
 
 
 $(document).ready(function () {	
    $(".button-toggle").click(function () {
    $('.button-toggle').hide(); 
	$('.form-section').show();
        $(this).next().toggle();		
    });
	
	$(".button-cancel").click(function () {
    $('.button-toggle').show(); 
	$('.form-section').hide();
        $(this).next().toggle();		
    });
	
		$(".table-view").click(function () {		
		$('.table-view').hide(); 
		$('.table-section').show();
        $(this).next().toggle();
		 $('.table-cancel').show();
    });
	
	$(".table-cancel").click(function () {		
		$('.table-view').show(); 
		$('.table-section').hide();
        $(this).next().toggle();
		 $('.table-cancel').hide();
    });
	
});
