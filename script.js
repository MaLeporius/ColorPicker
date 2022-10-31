document.getElementById("btn1").addEventListener("click", rosso);
document.getElementById("btn2").addEventListener("click", giallo);
document.getElementById("btn3").addEventListener("click", verde);
document.getElementById("btn4").addEventListener("click", blu);
document.getElementById("btn5").addEventListener("click", viola);
document.getElementById("btn6").addEventListener("click", arancione);

function rosso() {
   document.body.style.backgroundColor = "red";
   document.body.style.color = "white";
}

function giallo() {
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";
}

function verde() {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
}

function blu() {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
}

function viola() {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
}

function arancione() {
    document.body.style.backgroundColor = "orange";
    document.body.style.color = "white";
}
