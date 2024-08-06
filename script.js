let title = document.querySelector("h1");
title.textContent = "ვენეცია";
title.className = "title";

let text = document.querySelector("p");
text.textContent = "ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.";
text.style.color = "#ffff00";
text.style.fontSize = "20px";


let circle = document.createElement("span");
let box = document.querySelector(".box");
box.appendChild(circle);
circle.className = "circle"
circle.addEventListener("mouseover", () => {
    circle.style.backgroundColor = "red";
})
circle.addEventListener("mouseout", () => {
    circle.style.backgroundColor = "yellow";
})


let button = document.createElement("button");
box.appendChild(button);
button.className = "button";
button.textContent = "DELETE CIRCLE";
button.addEventListener("click", () => {
    if (button.textContent === "DELETE CIRCLE") {
        button.textContent = "RETURN CIRCLE";
        circle.style.display = "none";
    } else {
        button.textContent = "DELETE CIRCLE";
        circle.style.display = "block";
    }
});





