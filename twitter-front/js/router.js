class Router {
    constructor() {
        this.rotas = {
            home: {
                path: "/home",
                controller: "HomeController",
            },
            criarTweet: {
                path: "/tweet/new",
                controller: "NewTweetController"
            },
            login: {
                path:"/auth/login",
                controller: "LoginController"
            },
            signUp: {
                path:"/criar/usuario",
                controller: "SignUpController"

            },
            profile:{
                path:"/profile",
                controller: "ProfileController"
            },
            
        };
    }
    
    irParaHome() {
        this.irPara(this.rotas.home)
    }
    irParaLogin(){
        this.irPara(this.rotas.login)
    }
    irParaCriarTweet(){
        this.irPara(this.rotas.criarTweet)
    }
    irParaSignUp(){
        this.irPara(this.rotas.signUp);
    }
    irParaProfile(){
        this.irPara(this.rotas.profile);
    }

    irPara(rota) {
        eval(`new ${rota.controller}();`)
    }   

}