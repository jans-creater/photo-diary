import express from 'express';
import { diaries,owner } from './diaries.js';

const app = express();

app.use(express.json());

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  next();
});


app.get('/api/diaries',function(req,res){
  res.json(diaries);
});

app.get('/api/owner',function(req,res){
  res.json({ owner:owner });
})

app.post('/api/diaries',function(req,res){
  const newDiary = req.body;
  diaries.push(newDiary);
  res.json(diaries);
})


app.listen(3000,function(){
  console.log('服务器开好了:http://localhost:3000/api/diaries');
})