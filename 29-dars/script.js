//========== Curry function ===========

function getData(a) {
  return (b) => {
    return (c) => {
      console.log(a + b + c);
    };
  };
}

console.log(getData()()());
console.log(getData(1)(2)(3));     // 6

// Curry function - bir vaqtning o'zida bir necha argumentlarni qabul qilaoladigan yoki boshqa functionga return qiladigan functionga aytiladi. C F - orqasidan olib yurish degan ma'noni anglatadi.
// function nimaga return qilsa shuni qaytaradi 

// Errow functionda quyidagicha qisqartirib yozsak ham bo'ladi
const getData1 = (a) => (b) => (c) => a + b + c;

// Example:
const operations = (type) => {
  return (a) => (b) => (c) => {
    switch (type) {
      case 'add':
        return a + b + c;
      break;
      case "divide":
        return a / b / c;
      break;
      case 'multiply':
        return a * b * c;
        break;
    }
  }
}

const math = operations('multiply');

console.log(math(2)(2)(3));