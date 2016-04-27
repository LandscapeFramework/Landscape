// CONFIG

var LS_FILES = Array("js/core/core.js", "js/form/email.js");
var INCLUDE_PREFIX = "../";

// CODE (do not modify below)
function includeFiles(va, pos, array)
{
    var head = document.getElementsByTagName('head')[0]; // Get the head element
    console.log(va);
    var inc = document.createElement('script');
    inc.type = "text/javascript";
    inc.src = INCLUDE_PREFIX+va;
    head.appendChild(inc);
}

LS_FILES.forEach(includeFiles);
