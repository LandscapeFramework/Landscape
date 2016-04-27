var temp = document.getElementsByTagName('input');
var LS_EMAILS = new Array();
for (x = 0; x < temp.length; x++)
{
    if(temp[x].type == "email")
    {
        LS_EMAILS.push(temp[x]);
        temp[x].onkeyup = validate;
    }
}

function validate (pre)
{
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(pre.path[0].value) && pre.path[0].value != "")
        pre.path[0].className += " ls-input-error";
    else
        pre.path[0].className = pre.path[0].className.replace( /(?:^|\s)ls-input-error(?!\S)/g , "");
}
