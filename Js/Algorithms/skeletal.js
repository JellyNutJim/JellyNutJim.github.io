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
    var loop = true;
    userInput = userInput += " ";
    console.log("start");

    var carbonDataArray = new Array(carbons);
    var counter = 0;

    for (var i = 0; i < userInput.length; i++)
    {
        if (userInput[i] == "C")
        {
            loop = true;
            i++;

            if (userInput[i] == "C")
            {
                carbonDataArray[counter] = " ";
            }

            while (loop)
            {
                if (userInput[i] == 'C' || userInput[i] == ' ')
                {
                    loop = false;
                    break;
                }

                carbonData += userInput[i];
                i++
            }

            //console.log("data: " + carbonData);
            carbonDataArray[counter] = carbonData;
            counter++;
            carbonData = "";

            if (userInput[i] == ' ')
            {
                break;
            }

            i--;
        }
    }


    var t = measureConnections(carbonDataArray);
    console.log(t);

    return [false, "Run Succesfull"];
}

//Converts the carbonDataArray into a usable format
function measureConnections(carbonDataArray)
{
    var counter = 0;
    var newDataArray = new Array(carbonDataArray.length);
    var carbonNum = carbonDataArray.length;
    var numberOfNeededConnections = 0;
    var connectedElements;

    for (var i = 0; i < carbonDataArray.length; i++)
    {
        var temp = carbonDataArray[i];
        
        //Calculate the required number of connections.
        if (i == 0 || i == carbonDataArray - 1)
        {
            numberOfNeededConnections = 3;
        }
        else
        {
            numberOfNeededConnections = 2;
        }


       for (var p = 0; p < temp.length; i++)
       {
            if (temp[p] == " ")
            {
                newDataArray[i] = "d";
                break;
            }

            var attemptedElement = temp[p] + temp[p + 1];
            var attemptedNum = temp[p + 2];

            //Returns true if the element is invalid.
            if(!checkValidElement(attemptedElement)){

                attemptedElement = temp[p];
                attemptedNum = temp[p + 1]

                switch (attemptedNum)
                {
                    case "1":
                        numberOfNeededConnections--;
                        newDataArray[i] += "'1" + attemptedElement;
                        p += 2;
                        break;
                    case "2":
                        numberOfNeededConnections -= 2;
                        newDataArray[i] += "'2" + attemptedElement;
                        p += 2;
                        break;
                    case "3":
                        numberOfNeededConnections -= 3;
                        newDataArray[i] += "'3" + attemptedElement;
                        p += 2;
                        break;
                    default:
                        numberOfNeededConnections -= 1;
                        newDataArray[i] += "'1" + attemptedElement;
                        p += 1;
                        break;
                }
            }
            else //The element is valid
            {
                switch (attemptedNum)
                {
                    case "1":
                        numberOfNeededConnections--;
                        newDataArray[i] += "'1" + attemptedElement;
                        p += 3;
                        break;
                    case "2":
                        numberOfNeededConnections -= 2;
                        newDataArray[i] += "'2" + attemptedElement;
                        p += 3;
                        break;
                    case "3":
                        numberOfNeededConnections -= 3;
                        newDataArray[i] += "'3" + attemptedElement;
                        p += 3;
                        break;
                    default:
                        numberOfNeededConnections -= 1;
                        newDataArray[i] += "'1" + attemptedElement;
                        p += 2;
                        break;
                }
            }
       } 

       switch (numberOfNeededConnections)
       {
           case 0:
               continue;
            case 1:
                newDataArray[i] += "d";
                break;
            default:
                console.log("error");
                break;
       }
    }

    return newDataArray;

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