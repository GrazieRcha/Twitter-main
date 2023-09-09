class ProfileView {
    constructor(user) {
      this.user = user;
    }
  
    template() {
      return `
        <div class="profile-container">
          <div class="profile-header">
            <div class="profile-picture-container">
              <img src="${this.user.avatar}" alt="Profile Picture" class="profile-picture">
            </div>
            <div class="profile-info-container">
              <h1 class="profile-name">${this.user.nome} ${this.user.apelido}</h1>
              <p class="profile-email">Email: ${this.user.email}</p>
            </div>
          </div>
          <div class="profile-actions">
            <button class="btn btn-profile" id="btnVoltar">Voltar</button>
            <a class="btn btn-profile" href="/tweet/new">Criar Tweet</a>
          </div>
        </div>
      `;
    }
  }
  