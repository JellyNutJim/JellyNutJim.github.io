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

//Creates a circle, takes position, radius and colour as parameters.
function drawAnimCircle(x, y, r, colour = "rgba(255, 255, 255, 0)", time){
    var canvas = document.getElementById("displayCanvas");
    var c = canvas.getContext("2d");

    c.fillStyle = colour;
    c.beginPath();
    c.arc(x, y, r, 0, 2 * Math.PI);
    c.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    c.fill();
    c.stroke();
}

function animCircle(x, y, r, colour){
    var canvas = document.getElementById("displayCanvas");
    var c = canvas.getContext("2d");

    this.x = x;
    this.y = y;
    this.r = r;
    this.colour = colour;

    this.draw = function(time){
        c.beginPath();
        c.fillStyle = this.colour;
        c.arc(x, y, r, 0, 2 * Math.PI);
        c.rotate(((2 * Math.PI) / 60) * time.getSeconds() + 1 + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        c.fill();
        c.stroke();
        console.log(this.y);
    }
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
    drawCanvas.clearRect(0, 0, canvas.width, canvas.height);

    //Translate the point of origin to the centre of the canvas.
    drawCanvas.save();
    drawCanvas.translate(canvas.width / 2, canvas.height / 2);

    //Create Centre
    drawCircle(0, 0, 30, "red");
    

    //create shells and electrons
    for (var i = 0; i < electronShells; i++){
        drawCircle(0, 0, 80 * (i + 1), "rgba(255, 255, 255, 0)");
        
        if (i == 0){
            if (electronStructure[i] > 0){
                var elec1 = new animCircle(0, -80, 15, "yellow", time);
                elec1.draw(time);
            }
            if (electronStructure[i] > 1){
                var elec2 = new animCircle(0, 80, 15, "yellow", time);
                elec2.draw(time);
            } 
        } else{
            for (var g = 0; g < electronStructure[i]; g++){

            }
        }
    }
    
    drawCanvas.restore();
    console.log("e");
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

    displayElement2D(userInput, atmoicNum, atomicWeight);
    setInterval(function() { displayElement2D(userInput, atmoicNum, atomicWeight); }, 50);
    return [false, "Run Succesfull"];
}

