// rgba(o a 244, 0 a 255, 0 a 222. 0 a 1.0)
const rgb = [ ];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgbcolor = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    color.textContent = rgbcolor.toUpperCase();
    document.body.style.backgroundColor = rgbcolor;
});

console.log(finalColor)