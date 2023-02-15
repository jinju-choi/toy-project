const sidebar = document.querySelector('.sidebar');
const closeToggle = document.querySelector('.close-toggle');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar')
});

closeToggle.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
});