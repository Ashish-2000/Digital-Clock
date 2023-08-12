

let hh = document.getElementById("hhh");
let mm = document.getElementById("mmm");
let ss = document.getElementById("sss");
let am = document.getElementById("am");


function updateTime() {
    
    let date=new Date()
    
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hh.innerText = h;
    mm.innerText = m;
    ss.innerText = s;
    
    if (h > 12) {
        am.innerText = "PM"; 
    }
    else{am.innerText = "AM";}
}

setInterval(updateTime, 1000);
