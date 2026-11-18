const test = {"title":"测试","mood":"测试","date":"测试"};

async function addDiary(){
  const response = await fetch('http://localhost:3000/api/diaries',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(test)
  });
  const data = await response.json();
  console.log(data);
}
addDiary();