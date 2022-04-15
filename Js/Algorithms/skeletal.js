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

    drawSkeletal(carbons, t);
    drawSkeletal(carbons, t);

    return [false, "Run Succesfull"];
}

//Converts the carbonDataArray into a usable format
function measureConnections(carbonDataArray)
{
    console.log("Data Array: " + carbonDataArray)


    var counter = 0;
    var newDataArray = new Array(carbonDataArray.length);
    var carbonNum = carbonDataArray.length;
    var numberOfNeededConnections = 0;
    var connectedElements;

    for (var i = 0; i < carbonDataArray.length; i++)
    {
        var temp = carbonDataArray[i];
        newDataArray[i] = "";
        
        //Calculate the required number of connections.
        if (i == 0 || i == carbonDataArray.length - 1)
        {
            numberOfNeededConnections = 3;
        }
        else
        {
            numberOfNeededConnections = 2;
        }

        console.log("Required Connections: " + numberOfNeededConnections)


       for (var p = 0; p < temp.length; p++)
       {
            if (temp[p] == " ")
            {
                newDataArray[i] = "'d";
                break;
            }

            var attemptedElement = temp[p] + temp[p + 1];
            var attemptedNum = temp[p + 2];

            //console.log("Double attemted element: " + attemptedElement + " num " + attemptedNum);

            //Returns true if the element is invalid.
            if(!checkValidElement(attemptedElement)){

                attemptedElement = temp[p];
                attemptedNum = temp[p + 1]
                
                //console.log("Single attempted element: " + attemptedElement + " num: " + attemptedNum)

                switch (attemptedNum)
                {
                    case "1":
                        numberOfNeededConnections--;
                        newDataArray[i] += "'1" + attemptedElement;
                        p += 1;
                        break;
                    case "2":
                        numberOfNeededConnections -= 2;
                        newDataArray[i] += "'2" + attemptedElement;
                        p += 1;
                        break;
                    case "3":
                        numberOfNeededConnections -= 3;
                        newDataArray[i] += "'3" + attemptedElement;
                        p += 1;
                        break;
                    default:
                        numberOfNeededConnections -= 1;
                        newDataArray[i] += "'1" + attemptedElement;
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
       } 

       switch (numberOfNeededConnections)
       {
           case 0:
               continue;
            case 1:
                newDataArray[i] += "'d";
                break;
            default:
                console.log("error");
                break;
       }
    }

    return newDataArray;

}

function drawSkeletal(carbons, carbonDataArray)
{

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
        for (var i = 0; i < carbons; i++)
        {
            //Firstly the carbon is drawn.
            console.log("x: " + x + " y: " + y + " i: " + i)
            if (i == carbons - 1)
            {
                c.moveTo(x,y);
            }
            else
            {
                c.lineTo(x, y);
            }

            //Text options.
            c.font = "30px Arial";
            c.fillStyle = "black";

            //Now we add the extra connections.
            var cData = carbonDataArray[i];

            var upDrawn = false;
            var downDrawn = false;

            console.log(cData);

            console.log("Y test: " + y);
            for (var d = 0; d < cData.length; d++)
            {

                if (cData[d] = "'")
                {
                    d++;
                    var numOfExtra = cData[d];

                    if (numOfExtra == "d")
                    {
                        if (y == 0)
                        {
                            c.moveTo(x, -5);
                            c.lineTo(x - 25, -30);
                            c.moveTo(x, y);
                        }
                        else
                        {
                            c.moveTo(x, -25);
                            c.lineTo(x - 25, 0);
                            c.moveTo(x, y);
                        }

                        //Draw double bond
                        continue;
                    }

                    //get extra
                    d++;
                    var extra = cData[d] + cData[d + 1]
                    
                    if (!checkValidElement(extra))
                    {
                        extra = cData[d];
                    } 
                    else
                    {
                        d++;
                    }

                    if (extra == "H")
                    {
                        continue;
                    }
                    else
                    {
                        var y2;

                        if (y == 0)
                        {
                            y2 = -30;
                        }
                        else
                        {
                            y2 = 0;
                        }

                        //Drawing single extra
                        if (numOfExtra == 1)
                        {

                            if (upDrawn == false)
                            {
                                upDrawn = true;

                                //Draw up function-------
                                var width = c.measureText(extra).width; 
                                
                                c.moveTo(x - 30, y2);
                                c.lineTo(x - 30, y2 - 30);
                                c.fillText(extra, x - 30 - (width / 2), y2 - 35);
                                c.moveTo(x, y);
                                //-----------------------
                                
                            } 
                            else if (downDrawn == false)
                            {
                                downDrawn = true;

                                //Draw down function-------
                                var width = c.measureText(extra).width; 

                                c.moveTo(x - 30, y2);
                                c.lineTo(x - 30, y2 + 25);
                                c.moveTo(x, y);
                                c.fillText(extra, x - 30 - (width / 2), y2 + 55)
                                ////-----------------------
                            }
                            else
                            {
                                if (i == 0)
                                {
                                //Draw Side function-------
                                var width = c.measureText(extra).width; 
                                
                                c.moveTo(x - 30, y2);
                                c.lineTo(x - 30 - 30, y2);
                                c.fillText(extra, x - 30 - 30 - width, y2 + 10);
                                c.moveTo(x, y);
                                //-----------------------
                                }
                                else
                                {
                                    //Draw Right function-------
                                    var width = c.measureText(extra).width; 

                                    c.moveTo(x - 30, y2);
                                    c.lineTo(x, y2);
                                    c.fillText(extra, x, y2 + 10);
                                    c.moveTo(x, y);
                                    //-----------------------
                                }
                                
                            }
                        }
                        else if (numOfExtra == 2)
                        {
                            if (upDrawn == false)
                            {
                                upDrawn = true;
                                downDrawn = true;
                                
                                //Draw up function-------
                                var width = c.measureText(extra).width; 
                                
                                c.moveTo(x - 30, y2);
                                c.lineTo(x - 30, y2 - 30);
                                c.fillText(extra, x - 30 - (width / 2), y2 - 35);
                                c.moveTo(x, y);
                                //-----------------------

                                //Draw down function-------
                                var width = c.measureText(extra).width; 

                                c.moveTo(x - 30, y2);
                                c.lineTo(x - 30, y2 + 25);
                                c.moveTo(x, y);
                                c.fillText(extra, x - 30 - (width / 2), y2 + 55)
                                ////-----------------------


                                //Draw up and down
                            } 
                            else
                            {
                                downDrawn = false;

                                //Draw down function-------
                                var width = c.measureText(extra).width; 

                                c.moveTo(x - 30, y2);
                                c.lineTo(x - 30, y2 + 25);
                                c.moveTo(x, y);
                                c.fillText(extra, x - 30 - (width / 2), y2 + 55)
                                ////-----------------------

                                if (i == 0)
                                {
                                //Draw Side function-------
                                var width = c.measureText(extra).width; 
                                
                                c.moveTo(x - 30, y2);
                                c.lineTo(x - 30 - 30, y2);
                                c.fillText(extra, x - 30 - 30 - width, y2 + 10);
                                c.moveTo(x, y);
                                //-----------------------
                                }
                                else
                                {
                                    //Draw Right function-------
                                    var width = c.measureText(extra).width; 

                                    c.moveTo(x - 30, y2);
                                    c.lineTo(x, y2);
                                    c.fillText(extra, x, y2 + 10);
                                    c.moveTo(x, y);
                                    //-----------------------
                                }

                            }
                        }
                        else if (numOfExtra == 3)
                        {
                            upDrawn = true;
                            downDrawn = true;

                            //Draw up function-------
                            var width = c.measureText(extra).width; 
                                
                            c.moveTo(x - 30, y2);
                            c.lineTo(x - 30, y2 - 30);
                            c.fillText(extra, x - 30 - (width / 2), y2 - 35);
                            c.moveTo(x, y);
                            //-----------------------

                            //Draw down function-------
                            var width = c.measureText(extra).width; 

                            c.moveTo(x - 30, y2);
                            c.lineTo(x - 30, y2 + 25);
                            c.moveTo(x, y);
                            c.fillText(extra, x - 30 - (width / 2), y2 + 55)
                            ////-----------------------

                            if (i == 0)
                            {
                            //Draw Side function-------
                            var width = c.measureText(extra).width; 
                            
                            c.moveTo(x - 30, y2);
                            c.lineTo(x - 30 - 30, y2);
                            c.fillText(extra, x - 30 - 30 - width, y2 + 10);
                            c.moveTo(x, y);
                            //-----------------------
                            }
                            else
                            {
                                //Draw Right function-------
                                var width = c.measureText(extra).width; 

                                c.moveTo(x - 30, y2);
                                c.lineTo(x, y2);
                                c.fillText(extra, x, y2 + 10);
                                c.moveTo(x, y);
                                //-----------------------
                            }

                        }
                    }
                }
            }

            if (y == -30)
            {
                y = 0;
            }
            else
            {
                y = -30;
            }

            x += 30;

        }
    }

    c.stroke();
    c.translate(0, 100);
    c.clearRect(0, 0, canvas.width, canvas.height);
}


function tempDrawSkeletal(carbons)
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
