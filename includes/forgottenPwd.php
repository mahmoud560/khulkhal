  <container class="forgotPwd">
            <form class="forgotPwdForm col-6" method="POST" action="usersWeb/accountHome.php">
               <h1 class="forgotPwdTitle">Change Password</h1>
               <h2 class="error"></h2>
               <i class="fas fa-times fa-2x" id="closeForgotPwd"></i>
               <p><input type="text" name="usernameForgot" placeholder="Username"></p>
               <p> <input type="email" name="emailForgot" placeholder="email"></p>
               <p> <input type="password" name="newPwd" placeholder="new Password"></p>
               <p> <input type="password" name="confirmNewPwd" placeholder="confirm new Password"></p>                                         
               <div>
               <button type="submit" name="changePwd">Change</button>
               </div>
            </form>
        </container>