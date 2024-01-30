//========== Proxy 1 ===========

// - Proxy - let name = new Proxy(target, handler)
// - target - is an obj to wrap
// - handler - proxy configuration
// Proxy - validation uchun tasdiqlash tekshirish uchun ishlatiladi

// get(target, property, receiver) - returning the function is value
// target - firts arg on Proxy
// property - property name 
// receiver - obj itself, thiszasz







// let user = {}
// let proxy = new Proxy(user, {});   //user obyectiga nisbatan proxy ishlatayapmiz, 2- parametr configuratsiya

// console.log(user);    // {}
// console.log(proxy);   // {}   hali hech qanaqa konfiguratsiya yozmadikmi unda userni o'zini chiqaradi.

// let user = {
//   name: "webbrain",
//   _stir: 123456,  // _ privideligini ifodalaydi
// };
// let proxy = new Proxy(user, {
//   get(target, prop) {
//     // console.log(target);   // target bu user obj
//     // console.log(prop);
//     // return "hey wba"
//     if(prop.startsWith('_')) return "access dineid"
//     return target[prop]  // ma'lumotga dinamic accses qilayapmiz
//   },  
// });    // 2-par configuratsiyada nimaga return qilsak shu ma'lumotni qaytaradi

// //console.log(user);    
// console.log(proxy._stir);  // ma'lumot get bo'layotgani uchun returnda nima qaytarsa shu ma'lumotni chiqaradi


// SET 

let user = {
    name: "webbrain",
    pw: 123456, 
  };
  let proxy = new Proxy(user, {
    set(target, prop, value) {
      if(prop === "pw"){
        return false
      }
      target[prop] = value // yangi ma'lumot qo'shish un
      return true
      
    },  
  });    
  proxy.title = "it center"
  
  //console.log(user);    
  console.log(proxy);