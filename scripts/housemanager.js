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

function addDateHouses1_7(totalArray) {
  let array1 = [];
  array1.push("шлюб");
  array1.push("партнерство");

  const Obj1 = {
    houseOne: 1,
    houseTwo: 7,
    charact: "Проявлення себе через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("суди");
  array2.push("розлучення");

  const Obj2 = {
    houseOne: 1,
    houseTwo: 7,
    charact: "Можу мати ",
    arraychar: array2,
  };

  totalArray.push(Obj2);
}

function addDateHouses1_8(totalArray) {
  let array1 = [];
  array1.push("переродження");

  const Obj1 = {
    houseOne: 1,
    houseTwo: 8,
    charact: "Особистісне ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("трансформація");

  const Obj2 = {
    houseOne: 1,
    houseTwo: 8,
    charact: "Особистісна ",
    arraychar: array2,
  };

  totalArray.push(Obj2);

  let array3 = [];
  array3.push("великих чужих грошей");

  const Obj3 = {
    houseOne: 1,
    houseTwo: 8,
    charact: "Отримання ",
    arraychar: array3,
  };

  totalArray.push(Obj3);

  let array4 = [];
  array4.push("магією");
  array4.push("гіпнозом");

  const Obj4 = {
    houseOne: 1,
    houseTwo: 8,
    charact: "Володіння ",
    arraychar: array4,
  };

  totalArray.push(Obj4);

  let array5 = [];
  array5.push("кризи та ризики");

  const Obj5 = {
    houseOne: 1,
    houseTwo: 8,
    charact: "Особистісні ",
    arraychar: array5,
  };

  totalArray.push(Obj5);

  let array6 = [];
  array6.push("до сексу");

  const Obj6 = {
    houseOne: 1,
    houseTwo: 8,
    charact: "Жага ",
    arraychar: array6,
  };

  totalArray.push(Obj6);
}

function addDateHouses1_9(totalArray) {
  let array1 = [];
  array1.push("духовний розвиток");
  array1.push("світогляд");
  array1.push("мислення");
  array1.push("філософію");
  array1.push("релігіозність");
  array1.push("мораль");
  array1.push("етику");

  const Obj1 = {
    houseOne: 1,
    houseTwo: 9,
    charact: "Проявлення через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("поїздок за кордон");
  array2.push("неформальної влади");
  array2.push("вищої освіти");

  const Obj2 = {
    houseOne: 1,
    houseTwo: 9,
    charact: "Жага до ",
    arraychar: array2,
  };

  totalArray.push(Obj2);
}

function addDateHouses1_10(totalArray) {
  let array1 = [];
  array1.push("стратегії");
  array1.push("соціального статусу");
  array1.push("моральних та матеріальних благ");
  array1.push("посади");
  array1.push("авторитету");
  array1.push("репутації");

  const Obj1 = {
    houseOne: 1,
    houseTwo: 10,
    charact: "Жага до ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses1_11(totalArray) {
  let array1 = [];
  array1.push("політики");

  const Obj1 = {
    houseOne: 1,
    houseTwo: 11,
    charact: "Інтерес до ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("друзів");
  array2.push("колективну творчість");
  array2.push("єдинодумців");
  array2.push("навчання");

  const Obj2 = {
    houseOne: 1,
    houseTwo: 11,
    charact: "Проявлення через ",
    arraychar: array2,
  };

  totalArray.push(Obj2);

  let array3 = [];
  array3.push("тусовок");

  const Obj3 = {
    houseOne: 1,
    houseTwo: 11,
    charact: "Жага до ",
    arraychar: array3,
  };

  totalArray.push(Obj3);

  let array4 = [];
  array4.push("майбутнє");

  const Obj4 = {
    houseOne: 1,
    houseTwo: 11,
    charact: "Побудова планів на ",
    arraychar: array4,
  };

  totalArray.push(Obj4);
}

function addDateHouses1_12(totalArray) {
  let array1 = [];
  array1.push("творчість");
  array1.push("духовний розвиток");
  array1.push("благодійність");
  array1.push("служіння");
  array1.push("езотрерику");
  array1.push("відчуття світу");

  const Obj1 = {
    houseOne: 1,
    houseTwo: 12,
    charact: "Проявлення через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("до випробувань долі");
  array2.push("мати прихованих ворогів");
  array2.push("бути в неволі");
  array2.push("до хвороб");
  array2.push("нещасних випадків");
  array2.push("до володіння нетрадиційною медициною");
  array2.push("до володіння акторскою майстерністю");

  const Obj2 = {
    houseOne: 1,
    houseTwo: 12,
    charact: "Схильність ",
    arraychar: array2,
  };

  totalArray.push(Obj2);
}

function addDateHouses2_1(totalArray) {
  let array1 = [];
  array1.push("проявлення себе у соціумі");
  array1.push("мій зовнішній вигляд");
  array1.push("мої починання");
  array1.push("власний бізнес");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 1,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_3(totalArray) {
  let array1 = [];
  array1.push("інтелект");
  array1.push("навчання");
  array1.push("близьке оточення");
  array1.push("братів/сестер");
  array1.push("пересування");
  array1.push("кототкі подорожі");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 3,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_4(totalArray) {
  let array1 = [];
  array1.push("батьківський дім");
  array1.push("батьків");
  array1.push("спадщину");
  array1.push("сімейний бізнес");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 4,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_5(totalArray) {
  let array1 = [];
  array1.push("любов");
  array1.push("дітей");
  array1.push("розваги");
  array1.push("ігровий бізнес");
  array1.push("дозвілля");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 5,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_6(totalArray) {
  let array1 = [];
  array1.push("трудову діяльність");
  array1.push("роботу");
  array1.push("корисність");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 6,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_7(totalArray) {
  let array1 = [];
  array1.push("шлюб");
  array1.push("партнерство");
  array1.push("суди");
  array1.push("розлучення");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 7,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_8(totalArray) {
  let array1 = [];
  array1.push("спадщину");
  array1.push("магію");
  array1.push("гіпноз");
  array1.push("секс-індустрію");
  array1.push("кризи та ризики");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 8,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_9(totalArray) {
  let array1 = [];
  array1.push("роботу та поїздки за кордон");
  array1.push("вищу освіту");
  array1.push("науку");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 9,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_10(totalArray) {
  let array1 = [];
  array1.push("соціальний статус");
  array1.push("посаду");
  array1.push("авторитет");
  array1.push("репутацію");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 10,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_11(totalArray) {
  let array1 = [];
  array1.push("політику");
  array1.push("друзів");
  array1.push("колективну творчість");
  array1.push("навчання");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 11,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function addDateHouses2_12(totalArray) {
  let array1 = [];
  array1.push("творчість");
  array1.push("благодійність");
  array1.push("служіння");
  array1.push("нетрадиційну медицину");
  array1.push("акторску майстерність");
  array1.push("езотрерику");

  const Obj1 = {
    houseOne: 2,
    houseTwo: 12,
    charact: "Отримання власних коштів через ",
    arraychar: array1,
  };

  totalArray.push(Obj1);
}

function getArrayManager() {
  let totalArray = [];
  addDateHouses1_2(totalArray);
  addDateHouses1_3(totalArray);
  addDateHouses1_4(totalArray);
  addDateHouses1_5(totalArray);
  addDateHouses1_6(totalArray);
  addDateHouses1_7(totalArray);
  addDateHouses1_8(totalArray);
  addDateHouses1_9(totalArray);
  addDateHouses1_10(totalArray);
  addDateHouses1_11(totalArray);
  addDateHouses1_12(totalArray);
  addDateHouses2_1(totalArray);
  addDateHouses2_3(totalArray);
  addDateHouses2_4(totalArray);
  addDateHouses2_5(totalArray);
  addDateHouses2_6(totalArray);
  addDateHouses2_7(totalArray);
  addDateHouses2_8(totalArray);
  addDateHouses2_9(totalArray);
  addDateHouses2_10(totalArray);
  addDateHouses2_11(totalArray);
  addDateHouses2_12(totalArray);
  return totalArray;
}
