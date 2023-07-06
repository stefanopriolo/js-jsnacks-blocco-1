const nameid = ["Stefano", "Demetrio", "Totò", "Simone", "Vittoria"];
const surname = ["Montalto", "Priolo", "Agostino", "Calabrò", "Foti"];

console.log(
  nameid[Math.floor(Math.random() * nameid.length)] +
    " " +
    surname[Math.floor(Math.random() * surname.length)]
);
