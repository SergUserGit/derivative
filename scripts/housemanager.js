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

function addDateHouses1_2(totalArray) {
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
}

function addDateHouses1_3(totalArray) {
  let array3 = [];
  array3.push("близьке оточення");
  array3.push("інтелект");
  array3.push("навчання");
  array3.push("братів/сестер");
  array3.push("короткі подорожі");
  array3.push("пізнання");

  const Obj3 = {
    houseOne: 1,
    houseTwo: 3,
    charact: "Проявлення себе через ",
    arraychar: array3,
  };

  totalArray.push(Obj3);

  let array4 = [];
  array4.push("в навчанні");

  const Obj4 = {
    houseOne: 1,
    houseTwo: 3,
    charact: "Мої починання ",
    arraychar: array4,
  };

  totalArray.push(Obj4);
}

function addDateHouses1_4(totalArray) {
  let array1 = [];
  array1.push("батьківський дім");
  array1.push("батьків");
  array1.push("спадщину");
  array1.push("сімейність");
  array1.push("родове коріння");

  const Obj1 = {
    houseOne: 1,
    houseTwo: 4,
    charact: "Проявлення себе через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses1_5(totalArray) {
  let array1 = [];
  array1.push("любов");
  array1.push("дітей");
  array1.push("розваги");
  array1.push("ігри");
  array1.push("дозвілля");

  const Obj1 = {
    houseOne: 1,
    houseTwo: 5,
    charact: "Проявлення себе через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("пристрасний");

  const Obj2 = {
    houseOne: 1,
    houseTwo: 5,
    charact: "Я ",
    arraychar: array2,
  };

  totalArray.push(Obj2);
}

function addDateHouses1_6(totalArray) {
  let array1 = [];
  array1.push("трудову діяльність");
  array1.push("роботу");

  const Obj1 = {
    houseOne: 1,
    houseTwo: 6,
    charact: "Проявлення себе через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("домашніх тварин");
  array2.push("набуті хвороби");
  array2.push("персонал");
  array2.push("борги");

  const Obj2 = {
    houseOne: 1,
    houseTwo: 6,
    charact: "Можу мати ",
    arraychar: array2,
  };

  totalArray.push(Obj2);

  let array3 = [];
  array3.push("повинен слідкувати за здоров'ям");
  array3.push("можу бути корисним");

  const Obj3 = {
    houseOne: 1,
    houseTwo: 6,
    charact: "Я ",
    arraychar: array3,
  };

  totalArray.push(Obj3);
}

function getArrayManager() {
  let totalArray = [];
  addDateHouses1_2(totalArray);
  addDateHouses1_3(totalArray);
  addDateHouses1_4(totalArray);
  addDateHouses1_5(totalArray);
  addDateHouses1_6(totalArray);
  return totalArray;
}
