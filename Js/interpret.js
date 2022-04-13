//Checks whether the argument element exists within the periodic table.
//Checks for both periodic symbols, as well as element names.
function checkValidElement(userInput){

    for (var i = 0; i < elements.length; i++)
    {
        console.log(userInput);
        if (userInput == elements[i][0] || userInput.toLowerCase() == elements[i][1]){
            return true;
        }
    }
    
    return false;
}

function getElementData(userInput)
{
    for (var i = 0; i < elements.length; i++)
    {
        if (userInput == elements[i][0] || userInput.toLowerCase() == elements[i][1]){
            return elements[i];
        }
    }
}
