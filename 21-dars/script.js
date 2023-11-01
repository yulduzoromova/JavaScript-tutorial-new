function getData() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  res.json()
  );
}

// bir xil requestlarni jo'natishni oldini olish uchun, kelayotgan ma'lumotni cashega olib qo'yib yana request jo'natilganda cashedagi ma'lumotni o'ziga qaytatdan jo'natamiz yana backendga so'rov yubormaymiz.

function getCashed(func) {
 let cashe = new Map();
 return function(x){
  if(cashe.has(x)){
    console.log(cashe.get(x));
    return cashe.get(x)
  }
  let res = func()
  return cashe.set(x, res)
 }
}

getData = getCashed(getData)