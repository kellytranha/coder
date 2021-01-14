// Assignment 1

const inventors = [
	'Albert Einstein',
	'Issac Newton',
	'Galileo Galilei',
	'Marie Curie',
	'Johannes Kepler',
	'Nicolaus Copernicus',
	'Max Planck',
	'Katherine Blodgett',
	'Ada Lovelace',
	'Sarah E. Goode',
	'Lise Meitner',
	'Hanna Hammarstrom',
];

// Use filter() to:

// Print out an array of the inventors whose name starts with ‘A'.
// Print out an array of the inventors whose first name and last name start with the same letter. For example, "Galileo Galilei" or "Hanna Hammarstrom"

console.log(inventors.filter((inventor) => inventor[0] === "A"));
console.log(
  inventors.filter((name) => 
    name.split(" ")[0][0] === name.split(" ")[1][0])
);

// Use sort() to:

// Sort all the inventors in alphabetical order, A-Z.
// Sort all the inventors by length of name, shortest name first.
inventors.sort();
console.log(inventors);

inventors.sort((nameA, nameB) => nameA.length - nameB.length);
console.log(inventors);


// Use map() to:

// Print out an array of the length of every inventor's full name.
// Print out an array of all the inventors' names in uppercase.

console.log(inventors.map((name) => name.length));
console.log(inventors.map((name) => name.toUpperCase()));


// Use reduce() to:

// Create a string that has the first name of every inventor. ("Albert Issac Galileo ...")
// Calculate sum of the length of all inventer's names.

console.log(
  inventors.reduce(
    (accumulator, name) => accumulator + name.split(" ")[0] + " ",
    ""
  )
);

console.log(
  inventors
    .map((name) => name.length)
    .reduce((accumulator, len) => accumulator + len, 0)
);

// Assignment 2
let startAmount = 1000;
let transactions = [
	{ currency: 'USD', amount: 12, type: 'withdrawal' },
	{ currency: 'USD', amount: 104, type: 'withdrawal' },
	{ currency: 'USD', amount: 150, type: 'deposit' },
	{ currency: 'USD', amount: 150, type: 'deposit' },
	{ currency: 'USD', amount: 250, type: 'withdrawal' },
	{ currency: 'USD', amount: 500, type: 'deposit' },
	{ currency: 'USD', amount: 447, type: 'withdrawal' },
	{ currency: 'USD', amount: 120, type: 'deposit' },
	{ currency: 'USD', amount: 58, type: 'withdrawal' },
	{ currency: 'USD', amount: 90, type: 'withdrawal' },
];
const usdToVND = 23000;

// Uses forEach() to print out the transaction history in this format:
// Balance: $1000
// Transaction History:
// - You withdrew $12. The new balance is $988
// - You deposited $112. The new balance is $1100

function transactionHistory() {
	console.log(`Balance: ${startAmount}`);
	console.log('Transaction History:');
	transactions.forEach((transaction) => {
		if (transaction.type === 'withdrawal') {
			startAmount -= transaction.amount;
			console.log(`- You withdrew $${transaction.amount}. The new balance is $${startAmount}`);
		} else {
			startAmount += transaction.amount;
			console.log(`- You deposited $${transaction.amount}. The new balance is $${startAmount}`);
		}
	});
	console.log(`End Balance: ${startAmount}`);
}

transactionHistory();

// Uses reduce() to calculate the balance in the end.
function getBalance(startAmount, transactions) {
	return transactions.reduce((accumulator, transaction) => {
		if (transaction.type === 'withdrawal') {
			accumulator -= transaction.amount;
		} else {
			accumulator += transaction.amount;
		}
		return accumulator;
	}, startAmount);
}

console.log(getBalance(startAmount, transactions));

// Assignment 3

let shoppingCart = [
	{ id: 'A31', item: 'T-shirt', price: 9.9, quantity: 5 },
	{ id: 'A32', item: 'Jacket', price: 99.9, quantity: 1 },
	{ id: 'A33', item: 'Skirt', price: 19.9, quantity: 2 },
	{ id: 'A34', item: 'Ankle Pant', price: 39.9, quantity: 3 },
	{ id: 'A35', item: 'Polo shirt', price: 14.9, quantity: 3 },
	{ id: 'A36', item: 'Chino Short', price: 29.9, quantity: 2 },
	{ id: 'A37', item: 'Easy Short', price: 19.9, quantity: 2 },
];

// Write a function that returns an array of prices for each product in the cart (item price * quantity).
console.log(shoppingCart.map((item) => item.price * item.quantity));

// Write a function that returns the total price.
console.log(shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0));

// Write a function called removeItemsFromCart(productId, quantity) that will remove 
// the quantity number of item with the productId in the cart and return the result 
// in a new array. If the quantity after removing is 0, remove the product out of 
// the cart

function removeItemsFromCart(productId, quantity) {
	shoppingCart = shoppingCart.filter((item) => {
		if (item.id === productId) {
			item.quantity = item.quantity - quantity;
			if (item.quantity <= 0) return false;
			return item;
		}
		return item;
	});
	console.log(shoppingCart);
}

