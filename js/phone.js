//console.log('phone file connected')
function updatePhoneNumber(isIncrease){
  const phoneNumberElement = document.getElementById('phone-number-field')
  const phoneNumberString = phoneNumberElement.value
  const previousPhoneNumber = parseInt(phoneNumberString)

  let newPhoneNumber;
  if(isIncrease){
    newPhoneNumber = previousPhoneNumber + 1;

  }
  else{
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberElement.value = newPhoneNumber;
  return newPhoneNumber;

}

function totalPhonePrice (phoneAmount){
  const totalAmountElement = document.getElementById('total-phone-amount')
  totalAmountElement.innerText = phoneAmount * 1219

}

document.getElementById('btn-plus-phone').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);

    totalPhonePrice(newPhoneNumber);
})

document.getElementById('btn-minus-phone').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(false);

   totalPhonePrice(newPhoneNumber)
})