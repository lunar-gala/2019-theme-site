//Set ANOMIE showtime.
var showtime = new Date("Mar 2, 2019 20:00:00").getTime();

//Update the count down every minute.
var x = setInterval(
            function () {
                //Acquire current date/time.
                var now = new Date().getTime();

                //Find the distance between current date/time and the showtime.
                var distance = showtime - now;

                //Time calculations for days, hours, minutes and seconds
                var d = Math.floor(distance / (1000 * 60 * 60 * 24));
                var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

                //Display day/hour/minutes in respective divs. 
                document.getElementById("days").innerHTML = "<h2>" + d + "</h2>";
                document.getElementById("hours").innerHTML = "<h2>" + h + "</h2>";
                document.getElementById("minutes").innerHTML = "<h2>" + m + "</h2>";
             
                if (distance < 0) {
                    //Clear the interval.
                    clearInterval(x);

                    //Make the countdown elements & their titles disappear.
                    document.getElementById("days-title").style.opacity = "0.0";
                    document.getElementById("hours-title").style.opacity = "0.0";
                    document.getElementById("minutes-title").style.opacity = "0.0";
                    document.getElementById("days").style.opacity = "0.0";
                    document.getElementById("hours").style.opacity = "0.0";
                    document.getElementById("minutes").style.opacity = "0.0";
                }
            }, 
1000);
