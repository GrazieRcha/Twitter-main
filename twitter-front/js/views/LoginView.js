class LoginView {
    template() {
        return `
            <div class="container-sign-up">
                <img class="img-login" src="./resource/icon/Icon.svg">
                <span class="text-login">Login to Twitter UI</span>
                <form id="form-login">
                    <div>
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control-login" id="email" required>
                    </div>
                    <div>
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control-login" id="password" required>
                    </div>
                    <div class="msg-error" id="error-message"></div>
                    <button id="entrar"  class="btn btn-primary">Login</button>
                </form>
                <p class="not-login">Don't have an account? <a href="#" id="signup-link">Sign up</a></p>
            </div>
        `;
    }
}
