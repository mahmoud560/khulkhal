//greeting New User
if(window.location.href === 'http://localhost:8888/test.check.php/usersWeb/accountHome.php'){ 
let GreetNewUser = document.getElementsByClassName('GreetingForNew')[0];
let GreetNewUserOverlay = document.getElementsByClassName('greetingFormNewOverlay')[0];
let transparentGreet = document.getElementsByClassName('transparentGreet')[0];
 setTimeout(() => {
     GreetNewUser.classList.add('showGreet')
    GreetNewUserOverlay.classList.add('showGreetOverlay')
     transparentGreet.classList.add('showGreetOverlay')
},2500);

let closeGreet = GreetNewUser.firstElementChild
closeGreet.addEventListener('click', () => {
    GreetNewUser.classList.add('hidingGret')
    GreetNewUser.classList.remove('showGreet')
    GreetNewUserOverlay.classList.remove('showGreetOverlay')
    transparentGreet.classList.remove('showGreetOverlay')                       
});
    

}

//end of greeting New User
