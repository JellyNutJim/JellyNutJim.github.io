var addtionalStructure;

function createSkeletal(userInput)
{
    var carbons = 0;

    //Search input for the amount of carbons.
    for (var i = 0; i < userInput.length; i++)
    {
        //console.log(userInput[i] + " d")
        if (userInput[i] == "C")
        {
            carbons += 1;
        }
    }

    if (carbons == 1)
    {
        var currentBox = document.getElementById("d-skeletal");
        var newBox = document.getElementById("d-displayed");

        currentBox.checked = "false";
        newBox.checked = "checked";
        createDisplayedFormula(userInput);
    }


    drawSkeletal(carbons)
    var carbonData = "";
    userInput = userInput += " ";
    console.log("start");
    for (var i = 0; i < userInput.Length; i++)
    {
        console.log("start: " + userInput[i]);
        if (userInput[i] == "C")
        {
            console.log("1: " + userInput[i]);
            i++;
            console.log("2: " + userInput[i]);
            while (userInput[i] != "C" || " ")
            {
                console.log("3: " + userInput[i]);
                carbonData += userInput[i];
                i++
            }
            i--;
            console.log(carbonData);
            carbonData = "";

            /*
            var attemptedElement = userInput[i + 1 ] + userInput[i + 2];
            var attemptedNum = userInput[i + 3];
            
            //If it's not a valid element.
            if(!checkValidElement(attemptedElement)){
                attemptedElement = userInput[i + 1];
                attemptedNum = userInput[i + 2]
                

                if (attemptedNum == "1" || "2" || "3")
                {

                }
            } 
            else
            {

            } */

        }
    }

    return [false, "Run Succesfull"];
}


function drawSkeletal(carbons)
{
    console.log("test: " + carbons );

    //Define the canvas.
    var canvas = document.getElementById("displayCanvas");
    var c = canvas.getContext("2d");

    c.restore();
    c.save();
    c.restore();

    var carbonLength;
    var x = ((canvas.clientWidth) / 2) - ((carbons - 1) * 15);
    var y = canvas.height / 2;

    c.translate(x, y);

    if (carbons == 1)
    {
        c.font = "30px Arial";
        c.fillStyle = "black";
        c.fillText("C", 0, 0);
    }
    else
    {
        x = 30;
        y = -30;
        c.beginPath();
        c.moveTo(0, 0);
        for (var i = 0; i < carbons - 1; i++)
        {
            console.log("x: " + x + " y: " + y + " i: " + i)
            c.lineTo(x, y);
            
            if (y == -30)
            {
                y = 0;
            }
            else
            {
                y = -30;
            }


            x += 30;
            c.stroke();
        }
    }



}