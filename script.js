document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");

    // Add event listener to all buttons
    document.querySelectorAll("input[type='button']").forEach(button => {
        button.addEventListener("click", () => {
            const action = button.getAttribute("data-action");
            const value = button.value;

            switch (action) {
                case "clear":
                    display.value = ""; // Clear display
                    break;
                case "delete":
                    display.value = display.value.slice(0, -1); // Delete last character
                    break;
                case "input":
                    display.value += value; // Append input value
                    break;
                case "calculate":
                    try {
                        display.value = eval(display.value); // Evaluate the expression
                    } catch {
                        display.value = "Error"; // Handle invalid expressions
                    }
                    break;
                default:
                    break;
            }
        });
    });
});
