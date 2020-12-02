<?php session_start(); ?>


<?php include_once 'headerGetInTouchUser.php'; ?>



 







    <h5 class="text-center getInTouchTitle">Never hesitate to get in touch with us!</h5>

    

  <form action="../includes/getIntouch.php" method="post">
 
    <div class="getInTouch">
    <span>
    <p class="emailGetInTouch"> <input type="email" name="emailGetInTouch" placeholder="your email" value="<?php echo  $_SESSION['$email'];?>"> </p>
     <h1>your Message:</h1>
     <p class="messageGetInTouch"> <textarea name="message" rows="7" cols="38"></textarea> </p>
     <span>
     <button type="submit" name="sendMessage">SEND</button>
     </span>
     </span>
     </div>
  </form>
  
  

  
  
  
  









<?php include_once 'accountFooter.php';?>