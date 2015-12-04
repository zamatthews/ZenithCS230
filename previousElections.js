jQuery.noConflict();
jQuery('document').ready(function(){

	var previousElections = {
		"SA001": {
			"electionPeriod": "2/9/2007 - 2/18/2007",
			"candidates": {
				"candiate1": {
					"id": "001",
					"name": "John Smith",
					"elected": "Not elected"
				},
				"candiate2": {
					"id": "002",
					"name": "Emily Sanders",
					"elected": "Elected"
				},
				"candiate3": {
					"id": "003",
					"name": "Ronald Butler",
					"elected": "Not elected"
				}
			}
		},
		"SA002": {
			"electionPeriod": "8/23/2009 - 9/15/2009",
			"candidates": {
				"candiate1": {
					"id": "001",
					"name": "Albertine Smith",
					"elected": "Not elected"
				},
				"candiate2": {
					"id": "002",
					"name": "Sarah Pollack",
					"elected": "Elected"
				},
				"candiate3": {
					"id": "003",
					"name": "Makayla Mamie",
					"elected": "Not elected"
				}
			}
		},
		"SA003": {
			"electionPeriod": "3/11/2011 - 8/27/2011",
			"candidates": {
				"candiate1": {
					"id": "001",
					"name": "Gary Dillon",
					"elected": "Elected"
				},
				"candiate2": {
					"id": "002",
					"name": "Mandi Bailee",
					"elected": "Not Elected"
				},
				"candiate3": {
					"id": "003",
					"name": "Barbi Marigold",
					"elected": "Not elected"
				}
			}
		},
		"SA004": {
			"electionPeriod": "3/14/2013 - 8/18/2013",
			"candidates": {
				"candiate1": {
					"id": "001",
					"name": "Gary Dillon",
					"elected": "Elected"
				},
				"candiate2": {
					"id": "002",
					"name": "Emily Sanders",
					"elected": "Not elected"
				},
				"candiate3": {
					"id": "003",
					"name": "Averil Baker",
					"elected": "Not elected"
				}
			}
		},
		"SA005": {
			"electionPeriod": "4/8/2015 - 9/16/2015",
			"candidates": {
				"candiate1": {
					"id": "001",
					"name": "Margaret Marek",
					"elected": "Not elected"
				},
				"candiate2": {
					"id": "002",
					"name": "Angela Paulin",
					"elected": "Elected"
				},
				"candiate3": {
					"id": "003",
					"name": "Marissa Avlynn",
					"elected": "Not elected"
				}
			}
		},

	}

	function setPreviousElectionID(event) {
		var prevElecID = event.target.innerHTML;
		if(typeof(Storage) !== "undefined") {
			localStorage.setItem('prevElecID', prevElecID);
		} else {
		    alert('Sorry! Your browser doesn\'t support HTML5 Local Storage. \nOur application uses this feature of HTML5. \n\nPlease upgrade your browser. \nTill then you can see the results of only the Student Association Election - 2015' );
		}
		window.location.href = "./ElectionDetails.html";
	}


	function getPreviousElectionID() {
		var prevElecID = "SA005";
		if(typeof(Storage) !== "undefined") {
			prevElecID = localStorage.getItem('prevElecID');
		} else {
		    alert('Sorry! Your browser doesn\'t support HTML5 Local Storage. \nOur application uses this feature of HTML5. \n\nPlease upgrade your browser. \nTill then you can see the results of only the Student Association Election - 2015' );
		}
		return prevElecID;
	}

	var prevElecLinks = jQuery('a.showPreviousElections');
	prevElecLinks.click(setPreviousElectionID);

	var electionDetailsCont = jQuery('div.electionDetails');

	if(electionDetailsCont) {
		var candidatesTable = electionDetailsCont.find('table#candidatesList');
		var prevElecID = getPreviousElectionID();
		var electionDetails = previousElections[prevElecID];
		var candidates = electionDetails.candidates;
		if(electionDetails) {
			var candiateTableBody = candidatesTable.find('tbody');
			var candidateHTML;
			var candidateDetails
			//Populate period
			electionDetailsCont.find('.period')[0].innerHTML = electionDetails.electionPeriod;
			if(candidates) {
				var serialNo = 1;
				for(var candiate in candidates) {
					if(candidates.hasOwnProperty(candiate)) {
						candidateDetails = candidates[candiate];
						candidateHTML = "<tr>"+
											"<td>"+serialNo+"</td>"+
											"<td>"+candidateDetails.id+"</td>"+
											"<td>"+candidateDetails.name+"</td>"+
											"<td>"+candidateDetails.elected+"</td>"+
										"</tr>"
					}
					candiateTableBody.append(candidateHTML);
					serialNo++;
				}
			}
		}
	}
	

});