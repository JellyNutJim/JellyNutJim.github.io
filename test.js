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

function displayElement2D(elementSymbol, atmoicNum, atomicWeight){
    //Define all needed aspects.
    var protons = atmoicNum;
    var electrons = atmoicNum;
    var neutrons = Math.floor(atomicWeight - atmoicNum);
    var electronStructure = getBohrElectronStructure(electrons)[0]; //E.g. 2.8.8.4
    var electronShells = getBohrElectronStructure(electrons)[1]; //E.g.  4 shells
    var time = new Date();


    //Find canvas element and define drawing tool.
    var canvas = document.getElementById("displayCanvas");
    var drawCanvas = canvas.getContext("2d");
  
    //Create Centre
    drawCircle(0, 0, 30, "red");
  
    
  
  
  
  
}













