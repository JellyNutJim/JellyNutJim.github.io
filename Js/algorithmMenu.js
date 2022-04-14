//The following file contains the code that will accept a user input and pass
//those values to the appropriate visual display algorithm.


//Can be called at anytime to switch the current page to the one specified in the argument.
function switchPage(filename){
    console.log(filename);
    document.location=filename;   
}

//This function will set the canvas size equal to its parent element ('canvasHolder')
//Called whenever a change in window size is detected
window.addEventListener('resize', function(event){
    let mainCanvas = document.querySelector('.canvasHolder');
    var canvas = document.getElementById("displayCanvas");
    var modelDisplay = document.getElementById("3DModelViewer");
    var pwidth = mainCanvas.clientWidth;
    var pheight = mainCanvas.clientHeight;

    canvas.setAttribute('width', pwidth);
    canvas.setAttribute('height', pheight);
    modelDisplay.setAttribute('width', pwidth);
    modelDisplay.setAttribute('height', pheight);

    console.log(modelDisplay.height);
    initializeDisplay();

});

//Returns the current user display option.
function getCurrentRadioOption(){  
    //Search radioOptions array for the checked radio, then save the chosen value.
    var radioOptions = document.getElementsByName("emOption");
    for (var i = 0; i < radioOptions.length; i++){

        if (radioOptions[i].checked){
            displayOption = radioOptions[i].value;
        }
    }
    
    return displayOption;
}

//Checks if the selected button has been changed.
//This function is used in animation loops to see if the loop must be broken.
function checkSelectedTrue(currentActiveOption){

    var currentSelectedOption = getCurrentRadioOption();
    
    if (currentSelectedOption == currentActiveOption){
        return true;
    }
    else{
        return false;   
    }
}

//Clears the canvas upon being called.
function clearCanvas()
{
    var canvas = document.getElementById("displayCanvas");
    var c = canvas.getContext("2d");

    c.fillStyle = "ivory";
    c.strokeStyle = "ivory";
    c.beginPath();
    c.rect(canvas.width / 10, canvas.height / 10, canvas.width, canvas.height);
    c.fill();
    c.stroke();

    console.log("cleared");
}

var modelExists = false;

//Sets model exsits to true when called.
function validateModel()
{
    modelExists = true;
}

//Sets model exsits to false when called.
function clearModel()
{
    modelExists = false;
}


var oldOption;
var loop = true;

//Takes the users inputs, and calls the appropriate functions based on said input.
function initializeDisplay(){
    //Define user values
    var userInput = document.getElementById("emInput").value;
    var radioOptions = document.getElementsByName("emOption");
    var displayOption;

    //If a 3D model already exists, it must be deleted before continuing.
    if (modelExists == true)
    {
        var model = document.getElementById("3DModelViewer");
        model.remove();
    }

    //Identical to the resize canvas method, but called once. 
    let mainCanvas = document.querySelector('.canvasHolder');
    var canvas = document.getElementById("displayCanvas");
    var pwidth = mainCanvas.clientWidth;
    var pheight = mainCanvas.clientHeight;

    canvas.setAttribute('width', pwidth);
    canvas.setAttribute('height', pheight);

    //Search radioOptions array for the checked radio, then save the chosen value.
    displayOption = getCurrentRadioOption();

    if (oldOption == displayOption)
    {
        loop = true;
    }
    else
    {
        loop = false;
    }

    oldOption = displayOption;
    
    //Call the appropriate function based on user's choice.
    var error;
    switch(displayOption){
        case "d-Bohr":
            error = bohrMain(userInput);

            //Display canvas if not already being displayed.
            //var canvas = document.getElementById("displayCanvas");
            //canvas.style.display = "block";

            break;
        case "d-3D":
            haultLoop();
            error = displayModel(userInput);
            break;
        case "d-displayed":
            haultLoop();

            //Display canvas if not already being displayed.
            //var canvas = document.getElementById("displayCanvas");
            //canvas.style.display = "block";

            error = createDisplayedFormula(userInput);
            break;
    }
    
    //temp error displayer
    if (error[0] == true){
        console.log(error[1]);

    }
    else{
        console.log(error[1]);
    }
}
