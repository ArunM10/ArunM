const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


$(document).ready(function(){
$(window).scroll(function(){

    if($(this).scrollTop()>40){

        $('#topBtn').fadeIn();

    } else{
        $('#topBtn').fadeOut();
    }
});
$("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);

});
});


