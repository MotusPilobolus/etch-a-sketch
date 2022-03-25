function addGridBlock() {
    const gridBlock=document.createElement('div');
    const containerBlock=document.getElementById('16by16');
    gridBlock.classList.add('grid-item');
    gridBlock.addEventListener('mouseenter', function( event ) {
        this.classList.add('hovered');
    })
    containerBlock.appendChild(gridBlock);
}

function iterativeGridBlock(x) {
for (let i=0; i < x; i++) { addGridBlock();}
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
    iterativeGridBlock(pixelRequest * pixelRequest);
    
    modal.style.display = "none";
}
    
window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

document.addEventListener('DOMContentLoaded', function () {
iterativeGridBlock(256);
});