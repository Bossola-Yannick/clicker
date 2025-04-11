const upgradePerso = () => {
  let downFries = parseInt(localStorage.getItem("fries"));
  let pointsLevelPrice = parseInt(localStorage.getItem("level-price"));
  let levelPerso = parseInt(localStorage.getItem("level-perso"));
  if (downFries >= pointsLevelPrice) {
    downFries -= pointsLevelPrice;
    localStorage.setItem("fries", downFries);
    $("#fries").text(downFries);
    levelPerso += Math.ceil(levelPerso / 10);
    console.log(levelPerso);

    localStorage.setItem("level-perso", levelPerso);
    if (pointsLevelPrice < 100000) {
      pointsLevelPrice = Math.ceil(levelPerso * 10) * 2;
    } else if (pointsLevelPrice < 1000000) {
      pointsLevelPrice = Math.ceil(levelPerso * 10) * 4;
    } else if (pointsLevelPrice < 10000000) {
      pointsLevelPrice = Math.ceil(levelPerso * 10) * 6;
    } else if (pointsLevelPrice < 100000000) {
      pointsLevelPrice = Math.ceil(levelPerso * 10) * 10;
    } else {
      pointsLevelPrice = Math.ceil(levelPerso * 10) * 50;
    }
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
