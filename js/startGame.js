// initilisation du jeu
let fries;
let levelPerso;
let levelPrice;
let persoPrice;
let valNbPerso = localStorage.getItem("nb-perso");
let level;
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
      $("#upgradeNbPerso")
        .attr({ value: "max" })
        .removeClass("green")
        .addClass("maxLevel");
      $("#level-nbPerso").text("max");
      $("#perso-price").text("max level");
      break;

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
if (!localStorage.getItem("level-price")) {
  localStorage.setItem("level-price", 5);
  levelPrice = localStorage.getItem("level-price");
} else {
  levelPrice = localStorage.getItem("level-price");
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
// initialisation level du joueur
if (!localStorage.getItem("level")) {
  localStorage.setItem("level", 1);
  level = parseInt(localStorage.getItem("level"));
} else {
  level = parseInt(localStorage.getItem("level"));
}
$("#level-points").text(level);
// initialisation tourrelles
if (!localStorage.getItem("ketchup")) {
  const ketchup = {
    level: 0,
    baseCost: 10,
    cost: 10,
    costX: 1.2,
    baseDamage: 1,
    damage: 1,
    damageX: 1,
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
    baseCost: 50,
    cost: 50,
    costX: 1.17,
    baseDamage: 1.5,
    damage: 1.5,
    damageX: 1.05,
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
    baseCost: 200,
    cost: 200,
    costX: 1.13,
    baseDamage: 2.5,
    damage: 2.5,
    damageX: 1.12,
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

// musik
const playMusik = () => {
  const musik = $("#musik").get(0);
  if (musik) {
    musik.currentTime = 0;
    musik.play();
  }
};
