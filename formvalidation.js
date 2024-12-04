function sendEmail(){
    let parms={
        username: document.getElementById('username').value,
        useremail: document.getElementById('useremail').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message1').value
    }
    emailjs.send("service_a4lzsm5","template_ttevxnq",parms).then(alert(" Email has been sent succesfully"));
}

const btn=document.getElementById("btn-submit");

btn.addEventListener("click",validateform);

function validateform(){

    let username = document.getElementById("username").value;
    let useremail = document.getElementById("useremail").value;
    let subject = document.getElementById("subject").value;
    let regexUserUame=/^[a-zA-Z]{3,15}$/;
    let nameresult= regexUserUame.test(username);
    let regexUserEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let emailresult=regexUserEmail.test(useremail);
    
    
   if(nameresult==false){
       alert("Please enter a valid username (3-15 characters).");
       event.preventDefault();
       return false;
   }
   if(emailresult==false){
       alert("Please enter a valid email address.");
       event.preventDefault();
       return false;
   }
   if(subject==""||null){
       alert("Please Enter a subject");
       event.preventDefault();
       return false;
   }
   sendEmail();
   event.preventDefault();
}

