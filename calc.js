const numberButtons = document.querySelectorAll(".number");
const totalBox = document.querySelector("#total");

Array.from(numberButtons).forEach(element => {
    element.addEventListener("click", () => {
        totalBox.textContent += element.textContent;
    });
});