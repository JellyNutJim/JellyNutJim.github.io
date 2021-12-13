//Create global variables.
var protonImage = new Image();
var electronImage = new Image();
var protons;
var electrons;
var neutrons;
var electronStructure;
var electronShells;
var time;


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

function drawCircle(x, y, r, colour = "rgba(255, 255, 255, 0)"){
    var canvas = document.getElementById("displayCanvas");
    var c = canvas.getContext("2d");

    c.fillStyle = colour;
    c.beginPath();
    c.arc(x, y, r, 0, 2*Math.PI);
    c.fill();
    c.stroke();
}


function displayElement2D(){
    //Find canvas element and define drawing tool.
    var canvas = document.getElementById("displayCanvas");
    var dBohr = canvas.getContext("2d");
    dBohr.restore();
    dBohr.save();
    dBohr.clearRect(0, 0, canvas.width, canvas.height);

    //Using the time to animate the electrons.
    time = new Date();
   
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var protonSize = canvasWidth / 20;
    var electronSize = canvasWidth / 25;

    //Resize shells and electrons if needed.
    //This is done to make sure that all shells fit within the frame.
    if (electronShells > 7){
        electronSize = canvasWidth / 50;
    }
    else if (electronShells > 4){
        electronSize = canvasWidth / 35;
    }

    var shellWidth = electronSize * 2;

    //Set point of origin
    dBohr.translate(canvasWidth / 2, canvasHeight / 2);

    //Draw the proton
    dBohr.drawImage(protonImage, 0 - (protonSize / 2), 0 - (protonSize / 2), protonSize, protonSize);
    var eOrigin = 0 - (electronSize / 2);

    //Draw shells and electrons
    for (var i = 0; i < electronShells; i++){
        drawCircle(0, 0, shellWidth * (i + 1), "rgba(255, 255, 255, 0)");
        dBohr.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
            console.log("test" + e);
            switch (electronStructure[i]){
                case 1:
                    dBohr.drawImage(electronImage, eOrigin, (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                    break;
                case 2:
                    dBohr.drawImage(electronImage, eOrigin, (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                    dBohr.drawImage(electronImage, eOrigin, (-shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                    break;
                case 3:
                    dBohr.drawImage(electronImage, 0 - (electronSize / 2), (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                    dBohr.rotate(120*Math.PI/180);
                    dBohr.drawImage(electronImage, 0 - (electronSize / 2), (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                    dBohr.rotate(-240*Math.PI/180);
                    dBohr.drawImage(electronImage, 0 - (electronSize / 2), (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                    dBohr.rotate(120*Math.PI/180);
                    break;
                case 4:
                    for (var r = 0; r < 4; r++){
                        dBohr.drawImage(electronImage, eOrigin, (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                        dBohr.rotate(90*Math.PI/180);
                    }
                    break;
                case 5:
                    for (var r = 0; r < 5; r++){
                        dBohr.drawImage(electronImage, eOrigin, (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                        dBohr.rotate(72*Math.PI/180);
                    }
                    break;
                case 6:
                    for (var r = 0; r < 6; r++){
                        dBohr.drawImage(electronImage, eOrigin, (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                        dBohr.rotate(60*Math.PI/180);
                    }
                    break;
                case 7:
                    for (var r = 0; r < 7; r++){
                        dBohr.drawImage(electronImage, eOrigin, (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                        dBohr.rotate(51*Math.PI/180);
                    }
                    dBohr.rotate(3*Math.PI/180);
                    break;
                case 8:
                    for (var r = 0; r < 8; r++){
                        dBohr.drawImage(electronImage, eOrigin, (shellWidth * (i + 1)) - (electronSize / 2), electronSize, electronSize);
                        dBohr.rotate(45*Math.PI/180);
                    }
                    break;
                default:
                    break;
        }
    }
    window.requestAnimationFrame(displayElement2D);
}


//The main entry point for the bohr model functions.
function bohrMain(userInput){
    if(!checkValidElement(userInput)){
        var error = [true, "Invalid Element"]
        return error;
    }

    //Get values.

    //Temp values of sodium.
    if (userInput == "Fe")
    {
        var atmoicNum = 56;
        var atomicWeight = 26;
    
    }
    else{
        var atmoicNum = 11;
        var atomicWeight = 23;
    }

    protons = atmoicNum;
    electrons = atmoicNum;
    neutrons = Math.floor(atomicWeight - atmoicNum);
    electronStructure = getBohrElectronStructure(electrons)[0]; //E.g. 2.8.8.4
    electronShells = getBohrElectronStructure(electrons)[1]; //E.g.  4 shells

    //Pre load images into variables
    protonImage.src = 'proton.png';
    electronImage.src = 'Electron.png' //temp capital letter

    window.requestAnimationFrame(displayElement2D);
    return [false, "Run Succesfull"];
}

