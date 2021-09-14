const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
var message=document.querySelector('#error-msg');
alert(billAmount);
checkButton.addEventListener("click",function validateBillandCashAmount()
{
if(billAmount.value>0)
{
    if(cashGiven>=billAmount)
    {

    }
    else
    {
        message("Do u wanna wash utensils");
    }
}
else{
message("Invalid bill amount")


}


}

)
function message(msg)
{
message.innerHTML = msg;

}
