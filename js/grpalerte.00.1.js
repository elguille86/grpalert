(function( $ ){
  var methods = {
	init : function( options ) { 
      //codigo
        var settings = $.extend({
            //Parametros por Defecto   
            width:"350px"
		}, options );
		$(this).addClass('gp_model')
		$(this).append($('<div>',{'class':'gp_contener'})
			.append($('<div>',{'class':'gp_modeltitle'})
				.append($('<span>',{'class':'gp_ti_title'}))
					.append($('<span> ',{'class':'gp_ti_close'})))
					.append($('<div>',{'class':'gp_dialog'})
				.append($('<div>',{'class':'gp_dialog_popup'})
					.append($('<div id=\'gp_dialogtext\'>'))
		))); 
		$(".gp_contener").css({   width: settings.width,}); 
	},
	show : function( options) {
		var settings = $.extend({
			mensaje: "Error de Validacion",title: "Sistema",
		}, options );
		var div = $(this);
		$(this).css({ display: 'block', });
		$(".gp_ti_close").html("x");       
		$(".gp_ti_close").click( function() { div.css({ display: '', }); });
		$(".gp_ti_title").html( settings.title  ); 
		$("#gp_dialogtext").html( settings.mensaje  );
		$(".gp_dialog_popup").removeClass('gp_dialogicono_carg gp_dialogicono_info'); 
		$(".gp_dialog_popup").addClass('gp_dialogicono_info');		
	},
    hide : function( ) { 
      $(this).css({ display: '', });
    },	
	cargando : function( options ) { 
		var div = $(this);
		var settings = $.extend({
          mensaje: "Cargando...",title: "Sistema",
		}, options );
		$(this).css({ display: 'block', });
		$(".gp_ti_close").html("x");       
		$(".gp_ti_close").click( function() { div.css({ display: '', }); });		  
		$(".gp_dialog_popup").removeClass('gp_dialogicono_carg gp_dialogicono_info');
		$(".gp_dialog_popup").addClass('gp_dialogicono_carg');
		$(".gp_ti_title").html( settings.title  ); 
		$("#gp_dialogtext").html( settings.mensaje  );  	
	}
  };
  $.fn.grpAlert = function( method ) {
    // Si existe la función la llamamos
    if ( methods[method] ) {
        return methods[ method ]
        .apply( this,  Array.prototype.slice.call( arguments, 1 ) );
    } else if ( typeof method === 'object' || ! method ) {
    //Si no se pasa ningún parámetro o el parámetro es 
    //un objeto de configuración llamamos al inicializador  
    return methods.init.apply( this, arguments );
} else {
  //En el resto de los casos mostramos un error
  $.error( 'La función ' +  method 
  + ' no existe en jQuery.tooltip' );
}    
};
})( jQuery );