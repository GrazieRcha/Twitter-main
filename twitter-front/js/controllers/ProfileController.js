class ProfileController {
    constructor(user) {
      this.user = user;
  
      let view = new ProfileView(user).template();
      document.querySelector("#mainContainer").innerHTML = view;
  
      this.btnVoltar = document.querySelector("#btnVoltar");
      this.btnVoltar.addEventListener("click", () => {
        this.irParaHome();
      });
  
      this.btnCriarTweet = document.querySelector("#btnCriarTweet");
      this.btnCriarTweet.addEventListener("click", () => {
        this.irParaCriarTweet();
      });
    }
  
    irParaHome() {
      new Router().irParaHome();
    }
  
    irParaCriarTweet() {
      new Router().irParaCriarTweet();
    }
  }
  