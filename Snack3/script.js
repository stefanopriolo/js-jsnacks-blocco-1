const usersRoom1 = [
  "Stefano",
  "Demetrio",
  "Alessio",
  "Bruna",
  "Valentina",
  "Giandomenica",
  "Domenico",
];
const usersRoom2 = ["Marika", "Giuseppe", "Totò", "Pippo"];

console.log(usersRoom1.length);
console.log(usersRoom2.length);

let differenza;
let piccolo;

if (usersRoom1.length > usersRoom2.length) {
  piccolo = usersRoom2;
  differenza = usersRoom1.length - usersRoom2.length;
} else {
  piccolo = usersRoom1;
  differenza = usersRoom2.length - usersRoom1.length;
}

for (let i = 0; i < differenza; i++) {
  piccolo.push("Nome");
}

console.log(usersRoom1.length);
console.log(usersRoom2.length);
console.log(usersRoom1);
console.log(usersRoom2);
