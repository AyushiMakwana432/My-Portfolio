// menu icon navbar// 
let menuIcon = document.querySelector ('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*scroll sections active link*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


// sticky navbar 
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

// remove menu icon navbar link scroll//
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

// dark light mode //
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

function gotowhasapp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var sub = document.getElementById("num").value;
    var msg = document.getElementById("sub").value;


    var url = "https://wa.me/+919712027090?text="
    + "Name: " + name + "%0a"
    + "Email: " + email + "%0a"
    + "Subject: " + sub + "%0a"
    + "Message: " + msg;
    window.open(url).focus();
}
  


// //  scroll reveal //

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img img, .Skills, .education, .contact',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p .about-content',{ origin: 'right' });

