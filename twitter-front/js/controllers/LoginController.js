class LoginController {
    constructor() {
      let view = new LoginView().template();
      document.querySelector("#mainContainer").innerHTML = view;
  
      this.form = document.querySelector("#form-login");
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        this.realizarLogin();
      });

      this.entrar = document.querySelector("#entrar");
      this.entrar.addEventListener("click", () => {
        this.irParaHome();

      });
  
      this.signupLink = document.querySelector("#signup-link");
      this.signupLink.addEventListener("click", () => {
        this.irParaSignUp();
      });
    }
    
    realizarLogin() {
      let email = document.querySelector("#email").value;
      let password = document.querySelector("#password").value;
  
      if (!this.isValidEmail(email)) {
        this.displayErrorMessage("Email inválido!!");
        return;
      }
  
      if (!this.isValidPassword(password)) {
        this.displayErrorMessage("Senha inválida!! A senha deve ter pelo menos 6 caracteres.");
        return;
      }
  
    }
  
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    isValidPassword(password) {
      return password.length >= 6;
    }
  
    displayErrorMessage(message) {
      const errorElement = document.querySelector("#error-message");
      errorElement.textContent = message;
      errorElement.classList.add("show");
  
      setTimeout(() => {
        errorElement.classList.remove("show");
        errorElement.textContent = "";
      }, 4000);
    }
  
    irParaSignUp() {
      new Router().irParaSignUp();
    }

    irParaHome(){
        new Router().irParaHome();
    }
  }
