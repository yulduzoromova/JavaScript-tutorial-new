//========== GENERATOR FUNCTION ===========

// yield, return
function* getData() {
  yield 1;
  yield 2;
}

const generator = getData();   // bu alohida generator
const gr = getData()          // bu alohida generetor 

// console.log(generator.next());   // { value: 1, done: false }
// console.log(generator.next());   // { value: 2, done: false }
// console.log(generator.next());   // { value: 2, done: false }
// console.log(gr.next());          // { value: 1, done: false }

// for (vl of generator) {
//   console.log(vl);               // loop qilishining 1-sintaksisi
// }                                // 1, 2

console.log([...generator]);        // [ 1, 2 ]  2-usul array loop

let users = [
  {id:1, name: "Eshmat1"},
  {id:2, name: "Eshmat2"},
  {id:3, name: "Eshmat3"},
  {id:4, name: "Eshmat4"},
  {id:5, name: "Eshmat5"},
  {id:6, name: "Eshmat6"},
];

// const onDelete = (id) => {
//   let res = users.filter(vl=vl.id !== id);
//   users = res;
// };

// const add = (usr) => {
//   users = [...users, { id: users.length + 1, name: usr}];
// }

add("Gulbashakar");
console.log(users);

function* getData1() {
  let id = user.length
  while (true) {
    yield ++id
  }
}

const generator1 = getData1()

let user = [
  {id:1, name: "Eshmat1"},
  {id:2, name: "Eshmat2"},
  {id:3, name: "Eshmat3"},
  {id:4, name: "Eshmat4"},
  {id:5, name: "Eshmat5"},
  {id:6, name: "Eshmat6"},
];

const onDelete = (id) => {
  let res = user.filter((vl) => vl.id !== id);
  users = res;
};

const add = (usr) => {
  user = [...user, { id: generator1.next().value, name: usr}];
}

add("Gulbashakar1");
onDelete(3);
add("Gulbashakar2")
add("Gulbashakar3")

console.log(user);