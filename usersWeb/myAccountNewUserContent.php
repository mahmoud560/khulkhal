<?php  session_start(); ?>
 
 
 <?php  


$usernameAcc = $_SESSION['$createdUser'];
$pwdAcc = $_SESSION['$createdPwd'];
include_once '../includes/db.php';

     $sqlGetNewUser = "SELECT * FROM users WHERE username = '$usernameAcc' AND password_user = '$pwdAcc';";
        $resultNewUser = mysqli_query($connect ,  $sqlGetNewUser);
       $gettingNewUserInfo = mysqli_fetch_assoc( $resultNewUser);
       
       $_SESSION['$usernameNewUser'] = $gettingNewUserInfo['username'];
       $_SESSION['$emailNewUser'] = $gettingNewUserInfo['email'];
       $_SESSION['$birthdayNewUser'] = $gettingNewUserInfo['birthday'];
       $_SESSION['$pwdNewUser'] = $gettingNewUserInfo['password_user'];
       $_SESSION['$newslettersNewUser'] = $gettingNewUserInfo['newsletters'];
       $_SESSION['$loyaltyProgNewUser'] = $gettingNewUserInfo['loyaltyProg'];
    
     $_SESSION['$NewUserData'] = $gettingNewUserInfo;
?>

 <div class="myAccount col-12">
  <h5 class="myAccName text-center"><?php echo  $_SESSION['$usernameNewUser']; ?></h5>
  <h1 class="myAccEmail text-center"><?php echo $_SESSION['$emailNewUser']; ?></h1>
   <container class="myAccountContainer col-12 row">
  <section class="myAccInfo col-md-5 col-12">
      <table class="table  table-hover">
         <thead>
          <tr>
              <th>Password:</th>
              <th>Birthday:</th>
              <th>Newsletters:</th>
          </tr>
          </thead>
          <tbody>
             <tr class="tableEdit">
                <th><?php echo  $_SESSION['$pwdNewUser']; ?></th>
                <th><?php echo $_SESSION['$birthdayNewUser']; ?></th>
                <th><?php echo $_SESSION['$newslettersNewUser']; ?></th> 
             </tr>
         </tbody>
      </table>
          <button class="editBtn" type="submit" name="editAcc">Edit</button>
  </section>     
  <section class="myOrders col-md-6 col-12">
      <h4 class="text-center">My Orders</h4>
      <table class="table table-hover col-md-8">
          <thead>
              <tr>
                  <th>Id:</th>
                  <th>Piece:</th>
                  <th>Total:</th>
                  <th>Date</th>
                  <th>Status</th>
              </tr>
          </thead>
          <tbody>
             
           <?php 
              
              include_once '../includes/db.php';
              $usernameAcc =   $_SESSION['$usernameNewUser'];
              $pwdAcc =  $_SESSION['$pwdNewUser'];
              
        $sqlGetNewUserOrders = "SELECT * FROM orders WHERE username = '$usernameAcc' AND password = '$pwdAcc'";
        $gettingOrderInfo = mysqli_query($connect ,$sqlGetNewUserOrders);
              
              while($result = mysqli_fetch_assoc($gettingOrderInfo)){
                  $id = $result['id'];
                  $pieces = $result['pieceForAcc'];
                  $total = $result['total'];
                  $day = $result['day'];
                  $received = $result['received'];
                  echo "<tr>
                  <th>{$id}</th>
                  <th>{$pieces}</th>
                  <th>{$total}</th>
                  <th>{$day}</th>
                  <th class='orderStatus'>{$received}</th>
                  <form action='' method='POST'>
                  <th> <i type ='submit' class='far fa-trash-alt' id='deleteOrder'></i> </th>
                   <input type='hidden'>
                   </form>
              </tr> ";
              }
              
              
              ?>  
          </tbody>
      </table>
  </section>
<section class="loyaltyProg col-12">
   <div>
    <p>   <span class="sliderValue"><span>100</span></span> 0 <input type="range" min="0" max="3000" value="<?php  echo $_SESSION['$loyaltyProgNewUser'] ;?>" class="loyaltyProg"> 3000   </p> 
    </div>
</section>   
  <span>
  <button class="btn-delete-Acc btn-danger">DELETE MY ACCOUNT</button>
  </span>   
  
    <!***************delete-Acc*********>
    

   <div class="delete-Acc-confirmation-Overly"></div>
   <div class="pop-up-delete-confirm">
         <div class="pop-up-delete-confirm-1">
           <i class="fas fa-times fa-1x"></i>
           <p>
               Just making sure that you understand: if you delete your account all the data and all promotions will be deleted and can not be redeemed afterwards!
           </p>
           <button class="dont-delete">do not delete</button>
           <form action="../includes/deleteAccorDeleteOrder.php" method="POST">
           <input type="hidden" name="deletedusername" class="deletedName" value="<?php   echo  $_SESSION['$username']; ?>">
           <input type="hidden" name="deletedpassword" class="deletedPassword" value="<?php echo  $_SESSION['$password']; ?>">
            <input type='hidden' name='idOrder'>
            <button class="yes-delete" type="submit" name="delete">Yes, delete</button>
           </form>
         </div>
     </div>
     
       <!***************end of delete-Acc*********>
       
   </container>
</div>


