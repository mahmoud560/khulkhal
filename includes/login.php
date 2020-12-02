<div class="loginOverlay"></div>
        <container class="loginForm">
            <form class="formlog col-6" method="POST" action="usersWeb/accountHome.php">
               <h1 class="loginTitle">Log in</h1>
               <h2 class="errorsLog"></h2>
               <i class="fas fa-times fa-2x" id="closelogin"></i>
               <p><input type="text" name="usernameLog" placeholder="Username"></p>
               <p> <input type="password" name="pwdLog" placeholder="Passsword"></p>
               <p class="forgot-pwd">forgot your Password? click here</p>
               <div>
               <button type="submit" name="login">Log in</button>
               </div>
            </form>
        </container>