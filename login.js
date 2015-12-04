function getUsername(){
	return document.cookie.split('@')[0];
}

function isCommissioner(){
	return (document.cookie.split('@')[1] == "1");
}

function isHead(){
	return (document.cookie.split('@')[1] == "2");
}

function isEligible(){
	return (document.cookie.split('@')[2] == "1");
}

 function showLoginInfo(){
	 side = document.getElementById("sideLogin");
	 side.innerHTML = "";
	 var p = document.createElement('p');
	if(document.cookie.split('@').length >= 3){
		p.appendChild(document.createTextNode("Hello, " + getUsername()));
	}
	side.appendChild(p);

}

function createCookieTest(){
	var cookieString = document.getElementById("user").value;
	if(document.getElementsByName("commissioner")[0].checked) cookieString += "@1";
	else if(document.getElementsByName("commissioner")[1].checked) 	cookieString += "@0";
	else cookieString += "@2";
	
	if(document.getElementsByName("eligible")[0].checked) 
		cookieString += "@1";
	else cookieString += "@0";
	document.cookie = cookieString;
	window.location.reload();
}

function populateLinks(){
	var sideLinks = document.getElementById("sideLinks");
	
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
	addLink.href = "./EditElections.html";
	addLink.setAttribute("id", "sideLink");
	addLink.appendChild(document.createTextNode("Add Ballots"));
	
	var disqualifyLink = document.createElement('a');
	disqualifyLink.href = "./disqualify.html";
	disqualifyLink.setAttribute("id", "sideLink");
	disqualifyLink.appendChild(document.createTextNode("Disqualify student"));
	
	var addCommissionerLink = document.createElement('a');
	addCommissionerLink.href = "./addCommissioner.html";
	addCommissionerLink.setAttribute("id", "sideLink");
	addCommissionerLink.appendChild(document.createTextNode("Add Commissioner"));
	
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
	if(isHead()){
		sideLinks.appendChild(document.createElement('br'));
		sideLinks.appendChild(document.createElement('br'));
		sideLinks.appendChild(disqualifyLink);
		sideLinks.appendChild(document.createElement('br'));
		sideLinks.appendChild(document.createElement('br'));
		sideLinks.appendChild(addCommissionerLink);
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





