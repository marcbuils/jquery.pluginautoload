/**
 * PluginAutoLoad: Chargement automatique des plugins ˆ partir des balises HTML
 * http://www.marcbuils.fr
 * 
 * Par Marc Buils ( marc.buils@gmail.com )
 * Sous licence LGPL v3 (http://www.gnu.org/licenses/lgpl-3.0.txt)
 * 
 * v0.1.0:
 * First release
 */
(function($){
	$.fn.pluginautoload = function(){
		this.find('[data-jquery-type]:not(.jquery_pluginautoload)').each( function(){
			var _params = ( $(this).attr('data-jquery-params') == undefined ? '' : $(this).attr('data-jquery-params') );

			eval( "$(this)." + $(this).attr('data-jquery-type') + "(" + _params + ");" );
			$(this).addClass('jquery_pluginautoload');
		});
		
		return this;
	};

	$(document).ready(function(){
		$('body').pluginautoload();
	});
})(jQuery);