// ====== Mouse Events in Deep =======

// mouse event
// - onclick - when the mouse clicks on an element
// - oncontextmenu - when the mouse right-clicks on an element.
// - onmouseover / mouseout - when the mouse cursor comes over / leaves an element.
// - onmousedown / mouseup - when the mouse button is pressed / released over an element.
// - onkeyPress - onchange
// - onmousemove - when the mouse is moved
// - ondblclick - double click
// - oncopy - ctr + c 
// - onpaste - str + v
// 
// Keyboard - event.key returns true / false
// - shiftKey: Shift
// - altKey: Alt (or Opt for Mac)
// - ctrlKey: Ctrl
// - metaKey: Cmd for Mac
//
// Keyboard actions
// - event.key
// - event.code
// - event.type
// - event keys - can't be triggered by default

// let title = document.querySelector("#title")

// title.addEventListener("contextmenu", () => {
//   console.log('hey');  // har doim addEventListenerda eventlar onsiz yoziladi masalan onclick emas click
// });

// title.oncontextmenu = () => {
//   alert('hey')
// }
// agar DOMni o'zidagi biror elmga event qilmoqchi bo'lsak on bn yozamiz

// title.oncopy = () => {
//   alert('copy is not allowed')
//   return false  // copy qilib bo'lmaydigan qiladi
// }

// const text = document.querySelector("#text")
 const box = document.querySelector(".box")

// const change = (e) =>{
//   text.textContent = e.target.value
//   // nm.textContent = e.target.value;
// }

// box.addEventListener("mousemove", (event) => {
//   console.log(event.x, event.y);
//   box.style.backgroundColor = `rgb(${event.y} ${event.y} ${event.x} )`
// })

// shunday qilib mousemove eventi bn sichqonchaning harakatlanishiga bog'liq bo'lgan caselarni bajarishimiz mumkin.


// Keyboard events

// box.addEventListener("mousemove", (event) => {
//   if(event.ctrlKey) {
//     box.style.backgroundColor = `rgb(${event.y} ${event.y} ${event.x})`
//   }
//   console.log(event);
// });

// bu yerda qachonki ctrl tugmasi bosilib keyin sichqoncha yurgzilsa shart ishlaydi

// ========= Keyboard action ===========

// const change = (event) =>{
//   console.log(event.key, event.type, event.code);   //f keypress KeyF   
// };                                                  // 


// ======== Scroll events and Project ============

// box.addEventListener("scroll", (event) => {
//    console.log(event.target.scrollTop + event.target.clientHeight + 50 > 
//     event.target.scrollHeight
//     )
//     if (
//       event.target.scrollTop + event.target.clientHeight + 50 >
//       event.target.scrollHeight
// ){
//   box.textContent += box.textContent;
// }
// });

let nav = document.querySelector(".navbar");

console.log(nav.style.boxShadow);
window.addEventListener("scroll", (event) => {
  console.log(window.scrollY);
  if (window.scrollY >= 18) {
    nav.style.boxShadow = `19px 12px 20px 0px`;
  } else {
    nav.style.boxShadow = null;
  }
});
