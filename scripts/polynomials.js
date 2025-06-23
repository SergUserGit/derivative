const myButton = document.querySelector(".calc_poly");
const myParagh = document.querySelector(".total_poly");

myButton.addEventListener("click", onClickMyButton);

function getObjSum(elOne, elTwo) {
  let znak = "";
  if (elOne.zn === "+" && elTwo.zn === "+") {
    znak = "+";
  } else if (elOne.zn === "+" && elTwo.zn === "-") {
    znak = "-";
  } else if (elOne.zn === "-" && elTwo.zn === "+") {
    znak = "-";
  } else {
    znak = "+";
  }
  let koef = elOne.koef * elTwo.koef;
  let step = elOne.step + elTwo.step;

  const totalObj = {
    koef: koef,
    step: step,
    zn: znak,
  };
  return totalObj;
}

function getTotalArrayPol(arrayOne, arrayTwo) {
  let arrayTotal = [];
  for (let a = 0; a < arrayOne.length; a += 1) {
    for (let b = 0; b < arrayTwo.length; b += 1) {
      const elOne = arrayOne[a];
      const elTwo = arrayTwo[b];
      arrayTotal.push(getObjSum(elOne, elTwo));
    }
  }

  return arrayTotal;
}

function getPartPol(strFunction) {
  let arraySign = [];
  for (let i = 0; i < strFunction.length; i += 1) {
    const curSim = strFunction[i];
    if (curSim === "+" || curSim === "-") {
      arraySign.push(curSim);
    }
  }

  const strOne = strFunction.trim();
  const strTwo = strOne.replaceAll(" ", "");
  const strThree = strTwo.replaceAll("-", "+");
  const arrayZn = strThree.split("+");
  const firstElem = arrayZn[0];
  if (firstElem === "") {
    arrayZn.splice(0, 1);
  }

  const arrayPart = getArrayPart(arraySign, arrayZn);

  const arrayPol = getArrayPolPart(arrayPart);

  return arrayPol;
}

function getArrayPolPart(arrayPart) {
  let totalArray = [];

  for (let i = 0; i < arrayPart.length; i += 1) {
    const curElem = arrayPart[i];
    totalArray.push(getPolPart(curElem));
  }

  return totalArray;
}

function getPolPart(curElem) {
  const zn = curElem.sign;
  let step = 0;
  let koef = 0;
  const curPart = curElem.part;
  const xFinded = curPart.indexOf("x");
  if (xFinded === -1) {
    step = 0;
  } else {
    const checkSim = curPart[xFinded + 1];
    if (checkSim !== "^") {
      step = 1;
    } else {
      let strStep = "";
      const fistIndex = xFinded + 2;
      for (let i = fistIndex; i < curPart.length; i += 1) {
        strStep = strStep + curPart[i];
      }
      step = Number(strStep);
    }
  }

  const firstSim = curPart[0];
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
    koef = 1;
  } else {
    let strKoef = "";
    for (let i = 0; i < curPart.length; i += 1) {
      const curSim = curPart[i];
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
        strKoef = strKoef + curSim;
      } else {
        break;
      }
    }
    koef = Number(strKoef);
  }

  const totalObj = {
    koef: koef,
    step: step,
    zn: zn,
  };

  return totalObj;
}

function getArrayPart(arraySign, arrayZn) {
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

function onClickMyButton() {
  const pol_one = "x - 3";
  const pol_two = "x - 2";

  const arrayOne = getPartPol(pol_one);
  const arrayTwo = getPartPol(pol_two);

  const totalArray = getTotalArrayPol(arrayOne, arrayTwo);

  const arrayOfStep = getArrayOfStep(totalArray);

  const arrayPoly = getArrayPoly(totalArray, arrayOfStep);

  const arrayForRender = getArrayForRender(arrayPoly);

  const strForRender = getTotalStr(arrayForRender);

  myParagh.textContent = strForRender;
}

function getTotalStr(arrayForRender) {
  let totalStr = "";

  for (let i = 0; i < arrayForRender.length; i += 1) {
    totalStr = totalStr + arrayForRender[i];
  }

  return totalStr;
}

function getArrayForRender(arrayPoly) {
  let totArray = [];
  for (let i = 0; i < arrayPoly.length; i += 1) {
    const curElem = arrayPoly[i];
    totArray.push(getTotalPart(curElem, i));
  }
  return totArray;
}

function getTotalPart(elOfArray, curIndex) {
  let koefStr = "";
  let stepStr = "";

  let strKof = "";
  if (elOfArray.sunKoef === 1) {
    strKof = "";
  } else {
    strKof = String(elOfArray.sunKoef);
  }

  if (curIndex === 0) {
    koefStr = strKof;
  } else {
    if (elOfArray.sunKoef > 0) {
      koefStr = "+" + strKof;
    } else {
      koefStr = strKof;
    }
  }

  let curStep = elOfArray.curStep;

  if (curStep > 1) {
    stepStr = "x^" + String(curStep);
  } else if (curStep === 1) {
    stepStr = "x";
  } else {
    stepStr = "";
  }
  return koefStr + stepStr;
}

function getArrayPoly(totalArray, arrayOfStep) {
  let arrayPoly = [];
  for (let i = 0; i < arrayOfStep.length; i += 1) {
    const curStep = arrayOfStep[i];
    const filterStep = totalArray.filter((pol) => pol.step === curStep);
    const obPoly = getSumOfKoef(filterStep, curStep);
    if (obPoly.koef !== 0) {
      arrayPoly.push(obPoly);
    }
  }
  return arrayPoly;
}

function getSumOfKoef(filterStep, curStep) {
  let sunKoef = 0;

  for (const el of filterStep) {
    if (el.zn === "+") {
      sunKoef = sunKoef + el.koef;
    } else {
      sunKoef = sunKoef - el.koef;
    }
  }
  const newObj = getNewObj(curStep, sunKoef);

  return newObj;
}

function getNewObj(curStep, sunKoef) {
  const newObj = {
    curStep,
    sunKoef,
  };
  return newObj;
}

function getArrayOfStep(totalArray) {
  let totArray = [];

  for (let i = 0; i < totalArray.length; i += 1) {
    const curElem = totalArray[i];
    const findIndex = totArray.indexOf(curElem.step);
    if (findIndex === -1) {
      totArray.push(curElem.step);
    }
  }

  totArray.sort((a, b) => b - a);
  return totArray;
}
