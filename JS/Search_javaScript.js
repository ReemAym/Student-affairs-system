function checklevel (element)
{
    if(element.children[4].firstChild.nodeValue === "Third Level")
    {
        window.location.href="Department Assignment.html";
    }
    else
    {
        if (element.children[4].firstChild.nodeValue === "First Level")
        {
            window.alert("Error.Can't Assign Department to Student in First Level.");
            // document.getElementById("error").innerHTML = "Error.Can't Assign Department to Student in First Level.";
        }
        else if (element.children[4].firstChild.nodeValue === "Second Level")
        {
            window.alert("Error.Can't Assign Department to Student in Second Level.");
            // document.getElementById("error").innerHTML = "Error.Can't Assign Department to Student in Second Level.";
        }
        else if(element.children[4].firstChild.nodeValue === "Fourth Level")
        {
            window.alert("Error. The Student has already Department.");
        // document.getElementById("error").innerHTML = "Error. The Student has already Department.";
        }
    }
};

// 1 name
let Row1 = document.getElementById("tr1");
let button1 = document.getElementById("button1");

button1.onclick = function ()
{
    checklevel(Row1);
};

// 2 name
let Row2 = document.getElementById("tr2");
let button2 = document.getElementById("button2");

button2.onclick = function ()
{
    checklevel(Row2);
}

// 3 name
let Row3 = document.getElementById("tr3");
let button3 = document.getElementById("button3");

button3.onclick = function ()
{
    checklevel(Row3)
};

// 4 name
let Row4 = document.getElementById("tr4");
let button4 = document.getElementById("button4");

button4.onclick = function ()
{
    checklevel(Row4);
};

// 5 name
let Row5 = document.getElementById("tr5");
let button5 = document.getElementById("button5");

button5.onclick = function ()
{
    checklevel(Row5);
};
