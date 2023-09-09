class SignUpView {
    template() {
        return `
            <div class=" container-sign-up" >
            <form id="form-sign-up">

              
            <div class="perfil-imagem">
                <img id="avatar-image" style="border-radius: 50px" width="99px" height="99px" src="./resource/img/face.png" onclick="selectAvatar()">
                <input style="display: none" type="file" id="avatar-input" name="avatar" onchange="previewAvatar()">
            </div>
      
            <div>
                <label for="nome" class="form-label">Name</label>
                <input type="nome" class="form-control-signup" id="nome" required>
            </div>
            <div>
                <label for="apelido" class="form-label">Surname</label>
                <input type="apelido" class="form-control-signup" id="apelido" required>
            </div>
            <div>
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control-signup" id="email" required>
            </div>
            <div>
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control-signup" id="password" required>         
            </div>
            <div>
                <label for="confirm-password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control-signup" id="confirm-password" required>
            </div>
            <div class="msg-error" id="error-message"></div>
            <button type="submit" class="btn-signup btn-primary">SignUp</button>
        </form>
        </div>
        `;
    }
}