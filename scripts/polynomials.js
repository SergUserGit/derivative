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
  console.log(totalArray);
}
