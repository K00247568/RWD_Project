
            function checkPassword(form) { 
                pass1 = form.pass1.value; 
                pass2 = form.pass2.value; 
  

                if (pass1 == '') {
                    alert ("Please enter a password");
                    return false; 
                }
                      

                else if (pass2 == '') {
                    alert ("Please repeat your password"); 
                    return false;
                }
                      
   
                else if (pass1 != pass2) { 
                    alert ("\nPasswords did not match: Please try again...") 
                    return false; 
                } 

                else { 
                    alert ("\nRegistration Successful !");
                    window.location.href = "../Project - Stage 2 - K00247568/index.html";
                    return false;
                }
  
            } 
