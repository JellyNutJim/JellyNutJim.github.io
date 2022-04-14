function displayModel(userInput)
{
    if(!checkValidElement(userInput)){
        var error = [true, "Invalid Element"]
        return error;
    }

    var canvas = document.getElementById("displayCanvas");
    canvas.style.display = "none";
    
    var display = document.getElementById("3DModelViewer");
    display.style.display = "block";



    return [false, "Run Succesfull"];
}




//var canvas = document.getElementById("displayCanvas");
//canvas.style.display = "none";
//if (x.style.display === "none") {
//    x.style.display = "block";
//} else {
//    x.style.display = "none";
//}