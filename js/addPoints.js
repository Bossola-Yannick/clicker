const addPoints = () => {
  levelPoints = parseInt(localStorage.getItem("level-perso"));
  persoBonus = Math.ceil(parseInt(localStorage.getItem("nb-perso")));
  switch (persoBonus) {
    case 1:
      levelPoints = levelPoints + Math.ceil(levelPoints / 2);
      break;
    case 2:
      levelPoints = levelPoints * 2;
      break;
    case 3:
      levelPoints = levelPoints * 2 + Math.ceil(levelPoints / 2);
      break;
    case 4:
      levelPoints = levelPoints * 3;
  }
  fries = parseInt(localStorage.getItem("fries"));
  fries += levelPoints;
  localStorage.setItem("fries", fries);
  $("#fries").text(fries);
};
