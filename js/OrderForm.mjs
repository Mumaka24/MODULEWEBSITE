// Get the form element
const form = document.getElementById('orderForm');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
// Prevent the default form submission behavior
e.preventDefault();

// Get the form data
const name = document.getElementById('name').value;
const address = document.getElementById('address').value;
const OrderType = document.getElementById('OrderType').value;
const product = document.getElementById('product').value;
const quantity = document.getElementById('quantity').value;

// Validate the form data
if (name === '' || address === ''|| OrderType === '' || product === '' || quantity === '') {
alert('Please fill in all fields!');
return;
}

// Create an order object
const order = {
name,
address,
OrderType,
product,
quantity,
};

// Send the order data to the server (e.g. using fetch API)
fetch('/api/orders', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(order)
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error));
});

export {name, address, OrderType, product, quantity,}