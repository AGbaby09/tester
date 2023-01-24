let col1 = document.getElementById('column-1')
let col2 = document.getElementById('column-2')
let col3 = document.getElementById('column-3')
let col4 = document.getElementById('column-4')
let rImg = document.querySelector('.rImg')
let span = document.querySelectorAll('.box span')
let forB = document.querySelectorAll(' #but2 .textCut .def')

let x = Math.random() * forB.length;
let z = Math.random() * forB.length;
let a = Math.random() * forB.length;

window.addEventListener('scroll', ()=>{
    let y = window.pageYOffset;
    col1.style.transform = `translateY(${-(y/9.0)}px)`;
    col2.style.transform = `translateY(${(y/35.0)}px)`;
    col3.style.transform = `translateY(${-(y/25.0)}px)`;
    col4.style.transform = `translateY(${(y/15.0)}px)`;
    // rImg[0].style.transform = `translateY(${(y/15.0)}px)`;
})  

console.log(forB)
setInterval(()=>{
    forB[x].style.transform = 'translateY(100%)';
    forB[z].style.transform = 'translateY(100%)';
    forB[a].style.transform = 'translateY(100%)';
}, 3000)