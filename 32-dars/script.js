//alert(window.innerHeight);
 
//alert(document.href)
//console.log(document); //htmlni nazarda tutadi
//console.log(window);  // bu ham doxument ham BOM hammasi

let ul = document.getElementsByTagName("ul")[0]
console.log(ul.children);  // li elementlarini chiqardik
console.log(ul.childNodes); // probellari(text, li) bn chiqaradi 
console.log(ul.parentNode);
console.log(ul.firstElementChild); // 1-li elament
console.log(ul.lastElementChild.previousElementSibling); // oxirgi li elmdan bitta oldingisi
console.log(ul.lastElementChild.previousElementSibling.previousElementSibling); // 2-li elm
console.log(ul.lastElementChild.previousElementSibling.nextElementSibling); // oxirgi li elementdan 1ta oldingi elmdan keyingi element

// Selectors - ma'lumotni chaqirib olish

let by = document.getElementsByTagName('body');
let parent = document.getElementsByClassName('parent')
let id = document.getElementById('bir')

console.log(by);
console.log((by.style.background = "red"));

// querySelectorlar - getelementBY... alternative

let qr = document.querySelector("#bir")
let qr1 = document.querySelector("ul")
let qrAll = document.querySelectorAll(".parent")


// innerHtml
let inner = document.querySelector('#bir')

console.log(inner.innerHTML);   // html taglari bn qabul qiladi
console.log(inner.innerText);   // faqat textini qabul qiladi
console.log(inner.textContent);  // faqat contentni chiqaradi



