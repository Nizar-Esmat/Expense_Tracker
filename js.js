
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Function to display expenses
    function displayExpenses() {
        const expenseList = document.getElementById('expenseList');
        expenseList.innerHTML = '';
        expenses.forEach(function (expense, index) {
            const li = document.createElement('li');
            li.innerHTML = `<span>${expense.description}</span>: $${expense.amount} <button onclick="editExpense(${index})">Edit</button> <button onclick="deleteExpense(${index})">Delete</button>`;
            expenseList.appendChild(li);
        });
    }

    // Function to add an expense
    function addExpense(description, amount) {
        expenses.push({ description, amount });
        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();
    }

    // Function to edit an expense
    function editExpense(index) {
        const newDescription = prompt('Enter new description:');
        const newAmount = prompt('Enter new amount:');
        expenses[index] = { description: newDescription, amount: newAmount };
        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();
    }

    // Function to delete an expense
    function deleteExpense(index) {
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();
    }

    document.addEventListener("DOMContentLoaded", function () {
        const expenseForm = document.getElementById('expenseForm');

        // Event listener for form submission
        expenseForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const expenseText = document.getElementById('expenseText').value;
            const amountText = document.getElementById('amountText').value;
            if (expenseText && amountText) {
                if(isNaN(amountText)){
                    alert('enter a real number.');
                    
                }else{
                addExpense(expenseText, amountText);
                document.getElementById('expenseText').value = '';
                document.getElementById('amountText').value = '';
                }
            } else {
                alert('Please enter both description and amount.');
            }
        });
        
       
    });

    function calsum() {
        let total = 0;
        expenses.forEach(function (i) {
            total += parseFloat(i.amount);
        });
    
        const div = document.createElement('div');
        div.id = 'getsum';
        div.innerHTML = `the sum is ${total}`;
        document.body.appendChild(div);
   
    
        div.style.visibility = 'visible';
    }
    


    // Initial display of expenses
    displayExpenses();