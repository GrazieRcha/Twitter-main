// class TweetView {
//     constructor(post) {
//         this.post = post;
//     }

//     template() {
//         let button = "";
//         if(this.post.following) {
//             button = `<p class="card-text"><small class="text-body-secondary">Tweet de ${this.post.userId}<button data-user-id="${this.post.userId}" class="unfollow">Unfollow</button></small></p>`
//         } else {
//             button = `<p class="card-text"><small class="text-body-secondary">Tweet de ${this.post.userId}<button data-user-id="${this.post.userId}" class="follow">Follow</button></small></p>`
//         }

//         return `
//             <div class="card mb-12">
//                 <div class="row g-0">
//                     <div class="container-tweet">
//                         <img src="${this.post.caminhoImagem}" class="img-fluid rounded-start" alt="...">
//                     </div>
//                     <div class="col-md-10">
//                         <div class="card-body">
//                         <h5 class="card-title">Tweet ${this.post._id}</h5>
//                         <p class="card-text">${this.post.conteudo}</p>
//                         ${button}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
// }

// class TweetView {
    
//     constructor(post) {
//         this.post = post;
       
//     }

//     template() {

        
//         let button = "";
//         if (this.post.following) {
//             button = `<p class="card-text"><small class="text-body-secondary">Tweet de ${this.post.user.nome}<button data-user-id="${this.post.userId}" class="unfollow">Unfollow</button></small></p>`;
//         } else {
//             button = `<p class="card-text"><small class="text-body-secondary">Tweet de ${this.post.user.apelido}<button data-user-id="${this.post.userId}" class="follow">Follow</button></small></p>`;
//         }

//         return `
       
//             <div class="card">
//                 <div class="row g-0"> 
//                 <div class="container-tweet">
//                 <div class="card-body">
                        
//                             ${button}
//                             <p class="card-text">${this.post.conteudo}</p>
//                 </div>
//                 </div>
//                 <div class="container-tweet-img">
//                         <img src="${this.post.caminhoImagem}" class="img-fluid rounded-start" alt="...">
//                 </div>
//                 </div>
//             </div>
//             <div>${this.post.user}</div>
//         `;
//     }
// }


class TweetView {
    constructor(post) {
        this.post = post;
    }

    template() {
        let button = "";
        if(this.post.following) {
            button = `<p class="card-text"><small class="text-body-secondary"><button data-user-id="${this.post.userId}" class="unfollow icon-unfollow">follow</button></small></p>`
        } else {
            button = `<p class="card-text"><small class="text-body-secondary"><button data-user-id="${this.post.userId}" class="follow icon-follow">follow</button></small></p>`
        }

        return `
            <div class="card mb-12">
                <div class="">
                    <div class="post-perfil-user">
                        <img src="${this.post.user.avatar}" class="post-perfil-img" alt="${this.post.user.avatar}">
                        <div class="post-perfil-text"> 
                            <p class="post-perfil-card-nome">${this.post.user.nome}</p>
                            <p class="post-perfil-card-text">${this.post.user.apelido}</p>
                        </div>
                    </div>
                    <div class="col-md-2" data-userid="${this.post._id}">
                        <p class="card-text">${this.post.conteudo}</p>
                        <img src="${this.post.caminhoImagem}" class="img-fluid-start" alt="...">
                    </div>
                    <div class="col-md-10 card-funcao">
                        <div class="card-body"> ${button} </div>
                    </div>
                </div>
            </div>
        `;
    }
}