// while

i = 3;
// while (i) {
//   console.log('hey');
//   i--;
// }

// do while - qachonki whiledagi condicion bajarilsa, do ishlaydi
// do {
//   console.log(i);
//   i--;
// } while (i == 0);

// Function - basic

// function getAvr() {
//   console.log("Webbrain");
//   console.log("Webbrain");
//   console.log("Webbrain");
//   console.log("Webbrain");
//   console.log("===========");
// }



function name() {
  console.log("Abdulloh, Welcome ");
  
}
// functionni undan yuqorida chaqirsak ham bo'ladi

// Functionlarni create qilish yo'lllari:
// 1.function decloration, name() funcksiyasi bunga misol ularni xohlagan joyda chaqiraolamiz
// 2.function expression - variablega biriktirilgan functionlarga aytiladi
// 3. arrow function

// const getAvr = function (){
//   console.log("Abdulloh, Welcome ");
// }
// // ln func expressionni funcdan oldin chaqirolmaymiz
// getAvr()

// Hoisting nima?
// o'zgaruvchilarni function expressionlarni docni boshida declare qilishga aytiladi. bu errorlarni oldini oladi.

// Callback function - function inside another function of parameter

// Arrow function -
// const getAvr = () =>{}

// Parametr
// const getAvr = function (name) {
//   console.log(`${name}, Welcome to Webbrain`);
// }
// getAvr('Najmiddin')
// getAvr('Iqboljon')
// getAvr('Asliddin')
// getAvr('Yulduz')

// const getAvr = function (name, surname, age){
//   console.log(`Name: ${name}`);
//   console.log(`Surname: ${surname}`);
//   console.log(`Age: ${age}`);
//   console.log(`===========`);
// }

// getAvr("Najmiddin", "Nazarov", 20);
// getAvr("Iqboljon", "F", 22);
// getAvr("Asliddin", "F", 25);
// getAvr("Muhammad", "F", 28);


// const telegram = (name, surname) => {
//   if(surname) console.log(name, surname);
//   else console.log(name);
// };

// telegram("Yulduz")

// const gpa = (a = 0, b = 0, c = 0, d = 0) => {
//   let res = (a + b + c + d) / 4;
//   console.log(res);
// }

// console.log(gpa(4.5, 3, 3.5, 2));  // 3.25

// FUNCTIONDAN QAYTAYOTGAN QIYMAT USTIDA BIROR AMAL BAJARMOQCHI BO'LSAK, QIYMAT QAYTARMASLIGI MUMKIN
// UNI USTIDA AMAL BAJARISH UCHUN CONSOL.LOGDA ESAM RETURNDA JBNI CHIQARISHIMIZ KK. SHUNDA FUNKSIYA QAYTARGAN QIYMAT USTIDA YANA BIROR AMAL BAJARISH MUMKIN.

const gpa = (a = 0, b = 0, c = 0, d = 0) => {
  let res = (a + b + c + d) / 4;
  // return res;
  console.log(res);
}
console.log(gpa(5, 3, 3, 2));   // 3.25   
// consol bn yozsak oxirgi consolda undefined chiqaradi, return bn yozsak, functiondan chiqqan qiymat ustida ham amal bajarish imkonini beradi.



// CLEAN CODE -> KO'PROQ FUNCTIONLARNI TO'G'RI NAMING QILISHGA AYTILADI
// - "get..." -- return a value
// - "calc..." -- calculate smth
// - "create..." -- create smth
// - "check..." -- check smth n return boolean
// - camel case - getAge, showPrime

// 1-savol: Functionni declare qilishning necci xil usuli bor?
// javob: 2-xil usuli bor Function decloration va function expression

// FD
function name(params) {
}

// FE 
const funcName = function () {
}

// 2-savol. Shadow variable - the same name varaible
// bor varaiblega yana bitta boshqa qiymat biriktirilishiga aytiladi
// 

// 3-savol Qachon functionda return ishlatamiz?
// Agar functiondan qaytgan qiymat ustida yana amal bajarmoqchi bo'lsak return ishlatamiz
// return o'sha ma'lum nomli func.ga qiymatni biriktirib qo'yadi!!