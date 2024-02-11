//textContent
const h3title = document.getElementById("h3title");
h3title.innerHTML = ("Hi there, welcome all");
//Apend Child
const mylist = document.getElementById("mylist");
const addLi = document.createElement("li");
addLi.textContent = "Banana";
mylist.append(addLi);
const fruitList = [ "Mangoes", "Berries", "Passion"];

for (let fruit of fruitList) {
    let newLi = document.createElement("li");
    newLi.textContent = fruit;
    mylist.appendChild(newLi);

}
