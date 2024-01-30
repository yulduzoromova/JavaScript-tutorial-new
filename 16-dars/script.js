// ======== Recursion function(Takrorlash) ========
// Rekursiv funksiya deb ma'lum bir functionni ichida yana o'sha functionni chaqirishga aytiladi va rukursiv funksiyada to'xtash sharti bo'lishi kerak. Bo'lmasa cheksiz davom etadigan function bo'lib qoladi.


// Berilgan sonning yig'indisi toping 
// for loop bn ishlab ko'ramiz

const sum = (n) => {
  let s = 0;
  for (let i = 1; i <= n; i++ ) {
    s += i;
  }
  console.log(s);
}
sum(5)      // 15

// for loopni o'rniga recursion ishlatib ko'ramiz

let res = 0;
const sum1 = (n) => {
  if (n === 1) return (res = res + 1);   // Function to'xtash uchun shart
  else {
    res += n;
    return sum1(n - 1);           // Function qayta chaqirilyapti qiymatni 1taga kamaytirib
  }
};
 sum1(5);
 console.log(res);

 let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
  },
 };

 function getCalc (company) {
  if (Array.isArray(company)) {
    return company.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(company)) {
      sum += getCalc(subdep);
    }
    return sum;
  }
 }
 console.log(getCalc(company))
 