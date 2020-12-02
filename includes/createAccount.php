<div class="createAccountOverlay"></div>
        <container class="createAccountForm">
            <form class="formAcc col-6" method="POST" action="usersWeb/accountHome.php">
               <h1 class="createAccountTitle">Create an Account</h1>
               <h2 class="errorsCreateAcc"></h2>
               <i class="fas fa-times fa-2x" id="closeCreateAccount"></i>
               <p><input type="text" name="usernameAcc" placeholder="Username"></p>
               <p> <input type="email" name="emailAcc" placeholder="email"></p>
               <p> <input type="password" name="pwdAcc" placeholder="Password"></p>
               <p> <input type="password" name="confpwdAcc" placeholder="Confirm Password"></p>
               <p> <input type="date" name="birth" placeholder="birthday"></p>
               <br>
               <input class="newsletters" type="checkbox" name="newsletters"> Newsletters?
               <br>
               <div>
               <button type="submit" name="create">Register</button>
               </div>
            </form>
</container>




