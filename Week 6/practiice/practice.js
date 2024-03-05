// const parentElement = document.getElementById("parent");
// const newElement = document.createElement("nav");
// parentElement.appendChild(newElement);

function newNav() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const parentElement = document.getElementById("parent");
    const newElement = document.createElement("nav");
    newElement.textContent = fname + "" + lname;
    parentElement.appendChild(newElement);
}

const btn = document.getElementById("btn");
btn.onclick = newNav;
