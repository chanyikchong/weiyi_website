var is_play=true

function music(){
    var audio = document.getElementById("yellow");
    var img = document.getElementById("button_image")
    if (is_play){
        audio.play();
        is_play = false;
        img.src = "./img/stop.jpg" 
    }
    else {
        audio.pause();
        is_play = true;
        img.src = "./img/play.jpg"
    }
}

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

var pic_wh = [
    ["720", "540"],
    ["539","540"],
    ["480","720"],
    ["539","540"],
    ["540","959"],
    ["540","959"],
    ["810","540"],
    ["539","540"],
    ["539","540"],
    ["539","540"]
]
var pic_idx = 1;
function changepic(){
    var img = document.getElementById("wypic");
    img.src = pic[pic_idx];
    img.width = pic_wh[pic_idx][0];
    img.height = pic_wh[pic_idx][1];
    pic_idx ++;
    if (pic_idx>=pic.length){
        pic_idx = 0;
    }
}

window.onload = playmusic();
 