





if(window.location.href == 'http://localhost:8888/test.check.php/usersWeb/myAccount.php'){ 
//styling myAccount/my orders dynamically

   let status = [...document.getElementsByClassName('orderStatus')]
   status.forEach((status) => {
      if(status.innerHTML === 'canceled'){
         let statusPar = status.parentElement
        statusPar.style.color = 'red'
        statusPar.style.fontSize = '.8rem'
     }
       if(status.innerHTML === 'received'){
           let statusPar = status.parentElement
        statusPar.style.color = 'green'
        statusPar.style.fontSize = '.8rem'
       }
       
       if(status.innerHTML === 'shipped'){
        let statusPar = status.parentElement
        statusPar.style.color = 'black'
        statusPar.style.fontSize = '.8rem'
       }
       
       if(status.innerHTML === 'preparing for shipment'){
        let statusPar = status.parentElement
        statusPar.style.color = 'black'
        statusPar.style.fontSize = '.8rem'
       }
   }
 )




//end of styling myAccount/my orders dynamically




//editing my account
    
 
let tableRow = document.getElementsByClassName('tableEdit')[0]
let body = document.getElementsByTagName('body')[0]
let oldPwd = tableRow.firstElementChild.innerText
let oldNewsletter = oldPwd.nextElementSibling

body.addEventListener('click', (event) => {
      let buttonclicked = event.target
     
   if(buttonclicked.classList.contains('editIconName')){
    buttonclicked.parentElement.remove()
       let nameInput = document.createElement('th')
       nameInput.innerHTML = '<form  class="edit" id="submitName" action="../includes/editAcc.php" method="POST"><p class="editName"><input class="editing" type="text" name="newName"></p> <input type="hidden" name="oldpwdedit"> <input type="hidden" name="username"> </form>'
       tableRow.insertBefore(nameInput,tableRow.firstElementChild)
       
       
       
        //edit Btn and submitting form
         let editBtn = document.getElementsByClassName('editBtn')[0]
       editBtn.classList.add('showeditBtn')
        editBtn.addEventListener('click', (e) => {
          let formEdit = document.getElementsByClassName('edit')[0]
           //values of acc for edit
           let oldPwdInput = document.getElementsByName('oldpwdedit')[0]
           oldPwdInput.value = oldPwd
            let usernameInput = document.getElementsByName('username')[0]
            let username = document.getElementsByClassName('myAccName')[0].innerText
            usernameInput.value = username
            //end of values of acc for edit
              let newName = document.getElementsByName('newName')[0]
                 if(newName.value == ''){
                  newName.placeholder = 'empty!'
              }else if(newName.value.length <= 5){
               newName.value = ''
                  newName.placeholder = '5 characters!'
                       
                }else{
                    formEdit.submit()
              }
        
       })
              //end of edit Btn and submitting form
       
       
       body.addEventListener('click',(event) => {
           let editName = document.getElementsByClassName('edit')[0]
          let newName = editName.firstElementChild.firstElementChild.value
          if(newName != ''){
             if(!event.target.classList.contains('editing') && !event.target.classList.contains('editBtn')){
                editName.parentElement.remove()
                 let edittedName = document.createElement('th')
                 edittedName.innerHTML = `${newName} <i class="far fa-edit fa-1x editIconName"></i>`
                 tableRow.insertBefore(edittedName,tableRow.firstElementChild)
                 
             }
          } 
       })
   } 
    
   if(buttonclicked.classList.contains('editIconNews')) {
        buttonclicked.parentElement.remove()
        let newsInput =  document.createElement('th')
        newsInput.innerHTML = '<form id="submitNews" class="edit" action="../includes/editAcc.php" method="POST"><p class="editNews"><select id="newletters" class="news" name="editNews"><option value="on">on</option><option value="off">off</option></select></p><input type="hidden" name="oldnewseditpwd"><input type="hidden" name="username"></form>'
        tableRow.appendChild(newsInput)
       
      
       
       
        //edit Btn and submitting form
         let editBtn = document.getElementsByClassName('editBtn')[0]
       editBtn.classList.add('showeditBtn')
        editBtn.addEventListener('click', (e) => {
          let formEdit = document.getElementsByClassName('edit')[0]
           //values of acc for edit
           let oldPwdInput = document.getElementsByName('oldnewseditpwd')[0]
           oldPwdInput.value = oldPwd
            let usernameInput = document.getElementsByName('username')[0]
            let username = document.getElementsByClassName('myAccName')[0].innerText
            usernameInput.value = username
            //end of values of acc for edit
             formEdit.submit()
        
       })
              //end of edit Btn and submitting form
       
       

        body.addEventListener('click', (event) => {
            let editNews = document.getElementsByClassName('editNews')[0]
             let newsNewValue = editNews.firstElementChild.value
           if(!event.target.classList.contains('news') && !event.target.classList.contains('editBtn')){
               editNews.parentElement.parentElement.remove()
               let newNewsletter = document.createElement('th')
               newNewsletter.innerHTML = `${newsNewValue}     <i class="far fa-edit fa-1x editIconNews"></i>`
               tableRow.appendChild(newNewsletter)
           }
        })
    }
    
})

//end of editing my account




//deleting my account
let deleteAccBtn = document.getElementsByClassName('btn-delete-Acc')[0]
let deleteConfirmOverlay = document.getElementsByClassName('delete-Acc-confirmation-Overly')[0]
let trasnparentConfirmObverlay = document.getElementsByClassName('pop-up-delete-confirm')[0]
let confirmDelete = document.getElementsByClassName('pop-up-delete-confirm-1')[0]
let closePopUp = confirmDelete.firstElementChild
let userDontDelete = document.getElementsByClassName('dont-delete')[0]
let cancelIconParent = document.querySelectorAll('.fa-trash-alt')
let messsageForUser = confirmDelete.firstElementChild.nextElementSibling
let yesDeleteBtn = confirmDelete.lastElementChild.lastElementChild

deleteAccBtn.addEventListener('click', () => {
    messsageForUser.innerHTML = 'Just making sure that you understand: if you delete your account all the data and all promotions will be deleted and can not be redeemed afterwards!'
     messsageForUser.style.fontSize = '1rem'
     messsageForUser.style.height = '200px'
    yesDeleteBtn.style.visibility = 'visible'
    userDontDelete.style.visibility = 'visible'
    yesDeleteBtn.style.width = '100px'
    yesDeleteBtn.style.height = '20px'
    yesDeleteBtn.style.backgroundColor = 'red'
    yesDeleteBtn.innerHTML = 'Yes, delete'
    userDontDelete.innerHTML = 'do not delete'
    messsageForUser.style.color = 'black'
    deleteConfirmOverlay.classList.add('showdelete-Acc-confirmation-Overly')
    trasnparentConfirmObverlay.classList.add('showpop-up-delete-confirm')
    confirmDelete.classList.add('show-pop-delet-confirm-1')
    yesDeleteBtn.name = 'delete'
})

closePopUp.addEventListener('click', () => {
    deleteConfirmOverlay.classList.remove('showdelete-Acc-confirmation-Overly')
    trasnparentConfirmObverlay.classList.remove('showpop-up-delete-confirm')
    confirmDelete.classList.remove('show-pop-delet-confirm-1')
})

userDontDelete.addEventListener('click', (e) => {
    e.target.preventDefault
     deleteConfirmOverlay.classList.remove('showdelete-Acc-confirmation-Overly')
    trasnparentConfirmObverlay.classList.remove('showpop-up-delete-confirm')
    confirmDelete.classList.remove('show-pop-delet-confirm-1')
})
//end of  deleting my account


 


//cancel Order from My Account

cancelIconParent.forEach(icon => {
    icon.addEventListener('click', (e) => {
        let buttonclicked = e.target
       let orderStatus = buttonclicked.parentElement.previousElementSibling.previousElementSibling
       let form = document.getElementsByClassName('formDelete')[0]
       let orderId = orderStatus.parentElement.firstElementChild.innerHTML
      if(orderStatus.innerText == 'preparing for shipment' || orderStatus.innerText == 'shipped'){
            messsageForUser.innerHTML = 'Are you sure You want to cancel this order?'
           messsageForUser.style.fontSize = '1rem'
          messsageForUser.style.height = '100px'
          yesDeleteBtn.innerHTML = "Yes" 
          userDontDelete.innerHTML = "No"
           yesDeleteBtn.style.width = '100px'
          yesDeleteBtn.style.height = '20px'
          yesDeleteBtn.style.backgroundColor = 'red'
            deleteConfirmOverlay.classList.add('showdelete-Acc-confirmation-Overly')
    trasnparentConfirmObverlay.classList.add('showpop-up-delete-confirm')
  confirmDelete.classList.add('show-pop-delet-confirm-1')
          yesDeleteBtn.style.visibility = 'visible'
          userDontDelete.style.visibility = 'visible'
          yesDeleteBtn.name = 'deleteOrder'
        let idInput = document.getElementsByName('idOrder')[0]
        idInput.value = orderId
          
        
          
      } else if(orderStatus.innerText === 'received'){
          messsageForUser.style.color = 'rgba(0,0,0,.9)'
          messsageForUser.style.fontSize = '1rem'
        messsageForUser.innerHTML = 'This is a received Order'
           messsageForUser.style.height = '100px'
        yesDeleteBtn.innerHTML = 'Get In Touch'
        yesDeleteBtn.style.visibility = 'visible'
          yesDeleteBtn.style.width = '70%'
          yesDeleteBtn.style.backgroundColor = 'black'
          userDontDelete.style.visibility = 'hidden'
    deleteConfirmOverlay.classList.add('showdelete-Acc-confirmation-Overly')
    trasnparentConfirmObverlay.classList.add('showpop-up-delete-confirm')
  confirmDelete.classList.add('show-pop-delet-confirm-1')
          
         yesDeleteBtn.addEventListener('click', (e) => {
              
              e.preventDefault()
            window.location.replace ('http://localhost:8888/test.check.php/usersWeb/getInTouchUser.php')
              
          })
          
          
      } else if(orderStatus.innerText === 'canceled'){
         e.preventDefault()
      }
    })
})

//end of cancel Order from My Account




//setting the number before 'left fot your gift' dynamically
let inputValue = document.getElementsByClassName('sliderValue')[0].parentElement.lastElementChild
let sliderNum = document.getElementsByClassName('sliderValue')[0].firstElementChild
let slider = document.getElementsByClassName('sliderValue')[0].parentElement.parentElement
sliderNum.innerHTML = inputValue.value
inputValue.oninput =  ((e) => {
    let value = parseFloat(e.target.value)
    sliderNum.innerHTML = value 
    sliderNum.style.left = (value/30) + '%'
})

    
slider.addEventListener('mouseover',() => {
    sliderNum.style.transform = 'scale(1)'
})
    
slider.addEventListener('mouseout',() => {
    sliderNum.style.transform = 'scale(0)'
})

inputValue.onblur = (() => {
    sliderNum.style.transform = 'scale(0)'
})
    
 
let num = document.getElementsByClassName('loyaltySen')[0].firstElementChild.firstElementChild
let numLeft = 3000 - (inputValue.value)
if(numLeft >= 1000){
    num.innerHTML = (numLeft/1000) + 'K'
}
else{ 
num.innerHTML = numLeft
}
//end of setting the number before 'left fot your gift' dynamically

}




let nav = document.getElementsByClassName('navbar')[0]
let code = document.getElementsByClassName('code')[0]
let hamburgerNav = document.getElementsByClassName('menu-wrap')[0]
let closeCodeBtn = code.parentElement.lastElementChild
let myAccContent = document.getElementsByClassName('myAccount')[0]
if(code.innerText != ''){
    code.parentElement.parentElement.style.backgroundColor = 'rgba(220,220,220,1)'
    code.parentElement.parentElement.style.visibility = 'visible'
    code.parentElement.parentElement.style.height = '2rem'
    nav.style.top = '2rem'
        code.parentElement.parentElement.style.fontSize= '1rem'
        code.parentElement.parentElement.style.color = 'black'
      hamburgerNav.style.top = '2rem'
if(window.location.href === 'http://localhost:8888/test.check.php/usersWeb/myAccount.php'){ 
         myAccContent.style.top = '2rem'
         nav.style.top = '2rem'
         }
     closeCodeBtn.addEventListener('click', () => {
             code.parentElement.parentElement.style.visibility = 'hidden'
             hamburgerNav.style.top = '0'
           nav.style.top = '0'
         if(window.location.href === 'http://localhost:8888/test.check.php/usersWeb/myAccount.php'){ 
         myAccContent.style.top = '0'
         }
     })
    
}else{
    code.parentElement.parentElement.style.visibility = 'hidden'
}












