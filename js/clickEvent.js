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
console.log(nbPersoLevel);

// gestion du nombre de personnage
$("#upgradeNbPerso").on("click", function () {
  if (nbPersoLevel !== 4) {
    upgradeNbPerso();
  }
});
