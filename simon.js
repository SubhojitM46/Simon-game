let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelup();
    }

});
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function checkAns(idx){
    //console.log("Current level:",level);
    //let idx=level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score is <b>${level}</b><br>Press Over Any Key to Start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);//after 250ms again reset screen to white
        reset();
    }
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);//randColor is a variable
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnflash(randbtn);
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    //console.log(this);//prints which current button is click
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    //console.log(usercolor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}
