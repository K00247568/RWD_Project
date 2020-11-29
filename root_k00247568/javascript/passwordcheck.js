function checkPassword(form) { 
                psw1 = form.psw1.value; 
                psw2 = form.psw2.value; 
  
                if (psw1 == '') 
                    return null;
                     
                      
                else if (psw2 == '') {
                    alert ("Please enter confirm password"); 
                }
                          
                else if (psw1 != psw2) { 
                    alert ("\nPassword did not match: Please try again...")
                    location.replace("../html/EditProfile.html") 

                    return false; 
                } 

                else { 
                    alert ("\nPassword changes secussfully!")
                    window.location.href = "../html/index.html";
                    return false;
                }

  
            } 