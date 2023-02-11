random_no = Math.floor((Math.random()*array_1.length)+1)
console.log(quick_draw_data_set)
function setup()
{
    canvas = createCanvas(280 , 280)
    canvas.center()
    background("white")
    canvas.mouseReleased(classify_canvas)
    synth = window.speechSynthesis
}
 function clearcanvas()
 {
    background("white")
 }

 function preload()
 {
    classifier = ml5.imageClassifier("DoodleNet")
 }
 function draw()
 {
    strokeWeight(13)
    stroke(0)
    if (mouseIsPressed)
    {
        line(pmouseX , pmouseY , mouseX , mouseY)
    }
 }
 function classify_canvas()
 {
    classifier.classify(canvas , gotresult)
 }
 function gotresult(error , result)
 {
    if (error)
    {
        console.log(error)
    }
    console.log(result)
    document.getElementById("label").innerHTML = "label:" + result[0].label
    document.getElementById("confidence").innerHTML = "confidence:"+ Math.round(result[0].confidence * 100) + "%"
    utterthis = new SpeechSynthesisUtterance(result[0].label)
    synth.speak(utterthis)
 }