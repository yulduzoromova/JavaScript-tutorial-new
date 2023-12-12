//========== Proxy 2 ===========

// ============= Proxy - 2 =============

// ownKeys - faqat loop uchun ishlatiladi

// prived bo'lgan ma'lumotni loop bo'lishini oldini olish uchun
let user = { name: "webbrain", _pw: 1234}

// keys, value, entries
let proxy = new Proxy(user, {
  ownKeys(target) {            // target bu yerda userning o'zi
    return Object.keys(target).filter((vl) => !vl.startsWith("_"));
  },
});
//console.log(proxy);    // { name: 'webbrain', _pw: 1234 }


for (vl in proxy) {
  console.log(vl);    // name
}

// ownKeysda proxy faqat loop bo'layotganda prived ma'lumotlarni chiqarmaydi
// proxyini o'zini consolega chiqarsak, hamma keylari chiqadi


// has(target, prop)
// 1 bn 10 orasidagi  sonlar bor yoki yo'qligini aniqlamoqchi bo'lsak

let range = {
  from: 1,
  to: 10,
};

let proxy1 = new Proxy(range, {
  has(target,prop) {
    return target.from <= prop && target.to >= prop;
  },
});

// range.to = 100  // qilib o'zgartirish mumkin
console.log(1 in proxy1);  // true    true yoki false qaytaradi agar shartga mos tushmasa
console.log(11 in proxy1); // false


// Reflect -  bu new Proxyni faqatgina setter va getter bn soddalashtirilgani varianti

let userr = { name: "webbrain", _pw: 1234 };
Reflect.set(userr, "title", "IT center")   // title key, IT center esa value bo'lib qo'shilayapti
let rangee = {
  from: 1,
  to: 10,
};

console.log(Reflect.get(userr, "_pw"));   // 1234


let useer = {
  name: "webbrain",
  _pw: 1234,
  get() {
    console.log(this.name, this._pw);
  },
};

let data = useer.get;
data.call(useer);      // webbrain 1234    bunday holatda this yo'qolib qoladi shuning un call() bn chaqiriladi

