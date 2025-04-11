const potatoMaker = () => {
  const potato = $("<span></span>").addClass("potato");
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
const startGame = () => {
  potatoMaker();
  setInterval(potatoMaker, 700);
};
