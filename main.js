
var nose_x, nose_y;

function preload(){
    
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    my_poseNet = ml5.poseNet(video,model_loaded);

    my_poseNet.on('pose', got_posenet);
    
}

function got_posenet(results)
{
    if(results.length > 0){
        //console.log(results);

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

        console.log("Nose X Position : ", nose_x);
        console.log("Nose Y Position : ", nose_y);
;
    }
   
}





function model_loaded(){
    console.log("model is loaded");
}




function draw(){
    image(video, 0, 0, 300,300);
}



function takeSnap()
{
    save("clown_nose_filter.png");
}


