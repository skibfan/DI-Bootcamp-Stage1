let redBox = document.getElementById('animate')
let containerBig = document.getElementById('container')
let flag = true


function myMove() {
    var pos = 0
    
    let id = setInterval(function() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++
            redBox.style.left = pos + "px";
        }
    }, 1);
}

