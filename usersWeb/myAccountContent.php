<?php  session_start(); ?>

 <div class="myAccount col-12">
  <h5 class="myAccName text-center"><?php   echo  $_SESSION['$username']; ?></h5>
  <h1 class="myAccEmail text-center"><?php echo $_SESSION['$email']; ?></h1>
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
                <th><?php echo  $_SESSION['$password']; ?>      <i class="far fa-edit fa-1x editIconName"></i> </th>
                <th><?php echo $_SESSION['$birthday']; ?></th>
                 <th><?php echo $_SESSION['$newsletters']; ?>    <i class="far fa-edit fa-1x editIconNews"></i></th> 
             </tr>
         </tbody>
      </table>
      <button class="editBtn" type="submit" name="editAcc">Edit</button>
  </section>     
  <section class="myOrders col-md-6 col-12">
      <h4 class="text-center ">My Orders</h4>
      <table class="table table-hover col-md-9 col-7">
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
           $user =  $_SESSION['$username'];
           $pwd = $_SESSION['$password'];
              
    $sqlOrderInfo = "SELECT * FROM orders WHERE username = '$user' AND password = '$pwd'";
    $gettingOrderInfo = mysqli_query($connect ,  $sqlOrderInfo);
              
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
    <p>   <span class="sliderValue"><span>100</span></span> 0 <input type="range" min="0" max="3000" value="<?php  echo $_SESSION['$loyaltyProg'] ;?>" class="loyaltyProg"> 3000   </p> 
    </div>
</section> 
       <div class="loyaltySen"><h4><span>1K</span>Left for your gift!</h4></div>
  <span>
  <button class="btn-delete-Acc btn-danger">DELETE MY ACCOUNT</button>
  </span>  
  
      <!***************delete-Acc*********>
    

   <div class="delete-Acc-confirmation-Overly"></div>
   <div class="pop-up-delete-confirm">
         <div class="pop-up-delete-confirm-1">
           <i class="fas fa-times fa-1x"></i>
           <p>
           </p>
           <button class="dont-delete"></button>
           <form action="../includes/deleteAccorDeleteOrder.php" method="POST">
           <input type="hidden" name="deletedusername" class="deletedName" value="<?php   echo  $_SESSION['$username']; ?>">
           <input type="hidden" name="deletedpassword" class="deletedPassword" value="<?php echo  $_SESSION['$password']; ?>">
            <input type='hidden' name='idOrder'>
            <button class="yes-delete" type="submit" name="delete"></button>
           </form>
         </div>
     </div>
     
       <!***************end of delete-Acc*********>
       
       
   </container>
   
</div>

