var elementLinkedList;
var elementCount = 0;
var uniqueElementCount = 0;

var m;
var root;

//The main entry point for the displayed formula model functions.
function createDisplayedFormula(userInput)
{
    var tempElementHolder;
    var numOfElement;
    elementCount = 0;
    elementLinkedList = null;

    userInput = userInput + "  ";

    //Checks if an element entered by the user is exists, and is in the correct format.
    for (i = 0; i < userInput.length; i++)
    {
        tempElementHolder = userInput[i] + userInput[i + 1];

        if (checkValidElement(tempElementHolder))
        {
            if (isNaN(userInput[i + 2]))
            {
                elementLinkedList = new element(tempElementHolder, 1, elementLinkedList)
                elementCount++;
                i = i + 1;
            } 
            else
            {
                elementLinkedList = new element(tempElementHolder, userInput[i + 2], elementLinkedList)
                elementCount++;
                i = i + 2;
            }

        }
        else
        {
            tempElementHolder = userInput[i];

            if (checkValidElement(tempElementHolder))
            {
                if (isNaN(userInput[i + 1]))
                {
                    elementLinkedList = new element(tempElementHolder, 1, elementLinkedList)
                    elementCount++;
                } 
                else
                {
                    elementLinkedList = new element(tempElementHolder, userInput[i + 1], elementLinkedList)
                    elementCount++;
                    i = i + 1;
                }
            }

            if (tempElementHolder == "C"){
                uniqueElementCount++;
            }
        }



    }

    console.log("ELELELE " + uniqueElementCount);
    elementLinkedList = reverseList(elementLinkedList);

    /*
    for (i = 0; i < elementCount; i++)
    {
        console.log("Element:");
        console.log(elementLinkedList.elementID);
        if (elementLinkedList.elementFrequency == " "){
            console.log(1);
        }
        else
        {
            console.log(elementLinkedList.elementFrequency);
        }

        elementLinkedList = elementLinkedList.next;

    } */
    m = null;
    root = true;
    console.log("m " + m);
    buildMolecule(elementLinkedList)


    return [false, "Run Succesfull"];
}

function reverseList(list)
{
    l = list;
    var reversed = new element(l.elementID, l.elementFrequency);
    l = l.next;
    while (l != null)
    {
        var temp = l;
        reversed = new element(temp.elementID, temp.elementFrequency, reversed);
        l = l.next;
    }

    return reversed;
}

function getOuterShell(atomicNumber)
{
    var shellConfig = getBohrElectronStructure(atomicNumber);
    var shells = shellConfig[0];
    var outerShell;

    for (var i = 0; i < shells.length; i++)
    {
        console.log(shells[i]);
        if (shells[i] == 0) { 
            break;
        } 
        else
        {
            outerShell = shells[i];
        }
    }

    return outerShell;
}

function buildMolecule(elementLinkedList)
{
    //clearCanvas();
    console.log("loool" + elementLinkedList.elementID);

    //Get the current element data.
    var currentElement = elementLinkedList.elementID;
    var currentElementFeq = elementLinkedList.elementFrequency;

    var currentElementData = getElementData(currentElement);
    var atomicNum = currentElementData[2];
    var outerShellConfig = getOuterShell(atomicNum);

    if (root)
    {
        console.log("yeet");
        m = new molecule(currentElement, outerShellConfig);
        root = false;
    }

    //Get the next elements data.
    if (elementLinkedList.next != null)
    {

        var elementLinkedList = elementLinkedList.next;

        var nElement = elementLinkedList.elementID;
        var nElementFreq = elementLinkedList.elementFrequency;
    
        var nElementData = getElementData(nElement);
        var nNum = nElementData[2];
        var nouterShellConfig = getOuterShell(nNum);
        
        if (nElementFreq != 1 && nElementFreq != 2 && nElementFreq != 3 && nElementFreq != 4)
        {
            nElementFreq = 1;
        }

        console.log("poggers '" + nElementFreq + "'");

        if (nElementFreq == 1)
        {
            console.log("dasdasda");
                m.u = new molecule(nElement, nouterShellConfig);

                console.log(m.u);
        } 
        else if (nElementFreq == 2)
        {
            console.log("wot");
                m.u = new molecule(nElement, nouterShellConfig);
                m.d = new molecule(nElement, nouterShellConfig);
        }
        else if (nElementFreq == 3)
        {
            console.log("chef");
                m.u = new molecule(nElement, nouterShellConfig);
                m.d = new molecule(nElement, nouterShellConfig);

                console.log(m.u);
                console.log(m.d);

                if (m.l == null)
                {
                    m.l = new molecule(nElement, nouterShellConfig);
                    console.log(m.l);
                }
                else
                {
                    m.r = new molecule(nElement, nouterShellConfig);
                    console.log(m.r);
                }
        }
        else if (nElementFreq == 4)
        {
            m.u = new molecule(nElement, nouterShellConfig);
            m.d = new molecule(nElement, nouterShellConfig);
            m.l = new molecule(nElement, nouterShellConfig);
            m.r = new molecule(nElement, nouterShellConfig);
        }
    }
    

    if (elementLinkedList.next != null)
    {
        console.log("toast");
        elementLinkedList = elementLinkedList.next;
        currentElement = elementLinkedList.elementID;

        currentElementData = getElementData(currentElement);
        atomicNum = currentElementData[2];
        outerShellConfig = getOuterShell(atomicNum);

        var temp = m;
        var newM = new molecule(currentElement, outerShellConfig, m);

        m = newM;
        buildMolecule(elementLinkedList);
    }

    drawDisplayed(m);
}

function drawDisplayed(molecule)
{
    m = molecule;

    /*
    while (m != null)
    {
        console.log("up: " + m.u);
        console.log("down: " + m.d);
        console.log("right: " + m.r);
        console.log("left: " + m.l);

        m = m.l;
    }*/

    var canvas = document.getElementById("displayCanvas");
    var c = canvas.getContext("2d");

    var x = canvas.width / 2;
    var y = canvas.height / 2;


    c.translate(x, y);

    for (var i = 0; i < uniqueElementCount; i++)
    {
        c.font = "30px Arial";
        c.fillStyle = "black";
        c.fillText(m.element, 0, 0);

        if (m.l != null)
        {
            var width = c.measureText(m.l.element).width;
            var height = 15;
            c.translate(-width - 30, 0);

            c.fillText(m.l.element, 0 , 0);

            c.translate(width, -(height / 2) - 4);

            c.beginPath();
            c.moveTo(0,0);
            c.lineTo(30, 0);
            c.stroke();

            c.translate(30, (height / 2) + 4)
        }

        if (m.r != null)
        {
            var width = c.measureText(m.r.element).width * 2;
            var height = 15;
            c.translate(width + 30, 0);

            c.fillText(m.l.element, 0 , 0);

            c.translate(-width / 2, (height / 4) + 4);

            c.beginPath();
            c.moveTo(0,0);
            c.lineTo(30, 0);
            c.stroke();

            c.translate(-30 -width / 2, -(height / 4) - 4)
        }

        if (m.u != null)
        {
            var width = c.measureText(m.u.element).width;
            var height = 25;
            c.translate(0, -height - 30);

            c.fillText(m.l.element, 0 , 0);

            c.translate(width / 2, height / 4 - 4);

            c.beginPath();
            c.moveTo(0,0);
            c.lineTo(0, 30);
            c.stroke();

            c.translate(-(width / 2), 30)
        }

        if (m.d != null)
        {
            c.translate(0, 25);
            var width = c.measureText(m.u.element).width;
            var height = 25;
            c.translate(0, height + 30);

            c.fillText(m.l.element, 0 , 0);

            c.translate(width / 2, -height + 4);

            c.beginPath();
            c.moveTo(0,0);
            c.lineTo(0, -30);
            c.stroke();

            c.translate(-(width / 2), -30 - 25)
        }

    }

    //c.font = "30px Arial";
    //c.fillStyle = "black";
    //c.fillText(m.element, 0, 0);



}

function drawMolecule(m)
{
    
}


class element {
    constructor(elementID, elementFrequency, next = null) {
        this.elementID = elementID,
        this.elementFrequency = elementFrequency,
        this.next = next;                
    }
}

class molecule{
    constructor(element, aBonds = 0, l = null, r = null, u = null, d = null, er = null, el = null)
    {
        this.element = element,
        this.aBonds = aBonds,
        this.l = l;
        this.r = r;
        this.u = u;
        this.d = d;
        this.er = er;
        this.el = el;
    }
}


