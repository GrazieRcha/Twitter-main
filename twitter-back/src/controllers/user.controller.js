const express = require("express");
const sha256 = require("crypto-js/sha256");
const Base64 = require("crypto-js/enc-base64");
const User = require("../models/User");
const Following = require("../models/Following");
const jwt = require('jsonwebtoken')
const secret = "UH@3vs,MEd,3lqLDQkb')[}J";
const userRouter = express.Router({mergeParams: true});
const authMiddleWare = require("../middlewares/auth.middleware");
const multer  = require('multer');

const upload = multer({ dest: 'avatar/' })
// próprio usuario 
userRouter.get("/me", (req, res) => {
  const userId = req.userLogado._id;

  User.findById(userId, (err, user) => {
    if (err) {
      console.error("Erro ao obter informações do usuário:", err);
      res.status(500).json({ error: "Erro ao obter informações do usuário" });
    } else {
      res.json(user);
    }
  });
});

userRouter.post("/sign-up",upload.single('avatar'), async (req, res) => {
  let {
    nome,
    apelido,
    email,
    password,
    avatar,
  } = req.body;
  password = Base64.stringify(sha256(password));
  let user = await User.create({nome, apelido, email, password, avatar});
  const token = jwt.sign({
    email: user.email, 
    id: user._id
  }, secret);
  res.send({token: token});
});

userRouter.post("/login", async (req, res) => {
    let {
        email,
        password
    } = req.body;
    password = Base64.stringify(sha256(password));
    console.log("password: ", password);
    const userLogado = await User.findOne({email, password});
    if(userLogado) {
        const token = jwt.sign({
            email: userLogado.email, 
            id: userLogado._id
        }, secret);
        return res.send({token: token});
    }
    res.status(401).send({error: "Email ou senha inválido"});
});

userRouter.post("/:id/follow", authMiddleWare, async (req,res) => {
  console.log("Follow begin")
  const userToFollow = await User.findById(req.params.id);
  await Following.create({
    followerId: req.userLogado._id,
    followedId: userToFollow._id
  });
  console.log("Follow end")
  res.status(201).send({message: "Deu bom"});
});

userRouter.delete("/:id/unfollow", authMiddleWare, async (req, res) => {
  const userToUnfollow = await User.findById(req.params.id);
  await Following.deleteOne({
    followerId: req.userLogado._id,
    followedId: userToFollow._id
  });
  res.status(204).send({message: "Deu bom"});
});

module.exports = userRouter;