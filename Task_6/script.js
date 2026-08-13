const form = document.getElementById("myForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;


    const message = document.getElementById("message");

    if(name === ""){
        message.style.color = "yellow";
        message.textContent = "Please enter your name";
        return;
    }

    if(email === ""){
        message.style.color = "yellow";
        message.textContent = "Please enter your email";
        return;
    }


    if(!email.includes("@") || !email.includes(".")){
        message.style.color = "yellow";
        message.textContent = "Please enter a valid email";
        return;
    }  

    if(password.length < 6){
        message.style.color = "yellow";
        message.textContent = "Password must be at least 6 characters";
        return;
    }

    message.style.color = "lightgreen";
    message.textContent = "Form Submitted Successfully!";
});