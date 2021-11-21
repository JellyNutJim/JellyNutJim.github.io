//Splits the entered amount of electrons into shells.
function getBohrElectronStructure(electrons){
    var shells =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //15 possible shells.
    var counter = 1;

    //As the first shell difers in size to the rest, we define it first.
    if (electrons > 2){
        shells[0] =  2;
        electrons -= 2;
    }

    //Run through the remaining number of electrons, increasing the electrons in each shell.
    //Max of 8 electrons per shell.
    for (var i = 1; i < electrons + 1; i++){
        if (i % 8 != 0){
            shells[counter] += 1;
        } else{
            shells[counter] += 1;
            counter++;
        }
    }
    //Returns the electron structure as well as the number of shells.
    return [shells, counter + 1];
}

//Creates a circle, takes position, radius and colour as parameters.
function drawCircle(x, y, r, colour = "rgba(255, 255, 255, 0)"){
    var canvas = document.getElementById("displayCanvas");
    var c = canvas.getContext("2d");

    c.fillStyle = colour;
    c.beginPath();
    c.arc(x, y, r, 0, 2*Math.PI);
    c.fill();
    c.stroke();
}

function displayElement2D(Symbol, atmoicNum, atomicWeight){
    //Define all needed aspects.
    var protons = atmoicNum;
    var electrons = atmoicNum;
    var neutrons = Math.floor(atomicWeight - atmoicNum);
    var electronStructure = getBohrElectronStructure(electrons)[0]; //E.g. 2.8.8.4
    var electronShells = getBohrElectronStructure(electrons)[1]; //E.g.  4 shells


    //Find canvas element and define drawing tool.
    var canvas = document.getElementById("displayCanvas");
    var drawCanvas = canvas.getContext("2d");

    //Set width and height variables. Will be used to calculate the mid point of the canvas.
    var width = canvas.width;
    var height = canvas.height;
    var mWidth = width / 2;
    var mHeight = height / 2;

    //Create Centre
    drawCircle(mWidth, mHeight, 30, "red");

    //create shells and electrons
    for (var i = 0; i < electronShells; i++){
        console.log(i);
        drawCanvas.beginPath();
        drawCanvas.arc(mWidth, mHeight, 80 * (i + 1), 0, 2 * Math.PI);
        drawCanvas.stroke();

        
        if (i == 0){
            if (electronStructure[i] > 0){
                drawCircle(mWidth, mHeight - 80, 15, "yellow");
                dr
            }
            if (electronStructure[i] > 1){
                drawCircle(mWidth, mHeight + 80, 15, "yellow");
            }
            
        } else{
            for (var g = 0; g < electronStructure[i]; g++){

            }
        }
    }
}

//The main entry point for the bohr model functions.
function bohrMain(userInput){
    if(!checkValidElement(userInput)){
        var error = [true, "Invalid Element"]
        return error;
    }

    //Get values.
    var atmoicNum = 11;
    var atomicWeight = 23;

    window.requestAnimationFrame(displayElement2D(userInput, atmoicNum, atomicWeight));
    return [false, "Run Succesfull"];
}

