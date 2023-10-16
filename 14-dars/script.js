// DATASTRUCTURE

let obj = { name: 'webbrain', title: "IT Center", data: {year: 199 } }

console.log(obj.name); // objni namega obj.name deb yozib o'tirmasdan access qilish uchun destructuredan foydalanamiz.
// Ya'ni:

let {name, title, data: {year}} = obj
console.log(name);
console.log(year);  // obyektni ichidagi obyektni destructure qilish

// ARRAYNI DESTRUCTURE QILISH

let ar = ["apple", "orange", "kiwi", "carrot"];

let [bir, ikki, ...res] = ar  // ...res bu yerda spread operatori ikkidan kn qolgandalarini resga jamladik

console.log(bir);
console.log(res);

// FUNCTIONGA NISBATAN DESTRUCTURE

const getData = ({name, id}) => {
  console.log(name, id);
};
 
getData ({name: "web", id: 1})

// ===================

let obj1 = { name: "webbrain", title: "IT Center", data: {year: 199} };
// console.log(Object.entries(obj1))
Object.entries(obj1).map(([key, value], index) => {   // value [] qavs ichiga olib yozilsa u destructure bo'ladi va faqat keylarni nomi chiqadi, agar [] qavsni ichiga key va value yozilsa unda key va valuelarni alohida chiqarish imkoniyatiga ega bo'lamiz
  console.log(value);
})

// ========= new Date =========== 

// - new Date() - current time
// - new Date(sec) - start date / 1970, play with sec - 1000 = 1sec
// - new Date('2022-12-07) - default date, play with it
// - getFullYear() - 4 digit number // 2022 - getYear() is depricated
// - getMonth() - 0~11 month by index
// - getDate() - 1~31 day
// - getHours() - 1~24
// - getMinutes() - 1~60
// - getSeconds - 1~60
// - getMilliSeconds - 1~60
// - getTime() - 1970 yildan boshlab vaqtni sekundda ko'rsatadi
// - Date.now() - current time in seconds, same as new Date().getTime() 
// momentjs.com o'rganish 

console.log(Date.now()); // 1970 yildan boshlab hozirgacha bo'lgan vaqtni secuntlarda ko'rsatadi

let date = new Date();   // konstruckor date yaratib beradi
console.log(date);      // 2023-10-16T07:00:40.109Z vaqtni chiqaradi
console.log(date.getTime());  // getTime() = Date.now()
console.log(date.getDay());   // Hafta kunini chiqaradi 1-7gacha
console.log(date.getDate());  // sana
console.log(date.getMonth()); // oy, 0~11 gacha chiqaradi
console.log(date.getFullYear()); // yil 2023

// Bugungi kunni chiqarmoqchi bo'lsak:
const getToday = () => {
  let date = new Date();
  return `Today: ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}
console.log(getToday())             // Today: 16-10-2023

// xohlagan symbolimizni qo'yish uchun functionni quyidagicha yozishimiz mumkin.
const getToday1 = (symbol) => {
  let date = new Date();
  return `Today: ${date.getDate()}${symbol}${date.getMonth()+1}${symbol}${date.getFullYear()}`
}
console.log(getToday1("/"))   // function parametrida xohlagan symbolimizni qo'yishimiz mumkin.
console.log(getToday1("."))

// Soatni chiqarish uchun:

let sana = new Date();
console.log(sana.getHours());
console.log(sana.getMinutes());
console.log(sana.getSeconds());
console.log(sana.getMilliseconds());


// ============ JSON - JavaScript Object Notation

// Why we need JSON?
// - Used with APIs and Config files
// - lightweight and easy to read
// JSON.stringify - object into JSON
// JSON.parse - JSON into object
// stringify(value, replacer, space yoki indentation) - formatter for indentation

let user = { name: "webbrain", year: 1234567, age: 12, data: { fullName: "webbrain academy", founded: 1999 }};

console.log(JSON.stringify(user));   // obj to json
console.log(JSON.stringify(user, ["name", "year"])); // 2-parametrdagi [] qavs ichidagi ma'lumotlar replaser deb ataladi va u obj.dagi faqat name va year ma'lumotlari backedga ketishi kklini bildiradi, age ma'lumoti ketmaydi.

console.log(JSON.stringify(user, ["name", "year", "data", "fullName", "founded"], 4));  // 3-parametr bu space ma'lumot consolega chiqqanda oldida qancha joy tashab chiqishini ko'rsatamiz, misolda bu 4 space. bu o'qish uchun julay bo'lishi un ishlatiladi 3-parametr

let json = JSON.stringify(user)  // pbj to json
let objs = JSON.parse(json)     // json to obj

console.log(json);
console.log(objs);
