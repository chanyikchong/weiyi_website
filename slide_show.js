$(function () {
    // 实现自动播放
    var p=document.getElementsByClassName('img-g')[0];
    var img=p.getElementsByTagName("img")
    var button=document.querySelectorAll('.button-g span')
    // 设置3秒播放
    window.timer=setInterval(move,5000);
    // 轮播设置
    var move_x = img[0].clientWidth
    function move(){
        // bannerimage的宽度乘以图片的个数

        if(parseInt(p.style.left)>-4200){
            // 和bannerimage的宽度保持一致即可：700
            move_x = img[0].clientWidth
            p.style.left=parseInt(p.style.left)-move_x+'px'
            p.style.transition='left 1s';
            tog(-Math.round(parseInt(p.style.left)/move_x))
            if(parseInt(p.style.left)<=-move_x*img.length){
                setTimeout(function(){
                    tog(0)
                    p.style.left='0px'
                    p.style.transition='left 0s';
                },1000)
            }
        }else{
            p.style.left='0px'
            p.style.transition='left 0s';
        }
    }

    // 设置小圆点
    for(var i=0;i<button.length;i++){
        // button[i].style.backgroundColor='#eee';
        button[i].onclick=function(){
            p.style.left=-move_x*this.getAttribute('data-index')+'px'
            tog(this.getAttribute('data-index'))
            clearInterval(window.timer)
            window.timer=setInterval(move,5000);
        }
    }
    // 设置小圆点
    function tog(index){
        move_x = img[0].clientWidth
        console.log(move_x)
        if(index>5){
            tog(0);
            return;
        }
        for(var i=0;i<button.length;i++){
            button[i].style.backgroundColor='rgba(255, 255, 255, 0.5)';
        }
        button[index].style.backgroundColor='rgb(255, 255, 255)';
    }

    // 鼠标移上事件
    p.onmouseover=function(){
        clearInterval(window.timer)
    }
    // 鼠标移除事件
    p.onmouseout=function(){
        window.timer=setInterval(move,5000);
    }
});
