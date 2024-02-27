// const myp1 = document.getElementById("h1");
// // alert(myp1.innerText);
// // myp1.innerText = "I am Over the mod"
// const mybtn = document.getElementById("btn1");
// const change = document.getElementById("change");
// mybtn.innerText = "hey";

// function hi(){
//     alert("hi there");
// }

// mybtn.onclick = hi;
// change.onclick = myp1.style.color="red";


// function generateHexColor() {

//     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).toUpperCase().padStart(6, '0');

//     const randomNumber = Math.floor(Math.random() * 1000);

//     return {
//         color: randomColor,
//         number: randomNumber
//     };
// }



// function myfunction() {

//     const bal = document.createElement("div");
//     bal.className = "ball";
//     const container = document.getElementById("container"); 
//     container.appendChild(bal);
// }



// const btn = document.getElementById("btn");
// btn.onclick = myfunction;

function generateHexColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
    const randomNumber = Math.floor(Math.random() * 1000);
    return {
        color: randomColor,
        number: randomNumber
    };
}
let count = 1;
function add() {
    if (count < 10) {
        const ball = document.createElement("div");
        ball.className = "ball";

        const randomColor = generateHexColor().color;
        ball.style.backgroundColor = randomColor;

        const container = document.getElementById("container");
        container.appendChild(ball);
        count++;
    }

}
function remove() {
    // const container = document.getElementById("container");
    // const lastChild = container.lastChild;
    // container.removeChild(lastChild);
    // if (lastChild) {

    // }
    if (count > -1) {
        const container = document.getElementById("container");
        const lastChild = container.lastChild;
        container.removeChild(lastChild);
        count--;
    }

}
function randomgenerator() {

}

const plus = document.getElementById("btn");
plus.onclick = add;
const negative = document.getElementById("btn2")
negative.onclick = remove;
const random = document.getElementById("generate");

