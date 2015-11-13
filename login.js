function getUsername(){
	return document.cookie.split('@')[0];
}

function isCommissioner(){
	return (document.cookie.split('@')[1] == "1");
}

function isEligible(){
	return (document.cookie.split('@')[2] == "1");
}

 function showLoginInfo(){
	 side = document.getElementById("sideLogin");
	 side.innerHTML = "";
	 var p = document.createElement('p');
	if(document.cookie.split('@').length == 3){
	p.appendChild(document.createTextNode("Hello, " + getUsername()));
	}
	side.appendChild(p);
}

function createCookieTest(){
	var cookieString = document.getElementById("user").value;
	if(document.getElementsByName("commissioner")[0].checked) 
		cookieString += "@1";
	else cookieString += "@0";
	
	if(document.getElementsByName("eligible")[0].checked) 
		cookieString += "@1";
	else cookieString += "@0";
	
	document.cookie = cookieString
	window.location.reload();
}

function populateLinks(){
	var sideLinks = document.getElementById("sideLinks");
	var br = document.createElement('br');
	
	var homeLink = document.createElement('a');
	homeLink.href = "./Homepage.html"
	homeLink.setAttribute("id", "sideLink");
	homeLink.appendChild(document.createTextNode("Home"));
	
	var currentLink = document.createElement('a');
	currentLink.href = "./CurrentBallots.html"
	currentLink.setAttribute("id", "sideLink");
	currentLink.appendChild(document.createTextNode("Current Ballots"));
	
	var pastLink = document.createElement('a');
	pastLink.href = "./PreviousBallots.html"
	pastLink.setAttribute("id", "sideLink");
	pastLink.appendChild(document.createTextNode("Previous Ballots"));
	
	var addLink = document.createElement('a');
	addLink.href = "./EditElections.html"
	addLink.setAttribute("id", "sideLink");
	addLink.appendChild(document.createTextNode("Add Ballots"));
	
	sideLinks.appendChild(homeLink);
	sideLinks.appendChild(document.createElement('br'));
	sideLinks.appendChild(document.createElement('br'));
	sideLinks.appendChild(currentLink);
	sideLinks.appendChild(document.createElement('br'));
	sideLinks.appendChild(document.createElement('br'));
	sideLinks.appendChild(pastLink);
	if(isCommissioner()){
		sideLinks.appendChild(document.createElement('br'));
		sideLinks.appendChild(document.createElement('br'));
		sideLinks.appendChild(addLink);
	}
	
}

function populateTitle(){
	var top = document.getElementById("top");
	var header = document.createElement("h1");
	header.appendChild(document.createTextNode("Morgantown University Elections"));
	top.appendChild(header);
}

function populatePage(){
	populateLinks();
	populateTitle();
	showLoginInfo();
}





