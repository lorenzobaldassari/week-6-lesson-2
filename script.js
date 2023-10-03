const saldi = document.getElementById("SALDI");

const welcomeSummer = document.getElementById("WELCOMESUMMER");

const hide = function (e) {
  if (saldi.style.display === "") {
    saldi.style.display = "none";
  } else {
    saldi.style.display = "";
  }
  console.log(saldi.style);
};
const hide2 = function (e) {
  if (welcomeSummer.style.display === "") {
    welcomeSummer.style.display = "none";
  } else {
    welcomeSummer.style.display = "";
  }
  console.log(welcomeSummer.style);
};
