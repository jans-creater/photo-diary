console.log("JS 已接通");

const greeting = "你好，照片日记";
console.log(greeting);

const diary = {mood:"开心",date:"11.09",title:"第四天"};
console.log(diary.title);

const diaries = [
  {title: "第一条", mood:"今天心情还不错，充满好奇", text:"开始学习的第一天", date:"11.07", img:"01.jpg"},
  {title: "第二条", mood:"今天心情还可以", text:"开始学习的第二天", date:"11.08", img:"01.jpg"},
  {title: "第三条", mood:"今天心情还行", text:"开始学习的第三天", date:"11.09", img:"01.jpg"},
];

const cardList = document.querySelector('#card-list');

for(const one of diaries){
  const card = `
    <div class="diary-card">
      <h2>${one.title}</h2>
      <p>${one.text}</p>
      <p>${one.mood}</p>
      <img src="${one.img}" width="70%">
      <p>${one.date}</p>
    </div>
  `;
  cardList.innerHTML += card;
}

const mainTitle = document.querySelector('h1');
const mineTitles = document.querySelectorAll('.all-diary-card h2');
// mainTitle.textContent = "更改标题";

const btn = document.querySelector('#更改标题');
  btn.addEventListener('click',function(){
  mainTitle.textContent = diary.date;

  for(const oneTitle of mineTitles){
    oneTitle.textContent = diary.date;
  }
  // mineTitle.textContent = diary.date;
}
);

const titleInput = document.querySelector('#title-input');
const textInput = document.querySelector('#text-input');
const moodInput = document.querySelector('#mood-input');
const addBtn = document.querySelector('#add');

addBtn.addEventListener('click',function(){
  const title = titleInput.value;
  const text = textInput.value;
  const mood = moodInput.value;

  const newDiary = { title:title, mood:mood, text:text, date:"11.10", img:"01.jpg"};
  diaries.push(newDiary);

  const card = `
    <div class="diary-card">
      <h2>${newDiary.title}</h2>
      <p>${newDiary.mood}</p>
      <p>${newDiary.text}</p>
      <img src="01.jpg" width="70%">
      <p>${newDiary.date}</p>
    </div>
  `;
  cardList.innerHTML += card;

  titleInput.value = '';
  textInput.value = '';
  moodInput.value = '';

  mainTitle.textContent=`共${diaries.length}条日记`;
});



