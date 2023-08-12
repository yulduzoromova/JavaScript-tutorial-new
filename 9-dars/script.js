// NUMBERS
// (e) represents 0
// katta sonlarni o'qishda oson bo'lishi uchun _ dan foydalanamiz
console.log(100_000_000);          // 100000000
console.log(1e6);                  // 1000000
console.log(1e6 + 1);              // arifmetik amal ham bajarish mn
console.log(1e-6);                 // 0.000001   1ni oldida 6ta 0 bor degani
console.log(1e61);                 // 1e+61    bu ham limit bn ishlaydi
console.log(1e500);                // Infinity qaytarishni boshlaydi

// 1

// toFixed() qavsni ichiga nechchi son yozsak shu limitgacha sonni chiqaradi.

console.log(Number(0.1 + 0.2).toFixed(1));    // 0.3

// toFixed() avtomatik ravishda numberni stringga aylantirib yuboradi
// qayta number typega o'tqazish un + yoki Number()dan foydalanamiz

console.log(Number((0.1 + 0.2).toFixed(1)));   // 0.3 number

// RAQAM STRING HOLATIDA BO'LSA, NUMBERGA AYLANTIRISH UN Number(), parseInt(), parseFloat() dan foydalanamiz

let num = "0.1 + 0.2";

console.log(parseInt(num));          // 0   arifmetik amal bajarmaydi ko'rgan 1-raqamini qaytaradi
console.log(parseFloat(num));        // 0.1   ko'rgan 1-fectionni 
console.log(Number(num));            // NaN   string bo'lgani uchun

console.log(Number(eval(num)))       // 0.30000000000000004 stringni ichidagi matematik amalni to'g'ri bajarib beradi
console.log((eval(num)))             // Number()siz yozsa ham bo'ladi


// Hex, Binary va octal Numbers
// hexadecimal asosan colorlarni ifodalashda ishlatiladi - 0xff === 255
// parseInt(binary, base) - parseInt(010101,2) - binary to decimal  - 2lik sanoq sistemasi ova1dan tashkil tolgan sonlar binary sonlar

// Number methods
// toSring()

let number = 5;

console.log(num.toString);      // 5 string 
console.log(num.toString(2));   // 101 binary son chiqaradi parametrga son yozsak
console.log(parseInt('101', 2)); // 5  binarydan descimalga o'tqizadi
console.log(+"1_000");           // NaN
console.log(isNaN(+"1_000"));    // true  NaNmi? ha NaN

// Object.is(vl1, vl2) - the same as ===  taqqoslidi va true yoki false qaytaradi

// toPrecision()
let n = 5.123456;
let n1 = 0.123456;
let n2 = 0.00123456;

console.log(n.toPrecision(3));        // 5.12
console.log(n1.toPrecision(3));      // 0.123  0ni inkor qiladi
console.log(n2.toPrecision(3));      // 0.00123  0dan katta sonlar boshlangan joyidan boshlab chiqaradi


// MATH - javaScriptning build int funksiyasi, alohida kutubxona emas

// .PI - 3.141592653589793
console.log(Math.PI);        // 3.141592653589793

// abs() - absolute value, only musbat
console.log(Math.abs(-10))  // 10

// floor() - kasr qismini pastga qarab yaxlitlaydi.
console.log(Math.floor(10.999));             //10

// ceil() - kasr qismini yuqoriga qarab yaxlitlaydi
console.log(Math.ceil(10.001));             //11

// round() - qiymatni yaxlitlab beradi
console.log(Math.round(2.5));     // 3 .5dan keyin kattasiga yaxlitlaydi .4 dan kichik bo'lsa kichigiga yaxlitlaydi

// trunc() - kasr qismini tushirib qoldiradi. floor bn deyarli bir xil manfiy qiymatlarda farq qiladi
console.log(Math.floor(10.999));             //10
console.log(Math.trunc(10.999));             //10
console.log(Math.floor(-10.999));            //-11 floor kasr qiymatiga qarab yaxlitlaydi 
console.log(Math.trunc(-10.999));            //-10 yaxlitlamaydi kasr qismini inkor qilib yaxlitlaydi

// random() - 1~0 oralig'idagi random raqam
console.log(Math.random());
console.log(Math.random()*10);                // 1dan 10gacha son chiqaradi ixtiyoriy
console.log(Math.trunc(Math.random() * 10));  // kasr qismini inkor qilib, 1dan 10gacha raqam chiqaradi, parseInt() ham ishlatsa bo'ladi  

// min(numbers) - sonlar orasidagi eng kichkinasini topib beradi
console.log(Math.min(1,2,56, 7, 67, 45, 6));      // 1

// max(numbers) - sonlar orasidagi maximummini topib beradi
console.log(Math.max(1,2,56, 7, 67, 45, 6));      // 67   

// pow(num, pow) - darajaga ko'taradi
console.log(Math.pow(5, 2));             // 25
console.log(5 ** 2);            // 25  math.pow ishlatmasdan

// sqrt() - kvadratdan chiqarish
console.log(Math.sqrt(9));     // 3

// cbrt() - kubini chiqarish 
console.log(Math.cbrt(27));     // 3

// sign() - returns 1, 0, -1 
console.log(Math.sign(-0));       // -0 , matematikada -0 yo'q ln jsda bor
console.log(Math.sign(0));       // 0
console.log(Math.sign(123));    // qolgan ixtiyoriy sonlar hammasi 1 
console.log(Math.sign(-123));  // -1
console.log(Math.sign('-123'));   // -1 
console.log(Math.sign('123a'));   // NaN


// Math - extra info 
// sin(), cos(), tan(), asin(), acos(), atan(), asinh(), acosh(), atanh(), hypot()


// Optional chaining (?.) - asosan nexted obyektlarda ishlatiladi
 
let obj = { name: "webbrain", child: undefined};

console.log(obj.child.age);   // error beradi 

console.log(obj.child?.age);   // bu yerda Optional chaining (?.) ning vazifasi age bor bo'lsa o'qigin yo'q bo'lsa undefined qaytargin degani. Error emas undefined qaytaradi
 




