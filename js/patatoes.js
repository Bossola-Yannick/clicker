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
  let xPotato = Math.ceil(Math.random() * (3 - 1) + 1);
  for (let i = 0; i < xPotato; i++) {
    myFunction();
  }
};

// Lancement du jeu lors de l'apuis sur START GAME
const startGame = () => {
  setInterval(() => multiPotato(potatoMaker), 500);
};
