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

// initialisation tourrelles
if (!localStorage.getItem("ketchup")) {
  const ketchup = {
    level: 0,
    cost: 100,
    damage: 0,
  };
  localStorage.setItem("ketchup", JSON.stringify(ketchup));
} else {
  ketchup = JSON.parse(localStorage.getItem("ketchup"));
  if (ketchup.level > 0) {
    const turretBottle = document.getElementById("bottle-ketchup");
    turretBottle.style.visibility = "visible";
    const button = document.getElementById("ketchup");
    button.classList.add("green");
    button.classList.remove("gray");
  }
}

if (!localStorage.getItem("mayo")) {
  const mayo = {
    level: 0,
    cost: 500,
    damage: 0,
  };
  localStorage.setItem("mayo", JSON.stringify(mayo));
} else {
  mayo = JSON.parse(localStorage.getItem("mayo"));
  if (mayo.level > 0) {
    const turretBottle = document.getElementById("bottle-mayo");
    turretBottle.style.visibility = "visible";
    const button = document.getElementById("mayo");
    button.classList.add("green");
    button.classList.remove("gray");
  }
}

if (!localStorage.getItem("bbq")) {
  const bbq = {
    level: 0,
    cost: 1000,
    damage: 0,
  };
  localStorage.setItem("bbq", JSON.stringify(bbq));
} else {
  bbq = JSON.parse(localStorage.getItem("bbq"));

  if (bbq.level > 0) {
    const turretBottle = document.getElementById("bottle-bbq");
    turretBottle.style.visibility = "visible";
    const button = document.getElementById("bbq");
    button.classList.add("green");
    button.classList.remove("gray");
  }
}
