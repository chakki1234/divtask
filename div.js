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

let width = ptur.offsetLeft+10,
    height = ptbl.offsetTop+10,
    ulmove = 0,
    urmove = 0,
    blmove = 0,
    brmove = 0,
    mrmove = 0;

let centerx = mainbx.offsetLeft + Math.ceil(width/2),
    centery = mainbx.offsetTop + Math.ceil(height/2);

function dragend(event){
    console.log(`main div function`);
    if(ulmove==0&&urmove==0&&blmove==0&&brmove==0&&mrmove==0){
    console.log(`it is excuted`);

    mainbx.style.left = `${event.x}px`;
    mainbx.style.top = `${event.y}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`;
    
    } else {
        ulmove=0;
        urmove=0;
        blmove=0;
        brmove=0;
        mrmove=0;
    }
// ptul.style.top = `${event.y+10}px`;
// ptul.style.left = `${event.x+10}px`;

// ptur.style.top = `${event.y+10}px`;
// ptur.style.left = `${event.x+width+10}px`;

// ptbl.style.top = `${event.y+height+10}px`;
// ptbl.style.left = `${event.x+10}px`;

// ptbr.style.top = `${event.y+height+10}px`;
// ptbr.style.left = `${event.x+width+10}px`;

// ptml.style.top = `${(ptul.offsetTop + ptbl.offsetTop)/2}px`;
// ptml.style.left = `${ptul.offsetLeft}px`;

// ptmr.style.top = `${(ptur.offsetTop + ptbr.offsetTop)/2}px`;
// ptmr.style.left = `${ptur.offsetLeft}px`;
}

function dragendul(event){
console.log(event);

if(event.x>=mainbx.offsetLeft&&event.y<=mainbx.offsetTop){
    ulmove = 1;
    width = ptur.offsetLeft + 10 - (event.x-mainbx.offsetLeft);
    height = ptbl.offsetTop + 10 + (mainbx.offsetTop - event.y);
    mainbx.style.top = `${event.y}px`;
    mainbx.style.left = `${event.x}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

else if(event.x<=mainbx.offsetLeft&&event.y<=mainbx.offsetTop){
    ulmove = 1;
    width = ptur.offsetLeft + 10 + (mainbx.offsetLeft - event.x);
    height = ptbl.offsetTop + 10 + (mainbx.offsetTop - event.y);
    mainbx.style.top = `${event.y}px`;
    mainbx.style.left = `${event.x}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

else if(event.x>=mainbx.offsetLeft&&event.y>=mainbx.offsetTop){
    ulmove = 1;
    width = ptur.offsetLeft + 10 - (event.x-mainbx.offsetLeft);
    height = ptbl.offsetTop + 10 - (event.y-mainbx.offsetTop );
    mainbx.style.top = `${event.y}px`;
    mainbx.style.left = `${event.x}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

else if(event.x<=mainbx.offsetLeft&&event.y>=mainbx.offsetTop){
    ulmove = 1;
    width = ptur.offsetLeft + 10 + (mainbx.offsetLeft - event.x);
    height = ptbl.offsetTop + 10 - (event.y-mainbx.offsetTop);
    mainbx.style.top = `${event.y}px`;
    mainbx.style.left = `${event.x}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

// if(event.x<ptur.offsetLeft&&event.y<ptbl.offsetTop){

// ptul.style.top = `${event.y}px`;
// ptul.style.left = `${event.x}px`;

// ptur.style.top = `${event.y}px`;


// ptbl.style.left = `${event.x}px`;

// mainbx.style.left = `${event.x}px`;
// mainbx.style.top = `${event.y}px`;

// mainbx.style.width = `${Number(ptur.offsetLeft)-Number(ptul.offsetLeft)}px`;
// mainbx.style.height = `${Number(ptbl.offsetTop)-Number(ptul.offsetTop)}px`;
// }
}

function dragendur(event){
    
console.log(event);

if(event.x>=mainbx.offsetLeft+width&&event.y<=mainbx.offsetTop){
    console.log(`first`);
    urmove = 1;
    width = ptur.offsetLeft + 10 + (event.x - (mainbx.offsetLeft+width));
    height = ptbl.offsetTop + 10 + (mainbx.offsetTop - event.y);
    mainbx.style.top= `${event.y}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

else if(event.x<=mainbx.offsetLeft+width&&event.y<=mainbx.offsetTop){
    console.log(`second`);
    urmove = 1;
    width = ptur.offsetLeft + 10 - (mainbx.offsetLeft + width - event.x);
    height = ptbl.offsetTop + 10 + (mainbx.offsetTop  - event.y);
    mainbx.style.top= `${event.y}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

else if(event.x>=mainbx.offsetLeft+width&&event.y>=mainbx.offsetTop){
    console.log(`third`);
    urmove = 1;
    width = ptur.offsetLeft + 10 + (event.x - (mainbx.offsetLeft+width));
    height = ptbl.offsetTop + 10 - (event.y - mainbx.offsetTop);
    mainbx.style.top= `${event.y}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

else if(event.x<=mainbx.offsetLeft+width&&event.y>=mainbx.offsetTop){
    console.log(`fourth`);
    urmove = 1;
    width = ptur.offsetLeft + 10 - (mainbx.offsetLeft + width - event.x);
    height = ptbl.offsetTop + 10 - (event.y - mainbx.offsetTop );
    mainbx.style.top= `${event.y}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}


// if(event.x>ptul.offsetLeft&&event.y<ptbr.offsetTop){
// ptur.style.top = `${event.y}px`;
// ptur.style.left = `${event.x}px`;

// ptul.style.top = `${event.y}px`;


// ptbr.style.left = `${event.x}px`;

// mainbx.style.left = `${ptul.style.left}`;
// mainbx.style.top = `${ptul.style.top}`;

// mainbx.style.width = `${Number(ptur.offsetLeft)-Number(ptul.offsetLeft)}px`;
// mainbx.style.height = `${Number(ptbl.offsetTop)-Number(ptul.offsetTop)}px`;
// }
}

function dragendbl(event){
console.log(event);

if(event.x>=mainbx.offsetLeft&&event.y<=mainbx.offsetTop+height){
    blmove = 1;
    width = ptur.offsetLeft + 10 - (event.x-mainbx.offsetLeft);
    height = ptbl.offsetTop + 10 - (mainbx.offsetTop + height - event.y);
    mainbx.style.left = `${event.x}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

else if(event.x<=mainbx.offsetLeft&&event.y<=mainbx.offsetTop+height){
    blmove = 1;
    width = ptur.offsetLeft + 10 + (mainbx.offsetLeft - event.x);
    height = ptbl.offsetTop + 10 - (mainbx.offsetTop + height - event.y);
    mainbx.style.left = `${event.x}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

else if(event.x>=mainbx.offsetLeft&&event.y>=mainbx.offsetTop+height){
    blmove = 1;
    width = ptur.offsetLeft + 10 - (event.x-mainbx.offsetLeft);
    height = ptbl.offsetTop + 10 + (event.y- (mainbx.offsetTop + height));
    mainbx.style.left = `${event.x}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}

else if(event.x<=mainbx.offsetLeft&&event.y>=mainbx.offsetTop+height){
    blmove = 1;
    width = ptur.offsetLeft + 10 + (mainbx.offsetLeft - event.x);
    height = ptbl.offsetTop + 10 + (event.y - (mainbx.offsetTop+height));
    mainbx.style.left = `${event.x}px`;
    mainbx.style.width = `${width}px`;
    mainbx.style.height = `${height}px`; 
    ptmr.style.top = `${height/2}px`;
    centerx = mainbx.offsetLeft + Math.ceil(width/2);
    centery = mainbx.offsetTop + Math.ceil(height/2);
}


// if(event.x<ptbr.offsetLeft&&event.y>ptul.offsetTop){
// ptbl.style.top = `${event.y}px`;
// ptbl.style.left = `${event.x}px`;

// ptbr.style.top = `${event.y}px`;


// ptul.style.left = `${event.x}px`;

// mainbx.style.left = `${ptul.style.left}`;
// mainbx.style.top = `${ptul.style.top}`;

// mainbx.style.width = `${Number(ptur.offsetLeft)-Number(ptul.offsetLeft)}px`;
// mainbx.style.height = `${Number(ptbl.offsetTop)-Number(ptul.offsetTop)}px`;
// }
}

function dragendbr(event){

    if(event.x>=mainbx.offsetLeft+width&&event.y<=mainbx.offsetTop+height){
        console.log(`first`);
        brmove = 1;
        width = ptur.offsetLeft + 10 + (event.x - (mainbx.offsetLeft+width));
        height = ptbl.offsetTop + 10 - (mainbx.offsetTop + height - event.y);
        mainbx.style.width = `${width}px`;
        mainbx.style.height = `${height}px`; 
        ptmr.style.top = `${height/2}px`;
        centerx = mainbx.offsetLeft + Math.ceil(width/2);
        centery = mainbx.offsetTop + Math.ceil(height/2);
    }
    
    else if(event.x<=mainbx.offsetLeft+width&&event.y<=mainbx.offsetTop+height){
        console.log(`second`);
        brmove = 1;
        width = ptur.offsetLeft + 10 - (mainbx.offsetLeft + width - event.x);
        height = ptbl.offsetTop + 10 - (mainbx.offsetTop + height - event.y);
        mainbx.style.width = `${width}px`;
        mainbx.style.height = `${height}px`; 
        ptmr.style.top = `${height/2}px`;
        centerx = mainbx.offsetLeft + Math.ceil(width/2);
        centery = mainbx.offsetTop + Math.ceil(height/2);
    }
    
    else if(event.x>=mainbx.offsetLeft+width&&event.y>=mainbx.offsetTop+height){
        console.log(`third`);
        brmove = 1;
        width = ptur.offsetLeft + 10 + (event.x - (mainbx.offsetLeft+width));
        height = ptbl.offsetTop + 10 + (event.y - (mainbx.offsetTop + height));
        mainbx.style.width = `${width}px`;
        mainbx.style.height = `${height}px`; 
        ptmr.style.top = `${height/2}px`;
        centerx = mainbx.offsetLeft + Math.ceil(width/2);
        centery = mainbx.offsetTop + Math.ceil(height/2);
    }
    
    else if(event.x<=mainbx.offsetLeft+width&&event.y>=mainbx.offsetTop+height){
        console.log(`fourth`);
        brmove = 1;
        width = ptur.offsetLeft + 10 - (mainbx.offsetLeft + width - event.x);
        height = ptbl.offsetTop + 10 + (event.y - (mainbx.offsetTop + height));
        mainbx.style.width = `${width}px`;
        mainbx.style.height = `${height}px`; 
        ptmr.style.top = `${height/2}px`;
        centerx = mainbx.offsetLeft + Math.ceil(width/2);
        centery = mainbx.offsetTop + Math.ceil(height/2);
    }
    

// console.log(event);
// if(event.x>ptul.offsetLeft&&event.y>ptur.offsetTop){
// ptbr.style.top = `${event.y}px`;
// ptbr.style.left = `${event.x}px`;

// ptbl.style.top = `${event.y}px`;


// ptur.style.left = `${event.x}px`;

// mainbx.style.left = `${ptul.style.left}`;
// mainbx.style.top = `${ptul.style.top}`;

// mainbx.style.width = `${Number(ptur.offsetLeft)-Number(ptul.offsetLeft)}px`;
// mainbx.style.height = `${Number(ptbl.offsetTop)-Number(ptul.offsetTop)}px`;
// }
}

function dragendmr(event){
    let xcord = event.x,
        ycord = event.y;


    if(xcord>centerx){
        mrmove=1;
        // if(xcord<ptmr.offsetLeft&&xcord>ptml.offsetLeft){
        height = Number(ycord - centery);
        width = Number(xcord - centerx);
        let angleapp1 = Math.atan(height/width);
        console.log(angleapp1);
        mainbx.style.transform = `rotate(${angleapp1 + anglecurr}rad)`;
        anglecurr = angleapp1 + anglecurr;
        // }
  }

  if(xcord<centerx){
    // if(xcord<ptmr.offsetLeft&&xcord>ptml.offsetLeft){
    mrmove=1;
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
// } 
}
}


// function dragendmr(event){
//     let xcord = event.x,
//         ycord = event.y;

//     if(xcord-ptml.offsetLeft>ptmr.offsetLeft-xcord){
//         if(xcord<ptmr.offsetLeft&&xcord>ptml.offsetLeft){
//         height = Number(ycord - ptmr.offsetTop);
//         width = Number(ptmr.offsetLeft - xcord);
//         angle = Math.atan(height/width);
//         mainbx.style.transform = `rotate(${angle}rad)`;
//     } 
//   }

//   if(xcord-ptml.offsetLeft<ptmr.offsetLeft-xcord){
//     if(xcord<ptmr.offsetLeft&&xcord>ptml.offsetLeft){
//     height = Number(ycord - ptmr.offsetTop);
//     width = Number(ptmr.offsetLeft - xcord);
//     angle = Math.atan(height/width);
//     if(Math.sign(angle)==1)
//     mainbx.style.transform = `rotate(${3.14-angle}rad)`;
//     else
//     mainbx.style.transform = `rotate(${-3.14-angle}rad)`;
// } 
// }
// }
