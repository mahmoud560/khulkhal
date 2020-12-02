<?php

session_start();
    
if(isset($_POST['create'])) {
   
    include_once '../includes/db.php';
    
    $emailAcc = mysqli_real_escape_string($connect , $_POST['emailAcc']);
    $usernameAcc = mysqli_real_escape_string($connect ,$_POST['usernameAcc']);
    $pwdAcc = mysqli_real_escape_string($connect ,$_POST['pwdAcc']);
    $birthday = mysqli_real_escape_string($connect ,$_POST['birth']);
    $newsletters = mysqli_real_escape_string($connect ,$_POST['newsletters']);
    
     $sql = "SELECT * FROM users WHERE username = '$usernameAcc' AND password_user = '$pwdAcc' ";
   $userwithsameNmaeandpass = mysqli_query($connect , $sql);
     $result = mysqli_fetch_assoc($userwithsameNmaeandpass);
    
    if($result){
        
        header('Location: ../home.php?signup=failed');      
            
    } else{ 
     
        
         include_once '../includes/db.php';
        
  include_once 'accountCreateHeader.php';
include_once 'greetNewUser.php';
   include_once 'accountHomeContent.php';
    include_once 'accountFooter.php';
    
    $sql = "INSERT INTO users ( username , email , password_user , birthday , newsletters , loyaltyProg ) VALUES ('$usernameAcc', '$emailAcc' , '$pwdAcc', ' $birthday', '$newsletters' , 0 );";
    $mysqli = mysqli_query($connect , $sql);
   
        $_SESSION['$createdUser'] = $usernameAcc;
        $_SESSION['$createdPwd'] =  $pwdAcc;
        
        

    } 
}

elseif(isset($_POST['login'])){
    
  include_once 'chckinguserdata.php';

    
    if($result){ 
    
   $_SESSION['$email'] = $result['email'];
    $_SESSION['$username'] = $result['username'];
    $_SESSION['$birthday'] = $result['birthday'];
    $_SESSION['$password'] = $result['password_user'];
    $_SESSION['$newsletters'] = $result['newsletters'];
    $_SESSION['$loyaltyProg'] = $result['loyaltyProg'];
    $_SESSION['$discountCodes'] = $result['discountCodes'];
        
   include_once 'accountLoginHeader.php';  
  include_once 'accountHomeContent.php';
    include_once 'accountFooter.php'; 

        
    } else {
        header('Location: ../home.php?login=failed');
    }
} elseif( isset($_POST['changePwd'])){
    
     include_once 'chckinguserdata.php';
    
    $emailForgot = mysqli_real_escape_string($connect , $_POST['emailForgot']);
    $usernameForgot = mysqli_real_escape_string($connect ,$_POST['usernameForgot']);
    $newPwd = mysqli_real_escape_string($connect ,$_POST['newPwd']);
    
    $sqlOldpwd = "SELECT password_user FROM users WHERE username = '$usernameForgot' AND email = '$emailForgot'";
    $mysqliGetOldPwd = mysqli_query($connect  , $sqlOldpwd);
    $oldPwdArr = mysqli_fetch_assoc($mysqliGetOldPwd);
    $oldPwd = $oldPwdArr['password_user'];
    
    $sqlUsers = "UPDATE users SET password_user = '$newPwd' WHERE email = '$emailForgot' AND username = '$usernameForgot'";
    $mysqliUsers = mysqli_query($connect ,  $sqlUsers);
    
    $sqlOrders = "UPDATE orders SET password = '$newPwd' WHERE username = '$usernameForgot' AND password = '$oldPwd'";
    $mysqliOrders = mysqli_query($connect ,  $sqlOrders);
    
    if($oldPwd){
        header('Location: ../home.php');
    } else{
        header('Location: ../home.php?changePassword=failed');
    }
   
    
} else {
    echo '<h1> You are not logged in!!</h1>';
    include_once 'accountFooter.php';
} 

?>
  
   