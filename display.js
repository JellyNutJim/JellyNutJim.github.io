function initializeDisplay(){
    //Define user values
    var userInput = document.getElementById("emInput").value;
    var radioOptions = document.getElementsByName("emOption");
    var displayOption;

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

    if (error[0] == true){
        console.log(error[1]);
    }
    console.log(error[1]);
}

