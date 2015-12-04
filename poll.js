		function hasVoted(code){
			for(i = 0; i < document.cookie.split("@").length; i++){
				if(document.cookie.split("@")[i] == code) return true;
			}
			return false;
		}

		function PasswordPrompt() {
		    var pass = prompt("Please Enter the Password");
		    
		    if (pass == "Frog") {
		    }
		    else{
			alert("Wrong Password!");
			document.location.href = "./CurrentBallots.html";
		    }
		}
		
		function showTextBox(){
			document.getElementById("textbox").innerHTML = "<input type='text' id='WriteIn' placeholder='Write-in' required><br>"
			
		}

		function c(code) {
			if (confirm("Are you sure?") == true) {
				markVoted(code);
				document.location.href = "./Congratulations.html";
			}
			else{
			
			}
		}
		
		function PasswordPrompt(correct) {
		    var pass = prompt("Please Enter the Password");
		    if (pass == correct) {
		    }
		    else{
			alert("Wrong Password!");
			document.location.href = "./CurrentBallots.html";
		    }
		}
		
		function disableSubmit(){
			document.getElementById("voteButton").setAttribute("class", "grayButton");
			document.getElementById("voteButton").setAttribute("disabled", "disabled");
		}
		
		function markVoted(code){
			document.cookie += "@" + code;
		}