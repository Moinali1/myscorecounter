//for homescore side
let hscore=document.getElementById("homescore");
let hmove=[0];
let hundo=-1;
let hcount=0;
function addh1()
{
 hcount+=1;
 hmove.push(1)
 hscore.textContent=hcount;
 checkforenable_inhome()
}
function addh3()
{
 hcount+=3;
 hmove.push(3)
 hscore.textContent=hcount;
 checkforenable_inhome()
}
function addh5()
{
    hcount+=5;
    hmove.push(5)
    hscore.textContent=hcount;
    checkforenable_inhome()
}
function hback()
{
    hcount-=hmove.at(hundo);
    hscore.textContent=hcount
    hmove.pop();
    checkfordisable_inhome()
}


function checkforenable_inhome()
{
    if (hmove.length>0)
    {
    document.getElementById("homeundo-button").disabled=false;
    }
}
function checkfordisable_inhome()
{
    if (hmove.length==0)
    {
    document.getElementById("homeundo-button").disabled=true;
    }
}

//for reset button in home
function hreset()
{
    hmove=[];
    hcount=0;
    hscore.textContent=hcount;
    document.getElementById("homeundo-button").disabled=true;
}

// for guestscore side

let gscore=document.getElementById("guestscore");
let gmove=[0];
let gundo=-1;
let gcount=0;
function addg1()
{
 gcount+=1;
 gmove.push(1)
 gscore.textContent=gcount;
 checkforenable_inguest()
}
function addg3()
{
 gcount+=3;
 gmove.push(3)
 gscore.textContent=gcount;
 checkforenable_inguest()
}
function addg5()
{
    gcount+=5;
    gmove.push(5)
    gscore.textContent=gcount;
    checkforenable_inguest()
}
function gback()
{
    gcount-=gmove.at(gundo);
    gscore.textContent=gcount
    gmove.pop();
    checkfordisable_inguest()
}


function checkforenable_inguest()
{
    if (gmove.length>0)
    {
    document.getElementById("guestundo-button").disabled=false;
    }
}
function checkfordisable_inguest()
{
    if (gmove.length==0)
    {
    document.getElementById("guestundo-button").disabled=true;
    }
}

//for reset button in home
function greset()
{
    gmove=[];
    gcount=0;
    gscore.textContent=gcount;
    document.getElementById("guestundo-button").disabled=true;
}


// setting the timer
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh ==0){
        hh=12;
     }
     if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    setTimeout(function(){ currentTime() }, 1000); 
  
  }
  currentTime();