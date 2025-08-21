
import { createClient } from '@supabase/supabase-js';
const supabaseUrl  = "https://fzjetorppylnsrfqkzht.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6amV0b3JwcHlsbnNyZnFremh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NDUyMTIsImV4cCI6MjA3MTMyMTIxMn0.bRdcv19s3uUbW-CdrBabnpvfqzuBeMbctwufWueL8N0";
const supabase = createClient(supabaseUrl, supabaseKey);

import express from "express";  
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Servidor rodando!")
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



async function fetchData() {
  const {data,error}= await supabase
    .from('users')

    .select('*');

   if (error) {
    console.error('Erro ao buscar usuários:', error);
  } else {
    console.log('Usuários:', data);
  }
}

fetchData()