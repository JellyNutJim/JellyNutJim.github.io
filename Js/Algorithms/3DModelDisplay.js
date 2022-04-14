var s = new Image();
var p1 = new Image();
var p2 = new Image();
var p3 = new Image();


function displayModel(userInput)
{
    //pre load assets
    s.src = "Assets\s.glb";
    p1.src = "Assets\s.glb";
    p2.src = "Assets\p2.glb";
    p3.src = "Assets\p3.glb";

    display(userInput);

    return [false, "Run Succesfull"];
}

function display()
{
    if(!checkValidElement(userInput)){
        var error = [true, "Invalid Element"]
        return error;
    }

    var canvas = document.getElementById("displayCanvas");
    canvas.style.display = "none";
    
    var display = document.getElementById("3DModelViewer");
    display.style.display = "block";

    display.src = p1;

    //Display correct model
    switch (userInput)
    {
        case "H":

    }

    return [false, "Run Succesfull"];
}




//var canvas = document.getElementById("displayCanvas");
//canvas.style.display = "none";
//if (x.style.display === "none") {
//    x.style.display = "block";
//} else {
//    x.style.display = "none";
//}