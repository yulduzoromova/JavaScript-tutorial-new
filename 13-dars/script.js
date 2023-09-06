// CRUD - CREATE, READ, UPDATE, DELETE
// UPDATE - map()dan foydalanamiz. chunki u har doim return qaytaradi. Valueni o'zgarishsiz ob keladi.  update qilayotgan vaqtimizga funcsiyaning parametrida data keladi, functionni chaqirganimizda o'sha datani kiritamiz ya'ni qaysi ma'lumotni o'zgartirayotganimiz  qaysi keyni o'zgartirmoqchimiz va qaysi qiymatga o'zgartirmoqchimiz shuni yozamiz

let students = [
  { id: 1, year: 2002, name: 'Iqboljon Yuldashev'},
  { id: 2, year: 2002, name: "Najmiddin Nazarov"},
  { id: 3, year: 2000, name: 'Asilbek Topilov'},
  { id: 4, year: 2002, name: 'Mominov Abdulloh'},
  { id: 5, year: 1995, name: 'Sardor Tursunboyev'},
  { id: 6, year: 2002, name: 'Hudoyberdiyeva Mohichehra'},
  { id: 7, year: 2002, name: 'Shukurov Shohruh'},
  ];

//   const updateUser = (data) => {
//     let res = students.map((value) => value.id === data.id ? {...value, [data.type]: data.value } : value
//     ); 
//     students = res;
//   };

//   updateUser({ id:2, type: "name", value: "Gulbashakar" });
//   updateUser({id:2, type: "year", value: 1999 });
//   console.log(students);


//   // CREAD - ADD USER

//   const addUser = (user) => {
//     students = [...students, {id: students.length + 1, ...user }];
//     console.log(user);
//   }

  // addUser({year: 2019, name: "webbrain"})


//   // READ - MA'LUMOTLARNI CONSOLEGA CHIQARISH BU READ

//   const sortByYear = () => {
//     let res = students.sort((a, b) => b.year - a.year)
//     students = res;
   
//   }
 
// sortByYear()

//   const sortByAlphabet = () => {
//     let res = students.sort((a, b) => a.name.localeCompare(b.name));
//     students = res;
//   };
//   sortByAlphabet()

// const getFilterByName = (key) => {
//   let res = students.filter((value) => value.name.toLowerCase().includes(key.toLowerCase())
//   );
//   students = res;
// };

// getFilterByName("Asilbek")

const getFilter = ({key, value}) => {
  let res = students.filter((usr) => `${usr[key]}`.toLowerCase().includes(`${value}`.toLowerCase()));
  students = res
}

//getFilter({value: 3, key: "id"})
getFilter({value: "Asilbek", key: "name"})
console.log(students);


//   // DELETE - MA'LUMOTNI O'CHIRIB YUBORISH. DELETE QILISH UCHUN filter() dan foydalaniladi.

  // const deleteUser = (id) => {
  //   let res = students.filter((value) => value.id !== id);
  //   students = res
  // }
  // deleteUser(4)

console.log(students);