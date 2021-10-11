const navs = document.getElementsByClassName('navs');

navs[0].onclick = function() {
    window.scroll({top:0, behavior: 'smooth'})
}
navs[1].onclick = function() {
    window.scroll({top:1013, behavior: 'smooth'})
}
navs[2].onclick = function() {
    window.scroll({top:2022, behavior: 'smooth'})
}
navs[3].onclick = function() {
    window.scroll({top:3030, behavior: 'smooth'})
}
navs[4].onclick = function() {
    window.scroll({top:4090, behavior: 'smooth'})
}

const nav_color = "rgb(86, 214, 176)";

window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop;

    if (scrollLocation >= 0 && scrollLocation <= 400) {
        navs[0].style.color=nav_color;

    } else if (scrollLocation >= 600 && scrollLocation <= 1500) { /* PORTFOLIO */
        navs[1].style.color=nav_color;

    } else if (scrollLocation >= 1600 && scrollLocation <= 2400) { /* PORTFOLIO */
        navs[2].style.color=nav_color;

    } else if (scrollLocation >= 2700 && scrollLocation <= 3500) { /* PORTFOLIO */
        navs[3].style.color=nav_color;
        
    } else if (scrollLocation >= 3700 && scrollLocation <= 4115) { /* PORTFOLIO */
        navs[4].style.color=nav_color;

    } else {
    navs[0].style.color="white";
    navs[1].style.color="white";
    navs[2].style.color="white";
    navs[3].style.color="white";
    navs[4].style.color="white";
    }
})

const header = document.getElementById('header');
const headerBtn = document.getElementById('header_btn');

function headerIn() {
    headerBtn.innerHTML=">";
}
function headerOut() {
    headerBtn.innerHTML="<";
}