let idInput=document.querySelector("[name='id']");
let nameInput=document.querySelector("[name='name']");
let dateInput=document.querySelector("[name='date']");
let gpaInput=document.querySelector("[name='gpa']");
let maleInput=document.querySelector("[id='male']");
let femaleInput=document.querySelector("[id='female']");
let levelInput=document.querySelector("[name='level']");
let emailInput=document.querySelector("[name='email']");
let mobilInput=document.querySelector("[name='mobile']");
let errorElement=document.getElementById("Error");

document.forms[0].onsubmit=function(event)
{
    let message=[];
    let idValid=false;
    let nameValid=false;
    let gpaValid=false;
    let dateValid=false;
    let maleValid=false;
    let femaleValid=false;
    let levelValid=false;
    let emailValid=false;
    let mobilnumVaild=false;
    if(idInput.value!==""&&idInput.value>0)
    {
        idValid=true;
    }
    if(nameInput.value!=="")
    {
        nameValid=true;
    }
    if(dateInput.value!=="")
    {
        dateValid=true;
    }
    if(gpaInput.value!==""&& gpaInput.value<=4 &&gpa.value>=0)
    {
        gpaValid=true;
    }

    if(maleInput.value!=="")
    {
        maleValid=true;
    }
    if(femaleInput.value!=="")
    {
        femaleValid=true;
    }
    if(levelInput.value!=="")
    {
        levelValid=true;
    }
    if(emailInput.value!=="")
    {
        emailValid=true;
    }
    if(mobilInput.value!=="")
    {
        mobilnumVaild=true;
    }
    
    if(idValid===false)
    {
        event.preventDefault();
        message.push("ID is invalid");
        errorElement.innerHTML=message.join(', ');
        idInput.focus();
    }
    else if(nameValid===false)
    {
        event.preventDefault();
        message.push("Enter the name");
        errorElement.innerHTML=message.join(', ');
        nameInput.focus();
    }
    else if(dateValid===false)
    {
        event.preventDefault();
        message.push("Choose the date");
        errorElement.innerHTML=message.join(', ');
        dateInput.focus();
    }
    else if(gpaValid===false)
    {
        event.preventDefault();
        message.push("GPA is invalid");
        errorElement.innerHTML=message.join(', ');
        gpaInput.focus();
    }
    else if(maleValid===false && femaleValid===false)
    {
        event.preventDefault();
        message.push("Choose the gender");
        errorElement.innerHTML=message.join(', ');
        genderInput.focus();
    }
    else if(levelValid===false)
    {
        event.preventDefault();
        message.push("Enter the level");
        errorElement.innerHTML=message.join(', ');
        levelInput.focus();
    }
    else if(emailValid===false)
    {
        event.preventDefault();
        message.push("Enter the email correctly");
        errorElement.innerHTML=message.join(', ');
        emailInput.focus(); 
    }
    else if(mobilnumVaild===false)
    {
        event.preventDefault();
        message.push("Enter the mobile number correctly");
        errorElement.innerHTML=message.join(', ');
        mobilInput.focus();
    }
    else if (levelValid===true)
    {
        if(levelInput.value!== "First Level" && levelInput.value!== "Second Level"
        && levelInput.value!== "Third Level" && levelInput.value!== "Fourth Level")
        {
            event.preventDefault();
            message.push("Choose correct level");
            errorElement.innerHTML=message.join(', ');
            levelInput.focus();
        }
    }
}

let delButton = document.getElementById("del");
delButton.onclick = function()
{
    if(confirm('Are You Sure you want to delete your data?'))
    {
        return true;
    }
    else
    {
        preventDefault();
    }
}
