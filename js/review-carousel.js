const reviews = [
    {
        id: 1,
        name: "harry potter",
        division: "Gryffindor",
        img: "../images/harry james potter.jpg",
        text: "Nunc pulvinar maximus nunc sed dictum. Morbi aliquet, nunc in placerat commodo, risus erat elementum orci, ut varius dolor velit ac nulla. Suspendisse nulla tellus, porttitor sit amet ante ut, efficitur pulvinar diam. Maecenas lacinia sagittis magna sit amet fringilla. Integer vestibulum pharetra libero, mollis sollicitudin sapien blandit ac. Integer ut elementum justo. Nulla id erat eu lacus porttitor feugiat.",
    },
    {
        id: 2,
        name: "ronald bilius weasley",
        division: "Gryffindor",
        img: "../images/ronald bilius weasley.jpg",
        text: "Donec at est nec ante viverra elementum. ",
    },
    {
        id: 3,
        name: "hermione jean granger",
        division: "Gryffindor",
        img: "../images/hermione jean granger.jpg",
        text: "Aenean blandit semper risus, quis dapibus tellus consectetur sit amet. Donec faucibus mi dolor, nec convallis nunc aliquam eget. Integer eu est augue. Praesent orci tortor, tristique id convallis sit amet, rhoncus in lectus. Proin imperdiet laoreet ex, in vestibulum leo cursus non. Maecenas blandit augue at mauris mattis molestie. Vivamus aliquam ipsum sit amet laoreet tincidunt.",
    },
    {
        id: 4,
        name: "dobby",
        division: "free",
        img: "../images/dobby.jpg",
        text: "Cras eget lectus quis lacus gravida pretium. Nullam iaculis sed risus non pellentesque. Praesent eget turpis maximus, fringilla mi tristique, porta massa. Aliquam consectetur consequat sem, in dignissim nisl. Duis vel leo sed velit rutrum efficitur et vitae ligula. ",
    },
    {
        id: 5,
        name: "draco lucius malfoy",
        division: "Slytherin",
        img: "../images/draco lucius malfoy.jpg",
        text: "Mauris porta mauris tempor mi efficitur, eu sagittis magna molestie. ",
    },
];


const img = document.querySelector('.person-img');
const name = document.querySelector('.name');
const division = document.querySelector('.division');
const info = document.querySelector('.info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// html 문서가 완전히 로드 되었을 때 동작
window.addEventListener('DOMContentLoaded', function(){
    showPerson();
});

function showPerson (){
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    division.textContent = item.division;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson();
    console.log(currentItem);
});

// show prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPerson();
    console.log(currentItem);
});

// random
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
    console.log(currentItem);
});
