var elementLinkedList;
var elementCount = 0;

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
            console.log(userInput[1 + 2])
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
        }



    }


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

    }



    return [false, "Run Succesfull"];
}


class element {
    constructor(elementID, elementFrequency, next = null) {
        this.elementID = elementID,
        this.elementFrequency = elementFrequency,
        this.next = next;                
    }
}


