const cart = [
    { id: 1, name: 'iphone 16', price: 164000, qty: 1 },
    { id: 2, name: 'iphone 15', price: 84000, qty: 1 }
];

function calculateTotalPrice(cart) {
    return cart.reduce((total, { price, qty }) => total + (price * qty), 0);
}

console.log("Total Price:", calculateTotalPrice(cart));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 18, 20, 36, 40, 49];

function filterPerfectSquares(numbers) {
    return numbers.filter(num => Number.isInteger(Math.sqrt(num)));
}

console.log("Perfect Squares:", filterPerfectSquares(numbers));

const users = ['Amit', 'Ajay', 'Mukesh'];

function assignRewards(users) {
    return users.map((name, id) => ({
        id: id + 1,
        name,
        reward: Math.floor(Math.random() * 10) + 1
    }));
}

console.log("List of Users with Rewards:", assignRewards(users));

function getVegMenu(menu) {
    return menu.filter(item => !["Chicken", "Egg"].some(keyword => item.includes(keyword)));
}

console.log("Veg Menu List:", getVegMenu(menu));