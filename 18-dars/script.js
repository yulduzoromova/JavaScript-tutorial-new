// ======== Old var | Global Object ========

console.log(a);
var a = 10;      // let bn yozilsa ReferenceError: beradi. var bn esa undefined qaytaradi, error bermaydi.

{
  let b = 10
}
console.log(b);   // b is not defined beradi. nega? chunki b faqat o'zini scopeni ichdagina ishlatiladi va ishlatib bo'gandan kn garbege collectionga o'tqizvoradi.

// ========== IIFE - Immediately invoked function expression
// IIFE dan maqsad alohida scope yaratib olish bo'lgan let const chiqishidan oldin faqat var ishlatilgan

var a = 10;
console.log(a);

(function () {
  var a = 30;
  console.log(a);   // func. ichidagi var faqatgina shu scopelarni ichida ishlidi. bu funksiya named function va u o'zini o'zi chaqiradi. Hozirgi kunda ishlatilmidi.
})();

console.log(a);


// ======== Global Object =========

// javascriptda hamma narsa windowsda joylashadi, unga alternative bu - globalThis

globalThis.a = 10,     // global variable, yani istalgan joyda a variableni, uni chaqirishimiz mumkin bo'ladi

(() => {               // arrow function o'zini o'zi chaqiradigan
  var a = 30;
  console.log(a, globalThis.a);   // 10, 30
})();

console.log(a);       // 10


// ========= Function Object - interviewda tushishi mn bo'lgan ln hozirda ishlatilmidigan ma'lumot.

function test (a, b, ...res){
  console.log('hey js');
}

console.log(test.name);   // test chiqadi bu functionni nomini ovolayapti
console.log(test.length);   // 2 chiqadi parametrdagi qiymatlar  parametrda ...res bo'lsa uni shunchaki ignor qiladi.


// ======= Named Function Expression - NFE ==========

const getName = function recursion(name){        // shu yerda recursion namening berilishi bu NFE. Ya'ni bu recursionni ishga tushirish uchun.
  console.log(`Hi ${name}`);
  return recursion()              // NFE shu. O'zini to'xtovsiz chaqiradi.
}                                 // func.ni ichida yana shu functionni chaqirish uchun, va faqat shu func. ichida ishlaydi, tashqarida ishlamidi

getName("Webbrain")
getName("PDP")
getName("NT")

// ======== new Function - oldin String array... lar hammasi new konstructori orqali yasalgan huddi shundek new Function ham, bu bn function yasalayapti

let getName1 = new Function(`console.log('hey')`)
getName()