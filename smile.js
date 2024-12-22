var path = document.getElementById('path');

var happyPath = 'M526 477C526 477 553 538.5 642.5 538.5C732 538.5 754 477 754 477';
var sadPath = 'M526 598.5C526 598.5 553 538.5 642.5 538.5C732 538.5 754 598.5 754 598.5';

var coord = 477;
var currentPath = '';
var speed = 10;

document.addEventListener('mousemove', (e)=>{
    coord =  e.clientY/667*(589-477) + 477;
    console.log(coord);
    path.setAttribute('d', currentPath);
    currentPath = `M526 ${coord}C526 ${coord} 553 538.5 642.5 538.5C732 538.5 754 ${coord} 754 ${coord}`;
});

var circles = document.querySelectorAll('circle');
circles.forEach((c)=>{
    c.addEventListener('mouseover', ()=>{
        c.setAttribute('fill', 'black');
    });
    c.addEventListener('mouseleave', ()=>{
        c.setAttribute('fill', 'white');
    });
});

animStep();