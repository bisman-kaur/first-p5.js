function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    let c=color('lightcyan');
    fill(c);
    rect(35,45,20,390);
    rect(585,35,20,390);
    rect(35,425,540,20);
    rect(35,35,540,20);
    let d=color('lightpink')
    fill(d);
    circle(45,45,60);
    circle(595,45,60);
    circle(45,435,60);
    circle(595,435,60);
}

function take_snapshot(){
    save('photo_frame.png');
}