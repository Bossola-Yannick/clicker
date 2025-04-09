// gestion des click générant des points
$("#click-box").on("click", function (e) {
  e.stopPropagation;
  addPoints();
});
// gestion du click
$("#upgradeLevelPoints").on("click", function () {
  upgradePerso();
});

// gestion du nombre de personnage
$("#upgradeNbPerso").on("click", function () {
  upgradeNbPerso();
});
