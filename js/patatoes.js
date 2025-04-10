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

// const chargePotato = () => {
//   let goPotato = Math.random() * (5 - 1) + 1;
//   for (let i = 0; i < goPotato; i++) {
//     potatoMaker();
//   }
// };

setInterval(potatoMaker, 700);
