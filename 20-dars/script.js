// =========== Advanced Function ===========

// bind - konteksni yo'nalishini o'zgartirish imkonini beradi.

function myName(){
  console.log('My name: ', this);
}

const car = {
  name: 'Cobalt',
  year: 2022,
  sayName: myName,
  info: function(model){
    console.log(`Car name is: ${this.name}`);
    console.log(`Year: ${this.year}`);
    console.log(`Model: ${model}`);
  }
}

const gentra = {
  name: 'Gentra',
  year: 2020
}

car.info.bind(gentra, "Chevrolet")()   //  Car name is: Gentra
                                       //  Year: 2020

// bind metodi car obyektini info keyiga gentra obyektiga o'zgartirib berayapti

car.info.call(gentra, 'Chevrolet')
//call bn bindning farqi call funksiyani birdaniga chaqiradi bind esa yangi funksiya qaytaradi va uni chaqirish kk bo'ladi

car.info.apply(gentra, ['Chevrolet'])
// apply ham calldek bir xil birdaniga funksiyani chaqiradi, faqat parametr [] arrayda berilishi kk.
