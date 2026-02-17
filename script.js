// Track the current light
let currentLight = "red";

// Turn red on initially
document.getElementById("red").classList.add("active");

// Event handling for button click
document.getElementById("changeBtn").addEventListener("click", function () {

    // Remove active class from all lights
    document.getElementById("red").classList.remove("active");
    document.getElementById("yellow").classList.remove("active");
    document.getElementById("green").classList.remove("active");

    // Decide next light using if-else
    if (currentLight === "red") {
        currentLight = "green";
    } else if (currentLight === "green") {
        currentLight = "yellow";
    } else {
        currentLight = "red";
    }

    // Activate the current light
    document.getElementById(currentLight).classList.add("active");
});
