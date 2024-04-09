import { openBurger,toggleUserSignIn } from "./utility/utility.js";

function app() {
 
    const btn = document.querySelector("button")
    const registerForm = document.getElementById("registerForm");
    const inputs = registerForm.querySelectorAll("input");
    openBurger()
    toggleUserSignIn()
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault(); 

            if (registerForm.checkValidity()) {
                window.location.href = "./terms-services.html";
            }
        })
    }
    inputs.forEach((input) => {
          input.addEventListener("blur", () => {
            if (input.value.trim() === "") {
              showValidationMessage(input);
            } else {
              hideValidationMessage(input);
            }
          });
        });
    
        function showValidationMessage(input) {
          const existingMessage = input.parentElement.querySelector(".validation-message");
          if (!existingMessage) {
            const message = document.createElement("span");
            message.textContent = "Input must be filled";
            message.classList.add("validation-message");
            input.parentElement.appendChild(message);
          }
        }
    
        function hideValidationMessage(input) {
          const existingMessage = input.parentElement.querySelector(".validation-message");
          if (existingMessage) {
            existingMessage.remove();
          }
        }
}
app()