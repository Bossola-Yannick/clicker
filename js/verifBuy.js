const verifyBuy = () => {
  let totalFries = parseInt(localStorage.getItem("fries"));
  let levelPrice = parseInt(localStorage.getItem("level-price"));
  let persoPrice = parseInt(localStorage.getItem("perso-price"));
  let ketchup = JSON.parse(localStorage.getItem("ketchup"));
  let mayo = JSON.parse(localStorage.getItem("mayo"));
  let bbq = JSON.parse(localStorage.getItem("bbq"));

  if (totalFries >= levelPrice) {
    $("#upgradeLevelPoints").removeClass("gray ").addClass("yellow");
  } else $("#upgradeLevelPoints").removeClass("yellow").addClass("gray");
  if (totalFries >= persoPrice) {
    $("#upgradeNbPerso").removeClass("gray").addClass("yellow");
  } else $("#upgradeNbPerso").removeClass("yellow").addClass("gray");

  if (totalFries >= ketchup.cost) {
    $("#ketchup").removeClass("gray").addClass("yellow");
  } else $("#ketchup").removeClass("yellow").addClass("gray");

  if (totalFries >= mayo.cost) {
    $("#mayo").removeClass("gray").addClass("yellow");
  } else $("#mayo").removeClass("yellow").addClass("gray");

  if (totalFries >= bbq.cost) {
    $("#bbq").removeClass("gray").addClass("yellow");
  } else $("#bbq").removeClass("yellow").addClass("gray");
};

setInterval(verifyBuy, 500);
