class NavController {
    constructor() {
      let view = new NavView().template();
      document.querySelector("#navContainer").innerHTML = view;
  
      this.btnVerPerfil = document.querySelector("#btnVerPerfil");
      this.btnVerPerfil.addEventListener("click", () => {
        this.irParaPerfil();
      });
    }
  
    irParaPerfil() {
      new Router().irPara();
    }
  }
  