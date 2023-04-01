let shoppingList = ['apples', 'bananas', 'bread', 'eggs', 'milk'];

// Display each item in the list using forEach()
shoppingList.forEach(item => console.log(item));

// Add a new item to the end of the array using push()
shoppingList.push('cheese');

// Remove the last item from the array using pop()
shoppingList.pop();

// Remove the first item from the array using shift()
shoppingList.shift();

// Add a new item to the beginning of the array using unshift()
shoppingList.unshift('oranges');

// Create a new array with items less than six characters using filter()
let shortList = shoppingList.filter(item => item.length < 6);

// Create a new array with capitalised items using map()
let capitalList = shoppingList.map(item => item.charAt(0).toUpperCase() + item.slice(1));

// Calculate the total number of characters using reduce()
let totalChars = shoppingList.reduce((total, item) => total + item.length, 0);

// Create a new array with the first three items using slice()
let partialList = shoppingList.slice(0, 3);

// Remove the second and third items from the original list using splice()
shoppingList.splice(1, 2);

// Sort the remaining items in alphabetical order using sort()
shoppingList.sort();

// Display the sorted list using console.log()
console.log(shoppingList);
