let icons = document.querySelectorAll('.avatar');

window.onload = ()=>{
    for(let i=0;i<icons.length;i++){
        icons[i].style.animation = 'bounce-top 0.9s both';
        icons[i].style.animationDelay= `${i/2}s`;
    }
    window.addEventListener('scroll', ()=>{
        let y = window.pageYOffset;
        console.log(y)
        col1.style.transform = `translateY(${-(y/9.0)}px)`;
        col2.style.transform = `translateY(${(y/35.0)}px)`;
        col3.style.transform = `translateY(${-(y/25.0)}px)`;
        col4.style.transform = `translateY(${(y/15.0)}px)`;
    })
}
// setInterval(()=>{
//     for(let i=0;i<icons.length;i++){
//         icons[i].style.animation = '';
// }
// }, 4000)
let col1 = document.getElementById('column-1')
let col2 = document.getElementById('column-2')
let col3 = document.getElementById('column-3')
let col4 = document.getElementById('column-4')

