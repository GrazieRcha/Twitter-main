const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    conteudo: "String",
    caminhoImagem: "String",
    nome: "String",
    curtidas: "Number",
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;