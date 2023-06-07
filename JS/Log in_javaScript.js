let userInput = document.getElementById("user");
let passInput = document.getElementById("pass");
let errorElement=document.getElementById("Error");
document.forms[0].onsubmit=function(event)
{
    let message=[];
    let userValid=false;
    let passValid=false;
    if(userInput.value!=="")
    {
        userValid=true;
    }
    if(passInput.value!=="")
    {
        passValid=true;
    }

    if(userValid===false)
    {
        event.preventDefault();
        message.push("Enter Username");
        errorElement.innerHTML=message.join(', ');
        userInput.focus();
    }
    else if(passValid===false)
    {
        event.preventDefault();
        message.push("Enter Password");
        errorElement.innerHTML=message.join(', ');
        passInput.focus();
    }

    else if(passValid===true)
    {
        if (passInput.value.length<8 || passInput.value.length>12)
        {
            event.preventDefault();
            message.push("password must be between 8-12");
            errorElement.innerHTML=message.join(', ');
            passInput.focus();
        }
    }
    window.location.href="Student Affairs.html";
}
