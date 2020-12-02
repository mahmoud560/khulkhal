<?php session_start(); ?>


<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="utf-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel=stylesheet href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 <link rel=stylesheet href="../css/longssss.css">
  <link rel= stylesheet href="../css/mains.css">
  <link rel= stylesheet href="../css/users.css">
   <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
  <link rel="stylesheet" href="../fontawesome-free-5.14.0-web/css/all.css">
 <script src="https://code.jquery.com/jquery-3.5.1.js"> </script>
 <script
  src="https://code.jquery.com/jquery-3.1.1.js"
  integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="
  crossorigin="anonymous"></script>
 <script type="text/javascript">
     var zero = 0;
     $(document).ready(function(){
        $(window).on("scroll",function(){
          $(".navbar").toggleClass("hide",$(window).scrollTop()
             > zero);
            zero = $(window).scrollTop();
        })
     })
    </script>
</head>
<body>
       
<?php 
    
    include_once 'chckinguserdata.php';
    
   if( $_SESSION['$username']) {
   include_once 'header.php'; 
   include_once 'chckinguserdata.php';
    include_once 'myAccountContent.php';
   include_once 'accountFooter.php';
        
   } 
    elseif( $_SESSION['$createdUser']){
        include_once 'accountCreateHeader.php';
        include_once 'myAccountNewUserContent.php';
        include_once 'accountFooter.php';
        
        
    }
    
    else {
        include_once 'header.php'; 
       echo '<h1 class="notLogged"> You are not logged in </h1>';
        include_once 'accountFooter.php';
   }
?>
 
 
 
