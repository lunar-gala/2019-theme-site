//################### INDEX ###################

//Hover events for portal-a/b/c/d - displays information about respective pages

function showAbout() {
    document.getElementById("about-long").style.opacity = "1.0";
    document.getElementById("about-oct").style.opacity = "1.0";
}

function hideAbout() {
    document.getElementById("about-long").style.opacity = "0.0";
    document.getElementById("about-oct").style.opacity = "0.0";
}

function showTickets() {
    document.getElementById("tickets-long").style.opacity = "1.0";
    document.getElementById("tickets-oct").style.opacity = "1.0";
}

function hideTickets() {
    document.getElementById("tickets-long").style.opacity = "0.0";
    document.getElementById("tickets-oct").style.opacity = "0.0";
}

function showPeople() {
    document.getElementById("people-long").style.opacity = "1.0";
    document.getElementById("people-oct").style.opacity = "1.0";
}

function hidePeople() {
    document.getElementById("people-long").style.opacity = "0.0";
    document.getElementById("people-oct").style.opacity = "0.0";
}

function showLines() {
    document.getElementById("lines-long").style.opacity = "1.0";
    document.getElementById("lines-oct").style.opacity = "1.0";
}

function hideLines() {
    document.getElementById("lines-long").style.opacity = "0.0";
    document.getElementById("lines-oct").style.opacity = "0.0";
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