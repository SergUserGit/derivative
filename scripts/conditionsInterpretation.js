const rez_Button = document.querySelector(".result-button");
const txtArea = document.querySelector(".area-rezult");
const txtAreaCond = document.querySelector(".area-conditions");

rez_Button.addEventListener("click", onClickBtn);

function getTotalStrCond(arrayValue) {
  let strTotal = "";

  for (let k = 0; k < arrayValue.length; k += 1) {
    strTotal = strTotal + getConditionInterp(arrayValue[k]) + "\n";
  }

  return strTotal;
}

function onClickBtn() {
  const valueArea = txtAreaCond.value.trim();
  const arrayValue = valueArea.split("\n");

  txtArea.textContent = getTotalStrCond(arrayValue);
}

function getConditionInterp(strCond) {
  const arrayStr = strCond.split(" ");

  let strKeyPlanet = "";
  let strKeyHouse = "";
  let strInterp = "";

  let isOneSimb = true;
  let isTwoSimb = true;

  for (let k = 0; k < arrayStr.length; k += 1) {
    const el = arrayStr[k];
    if (el === "-") {
      isOneSimb = false;
      continue;
    }
    if (el === "=") {
      isTwoSimb = false;
      continue;
    }
    if (isOneSimb === true) {
      strKeyPlanet = strKeyPlanet + el + " ";
    }
    if (isTwoSimb === true && isOneSimb === false) {
      strKeyHouse = strKeyHouse + el + " ";
    }

    if (isOneSimb === false && isTwoSimb === false) {
      strInterp = strInterp + el + " ";
    }
  }

  let strReturn =
    'if (keyOfPlanet === "' +
    strKeyPlanet.trim() +
    '"' +
    ' && keysOfHouse === "' +
    strKeyHouse.trim() +
    '"' +
    ") " +
    "{" +
    "\n" +
    'return "' +
    strInterp.trim() +
    '"' +
    ";" +
    "\n" +
    "}";

  return strReturn;
}
