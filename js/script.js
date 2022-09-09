let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let logiFormClose = document.querySelector('#form-close');
// const login_form = document.querySelector('.login-form-container');
// let soundBtn = document.querySelector('#sound-btn');

loginBtn.addEventListener('click', () => {
    loginForm.style.transition = '1s';
    loginForm.style.transform = 'translateY(200%)';
});

logiFormClose.addEventListener('click', () => {
    loginForm.style.transition = '1s';
    loginForm.style.transform = 'translateY(-200%)';
});

$(document).ready(function(){
    jQuery('#camera_wrap').camera({
        loader: false,
        pagination: false ,
        minHeight: '444',
        thumbnails: false,
        height: '48.375%',
        caption: true,
        navigation: true,
        fx: 'mosaic'
    });
    /*carousel*/
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            document.getElementById('google_translate_element').style.display = "none";
        }else{
            $('.navbar').removeClass("sticky");
            document.getElementById('google_translate_element').style.display = "block";
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.caption a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    // var typed = new Typed(".typing", {
    //     strings: ["Exquisite Hotels", "Quality food and drinks", "Safety and security", "Fastest Travels", "Memorable Adventures"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // owl carousel script
    // $('.carousel').owlCarousel({
    //     margin: 20,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0:{
    //             items: 1,
    //             nav: false
    //         },
    //         600:{
    //             items: 2,
    //             nav: false
    //         },
    //         1000:{
    //             items: 3,
    //             nav: false
    //         }
    //     }
    // });
});

function addImages(){
    for (var i = 1; i <= 9; i++) {
        var img = document.createElement('img');
        img.src = 'images/' + i + '.jpg';
        document.getElementById('images').appendChild(img);
    }
}

let audioBGM = new Audio("home_BGM.mp3");
audioBGM.volume = 0.2;
audioBGM.play();
setInterval(() => {
    if(audioBGM.ended || audioBGM.currentTime === 0 || audioBGM.paused){
        audioBGM = new Audio("home_BGM.mp3");
        audioBGM.volume = 0.2;
        audioBGM.play();
    }
}, 1000);

// soundBtn.addEventListener('click', () => {
//     if(audioBGM.volume === 0.5){
//         audioBGM.volume = 0;
//         soundBtn.classList.remove('fa-volume');
//         soundBtn.classList.add('fa-volume-slash');
//     }
//     else{
//         audioBGM.volume = 0.5;
//         soundBtn.classList.remove('fa-volume-slash');
//         soundBtn.classList.add('fa-volume');
//     }
// });

var show_gallery = 0;
function loadMoreImages()
{
    event.preventDefault();
    let hotels = document.querySelector('.images-hotel');
    let nature = document.querySelector('.images-nature');
    let cars = document.querySelector('.images-car');
    let btn_gallery = document.getElementById('_show_gallery');
    let hotel_str = '';
    let nature_str = '';
    let car_str = '';

    if(show_gallery === 0){
        for(let i = 1; i <= 9; i++){
            hotel_str += `<div class="image">
                            <img src ="images/gallery/room${i}.jpeg" alt="">
                        </div>`
            nature_str += `<div class="image">
                            <img src ="images/gallery/adv${i}.jpeg" alt="">
                        </div>`
            car_str += `<div class="image">
                            <img src ="images/gallery/car${i}.jpeg" alt=""> 
                        </div>`
        }
        hotels.innerHTML = hotel_str;
        nature.innerHTML = nature_str;
        cars.innerHTML = car_str;
        show_gallery = 1;
        btn_gallery.innerHTML = 'See Less';
    }

    else{
        for(let i = 1; i <= 3; i++){
            hotel_str += `<div class="image">
                            <img src ="images/gallery/room${i}.jpeg" alt="">
                        </div>`
            nature_str += `<div class="image">
                            <img src ="images/gallery/adv${i}.jpeg" alt="">
                        </div>`
            car_str += `<div class="image">
                            <img src ="images/gallery/car${i}.jpeg" alt=""> 
                        </div>`
        }
        hotels.innerHTML = hotel_str;
        nature.innerHTML = nature_str;
        cars.innerHTML = car_str;
        show_gallery = 0;
        btn_gallery.innerHTML = 'See More';
    }
}

function send_msg_emailjs()
{
    var params = {
        from_name: document.getElementById('full_name').value,
        email_id: document.getElementById('_email_id').value,
        subject: document.getElementById('_subject').value,
        message: document.getElementById('_message_body').value,
    }

    try {
        emailjs.send("service_p6rrzb6", "template_6iudc1j", params);
        alert("Message email-ed successfully!");
    } catch (error) {
        alert("Facing some errors while emailing..")
    }
}

// Netlify email -> samareshbanerjee786@gmail.com, password -> Banerjee@456#
// github -> git@banerjee123