function preload(){}
function setup(){
    canvas = createCanvas(640,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,60,40,490,400);
    fill(240, 115, 217);
    stroke(237, 52, 203);
    circle(55,50,90);
    circle(550,50,90);
    circle(55,430,90);
    circle(550,430,90);
    fill(240, 43, 205);
    stroke(240, 43, 205);
    rect(99,40,408,25);
    rect(99,420,408,25);
    rect(43,94,25,293);
    rect(538,94,25,293);
}
function take_snapshot(){
    save('photo_frame.png')
}