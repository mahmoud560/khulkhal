<?php session_start(); ?>
  <link rel=stylesheet href="stylephp.php">
   
   
   
    <?php
 
if(isset($_POST['submit'])) {
    include_once 'db.php';


    $email = mysqli_real_escape_string($connect , $_POST['email']);
    $fname = mysqli_real_escape_string($connect ,$_POST['fname']);
    $lname = mysqli_real_escape_string($connect ,$_POST['lname']);
    $city = mysqli_real_escape_string($connect ,$_POST['city']);
    $district = mysqli_real_escape_string($connect ,$_POST['district']);
    $streetCompound = mysqli_real_escape_string($connect ,$_POST['street-compound']);
    $address = mysqli_real_escape_string($connect ,$_POST['address']);
    $phone = mysqli_real_escape_string($connect ,$_POST['phone']);
    $day = mysqli_real_escape_string($connect ,$_POST['day']);
    $info = mysqli_real_escape_string($connect ,$_POST['piece']);
    $username = mysqli_real_escape_string($connect ,$_POST['username']);
    $pwd = mysqli_real_escape_string($connect ,$_POST['pwd']);
    $total = mysqli_real_escape_string($connect ,$_POST['total']);
    $pieceForAcc = mysqli_real_escape_string($connect ,$_POST['pieceForAcc']);
    $received = mysqli_real_escape_string($connect ,$_POST['received']);
    $totalCost = mysqli_real_escape_string($connect ,$_POST['costInput']);

  if(empty($email) || empty($fname) ||  empty($city) || empty($district) || empty($streetCompound) || empty($address) || empty($phone) ){
  header('Location: ../checkout.php?order=empty');
    exit();
} 
if(!filter_var($email , FILTER_VALIDATE_EMAIL)) {
     header('Location: ../checkout.php?order=email');
    exit();
}
if(strlen($email) > 100){
     header('Location: ../checkout.php?order=emailmax');
    exit();
}
if(strlen($fname) > 40 || strlen($lname) > 40){
     header('Location: ../checkout.php?order=namemax');
    exit();
}
if(strlen($city)  > 50){
     header('Location: ../checkout.php?order=citymax');
    exit();
}
if(strlen($district)  > 1000){
     header('Location: ../checkout.php?order=districtmax');
    exit();
}
if(strlen($streetCompound)  > 100){
     header('Location: ../checkout.php?order=streetCompoundmax');
    exit();
}
if(strlen($address)  > 500){
     header('Location: ../checkout.php?order=addressmax');
    exit();
}
    
if(strlen($phone) != 11){
     header('Location: ../checkout.php?order=phone');
    exit();
}
if(is_numeric($phone) == false){
     header('Location: ../checkout.php?order=charphone');
    exit();
}
   else{
       
   $sql = "INSERT INTO orders (email , fname , lname , city , district , streetCompound , address , phone , day , piece , username , received , password , total , pieceForAcc , cost) VALUES ( '$email', '$fname' , '$lname', '$city', '$district' , '$streetCompound' , '$address', '$phone', '$day' , '$info' , '$username' , '$received' , '$pwd' , '$total' , '$pieceForAcc' , '$totalCost');";
   mysqli_query($connect , $sql);
       
       if( $_SESSION['$username'] || $_SESSION['$createdUser']){
           include_once '../usersWeb/afterCheckoutUser.php';
       } else{ 
       include_once '../afterCheckout.php';
          }  
   }

} if(isset($_POST['submitNewUser'])) {
     include_once 'db.php';
    
      $email = mysqli_real_escape_string($connect , $_POST['email']);
    $fname = mysqli_real_escape_string($connect ,$_POST['fname']);
    $lname = mysqli_real_escape_string($connect ,$_POST['lname']);
    $city = mysqli_real_escape_string($connect ,$_POST['city']);
    $district = mysqli_real_escape_string($connect ,$_POST['district']);
    $streetCompound = mysqli_real_escape_string($connect ,$_POST['street-compound']);
    $address = mysqli_real_escape_string($connect ,$_POST['address']);
    $phone = mysqli_real_escape_string($connect ,$_POST['phone']);
    $day = mysqli_real_escape_string($connect ,$_POST['day']);
    $info = mysqli_real_escape_string($connect ,$_POST['piece']);
    $total = mysqli_real_escape_string($connect ,$_POST['total']);
    $pieceForAcc = mysqli_real_escape_string($connect ,$_POST['pieceForAcc']);
    $received = mysqli_real_escape_string($connect ,$_POST['received']);
    $totalCost = mysqli_real_escape_string($connect ,$_POST['costInput']);
    
    $usernameNewUser =  $_SESSION['$usernameNewUser'];
    $pwdNewUser =  $_SESSION['$pwdNewUser'];
    
     $sqlNewUser = "INSERT INTO orders (email , fname , lname , city , district , streetCompound , address , phone , day , piece , username , received , password , total , pieceForAcc , cost) VALUES ( '$email', '$fname' , '$lname', '$city', '$district' , '$streetCompound' , '$address', '$phone', '$day' , '$info' , '$usernameNewUser' , '$received' , '$pwdNewUser' , '$total' , '$pieceForAcc' , '$totalCost');";
   mysqli_query($connect , $sqlNewUser);
    
    
    
    include_once '../usersWeb/afterCheckoutUser.php';
}
else{
    echo '<p class="errorFormempty">You did not fill out a form</p>';
    echo '<br>';
    echo '<div class="center"> <a href="../checkout.php"> <button class="goBackForm"> Go Back to fill the Form </button> </a> </div>';
}
    ?>
    
   