function updateCaseNumber(isIncrease){
    const caseNumberElement = document.getElementById('case-number-field')
    const previousCaseNumberString = caseNumberElement.value
    const previousCaseNumber = parseInt(previousCaseNumberString)
 
    let newCaseNumber;
    if(isIncrease == true){
       newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberElement.value = newCaseNumber;
    return newCaseNumber;
}

function caseTotalAmount(caseNumber){
    const caseTotalAmountElemet = document.getElementById('total-case-amount')
    const CaseTotalPrice = caseNumber * 59;
    caseTotalAmountElemet.innerText = CaseTotalPrice;
}



document.getElementById('btn-plus-case').addEventListener('click', function(){
  const newCaseNumber = updateCaseNumber(true);

  caseTotalAmount(newCaseNumber);




})

document.getElementById('btn-minus-case').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    caseTotalAmount(newCaseNumber)
  
  })
