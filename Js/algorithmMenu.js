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

//Takes the users inputs, and calls the appropriate functions based on said input.
function initializeDisplay(){
    //Define user values
    var userInput = document.getElementById("emInput").value;
    var radioOptions = document.getElementsByName("emOption");
    var displayOption;

    //Identical to the resize canvas method, but called once.
    let mainCanvas = document.querySelector('.canvasHolder');
    var canvas = document.getElementById("displayCanvas");
    var pwidth = mainCanvas.clientWidth;
    var pheight = mainCanvas.clientHeight;

    canvas.setAttribute('width', pwidth);
    canvas.setAttribute('height', pheight);

    //Search radioOptions array for the checked radio, then save the chosen value.
    for (var i = 0; i < radioOptions.length; i++){
        if (radioOptions[i].checked){
            displayOption = radioOptions[i].value;
        }
    }
    
    //Call the appropriate function based on user's choice.
    var error;
    switch(displayOption){
        case "d-Bohr":
            error = bohrMain(userInput);
            break;
    }
    
    //temp error displayer
    if (error[0] == true){
        console.log(error[1]);
    }
    console.log(error[1]);
}

