// ======== Scopes ========

var a = 2;
a = 3;
console.log(a);

// if for while functionlarda o'zini scopeda o'zgaruvchilarni chaqirish kk 
// for (let i = 1) - i looks like outside variable, but it's not

for ( i = 0; i < 10; i++){
  //console.log(i);         // for scopega tengishli shuning uchun forni ichida chaqiramiz
}
console.log(i);    // noto'g'ri natijani chiqarib qo'yishimiz mumkin.

// Lexical  Environment - is the environment of the function where it is written.
// - has two parts: Environment Record and Reference to outer lexical environment
// - Environment Record - an object stores all local variables / local memory - 
// - Reference to outer lexical environment - assosiated with outer code
// - draw callstack 
// leksik muhit 2 qismdan iborat bu 1- localniy o'zgaruvchilari va this kalit so'zi, 2-si esa o'zidan 1 pog'ana balandda joylashgan leksik muhit ssilkasi kiradi. Leksik muhit qachonki funksiya chaqirilganda yuzaga keladi.

let userName = "Vataliy";

const foo = () => {
  let userName2 = "Vasiya";

  console.log(userName + userName2);  // bu funksiyaning leksik muhitida userName2 bor ln userName yo'q. Agar funksiya chaqirilganda userName o'zgaruvchisini topolmasa u o'zidan bitta pog'ana tashqaridan qidiradi va topsa consolega shu qiymatni chiqaradi, topmaguncha 1ta pog'ona teppaga ko'tarilib qidiraveradi, topolmasa undefined qaytaradi. 

}
//=================

let user = 'Pavel';

const printName = () => {
  console.log('Hello' + user);
};

user = "Vitaliy";

printName()            // HelloVitaliy    // leksik muhit funksiya chaqirilganda yuzaga kelayapti, va funcsiya ichida user variableni topolmagani uchun funcsiya chaqirilgandan oldingi userni qiymatini olayapti.


function getName(){
  let b = 'wba'
  console.log(name);
  return function() {
    console.log(name, b);
  }
}

// CLOSURE - function which remembers outer variables
// Closure - inner function outer variableni ishlatilishiga aytiladi
// Closure - bu bir functionni ichida 2- functionning bo'lishiga aytiladi
let name = "webbrain";

  function getName() {        // CLOSURE
    console.log(name);
  }

// ====================

function outer() {
  let n = "wba";
  return function() {            
    console.log(n);           // bu ham closure
  }
}

  // Tashqaridagi variableni ishlatayapti va bu closure deyiladi

// GARBAGE COLLECTION - lexical environment is removed after function call 
// functionni ichida ochilgan o'zgaruvchi faqat shu functionni ichida ishlida uni tashqarisida unga acsess qilolmimiz. Shu funksiya chqirilganda ishlatiladi va o'chirib yuboriladi, ya'ni xotirada ko'p joy egallamidi.


// https://www.youtube.com/watch?v=Rc49Z6CNJj0 - JavaScript. Замыкание. Лексическое окружение.