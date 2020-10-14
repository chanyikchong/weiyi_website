

function test(){
    var first_name = 'yichong';
    var last_name = 'chen';
    var name = first_name+' '+last_name
    var x = document.getElementById("output");
    console.log(x);
    x.style.color = "black";
    var slice = name.slice(0,3);
    var a = '5';
    var b = 3;
    var c = [0,1,2,3];
    list:{
        var i =0;
        do{
            i++;
            break list;
        }
        while (i<9);
    }
    x.innerHTML = i;
    list;
}

function get_name(){
    var x = document.getElementById("output");
    
    x.innerHTML = first_name;
}

function change_bg(){
    var x = document.getElementById("output");
    x.style.background = "red";
}

function reset_col(){
    var x = document.getElementById("output");
    x.style.background = 'grey';
}