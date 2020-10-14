var is_play=true

function music(){
    var audio = document.getElementById("yellow");
    var img = document.getElementById("button_image")
    if (is_play){
        audio.play();
        is_play = false;
        img.src = "/stop.jpg" 
    }
    else {
        audio.pause();
        is_play = true;
        img.src = "/play.jpg"
    }
}

var pic = [
    '/wy1.jpg',
    '/wy2.jpg',
    '/wy3.jpg',
    '/wy4.jpg',
    '/wy5.jpg',
    '/wy6.jpg',
    '/wy7.jpg',
    '/wy8.jpg',
    '/wy9.jpg',
    '/wy10.jpg'
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
    console.log(img.width)
    img.src = pic[pic_idx];
    img.width = pic_wh[pic_idx][0];
    img.height = pic_wh[pic_idx][1];
    pic_idx ++;
    if (pic_idx>=pic.length){
        pic_idx = 0;
    }
    console.log(pic_wh[pic_idx][0])
    console.log(typeof(pic_wh[pic_idx][0]))
    console.log(img.width)
}

window.onload = playmusic();
 