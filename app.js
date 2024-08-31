let countingDate=new Date("August 14, 2024").getTime();
let x=setInterval(function(){
let now=new Date().getTime();
let t=countingDate-now;
let d=Math.floor(t/(1000*60*60*24));
let h=Math.floor((t%(1000*60*60*24))/(1000*60*60));
let m=Math.floor((t%(1000*60*60))/(1000*60));
let s=Math.floor((t%(1000*60))/(1000));
document.getElementById("demo").innerHTML=d+"d "+h+"h "+m+"m "+s+"s ";
if(t<0){
    clearInterval(x);
    document.getElementById("demo").innerHTML="TIME UP";
}
},1000);