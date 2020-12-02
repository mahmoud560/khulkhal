

 
 
 <?php include_once 'headerGetInTouch.php'; ?>
  
  
  
       <h5 class="getInTouchTitle text-center">Never hesitate to get in touch with us!</h5>

    

  <form action="getIntouch.php" method="post">
 
    <div class="getInTouch">
    <span>
    <p class="emailGetInTouch"> <input type="email" name="emailGetInTouch" placeholder="email"> </p>
     <h1>Message:</h1>
     <p class="messageGetInTouch"> <textarea name="message" rows="7" cols="38"></textarea> </p>
     <span>
     <button type="submit" name="sendMessage">SEND</button>
     </span>
     </span>
     </div>
  </form>
  
  
  <?php 



if(isset($_POST['sendMessage'])){
    include_once 'includes/db.php';
    
  
    $message =  mysqli_real_escape_string($connect , $_POST['message']);
    $emailGetInTouch = mysqli_real_escape_string($connect , $_POST['emailGetInTouch']);
    
    $sql = "INSERT INTO messages (email , message) VALUES ('$emailGetInTouch' , '$message') ;";
    $mysqli = mysqli_query($connect , $sql);

    
    
}
  
  
  
 ?> 
  
  

  
  
  <!***************FIXED-FOOTER*********>
        <?php
           include 'includes/fixedFooter.php'
    ?>
<script src="https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"></script>
    <script src="js/changed.js" async></script> 
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>                                
  <script>
    AOS.init({
        easing:"ease",
        duration:1000,
        offset:3,
    });
  </script>                     
                                 
</body>
</html>  
