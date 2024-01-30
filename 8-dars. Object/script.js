// null - primitive data tuype ln obyekt chunki link qaytaradi

// This - obyektni o'zini nazarda tutadi, this obyektni target qiladi!
// this === window        // true
// let user = {
//   name: 'webbrain',
//   sayHi: function(){
//     console.log("Hi");
//   },
// }

// user.sayHi()           // Hi

// // ==================
// function sayHi(){
//   console.log("Hi");
// }

// let user1 = {
//   name: 'webbrain',
//   sayHi: sayHi,
//     // sayHi: function () {
//    // console.log("Hi")
//    // },
// }

// user1.sayHi()           // Hi

//=======================

// let name = 'webbrain';

// let user2 = {
//   name, 
//   sayHi() {           // qisqartirma shakli
//     console.log('I said Hi');
//   },
// }

// user1.sayHi() 

// =========================

// let user = {
//   name, 
//   sayHi() {           
//     console.log(`Hi, ${this.name}`); // Hi webbrain
//   },
// }

// user.sayHi()

// ============
// Arrow func. this yo'q ishlamaydi

// CONSTRUCTOR FUNCTION

// function getName() {
//   this.name = 'webbrain';
//   console.log(this);
// }
// console.log(new getName().name);       // webbrain

// new bilan yozib ketsak local esam global ishlatsak ham bo'ladi natijani

//==============================

// function getName (name) {
//   this.name = name;
//   this.sayHi = function () {
//     console.log('hi', thiis.name);
//     return 'hey';
//   };
// }

// getName('eshmat').sayHi();      // error
// new getName('toshmet').sayHi()  // hi, toshmat

//============================

// function getName(name) {
//   console.log(new.target);           // [Function: getName]
// }
// new getName('eshmat')                // new.target constructor bn function chaqirilgan yoki chaqirilmaganligini aniqlab bradi

//=============================

// SYMBOL - unique id yasab beradi

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1);
// // console.log(id1 === id2)          // false

// let obj = {
//   [id1]: "webbrain",       // Symboldan qaytayotgan o'zgaruvchini obyektga key sifatida yozmoqchi bo'lsak, [] ga olib yozamiz
// };                         // qachonli [] ichida o'zgaruvchi kelsa, key dynamic bo'ladi
//                            // dynamic bu istaganimizcha o'zgartirishimiz mumkin bo'lgan key
// console.log(obj[id1]);


// let obj = {
//   name: 'webbrain',
//   title: "IT Center",
//   age: "34567",
// };

// for (value in obj) {
//   console.log(obj[value]);         // valuelarni chiqaradi ya'ni name,title, age
//                                   // obj.value deb yozilmidi chunki obj ni ichidagi value keyini qidiradi va underfined qaytaradi
// }

// DISTRUCTURE

// let obj = {
//   name: 'webbrain',
//   title: "IT Center",
//   age: "34567",
// };

// const {name, title, age} = obj;     // destrachering yo'li bn keylarni chaqirish

// console.log(title);                 // IT Center
// console.log(obj.name);              // Webbrain


// OBYEKTNI ICHIDAGI OBYEKTNI HAM DISTRUCTURE QILISH MUMKIN.

// let obj = {
//   name: 'webbrain',
//   title: "IT Center",
//   age: "34567",
//   child: {
//     childname: 'testing name',
//   }
// };

// const {name, title, age, child:{childname}} = obj;

// console.log(childname);          // testing name

// =========================================

// SPREAD OPERATOR - asosan copy qilish ma'lumotni yangilash un ishlatiladi 

// let obj = {
//   child: {
//     childname: 'testing name',
//   }
// };

// console.log(obj);              // { child: { childname: 'testing name' } }
// obj = {...obj.child};
// console.log(obj);              // { childname: 'testing name' }
// bu yerda spread (...) operatori obyekt ichidagi obyektni tashqariga chiqarayapti

// =============================

// const obj = {
//   name: 'webbrain',
//   age: 2345,
// };

// // obj obyektni name keyini o'zgartirmoqchi bo'lsak
// console.log({...obj, name: 'IT center'});        // { name: 'IT center', age: 2345 }
// console.log({ name: 'IT center', ...obj});       // { name: 'webbrain', age: 2345 }
// name IT centerga o'zgarmasdan chiqishiga sabab ...obj keyin kelayapti bu  {name: "IT center", age: 2345, name: "webbrain"} degan bn teng. Demak oxirgi kegan nameni oladi 1-kelganni esa ignore qiladi

// ============================

const obj1 = {
  name: 'webbrain',
  age: 2345,
};

console.log({obj1, name: 'IT center'});      // { obj1: { name: 'webbrain', age: 2345 }, name: 'IT center' }

// spread operator ... yozilmasa bor obyektga yangi nameni qo'shib qo'yadi

