let SimpleMVC;
(function (SimpleMVC) {
    class LoginModel {
    }
    class LoginController {
        constructor(model) {
            this.model = model;
        }
        Login(userName, password, rememberMe) {
            this.model.UserName = userName;
            this.model.Password = password;
            this.model.RememberMe = rememberMe;
            if (this.checkPassword(userName, password))
                this.model.LoginSuccessful;
            else {
                this.model.LoginSuccessful = false;
                this.model.LoginErrorMessage = "Niepoprawna nazwa użytkownika lub hasło";
            }
        }
        checkPassword(UserName, Password) { return true; }
    }
})(SimpleMVC || (SimpleMVC = {}));
