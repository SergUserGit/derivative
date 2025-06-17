const myButton = document.querySelector(".calc_poly");

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

function onClickMyButton() {
  const pol_one = "x^2 - 3x + 2";
  const pol_two = "x + 7";

  let arrayOne = [];
  let arrayTwo = [];

  const objOne = {
    koef: 1,
    step: 2,
    zn: "+",
  };
  const objTwo = {
    koef: 3,
    step: 1,
    zn: "-",
  };
  const objThree = {
    koef: 2,
    step: 0,
    zn: "+",
  };

  const objFour = {
    koef: 7,
    step: 0,
    zn: "+",
  };

  const objFive = {
    koef: 1,
    step: 1,
    zn: "+",
  };

  arrayOne.push(objOne);
  arrayOne.push(objTwo);
  arrayOne.push(objThree);

  arrayTwo.push(objFour);
  arrayTwo.push(objFive);

  const totalArray = getTotalArrayPol(arrayOne, arrayTwo);

  const arrayOfStep = getArrayOfStep(totalArray);

  const arrayPoly = getArrayPoly(totalArray, arrayOfStep);
  console.log(arrayPoly);
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
  const newObj = {
    step: curStep,
    koef: sunKoef,
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
