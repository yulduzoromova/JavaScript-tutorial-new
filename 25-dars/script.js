// ======== CLASSES ADVANCED ========

// PRIVATE AND PROTECTED
// visualization: _ is public, # is private
// private variables can be uptdated bu getter and setter.

class Protected {
  _name = 'webbrain';
  #protected = "dont touch it";
  get getName() {
    console.log(this.#protected);
  }
  set getName(vl) {
    this.#protected = vl;
  }
}

let pr = new Protected();

pr.getName;

pr.getName = "I want to touch it";
pr.getName;

// Built-in Clasess - which extends from Arrays, Objects,...

// class Ar extends Array {}

// let ar = new Ar();

// console.log(ar.length);

// instanceof 
class Ar extends Array {}
let ar = new Ar();
let a = () => {};

console.log(a instanceof Object);

// Mixins

class Users {
  getName() {
    console.log("no name");
  }
}

let obj = {
  info() {
    console.log("no info");
  }
}

Object.assign(Users.prototype, obj);

let ur = new Users();
 ur.info()        // no info    Usersni prototypega obj info qo'shildi