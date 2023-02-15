const navToggle = document.querySelector('.nav-toggle');
const gnb = document.querySelector('.gnb');

navToggle.addEventListener('click', function(){
    if(gnb.classList.contains('show-gnb')){
        gnb.classList.remove('show-gnb');
    } else {
        gnb.classList.add('show-gnb');
    }
}); 