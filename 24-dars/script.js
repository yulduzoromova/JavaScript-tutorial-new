// OOP - Constructive function

function User(name, lastName, birthday){
  this.name = name
  this.lastName = lastName
  this.birthday = new Date(birthday)
  // this.getbirthdayYear = function(){             // bu o'zimiz yasagan metod
  //   return this.birthday.getFullYear()
  // }
  // this.getFullName = function(){                 // bu o'zimiz yasagan metod
  //   return `${this.name} ${this.lastName}`
  // }
}

// getbirthdayYear va getFullName metodlarini prototype sifatida yaratishimiz ham mumkin
// buning uchun yaratgan Userimizni prototypega murojaat qilamiz

User.prototype.getbirthdayYear = function(){
  return this.birthday.getFullYear()
}

User.prototype.getFullName = function(){
  return `${this.name} ${this.lastName}`
}


// Instans object
const user1 = new User('Bexruz', 'Xolmuminov', '1-2-1980')
const user2 = new User('Malika', 'Aliyeva', '2-3-1990')

//console.log(user1);     // User { name: 'Bexruz', lastName: 'Xolmuminov', birthday: '1-2-1980' }
//console.log(user2);     // User { name: 'Malika', lastName: 'Aliyeva', birthday: '2-3-1990' }
console.log(user2.getbirthdayYear());   // 1990
console.log(user2.getFullName());       // Malika Aliyeva

// Huddi shu misolni classlar bn bajarib ko'ramiz.

// ========== Classes Basics ===========

// class huddi obyektga o'xshiydi ln obyekt emas, hozirgi kunda classlardan foydalanmimiz.
// aslida jsda class degan tushincha yo'q, bu shunchaki sintoksis shugar, sintaksisni chiroyli ko'rsatish un kiritilgan ES6dagi yoqimli o'zgarishlardan biri.

class User {
  constructor(name, lastName, birthday){
    this.name = name
    this.lastName = lastName
    this.birthday = new Date(birthday)
  }

  getbirthdayYear(){
    return this.getFullYear()
  }

  getFullName() {
    return `${this.name} ${this.lastName}`
  }
}

const user4 = new User('Behruz', 'Xolmuminov', '1-1-2000')
const user5 = new User('Malika', 'Aliyeva', '1-1-2005')
console.log(user4);

// ========================================


// class User {
//   fullName(name) {
//     console.log(`Hi ${name}`);
//   }
// }

// let usr1 = new User();
// let usr2 = new User();

// usr1.fullName("Webbrain");

// constructor bu classlarning o'zining bir xususiyati
// constuctor(){} doim birinchi yuradi

class Users {
  constructor(title) {
    this.title = title;
  }

  name = 'webbrain';
  welcomeMsg(){
    console.log(this);
    console.log(`Hi ${this.title}, welcome to Webbrain`);
  }
}

// let usr = new Users("Eshmat");
// let usr3 = new Users("Toshmat");

usr.welcomeMsg();
usr3.welcomeMsg()

// getter setter orqali

class Users {
  constructor(title) {
    this.title = title;
  }

  set welcomeMsg(value){
    console.log(value);
    console.log(`Hi ${this.title}, welcome to Webbrain`);
  }

  get welcomeMsg(){
    console.log(this);
    console.log(`Hi ${this.title}, welcome to Webbrain`);
  }
}

let usr = new Users("Eshmat");
let usr3 = new Users("Toshmat");

usr.welcomeMsg = 'webbrain';
usr3.welcomeMsg;

// Computed named class
class Users {
  ['user' + 'name'](title){         // ['user' + 'name'] bu functionni nomini yasab berayapti
    console.log(title);
  }
}

let usr = new Users("Eshmat");
let usr1 = new Users('Toshmat');
usr1.username('webbrain')

// Inharetense - me'ros olish
// child func.da turib parentning metodlarini 

class Animals {
  speed(speed){
    console.log(`Run ${speed} per hour`);
  }
}

class Rabbit extends Animals {
  info(name){
    console.log(`${name}ni 2ta qulog'i bor`);
  }
}

class Wolf extends Animals{                   // extends orqali Animaldagi speed metodi Wolf classining __protosiga metod sifatida qo'shildi
  info(name){
    console.log(`${name}ni 2ta qulog'i bor`);
  }
}


let animal = new Animals();
let rb = new Rabbit()
let wl = new Wolf()

wl.info("Bo'ri")
animal.speed(12)
rb.info('Quyon')
animal.speed(10)


// ======== Overriding methods

class Animals {
  parent() {
    console.log('U r calling parent');
  }
  speed(speed){
    console.log(`Run ${speed} per hour`);
  }
}


class Rabbit extends Animals {          // Rabbit Animalsni ichidagi ma'lumotlarni meros qilib ovoldi
  child(){
    console.log('U r calling child');
  }
  info(name){
    this.child();
    super.parent()       // parentni matodini chaqirish un super keywordi ishlatiladi
    console.log(`${name}ni 2ta qulog'i bor`);
  }
}

let animal1 = new Animals();
let rb1 = new Rabbit()

//===== Overriding constructor

// parentni ichiga child parametrining qiymati borishi un

class Animals {
  constructor(name){
    console.log('animal', name);
    this.name = name
  }
  speed(speed){
    console.log(`${this.name} runs ${speed} per hour`);
  }
}

class Rabbit extends Animals {   
  constructor(name){
   super(name)                  // superga nima qiymat beradigan bo'lsak, parentini constructorini qaytadan yozadi.
  }     
  info(name){    
    console.log(`${name}ni 2ta qulog'i bor`);
  }
}

let rabbit = new Rabbit("Quyon");
rabbit.speed(12)                   // Quyon runs 12 per hour
