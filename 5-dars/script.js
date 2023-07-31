// Switch statement
// same as If


// if (condition)
// switch (variable)
// case - holat

// let data = "yomg'ir"
//  switch (data) {
//   case "yomg'ir":
//     console.log("bugun yomg'ir");
//     break;
//     case "qor":
//       console.log("bugun qor");
//       default:
//         console.log("no data");
//  }

 // - aniq bitta holatni tekshira olamiz
 // - default = else
 // - qayerda breakni ko'rsa shu yerda 
 // to'xtaydi agar yozilsa keyingilarini ham chiqaradi
 // - switch har doim teng === ga
 // if <, >, <=, >=, ==, === hammasini qabul qiladi
 // shu asosiy farqi
 
 
 // For loop (basic)

 // for (boshlanish, manzil, step)

//  let i = 1;
//  for (i = 1; i < 10; i = i + 1) {
//   console.log(i);
//  }

// ===========================================
var sum = 0;
 for (i = 1; i < 12; i++) {
  console.log((sum += i));
  if ( sum === 10) break;
 }

 // break qachonki loopni aynan bir nuqtaga kelganda to'xtatishni xohlasak ishlatamiz
 // misolda bu summa 10ga teng bo'lganda to'xtashi kk

 // Misol taxlili:
 var sum = 0;
 for (i = 1; i < 12; i++) {
  console.log(`Sum = ${sum} +${i} =${(sum +=i)}`);

  if ( sum === 10) break;
 }

 // Natija:
// Sum = 0 + 1 = 1
// Sum = 1 + 2 = 3
// Sum = 3 + 3 = 6
// Sum = 6 + 4 = 10

// ========================================
for (i = 1; i < 12; i++) {
  console.log(i);            // 1, 3, 7
  i += i;
 }

 //                              1-holatda i= 1
 // i = 1 i++ = 2  i+=i = 1+2=3  2- holatda i=3
 // i=3   3+1=4    4+=3 = 7      3- holatda i=7 

 //===============================================
 // 12gacha bo'lgan faqat juft sonlarni chiqaring
 for (i = 1; i < 12; i++) {
  if (i % 2 === 0) 
  console.log(i);            // 2, 4, 6, 8, 10
 }

 //===============================================
 // faqat toq sonlar
 for (i = 1; i < 12; i++) {
  if (i % 2 === 1) 
  console.log(i);             
 }

 //==============================================
 for (i = 1; i <= 12; i++) {
  if (i % 3 === 0) continue;  // shu shart bajarilganda keyingisiga o'tib ketadi
  console.log(i);            // 1,2,4,5,7,8,9,10,11
 }

 // =============================================
 for (i = 10; i >= 1; i--) {
  console.log(i);            // 10, 9, 8, 7, 6, 5, 4, 3, 2
 }

// ==============================================
for (i = 10; i >= 1; i--) {
  for (j = 1; j <= 10; j++){
  console.log(j);  
  }                          // 1dan 10gacha bo'lgan sonlarni 10marta chiqaradi 
 }
//================================================
for (i = 10; i >= 1; i--) {
  for (j = 1; j <= 10; j++){
   console.log(i);  
  }                          // 10dan 2gacha bo'lgan sonlarni 10marta chiqaradi 
 }

// ==============================================

outer: for (i = 1; i <= 2; i++) {
  inner: for (j = 1; j <= 2; j++) {
    if (i <= 1) break inner;
    console.log(j, "j");
  }
  console.log(i, "i");
}