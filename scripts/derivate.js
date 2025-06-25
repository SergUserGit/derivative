const culcButton = document.querySelector(".culc_deriv");
const derivate_input = document.querySelector(".derivate_input");
const parag_deriv = document.querySelector(".parag_deriv");

culcButton.addEventListener("click", onClickBtnDeriv);

function getDerivSimplePart(strFunc) {
  const koef = getKoef(strFunc);
  if (koef === "") {
    return "1";
  } else {
    return koef;
  }
}

function onClickBtnDeriv() {
  const func = derivate_input.value.trim();
  // const deriv = getDerivDegree(func);
  const deriv = getDerivSimplePart(func);
  parag_deriv.textContent = deriv;
}

function getDerivDegree(strFunc) {
  let numbCoef = 0;
  const curCoef = getKoef(strFunc);
  if (curCoef === "") {
    numbCoef = 1;
  } else {
    numbCoef = Number(curCoef);
  }
  let totalFunc = "";
  if (curCoef === "") {
    totalFunc = strFunc;
  } else {
    totalFunc = strFunc.replace(curCoef, "");
  }
  const objFunc = getObjDegr(totalFunc);
  const totalFormule = getTotalDegr(objFunc, numbCoef);
  return totalFormule;
}

function getTotalDegr(objFunc, numbCoef) {
  const totalKoef = objFunc.koef * numbCoef;
  let totalKoefStr = "";
  if (totalKoef === 1) {
    totalKoefStr = "";
  } else {
    totalKoefStr = String(totalKoef);
  }
  let totalFuncDegr = "";
  if (objFunc.newDegr === 1) {
    totalFuncDegr = "x";
  } else {
    totalFuncDegr = "x^" + String(objFunc.newDegr);
  }
  return totalKoefStr + totalFuncDegr;
}

function getObjDegr(totalFunc) {
  const simDegr = totalFunc.indexOf("^");
  const stepCur = totalFunc.substring(simDegr + 1);
  const numberStep = Number(stepCur);

  const totObj = {
    koef: numberStep,
    newDegr: numberStep - 1,
  };
  return totObj;
}

function getKoef(strFunc) {
  const firstSim = strFunc[0];
  if (
    firstSim !== "0" &&
    firstSim !== "1" &&
    firstSim !== "2" &&
    firstSim !== "3" &&
    firstSim !== "4" &&
    firstSim !== "5" &&
    firstSim !== "6" &&
    firstSim !== "7" &&
    firstSim !== "8" &&
    firstSim !== "9"
  ) {
    return "";
  } else {
    let curKoef = "";

    for (let i = 0; i < strFunc.length; i += 1) {
      const curSim = strFunc[i];
      if (
        curSim === "0" ||
        curSim === "1" ||
        curSim === "2" ||
        curSim === "3" ||
        curSim === "4" ||
        curSim === "5" ||
        curSim === "6" ||
        curSim === "7" ||
        curSim === "8" ||
        curSim === "9"
      ) {
        curKoef = curKoef + curSim;
      } else {
        break;
      }
    }

    return curKoef;
  }
}
