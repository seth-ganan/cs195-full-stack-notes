// Form event listener - fixed missing 'document'
document
  .getElementById("checkinForm")
  .addEventListener("submit", function (event) {
    // Step 1: Stop page refresh!
    event.preventDefault();

    // Step 2: Collect form data
    const formData = collectFormData();

    // Step 3: Do something with the data
    console.log("Form data collected:", formData);

    // Step 4: Store in localStorage (uncommented version below)
    storeFormData(formData);

    // Step 5: Show success message
    showSuccessMessage(formData);

    // Step 6: Clear the form
    document.getElementById("checkinForm").reset();
  });

function collectFormData() {
  const data = {};

  // Collect simple dropdown values
  data.ageGroup = document.getElementById("age-group").value;

  // Uncomment these when students add the dropdowns:
  // data.team = document.getElementById("team-select").value;
  // data.playerName = document.getElementById("player-select").value;
  // data.comments = document.getElementById("comments").value;

  // Collect emotions (checkbox collection)
  data.emotions = []; // Start with empty array

  // Check each emotion checkbox individually
  if (document.getElementById("red-angry").checked) {
    data.emotions.push("red-angry");
  }

  // Students will add these as they build the checkboxes:
  if (
    document.getElementById("yellow-excited") &&
    document.getElementById("yellow-excited").checked
  ) {
    data.emotions.push("yellow-excited");
  }
  if (
    document.getElementById("green-happy") &&
    document.getElementById("green-happy").checked
  ) {
    data.emotions.push("green-happy"); // Fixed: was "green-calm"
  }
  if (
    document.getElementById("blue-sad") &&
    document.getElementById("blue-sad").checked
  ) {
    data.emotions.push("blue-sad");
  }

  return data;
}

// Function to store data in localStorage
function storeFormData(formData) {
  // Get existing check-ins (or start with empty array)
  let checkIns = [];
  const stored = localStorage.getItem("checkinData");
  if (stored) {
    checkIns = JSON.parse(stored);
  }

  // Add timestamp and save new check-in
  formData.timestamp = new Date().toLocaleString();
  checkIns.push(formData);
  localStorage.setItem("checkinData", JSON.stringify(checkIns));

  console.log("Data stored! Total check-ins:", checkIns.length);
}

// Function to show success message
function showSuccessMessage(formData) {
  // Simple alert for now
  alert(`Check-in successful! Welcome, ${formData.ageGroup || "Player"}!`);

  // Or if you want to use the Bootstrap alert in your HTML:
  // const successDiv = document.getElementById('success-message');
  // if (successDiv) {
  //     successDiv.classList.remove('d-none');
  //     setTimeout(() => {
  //         successDiv.classList.add('d-none');
  //     }, 3000);
  // }
}

// Optional: Function to view stored data (for debugging)
function viewStoredData() {
  const stored = localStorage.getItem("checkinData");
  if (stored) {
    const data = JSON.parse(stored);
    console.log("All stored check-ins:", data);
    return data;
  } else {
    console.log("No stored data found");
    return [];
  }
}

// Optional: Function to clear all stored data
function clearStoredData() {
  localStorage.removeItem("checkinData");
  console.log("All stored data cleared");
}
