




function darkMode(){
    const root = document.documentElement;
    root.style.setProperty('--fff','#191919');
    // root.style.setProperty('--ccc','#343434');
    root.style.setProperty('--eee','#323232');
    root.style.setProperty('--ddd','#191919');
    root.style.setProperty('--color333','#fff');
    root.style.setProperty('--color000','#fff');
}

function lightMode(){
    const root = document.documentElement;
    root.style.setProperty('--fff','#fff');
    root.style.setProperty('--ccc','#ccc');
    root.style.setProperty('--eee','#eee');
    root.style.setProperty('--ddd','#ddd');
    root.style.setProperty('--color333','#333');
    root.style.setProperty('--color000','#000');
}

function switchMode(){
    console.log("hii");
    const button = document.getElementsByClassName('switchMode');
    const text = button[0].innerHTML;
    const isLight = " LIGHT MODE "

    console.log(text);
    console.log(isLight);
    if(text == isLight){
        button[0].innerHTML = " Dark Mode ";
        darkMode();
    }else{
        button[0].innerHTML = " LIGHT MODE ";
        lightMode();
    }
}


const modal= document.querySelector(".modal");
const overlay= document.querySelector(".overlay");

// Modal open function 

const openModal=()=>
{
    console.log("Opening Modal");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");

}

// closing Modal Function 

const closeModal=()=>{
    console.log("Closing Modal")
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
}

function fun(){
    document.getElementById("frame").style.visibility="visible";
    document.getElementById("frame").classList.add("style");
}
function remove(){
    document.getElementById("frame").classList.remove("style");
    document.getElementById("frame").style.visibility="hidden";
}
function backToLogin(){
    window.location.href="login.html"
}

fun();
remove();


