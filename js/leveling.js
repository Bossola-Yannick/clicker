const leveling = () => {
  if (totalFries >= 500000) {
    $(".big-nugget").attr({ src: "../assets/img/nuggetsRambo-lvl2.png" });
  }
  if (totalFries >= 5000000) {
    $(".big-nugget").attr({ src: "../assets/img/nuggetsRambo-lvl3.png" });
  }
  if (totalFries >= 50000000) {
    $(".big-nugget").attr({ src: "../assets/img/nuggetsRambo-lvl4.png" });
  }
};
leveling();
