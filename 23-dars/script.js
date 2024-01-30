// ============ Prototype ===========

let user1 = { name: 'webbrain' };
let user2 = { title: 'Academy' };

//Object.assign(user1, user2);

user1.__proto__= user2;       // user2 user1ning protosida joylashgan

console.log(user1.title);

// Yuqoridagi misolda Object.assign() 2ta obyektni bir-biriga qo'shishga xizmat qilayapti. __proto__ ham obyektlarni bir biriga qo'shishga xizmat qiladi yoki protptypeda qanday ma'lumot yozilganini ko'rsatib beradi. __proto__ bn yozib user1ni consolga chiqarganimizda faqat name chiqti, lekin user1.title qilib chaqirganimizda titleni valuesini ham qaytarayapti. Demak, obyektni ichini qidirib agar topolmasa kn prototypedan ma'lumotni qaytarayapti.

let user = { name: "webbrain", last: "Academy" };

// O'zimiz metod yaratsak ham bo'ladi prototype orqali.

Object.prototype.fullname = function () {
  console.log(this.name, this.last);
  return this;
};

user.fullname()       // { name: 'webbrain', last: 'Academy' }

// Arraylar uchun ham o'zimiz prototype yozsak bo'ladi

let ar = [1, 2, 3, 4, 5, 5, 6, 6, 7]

Array.prototype.remove = function (n) {
  let res = this.filter((value) => value !== n);
  console.log(res);
};

ar.remove(4);   // arraydan 4 soni o'chdi
ar.remove(1);   // arraydan 1 soni o'chdi


