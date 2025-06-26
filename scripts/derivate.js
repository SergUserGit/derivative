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
  const deriv = getPartsDeriv(func);
  parag_deriv.textContent = deriv;
}

function getPartsDeriv(strFunc) {
  let arraySign = [];
  for (let i = 0; i < strFunc.length; i += 1) {
    const curSim = strFunc[i];
    if (curSim === "+" || curSim === "-") {
      arraySign.push(curSim);
    }
  }

  const strOne = strFunc.trim();
  const strTwo = strOne.replaceAll(" ", "");
  const strThree = strTwo.replaceAll("-", "+");
  const arrayZn = strThree.split("+");
  const firstElem = arrayZn[0];
  if (firstElem === "") {
    arrayZn.splice(0, 1);
  }

  const arrayPart = getArrayPartDerive(arraySign, arrayZn);
  const totalArray = getArrayPartTotalDerive(arrayPart);

  return getStrOfDerive(totalArray);
}

function getStrOfDerive(totalArray) {
  let totalStr = "";

  for (let i = 0; i < totalArray.length; i += 1) {
    const curElem = totalArray[i];
    if (curElem.totPart === "") {
      totalStr = totalStr + "";
    } else {
      if (i === 0) {
        if (curElem.curZn === "+") {
          totalStr = totalStr + curElem.totPart;
        } else {
          totalStr = totalStr + curElem.curZn + curElem.totPart;
        }
      } else {
        totalStr = totalStr + curElem.curZn + curElem.totPart;
      }
    }
  }

  return totalStr;
}

function getArrayPartTotalDerive(arrayPart) {
  let totArray = [];
  for (let i = 0; i < arrayPart.length; i += 1) {
    const curElem = arrayPart[i];
    let curZn = curElem.sign;
    let totPart = "";

    const curPart = curElem.part;
    const findx = curPart.indexOf("x");
    if (findx !== -1) {
      const findStep = curPart.indexOf("x^");
      if (findStep === -1) {
        totPart = getDerivSimplePart(curPart);
      } else {
        totPart = getDerivDegree(curPart);
      }
    } else {
      totPart = "";
    }

    totArray.push({
      curZn,
      totPart,
    });
  }
  return totArray;
}

function getArrayPartDerive(arraySign, arrayZn) {
  let totArray = [];

  if (arraySign.length !== arrayZn.length) {
    const objOne = {
      sign: "+",
      part: arrayZn[0],
    };
    totArray.push(objOne);
    for (let k = 1; k < arrayZn.length; k += 1) {
      const objOne = {
        sign: arraySign[k - 1],
        part: arrayZn[k],
      };
      totArray.push(objOne);
    }
  } else {
    for (let k = 0; k < arrayZn.length; k += 1) {
      const objOne = {
        sign: arraySign[k],
        part: arrayZn[k],
      };
      totArray.push(objOne);
    }
  }

  return totArray;
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
