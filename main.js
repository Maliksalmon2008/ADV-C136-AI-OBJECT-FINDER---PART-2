function setup(){
    canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.size(500,500);
video.hide();
}

function preload(){

}

function start(){
    objectdetector = ml5.objectDetector("cocossd", modelloaded);
        document.getElementById("status").innerHTML = "Status : detecting objects";
}

function modelloaded(){
    console.log("modelloaded");
    status = true;
}


function draw(){
    video.center();
    
}