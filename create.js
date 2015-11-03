var sectionCounter = 0;
var elementCounters = [];

function authenticate(){
	
}

function addDeleteButton(){
	var deleteSection = document.createElement('button');
	deleteSection.type = "button";
	deleteSection.appendChild(document.createTextNode("Delete Section" ));
	deleteSection.setAttribute("class", "redButton");
	deleteSection.setAttribute("ID", "delete");
	deleteSection.setAttribute("onclick", "deleteLastSection()");
	
	document.getElementById("buttonArea").insertBefore(deleteSection, document.getElementById("addButton"));
}

function addSection(){
	sectionCounter++;
	elementCounters.push(0);
	var ballotInfo = document.getElementById("ballotInfo");
	var p1 = document.createElement('p');
	p1.setAttribute("ID", "container" + sectionCounter);
	var p2 = document.createElement('p');
	p2.setAttribute("ID", "section" + sectionCounter);
	
	var header = document.createElement('h2');
	header.appendChild(document.createTextNode("Section " + sectionCounter));
	header.setAttribute("ID", "sectionNo");
	
	var title = document.createElement('input');
	title.type = "text";
	title.setAttribute("Class", "head");
	title.setAttribute("ID", "header" + sectionCounter);
	title.setAttribute("required", "required");
	title.setAttribute("placeholder", "Enter a title for this section");
	
	var optionAdd = document.createElement('button');
	optionAdd.type = "button";
	optionAdd.appendChild(document.createTextNode("Add Option"));
	optionAdd.setAttribute("ID", "addOption");
	optionAdd.setAttribute("class", "greenButton");
	optionAdd.setAttribute("onclick", "addAnOption(" + sectionCounter + ")");
	
	var writeinAdd = document.createElement('button');
	writeinAdd.type = "button";
	writeinAdd.appendChild(document.createTextNode("Add Writein Option" ));
	writeinAdd.setAttribute("class", "greenButton");
	writeinAdd.setAttribute("ID", "addWritein" + sectionCounter);
	writeinAdd.setAttribute("onclick", "addAWritein(" + sectionCounter + ")");

	p2.appendChild(header);
	p2.appendChild(title);
	p2.appendChild(document.createElement('br'));
	p1.appendChild(p2);
	p1.appendChild(optionAdd);
	p1.appendChild(document.createElement('br'));
	p1.appendChild(writeinAdd);
	ballotInfo.appendChild(p1);
	if(sectionCounter == 2) addDeleteButton();
}

function deleteAnOption(elementNo, sectionNo){
	var p = document.getElementById("section" + sectionNo);
	p.removeChild(document.getElementById("optionContainer" + elementNo));
}

function removeAWritein(sectionNo){
	var p = document.getElementById("container" + sectionNo);
	p.removeChild(document.getElementById("section" + sectionNo + "writein" ));
	var addButton = document.getElementById("writeinDelete");
	addButton.setAttribute("class", "greenButton");
	addButton.innerHTML = "Add Writein Option";
	addButton.setAttribute("ID", "addWritein" + sectionNo);
	addButton.setAttribute("onclick", "addAWritein(" + sectionNo + ")");
}

function addAnOption(sectionNo){
	
	var p = document.getElementById("section" + sectionNo);
	var optionContainer = document.createElement('p');
	optionContainer.setAttribute("ID", "optionContainer" + elementCounters[sectionNo]);
	
	var option = document.createElement('input');
	option.type = "text";
	option.setAttribute("class", "option" + sectionNo)
	option.setAttribute("ID", "section" + sectionNo + "option" + elementCounters[sectionNo]);
	option.setAttribute("required", "required");
	option.setAttribute("placeholder", "Enter a name for this option");
	

	var deleteOption = document.createElement('button');
	deleteOption.type = "button";
	deleteOption.appendChild(document.createTextNode("Delete Option" ));
	deleteOption.setAttribute("class", "redButton");
	deleteOption.setAttribute("onclick", "deleteAnOption(" + elementCounters[sectionNo] + "," + sectionNo  + ")");
	
	optionContainer.appendChild(option);
	optionContainer.appendChild(deleteOption);
	
	p.appendChild(optionContainer);
	elementCounters[sectionNo]++;
}

function addAWritein(sectionNo){
	var option = document.createElement('input');
	option.type = "text";
	option.setAttribute("ID", "section" + sectionNo + "writein");
	option.setAttribute("readonly", "readonly");
	option.setAttribute("class", "writeinSample");
	var writeinBox = document.getElementById("addWritein" + sectionNo);
	writeinBox.setAttribute("class", "redButton");
	writeinBox.innerHTML = "remove Writein";
	writeinBox.setAttribute("onclick", "removeAWritein(" + sectionNo + ")");
	writeinBox.setAttribute("ID", "writeinDelete");
	writeinBox.parentNode.insertBefore( option, writeinBox);
	
}

function deleteLastSection(){
	document.getElementById("ballotInfo").removeChild(document.getElementById("container" + sectionCounter));
	sectionCounter--;
	if(sectionCounter == 1) document.getElementById("buttonArea").removeChild(document.getElementById("delete"));
}

function disable(){
	document.getElementById("addButton").setAttribute("class", "grayButton");
	document.getElementById("addButton").setAttribute("disabled", "disabled");
	document.getElementById("submitButton").setAttribute("class", "grayButton");
	document.getElementById("submitButton").setAttribute("disabled", "disabled");
}

function popup(){
	alert("ERROR: You do not have access to this page");
	window.location.href = "./Homepage.html";
}
