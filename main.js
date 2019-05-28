const $loginBtn = document.getElementById("login-button");
const $loginFrmBox = document.querySelector(".login-form-box");
const $loginFrm = document.querySelector(".login-form");

const $email = document.querySelector("#email");
const $pwd = document.querySelector("#pwd");

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

$loginFrm.addEventListener("submit", function(e){
	e.preventDefault();
	
	const emailRegex = /\w+@\w+\.\w{2,}/g;
	const pwdRegex = /(?=.*\w)(?=.*\d)(?=.*[@$!%*#?&])[\w@$!%*#?&]{8}/g;

	let email = $email.value;
	let pwd = $pwd.value;

	if(testRegex(pwdRegex, pwd) && testRegex(emailRegex, email)) {
		//console.log("valid password");
		loadDoc();
	} else {
		e.preventDefault();
		//console.log("NOT valid password");
	}
	
});

function testRegex(rx, val) {
    return rx.test(val);
}


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if( this.readyState == 4 && this.status == 200 ) {
            // let responseObj = JSON.parse(this.responseText);
            // let output = "";
            // let count = 0;

            
            // for(let i = 0; i < responseObj.length; i++) {

            //     count++;

            //     output += '<div>';
            //     output += '<img src="'+ responseObj[i].thumbnailUrl +'" alt="'+ responseObj[i].title +'" width="150" />';
            //     output += '<h4>' + responseObj[i].title + '</h4>';
            //     output += '</div>';
            //     console.log(count);
            //     if(count >= 10) {
            //         break;
            //     }
                
                
                
            // }
            

            document.getElementById("demo").innerHTML = this.responseText;
            //console.log(responseObj);
            
        }
    };

    xhttp.open("GET", "ajax_info.html", true);
    xhttp.send();
}

