function changeStatus (statusValue)
{
    if(statusValue === "Active")
    {
        statusValue = "Inactive";
    }
    else if(statusValue === "Inactive")
    {
        statusValue = "Active";
    }
    return statusValue;
}

//Button 1
let statusButton1 = document.getElementById("button1");
statusButton1.onclick = function () 
{
    statusButton1.value = changeStatus(statusButton1.value);
};

//Button 2
let statusButton2 = document.getElementById("button2");
statusButton2.onclick = function () 
{
    statusButton2.value = changeStatus(statusButton2.value);
};

//Button 3
let statusButton3 = document.getElementById("button3");
statusButton3.onclick = function () 
{
    statusButton3.value = changeStatus(statusButton3.value);
};

//Button 4
let statusButton4 = document.getElementById("button4");
statusButton4.onclick = function () 
{
    statusButton4.value = changeStatus(statusButton4.value);
};

//Button 5
let statusButton5 = document.getElementById("button5");
statusButton5.onclick = function () 
{
    statusButton5.value = changeStatus(statusButton5.value);
};

//Button 6
let statusButton6 = document.getElementById("button6");
statusButton6.onclick = function () 
{
    statusButton6.value = changeStatus(statusButton6.value);
};


