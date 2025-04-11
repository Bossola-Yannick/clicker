ketchup = JSON.parse(localStorage.getItem("ketchup"));
mayo = JSON.parse(localStorage.getItem("mayo"));
bbq = JSON.parse(localStorage.getItem("bbq"));

// Element level
const ketchupLevel = document.getElementById("level-ketchup");
ketchupLevel.innerText = ketchup.level;
const mayoLevel = document.getElementById("level-mayo");
mayoLevel.innerText = mayo.level;
const bbqLevel = document.getElementById("level-bbq");
bbqLevel.innerText = bbq.level;
// Element prix
const ketchupCost = document.getElementById("cost-ketchup");
ketchupCost.innerText = ketchup.cost;
const mayoCost = document.getElementById("cost-mayo");
mayoCost.innerText = mayo.cost;
const bbqCost = document.getElementById("cost-bbq");
bbqCost.innerText = bbq.cost;
// Score élement
const friesBox = document.getElementById("fries");

// Calcul des prix et des degats
const getCost = (turret) => {
  return Math.floor(turret.baseCost * Math.pow(turret.costX, turret.level));
};

const getDPS = (turret) => {
  return Math.floor(
    +(turret.baseDamage * Math.pow(turret.level, turret.damageX)).toFixed(2)
  );
};

// **************************
// ACHAT NIVEAU
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
    // modification sur localStorage
    turret.level += 1;
    turret.cost = getCost(turret);
    turret.damage = getDPS(turret);
    localStorage.setItem(turretName, JSON.stringify(turret));
    // modification sur l'affichage
    turretLevel.innerText = turret.level;
    turretCost.innerText = turret.cost;
    console.log(score);

    if (turret.level === 1) {
      const turretBottle = document.getElementById(`bottle-${turretName}`);
      turretBottle.style.visibility = "visible";
    }
  } else {
    button.classList.add("maxLevel");
    setTimeout(() => {
      button.classList.remove("maxLevel");
    }, 100);
  }
};

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
      turretSound();
      splashKet.style.visibility = "hidden";
    }, 50);
  }
  if (mayo.level > 0) {
    friesUpdate += mayo.damage;
    setTimeout(() => {
      turretSound();
      splashMay.style.visibility = "visible";
      setTimeout(() => {
        splashMay.style.visibility = "hidden";
      }, 70);
    }, 100);
  }
  if (bbq.level > 0) {
    friesUpdate += bbq.damage;
    setTimeout(() => {
      turretSound();
      splashBbq.style.visibility = "visible";
      setTimeout(() => {
        splashBbq.style.visibility = "hidden";
      }, 100);
    }, 150);
  }

  localStorage.setItem("fries", friesUpdate);
  friesBox.innerText = friesUpdate;
};

const turretSound = () => {
  const turretSound = $("#turretSound").get(0);
  if (turretSound) {
    turretSound.currentTime = 0;
    turretSound.play();
  }
};
