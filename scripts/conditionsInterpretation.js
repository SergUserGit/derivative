const rez_Button = document.querySelector(".result-button");
const txtArea = document.querySelector(".area-rezult");

rez_Button.addEventListener("click", onClickBtn);

function onClickBtn() {
  const strCond =
    "Життєві сили - Брати/сестри = Людина отримує життєві сили від братів та сестер";
  const interp = getConditionInterp(strCond);
  txtArea.textContent = interp;
}

function getConditionInterp(strCond) {
  const arrayStr = strCond.split(" ");

  console.log(arrayStr);

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
