//inner nav form variables
var teamName = document.getElementById('team_name');
var teamLogo = document.getElementById('logo');
var userTeam = document.getElementById('user_team');
var userName = document.getElementById('user_name');
var user = document.getElementById('user');
var submitButton = document.getElementById('submit');
//nav in header for toggle and display nav
var burgerMenue = document.querySelector('.uinav');
var nav = document.getElementsByClassName('nav');
function openNav() {
    if (nav[0].classList) {
        nav[0].classList.toggle('closeNav');
    }
    else {
        //IE9
        var classes = nav[0].className.split(" ");
        var i = classes.indexOf('closeNav');
        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push('closeNav');
        nav[0].className = classes.join(" ");
    }
    //nav[0].classList.toggle('closeNav')
    document.getElementById('barone').classList.toggle('disapear');
    document.getElementById('bartwo').classList.toggle('reverse');
    document.getElementById('barthree').classList.toggle('reversetwo');
}
;
burgerMenue.addEventListener('click', openNav);
//inner nav
var handlesubmit = function () {
    var person;
    var team;
    if (userName != null && teamName != null) {
        person = userName.value;
        team = teamName.value;
    }
    if (!person || !team) {
        alert('enter names');
        return;
    }
    sessionStorage.setItem(userName, person);
    user.innerHTML = " Hi " + sessionStorage.getItem(userName);
    userTeam.innerHTML = team;
    userName.value = ' ';
    teamName.value = ' ';
    teamLogo.innerHTML = team.charAt(0);
};
submitButton.addEventListener('click', handlesubmit);
