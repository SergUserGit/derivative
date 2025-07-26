const buttonAsp = document.querySelector(".tract_button");

const planetName = document.querySelector("#aspect-sun");
const houseName = document.querySelector("#number-house");

buttonAsp.addEventListener("click", onClickBtnAsp);

function onClickBtnAsp() {
  let planetValue = planetName.options[planetName.value - 1].textContent;
  let houseValue = houseName.options[houseName.value - 1].textContent;
  alert(planetValue + " - " + houseValue);
}
