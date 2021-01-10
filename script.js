var mode = 'white'
function modeChange(){
    switch(mode){
        case 'dark':
            modeLight();
            break;
        case 'white':
            modeDark();
            break;
        default:
            modeDark
    }
}
function modeLight(){
        document.getElementById("mode").innerHTML = '<i class="fas fa-moon" style="margin-right: 2px;"></i>Dark mode';
        document.getElementById("mode").style.backgroundColor = 'black';
        document.getElementById("mode").style.color = 'white';
        document.getElementById("body").style.backgroundColor = 'white';
        document.getElementById("body").style.color = 'black';
        document.getElementById("game-holder").style.backgroundColor = 'white';
        document.getElementById("game-holder").style.color = 'black';
        document.getElementById("bottom-line").style.color = "black";
        mode = 'white';
}
    
function modeDark(){
        document.getElementById("mode").innerHTML = '<i class="fas fa-sun" style="margin-right: 2px;"></i>Light mode';
        document.getElementById("mode").style.backgroundColor = 'white';
        document.getElementById("mode").style.color = 'black';
        document.getElementById("body").style.backgroundColor = 'black';
        document.getElementById("body").style.color = 'white';
        document.getElementById("game-holder").style.backgroundColor = 'black';
        document.getElementById("game-holder").style.color = 'white';
        document.getElementById("bottom-line").style.color = "white";
        mode = 'dark';
}

//---------------------------------

var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px"
    counter++;
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px"
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>500) || ((blockLeft<20)&&(blockLeft>-50)&&(((cTop<holeTop)||(cTop>holeTop+150))))){
        alert("Game over. Score: "+counter+". Press OK to continue.")
        character.style.top = 40 + "px";
        counter=0;
        location.reload();
    }
},10)

document.addEventListener("keydown", event => {
    if((event.key==="ArrowUp")){
        jump();
    }
});

document.getElementById("body").addEventListener("touchstart", jump());

function jump(){
    jumping = 1;
    jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(characterTop>40){
           character.style.top = (characterTop-5)+"px" 
        }
        if(jumpCount>12){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}