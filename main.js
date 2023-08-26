var nose_x;
var nose_y;
var birb_nose="";

function preload(){
    birb_nose=loadImage("https://i.postimg.cc/fy5pDKkZ/birb-removebg-preview.png");
}
function setup(){
    var canvas=createCanvas(300,300);
    canvas.position(500,250);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getposes);

}
function draw(){
    image(video,0,0,300,300);
    image(birb_nose,nose_x,nose_y,40,40);
}
function takeSnap(){
    save("img.png");
} 

function modelloaded(){
    console.log("model loaded");
}

function getposes(results){
    if(results.length>0){   
        console.log(results);
        nose_x=results[0].pose.nose.x-15;
        console.log("x position of nose - "+nose_x);
        nose_y=results[0].pose.nose.y-10;
        console.log("y position of nose - "+nose_y);
    }
}