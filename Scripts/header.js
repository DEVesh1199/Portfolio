flag = 0;
document.querySelector('.js-hamburger').addEventListener('click', ()=>{
  if(flag === 0){
    document.getElementById('js-sidenav').style.transform = 'translateX(0px)';
    flag = 1;
  } else {
    document.getElementById('js-sidenav').style.transform = 'translateX(150px)';
    flag = 0;
  }
  
});

function flipCard(card) {
  card.classList.toggle('flipped');
}

