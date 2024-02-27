function myfunction() {
    const add = document.createElement("div");
    add.className = "color";
    const container = document.getElementById("center");
    container.append(add);
}

function generateHexColor() {
    
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).toUpperCase().padStart(6, '0');

    
    const randomNumber = Math.floor(Math.random() * 1000);

    
    return {
        color: randomColor,
        number: randomNumber
    };
}

// Example usage:
const result = generateHexColor();
console.log("Hex Color:", result.color);
console.log("Random Number:", result.number);

const plus = document.getElementById("plus");
plus.onclick = myfunction;

