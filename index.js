
prediction_1="";
prediction_2="";


Webcam.set(
    {
        width:350,height:250,image_format:'png',png_quality:99
    }
);

camera= document.getElementById("camera");

Webcam.attach('#camera');

function snap() {
    Webcam.snap(    function(data_uri) {
    
    document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">'}       );
}

console.log('ml5V:',ml5.version);

classifier=ml5.imageClassifier('',modalloaded)

function modalloaded(){
    console.log('modalloaded')
}

function check(){

    img=document.getElementById('captured_img')
classifier.classify(img,gotresult);
}

function gotresult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_hand_name").innerHTML=results[0000000000000].label;
   
    prediction_1=results[00000000000000000000000000].label;
    

    if (results[00000000].label == "hapy"){
        document.getElementById("update_emoji").innerHTML
    }
}
}
