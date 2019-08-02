
let body = document.querySelector(`body`),
mainbx = document.querySelector(`#mainbx`),
ptul = document.querySelector(`#pt-ul`);
ptur = document.querySelector(`#pt-ur`);
ptbl = document.querySelector(`#pt-bl`);
ptbr = document.querySelector(`#pt-br`),
ptml = document.querySelector(`#pt-ml`),
ptmr = document.querySelector(`#pt-mr`),
reful = document.querySelector(`#reful`),
refur = document.querySelector(`#refur`),
refbl = document.querySelector(`#refbl`),
refbr = document.querySelector(`#refbr`);

let  anglecurr = 0;
let currmx, currmy,subx,suby;
let ulmove = 0,
urmove = 0,
blmove = 0,
brmove = 0,
mrmove = 0;

let 
width = ptur.offsetLeft - ptul.offsetLeft+ 10,
height = ptbl.offsetTop - ptul.offsetTop+ 10;

let centerx = mainbx.offsetLeft + Math.ceil(width/2),
centery = mainbx.offsetTop + Math.ceil(height/2);

function dragstart(event){
     currmx = event.x;
     currmy = event.y;
     subx = event.x - mainbx.offsetLeft;
     suby = event.y - mainbx.offsetTop;
}

function dragend(event){
 
width = ptur.offsetLeft - ptul.offsetLeft+ 10;
height = ptbl.offsetTop - ptul.offsetTop+ 10;

ptul.style.top = `${event.y - suby + 10}px`;
ptul.style.left = `${event.x - subx + 10}px`;

ptur.style.top = `${event.y - suby}px`;
ptur.style.left = `${event.x+width - subx}px`;

ptbl.style.top = `${event.y+height - suby}px`;
ptbl.style.left = `${event.x - subx}px`;

ptbr.style.top = `${event.y+height - suby}px`;
ptbr.style.left = `${event.x+width - subx}px`;

ptml.style.top = `${(ptul.offsetTop + ptbl.offsetTop)/2}px`;
ptml.style.left = `${ptul.offsetLeft}px`;

ptmr.style.top = `${(ptur.offsetTop + ptbr.offsetTop)/2}px`;
ptmr.style.left = `${ptur.offsetLeft}px`;

mainbx.style.left = `${event.x - subx}px`;
mainbx.style.top = `${event.y - suby}px`;

}

function dragendul(event){
console.log(event);


if(event.x<ptur.offsetLeft&&event.y<ptbl.offsetTop){

ptul.style.top = `${event.y}px`;
ptul.style.left = `${event.x}px`;

ptur.style.top = `${event.y}px`;

ptbl.style.left = `${event.x}px`;

ptmr.style.left = `${ptur.offsetLeft}px`;
ptmr.style.top = `${(ptur.offsetTop + ptbr.offsetTop)/2}px`;

mainbx.style.left = `${event.x}px`;
mainbx.style.top = `${event.y}px`;

mainbx.style.width = `${Number(ptur.offsetLeft)-Number(ptul.offsetLeft)}px`;
mainbx.style.height = `${Number(ptbl.offsetTop)-Number(ptul.offsetTop)}px`;
}
}

function dragendur(event){

console.log(event);


if(event.x>ptul.offsetLeft&&event.y<ptbr.offsetTop){
ptur.style.top = `${event.y}px`;
ptur.style.left = `${event.x}px`;

ptul.style.top = `${event.y}px`;


ptbr.style.left = `${event.x}px`;

ptmr.style.left = `${ptur.offsetLeft}px`;
ptmr.style.top = `${(ptur.offsetTop + ptbr.offsetTop)/2}px`;

mainbx.style.left = `${ptul.style.left}`;
mainbx.style.top = `${ptul.style.top}`;

mainbx.style.width = `${Number(ptur.offsetLeft)-Number(ptul.offsetLeft)}px`;
mainbx.style.height = `${Number(ptbl.offsetTop)-Number(ptul.offsetTop)}px`;
}
}

function dragendbl(event){
console.log(event);



if(event.x<ptbr.offsetLeft&&event.y>ptul.offsetTop){
ptbl.style.top = `${event.y}px`;
ptbl.style.left = `${event.x}px`;

ptbr.style.top = `${event.y}px`;


ptul.style.left = `${event.x}px`;

ptmr.style.left = `${ptur.offsetLeft}px`;
ptmr.style.top = `${(ptur.offsetTop + ptbr.offsetTop)/2}px`;

mainbx.style.left = `${ptul.style.left}`;
mainbx.style.top = `${ptul.style.top}`;

mainbx.style.width = `${Number(ptur.offsetLeft)-Number(ptul.offsetLeft)}px`;
mainbx.style.height = `${Number(ptbl.offsetTop)-Number(ptul.offsetTop)}px`;
}
}

function dragendbr(event){

console.log(event);
if(event.x>ptul.offsetLeft&&event.y>ptur.offsetTop){
ptbr.style.top = `${event.y}px`;
ptbr.style.left = `${event.x}px`;

ptbl.style.top = `${event.y}px`;


ptur.style.left = `${event.x}px`;

ptmr.style.left = `${ptur.offsetLeft}px`;
ptmr.style.top = `${(ptur.offsetTop + ptbr.offsetTop)/2}px`;

mainbx.style.left = `${ptul.style.left}`;
mainbx.style.top = `${ptul.style.top}`;

mainbx.style.width = `${Number(ptur.offsetLeft)-Number(ptul.offsetLeft)}px`;
mainbx.style.height = `${Number(ptbl.offsetTop)-Number(ptul.offsetTop)}px`;
}
}


function dragendmr(event){
    let xcord = event.x,
        ycord = event.y;
        centerx = (ptul.offsetLeft+ptbr.offsetLeft)/2;
        centery = (ptul.offsetTop+ptbr.offsetTop)/2;

    if(xcord>centerx){
        if(xcord<ptmr.offsetLeft&&xcord>ptml.offsetLeft){
        height = Number(ycord - centery);
        width = Number(xcord - centerx);
        let angleapp1 = Math.atan(height/width);
        mainbx.style.transform = `rotate(${angleapp1 + anglecurr}rad)`;
        anglecurr = angleapp1 + anglecurr;
        ptul.style.top = `${mainbx.offsetTop}px`;
        ptul.style.left = `${mainbx.offsetLeft}px`;
    } 
  }

  if(xcord<centerx){
    if(xcord<ptmr.offsetLeft&&xcord>ptml.offsetLeft){
    height = Number(ycord - centery);
    width = Number(centerx - xcord);
    let angleapp2 = Math.atan(height/width);
    if(Math.sign(angleapp2)==1){
    mainbx.style.transform = `rotate(${3.14-angleapp2+anglecurr}rad)`;
    anglecurr = 3.14-angleapp2+anglecurr; 
    }else{
    mainbx.style.transform = `rotate(${-3.14-angleapp2+anglecurr}rad)`;
    anglecurr = -3.14-angleapp2+anglecurr;      
}
} 
}
}