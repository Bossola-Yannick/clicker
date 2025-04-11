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

// gestion du nombre de personnage
let nbPersoLevel = parseInt(localStorage.getItem("nb-perso"));
$("#upgradeNbPerso").on("click", function () {
  if (nbPersoLevel !== 4) {
    upgradeNbPerso();
  }
});
