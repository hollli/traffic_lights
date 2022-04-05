let timer = 0;
let timeStart = 0;
let redOn = 0;
let yellowOn = 200;
let lastYellowOn = 800;
let greenOn = 400;
let greenFlickerOn = 600;
let redYellowOn = 200;

let redOff = 400;
let yellowOff = 1000;
let lastYellowOff = 400;
let greenOff = 800;
let greenFlickerOff = 800;
let redYellowOff = 400;
let endCycle = Math.max(redOff,redOn,greenOn,greenOff,yellowOn,yellowOff,greenFlickerOff,greenFlickerOn,redYellowOff,redYellowOn,lastYellowOn,lastYellowOff);


let opacityHide = 0.33;
let opacityUnhide = 1;
function run() {
    document.getElementById("red").style.backgroundColor = "#ff0000";
    document.getElementById("yellow").style.backgroundColor = "#ffff00";
    document.getElementById("green").style.backgroundColor = "#00ff00";
    document.getElementById("green").style.opacity = opacityHide;
    document.getElementById("yellow").style.opacity = opacityHide;
    document.getElementById("red").style.opacity = opacityHide;
    timer++;
        if(timer>redOn&&timer<redOff){
            document.getElementById("red").style.opacity = opacityUnhide;
            document.getElementById("green").style.opacity = opacityHide;
            document.getElementById("yellow").style.opacity = opacityHide;
        }
        if(timer>yellowOn&&timer<yellowOff){
            document.getElementById("red").style.opacity = opacityHide;
            document.getElementById("green").style.opacity = opacityHide;
            document.getElementById("yellow").style.opacity = opacityUnhide;
        }
        if(timer>lastYellowOn&&timer<lastYellowOff){
            document.getElementById("red").style.opacity = opacityHide;
            document.getElementById("green").style.opacity = opacityHide;
            document.getElementById("yellow").style.opacity = opacityUnhide;
        }
        if(timer>greenOn&&timer<greenOff){
            document.getElementById("red").style.opacity = opacityHide;
            document.getElementById("yellow").style.opacity = opacityHide;
            document.getElementById("green").style.opacity = opacityUnhide;
        }
        if(timer>greenFlickerOn&&timer<greenFlickerOff){
            document.getElementById("red").style.opacity = opacityHide;
            document.getElementById("yellow").style.opacity = opacityHide;
            document.getElementById("green").style.opacity = opacityUnhide;
            if(timer % 10 > 5) {
                document.getElementById("green").style.opacity = opacityUnhide;
            }else {
                document.getElementById("green").style.opacity = opacityHide;
            }
        }

        if(timer>redYellowOn&&timer<redYellowOff) {
            document.getElementById("red").style.opacity = opacityUnhide;
            document.getElementById("yellow").style.opacity = opacityUnhide;
            document.getElementById("green").style.opacity = opacityHide;
        }
        if(timer === endCycle){
            timer = 0;
        }
}
setInterval(run, 30);