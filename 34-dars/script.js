// ========== Events =============
import {users} from "./data.js";

let data = users;

const ondelete = (id) => {
  let res = data.filter((vl) => vl.id !== id);
  data = res;
  container.innerHTML = null;
  readData();
  console.log(res);
}

function readData () {
  if (!data.length) container.innerHTML = "No data";

  data.forEach((value) => {
  let div = document.createElement('div');
  let btn = document.createElement('button');
  btn.innerHTML = "delete";
  btn.addEventListener('click', () => ondelete(value.id))
  div.innerHTML = `${value.id} - ${value.name}`;
  div.append(btn);
  container.append(div);
});
}

readData();




// function al(n) {     // event biriktirishning 1-yo'li
//   // alert('hey dom')    
//   console.log(n);
// }

// == mouse event ==
// click - when the mouse clicks on an element
// contextmenu - when the mouse right-clicks on an element.
// mouseover/ mouseout - when the mouse cursor comes over / leaves an element.
// mousedown / mouseup - when the mouse button is pressed / released over an element
// mousemove - when the mouse is moved.

// function move(e) {
//   console.log(e);
// //   console.log('moving', e);  // sichqoncha har piksel yurganda consolega moving deb chiqayapti
// //   console.log('Y', e.y, 'X', e.x);  // sichqonchani y va x o'qidagi parametrlarini chiqaradi
// }

// // sichqonchani hamma kordinatalarini chiqarish uchun htmlda funcsiyani parametriga event deb yozishimiz kk

// btn.onclick = function () {     // event biriktirishning 2-yo'li
//   console.log("hey");
// }