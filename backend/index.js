import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT

// Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// JWT secret
const secret = process.env.JWT_SECRET;

// Middlewares
app.use(cors());
app.use(express.json());

// Middleware de validação JWT
// function validarJWT(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

//   const token = authHeader.split(' ')[1];
//   if (!token) return res.status(401).json({ error: 'Token mal formatado' });

//   jwt.verify(token, secret, (err, decoded) => {
//     if (err) return res.status(403).json({ error: 'Token inválido ou expirado' });
//     req.user = decoded;
//     next();
//   });
// }

// Teste de rota pública
app.get("/health", (req, res) => {
  res.send("Servidor rodando!");
});

// Rota de registro
app.post("/register", async (req, res) => {
  const { name, email, senha } = req.body;

  if (!name || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    // Verifica se o usuário já existe
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(400).json({ error: 'Email já está em uso.' });
    }

    const password_hash = await bcrypt.hash(senha, 10);

    const { data, error: insertError } = await supabase
      .from('users')
      .insert([{ name, email, password_hash }])
      .select();

    if (insertError) {
      console.error(insertError);
      return res.status(500).json({ error: 'Erro ao criar usuário.' });
    }


    res.status(201).json({ message: 'Usuário criado com sucesso!'});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
});

// Rota protegida (exemplo)
app.get("/usuarios", /*validarJWT*/ async (req, res) => {
  const { data, error } = await supabase.from('users').select('id, name, email');
  if (error) {
    return res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
  res.json(data);
});

app.get("/musicas",async(req,res)=>{
  const {data,error} = await  supabase.from('songs').select('*');
   if(error){
    return res.status(500).json({error: 'erro ao exibir a lista de musica'})
   }
   res.json(data)
})

app.post("/historico",async(req,res)=>{
  const {user_id,song_id} = req.body;
  
  const {data,erro} = await supabase
    .from('music_history')
    .insert([ { user_id: user_id, song_id: song_id }])
    .select();

     res.status(201).json({ message: 'Historico criado com sucesso!'});
})

app.get("/historico/user_id", async(req,res)=>{
  const {user_id} = req.query;
  const {data,error} = await supabase
    .from('music_history')
    .select('id, user_id, song_id, songs(title, artist, album, url)')
    .eq('user_id', user_id);

    if(error){
      return res.status(500).json({error: 'erro ao exibir o historico de musica'})
     }
     res.json(data)

})


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
