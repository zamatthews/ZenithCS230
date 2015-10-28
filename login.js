 
 function checkLogin(){
	
 }

function getUsername(){
	return document.cookie.split(';')[0];
}

function getType(){
	return document.cookie.split(';')[1];
}

 
 function showLoginInfo(){
	document.getElementById("loginForm").innerHTML = "";
	if(document.cookie.length > 1){
	document.getElementById("loginForm").appendChild(document.createTextNode("Hello, " + getUsername()));
	}
}

function createCookieTest(){
	var user = document.getElementById("user").value;
	var type = document.getElementById("type").value;
	document.cookie = user + ';' + type;
	showLoginInfo();
}