// ======== Type Convirsions | Operators | Comparision | Logical Operators =========
// Type Convirsions deb - data typelarni boshqasiga o'zgarishiga aytiladi.

let b = 1;
let a = "1";

console.log(b + a);   // 11 String data type numberdan stringga o'zgardi

console.log(+a);  // 1 number 

//NaN - Raqam bo'lmagan ma'lumotlar ustida arifmetik amal bajarilsa NAN qaytaradi.
// isNaN bn NaN yoki NaN emasligini tekshirib beradi

console.log(b + +a);      // 2 

let c = '10.3'

console.log(Number(c));              // 10.3 numberning o'zi
console.log(Number.parseInt(c));     // 10   butun qismi
console.log(Number.parseFloat(c));   // 10.3 kasr qismi bn birga huddi Numberdek
console.log(parseInt(c));
console.log(parseFloat(c));       // Numbersiz yozsak ham bo'ladi

// Type Convirsion yuz berayapti chunki hammasida data taype stringdan numberga o'zgarayapti

// ======== variables => boolean

// true = !0, !null, !undefined
console.log(false == 0);       // true
console.log(true == 1);        // true
console.log(false == null);    // false
console.log(undefined == null); // true
console.log(false == undefined); // false
console.log(undefined == null);  // true

console.log(true == '1');    // true
console.log(true == 'a');    // false

console.log(true == '0');    // false

// ======= Basic operators, maths
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **,
// Braces (),
// Equality =, ==, ===
// Obrivations +=, -=, /=, *=
// Icrement ++
// Decrement --

let d = 2
let f = '4'
console.log(d / +f);

console.log(8 % 3);    // 2 qoldiq

// ======= ++ --
// a++;
console.log(d++);    // 2
console.log(d);      // 3

//======= Obrivations
let a1 = 10;

a1 = a1 + 10    // 20
a1 += 10       // 30
a1 -= 10      // 20
a1 /= 10     // 2
console.log(a1);   // 2

//====== Comparision
// <, >, ==, ===, <=, >=, !, Ma'lumotlarni compare qilish doim true yoki false qiymat qaytaradi
// string comparision

// Taqqoslash har doim booleanga qaytadi 

let a2 = 10
let a3 = 11
let a4 = '11'

console.log( a2 > a3);
console.log( a2 < a3);
console.log( a3 < a4);
console.log( a4 <= a3 );
console.log( a4 >= a3 );
console.log( a4 == a3);
console.log( a4 === a3);
// console.log( a4 =< a3); Wrong sync

let str1 = 'A'
let str2 = 'a'

console.log(str1 > str2);   // false
console.log(str1 < str2);   // true
console.log('str1' < 'str2');  // true    ASCII code bo'yicha solishtiradi

// Logical Operations
// OR ||

let ceo = true;
let admin = true;

console.log(ceo === true || admin === true);    // true
console.log(true || true);    
console.log(false || false);    // false
console.log(true || false);     // true


// AND &&

let id = true
let face = false;

console.log(id && face);     // false

