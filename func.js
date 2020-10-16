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

function slide() {
    function changepic(){
        
        img.src = pic[pic_idx];
        // img.width = pic_wh[pic_idx][0];
        // img.height = pic_wh[pic_idx][1];
        pic_idx ++;
        if (pic_idx>=pic.length){
            pic_idx = 0;
        }
    }

    var img = document.getElementById("wypic");
    
    var pic = [
        './img/wy1.jpg',
        './img/wy2.jpg',
        './img/wy3.jpg',
        './img/wy4.jpg',
        './img/wy5.jpg',
        './img/wy6.jpg',
        './img/wy7.jpg',
        './img/wy8.jpg',
        './img/wy9.jpg',
        './img/wy10.jpg'
    ];
    
    var slide_start = setInterval(changepic,5000);
    img.onmouseover = function () {
        clearInterval(slide_start);
    }
    img.onmouseout = function () {
        slide_start = setInterval(changepic,5000);
    }

}
var is_play=true;
// var pic_idx = 1;
// slide()
window.onload = music();
console.log(document.getElementById("1").clientWidth)