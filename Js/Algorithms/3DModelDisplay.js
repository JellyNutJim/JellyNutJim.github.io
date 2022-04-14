var s = new Image();
var p1 = new Image();
var p2 = new Image();
var p3 = new Image();


function displayModel(userInput)
{
    //pre load assets
    s.src = 'Assets/s.glb';
    p1.src = 'Assets/p1.glb';
    p2.src = 'Assets/p2.glb';
    p3.src = 'Assets/p3.glb';

    display(userInput);

    return [false, "Run Succesfull"];
}


function display(userInput)
{
    if(!checkValidElement(userInput)){
        var error = [true, "Invalid Element"]
        return error;
    }

    var canvas = document.getElementById("displayCanvas");
    canvas.style.display = "none";
    
    console.log("yes");
    //var display = document.getElementById("3DModelViewer");
    //display.style.display = "inline";

    var newDisplaySection = document.getElementById("canvasHolder");



    newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/p1.glb' camera-controls auto-rotate></model-viewer>";


    //Display correct model
    switch (userInput)
    {
        case "H":
            break;
        case "He":
            break;
        case "Li":
            break;
        case "Be":
            break;
        case "B":
            break;
        case "C":
            break;
        case "N":
            break;
        case "O":
            break;
        case "F":
            break;
        case "Ne":
            break;
        default:
            break;

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