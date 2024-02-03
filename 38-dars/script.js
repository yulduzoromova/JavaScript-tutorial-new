// ============ Select vs Range ===============

// Range methods - select / remove / deselect / wrap
// - let range = new Range(); -- belgilanishi kerak bo'lgan textni save qilib turish uchun 
// - range.setStart(node, offset) -- qayerdan boshlab
// - range.setEnd(node, offset) -- qayergacha bo'lgan joyni tanlash kerak
// - window.getWSelection().addRange(range) -- tanlangan joyni highlite qilish kk
// Ex: -- range with paragraph / nested nodes / nested p with nth count

// - range.setEndBefore() / setEndAfter() - right before and after

// Range edit methods
// - range.deleteContents() - remove range content from document
// - range.extractContents() - kesib olish, like splice / return new node
// - range.insertNode(newNode) - insert node in the range
// - range.cloneContents() - copy of node / returns new node
// - range.surroundContents(newNode) - range'ni node bn o'rash

// Range Properties
// - range.startContainer() / endContainer() - ra
// - range.startOffset() / endOffset() - ra
// - range.collapsed - boolean

// Selection attrabutes
// - window.getSelection() - returns selected properties info
// - let {anchorNode, anchorOffset, focusOffset} = selection; --
// - anchorNode() - selection starts
// - focusNode() - selection ends

let data = document.querySelectorAll("h1")
console.log(data);

let range = new Range();
range.setStart(data[0].firstChild, 0)
range.setEnd(data[0].firstChild, 6)

window.getSelection().addRange(range);

// button.onclick = () => {
//   let div = document.createElement('em');
//   div.style.color = "red"
//   range.surroundContents(div);
//   // div.innerHTML = "new value"; 

//   // range.insertNode(div); // yangi ma'lumot qo'shib yozib ketadi.
  
//   // let selected = range.extractContents();
//   // txt.innerHtml += selected.textContent;
// };

let div = document.createElement("em");
div.style.color = 'red';
let txt = data[0].innerText;

input.oninput = (event) => {
  // console.log(event.target.value);
  data[0].innerText = txt;
  range.setStart(data[0].firstChild, 0);
  range.setEnd(data[0].firstChild, event.target.value.length);
  range.surroundContents(div);
};