import {
  getKeysOfPlanets,
  getKeysOfHouses,
  getItnerpretation,
} from "./test_module.js";

const aspButton = document.querySelector(".aspet-button");

aspButton.addEventListener("click", onClickButtonAspect);

function onClickButtonAspect() {
  const planetValue = "Венера";
  const houseValue = "12";

  const keysOfPlanet = getKeysOfPlanets();

  const keysOfHouses = getKeysOfHouses();

  const foundArray = keysOfPlanet.find(
    (element) => element.planet === planetValue
  );

  const foundArrayHouses = keysOfHouses.find(
    (element) => element.planet === houseValue
  );

  if (foundArray !== undefined && foundArrayHouses !== undefined) {
    const arrayOfInterpCurrent = arrayOfInterp(
      foundArray.planetArray,
      foundArrayHouses.planetArray
    );

    console.log(arrayOfInterpCurrent);
  }
}

function arrayOfInterp(planetArray, housesArray) {
  let curArray = [];

  for (let i = 0; i < planetArray.length; i += 1) {
    for (let b = 0; b < housesArray.length; b += 1) {
      const strOne = planetArray[i];
      const strTwo = housesArray[b];

      const intert = getItnerpretation(strOne, strTwo);

      if (intert === "") {
        continue;
      }

      curArray.push(intert);
    }
  }

  return curArray;
}
