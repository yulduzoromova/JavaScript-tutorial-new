// Bo'sh obyekt yasamoqchi bo'lsak...
//  let newObj1 = {}
//  let newObj2 = new Object();

// let account = {
//   name: "Webbrain Academy",
//   major: "Fronted, bunker",
//   founded: 2020,
//   "full name": "Webbrain Academy",
//   0: 235758    // raqam bn ham key yaratish mumkin, uni chaqirishda esa [""] dan foydalanamiz!
// };

// console.log(account);
// console.log(account.name);
// console.log(account["full name"]); // keyni chaqirishni bir usuli, ya'ni key 1 emas 1tadan ortiq so'zdan tashkil topgan bo'lsa uni chaqirishda [" "] dan foydalanamiz.
// console.log(account[0]);   // raqam bn yozilgan keyni chaqirishda "" bn yoki raqamni o'zini [] olib chaqirish ham mumkin.


// let account = {
//   name: "Webbrain Academy",
//   major: "Fronted, bunker",
//   founded: 2020,
//   "full name": "Webbrain Academy",
//   0: 235758    
// };

// let key = "major";

// console.log(account[key]);   // Fronted, bunker
// console.log(account.key);    // undefined
// console.log(account["key"]); // undefined

// =====================================

// let account = {
//   name: "Webbrain Academy",
//   major: "Fronted, bunker",
//   name: "Webbrain IT Academy",   // 2ta bir xil keydan oxirgi keyni valuesini oladi!
// };

// account.founded = 2022;         // founded = 2022 degan key create qilayapti
// delete account.major;           // major keyini delete qilayapti
 
// console.log(account);          // { name: 'Webbrain IT Academy', founded: 2022 }

//  =======================================

// let account = {
//   name: "Webbrain Academy",
//   major: "Fronted, bunker", 
// };

// Object.freeze(account);         // objectni muzlatib qo'yadi ya'ni obyektga o'zgartirish kiritib bo'lmaydi. 

// account.founded = 2022;         
// delete account.major;           // bu o'zgarishlarni ham qabul qilmaydi
 
// console.log(account);  

// // =================================

// let account = {
//   name: "Webbrain Academy",
//   major: "Fronted, bunker", 
// };

// Object.seal(account);         // freezega o'xshagan ma'lumot kiritib bo'lmaydi, o'chirib ham bo'lmaydi ammo, bor ma'lumotni valuesini o'zgartirsa bo'ladi.

// account.major = 2022;
// console.log(account);        // { name: 'Webbrain Academy', major: 2022 }

// =================================

// const ac1 = {
//   name: "Webbrain Academy",
//   major: "Fronted, bunker", 
// };
//                               // ac1 != ac2 chunki saqlanayotgan linki boshqa
// const ac2 = {
//   name: "Webbrain Academy",
//   major: "Fronted, bunker", 
// };

// const ac3 = ac1; 
 
// console.log(ac1 == ac2);     // false
// console.log(ac1 == ac3);     // true   chunki ac3 ac1ni manzilini olayapti 2lasini linki bir xil ac2niki esa boshqa shu uchun false!

// console.log(ac1 === ac3);    // true

// // Ma'lumotini o'zgartirsak 2lasida ham bir xil o'zgarish bo'ladi!

// ac1.founded = 2022; 
// console.log(ac1);        // { name: 'Webbrain Academy', major: 'Fronted, bunker', founded: 2022 }
// console.log(ac3);        // { name: 'Webbrain Academy', major: 'Fronted, bunker', founded: 2022 }

// // manzili biriktirilganini o'zgartirsak ham o'zgaradi
// ac3.name = "Webbrain"
// console.log(ac3);        // { name: 'Webbrain', major: 'Fronted, bunker', founded: 2022 }
// console.log(ac1);        // { name: 'Webbrain', major: 'Fronted, bunker', founded: 2022 }

//SABAB 2LASI BITTA ADRESSDA TURIBTI!!!
// =================================

// Ichidagi ma'lumoti bir xil bo'sinu ln manzili bir xil bo'lmasin desak, structuredClone()dan foydalanamiz

// const ac1 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };

// const ac2 = structuredClone(ac1);
// ac1.name = 'ndmdnmd';  // ac1.name qiymati o'zgardi ammo ac2da o'zgarish bo'lmadi
// console.log(ac1);

// let name = "webbrain academy";
// let major = "Frontend";

// const ac1 = {
//   name: name,
//   major: major,
// };

// AGAR OBJECTNING VALUESI VARAIBLE BO'LSA VA KEY NOMI BILAN BIR XIL BO'LSA UNDA

// const ac1 = {
//   name,
//   major,
// }; 

// DEB QISQARTIRIB YOZSAK BO'LADI!

//==============================================

// let name = "webbrain academy";
// let major = "Frontend";

// const ac1 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };

// console.log("name" in ac1);     // true , bu degani name degan o'zgaruvchi bor yo'qligini qaytaradi

// ==============================
// Object.assign() - 1TA BO'SH OBYEKTGA BOSHQA BIR OBYEKTNING MA'LUMOTLARINI BIRIKTIRISH UCHUN QO'LLANILADI!


// let name = "webbrain academy";
// let major = "Frontend";

// const ac1 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };

// const ac2 = {};

// Object.assign(ac2, ac1);     // ac2ga ac1ning ma'lumoti biriktirilyapti

// console.log(ac2);            // { name: 'Webbrain Academy', major: 'Frontend' }
 
// ac1.name = 'test'
// console.log(ac1);           // { name: 'test', major: 'Frontend' }   
// console.log(ac2);           // { name: 'Webbrain Academy', major: 'Frontend' }

// AGAR Object.assign dan OLDIN O'ZGARTIRISH KIRITILSA IKKINCHI OBYEKTDA HAM O'ZGARISH BO'LADI.
// AGAR UNDAN KEYIN KIRITILSA 1CHI OBYEKTDA O'ZGARISH BO'LADI 2-SI O'ZGARISHSIZ QOLADI


// // For in

// const ac1 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
//   founded: 2022,
//   students: 1000,
//   mentors: 5,
// };                                                     // name
                                                          // major
// for ( let i in ac1) {                                  // founded
//   console.log(i);              // i bu yerda keylar =>    students 
// }                                                         mentors 

// for ( let i in ac1) {
//   console.log(ac1[i]);              // keyning valuelarini olish ya'ni Webbrain Academy, Frontend, 2022, ...
// }