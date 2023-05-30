let [milliseconds,seconds,minute,hour]=[0,0,0,0];
let timeref =document.querySelector(".displayclock");
let int;
let pause=true;
document.querySelector(".start").addEventListener("click",function(){
    if(pause){
        // clearInterval(int);
        pause=false;
        int =setInterval(displaytime,10);
    }
});
document.querySelector(".stop").addEventListener("click",function(){
    clearInterval(int);
    pause=true;
});
document.querySelector(".reset").addEventListener("click",function(){
    clearInterval(int);
    [milliseconds,seconds,minute,hour]=[0,0,0,0];
    timeref.innerHTML="00 : 00 : 00 : 000"
    // int=null;
    pause=true;


});

function displaytime(){
    milliseconds+=10
    if(milliseconds===1000){
        milliseconds=0;
        seconds++;
    }
    if(seconds===60){
        seconds=0;
        minute++;
    }

    if(minute===60){
        minute=0;
        hour++;
    }
    let h =hour<10 ?"0"+hour:hour;
    let m =minute<10 ?"0"+minute:minute;
    let s =seconds<10 ?"0"+seconds:seconds;
    let ms=milliseconds<10?"00"+milliseconds:milliseconds<100?"0"+milliseconds:milliseconds;
    timeref.innerHTML=h+" : "+m+" : "+s+" : "+ms;


      
}