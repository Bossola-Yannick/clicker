// tourelles
const ketchup = {
  level: 0,
  cost: 100,
  damage: 0,
};
const mayo = {
  level: 0,
  cost: 500,
  damage: 0,
};
const bbq = {
  level: 0,
  cost: 1000,
  damage: 0,
};

localStorage.setItem("ketchup", JSON.stringify(ketchup));
localStorage.setItem("mayo", JSON.stringify(mayo));
localStorage.setItem("bbq", JSON.stringify(bbq));

// Element boutons
const turretKetchup = document.getElementById("ketchup");
const turretMayo = document.getElementById("mayo");
const turretBbq = document.getElementById("bbq");
// score element
const friesBox = document.getElementById("fries");

// **************************
// ACHAT LEVEL UP
// **************************
const buyTurret = (turret, score, turretName) => {
  const turretLevel = document.getElementById(`level-${turretName}`);
  const turretCost = document.getElementById(`cost-${turretName}`);
  const button = document.getElementById(turretName);

  if (score >= turret.cost) {
    score -= turret.cost;
    localStorage.setItem("fries", score);
    friesBox.innerText = score;
    button.classList.remove("gray");
    button.classList.add("green");
    // modif localStorage
    turret.level += 1;
    turret.cost *= 2;
    turret.damage += 3;
    localStorage.setItem(turretName, JSON.stringify(turret));
    // modif affichage
    turretLevel.innerText = turret.level;
    turretCost.innerText = turret.cost;
    console.log(score);

    if (turret.level === 1) {
      const turretBottle = document.getElementById(`bottle-${turretName}`);
      turretBottle.style.visibility = "visible";
    }
  } else {
    console.log(score, " pas assez de frites");
  }
};

turretKetchup.addEventListener("click", () => {
  fries = parseInt(localStorage.getItem("fries"));
  const value = turretKetchup.getAttribute("value");
  buyTurret(ketchup, fries, value);
});
turretMayo.addEventListener("click", () => {
  fries = parseInt(localStorage.getItem("fries"));
  const value = turretMayo.getAttribute("value");
  buyTurret(mayo, fries, value);
});
turretBbq.addEventListener("click", () => {
  fries = parseInt(localStorage.getItem("fries"));
  const value = turretBbq.getAttribute("value");
  buyTurret(bbq, fries, value);
});

// **************************
// DEGATS TOURELLES
// **************************
const dmgTurret = () => {
  // local storage info
  let friesUpdate = parseInt(localStorage.getItem("fries"));
  const ketchup = JSON.parse(localStorage.getItem("ketchup"));
  const mayo = JSON.parse(localStorage.getItem("mayo"));
  const bbq = JSON.parse(localStorage.getItem("bbq"));
  // splash elements
  const splashKet = document.getElementById("splash-ketchup");
  const splashMay = document.getElementById("splash-mayo");
  const splashBbq = document.getElementById("splash-bbq");

  if (ketchup.level > 0) {
    friesUpdate += ketchup.damage;
    splashKet.style.visibility = "visible";
    setTimeout(() => {
      splashKet.style.visibility = "hidden";
    }, 50);
  }
  if (mayo.level > 0) {
    friesUpdate += mayo.damage;
    setTimeout(() => {
      splashMay.style.visibility = "visible";
      setTimeout(() => {
        splashMay.style.visibility = "hidden";
      }, 70);
    }, 100);
  }
  if (bbq.level > 0) {
    friesUpdate += bbq.damage;
    setTimeout(() => {
      splashBbq.style.visibility = "visible";
      setTimeout(() => {
        splashBbq.style.visibility = "hidden";
      }, 100);
    }, 150);
  }

  localStorage.setItem("fries", friesUpdate);
  friesBox.innerText = friesUpdate;
};

setInterval(dmgTurret, 1000);
