let str = ["orange", "apple", "banana", "kiwi"];

let res = str.filter(function (value, index) {
  return value.length <= 5;
});

console.log(res);               // [ 'apple', 'kiwi' ]

// filter() array metodi callback function qabul qiladi. return da condition yozsak bo'ladi. agar returnda true qaytsa arrayni o'zi qaytadi agar false qaytarsa [] bo'sh array qaytaradi. Yuqoridagi misolda stringlarni qaysi birida uzunligi 5ga teng yoki kichkina bo'lsa, o'sha qiymatni qaytarsin.

let num = [1, 2, 34, 3, 22, , 45, 0];

let result = num.filter((value, index) => {
  return value < 10;
});

console.log(result);          // [ 1, 2, 3, 0 ]


let student = [
  {id: 1, year: 2002, name: 'Iqboljon Yoldashev'},
  {id: 2, year: 2002, name: 'Asilbek'},
  {id: 3, year: 2000, name: 'Najmiddin'},
  {id: 4, year: 2002, name: 'Abdulloh'},
  {id: 5, year: 1995, name: 'Sardor'},
  {id: 6, year: 2002, name: 'Mohichexra'},
  {id: 7, year: 2007, name: 'Muhammad'},
  {id: 8, year: 2002, name: 'Shukurov'},
];

let rez = student.filter((value) => value.year === 2002)

console.log(rez);

// [
//  { id: 1, year: 2002, name: 'Iqboljon Yoldashev' },
//  { id: 2, year: 2002, name: 'Asilbek' },
//  { id: 4, year: 2002, name: 'Abdulloh' },
//  { id: 6, year: 2002, name: 'Mohichexra' },
//  { id: 8, year: 2002, name: 'Shukurov' }
// ]

// ========================
// Elementlarning tartibini aniqlashda qo'llaniladigan funksiya. Birinchi argument ikkinchi argumentdan kam bo'lsa manfiy qiymatni, teng bo'lsa nol va aks holda musbat qiymatni qaytarishi kutilmoqda. Agar qoldirilgan bo'lsa, elementlar yuqoriga ko'tarilgan, ASCII belgi tartibida tartiblanadi.
let n = [2, 3, 1, 7, 22, 45]
let r = n.sort((a, b) => a - b);
console.log(r);                       // [ 1, 2, 3, 7, 22, 45 ]

// sort() to'g'ri ishlashi uchun shunaqa a-b deb yozishimiz kerak

// stringlarni taqqoslash uchun: localCompare()dan foydalanamiz u harflarni katta kichikligini inkor qiladi

let str1 = ["orange", "Apple", "banana", "Kiwi"];
let re = str1.sort((a, b) => a.localeCompare(b))

console.log(re);           // [ 'Apple', 'banana', 'Kiwi', 'orange' ]

let resultat = student.sort((a, b) => a.name.localeCompare(b.name))

console.log(resultat);      // alfabit tarzida studentsdagi hamma namelarni sort qilib chiqaradi

// ===========================
// find()

console.log(num.find((value) => {
  return value === 34                // 34ga teng bo'lgan valueni chiqaradi yo'q bo'lsa undefined chiqaradi
}));

// find() ham callback qabul qiladi, ichida value arrayni ichidagi qiymatlar va returnga condition yozamiz. 

let rezul = student.find((value) => {
  return value.id === 5;
}).name                    // idsi 5ga teng bo'lgan studentni nameni chiqaradi

console.log(rezul);

// =====================
// findIndex() - nechinchi indexda joylashganligini chiqarib beradi

// findlastIndex() - oxiridan boshlab qidiradi indexini

// forEach() - loop arraylarga har doim forEach yoki map ishlatamiz.
// forEach() bn map()ning farqi map() returnga qaytadi natijani ekranga chiqarish kk bo'lsa map ishlatamiz. forEachning vazifasi arrayni aylanish faqat.

let ar = [2, 3, 4, 15, 65, 43, 5]
 let resForEach = num.forEach((value, index) => {
  console.log(value);
 });
 console.log("==========");

 let resmap = num.map((value, index) => {
  console.log(value);
 });

 console.log(resForEach);
 console.log('==========');
 console.log(resmap);

 console.log(num.every((value) => typeof value === "number"));   

 // every() har bitta array element conditionda yozilgan shartga mos tushadimi yo'qmi tekshiradi, mos tushsa true, tushmasa false chiqaradi

 // some() every()ni teskarisi birortasi shu conditiondagi shartga mos tushadimi yo'qmi tekshiradi birortasi mos tushsa true hech qaysi biri mos kelmasa false qaytaradi

let b = [2, 3, 1, 7, "22", 45, 9]
//console.log(b.fill(22, 4, 6 ))           //[ 2,  3, 1, 7, 22, 22, 9]

// ya'ni fill('qaysi songa', nechinchi indexdan boshlab, nechinchi indexgacha) o'zgartirishni kiritish mumkin.


// copyWithin(qayerga joylashtirmoqchimiz, qayerdan boshlab ma'lumot omoqchimiz, qaysi indexgacha ma'lumotni copy qilmoqchimiz) - arrayni o'zidagi biror ma'lumotni arrayni o'ziga replace qilib qo'yadi. almashtirilgan joydagi sonlar yo'qoladi o'rniga yoziladi.


let a = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7 ]
console.log(a.copyWithin(0, 3, 6));      // [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]


let c = [1, [2, [3, 4]], 5, 6, 7]

console.log(c[1][1][0]);          // 3

// array ichida arraylarni chaqirayotganimizda yuqoridaqa yozuvda chaqiramiz, ya'ni cning[index][index][index]

// flat() methodi bir necha ichma - ich arraylarni childdan chiqarib beradi. Masalan yuqoridagi c arrayni qiymatlarini hisoblamoqchi bo'lsak, avval childlardan chiqarib olishimiz kk. flat(2) desak bitta childni chiqarib beradi, agar ular bir nechta bo'lsa  va nechtaligini bilmasak, flat(Infinity) deb yozilsa hamma childlarni arrayga chiqarib beradi va biz uni ustida amal bajarishimiz mumkin bo'ladi.

console.log(c.flat(Infinity).reduce((s, c) => s + c, 0));                       // 28

// arrayni ichida bir xil raqamlarni chiqarib yuborish uchun new Set()dan foydalanamiz

 let d = [1 , 1, 3, 4, 4, 5, 6, 7]
 console.log(new Set(d));          // Set(6) { 1, 3, 4, 5, 6, 7 }

// new Map() arrayni huddi objectdek chiqaradi

console.log(new Map([
  ['a', 1],
  ['b', 2],
]));                                //Map(2) { 'a' => 1, 'b' => 2 }

// bu yerda birinchi qiymat key, 2chisi value

console.log(Array.from("webbrain"))         // [ 'w', 'e', 'b', 'b', 'r', 'a', 'i', 'n']

// Array.from() parametrida yozilgan qiymatdan array yasab beradi, agar u son bo'lsa [] bo'sh array yaratadi. 2- parametiri callback qabul qiladi va 1- parametrdagi qiymatni valuelarini oladi, u valuelariga qogan metodlarni ham ishlatsa bo'ladi masalan,

console.log(Array.from("webbrain", (v) => v.toUpperCase()));           //  [ 'W', 'E', 'B', 'B', 'R', 'A','I', 'N']







