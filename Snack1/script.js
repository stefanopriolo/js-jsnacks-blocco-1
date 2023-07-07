const nameid = ["Stefano", "Demetrio", "Totò", "Simone", "Vittoria"];
const surname = ["Montalto", "Priolo", "Agostino", "Calabrò", "Foti"];

for (i = 0; i < 10; i++) {
  const guestList =
    nameid[Math.floor(Math.random() * nameid.length)] +
    " " +
    surname[Math.floor(Math.random() * surname.length)];
  console.log(guestList);
}
