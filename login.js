 
 function checkLogin(){
	
 }

function getUsername(){
	return document.cookie.split('@')[0];
}

 
 function showLoginInfo(){
	document.getElementById("loginForm").innerHTML = "";
	document.getElementById("loginForm").appendChild(document.createTextNode("Hello, " + getUsername()));
}              

function createCookieTest(){
	var user = document.getElementById("user").value;
	var type = document.getElementById("type").value;
	document.cookie = user + '@' + type;
	showLoginInfo();
}