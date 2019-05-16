(function( $ ){
  var methods = {
	init : function( options ) { 
	},
	show : function( options) {
	},
    hide : function( ) { 
      $(this).css({ display: '', });
    },	
	cargando : function( options ) { 
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