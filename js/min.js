/****************************************************************************************************/
let count2001 = document.getElementById("p_2001");
let count2 = document.getElementById("p_2");
let count25 = document.getElementById("p_25");
let count550 = document.getElementById("p_550");



let valueOf2001 = Number(count2001.innerHTML);
let valueOf2 = Number(count2.innerHTML);
let valueOf25 = Number(count25.innerHTML);
let valueOf550 = Number(count550.innerHTML);

/****************************2001*************************************/

function countHight(){

    valueOf2001 +=5;

    if(valueOf2001==2001){
clearInterval(counter);
    }
    else if(valueOf2001==2000){

count2001.innerHTML=2001;
clearInterval(counter);
    }
    count2001.innerHTML=valueOf2001;
}

 let counter =setInterval(countHight,);
 
 /*******************************25**********************************/
 function count_25(){
    valueOf25 ++;
    if(valueOf25==25){
clearInterval(counter_25);
    }
    count25.innerHTML=valueOf25;
 }
 let counter_25 =setInterval(count_25,70);

 /*****************************2************************************/


 function count_2(){
    valueOf2 ++;
    if(valueOf2==2){
clearInterval(counter_2);
    }
    count2.innerHTML=valueOf2;
 }
 let counter_2 =setInterval(count_2,650);

/*****************************550************************************/
 function count_550(){
    valueOf550 +=5;
    if(valueOf550==550){
clearInterval(counter_550);
    }
    count550.innerHTML=valueOf550;
 }
 let counter_550 =setInterval(count_550,20);


 /************************************************************************************************/




