let colorBtn = document.querySelector('#btn') 
let boxes = document.querySelectorAll('.box');
let spans = document.querySelectorAll('#mySpan');

running = false;

function getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = "#"
    for( let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function start() {
    if(running) {
        boxes.forEach(color => {
            color.style.background = getRandomColor()
        })
    } setTimeout(start, 3000)
}

colorBtn.addEventListener('click', () => {
    colorBtn.innerHTML = 'STOP'
    if(running) {
        running  = false
        colorBtn.innerText = 'CHANGE COLOR'
    } else {
        running = true  
        start()
    } 

    console.log('you clicked!');
})