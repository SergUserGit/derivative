const myButton = document.querySelector(".culc_button");
const myTitle = document.querySelector(".my_title");

myButton.addEventListener("click", onclickCulcButton);

function fact(curNumber) {
  let sum = 1;

  for (let i = curNumber; i >= 1; i -= 1) {
    sum = sum * i;
  }

  return sum;
}

function getTotalArray(arrayOfFact) {
  let totalArray = [];

  const firstElem = arrayOfFact[0];

  totalArray.push(firstElem);

  for (let k = 1; k < arrayOfFact.length; k += 1) {
    let totalStr = firstElem;
    for (let m = 1; m <= k; m += 1) {
      const curElem = arrayOfFact[m];
      totalStr = totalStr + " " + curElem;
    }
    totalArray.push(totalStr);
  }
  return totalArray;
}

function getArrayOfFact(curNumber, fact) {
  let curArray = [];

  for (let i = curNumber; i >= 1; i -= 1) {
    if (i !== 1) {
      curArray.push(String(i));
      curArray.push("*");
    } else {
      curArray.push(String(i));
      curArray.push("=");
      curArray.push(String(fact));
    }
  }

  return curArray;
}

function objOfIntervals(countElem) {
  let myIntervals = new Object();

  for (let i = 1; i <= countElem; i += 1) {
    myIntervals["interval" + String(i)] = null;
  }

  return myIntervals;
}

function onclickCulcButton() {
  myTitle.textContent = "";

  const myNumber = 11;

  const factNumber = fact(myNumber);

  const arrayFact = getArrayOfFact(myNumber, factNumber);

  const arrayTotal = getTotalArray(arrayFact);

  const getObjOfIntervals = objOfIntervals(arrayTotal.length);

  const objLench = Object.keys(getObjOfIntervals).length;

  for (let i = 1; i <= objLench; i += 1) {
    getObjOfIntervals["interval" + String(i)] = setTimeout(
      myFuncInterval,
      3500 + i * 1000,
      arrayTotal[i - 1]
    );
  }
}

function myFuncInterval(curElem) {
  myTitle.textContent = curElem;
}
