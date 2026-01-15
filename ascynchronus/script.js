function getResult() {
    // 1. Select the elements
    const statusDisplay = document.getElementById("status");
    const resultDisplay = document.getElementById("result");

    // 2. Clear previous result and show loading status
    resultDisplay.innerText = "";
    statusDisplay.innerText = "Fetching data...";
    // If you used the crazy loader from before, you could add a class here instead:
    // statusDisplay.classList.add("loader");

    // 3. Simulate a server delay (1.5 seconds)
    setTimeout(() => {
        // 4. Update the result
        statusDisplay.innerText = ""; // Clear the loading status
        resultDisplay.innerText = "Name: Rahat | ID: 3.78"; 
        
        // Optional: Make it look like a success message
        resultDisplay.style.color = "green"; 
        resultDisplay.style.fontWeight = "bold";

    }, 1500); 
}