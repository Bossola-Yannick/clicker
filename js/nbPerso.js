const upgradeNbPerso = () => {
  let valNbPerso = localStorage.getItem("nb-perso");
  let downFries = parseInt(localStorage.getItem("fries"));
  let persoPrice = parseInt(localStorage.getItem("perso-price"));

  let level = $("#upgradeNbPerso").attr("value");
  if (downFries >= persoPrice) {
    if (!localStorage.getItem("nb-perso")) {
      localStorage.setItem("nb-perso", "1");
    }
    switch (level) {
      case "1":
        downFries -= persoPrice;
        $("#add-nuggets-one").removeClass("nuggets-hidden");
        $("#upgradeNbPerso")
          .attr({ value: "2" })
          .removeClass("gray")
          .addClass("green");
        valNbPerso = "1";
        localStorage.setItem("nb-perso", valNbPerso);
        $("#level-nbPerso").text("1");
        persoPrice = 2500;
        localStorage.setItem("perso-price", persoPrice);
        $("#perso-price").text(persoPrice);
        break;
      case "2":
        downFries -= persoPrice;
        $("#add-nuggets-two").removeClass("nuggets-hidden");
        $("#upgradeNbPerso").attr({ value: "3" });
        valNbPerso = "2";
        localStorage.setItem("nb-perso", valNbPerso);
        $("#level-nbPerso").text("2");
        persoPrice = 6000;
        localStorage.setItem("perso-price", persoPrice);
        $("#perso-price").text(persoPrice);
        break;
      case "3":
        downFries -= persoPrice;
        $("#add-nuggets-tree").removeClass("nuggets-hidden");
        $("#upgradeNbPerso").attr({ value: "4" });
        valNbPerso = "3";
        localStorage.setItem("nb-perso", valNbPerso);
        $("#level-nbPerso").text("3");
        persoPrice = 17000;
        localStorage.setItem("perso-price", persoPrice);
        $("#perso-price").text(persoPrice);
        break;
      case "4":
        downFries -= persoPrice;
        $("#add-nuggets-for").removeClass("nuggets-hidden");
        $("#upgradeNbPerso")
          .attr({ value: "max" })
          .removeClass("green")
          .addClass("maxLevel");
        valNbPerso = "4";
        localStorage.setItem("nb-perso", valNbPerso);
        $("#level-nbPerso").text("max");
        persoPrice = 0;
        localStorage.setItem("perso-price", persoPrice);
        $("#perso-price").text("max level");
        break;
    }
    localStorage.setItem("fries", downFries);
    $("#fries").text(downFries);
  } else {
    $("#upgradeNbPerso").removeClass("green").addClass("maxLevel");
    setTimeout(() => {
      $("#upgradeNbPerso").removeClass("maxLevel").addClass("green");
    }, 500);
  }
};
