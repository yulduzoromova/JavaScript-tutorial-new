// ============ Form ===============

// - document.forms - get all forms / let form = document.forms.myForm
// - document.forms.myForm - <form name = 'myForm'>...</form>
// - get forms without name / by array index

let form = document.forms.bunkerForm;

console.log(form.elements[0]); // indexi orqali oacsess qilsak bo'ladi yoki
console.log(form.elements.login); // inputning name attributi orqali acsess qilsak ham bo'ladi

// Elements - get elements inside form
// - form.elements.age = <input name='age'>...</input>
// - array - agar 2ta age input bo'lsa
// - obj - agar 1ta age input bo'lsa
// agar form elementida bitta input bo'lsa, obyekt ko'rinishida chiqadi, agar 2tadan ko'p bo'lsa RadioNodeList ko'rinishida chiqadi

console.log(form.login.name);
console.log(form.elements.login.name);  // 2la holatda ham bir xil element chaqirilayapti

// - SELECT - <select name='select'>...</select>
// - form.select.options[2] = uzbekni chiqaradi
// - value - select.value = 'ru'  deb yozilsa ru valueli indexga select bo'ladi
// - va - select.selectedIndex = 2 desak 2-indexda turgan ma'lumotni select qiladi
// - can be selected by id and classname

console.log(form.select.options[1]);

// Input - focus / blur
// - onblur - clicking outside of input - inputdan tashqari joy bosilganda 
// - onfocus - clicking the input
// - try input email validation error

let login = document.querySelector('#login')
// login.onblur = (event) => {
//   console.log("test", event.target.value);
//   if (event.target.value.includes("@")) {
//     loginError.innerHTML = null;
//   } else {
//     loginError.innerHTML = 'hey';
//     loginError.style.color = 'red';
//   }
// };

// login.onkeypress = (event) => {
//   loginError.innerHTML = null;
// };

// login.onfocus = (event) => {
//   loginError.innerHTML = null;
// };

// Submit - form
// - action - url ga jb beradi
// - method - method ga jb beradi
// - onsubmit= (event) =>



form.onsubmit = (event) => {
  form.action = `https://jsonplaceholder.typicode.com/todos/${form.select.value}`;
  form.method = "PUT";
  console.log(form.select.value);
}


