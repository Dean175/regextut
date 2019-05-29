const $loginBtn = document.getElementById("login-button");
const $loginFrmBox = document.querySelector(".login-form-box");
const $loginFrm = document.querySelector(".login-form");
const $formBox = document.querySelector(".form-box");

const $email = document.querySelector("#email");
const $pwd = document.querySelector("#pwd");


/* Show login form */
$loginBtn.addEventListener("click", function(e){
	e.preventDefault();
	$loginFrmBox.classList.add("show");
});



// Detect all clicks on the document
document.addEventListener("click", function(event) {
	// If user clicks inside the element, do nothing
	if (event.target.closest("#login-button") || event.target.closest(".login-form-box")) return;

	// If user clicks outside the element, hide it!
	$loginFrmBox.classList.remove("show");
});

/* Form submission */
$loginFrm.addEventListener("submit", function(e){
	e.preventDefault();
	
	const emailRegex = /\w+@\w+\.\w{2,}/g;
	const pwdRegex = /(?=.*\w)(?=.*\d)(?=.*[@$!%*#?&])[\w@$!%*#?&]{8}/g;

	let email = $email.value;
	let pwd = $pwd.value;

	if(testRegex(pwdRegex, pwd) && testRegex(emailRegex, email)) {
		//console.log("valid password");
        loadDoc();
        $formBox.setAttribute("style", "display:none;");
        
	} else {
		e.preventDefault();
		//console.log("NOT valid password");
	}
	
});

/**
 * Test Regex function
 * @param {*} rx 
 * @param {*} val 
 */
function testRegex(rx, val) {
    return rx.test(val);
}

/**
 * Ajax function
 */
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if( this.readyState == 4 && this.status == 200 ) {
            
            $loginFrmBox.innerHTML += this.responseText;
            document.getElementById("userid").innerHTML = $email.value;
            
            const $disconnectBtn = document.getElementById("disconnect");
            const $connectedBox = document.querySelector(".connected-box");

            $disconnectBtn.addEventListener("click", function(){
                $connectedBox.parentNode.removeChild($connectedBox);
                $formBox.setAttribute("style", "display:block;");
            });
            //console.log(responseObj);
            
        }
    };

    xhttp.open("GET", "connected.html", true);
    xhttp.send();
}

