 
 function checkLogin(){
	
 }
 
 function showLoginForm(){
				
                var userinfo = document.getElementById('loginForm');
                while(userinfo.hasChildNodes()){
                    userinfo.removeChild(userinfo.firstChild);
                }
				
                userinfo = document.createElement("form");
                userinfo.setAttribute("method","post");
                userinfo.setAttribute("action","processUser.php");

                var txtName = document.createTextNode("User Name: ");
                var txtPassword = document.createTextNode("Password: ");
                
                var inputUser = document.createElement("input");
                inputUser.type = "text";
                inputUser.name = "userName";

                var inputPassword = document.createElement("input");
                inputPassword.type = "password";
                inputPassword.name = "Password";
				
				var grpUser = document.createElement("p");
                grpUser.appendChild(txtName);
                grpUser.appendChild(inputUser);

                var grpPassword = document.createElement("p");
                grpPassword.appendChild(txtPassword);
                grpPassword.appendChild(inputPassword);
				
				var btnSubmit = document.createElement("input");
                btnSubmit.type = "submit";
                btnSubmit.value = "Submit";

                userinfo.appendChild(grpUser);
                userinfo.appendChild(grpPassword);
				userinfo.appendChild(btnSubmit);

                document.getElementById("loginForm").appendChild(userinfo);
            }              
