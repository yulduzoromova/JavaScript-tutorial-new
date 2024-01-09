// // // ========== Events 2 =============
// function onclick() {
//   console.log('button clicked')
// }

// function onmousedown() {
//   console.log('button onmousedown')
// }

// function onmouseup() {
//   console.log('button onmouseup')
// }

// // button.addEventListener('click', onclick)
// // button.addEventListener('mousedown', onmousedown)
// // button.addEventListener('mouseup', onmouseup)

// class Events {
//   handleEvent(event) {
//     // console.log(event);
//     switch (event.type){
//       case "click":
//       onclick();
//       break;
//       case "mousedown":
//         onmousedown();
//         break;
//     }
//   }
// }

// const evn = new Events();

// button.addEventListener('click', evn)
// button.addEventListener('mousedown', evn)
// button.addEventListener('mouseup', evn)
// // yuqoridagi kodlar classlar orqali eventlarni boshqarish uchun ishlatiladi


// // ========= Bubbling =========
// // - try nested onclicks - p > div > body
// // - event.stopPropogation() - skips its event but calls parents
// // - event.stopImmediatePropagation - stops all parent events

// function child(event) {
//   //event.stopImmediatePropagation()
//   event.stopPropogation()
//   alert('child');
// }

// function parent() {
//   alert('parent');
// }

// function grandparent() {
//   alert('grandparent');
// }

// Event bubbling deb bir tugmani bosganda undan yuqoridagi yoki pastdagi tugmalarni ham bosilishiga aytiladi
// Qanday qilib event bubblingni oldini olish mumkin, ya'ni o'zidan yuqorida bo'gan elmlarni click bo'lishini oldini olish mumkin?
// buning uchun childni parametriga eventni yozamiz va stopPropagation() dan foydalanamiz
// event.stopPropagation(event) - bu funksiya yozilgan box click bo'lganda yurmaydi balki ota boxlari click bo'ladi.
// agar childni yurgizib qolganlari yurmasligini xohlasak, stopImmediatePropagation() dan foydalanamiz.
// shunday qilib event bubblingni oldini olish mumkin.


// Event Delegation 

let target;
table.onclick = function (event) {
  target = event.target;
  target?.classList.toggle("higthlite")
  // if (target)
  //   target.classList.remove("higthlite");
  //   target = event.target;
  // target.classList.add("higthlite")
 
}