const expenseForm = document.getElementById("expensedetails");
const expenselist = document.getElementById("expenselist");
const totalElement = document.getElementById("total"); 

let total = 0; 
expenseForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  if (description && category && !isNaN(amount)) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${description}</td>
      <td>${category}</td>
      <td>${amount}</td>
    `;
    expenselist.appendChild(newRow);
    total += amount;
    totalElement.textContent = `Total: ${total}`;
    expenseForm.reset();
  }
});
