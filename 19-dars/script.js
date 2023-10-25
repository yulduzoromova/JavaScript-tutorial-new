// ======== setTimeout | setInterval ========
// Bular JS metodi emas, lekin hamma browserlar support qiladi.

setTimeout(callback, time, arg)
setTimeout((a, b) => {}, 1000, 'hey', 'you') // 1000 bu 1 sekund


setTimeout(() => {
  console.log("After one sec");
}, 3000)             // 3 sekunddan kn After one sec degan yozuv chiqayapti

// setTimeoutda shunday ma'lumotlarni chiqish vaqtini belgilab qo'yishimiz mumkin.

// EPAMda interviewda tushgan savol consolega qaysi ketma ketlikda chiqadi?
console.log(1);

setTimeout(() => {
  console.log(4);
}, 2000);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);         // 1 3 2 4   settimeoutdagilar baribir log()da yozilganlardan kn chiqadi

// yana bir misol

console.log(1);

const get = () => {
  for (let i = 0; i <= 10000; i++){}
  console.log(4);
};

get()
setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);          // 1 4 3 2

// 3- parametr qanday ishlatiladi?

setTimeout((a) => {
  console.log(2, a);
}, 0, 'hey');           // 2 hey  a parametriga hey qiymat biriktirilib consoleda chiqarilayapti


// ======== setInterval =========
// har qanchadir vaqtda ma'lumot chiqarish kerak bo'lsa setINterval ishlatamiz

let id = setInterval(() => {
  let date = new Date();
  console.log(`
  Today: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
}, 1000);      // har 1 sekundda vaqtni chiqarib turadi.

// ikkala metod ham ishlab bo'lgandan keyin ma'lumotni garbage collectionga chiqarvormidi xotirada qoladi
// xotiradan o'chirib ketish uchun esa clearInterval() va clearTimeout() ishlatishimiz kerak bo'ladi

clearInterval(id);
clearTimeout(id)     

