class FormTweet {
    template() {
        return `
        <form id="form-tweet">
       
            <div class="mb-9">
                <label for="conteudo" class="form-label-tweet"> What's happening?</label>
                <input type="conteudo" class="form-control-tweet" id="conteudo">
            </div>
            <div class="input-group mb-3">
                <input type="file" class="form-control form-control-tweet" id="imagem">
                <label class="input-group-text" for="imagem">Have a Photo?
                <i class="bi bi-upload"></i> <!-- Ícone de upload do Bootstrap Icons -->
                </label>
            </div>
            <button type="submit" class="botton btn-tweet">Tweet</button>
        </form>
        `;
    }
}