document.addEventListener("DOMContentLoaded", function () {
  let accumulator = 0;
  let currentInput = "";
  let display = document.getElementById("acc");
  let prevDisplay = document.getElementById("prev");
  let currentOperation = null;

  // Function to update display
  function updateDisplay(value) {
    display.textContent = value;
  }

  // Function to update previous operation display
  function updatePrevDisplay() {
    prevDisplay.textContent = `${accumulator} ${
      currentOperation || ""
    } ${currentInput}`;
  }

  // Function to perform calculation based on the current operation
  function performOperation() {
    if (currentInput !== "") {
      let input = parseFloat(currentInput);
      switch (currentOperation) {
        case "+":
          accumulator += input;
          break;
        case "-":
          accumulator -= input;
          break;
        case "*":
          accumulator *= input;
          break;
        case "/":
          accumulator /= input;
          break;
        default:
          accumulator = input;
      }
      currentInput = "";
    }
  }

  // Add event listeners to buttons
  document.querySelectorAll(".btncontainer button").forEach(function (button) {
    button.addEventListener("click", function () {
      let buttonText = this.textContent;

      // Check if the button is a number or '.'
      if (!isNaN(buttonText) || buttonText === ".") {
        currentInput += buttonText;
        updateDisplay(currentInput);
        updatePrevDisplay();
      }
      // Operation buttons
      else if (["+", "-", "*", "/"].includes(buttonText)) {
        if (currentInput !== "") {
          performOperation();
        } else {
          accumulator = parseFloat(display.textContent);
        }
        currentOperation = buttonText;
        updatePrevDisplay();
      }
      // Equal button
      else if (button.id === "calbtn") {
        if (currentOperation !== null) {
          performOperation();
          updateDisplay(accumulator);
          currentOperation = null;
        }
        updatePrevDisplay();
      }
      // Clear button
      else if (button.id === "clearbtn") {
        accumulator = 0;
        currentInput = "";
        currentOperation = null;
        updateDisplay(0);
        prevDisplay.textContent = "";
      }
    });
  });
});
