const upgradePerso = () => {
  let downFries = parseInt(localStorage.getItem("fries"));
  let pointsLevelPrice = parseInt(localStorage.getItem("level-price"));
  let levelPerso = parseInt(localStorage.getItem("level-perso"));
  if (downFries >= pointsLevelPrice) {
    downFries -= pointsLevelPrice;
    localStorage.setItem("fries", downFries);
    $("#fries").text(downFries);
    levelPerso += Math.ceil(levelPerso / 3);
    localStorage.setItem("level-perso", levelPerso);
    pointsLevelPrice = Math.ceil(levelPerso * 10) * 2;
    localStorage.setItem("level-price", pointsLevelPrice);
    level += 1;
    localStorage.setItem("level", level);
    $("#level-price").text(pointsLevelPrice);
    $("#level-points").text(level);
  } else {
    $("#upgradeLevelPoints").removeClass("green").addClass("maxLevel");
    setTimeout(() => {
      $("#upgradeLevelPoints").removeClass("maxLevel").addClass("green");
    }, 1000);
  }
};
