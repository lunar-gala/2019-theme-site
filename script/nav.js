//################### INDEX ###################

//Hover events for portal-a/b/c/d - displays information about respective pages

function dispAbout() {
    document.getElementById("long-window-text").innerHTML = "<h1>ABOUT display</h1>";
    document.getElementById("oct-window-text").innerHTML = "<h1>ABOUT display</h1>";
}

function dispTickets() {
    document.getElementById("long-window-text").innerHTML = "<h1>TICKETS display</h1>";
    document.getElementById("oct-window-text").innerHTML = "<h1>TICKETS display</h1>";
}

function dispPeople() {
    document.getElementById("long-window-text").innerHTML = "<h1>PEOPLE display</h1>";
    document.getElementById("oct-window-text").innerHTML = "<h1>PEOPLE display</h1>";
}

function dispLines() {
    document.getElementById("long-window-text").innerHTML = "<h1>LINES display</h1>";
    document.getElementById("oct-window-text").innerHTML = "<h1>LINES display</h1>";
}


//Onclick events to change between 4 pages
function gotoAbout() {
    location.href = "about.html";
}

function gotoTickets() {
    location.href = "tickets.html";
}

function gotoPeople() {
    location.href = "people.html";
}

function gotoLines() {
    location.href = "lines.html";
}

//################### SUBPAGES ###################

function dispBack() {  
    document.getElementById("logo-star").innerHTML = "<img src='images/archFrames/dark-star.svg'>"; 
}

function hideBack() {
    document.getElementById("logo-star").innerHTML = "<img src='images/archFrames/dark-star.svg' style='transform: rotate(45deg)'>"; 
}

function goBack() {
    location.href = "index.html";
}