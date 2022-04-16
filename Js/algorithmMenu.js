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
    var pwidth = mainCanvas.clientWidth;
    var pheight = mainCanvas.clientHeight;

    canvas.setAttribute('width', pwidth);
    canvas.setAttribute('height', pheight);

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

var bohrDisplayActive = false;
var dimensionalDisplayActive = false;
var displayedDisplayActive = false;
var skeletalDisplayActive = false;

//Displays element algorithm info/instructions.
function displayElementInfo(option)
{
    //Define info panel HTML elements.
    var infoPanel = document.getElementById("eInfo");
    var infoHeading = document.getElementById("eHeading");
    var infoContents = document.getElementById("eContents");

    //Display the panel.
    infoPanel.style.display = "block";

    switch(option)
    {
        case "Bohr":
            if (bohrDisplayActive)
            {
                infoPanel.style.display = "none";
                bohrDisplayActive = false;
            } 
            else
            {
                bohrDisplayActive = true;
                infoHeading.innerHTML = "Bohr's model display"
                infoContents.innerHTML = "The Bohr's model algorithm accepts any periodic element as an input. <br><br>Enter your chosen element and click submit to see it displayed as a Bohr's model."
            }
            break;
        case "3D":
            if (dimensionalDisplayActive)
            {
                infoPanel.style.display = "none";
                dimensionalDisplayActive = false;
            }
            else
            {
                dimensionalDisplayActive = true;
                infoHeading.innerHTML = "3D model display"
                infoContents.innerHTML = "The 3D model display accepts any element in the first group of the periodic table as an input. <br>Enter your chosen element and click submit to see it displayed. Entering any other element will result in an 'f' electron space being displayed."
            }

            break;
    }
}

//Displays molecule algorithm info/instructions.
function displayMoleculeInfo(option)
{
    //Define info panel HTML elements.
    var infoPanel = document.getElementById("mInfo");
    var infoHeading = document.getElementById("mHeading");
    var infoContents = document.getElementById("mContents");

    //Display the panel.
    infoPanel.style.display = "block";

    switch(option)
    {
        case "displayed":
            if (displayedDisplayActive)
            {
                infoPanel.style.display = "none";
                displayedDisplayActive = false;
            } 
            else
            {
                displayedDisplayActive = true;
                infoHeading.innerHTML = "Displayed Formula Display";
                infoContents.innerHTML = "The displayed algorithm accepts a hydrocarbon chain as an input. This input should be entered in structural formula. Example Input: 'CH3CH2CH3'. Enter your chosen molecule and click submit to see it displayed.";
            }
            break;
        case "skeletal":
            if (skeletalDisplayActive)
            {
                infoPanel.style.display = "none";
                skeletalDisplayActive = false;
            }
            else
            {
                skeletalDisplayActive = true;
                infoHeading.innerHTML = "Skeletal Formula Display"
                infoContents.innerHTML = "The skeletal algorithm accepts a hydrocarbon chain as an input. This input should be entered in structural formula. <br>Example Input: 'CH3CH2CH3'<br>Enter your chosen molecule and click submit to see it displayed.";
            }

            break;
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
    //If a 3D model already exists, it must be deleted before continuing.
    if (modelExists == true)
    {
        var model = document.getElementById("3DModelViewer");
        model.parentNode.removeChild(model);
        modelExists = false;
    }
}


var oldOption;
var loop = true;

//Takes the users inputs, and calls the appropriate functions based on said input.
function initializeDisplay(){

    console.log("Setting Display");

    //Reset the invalid element text display
    document.getElementById("invalidDisplay").style.zIndex = "-1";

    //Define user values
    var userInput = document.getElementById("emInput").value;
    var radioOptions = document.getElementsByName("emOption");
    var displayOption;

    //Identical to the resize canvas method, but called once. 
    let mainCanvas = document.querySelector('.canvasHolder');
    var canvas = document.getElementById("displayCanvas");
    var pwidth = mainCanvas.clientWidth;
    var pheight = mainCanvas.clientHeight;

    if (canvas.style.display = "none")
    {
        canvas.style.display = "block";
    }

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
            clearModel();
            error = bohrMain(userInput);
            break;
        case "d-3D":
            haultLoop();
            clearModel()
            error = displayModel(userInput);
            break;
        case "d-displayed":
            haultLoop();
            clearModel();
            error = createDisplayedFormula(userInput);
            break;
        case "d-skeletal":
            haultLoop();
            clearModel();
            error = createSkeletal(userInput);
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
