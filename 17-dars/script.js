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
