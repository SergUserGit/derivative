import {
  getKeysOfPlanets,
  getKeysOfHouses,
  getItnerpretation,
} from "./test_module.js";

const buttonAsp = document.querySelector(".tract_button");

const planetName = document.querySelector("#aspect-sun");
const houseName = document.querySelector("#number-house");

const infoLabel = document.querySelector(".information-fild");

buttonAsp.addEventListener("click", onClickBtnAsp);

function onClickBtnAsp() {
  let planetValue = planetName.options[planetName.value - 1].textContent;
  let houseValue = houseName.options[houseName.value - 1].textContent;

  const keysOfPlanet = getKeysOfPlanets();

  const keysOfHouses = getKeysOfHouses();

  const foundArray = keysOfPlanet.find(
    (element) => element.planet === planetValue
  );

  const foundArrayHouses = keysOfHouses.find(
    (element) => element.planet === houseValue
  );

  if (foundArray !== undefined && foundArrayHouses !== undefined) {
    const resultString = getResultString(
      foundArray.planetArray,
      foundArrayHouses.planetArray
    );
    infoLabel.textContent = resultString;
  }
}

function getResultString(planetArray, housesArray) {
  let resString = "";

  for (let i = 0; i < planetArray.length; i += 1) {
    for (let b = 0; b < housesArray.length; b += 1) {
      const strOne = planetArray[i];
      const strTwo = housesArray[b];

      const intert = getItnerpretation(strOne, strTwo);

      if (intert === "") {
        continue;
      }

      resString = resString + intert + "; ";
    }
  }

  return resString;
}
