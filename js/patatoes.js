const ketchup = JSON.parse(localStorage.getItem("ketchup"));
const mayo = JSON.parse(localStorage.getItem("mayo"));
const bbq = JSON.parse(localStorage.getItem("bbq"));

const potatoMaker = () => {
  totalFries = parseInt(localStorage.getItem("totalFries"));
  const potato = $("<span></span>").addClass("potato");
  if (totalFries >= 50000) {
    $(".potato").addClass("potato-level-2");
  } else if (totalFries >= 5000) {
    $(".potato").addClass("potato-level-1");
  }
  const potatoImg = $("<img/>")
    .attr({ src: "../assets/img/icon-fav.png" })
    .addClass("potato-image");
  potato.append(potatoImg);
  $("#click-box").append(potato);
  let imgTop = Math.random() * 100 + 80 + "%";
  let imgLeft = Math.random() * 85 + "%";
  potato.css("top", imgTop);
  potato.css("left", imgLeft);
};

// fonction qui permet de lancer plusieur patate à la foi
const multiPotato = (myFunction) => {
  if (ketchup.level >= 1 && mayo.level >= 1 && bbq.level >= 1) {
    let xPotato = Math.floor(Math.random() * (9 - 4 + 1)) + 4;
    for (let i = 0; i < xPotato; i++) {
      myFunction();
    }
  } else if (
    (ketchup.level >= 1 && mayo.level >= 1) ||
    (ketchup.level >= 1 && bbq.level >= 1) ||
    (mayo.level >= 1 && bbq.level >= 1)
  ) {
    let xPotato = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
    for (let i = 0; i < xPotato; i++) {
      myFunction();
    }
  } else if (ketchup.level >= 1 || mayo.level >= 1 || bbq.level >= 1) {
    let xPotato = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    for (let i = 0; i < xPotato; i++) {
      myFunction();
    }
  } else {
    potatoMaker();
  }
};

// Lancement du jeu lors de l'apuis sur START GAME
const startGame = () => {
  setInterval(() => multiPotato(potatoMaker), 1000);
};
