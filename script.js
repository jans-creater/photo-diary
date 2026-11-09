console.log("JS 已接通");

const greeting = "你好，照片日记";
console.log(greeting);

const diary = {mood:"开心",date:"11.09",title:"第四天"};
console.log(diary.title);

const mainTitle = document.querySelector('h1');
const mineTitle = document.querySelector('.all-diary-card h2');
// mainTitle.textContent = "更改标题";

const btn = document.querySelector('#更改标题');
  btn.addEventListener('click',function(){
  mainTitle.textContent = diary.title;
  mineTitle.textContent = diary.date;
}
);