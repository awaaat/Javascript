//Document Fragment
const myList = document.getElementById("MyList");
const docFrag = document.createDocumentFragment();
let item_1 = document.createElement("li");
let item_2 = document.createElement("li");
let item_3 =document.createElement("li");
item_1.textContent = "Apple";
item_2.textContent = "Banana";
item_3.textContent = "Mangoes"
docFrag.append(item_1);
docFrag.append(item_2);
docFrag.append(item_3)
myList.appendChild(docFrag); 

//Class Lists
const MyPara = document.getElementById("MyPara");
MyPara.classList.add("bold")

//Insert Before
//Dataset Property

//nextSibling Selector
const beansItem = document.querySelector("#shoppingList > li:first-of-type")
const riceItem = beansItem.nextElementSibling;
document.write(riceItem);
//
