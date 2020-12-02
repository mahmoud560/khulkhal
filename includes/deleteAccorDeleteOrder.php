<?php include_once 'db.php';



$deletedUsername = mysqli_real_escape_string($connect , $_POST['deletedusername']);
$deletedPassword = mysqli_real_escape_string($connect ,$_POST['deletedpassword']);
if(isset($_POST['delete'])){ 
    $sql = "DELETE FROM users WHERE username = '$deletedUsername' AND password_user = '$deletedPassword' ";
   $deleted =  mysqli_query($connect ,  $sql);
    
    $sqlOrder = "DELETE FROM orders WHERE username = '$deletedUsername' AND password = '$deletedPassword' ";
    $deletedOrders = mysqli_query($connect , $sqlOrder);
    
    if($deleted &&  $deletedOrders){
        session_start();
        session_destroy();
        header('Location: ../home.php');
    }
} elseif(isset($_POST['deleteOrder'])){
    $deletedOrderId =  mysqli_real_escape_string($connect , $_POST['idOrder']);
    $sql = "UPDATE orders SET received = 'canceled' WHERE id = '$deletedOrderId'";
    mysqli_query($connect , $sql);
    
    header('Location: ../usersWeb/myAccount.php');
}