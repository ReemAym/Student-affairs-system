let studentID = document.getElementById ("id");
studentID.value = 20190040;

let studentName = document.getElementById ("name");
studentName.value = "Osama Gamil said";

let departmentInput=document.querySelector("[name='department']");
let errorElement=document.getElementById("Error");
document.forms[0].onsubmit=function(event)
{
    let message=[];
    let departmentValid=false;
    if(departmentInput.value!=="")
    {
        if(departmentInput.value!== "Computer Science (CS)" && departmentInput.value!== "Artificial Intelligence (AI)"
        && departmentInput.value!== "Information Technology (IT)" && departmentInput.value!== "Information System (IS)"
        && departmentInput.value!== "Decision Support (DS)")
        {
            event.preventDefault();
            message.push("Choose correct department");
            errorElement.innerHTML=message.join(', ');
            departmentInput.focus();
        }
        departmentValid=true;
    }
    if(departmentValid===false)
    {
        event.preventDefault();
        message.push("Choose the department");
        errorElement.innerHTML=message.join(', ');
        departmentInput.focus();
    }
}