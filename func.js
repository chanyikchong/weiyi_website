var is_play=true

function music(){
    var audio = document.getElementById("yellow");
    var img = document.getElementById("button_image")
    if (is_play){
        audio.play();
        is_play = false;
        img.src = "https://github.com/chanyikchong/weiyi_website/blob/master/stop.jpg" 
    }
    else {
        audio.pause();
        is_play = true;
        img.src = "https://github.com/chanyikchong/weiyi_website/blob/master/play.jpg"
    }
}

var pic = [
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy1.jpg',
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy2.jpg',
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy3.jpg',
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy4.jpg',
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy5.jpg',
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy6.jpg',
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy7.jpg',
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy8.jpg',
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy9.jpg',
    'https://github.com/chanyikchong/weiyi_website/blob/master/wy10.jpg'
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
 