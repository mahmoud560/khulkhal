<?php session_start(); ?>
  

<?php  include_once 'header.php'; ?>
   
 
        <section class="checkout">
            <div class="contact-info col-md-7 col-12 order-2 order-md-1">
                <form action="../includes/order.php" method="POST" class="form">
                   
                   
                    <?php
   $fullUrl = "http://$SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
   
  if(strpos($fullUrl, "order=empty") == true) {
        echo '<h5 class="error">You have to fill all the fields!!</h5>';
    }
    if(strpos($fullUrl, "order=email") == true) {
        echo '<h5 class="error">invalid Email!!</h5>';
    }
    if(strpos($fullUrl, "order=phone") == true) {
         echo '<h5 class="error">Phone has to contain 11 characters!!</h5>';
    }
    if(strpos($fullUrl, "order=charphone") == true) {
         echo '<h5 class="error">Phone can only include numbers!!</h5>';
    }
     if(strpos($fullUrl, "order=emailmax") == true) {
         echo '<h5 class="error">Email can not contain more than 100 characters!!</h5>';
    }
   if(strpos($fullUrl, "order=namemax") == true) {
         echo '<h5 class="error">Your first and your last names can not include more than 50 characters!!</h5>';
    }
    if(strpos($fullUrl, "order=citymax") == true) {
         echo '<h5 class="error">The name of your city can not include more than 50 characters!!</h5>';
    }
    if(strpos($fullUrl, "order=districtmax") == true) {
         echo '<h5 class="error">The name of your district can not include more than 1000 characters!!</h5>';
    }
     if(strpos($fullUrl, "order=streetCompoundmax") == true) {
         echo '<h5 class="error">The name of your street/compound can not include more than 100 characters!!</h5>';
    }
     if(strpos($fullUrl, "order=addressmax") == true) {
         echo '<h5 class="error">your address can not include more than 500 characters!!</h5>';  
    } 
    
    ?>
                   <?php 
              
              include_once '../includes/db.php';
           $user =  $_SESSION['$username'];
           $pwd = $_SESSION['$password'];
              
    $sqlOrderInfo = "SELECT * FROM orders WHERE username = '$user' AND password = '$pwd'";
    $gettingOrderInfo = mysqli_query($connect ,  $sqlOrderInfo); 
    $orderInfo = mysqli_fetch_assoc($gettingOrderInfo);
    $_SESSION['$city'] = $orderInfo['city'];
    $_SESSION['$district'] = $orderInfo['district'];
    $_SESSION['$streetCompound'] = $orderInfo['streetCompound'];
    $_SESSION['$address'] = $orderInfo['address'];
    $_SESSION['$phone'] = $orderInfo['phone'];
                    
                    ?>
                   
                    <h1>Contact Information</h1>
                    <p>
                        <input type="email" name="email" placeholder="Email" class="email"  value="<?php   echo   $_SESSION['$email']; ?>">
                    </p>
                    <h1>Shipping Information</h1>
                    <p class="names">
                      <input type="text" name="fname" placeholder="First Name" class="fname"  value="<?php   echo   $_SESSION['$username']; ?>">
                      <input type="text" name="lname" placeholder="Last Name" class="lname"> (optional)
                    </p>
                    <p>
                        <input type="text" name="city" placeholder="City" class="city" value="<?php   echo   $_SESSION['$city']; ?>">
                    </p>
                     <p>
                        <input type="text" name="district" placeholder="District" class="district" value="<?php   echo   $_SESSION['$district']; ?>">
                    </p>
                      <p>
                        <input type="text" name="street-compound" placeholder="Street/Compound" class="street-compound" value="<?php   echo   $_SESSION['$streetCompound']; ?>">
                    </p>
                      <p>
                        <input type="text" name="address" placeholder="Address(building,floor,apartment)" class="address" value="<?php   echo   $_SESSION['$address']; ?>">
                    </p>
                    <p>
                        <input type="tel" name="phone" placeholder="Phone" class="phone" >
                    </p>
                      <input type="hidden" name="day" value="<?php echo date('Y-m-d H:i:s'); ?>" readonly="readonly">
                      <input type="hidden" name="piece" class="piece-check">
                      <input type="hidden" name="username" class="username" value="<?php echo $_SESSION['$username'];?>">
                      <input type="hidden" name="pwd" class="pwd" value="<?php echo $_SESSION['$password'];?>">
                       <input type="hidden" name="total" class="total">
                       <input type="hidden" name="received" class="received" value="preparing for shipment">
                      <input type="hidden" name="pieceForAcc" class="pieceForAcc">
                        <input type="hidden" name="costInput" class="costInput">
                    <p class="confirm-btn">
                   <button type="submit" name="submit" class="confirmOrderBtn">Confirm</button>
                    </p>
                   </form>
              <span class="customer-service">
                  <a class="privacy-policy" href="">Privacy Policy</a>
                  <a class="terms-conditions" href="">Terms and Conditions</a>
              </span>
            </div>
            <div class="items-info col-md-6 order-1 order-md-2 col-12">
              
              
              
                <!***dynamically added items****/>
                
            <section class="items-num col-md-6 col-12">
                <span>
                   <div class="Subtotal-check">
                    <h1>Subtotal</h1>
                    <h2>EGP <span class="sub-num">0</span></h2>
                    </div>
                    <div class="delivery-fees">
                    <h1>Delivery fees</h1>
                    <h2>0</h2>
                    </div>
                    <div class="delivery-time">
                        <span>Expected delivery time:</span>
                        <span>7-10 days</span> 
                    </div>
               </span>
                <form>
                   <p class="promotion-check">
                       <input type="text" placeholder="discount code?" class="discountCode">
                       <button class="apply-prom">Apply</button>
                   </p>
               </form>
               <div class="total">
                  <h1>Total</h1>
                  <h2>EGP <span class="total-num">0</span></h2>
               </div>
            </section>
            </div>
        </section>
       
 
 <?php include_once 'accountFooter.php'; ?>