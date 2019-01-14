function dispBack() {
    document.getElementById("star").innerHTML = "<img id='star' src='../images/archFrames/dark-star.svg' style='transform: rotateY(180deg);'>";
}

function hideBack() {
    document.getElementById("nav-window").innerHTML = "<img id='star' src='images/archFrames/dark-star.svg'>";
}

function goBack() {
    location.href = "index.html";
}