<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="utf-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel=stylesheet href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 <link rel=stylesheet href="css/longssss.css">
  <link rel= stylesheet href="css/mains.css">
   <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
  <link rel="stylesheet" href="fontawesome-free-5.14.0-web/css/all.css">
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
   
   
   
   
    <body class="bodyGetInTouch">
           
            <!*********Cart-Sideeeee************/>
    <div class="cart-overlay">
    <div class="cart-side col-lg-3 col-md-6 col-12" >
        <span class="close-side">
            <i class="far fa-window-close fa-1x" id="side-close"></i>
        </span>
        <h2 class="text-center">Your Cart</h2>
        <div class="cart-content col-12">

        </div>
    <div class="cart-footer text-center">
        <h3>Your Total: EGP <span class="side-total">0</span></h3>
    <div class="div-btn row col-12">
        <span class="side-transport-btn  text-center col-10 order-1" id="transport-btn">Remove All</span>
        <span class="side-check-btn text-center col-10 order-2"><a href="checkout.php">Checkout</a></span>
    </div>
     </div>
        </div>
    </div>
         
         <i class="fas fa-shopping-bag"></i>
          <!******* slider img*********/>
         
       
         <! Navbar***********/>
         
           <nav class="navbar col-12" >
    <div>
         <i class="fas fa-user fa-1x" id="createAccount"></i>
         <div class="accountMenu">
             <p>Create an Account</p>
             <p>Sign in</p>
         </div>
        <i class="fas fa-shopping-bag fa-2x" id="Show-cart"><div class="cartLength">1</div></i>
    </div>
               <img class="img" src="images/reallogo.png">
        <div class="menu-wrap">
            <input type="checkbox" class="toggler">
            <div class="hamburger"><div></div></div>
            <div class="menu">
                 <div>
                    <div>
                       <ul>
                           <li><a href="home.php">Home</a></li>
                           <li><a href="necklaces.php">Necklaces</a></li>
                           <li><a href="rings.php">Rings</a></li>
                           <li><a href="earrings.php">Earrings</a></li>
                           <li><a href="anklets.php">Anklets</a></li>
                           <li><a href="bracelets.php">Bracelets</a></li>
                           <li><a href="allJewel.php">All Jewelry</a></li>
                            <li><a href="sizing.html">Ring Sizing</a></li>
                             <li><a href="jewlerycare.html">Jewelery Care</a></li>
                        </ul>
                        <a class="inst-icon" href="https://www.instagram.com/khulkhal_jewelry/" target="blank"> <i class="fab fa-instagram fa-1x"> </i> </a>
                    </div>
                </div>
            </div>
        </div>
        </nav>
        
        
        <!**createAccount**/>
         <?php 
       include 'includes/createAccount.php'
    ?>
        <!**end of createAccount**/>
        
         
        <!****LOG IN****/>
        <?php
           include 'includes/login.php'
           ?>
        <!***end of log in**/>
        
        <!***forgot pwd****/>
        <?php 
        include_once 'includes/forgottenPwd.php'
        ?>
        <!***end of forgot pwd****/>
        
   <!*****Collections********/>
   <div class="colections">
      <i class="fas fa-times fa-3x"></i>
       <ul>
           <li>Summer collection</li>
           <li>Yes colection</li>
           <li>collection</li>
           <li>colection</li>
       </ul>
   </div>    
   <!*****End of Collections********/>   