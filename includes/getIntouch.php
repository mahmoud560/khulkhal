<?php 



if(isset($_POST['sendMessage'])){
    include_once 'db.php';
    
  
    $message =  mysqli_real_escape_string($connect , $_POST['message']);
    $emailGetInTouch = mysqli_real_escape_string($connect , $_POST['emailGetInTouch']);
    
    echo  $message;
    $sql = "INSERT INTO messages (email , message) VALUES ('$emailGetInTouch' , '$message') ;";
    $mysqli = mysqli_query($connect , $sql);

     header('Location: ../usersWeb/getInTouchUser.php');
}



















?>