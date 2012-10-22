/**
 * PluginAutoLoad: Chargement automatique des plugins ˆ partir des balises HTML
 * http://www.marcbuils.fr
 * 
 * Par Marc Buils ( marc.buils@gmail.com )
 * Sous licence LGPL v3 (http://www.gnu.org/licenses/lgpl-3.0.txt)
 * 
 * v0.1.0:
 * First release
 * 
 * v0.2.0:
 * Add Ajax automatic script import 
 * Add a better parmeters parser
 */
(function($){
	$.pluginautoload_options = {
		autoload:		true,
		autoimport:		true,
		libs_dir:		'js/',
		filename: 		function( p_type ){
			return this.libs_dir + 'jquery.' + p_type.toLowerCase() + '.js';
		}
	};
	
	$.fn.pluginautoload = function( p_options ){
		var _options = $.extend({}, $.pluginautoload_options, p_options);
		
		this.find('[data-jquery-type]:not(.jquery_pluginautoload)').each( function(){
			var $_this = $(this);
			var _params = ( typeof($_this.attr('data-jquery-params')) == "undefined" ? [] : JSON.parse($_this.attr('data-jquery-params')) );
			var _type = $_this.attr('data-jquery-type');
			
			if (_options.autoimport && typeof($.fn[_type]) == "undefined"){
				$.ajax( _options.filename( _type ), {
					async:			false,
					dataTypeString:	'script'
				});
				if ( typeof($.fn[_type]) != "undefined" ){
					$_this[_type].apply($_this, _params);
				} else {
					console.error("File %s loaded but plugin $.fn.%s not found", _options.filename( _type ), _type );
				}
			}else{
				if ( typeof($.fn[_type]) != "undefined" ){
					$_this[_type].apply($_this, _params);
				} else {
					console.error("Plugin $.fn.%s not found", _type );
				}
			}
			$_this.addClass('jquery_pluginautoload');
		});
		
		return this;
	};

	$(function(){
		if ($.pluginautoload_options.autoload){
			$('body').pluginautoload();
		}
	});
})(jQuery);
