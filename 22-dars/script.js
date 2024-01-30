// Properties flag and descriptors 
// - value / true - object value
// - writable / true - valuee can be changed / false: read-only
// enumerable / true - listed in loops / false: not listed
// configurable / true - deletable / false not deletable

// Object.getOwnPropertyDescriptor(user, key) - flaglarni valuesini ko'rsatadi.
// Object.defineProperty(user, "name", {value: "wba"}) - keyga value biriktiradi.


let user = { name: "webbrain", title: "IT Center", getData(){}}

// write
// delete
// loop
// value      bularni har birini control qilishimiz mumkin, bu flag deyiladi.

console.log(Object.getOwnPropertyDescriptor(user, 'name'));      // flaglarni holatini ko'rsatadi                                    
//* {
// value: 'webbrain',
//  writable: true,
//  enumerable: true, = loop
//  configurable: true = delete
// }

Object.defineProperty(user, "getData", {writable: false, enumerable: false })


for (let vl in user){
console.log(vl);            // name
                            // title   chiqayapti getData esa loop bo'maydigan qilib qo'ydik enumerableni false qilib qo'yib.
}

Object.defineProperty(user, "name", {writable: false, configurable: false })
delete user.name
console.log(user);         // { name: 'webbrain', title: 'IT Center' }   name o'chmadi configurable ni false qilib qo'yganimiz uchun delete bo'lmadi

delete user.title 
console.log(user);      // { name: 'webbrain' }   title o'chib ketti 


// SETTER & GETTER

const user1 = {
  name: "webbrain",
  last: "Academy",
  get fullname() {
    console.log(this.name, this.last );
  },
  set fullname(value) {
    this.name = value.name;
    this.last = value.last;
    //console.log((this.name, this.last ));
  },
};
//user1.fullname()       // webbrain Academy

user1.fullname = {name: 'eshmat', last: "toshmat"}  // qiymatini o'zgartirib bermaydi, huddi shunday ma'lumotlarni o'zgartirish uchun getter setterdan foydalanishimiz mumkin.


user1.fullname

// get ma'lumotni olish uchun 
// set har doim value qabul qiladi
