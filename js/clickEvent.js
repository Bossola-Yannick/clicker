// Lancement du jeu
$("#start-game-button").on("click", function () {
  $("#start-game").remove();
  $("#reset-game-button").remove();
  $(this).remove();
  playMusik();
  startGame();
  setInterval(dmgTurret, 1000);
});
// Reset du jeu
$("#reset-game-button").on("click", function () {
  localStorage.clear();
  location.reload();
});
// gestion des click générant des points
$("body").on("click", ".potato", function (e) {
  e.stopPropagation();
  const splash = $("#splash").get(0);
  if (splash) {
    splash.currentTime = 0;
    splash.play();
  }
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
