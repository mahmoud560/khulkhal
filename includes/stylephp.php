
<?php
header('Content_Typr : text/css');
?>


/***php forms****/

.errorFormempty{
    color: red;
    font-size:7rem;
    justify-content:sans-serif;
    font-family:cursive;
}

.error{
color:red;
font-family:sans-serif;
}

.succes{
    color: green;
}

.center{
width:100%;
display:flex;
justify-content:center;

}



.goBackForm{
 width:200px !important;
 height:60px !important;
 background-color:black !important;
 color:white !important;
 position:absolute !important:
 border:none !important;
 text-transform:uppercase;
 cursor:pointer;
}

.goBackForm:hover{
transform:scale(1.1);
transition: all 0.2s ease-in;
}




/**sfterCheckStyle**/


.afterCheck{
 margin-top: 4rem;
    width: 100%;
}

.afterCheck h1{
    font-size: 1.5rem;
    letter-spacing: 5px;
    color: rgba(0,0,60);
}

.afterCheck p{
    color: var(--primary-color);
    font-size: 1.2rem;
}


.buttonsDiv{
  display: flex;
    justify-content: space-around;
    align-content: center;
    margin-top: 5rem;
}

.continueShopping{
  width: 200px;
    height: 40px;
    background-color: rgba(0,0,60);
    border-radius: 3px;
   display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    list-style: none;
}

.home{
   width: 200px;
    height: 40px;
    background-color: rgba(0,0,60);
    border-radius: 3px;
   display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    list-style: none;
}




.continueShopping:hover{
      background-color: transparent;
      border: 1px solid  rgba(0,0,60);
   list-style:none;
   text-decoration: none !important;
   color: black;
}


.home:hover{
      background-color: transparent;
      border: 1px solid  rgba(0,0,60);
       list-style:none;
       text-decoration: none !important;
       color: black;
}
/**end of sfterCheckStyle**/


/****footer**/
.sticky-footer {
background-color: black;
width: 100%;
height: 300px;
justify-content: center;
align-items: center;
align-content: center;
position: fixed;
bottom: 0;
z-index: -5;
color: white;
font-size: 10px;
justify-content: center;
align-items: center;
}

.section-footer {
padding: 0;
}



.sticky-footer ul {
justify-content: center;
align-items: center;
list-style: none;
position: absolute;
bottom: 130px;
left: 25%;  
}

.sticky-footer ul li{
cursor: pointer;
font-size: 13px;
}


.sticky-footer ul li:hover{
color: rgba(250,250,250,0.3);
}

.inst-footer {
align-items: center;
justify-content: center;
position: absolute;
bottom: 60px;
left: 25%;
color: white;
}

.inst-footer:hover {
color: white;
}

.face-footer {
align-items: center;
justify-content: center;
position: absolute;
bottom:60px;
left: 28%;
color: white
}


.face-footer:hover {
color: white;
}


#copy-icon {
position: absolute;
bottom: 10px;
left: 5%;
font-size: 10px;
}


@media (max-width:1000px) {
    .face-footer {
        padding-left: 10px;
    }
}

@media (max-width:500px) {
    .face-footer {
        padding-left: 30px;
    }
}


/***end of footer**/
/***end of php forms****/

