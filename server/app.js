import express from 'express';
import mysql from 'mysql2/promise';
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '******',
  database: 'photo_diary'
});
import { diaries,owner } from './diaries.js';

const app = express();

app.use(express.json());

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  next();
});


app.get('/api/diaries',async function(req,res){
  // res.json(diaries);
  const [rows] = await pool.query('SELECT * FROM diaries;');
  res.json(rows);
});

app.get('/api/owner',function(req,res){
  res.json({ owner:owner });
})

app.post('/api/diaries',async function(req,res){
  const d = req.body;
  await pool.query('INSERT INTO diaries (title,mood,date,text,img) VALUES (?,?,?,?,?)',[d.title,d.mood,d.date,d.text,d.img]);
  const [rows] = await pool.query('SELECT * FROM diaries;');
  res.json(rows);
});


app.listen(3000,function(){
  console.log('服务器开好了:http://localhost:3000/api/diaries');
})