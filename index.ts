//inner nav form variables
let teamName: any = document.getElementById('team_name');
let teamLogo: any = document.getElementById('logo');
const userTeam: any = document.getElementById('user_team')
let userName: any = document.getElementById('user_name');
const user: any = document.getElementById('user');
const submitButton = document.getElementById('submit');

//nav in header for toggle and display nav
const burgerMenue: any = document.querySelector('.uinav');
const nav: any = document.getElementsByClassName('nav');

function openNav() {
  if (nav[0].classList) {
    nav[0].classList.toggle('closeNav')
  } else {
    //IE9
    const classes = nav[0].className.split(" ");
    const i = classes.indexOf('closeNav');

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push('closeNav');
      nav[0].className = classes.join(" ")
  }
  //nav[0].classList.toggle('closeNav')
  document.getElementById('barone').classList.toggle('disapear');
  document.getElementById('bartwo').classList.toggle('reverse');
  document.getElementById('barthree').classList.toggle('reversetwo');
};
burgerMenue.addEventListener('click', openNav);

//inner nav
const handlesubmit = () => {
  let person: string;
  let team: string;

  if (userName != null && teamName != null) {
    person = userName.value;
    team = teamName.value;
  }
  if (!person || !team ) {
    alert('enter names');
    return
  }
  sessionStorage.setItem(userName, person)
  user.innerHTML = ` Hi ${ sessionStorage.getItem(userName)}`;
  
  userTeam.innerHTML = team;
  userName.value = ' ';
  teamName.value = ' ';
  teamLogo.innerHTML = team.charAt(0);
};
submitButton.addEventListener('click', handlesubmit);

