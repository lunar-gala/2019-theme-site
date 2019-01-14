function dispBack() {
    document.getElementById("nav-window").style = "background-color: #555555";
    document.getElementById("nav-window").innerHTML = "<h1>BACK</h1>";
}

function hideBack() {
    document.getElementById("nav-window").style = "background-color: transparent";
    document.getElementById("nav-window").innerHTML = "";
}

function goBack() {
    location.href = "index.html";
}