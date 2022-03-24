function addGridBlock() {
    const gridBlock=document.createElement('div');
    const containerBlock=document.getElementById('16by16');
    gridBlock.classList.add('grid-item');
    containerBlock.appendChild(gridBlock);
}

function iterativeGridBlock() {
for (let i=0; i < 16; i++) { addGridBlock(); console.log('ran!')}
}

function hoverGridBlock (e) {
    const containerBlock=document.getElementById('16by16');
    console.log(e)
}

function hoverListener (e) {
const containerBlock=document.getElementById('16by16');
containerBlock.addEventListener('mouseenter', function (e) {
    this.classList.add('hovered'); 
});
}

document.addEventListener('DOMContentLoaded', function () {
iterativeGridBlock();
hoverListener();
});