
// targetting flight

// activate flight
var flight = document.getElementById("flight");

document.querySelector("#activate-flight").addEventListener("click", (event) => {
    flight.classList.add("enabled");
    flight.classList.remove("disabled");
    alert("Flight Enabled!");
    alert("Bye, FOOLS!");
});

// deactivate flight
document.querySelector("#deactivate-flight").addEventListener("click", (event) => {
    flight.classList.add("disabled");
    flight.classList.remove("enabled");
    alert("Flight Disabled!");
    alert("I Didn't Want To Come Back to Earth...");
});

//  targetting mindreading
var mindreading = document.getElementById("mindreading");

//  activate mind-reading
document.querySelector("#activate-mindreading").addEventListener("click", (event) => {
    mindreading.classList.add("enabled");
    mindreading.classList.remove("disabled");
    alert("Mind-Reading Enabled!");
    alert("Stop Thinking That! GROSS.");
});

// deactivate mind-reading
document.querySelector("#deactivate-mindreading").addEventListener("click", (event) => {
    mindreading.classList.add("disabled");
    mindreading.classList.remove("enabled");
    alert("Mind-Reading Disabled!");
    alert("I'm Just Glad I don't have To Read Your Mind Anymore.");
    alert("Pervert.");
});

//  targetting xray
var xray = document.getElementById("xray");

// activate xray
document.querySelector("#activate-xray").addEventListener("click", (event) => {
    xray.classList.add("enabled");
    xray.classList.remove("disabled");
    alert("Xray Enabled!");
    alert("PUT ON SOME CLOTHES.");
});

// disabled xray
document.querySelector("#deactivate-xray").addEventListener("click", (event) => {
    xray.classList.add("disabled");
    xray.classList.remove("enabled");
    alert("Xray Disabled!");
    alert("I Wish I Could Unsee That.");
});


// below you are having querySelectorAll grab everything with the class
// ".power" and assigning it to be "getPowerList"
// Remember, this is kinda like how you style a class in CSS. You put the 
// dot in front of the class you are looking to target

const getPowerList = document.querySelectorAll(".power")
// console.log(getPowerList)


// I originally had the querySelector as the "powerList", but it needed to be
// the actual button. It is now "#activate-all" because that is the button
// ID. It is listening for a "click". When there is a click, it runs a
// for loop function. It is going through the getPowerList, stopping at each
// class and adding "enabled" while removing "disabled". The function knows
// to stop at each class when you put the index item [i] after getPowerList

document.querySelector("#activate-all").addEventListener("click", (event) => {
    for (let i = 0; i < getPowerList.length; i++) {
        getPowerList[i].classList.add("enabled");
        getPowerList[i].classList.remove("disabled");
    }
    alert("ALL POWERS ACTIVATED!");
    alert("BEWARE, FOOLS!");
});

document.querySelector("#deactivate-all").addEventListener("click", (event) => {
    for (let i = 0; i < getPowerList.length; i++) {
        getPowerList[i].classList.add("disabled");
        getPowerList[i].classList.remove("enabled");
    }
    alert("All Powers Deactivated!");
    alert("I Was Having So Much Fun...😞");
});