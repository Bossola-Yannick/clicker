const upgradePerso = () => {
  let downFries = parseInt(localStorage.getItem("fries"));
  let pointsLevel = parseInt(localStorage.getItem("points-level"));
  let levelPerso = parseInt(localStorage.getItem("level-perso"));
  if (downFries >= pointsLevel) {
    downFries -= pointsLevel;
    localStorage.setItem("fries", downFries);
    $("#fries").text(downFries);
    levelPerso += 1;
    localStorage.setItem("level-perso", levelPerso);
    $("#level-points").text(levelPerso);
    pointsLevel = Math.ceil(pointsLevel * 1.2);
    localStorage.setItem("points-level", pointsLevel);
    $("#level-price").text(pointsLevel);
  } else {
    $("#upgradeLevelPoints").removeClass("green").addClass("maxLevel");
    setTimeout(() => {
      $("#upgradeLevelPoints").removeClass("maxLevel").addClass("green");
    }, 1000);
  }
};
