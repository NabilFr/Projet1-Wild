
//déclaration de mes fonctions pour mouseenter et mouseleave
const selector = document.getElementById('atak');
const deselector = document.getElementsByClassName('left');
let left = [0, 1, 2, 3]
selector.addEventListener('mouseenter', event => {
    const choiceSpan = document.getElementById('banner1');
    choiceSpan.style.backgroundImage = "url(" + `http://127.0.0.1:5500/Projet1.2/images/banner_att_titansJS.png` + ")";
})
//boucle afin de parcourir les index de ma class left
for (let i=0; i < left.length; i++){
  deselector[i].addEventListener('mouseleave', event => {
    const choiceSpan = document.getElementById('banner1');
    choiceSpan.style.backgroundImage = "url(" + `http://127.0.0.1:5500/Projet1.2/images/banner_1_final_desktop.png` + ")";
  })
}
deselector[0]

const selector2 = document.getElementById('dbz');
selector2.addEventListener('mouseenter', event => {
  const choiceSpan = document.getElementById('banner1');
  choiceSpan.style.backgroundImage = "url(" + `http://127.0.0.1:5500/Projet1.2/images/banner_dbzJs.png` + ")";
})
deselector[1]

const selector3 = document.getElementById('hxh');
selector3.addEventListener('mouseenter', event => {
  const choiceSpan = document.getElementById('banner1');
  choiceSpan.style.backgroundImage = "url(" + `http://127.0.0.1:5500/Projet1.2/images/banner_hxhJs.png` + ")";
})
deselector[2]

const selector4 = document.getElementById('op');
selector4.addEventListener('mouseenter', event => {
  const choiceSpan = document.getElementById('banner1');
  choiceSpan.style.backgroundImage = "url(" + `http://127.0.0.1:5500/Projet1.2/images/banner_one_pieceJS.png` + ")";
})
deselector[3]


const openGif = document.getElementsByClassName('open');
const closeGif = document.getElementsByClassName('close');
const choiceGif = document.getElementsByClassName('hide');
const hideBitch = document.getElementsByClassName('hide');
let open = [0,1,3,4,5,6,7,8]
let close = [0,1,3,4,5,6,7,8]
for (let i=0; i < open.length; i++){
  openGif[i].addEventListener('click', event => {
    event.preventDefault();
    choiceGif[0].style.display='block';
  });
}
for (let i=0; i < open.length; i++){
  closeGif[0].addEventListener('click', event => {
    event.preventDefault();
    hideBitch[0].style.display='none';
})
}
//closeGif[0].addEventListener('click', () => {
  //modalButton.style.display = 'none';
  //openButton.style.display = 'inline';
//});