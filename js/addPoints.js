const addPoints = () => {
  levelPoints = parseInt(localStorage.getItem("level-perso"));
  persoBonus = Math.ceil(parseInt(localStorage.getItem("nb-perso")));
  switch (persoBonus) {
    case 1:
      levelPoints = Math.floor(levelPoints + 1.5);
      break;
    case 2:
      levelPoints = levelPoints * 2;
      break;
    case 3:
      levelPoints = Math.floor(levelPoints * 3.5);
      break;
    case 4:
      levelPoints = levelPoints * 4;
  }
  fries = parseInt(localStorage.getItem("fries"));
  totalFries = parseInt(localStorage.getItem("totalFries"));
  fries += levelPoints;
  totalFries += levelPoints;
  localStorage.setItem("fries", fries);
  localStorage.setItem("totalFries", totalFries);
  $("#fries").text(fries);
};
