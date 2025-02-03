let expenseForm = document.getElementById('form');
let expenseList = document.getElementById('expenseList'); // Correct ID

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve and trim input values
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value.trim();
    const amount = document.getElementById('amount').value.trim();

    // Validate inputs
    if (description && category && !isNaN(amount) && amount > 0) {
        // Create a new row
        const newRow = document.createElement('tr');

        // Populate row with sanitized values
        newRow.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${parseFloat(amount).toFixed(2)}</td>
        `;

        // Append the new row to the table
        expenseList.appendChild(newRow);

        // Clear the form fields
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    }
else {
        // Show an alert if any field is invalid
        alert("Please fill out all fields with valid data.");
    }
});
