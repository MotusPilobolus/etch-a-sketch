function addGridBlock(hw) {
    const gridBlock=document.createElement('div');
    const containerBlock=document.getElementById('16by16');
    gridBlock.classList.add('grid-item');
    gridBlock.style.height=hw;
    gridBlock.style.width=hw;
    gridBlock.addEventListener('mouseenter', function( event ) {
        this.classList.add('hovered');
    })
    containerBlock.appendChild(gridBlock);
    console.log('added grid block!')
}

function iterativeGridBlock(x, hw) {
for (let i=0; i < x; i++) { addGridBlock(hw);}
}

function clearGridBlock() {
    let allGridBlocks=document.getElementsByClassName('grid-item');
    Array.from(allGridBlocks).forEach((x) => { x.remove(); } )
    }

var modal = document.getElementById("requestModal");
var btn = document.getElementById("shakeButton");
var pxlBtn = document.getElementById("pixelButton");


btn.onclick = function() {
      modal.style.display = "block";
      clearGridBlock();
    }

pxlBtn.onclick = function() {
    var pixelRequest = document.getElementById("pixelRequest").value;
    if (pixelRequest > 100) {pixelRequest = 100
        alert('Can\'t go higher than 100!');
    }
    var heightWidth = `${560 / pixelRequest}px`;
    var gridNumber = pixelRequest * pixelRequest
    iterativeGridBlock(gridNumber, heightWidth);
    modal.style.display = "none";
}
    
document.addEventListener('DOMContentLoaded', function () {
iterativeGridBlock(256, "36px");
});