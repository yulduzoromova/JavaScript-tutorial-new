// ========= Error handling | Callback | Promise | Async await ======== 

// Error handling - Obrabotka oshibok

dhsksk;            // bu xato keyingi to'g'ri kodlarni ham o'qishga qo'ymaydi.

console.log(2);    // ReferenceError: dhsksk is not defined

try {
  console.log(1);
  console.log(2);
  dhsksk
  console.log(3)
} catch (error) {
  console.log("error", error);
}

console.log(4);
// agar try ni ichida xato bo'lmasa catchga o'tmaydi faqat trydagi ma'lumotlarni chiqaradi.
// agar ichida xato bo'lsa xatogacha ma'lumotlarni chiqarib, catch blokiga o'tadi va consolega chiqaradi
// catchgan kn yana consolega ma'lumot chiqarilsa, uni ham chiqaradi
// try catch ishlatishning afzalligi shunda ya'ni, xatoni ko'rishi bn error berib qogan kodlarni ishlatmay qo'ymaydi

try {
  console.log(1);
  console.log(2);
  setTimeout(() =>{
  dhsksk
  }, 1000)
  console.log(3)
} catch (error) {
  console.log("error", error);
}

console.log(4);

// setTimeoutni ichidagi xatolik 1 sekdan keyin ishalagani uchun, hamma ma'lumotlar consolga chiqayapti, error berib programmani sindirmayapti
// 1 2 3 4 ni chiqarib kn reference error berayapti

try {
  console.log(1);
  console.log(2);
  dhsksk
  console.log(3)
} catch (error) {
  console.log(error.name);        // ReferenceError bu errorning nomi
  console.log(error.message);     // dhsksk is not defined - qanday xato bo'layotgani

}
// agar error name va error messagelarni consolega chiqarmidgan bo'lsak unda 
// catchni parametriga errorni bermasak ham bo'ladi consoleda esa o'zimiz xohlagan errorni bildiruvchi matnni kiritsak bo'ladi.


try {
  console.log(1);
  console.log(2);
  const user = {}

  console.log(user.name)
  if (!user.name) {              // undefined beradi
    throw new Error("Xato")      // yangi error yasayapmiz
  }   
} catch (error) {
  console.log(error.name);        // ReferenceError bu errorning nomi
  console.log(error.message);     // dhsksk is not defined - qanday xato bo'layotgani
}

// yuqoridagi misolda user obj yaratildi, consolga user.nameni chaqirganimizda undefined berib praektni buzishi mumkin
// shart berayapmiz agar user.name bo'lmasa yani Error yasashapmiz konstructor orqali new Error, new SynctaxError, new ReferenceError ham yasashimiz mumkin.
// va Errorni parametriga qanaqa xato ekanligini yozamiz.
// catch bo'limida esa o'sha errorning nomi ya'ni Error va messageni chiqarayapmiz ya'ni "Xato"

try {
  console.log(1);
  console.log(2);
  const user = {}

  console.log(user.name.er)   // TypeError beradi chunchi user.name undefinedga teng a biz undefineddan yana erni olmoqchimiz 
} catch (error) {
  console.log(error.name);   
  console.log(error.message);     
} finally {
  console.log("Finally blokiga tushdim");
}
// Finally bloki try va catch bloklariga bog'liq bo'lmagan holda ishlaydi ular ishlasa ham ishlamasa ham oxiriga unda yozilgan ma'lumot chiqadi

// Callback

// asinxron javascript  ES6dan oldin callbacklar bn bajarilgan. 
// quyidagi misolda 3ta user bor va 4-userni callback orqali kiritayapmiz


const users = [
  {name: 'Bexruz', firstName: 'Xolmuminov'},
  {name: 'Shaxboz', firstName: 'Xolmuminov'}, 
  {name: 'Dilbar', firstName: 'Alimova'}
]

function getUsers(){
  setTimeout(() => {
    let result = ''
    users.forEach((user) => {
      result += `<li>${user.name} ${user.firstName}</li>`
    })
    document.body.innerHTML = result
  }, 1000)
}

function addUser(user, callback){
  setTimeout(() => {
    users.push(user)
    callback()
  }, 2000)
}

addUser({name: 'Toshmat', firstName: 'Eshmatov'}, getUsers)



let response;
setTimeout( () => {
  response = "Http so'rovimizning javobi!"
},2000);
console.log(response) // undefined

function getUser(callback){
  setTimeout( () => {
    callback("Http so'rovimizning javobi!")
  },2000);
  }
  getUser( (response) => {
  //  bu yerda response = "Http so'rovimizning javobi!"
    console.log(response);
  });


// Promise

let promise = new Promise((resolve, reject) => {
   setTimeout(() => {
    if (false) {
      resolve("Promis to'g'ri bajarildi!")
    }
    reject(new Error("Sorry error"))
   }, 1000)
});

promise
.then((data)=> console.log(data))
.catch((error) => console.log(error))
.finally(() => console.log("Final"))

// Promise dagi resolve argumenti ish to'g'ri bajarilganda chaqiriladi, reject esa xato bo'lganda

// Misol uchun: men xonamdan chiqib oshxonaga bordim va muzlatgichdan muzqaymoqni olib yedim deylik. Ushbu kodni promiselar bn yozib ko'ramiz.

let promis = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Xonamdan chiqib oshxonaga bordim");
  }, 1000)
});

promis.then((result) => {
  console.log(result);
  return new Promise((resolve) => {
     setTimeout(() => {
      resolve(result + ', muzlatgichni ochdim');
  }, 1500);
  }).then((result2) => {
    console.log(result2);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result2 + ' va muzqaymoqni olib yedim')
      }, 2000)
    }).then((data) => console.log(data));
  })
})

let promis1 = new Promise((resolve) => {
  setTimeout(()=>{
    resolve('Uydan chiqtim. ')
  }, 1000)
})

promis1.then((result) =>{
  console.log(result);
  return new Promise((resolve) => {
    setTimeout(() => {
       resolve(result + "Magazinga bordim. ")
    }, 1500)
  }).then((result2) =>{
    console.log(result2);
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(result2 + 'Magazinga kirdim. ')
      }, 2000)
    }).then((data) => console.log(data))
    })
  })


  // Promise.all

  const getPromise = (time, isResolve = true) => {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        if (isResolve){
          resolve(time)
        }else{
          reject(new Error('Oshibka'));
        }
      }, time)
    });
  };

  Promise.all([getPromise(1000), getPromise(2000), getPromise(3000) ])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

  // Promise.all - agar bir nechta promislarimiz parallel hammasi bajarilishi kk bo'lsa kerak bo'ladi.
  // va u array qaytaradi

  Promise.all([getPromise(1000), getPromise(2000, false), getPromise(3000) ])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

  // agar biror promisga false qiymat berilsa Promis.allda hech qaysi bir promis ishlamaydi va reject funcsiyasi ishlab, catch qismiga tushiradi va error qaytaradi.

  Promise.allSettled([
    getPromise(1000), 
    getPromise(2000, false), 
    getPromise(3000) ])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
  
  // promisening allSettled() funksiyasi bilan hamma promislarni massivni ichida obyekt ko'rinishida chiqara olamiz
  // qaysi promise false qilmat qabul qilsa, uning statusi rejected bo'ladi va reason keyida qanday xatolik bo'lganligi yoziladi, aksincha fulfiled.


  Promise.race([
    getPromise(1000), 
    getPromise(2000, false), 
    getPromise(3000) ])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

  // Promisening rece() metodi eng 1-to'g'ri yoki xato promiceni qaytaradi

  Promise.any([
    getPromise(1000, false), 
    getPromise(2000, false), 
    getPromise(3000) ])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

  // Promisening any() metodi birinchi to'gri bajarilgan promiseni qaytaradi
  // agar hamma promislar error bn ishlayotgan bo'lsa All promise were rejected degan xabar qaytaradi

  // Promisening yana 2ta metodlari bor bular Promise.resolve va Promise.rejected 
  // Promise.resolve() promisening avtomatik resolve qismi bajarilishini ko'rsatadi
  // Promise.reject() avtomatik ravishda xato bo'lganini ko'rsatadi
  

// async => await - promisening boshqa sintaksis bn yozilishi ya'ni bir xil ishni bajaradi faqat tushinarliroq yoziladi. ES7da ishlab chiqilgan 
// promiseda ko'p so'rovlar ketayotgan bo'lsa then()lar ko'payib ketadi
// bunday holatda async awaitni ishlatamiz




