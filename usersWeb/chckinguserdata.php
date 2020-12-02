<?php session_start(); ?>
    <!*********fetching userData after log ************/>
     
      <?php include_once '../includes/db.php';


    
    $usernameLog = mysqli_real_escape_string($connect ,$_POST['usernameLog']);
    $pwdLog = mysqli_real_escape_string($connect ,$_POST['pwdLog']);
    
    $sql = "SELECT * FROM users WHERE username = '$usernameLog' AND password_user = '$pwdLog' ";
    $gettingUser = mysqli_query($connect , $sql);
    $result = mysqli_fetch_assoc($gettingUser);

global $result;