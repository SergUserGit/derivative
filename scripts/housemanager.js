const houseMngBtn = document.querySelector(".house_managager_button");
const inputOne = document.querySelector(".inpute_one");
const inputTwo = document.querySelector(".inpute_two");
const textArea = document.querySelector(".textarea_house");

houseMngBtn.addEventListener("click", onClickHouseMngBtn);

function onClickHouseMngBtn() {
  const arrayManager = getArrayManager();
  const houseOne = Number(inputOne.value);
  const houseTwo = Number(inputTwo.value);
  const arrayFilter = arrayManager.filter(
    (el) => el.houseOne === houseOne && el.houseTwo === houseTwo
  );

  const totStr = getTotalStr(arrayFilter);
  textArea.textContent = totStr;
}

function getTotalStr(arrayFilter) {
  let totalStr = "";
  for (const curEl of arrayFilter) {
    const charact = curEl.charact;
    for (const elTwo of curEl.arraychar) {
      totalStr = totalStr + charact + elTwo + "\n";
    }
  }
  return totalStr;
}

function getArrayManager() {
  let totalArray = [];

  let array1 = [];
  array1.push("блага");
  array1.push("матеріальні цінності");
  array1.push("фінанси");
  array1.push("особисті гроші");
  array1.push("власний стан");

  const ObjOne = {
    houseOne: 1,
    houseTwo: 2,
    charact: "Проявлення себе через ",
    arraychar: array1,
  };

  totalArray.push(ObjOne);

  let array2 = [];
  array2.push("фінанси");
  array2.push("накопичення ресурсів своєю працею");
  array2.push("власні кошти");

  const ObjTwo = {
    houseOne: 1,
    houseTwo: 2,
    charact: "Соціум зчитує через ",
    arraychar: array2,
  };

  totalArray.push(ObjTwo);

  return totalArray;
}
