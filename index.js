// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

var a = 4;
a = a + 1;
const name = function (a) {
  console.log(a);
};

const name2 = (a) => {
  console.log(a);
};

//JS-object-rotation = JSON
console.log(name2(a));

const obj = {
  name: 'Patrik',
  role: 'student',
};

console.log(a);
console.log(`toto je muj vypis`);
console.log(`Hello Node.js v${a}!`);
