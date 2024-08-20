// Create a menu object
const specialMenu = {
    items: [
    {
    name: "Lemon Cinnamon Pretzels",
    image: "Cinnamon-Sugar-Soft-Pretzels-1-768x1152.jpeg",
    description: "Freshly baked pretzels - $10.00"
    },
    {
    name: "Sugar Cookies",
    image: "Sugar Cookies.jpeg",
    description: "Warm and chewy cookies -$5.00"
    },
    {
    name: "Fruit Punch",
    image: "fruitpunch.jpeg",
    description: "Refreshing fruit punch - $2.50"
    }
    ]
    };
    
    // Function to display the menu
    function displayMenu() {
    const menuHTML = specialMenu.items.map((item) => {
    return `
    <div>
    <img src="${item.image}" alt="${item.name}">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    </div>
    `;
    }).join("");
    document.getElementById("menu-container").innerHTML = menuHTML;
    }
    
    // Call the function to display the menu
    displayMenu();

    export {specialMenu}