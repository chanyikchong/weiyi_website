function music(){
    var audio = document.getElementById("yellow");
    var img = document.getElementById("button_image")
    if (is_play){
        audio.play();
        is_play = false;
        img.src = "./img/fig/stop.jpg" 
    }
    else {
        audio.pause();
        is_play = true;
        img.src = "./img/fig/play.jpg"
    }
}


var is_play=true;
window.onload = music();
