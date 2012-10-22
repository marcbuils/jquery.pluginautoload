#jQuery.pluginautoload
##Automatic plugin loader for html DOM
jQuery.pluginautoload load your plugins on html DOM without javascript code.
This plugin is same as dojo or jQuery mobile system.

##Author
Marc Buils (marc.buils@marcbuils.fr)

##License
LGPL v3 (http://www.gnu.org/licenses/lgpl-3.0.txt)

##Current version
v0.2.0: 
 * Add Ajax automatic script import 
 * Add a better parmeters parser

##Usation
For default use, load only jQuery.pluginautoload script:
```
<script src="jquery.pluginautoload.js"></script>
```
And add data-jquery-type="{JQUERY_PLUGIN_NAME}" to apply a jQuery plugin on DOMs.
You can add data-jquery-params='[param_1,param_2,...,param_n]' to use the plugin with parameters.

You can change default options with following code:
```
<script>
	;(function($){
		$.pluginautoload_options = $.extend({}, $.pluginautoload_options, {
			autoload:		true,		// $('body').pluginautoload() is call when document is ready
			autoimport:		true,		// Load script in Ajax if plugin isn't loaded
			libs_dir:		'js/',		// Directory of plugins loaded in Ajax
			filename: 		function( p_type ){		// Function to compute the filename of plugins loaded in Ajax
				return this.libs_dir + 'jquery.' + p_type.toLowerCase() + '.js';
			}
		});
	})(jQuery);
</script>
```

###Exemple 1: Auto-loading Full options/without configuration
```
<!doctype>
<html>
<head>
	<meta charset="UTF-8" />
	<title>jQuery.pluginautoload: Exemple1 - Auto-loading Full options/without configuration</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="../jquery.pluginautoload.js"></script>
</head>
<body>
	<h1>jQuery.pluginautoload: Exemple 1 - Auto-loading Full options/without configuration</h1>
	<div data-jquery-type="myplugin"></div>
	<div data-jquery-type="mypluginwithparams" data-jquery-params='["parameters1", {"paramaters2": "is a struct"}, 325]'></div>
</body>
</html>
```  

###Exemple 2: Auto-loading with automatic Ajax import for custom path and custom file names
```
<!doctype>
<html>
<head>
	<meta charset="UTF-8" />
	<title>jQuery.pluginautoload: Exemple2 -  Auto-loading with automatic Ajax import for custom path and custom file names</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="../jquery.pluginautoload.js"></script>
	<script>
		;(function($){
			$.pluginautoload_options = $.extend({}, $.pluginautoload_options, {
				libs_dir:		'jscustom/',
				filename: 		function( p_type ){
					return this.libs_dir + 'jquery.' + p_type.toLowerCase() + 'custom.js';
				}
			});
		})(jQuery);
	</script>
</head>
<body>
	<h1>jQuery.pluginautoload: Exemple 2</h1>
	<h2>Auto-loading with automatic Ajax import for custom path and custom file names</h2>
	<div data-jquery-type="myplugin"></div>
</body>
</html>
```

###Exemple 3: Auto-loading for a section only
```
<!doctype>
<html>
<head>
	<meta charset="UTF-8" />
	<title>jQuery.pluginautoload: Exemple 3 - Auto-loading for a section of page only</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="../jquery.pluginautoload.js"></script>
	<script>
		;(function($){
			$.pluginautoload_options = $.extend({}, $.pluginautoload_options, {
				autoload: false
			});
			
			$(function(){
				$('#autoload').pluginautoload();
			});
		})(jQuery);
	</script>
</head>
<body>
	<h1>jQuery.pluginautoload: Exemple 3</h1>
	<h2>Auto-loading for a section of page only</h2>
	<div data-jquery-type="myplugin">This div is not auto-loaded</div>
	<div id="autoload">
		<div data-jquery-type="myplugin">This div is auto-loaded</div>
	</div>
</body>
</html>
```
