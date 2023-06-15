require('dotenv').config()
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const {MongoClient, ObjectId} = require("mongodb");
async function connect(){
  if(global.db) return global.db;
    const conn = await MongoClient.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.14wwtdx.mongodb.net/?retryWrites=true&w=majority`);
  if(!conn) return new Error("Can't connect");
    global.db = await conn.db("high");
  return global.db;
}
const jwt       = require('jsonwebtoken')
const bcrypt    = require('bcrypt')
const express = require('express');
const { set } = require('mongoose');
const app = express();         
const port = 3000;
const router = express.Router();
app.use(require('cors')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


router.post('/usuarios/cadastro', async function(req, res, next){
    const db = await connect();
    var {nome, sobreNome, email, senha, confSenha} = req.body
    if(!nome){
        return res.status(422).json({msg:"O nome é obrigatorio"})
    }
    if(!sobreNome){
        return res.status(422).json({msg:"O sobrenome é obrigatorio"})
    }
    if(!email){
        return res.status(422).json({msg:"O email é obrigatorio"})
    }
    if(!senha){
        return res.status(422).json({msg:"A senha é obrigatorio"})
    }
    if(confSenha!==senha){
        return res.status(422).json({msg:"As senhas tem que ser iguais"})
    }
    const usuarioExist = await db.collection("usuarios").findOne({email: email})
    
    if(usuarioExist){
        return res.status(422).json({msg:"Utilize outro email"})
    }
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(senha,salt)
    req.body = {nome, sobreNome, email, passwordHash} 
    try{
        const usuarios = req.body
        await db.collection("usuarios").insertOne(usuarios)
        res.json({msg:"Cadastro concluido"});
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
  })

router.post("/usuarios/login",async(req,res)=>{
    const db = await connect();
    const {email, senha} = req.body
    if(!email){
      return res.status(422).json({msg:"O email é obrigatorio"})
    }
    if(!senha){
      return res.status(422).json({msg:"A senha é obrigatorio"})
    }
    const usuario = await db.collection("usuarios").findOne({email: email})
    if(!usuario){
      return res.status(422).json({msg:"Este email nao tem cadastro"})
    }
    const checkPassword = await bcrypt.compare(senha, usuario.passwordHash)
    if(!checkPassword){
        return res.status(422).json({msg:"senha invalida"})
    }
    try {
      const token = jwt.sign(
        {
            id: usuario._id,
        },
        process.env.SECRET,
        {
          expiresIn :50000
        }
    )
      res.status(200).json({msg:"login feito com sucesso",token:token})
    } catch (error) {
      res.status(500).json({msg:"error"})
    }
})
router.put("/usuarios/recu", async(req,res)=>{
  const db = await connect();
  const {email,senha} = req.body
  if(!email){
    res.status(422).json({msg:"Nao existe uma conta com esse email"})
  }
  if(!senha){
    res.status(422).json({msg:"Nao existe uma conta com esse email"})
  }
  usuario = await db.collection("usuarios").findOne({email:email})
  if(!usuario){
    res.status(422).json({msg:"Nao existe uma conta com esse email"})
  }
  const id = usuario._id
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(senha,salt)
  try{
    res.json(await db.collection("usuarios").updateOne({_id:id},{$set: {passwordHash: passwordHash}}));
  }catch(err){
    res.status(500).json({msg:"error"})
  }
})
router.get("/usuarios/ajustes",async(req,res)=>{
  const db = await connect();
  const { token } = req.headers;
  const decodedToken = jwt.verify(token, process.env.SECRET);
  const id = decodedToken.id;
  try{
    res.json(await db.collection("usuarios").findOne({_id: new ObjectId(id)}));
  } catch(err){
    res.status(500).json({msg:"error"})
  }
})
router.put("/usuarios/atualizar",async(req,res)=>{
  const db = await connect();
  const {nome, sobreNome, email, senha, confSenha} = req.body;
  if(!nome){
    return res.status(422).json({msg:"O nome é obrigatorio"})
  }
  if(!sobreNome){
      return res.status(422).json({msg:"O sobrenome é obrigatorio"})
  }
  if(!email){
      return res.status(422).json({msg:"O email é obrigatorio"})
  }
  const usuarioExist = await db.collection("usuarios").findOne({email: email})
  const id = usuarioExist._id
  if(!senha){
    try{
      res.json(await db.collection("usuarios").updateOne({_id:id},{$set: {nome:nome,sobreNome:sobreNome,email:email}}));
    } catch(err){
      res.status(500).json({msg:"error"})}
  }else{
    if(confSenha!==senha){
      return res.status(422).json({msg:"As senhas tem que ser iguais"})
    }
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(senha,salt)
    await db.collection("usuarios").updateOne({_id:id},{$set: {passwordHash: passwordHash,nome:nome,sobreNome:sobreNome,email:email}})
    res.json({msg:"Cadastro alterado com sucesso"});
  }
})

router.delete("/usuarios/deletar",async(req,res)=>{
  const db = await connect();
  const { token } = req.headers;
  const decodedToken = jwt.verify(token, process.env.SECRET);
  const id = decodedToken.id;
  try{
    await db.collection("usuarios").deleteOne({_id: new ObjectId(id)});
    res.json({msg:"Usuario deletado com sucesso"});
  } catch(err){
    res.status(500).json({msg:"error"})
  }
})

router.get

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.post
app.use('/', router);

app.listen(port);
console.log('API funcionando!')