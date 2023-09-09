class SignUpController {
    constructor() {
      let view = new SignUpView().template();
      document.querySelector("#mainContainer").innerHTML = view;
  
      this.form = document.querySelector("#form-sign-up");
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        this.criarUsuario();
      });
    }
  
    async criarUsuario() {
      let nome = document.querySelector("#nome").value;
      let apelido = document.querySelector("#apelido").value;
      let password = document.querySelector("#password").value;
      let confirmPassword = document.querySelector("#confirm-password").value;
      let email = document.querySelector("#email").value;
      let avatar = "img";

      if (!this.isValidEmail(email)) {
        this.displayErrorMessage("Email inválido!!");
        return;
      }
  
      if (!this.isValidPassword(password)) {
        this.displayErrorMessage(
          "Senha inválida!! Sua senha deve conter 6 caracteres para sua segurança."
        );
        return;
      }
  
      if (password !== confirmPassword) {
        this.displayErrorMessage("As senhas não coincidem!");
        return;
      }
  
      let bodyData = {
        nome,
        apelido,
        password,
        email,
        avatar,
      };
  
      // let resposta = await fetch("http://localhost:3000/users/sign-up", {
      //   method: "POST",
      //   body: JSON.stringify(bodyData)
      // });
      // let resposta2 = await resposta.json();
      // console.log("resposta", resposta2);
  
      // sessionStorage.setItem("token", resposta2.token);
      // new Router().irParaHome();

      try {
        const response = await fetch("http://localhost:3000/users/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(bodyData)
        });
  
        const data = await response.json();
        console.log("resposta", data);
        console.log("bodyData", bodyData);
  
        
        sessionStorage.setItem("token", data.token);
  
        new Router().irParaHome();
      } catch (error) {
        console.log("Erro ao criar:", error);
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
  }
  
  function selectAvatar() {
    const avatarInput = document.querySelector("#avatar-input");
    avatarInput.click();
  }
  
  function previewAvatar() {
    const avatarInput = document.querySelector("#avatar-input");
    const avatarImage = document.querySelector("#avatar-image");
  
    const file = avatarInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      avatarImage.src = e.target.result;
    };
  
    reader.readAsDataURL(file);
  }
  