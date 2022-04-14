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

    var newDisplaySection = document.getElementById("canvasHolder");

    //Display correct model bassed on input.
    switch (userInput)
    {
        case "H":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/s.glb' camera-controls auto-rotate></model-viewer>";
            break;
        case "He":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/s.glb' camera-controls auto-rotate></model-viewer>";
            break;
        case "Li":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/s.glb' camera-controls auto-rotate></model-viewer>";
            break;
        case "Be":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/s.glb' camera-controls auto-rotate></model-viewer>";
            break;
        case "B":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/p1.glb' camera-controls auto-rotate></model-viewer>";
            break;
        case "C":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/p1.glb' camera-controls auto-rotate></model-viewer>";
            break;
        case "N":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/p2.glb' camera-controls auto-rotate></model-viewer>";
            break;
        case "O":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/p2.glb' camera-controls auto-rotate></model-viewer>";
            break;
        case "F":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/Altp3.glb' camera-controls auto-rotate></model-viewer>";
            break;
        case "Ne":
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/Altp3.glb' camera-controls auto-rotate></model-viewer>";
            break;
        default:
            newDisplaySection.innerHTML += "<model-viewer id='3DModelViewer' src='Assets/4.glb' camera-controls auto-rotate></model-viewer>";
            break;

    }

    validateModel();

    return [false, "Run Succesfull"];
}




//var canvas = document.getElementById("displayCanvas");
//canvas.style.display = "none";
//if (x.style.display === "none") {
//    x.style.display = "block";
//} else {
//    x.style.display = "none";
//}