// Get elements
var modal = document.getElementById("taskModal");
var btn = document.querySelector(".addtaskbtn");
var span = document.getElementsByClassName("closeButton")[0];
var dateOptions = document.getElementById("dateOptions");
var taskDateInput = document.getElementById("taskDate");
var selectedDate = document.getElementById("selectedDate");
var taskForm = document.getElementById("taskForm");

// Show modal and reset form fields
btn.onclick = function () {
  modal.style.display = "block";
  resetFormFields();
};

// Close modal and reset form fields when close icon is clicked
span.onclick = function () {
  modal.style.display = "none";
  resetFormFields();
};

// Close modal and reset form fields by clicking outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    resetFormFields();
  }
};

// Reset form fields function
function resetFormFields() {
  taskForm.reset();
  taskDateInput.style.display = "none";
  selectedDate.textContent = "";
  dateOptions.style.display = "flex"; // Show the date options again
}

// Handle date option click
document.querySelectorAll(".dateOption").forEach(function (button) {
  button.onclick = function () {
    var dateType = button.getAttribute("data-date");

    if (dateType === "today") {
      var today = new Date().toISOString().split("T")[0];
      taskDateInput.value = today;
      taskDateInput.style.display = "block";
      selectedDate.textContent = "Selected Date: Today";
    } else if (dateType === "tomorrow") {
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      taskDateInput.value = tomorrow.toISOString().split("T")[0];
      taskDateInput.style.display = "block";
      selectedDate.textContent = "Selected Date: Tomorrow";
    } else if (dateType === "custom") {
      taskDateInput.style.display = "block";
      setTimeout(function () {
        taskDateInput.showPicker(); // Use showPicker method
      }, 0);
    }

    // Hide date options after selection
    dateOptions.style.display = "none";
  };
});

// Update the displayed date when a custom date is chosen
taskDateInput.onchange = function () {
  var selected = new Date(taskDateInput.value);
  selectedDate.textContent = "Selected Date: " + selected.toDateString();
};

// Handle form submission and reset form fields
document.getElementById("taskForm").onsubmit = function (event) {
  event.preventDefault();
  // Add your logic to handle the new task here

  // Close the modal after submitting
  modal.style.display = "none";
  resetFormFields();
};
