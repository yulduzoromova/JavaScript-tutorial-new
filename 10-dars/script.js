let str1 = "webbrain";
let str2 = new String("webbrain");

console.log(str1 == "webbrain");         // true
console.log(str2 == "webbrain");        // false   chunki konstroktor doim bizga obyekt qaytaradi
console.log(str2);                   // [String: 'webbrain']  String ko'rinishidagi string qaytaradi

console.log(str2.localeCompare(str1));     // str2 ichida str1 bor yoki yo'qligini tekshiradi.      -1 = bunaqa qiymat yo'q, 0 = qisman bor, 1 = bor degani

// ===================================

let a = "   webb  \n  rain"          // \n bu new line degani
console.log(a);                      // \t desak tab degani tab qancha joy tashasa u ham shuncha joy tashidi

// let str1 = "webbrain";

console.log(str1[1])                 // e
console.log(str1[-1]);               // undefined - qiymat qabul qilmaydi
console.log(str1.at[-1]);            // n orqadan ko'radi
console.log(str1.charAt(1));         // e [] bn bir xil ishlaydi

// STRING METHODS

let str = "webbrain";
// let str2 = "WEBBRAIN"
console.log(str.length);        // 8 stringning uzunligini ko'rsatadi
console.log(str.toUpperCase());   // WEBBRAIN   stringni katta harflarga o'tqizadi

// Agar str number bo'lsa, `${str}.toUpperCase() qilsak number bo'lsa ham uppercase qilib beradi

console.log(str2.toLowerCase());     // webbrain

console.log(str2.toLocaleLowerCase('tr'));  // bu () ichida yozilgan tilga qarab lowerCase qilib ketadi, default = eng

console.log(str.indexOf('rain'));    // 4, indexOf() ni parametriga stringni biror qismi yoziladigan bo'lsa qaysi index joylashganligini chiqaradi. Yo'q ma'lumot yozilsa -1 qaytaradi

console.log(str.indexOf('bb', 5));   // indexOf() 2- parametr ham qabul qiladi. bu qaysi indexdan boshlab 1-parametrdagi qiymatni qidirish kkligini anglatadi

console.log(str.lastIndexOf('bb'));  // 2  orqadan boshlab qarab keladi va indexini qaytaradi. lastIndexOf() ham 2-parametr qabul qiladi va o'sha songa qarab qayerdan boshlab orqaga qarab qidiradi

console.log(str.includes("in"));  // true, string ichida berilgan parametr bor yoki yo'qligini aniqlab beradi. ture yoki false qaytaradi

console.log(str.startsWith("in")); // false, haqiqatda shu so'z parametrdagi qiymat bn boshlanganmi yo'qmi shuni tekshirib true yoki false qaytaradi

console.log(str.endsWith("in"));    // true, oxiri parametrdagi qiymat bn tugaganmi yo'qmi shuni tekshiradi

console.log(str.padEnd(11, "."));   // webbrain... so'z tugagandan kn 11 indexgacha . nuqta qo'yib beradi

console.log(str.padStart(11, "."))  // ...webbrain  padEndni teskarisi

let str3 = 'webbrain academy' 

console.log(str3.slice(0, 5));    // webbr, agar parametrga yozilmasa qiymatni o'zi chiqadi agar 2- qiymat ham kiritsak nechinchi indexgacha kesib olishini ko'rsatgan bo'lamiz. +- qiymat qabul qiladi

console.log(str3.substring(2, 0));  // we, slice bn bir xil ishlidi faqat parametrlarga teskari qiymat yozsak ham o'zi to'girlab qirqib beradi masalan 2dan 0ga emas, odan 2gacha kesib beradi. Manfiy qiymat qabul qilmaydi

console.log(str3.substr(2, 2));  // bb,  2dan boshlab 2ta harfni kesib beradi yani 2-parametr nechta harf kesib ko'rsatadi. negative start qiymatni qabul qiladi. Faqat chapga qarab emas ongga qarab yuradi. Manfiy qiymat ham qabul qiladi.

console.log(eval('2 + 2 + 2'));                 // 6, eval string ichida ma'lumotlarni calculate qiladi, agar number bo'lmagan son qatnashsa, error qaytaradi.

let comp = "computer   ";

console.log(comp.length);        // 14, spacelar bn birga 14ta belgi deb chiqarayapti

console.log(comp.trim().length);  // 8, trim() metodi o'sha bo'sh spacelarni tashab yuborib stringni asl uzunligini chiqaradi. Ln 2ta so'zni o'rtasidagi bosh joylarni chiqarib tashamaydi

console.log(comp.trimStart());     // computer   stringni boshidagi spaceni o'chirib beradi

console.log(comp.trimEnd());      //   computer  stringni oxiridagi bo'sh spacelarni o'chirib beradi

console.log(comp.split(""));      // [
                                  //   ' ', ' ', ' ', 'c',
                                 //    'o', 'm', 'p', 'u',
                                  //   't', 'e', 'r', ' ',
                                   //   ' ', ' '
                                    //  ]
  // split() ma'lumotlarni arrayga o'zgartiradi, bosh spacelarni ham. Agar parametrga hech narsa yozilmasa, stringni hammasini bitta arrayga soladi.

  console.log(comp.split(" ")); // parametrga qo'shtirnoq ichida probel tashasak, stringni qayerida space ko'rsa o'shani bitta array qilib oladi. 2-parametr qabul qiladi, 2=limit nechta so'zni chiqarish kk shuni yozsak bo'ladi

  console.log(comp.concat("webbrain"));  // stringga concat parametridagi so'zni qo'shib qo'yadi

  let str4 = new String("webbrain")
  console.log(str4);               // [String: 'webbrain']  konstroktor qilib chiqarib berayotgan edi
  console.log(str4.valueOf());     // webbrain  kostroktor qilib emas ichidagi valuesini chiqarib beradi

  console.log(comp.replace("computer", "Computer")); // 2-parametrdagi so'zga o'zgartirib beradi. agar 1-par.dagi so'z noto'g'ri yozilgan bo'lsa, o'zgartirmaydi. /cOmputer/i deb yozgar ignore qilib aytilgan qiymatga o'zgartiradi. /cOmputer/ig qo'yilsa, Necta shunaqa so'z bo'lsa hammasini o'gartiradi / / ig ignore va global o'zgartir degani

  let name = "yulduz oromova"

for (char of name) {             // string uchun loop 
  console.log(char);
}

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);







