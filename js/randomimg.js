const img = ["img01.jpg","img02.jpg","img03.jpg","img04.jpg","img05.jpg"];
const randomeNum = Math.floor(Math.random()*img.length);
const randomImg = img[randomeNum];
const backgroundRandome = document.querySelector(".main-page__img");

console.log (randomImg);
backgroundRandome.src = `./assets/${randomImg}`;