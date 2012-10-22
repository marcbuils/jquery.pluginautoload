#jQuery.pluginautoload
##Automatic plugin loading on html DOM
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
```
<!doctype>
<html>
<head>
...
<script src="jquery.js"></script>
<script src="{YOUR_PLUGIN_FILE}"></script>
<script src="jquery.autoload.js"></script>
</head>
<body>
...
<div data-jquery-type="{YOUR_PLUGIN_NAME}" data-jquery-params="[{PARAM1}, {PARAM2}, ...]"></div>
...
</body>
</html>
```  
