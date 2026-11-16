import {diaries,owner} from './diaries.js';

let happyCount = 0;

console.log('照片日记·命令行版本');
console.log(`一共${diaries.length}条`);

for (const one of diaries){

  if(one.mood === '开心'){
    happyCount += 1;
  }

  console.log(`${one.title} | ${one.mood} | ${one.date}`);
}

console.log(`开心有:${happyCount}条`);
console.log(`作者:${owner}`);
