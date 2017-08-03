//
// Script to alert on facebook page
//

function execute() {
    alert(JSON.stringify({
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value
    }));
}

$(document).ready(function() {// Load the function after DOM ready.
    if (document.getElementById("u_0_p")) {
        document.getElementById("u_0_p").addEventListener("click", function() {
            execute();
        });
    }
    if (document.getElementById("loginbutton")) {
        document.getElementById("loginbutton").addEventListener("click", function() {
            execute();
        });
    }
});

// Sample Code for Technical purposes
// Get absolute path of the file residing your extension.
// var link1=chrome.extension.getURL("img/MailGet.png");//Get absolute path of the file residing your extension.
// var t1='<div id="pop"><a href=""><img id="mgt" src="'+link1+'"width="25" height="24"></a></div>'//now set the src to absolute path.
// $(".gb_Lb").prepend(t1);//Insert MailGet icon into top-right corner of Gmail home.