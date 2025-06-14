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

function getTotalArray(arrayOfFact) {}

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

function onclickCulcButton() {
  myTitle.textContent = "";

  const myNumber = 7;

  const factNumber = fact(myNumber);

  const arrayFact = getArrayOfFact(myNumber, factNumber);
  console.log(arrayFact);

  /* let myIntervals = new Object();
  myIntervals.interval1 = null;
  myIntervals.interval2 = null;
  myIntervals.interval3 = null;
  myIntervals.interval4 = null;
  myIntervals.interval5 = null;
  myIntervals.interval6 = null;

  for (let i = 1; i <= 6; i += 1) {
    myIntervals["interval" + String(i)] = setTimeout(
      myFuncInterval,
      3500 + i * 1000,
      i
    );
  }*/
}

function myFuncInterval(numb) {
  myTitle.textContent = myTitle.textContent + " " + String(numb);
}
