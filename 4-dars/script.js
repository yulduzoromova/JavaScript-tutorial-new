// if / else

// let temp = 'qor';   // issiq, sovuq, yomg'ir, qor

// // 0, null, undefined - bu if elseda false degani
// if (temp === 'issiq') {
//   console.log("Havo issiq, yengil kiyinib oling");  
// } else if (temp === 'sovuq') {
//   console.log("Havo sovuq, qalin kiyinib oling");
// } else if (temp === "yomg'ir"){
//   console.log("Havo yomg'ir, soyabon olib oling");
// } else if (temp === 'qor') {
//   console.log("Havo qor, qalin kiyinib oling");
// } else {
//   console.log("no'malum ob-havo");
// }

temp = 0 // temp > 0 && temp < 10, temp > 10 && temp < 15, temp > 15 && temp < 25

// if(temp < 0) {
//   console.log('havo juda sovuq');
// } else if(temp < 10) {
//   console.log('havo sovuq');
// } else if(temp < 15) {
//   console.log('havo issiq');
// } else if(temp < 25) {
//   console.log('havo juda issiq');     // bunaqa caselarda kichik sondan kattasiga qarab tekshirish kk
// }

// if(temp < 0) {
//   console.log('havo juda sovuq');
// } else if(temp <= 25 && temp > 15) {
//   console.log('havo sovuq');
// } else if(temp <= 15 && temp > 10) {
//   console.log('havo issiq');
// } else if(temp <= 10 && temp > 0) {
//   console.log('havo juda issiq');     // bunaqa caselarda kichik sondan kattasiga qarab tekshirish kk
// } else {
//   console.log('not found');
// }

// sync
// if ('condition') {'code'}
// else if ('condition') {'code'}
// else {'code'}

// Agar code bir qatorga sig'sa {} qavslarsiz yozish mumkin
// if ('condition') console.log('havo juda issiq');
// else if ('condition') return true;
// else return false;

 temp = 25;
if (temp < 0) console.log('havo juda sovuq');
else if(temp <= 25 && temp > 15) console.log('havo sovuq');
else if(temp <= 15 && temp > 10) console.log('havo issiq');
else if(temp <= 10 && temp > 0)  console.log('havo juda issiq');     // bunaqa caselarda kichik sondan kattasiga qarab tekshirish kk
else console.log('not found');

// ternary operator - faqat true falseni tekshirish uchun ishlatish maslahat beriladi

// ? = if : = else

// temp < 0 ? === if (temp < 0)
// temp > 0 ? console.log("havo juda sovuq") : console.log("not found");

// temp < 0
// ? console.log("havo juda sovuq")
// : temp < 10
// ? console.log("havo sovuq")
// : temp < 15
// ? console.log('Havo issiq')
// : console.log("havo juda issiq");     // bu ternaryni multi stateda ishlatilishi, ln chitaemosh qiyinlashadi 

// temp <= 10 && temp > 0 
// ? console.log("havo juda sovuq") 
// : console.log("not found");



// Nullish
// ?? - it checks only null and undefined
// Difference between ?? and || 
// 0 || 1      // 1
// 0 ?? 1      // 0
// null || 1   // 1
// null ?? 1   // 1
// "" || 1     // 1
// "" ?? 1     // ""
// undefined || 1     // 1
// undefined ?? 1     // 1
// NaN || 1           // 1
// Nan ?? 1           // NaN