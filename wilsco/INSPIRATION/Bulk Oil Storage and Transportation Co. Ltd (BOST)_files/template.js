jQuery(function($){

	var _rys = jQuery.noConflict();  
        _rys("document").ready(function(){  
            _rys(window).scroll(function () {  
                if (_rys(this).scrollTop() > 50) {  
                    _rys('#sp-header-wrapper').addClass("f-sp-header-wrapper");
                    $('#sp-header-wrapper').data('size','small');  
                } else {  
                    _rys('#sp-header-wrapper').removeClass("f-sp-header-wrapper");
                    $('#sp-header-wrapper').data('size','big');  
                }  
            });  
        });
  
   _rys(document).ready(function(){
	// Cache the Window object
	_ryswindow = _rys(window);
                
   _rys('#vertical[data-type="background"]').each(function(){
     var _rysbgobj = _rys(this); // assigning the object
                    
      _rys(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -(_ryswindow.scrollTop() / _rysbgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		_rysbgobj.css({ backgroundPosition: coords });
		
});

 });	

});

_rys(document).ready(function(){
	// Cache the Window object
	_ryswindow = _rys(window);
                
   _rys('#horizon[data-type="background"]').each(function(){
     var _rysbgobj = _rys(this); // assigning the object
                    
      _rys(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -(_ryswindow.scrollTop() / _rysbgobj.data('speed')); 
		
		// Put together our final background position
		var coords = yPos + 'px';

		// Move the background
		_rysbgobj.css({ backgroundPosition: coords });
		
});

 });	

});

});