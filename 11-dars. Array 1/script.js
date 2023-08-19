let ar = [12, 3, 4, "hey", true, function () {}, null, undefined];

console.log(ar[0]);    // 12

console.log(ar.length);   // uzunligi 8ga teng indexi 7ga

console.log(ar[ar.length - 1]);  // undefined   arrayni eng oxirgi ma'lumotini chiqarmoqchi bo'lsak uni uzunligidan lengthdan 1ni ayiramiz

console.log(ar.at(-1));       // undefined  length -1 ni yangi shakli

let ar1 = new Array();
let arr = [];           // 2la tarzda bo'sh [] array yaratib olsak bo'ladi

// new Array nega kerak unda? () qavs ichiga qiymat yozilsa shuncha qiymatli ma'lumoti bosh bo'lgan array yaratib beradi. Masalan:

let newArr = new Array(5)
console.log(newArr);         // [ <5 empty items> ]
console.log(newArr.length);  // 5

// agar new Array() qavs ichida stringda number yozilsa o'sha songa to'ng bo'lgan array yasab beradi

newArr = new Array("5")
console.log(newArr);         // [ '5' ]

newArr = new Array(5, 1, 3)  
console.log(newArr);         // [ 5, 1, 3]   1tadan ko'p qiymat yozilsa, shu qiymatlarga teng array yasab beradi

// bo'shi arrayga qiymat biriktirsak bo'ladi, ya'ni
// ar = [];
// ar[0] = 1;
// console.log(ar);        // [ 1 ]

let ar2 = []
ar2[100] = 1
console.log(ar2);   // [ <100 empty items>, 1 ] 100ta bo'sh elementli va 101- elementi 1ga teng bo'lgan array yasab beradi

let ar3 = [1, 2, 3, 4];
let ar4 = [5, 6, 7];
console.log(ar3.toString());    // 1,2,3,4 Stringga aylantirib beradi
console.log(ar3.join(","));    // 1,2,3,4 huddi toStringga o'xshab stringga o'tqizib beradi
//join() yoziladigan bo'lsa array qanday yozilgan bo'lsa huddi shu ko'rinishda ln stringda chiqadi, 1, 2, 3, 4
// join("") qilib yozilsa arrayni vergullarsiz olib beradi ya'ni 1234
// join("/") join("-") join(".") join(",") "" ichidagi belgi, ma'lumotlarni ajratib turadigan belgini aniqlaydi 


// stringni arrayga o'zgartirish uchun split() metodidan foydalanamiz
let str = "1, 23, 3, 4";
console.log(str.split(","));  // [ '1', ' 23', ' 3', ' 4' ]
// qayerda vergul ko'rsa o'shani 1ta array element qilib array yasaydi

console.log(str.split(""));  // ['1', ',', ' ', '2', '3', ',', ' ', '3', ',', ' ', '4']
// "" ichiga hech narsa yozilmasa vergullarni ham bitta array element qilib oladi

console.log(str.split());   // ['1, 23, 3, 4']  ma'lumotni 1ta array elementi qilib qo'yadi

let a = [1, 2, 3, 4]
console.log(a.join("-").split('-'));   // [ '1', '2', '3', '4' ]
// stringga o'tqazib yana split yordamida qayerda - ko'rsa o'sha yerda 1ta array elementini yasadi


// arraylarni qo'shish uchun concat() dan foydalanamiz

console.log(ar3.concat(ar3));             // [
                                          //  1, 2, 3, 4,
                                          //   5, 6, 7
                                          // ]

console.log(ar4.concat(ar2));            // [
                                         //  5, 6, 7, 1,
                                         //   2, 3, 4
                                         // ]
// concat()ga qo'shimcha parametrlar ham yozish mumkin
console.log(ar4.concat(ar3, [], ar3, ar3));
// [
//  5, 6, 7, 1, 2, 3,
//  4, 1, 2, 3, 4, 5,
//  6, 7
// ]

// AGAR ARRAYLARNI TYPENI ANIQLASH KK BO'LSA, 
console.log(Array.isArray());       // FOYDALANAMIZ, TRUE YOKI FALSE QAYTARADI

let array = []
console.log(array == 0);    // true
console.log(array == "0");  // false

//LOOP IN ARRAY

let user = ["Abdulloh", "Muhammad", "Sardorbek", "Shohruh"]

// for(let i = 0; i < user.length; i++) {
//   console.log(user[i]);                    // Abdulloh,  Muhammad,  Sardorbek,  Shohruh
// }

// faqat juft qiymatini chiqarmoqchi bo'lsak

for(let i = 1; i < user.length; i += 2) {
  console.log(user[i]);                    //  Muhammad,  Shohruh
}

// loopning zamonaviy usuli

for (value of user) {
  console.log(value);           // Abdulloh,  Muhammad,  Sardorbek,  Shohruh
}

for (index in user) {
  console.log(index);          // 0, 1, 2, 3  
}
// demak for of dan faqat valuelari keladi for in dan esa indexlarini olish uchun foydalanamiz

// ARRAY METHODS 
// .length() - arrayni uzunligini aniqlash uchun ishlatiladi
// push() - arrayga ma'lumot qo'shish uchun ishlatiladi. arrayni oxiridan qo'shib ketadi. Nechta ma'lumot qo'shmoqchi bo'sak, ()ichiga yozib ketsak bo'ladi, num.push(4, 5, 6)

let num = [1, 2, 3];
num.push(4)    
console.log(num);        // [ 1, 2, 3, 4 ]

// pop() - arraydan ma'lumotni o'chirish uchun ishlatiladi. arrayni oxiridan 1ta ma'lumot o'chiradi

num.pop()
console.log(num);       // [ 1, 2, 3 ]

num.push([5, 6, 7, 8])
console.log(num);      // [ 1, 2, 3, [ 5, 6, 7, 8 ] ]
// bu tarda ham array ichida array qilib qo'shsak ham bo'ladi

// unshift() - arrayni boshiga ma'lumot qo'shadi
// shift() - arrayni boshidan ma'lumotni chiqarib tashlaydi

num.unshift(9)             
console.log(num);           // [ 9, 1, 2, 3, [ 5, 6, 7, 8 ] ]

num.shift()
console.log(num);          // [ 1, 2, 3, [ 5, 6, 7, 8 ] ]

// splice(boshlang'ich index, qaysi indexgacha). agar 1ta parametr yozsak hammasini kesib oladi

let nu = [ 1, 2, 3, 4 , 1]
// nu.splice(0, 1)
// console.log(nu);          // [ 2, 3 ] boshidan 1ta raqam kesvoladi

// nu.splice(1)           
// console.log(nu);         // [2] 1- index qoldirib qogan hammasini kesvoladi

// nu.splice(2, 3)
// console.log(nu);          // [ 1, 2 ]

// 3-parametr ham olishi mumkin. 3- parametr kesib olingan parametrlarni o'rga qaysi qiymat qo'shishni ko'rsatadi

// nu.splice(0, 2, "yu", "osmon")
// console.log(nu);             //[ 'yu', "osmon", 3, 4 ]

// nu.splice( 2, 0, 5)        
// // boshlang'ich index, nechta kesish kerak, nima qo'shish kerak

// // console.log(nu);                // [ 1, 2, 5, 3, 4 ]

// // indexOf() - bu metod parametirida yozilgan qiymat bormi yo'qmi bor bo'lsa nechinchi indexdaligini chiqarib beradi. 
// console.log(nu.indexOf(2))         // 1
// console.log(nu.indexOf(5));        // -1      yo'q ma'lumot yozilsa -1 chiqaradi

// // agar arrayda bir xil sondan 2ta bo'lsa, 1ta parametr kiritilganda 1chi sonni chiqaradi
// // agar 2-parametr ham kiritsak, o'sha indexdan boshlar 1-parametrdagi sonni qidiradi
// console.log(nu.indexOf(1, 2));     // 4

// console.log(nu.lastIndexOf(1, 2));  // 0  o'ngdan chapga qarab tekshiradi 2ta parametr kiritilsa
console.log(nu.lastIndexOf(1));    // oxiridan boshlab ma'lumotni qidiradi va nechinchi indexdaligini chiqaradi. yo'q ma'lumot kiritilsa -1 qaytaradi


let b = [1, 2, 3, 4,]
console.log(b.reverse());     // [ 4, 3, 2, 1 ]  arrayni teskarisiga yozishga xizmat qiladi

console.log(b.includes(2));   // true yoki false qaytaradi ()parametr ichidagi qiymat bor yoki yo'qligini aytadi

