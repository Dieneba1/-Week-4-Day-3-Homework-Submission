// Get references to the select menu and the reveal box
const otherPetsSelect = document.getElementById("otherPetsSelect");
const otherPetsDetails = document.getElementById("otherPetsDetails");

// Listen for changes to the dropdown
otherPetsSelect.addEventListener("change", function () {
    if (otherPetsSelect.value === "yes") {
        otherPetsDetails.style.display = "block";
    } else {
        otherPetsDetails.style.display = "none";
    }
});