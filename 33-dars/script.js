// ========== DOM - 2 ==============

// let dom = {
//   title: h1,
//   content: 'hdjdjskskshdkcnc',
// }

// Attribute manipulation 
// - elm.hasAttribute(name) - true/false
// - elm.getAttribute(name) - return value if exist
// - elm.setAttribute(name, value) - set attr
// - elm.removeAttribute(name) - deletes the sttr

let parent = document.querySelector(".parent")
let btn = document.querySelector("button")


console.log(parent.hasAttribute("type")); // false

// hasAttribute - o'sha aytilgan elmning ichida () ichidagi parametr bor yoki yo'qligini true yoki false bn ifodalaydi

console.log(parent.getAttribute("class")); // parent  

// getAttribute - elmning get qiladi

parent.setAttribute("id", "border");

// setAtribute - elmga 1-parametrdagi atributni va 2-parametrdagi valueni qo'shadi

// CREATE ELEMENT

let dv = document.createElement("div")  // div elmtini yasab beradi

let text = document.createTextNode("Hey DOM")

dv.setAttribute("id", "border")
console.log(text);
// dv.append(text)
dv.prepend(text)
parent.before(dv)

// after bn before belgilangan divni tashqarisida qo'shadi
// append bn prepend divning ichida faqat elmdan oldin va kn qo'shiladi
// elm.remove() - elmni o'chirib beradi

// cloneNode() - elmni  clone qilib beradi
dv = parent.cloneNode(true);
console.log(dv.getAttribute("class"));

// STYLE

parent.style.backgroundColor = "red"
parent.style.cssText = `   // hohlagancha css kod yozsak bo'ladi
color: blue;
background-color: grey
`

let chl = parent.children[0].children;

for(let el = 0; el < chl.length; el++) {
  if (el % 2 == 0) {
    chl[el].style.color = "red"
  } else {
    chl[el].style.color = 'blue';
  }
}

// Geometry - ma'lum bir ma'lumotni qayerda joylashganini aniqlash un ishlatiladi
// offsetTop - contentning yuqoriga nisbatan qanday masofada joylashganini ko'rsatadi
// offsetLeft - contentning chap tomondan ma'sofasi
// offsetWith - borderni ham hisobga olib contentning kengligini anglatadi
// clientWidth - bordersiz content kengligi
// 

console.log(parent.offsetTop);
console.log(parent.offsetLeft);
console.log(parent.clientWith);


//SCROOL
let scroll = document.querySelector('.scroll')

console.log(scroll.scrollHeight);
console.log(scroll.scrollWidth);
console.log(scroll.scrollHeight);

function expand() {
  if (scroll.clientHeight === scroll.scrollHeight) {
    scroll.style.height = "150px";
    btn.innerHtml = "show more";
  }
   else {
    scroll.style.height = `${scroll.scrollHeight}px`;
    btn.innerHTML = "show less";
  }
}

