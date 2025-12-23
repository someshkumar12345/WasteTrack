// WasteTrack - script.js

// ======= Module 2: Waste Categorization =======
const categorizeBtn = document.getElementById("categorizeBtn");
const outputDiv = document.getElementById("output");

if (categorizeBtn) {
  categorizeBtn.addEventListener("click", () => {
    const householdID = document.getElementById("householdID").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const type = document.getElementById("type").value;

    if (!householdID || !weight || !type) {
      alert("Please fill all fields correctly.");
      return;
    }

    // Simulate MapReduce
    const result = {};
    result[type] = weight;

    outputDiv.innerHTML = `
      <h3>Waste Categorization Result:</h3>
      <p>Household ID: ${householdID}</p>
      <p>Waste Type: ${type}</p>
      <p>Weight: ${weight} kg</p>
      <hr>
    `;
  });
}

// ======= Module 3: Simple Dashboard Chart =======
// Optional: Simple chart using Chart.js
if (document.getElementById("wasteChart")) {
  const ctx = document.getElementById("wasteChart").getContext("2d");
  const wasteChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Biodegradable", "Recyclable", "Non-Recyclable"],
      datasets: [{
        label: "Total Waste (kg)",
        data: [5, 3, 2], // Example data; you can update dynamically
        backgroundColor: ["#4caf50", "#2196f3", "#ff5722"]
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
