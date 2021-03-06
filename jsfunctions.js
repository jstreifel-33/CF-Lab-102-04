//Define lockdown variable to track whether all clear is necessary.
var lockdown = 0;

//Black out text and replace pictures with drone images.
function dronealert(){
    lockdown = 1;
    document.getElementById("ts1").style.backgroundColor = "#444444";
    document.getElementById("ts2").style.backgroundColor = "#444444";
    document.getElementById("ts3").style.backgroundColor = "#444444";
    document.getElementById("ts4").style.backgroundColor = "#444444";
    document.getElementById("ts5").style.backgroundColor = "#444444";
    document.getElementById("ts6").style.backgroundColor = "#444444";
    document.getElementById("ts7").style.backgroundColor = "#444444";
    document.getElementById("ts8").style.backgroundColor = "#444444";
    document.getElementById("ts9").style.backgroundColor = "#444444";
    document.getElementById("ts10").style.backgroundColor = "#444444";
    document.getElementById("bimg1").src = "images/droneprop1.png";
    document.getElementById("bimg2").src = "images/droneprop2.png";
    document.getElementById("logo").src = "images/drone_logo.png";
}

//Remove text blackout and replace pictures. Requires user to confirm with "CLEAR"
function allclear(){
    if(lockdown == 0){
        alert("Alert not in progress.");
    }else{
        var safe = prompt("Confirm area clear of drones. If clear, please enter CLEAR");
        while (safe != "CLEAR"){
            safe = prompt('AREA NOT CONFIRMED CLEAR. PLEASE CONFIRM TO BY ENTERING "CLEAR" TO LIFT ALERT.');
        }
        if(safe == "CLEAR"){
            document.getElementById("ts1").style.backgroundColor = "";
            document.getElementById("ts2").style.backgroundColor = "";
            document.getElementById("ts3").style.backgroundColor = "";
            document.getElementById("ts4").style.backgroundColor = "";
            document.getElementById("ts5").style.backgroundColor = "";
            document.getElementById("ts6").style.backgroundColor = "";
            document.getElementById("ts7").style.backgroundColor = "";
            document.getElementById("ts8").style.backgroundColor = "";
            document.getElementById("ts9").style.backgroundColor = "";
            document.getElementById("ts10").style.backgroundColor = "";
            document.getElementById("bimg1").src = "images/birds-from-below.jpg";
            document.getElementById("bimg2").src = "images/drone-from-below.jpg";
            document.getElementById("logo").src = "images/bird_logo.png";
            lockdown = 0;
        }
        
    }
}

//Signup entry at bottom of page. Prints greeting to empty p element when user enters name.
//Prints request for user to try again if submitted empty.
function signup(){
    let greet;
    var lname = document.getElementById("lastname").value;
    if(lname == ""){
        greet = "Looks like you forgot to enter your name. Please try again!";
    }else{
        greet = "Welcome to the fight, Private " + lname +"! We're glad to have you on board.";
    }
    document.getElementById("welcome").innerHTML = greet;
}

//Displays images to represent a count of destroyed drones based on user input
function dronecount(){
    let drones;
    drones = document.getElementById("destroyed").value;
    document.getElementById("droneCount").innerHTML = "";
    if (drones == 69){
        document.getElementById("dronecomment").innerHTML = "Nice."
    }else if(drones == 0){
        document.getElementById("dronecomment").innerHTML = "You'll get one someday!"
    }else if(drones < 0){
        document.getElementById("dronecomment").innerHTML = "That's not... Are you saying you BUILT drones???"
    }else{
        document.getElementById("dronecomment").innerHTML = "Very impressive!"
    }
    for (i = 0; i < drones; ++i){
        document.getElementById("droneCount").innerHTML += '<img class="drone" src="images/drone-eliminated.png"></img>';
        
    }
}