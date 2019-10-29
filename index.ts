const userName: string = 'dom';

document.getElementById('user').innerHTML = `Hey ${userName}`;

//nav in header for toggle and display nav
const burgerMenue: any = document.querySelector('.uinav');
const nav: any = document.getElementsByClassName('nav');

function openNav() {
  nav[0].classList.toggle('closeNav')
  document.getElementById('barone').classList.toggle('disapear');
  document.getElementById('bartwo').classList.toggle('reverse');
  document.getElementById('barthree').classList.toggle('reversetwo');
}
burgerMenue.addEventListener('click', function() {
  openNav();
})







