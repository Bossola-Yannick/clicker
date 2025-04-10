// initilisation du jeu
let fries;
let levelPerso;
let levelPrice;
let persoPrice;
let valNbPerso = localStorage.getItem("nb-perso");
// récupération des données de jeu si elle existe
if (localStorage.getItem("nb-perso")) {
  $("#upgradeNbPerso")
    .removeClass("gray")
    .addClass("green")
    .attr({ value: valNbPerso });
  $("#level-nbPerso").text(localStorage.getItem("nb-perso"));
  let nbPerso = parseInt(localStorage.getItem("nb-perso"));
  switch (nbPerso) {
    case 1:
      $("#add-nuggets-one").removeClass("nuggets-hidden");
      break;
    case 2:
      $("#add-nuggets-one").removeClass("nuggets-hidden");
      $("#add-nuggets-two").removeClass("nuggets-hidden");
      break;
    case 3:
      $("#add-nuggets-one").removeClass("nuggets-hidden");
      $("#add-nuggets-two").removeClass("nuggets-hidden");
      $("#add-nuggets-tree").removeClass("nuggets-hidden");
      break;
    case 4:
      $("#add-nuggets-one").removeClass("nuggets-hidden");
      $("#add-nuggets-two").removeClass("nuggets-hidden");
      $("#add-nuggets-tree").removeClass("nuggets-hidden");
      $("#add-nuggets-for").removeClass("nuggets-hidden");
      break;
  }
}

// initilisation fries
if (!localStorage.getItem("fries")) {
  localStorage.setItem("fries", 0);
  fries = localStorage.getItem("fries");
} else {
  fries = localStorage.getItem("fries");
  // $("#frites").text(fries);
}
$("#fries").text(fries);

// initialisation perso
if (!localStorage.getItem("level-perso")) {
  localStorage.setItem("level-perso", 1);
  levelPerso = localStorage.getItem("level-perso");
} else {
  levelPerso = localStorage.getItem("level-perso");
}
$("#level-points").text(levelPerso);

// initialisation valeur des levels perso
if (!localStorage.getItem("points-level")) {
  localStorage.setItem("points-level", 5);
  levelPrice = localStorage.getItem("points-level");
} else {
  levelPrice = localStorage.getItem("points-level");
}
$("#level-price").text(levelPrice);

// initialisation valeur des nouveaux perso
if (!localStorage.getItem("perso-price")) {
  localStorage.setItem("perso-price", 1000);
  persoPrice = localStorage.getItem("perso-price");
} else {
  persoPrice = localStorage.getItem("perso-price");
}
$("#perso-price").text(persoPrice);
