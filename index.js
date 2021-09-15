const billAmount=document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-msg");
var noOfNotes=document.querySelectorAll(".no-of-notes");
const availableNotes=[2000,500,100,20,10,5,1];
function showMessage(msg)
{
    message.style.display="block";
    message.innerHTML=msg;
}
function calculateChange(amountToBeReturn)
{
for(var i=0;i<availableNotes.length;i=i+1)
{

    const numberOfNotes=Math.trunc(amountToBeReturn/availableNotes[i]);
    amountToBeReturn=amountToBeReturn % availableNotes[i];
    noOfNotes[i].innerHTML=numberOfNotes;
 

}

}
checkButton.addEventListener("click",function validateBillandCashAmount()
{

    message.style.display="none";
    if(isNaN(billAmount.value) || isNaN(cashGiven.value) )
    {
        showMessage("It cannot be String");
    }
    else if(billAmount.value >0)    
    {
        if(cashGiven.value >= billAmount.value )
        {
            alert("hii seema");
            var amountToBeReturned=cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturned);


        }

        else
        {

            showMessage("Do u wanna wash plates");
        }


    }
    else
    {
        showMessage("Invalid bill amount");
    }
}
);


