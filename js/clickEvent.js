// gestion des click générant des points
$("body").on("click", ".potato", function (e) {
  e.stopPropagation;
  $(this).remove();
  addPoints();
});
// gestion du click
$("#upgradeLevelPoints").on("click", function () {
  upgradePerso();
});
let nbPersoLevel = parseInt(localStorage.getItem("nb-perso"));

// gestion du nombre de personnage
$("#upgradeNbPerso").on("click", function () {
  if (nbPersoLevel !== 4) {
    upgradeNbPerso();
  }
});

// Element boutons
const turretKetchup = document.getElementById("ketchup");
const turretMayo = document.getElementById("mayo");
const turretBbq = document.getElementById("bbq");

turretKetchup.addEventListener("click", () => {
  fries = parseInt(localStorage.getItem("fries"));
  const value = turretKetchup.getAttribute("value");
  buyTurret(ketchup, fries, value);
});
turretMayo.addEventListener("click", () => {
  fries = parseInt(localStorage.getItem("fries"));
  const value = turretMayo.getAttribute("value");
  buyTurret(mayo, fries, value);
});
turretBbq.addEventListener("click", () => {
  fries = parseInt(localStorage.getItem("fries"));
  const value = turretBbq.getAttribute("value");
  buyTurret(bbq, fries, value);
});
