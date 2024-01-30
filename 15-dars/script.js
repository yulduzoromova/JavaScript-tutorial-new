// =========== Advanced JavaScript ===========
// new Map, new Set, weakMap, weakSet

let obj = {};

let map = new Map();

console.log(obj);   // {} 
console.log(map);   // Map(0) {}  new Map ham object yaratib beradi

// obj obyekt qabul qilsa, new Map() esa array qabul qiladi

obj.name = "webbrain";
map.name = "webbrain";          // obyekt yasalayapti set() bilan map yasaladi

console.log(obj, obj.name);     // { name: 'webbrain' } webbrain
console.log(map, map.name);     // Map(0) { name: 'webbrain' } webbrain

// new Mapni ham objecni qanday ishlatsak huddi shunday ishlatsak bo'ladi, lekin
// ln new Map boshqa maqsadda ishlatiladi obyect sifatida emas va set() orqali ma'lumot qo'shamiz, get() orqali esa ma'lumotni olish mumkin.
// map.size mapning uzunligini ko'rsatadi huddi obj.lengthdek 

map.set("name", "IT Center")
console.log(map.size, map.get("name"));    // 1 IT Center | map.get(key nomi) yoziladi va consoleda shu keyga biriktirilgan value chiqadi

// obyectni keyi sifatida number kiritolmimiz ln map.set(123, "IT Center") qilaolamiz, bu yerda 123 key

map.set(123, "IT Center")
console.log(map.has(123));   // mapning has() metodi mapning ichida has()ning parametrida kiritilgan ma'lumot bor yoki yo'qligini bildiradi

console.log(map.delete(123)); // ma'lumotni delete qiladi

// new Mapga default value kiritish [[ ]] array ichida array qilib yoziladi
let map1 = new Map([
  ["name", "webbrain"],
  ["title", "IT Center"],
])

console.log(map1);  // Map(2) { 'name' => 'webbrain', 'title' => 'IT Center' }
console.log(map1.keys());   // [Map Iterator] { 'name', 'title' }
console.log(map1.values());  // [Map Iterator] { 'webbrain', 'IT Center' }
console.log(map1.entries());  // [Map Entries] { [ 'name', 'webbrain' ], [ 'title', 'IT Center' ] }

// MAPNI for of qilsak ham bo'ladi

for (let vl of map1) {
  console.log(vl);                      // [ 'name', 'webbrain' ]
                                        // [ 'title', 'IT Center' ]
}

// map1.entries() ham for of bn bir xil ishlaydi
for (let vl of map1.entries()) {
  console.log(vl);                      // [ 'name', 'webbrain' ]
                                        // [ 'title', 'IT Center' ]
}

for (let vl of map1.values()) {
  console.log(vl);                      // webbrain, IT Center chiqadi, ya'ni faqat valuelarini chiqaradi, string
}

for (let vl of map1.keys()) {
  console.log(vl);                      // name, title ya'ni faqat keylarini chiqaradi, stirng
}


// next() generator function bn bir xil ishlaydi. mapni ichini huddi loop kabi aylanadi faqat o'zimiz yurg'izishimiz kerak
let map2 = new Map([
  ["name", "webbrain"],
  ["title", "IT Center"],
])

let gen = map2.entries();
gen.next();      // 
console.log(gen.next());      // { value: [ 'title', 'IT Center' ], done: false }
//console.log(gen.next());   // { value: undefined, done: true }  value qachon undefined bo'lsa shunda done: true chiqadi

// ==== Weird Map: ====
// map.set('name', 'webbrain') !== map.name = 'webbrain' === map['name']
// try with Object.entries() and map.entries() 
// try map with forEach(), but not map()
// Object.fromEntries(mapning nomi) - mapni objectga aylantirish uchun ishlatiladi


// ======== Set ==========
// set faqatgina value collection, map key va value collection edi. Mapni objectga o'xshatsak Setni arrayga o'xshatamiz

let set = new Set();
console.log(set);                // Set(0) {}
set.add({})
console.log(set);                // Set(1) { {} }   // objectni value sifatida kiritolamiz

let obj = { name: "webbrain"};
set.add(obj);
console.log(set);               // Set(2) { {}, { name: 'webbrain' } }
console.log(set.has(obj));      // true

// function ham bir value sifatiga setga add qilinishi mumkin.
function name(p) {
  console.log(1);
}
set.add(name)
console.log(set);             // Set(3) { {}, { name: 'webbrain' }, [Function: name] }
console.log(set.has(name));   // true

// huddi mapdagidek delete() va clear() metodlari setda ham bor delete() 1ta ma'lumotni o'chirsa,
// clear() setni ichidagi barcha ma'lumotlarni o'chiradi.

// Berilgan massivning uniq qiymatlarini chiqarsin

function uniqValues(array) {
  return Array.from(new Set(array))
}

console.log(uniqValues([1,1,2,2,4,4,4,4,4,5,5,6,6,]));    // [ 1, 2, 4, 5, 6 ]

// bu misolni boshqacharoq yozsak ham bo'ladi.
function uniqValue(array) {
  return [... new Set(array)]
}
console.log(uniqValue([1,1,2,2,4,4,4,4,4,5,5,6,6,]));    // [ 1, 2, 4, 5, 6 ]


// ======== WeakMap va WeakSet ========= 
// WeakMap va WeakSet bizga map va set ma'lomotlari bizga endi umuman kerak bo'lmasa xotiradan ham o'chirib yuborish uchun ishlatiladi.
// WeakMap va WeakSet ishlatilmasa ma'lumotni delete qilganimizda ham nullga tenglab qo'yganimizda ham u xotirada garbage collection bo'lib qolaveradi WeakMap va WeakSet esa ularni butunlay o'chirib yuboradi
// Agar ma'lumotga keyinchalik ham acsess qilmoqchi bo'lsak, unda new Map va new Set ishlatishimiz kerak!

let map3 = new Map([
  ['name', 'webbrain'],
  ['title', 'IT Center'],
]);

map3 = null
console.log(map3);   // null ln xotirada garbage collection bo'lib turadi

let map4 = new WeakMap([
  ['name', 'webbrain'],
  ['title', 'IT Center'],
]);


console.log(name);