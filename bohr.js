function bohrMain(userInput){
    if(!checkValidElement(userInput)){
        var error = [true, "Invalid Element"]
        return error;
    }

    //Get values.
    var atmoicNum = 11;
    var atomicWeight = 23;

    displayElement2D(userInput, atmoicNum, atomicWeight);
    return [false, "Run Succesfull"];
}

function getBohrElectronStructure(electrons){
    var shells = [0, 0, 0, 0];
    var counter = 1;
    var counter2 = 0;

    if (electrons > 2){
        shells[0] =  2;
        electrons -= 2;
    }

    for (var i = 1; i < electrons + 1; i++){;
        if (i % 9 != 0){
            shells[counter] += 1;
        } 
        else{
            counter++;
        }
    }

    return shells;
}

function displayElement2D(Symbol, atmoicNum, atomicWeight){
    //Define all needed aspects.
    var protons = atmoicNum;
    var electrons = atmoicNum;
    var electronStructure = getBohrElectronStructure(electrons);
    var neutrons = Math.floor(atomicWeight - atmoicNum);

    console.log(electronStructure);

    //Find canvas element and define drawing tool.
    var canvas = document.getElementById("displayCanvas");
    var drawCanvas = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;

    //Draw bohr model
    drawCanvas.fillStyle = "#FF0000";
    

}