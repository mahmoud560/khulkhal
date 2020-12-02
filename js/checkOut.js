//checking for errors Checkout
let promocodeInput = document.getElementsByClassName('promotion-check')[0].firstElementChild
let applyCodeBtn = promocodeInput.nextElementSibling

let allCodes = ''
let usedCodes = JSON.parse(localStorage.getItem('usedCodes'))
if(usedCodes != null){
   allCodes = [...usedCodes]
}else{
   allCodes = []
}

applyCodeBtn.addEventListener('click', (event) => {
    let buttonclicked = event.target
   event.preventDefault()
    let inputValue = promocodeInput.value
    
   if(inputValue == ''){
       promocodeInput.style.border = '2px solid red'
       promocodeInput.style.color = 'red'
       promocodeInput.placeholder = 'empty field!'
       
   } else if(inputValue === 'startCode'){
      
        let find = allCodes.find( item => item === inputValue)
        if(find === inputValue){
        promocodeInput.style.border = '2px solid red'
       promocodeInput.style.color = 'red'
      promocodeInput.value = ''
        promocodeInput.placeholder = 'you already used this code'
        }else{ 
         promocodeInput.style.border = '2px solid green'
       promocodeInput.style.color = 'green'
        promocodeInput.value = ''
        promocodeInput.placeholder = 'code applied'
       let total = parseFloat(document.getElementsByClassName('total-num')[0].innerText)
       let newtotal = total-100
       document.getElementsByClassName('total-num')[0].innerText = newtotal
       allCodes = [...allCodes,inputValue]
       localStorage.setItem('usedCodes',JSON.stringify(allCodes)) 
        }
       
  
   } else if(inputValue === 'startCode2'){
        
         let find = allCodes.find( item => item === inputValue)
        if(find === inputValue){
        promocodeInput.style.border = '2px solid red'
       promocodeInput.style.color = 'red'
      promocodeInput.value = ''
        promocodeInput.placeholder = 'you already used this code'
        }else{ 
         promocodeInput.style.border = '2px solid green'
       promocodeInput.style.color = 'green'
         promocodeInput.value = ''
        promocodeInput.placeholder = 'code applied'
       let total = parseFloat(document.getElementsByClassName('total-num')[0].innerText)
       let newtotal = total-100
       document.getElementsByClassName('total-num')[0].innerText = newtotal
       allCodes = [...allCodes,inputValue]
       localStorage.setItem('usedCodes',JSON.stringify(allCodes)) 
        }
        
       
   }
    else{
       promocodeInput.style.border = '2px solid red'
       promocodeInput.style.color = 'red'
       promocodeInput.value = ''
        promocodeInput.placeholder = 'invalid code!'
      
   }
})
//end of checking for errors Checkout





//errors in Checkout Page
let confirmOrderBtn = document.getElementsByClassName('confirmOrderBtn')[0]
confirmOrderBtn.addEventListener('click', (e) => {
    let email = document.getElementsByClassName('email')[0]
    let fname = document.getElementsByClassName('fname')[0]
    let city = document.getElementsByClassName('city')[0]
    let district = document.getElementsByClassName('district')[0]
    let streetCompound = document.getElementsByClassName('street-compound')[0]
    let address = document.getElementsByClassName('address')[0]
    let phone = document.getElementsByClassName('phone')[0]
    let error = document.getElementsByClassName('errorCheck')[0]
   
    if(email.value == '' || fname.value == '' || city.value == '' || district.value == '' || streetCompound.value == '' || address.value == '' || phone.value == ''){
        e.preventDefault()
        error.innerHTML = 'You can not have empty fields!'
        error.style.color = 'red'
    }else if(phone.value.length != 11){
        e.preventDefault()
        error.innerHTML = 'the phone field has to contain 11 numbers!'
        error.style.color = 'red'
    }
})
//end of errors in Checkout Page





































