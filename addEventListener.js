let _clickBtn = document.getElementById("clickBtn");
_clickBtn.addEventListener("click", clickFunction);

function clickFunction() {
    document.getElementById("text").innerHTML += "clicked!<br>";
}

let _overBtn = document.getElementById("overBtn");
_overBtn.addEventListener("mouseover", overFunction);

function overFunction() {
    document.getElementById("text").innerHTML += "mouse Over !<br>"
}

let _outBtn = document.getElementById("outBtn");
_outBtn.addEventListener("mouseout", outFunction);

function outFunction() {
    document.getElementById("text").innerHTML += "mouse Out !<br>"
}