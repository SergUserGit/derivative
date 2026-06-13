import { getKeysOfHouses } from "./test_module.js";

const houseMngBtn = document.querySelector(".house_managager_button");
const inputOne = document.querySelector(".inpute_one");
const inputTwo = document.querySelector(".inpute_two");
const textArea = document.querySelector(".textarea_house");

houseMngBtn.addEventListener("click", onClickHouseMngBtn);

function getTheCaseValue(word, caseWord) {
  if (word === "Я") {
    if (caseWord === "znahid") {
      return "себе";
    } else {
      return "";
    }
  } else if (word === "Моє проявлення себе в соціумі") {
    if (caseWord === "znahid") {
      return "моє проявлення себе в соціумі";
    } else {
      return "";
    }
  } else if (word === "Мій зовнішній вигляд") {
    if (caseWord === "znahid") {
      return "мій зовнішній вигляд";
    } else {
      return "";
    }
  } else if (word === "Мої починання") {
    if (caseWord === "znahid") {
      return "мої починання";
    } else {
      return "";
    }
  } else if (word === "Як мене соціум зчитує") {
    if (caseWord === "znahid") {
      return "як мене соціум зчитує";
    } else {
      return "";
    }
  } else if (word === "Блага") {
    if (caseWord === "znahid") {
      return "блага";
    } else {
      return "";
    }
  } else if (word === "Матеріальні цінності") {
    if (caseWord === "znahid") {
      return "матеріальні цінності";
    } else {
      return "";
    }
  } else if (word === "Фінанси") {
    if (caseWord === "znahid") {
      return "фінанси";
    } else {
      return "";
    }
  } else if (word === "Мої гроші") {
    if (caseWord === "znahid") {
      return "мої гроші";
    } else {
      return "";
    }
  } else if (word === "Мої статки") {
    if (caseWord === "znahid") {
      return "мої статки";
    } else {
      return "";
    }
  } else if (
    word === "Ситуації заробітку грошей та накоплення ресурсів своєю працею"
  ) {
    if (caseWord === "znahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else {
      return "";
    }
  } else if (word === "Запас сил") {
    if (caseWord === "znahid") {
      return "запас сил";
    } else {
      return "";
    }
  } else if (word === "Інтелект") {
    if (caseWord === "znahid") {
      return "інтелект";
    } else {
      return "";
    }
  } else if (word === "Пізнання") {
    if (caseWord === "znahid") {
      return "пізнання";
    } else {
      return "";
    }
  } else if (word === "Навчання") {
    if (caseWord === "znahid") {
      return "навчання";
    } else if (caseWord === "znahid") {
      return "навчання";
    } else {
      return "";
    }
  } else if (word === "Близьке оточення") {
    if (caseWord === "znahid") {
      return "близьке оточення";
    } else if (caseWord === "znahid") {
      return "близьке оточення";
    } else {
      return "";
    }
  } else if (word === "Брати/сестри") {
    if (caseWord === "znahid") {
      return "братів/сестер";
    } else {
      return "";
    }
  } else if (word === "Переміщення") {
    if (caseWord === "znahid") {
      return "переміщення";
    } else {
      return "";
    }
  } else if (word === "Короткі подорожі") {
    if (caseWord === "znahid") {
      return "короткі подорожі";
    } else {
      return "";
    }
  } else if (word === "Батьківський дім") {
    if (caseWord === "znahid") {
      return "батьківський дім";
    } else {
      return "";
    }
  } else if (word === "Батьки") {
    if (caseWord === "znahid") {
      return "батьків";
    } else {
      return "";
    }
  } else if (word === "Спадщина") {
    if (caseWord === "znahid") {
      return "спадщину";
    } else if (caseWord === "znahid") {
      return "спадщину";
    } else {
      return "";
    }
  } else if (word === "Домівка") {
    if (caseWord === "znahid") {
      return "домівку";
    } else {
      return "";
    }
  } else if (word === "Сімейність") {
    if (caseWord === "znahid") {
      return "сімейність";
    } else {
      return "";
    }
  } else if (word === "Родове коріння") {
    if (caseWord === "znahid") {
      return "родове коріння";
    } else {
      return "";
    }
  } else if (word === "Дом серця") {
    if (caseWord === "znahid") {
      return "дом серця";
    } else {
      return "";
    }
  } else if (word === "Випадкові позашлюбні зв'язки") {
    if (caseWord === "znahid") {
      return "випадкові позашлюбні зв'язки";
    } else {
      return "";
    }
  } else if (word === "Пристрасті") {
    if (caseWord === "znahid") {
      return "пристрасті";
    } else {
      return "";
    }
  } else if (word === "Пригоди") {
    if (caseWord === "znahid") {
      return "пригоди";
    } else {
      return "";
    }
  } else if (word === "Любов") {
    if (caseWord === "znahid") {
      return "любов";
    } else {
      return "";
    }
  } else if (word === "Діти") {
    if (caseWord === "znahid") {
      return "дітей";
    } else {
      return "";
    }
  } else if (word === "Розваги") {
    if (caseWord === "znahid") {
      return "розваги";
    } else {
      return "";
    }
  } else if (word === "Ігри") {
    if (caseWord === "znahid") {
      return "ігри";
    } else {
      return "";
    }
  } else if (word === "Дозвілля") {
    if (caseWord === "znahid") {
      return "дозвілля";
    } else {
      return "";
    }
  } else if (word === "Здоров'я") {
    if (caseWord === "znahid") {
      return "здоров'я";
    } else {
      return "";
    }
  } else if (word === "Набуті хвороби") {
    if (caseWord === "znahid") {
      return "набуті хвороби";
    } else {
      return "";
    }
  } else if (word === "Трудова діяльність") {
    if (caseWord === "znahid") {
      return "трудову діяльність";
    } else {
      return "";
    }
  } else if (word === "Робота") {
    if (caseWord === "znahid") {
      return "роботу";
    } else {
      return "";
    }
  } else if (word === "Корисність") {
    if (caseWord === "znahid") {
      return "корисність";
    } else {
      return "";
    }
  } else if (word === "Борги") {
    if (caseWord === "znahid") {
      return "борги";
    } else {
      return "";
    }
  } else if (word === "Домашні тварини") {
    if (caseWord === "znahid") {
      return "домашніх тварин";
    } else {
      return "";
    }
  } else if (word === "Персонал") {
    if (caseWord === "znahid") {
      return "персонал";
    } else {
      return "";
    }
  } else if (word === "Шлюб") {
    if (caseWord === "znahid") {
      return "шлюб";
    } else {
      return "";
    }
  } else if (word === "Партнерство") {
    if (caseWord === "znahid") {
      return "партнерство";
    } else {
      return "";
    }
  } else if (word === "Суди") {
    if (caseWord === "znahid") {
      return "суди";
    } else {
      return "";
    }
  } else if (word === "Розлучення") {
    if (caseWord === "znahid") {
      return "розлучення";
    } else {
      return "";
    }
  } else if (word === "Переродження") {
    if (caseWord === "znahid") {
      return "переродження";
    } else {
      return "";
    }
  } else if (word === "Трансформація") {
    if (caseWord === "znahid") {
      return "трансформацію";
    } else {
      return "";
    }
  } else if (word === "Великі чужі гроші") {
    if (caseWord === "znahid") {
      return "великі чужі гроші";
    } else {
      return "";
    }
  } else if (word === "Магія") {
    if (caseWord === "znahid") {
      return "магію";
    } else {
      return "";
    }
  } else if (word === "Гіпноз") {
    if (caseWord === "znahid") {
      return "гіпноз";
    } else {
      return "";
    }
  } else if (word === "Секс") {
    if (caseWord === "znahid") {
      return "секс";
    } else {
      return "";
    }
  } else if (word === "Народження") {
    if (caseWord === "znahid") {
      return "народження";
    } else {
      return "";
    }
  } else if (word === "Великі проблеми") {
    if (caseWord === "znahid") {
      return "великі проблеми";
    } else {
      return "";
    }
  } else if (word === "Кризи та ризики") {
    if (caseWord === "znahid") {
      return "кризи та ризики";
    } else {
      return "";
    }
  } else if (word === "Закордон") {
    if (caseWord === "znahid") {
      return "закордон";
    } else {
      return "";
    }
  } else if (word === "Неформальна влада") {
    if (caseWord === "znahid") {
      return "неформальну владу";
    } else {
      return "";
    }
  } else if (word === "Духовний розвиток") {
    if (caseWord === "znahid") {
      return "духовний розвиток";
    } else if (caseWord === "znahid") {
      return "духовний розвиток";
    } else {
      return "";
    }
  } else if (word === "Світогляд") {
    if (caseWord === "znahid") {
      return "світогляд";
    } else {
      return "";
    }
  } else if (word === "Мислення") {
    if (caseWord === "znahid") {
      return "мислення";
    } else {
      return "";
    }
  } else if (word === "Філософія") {
    if (caseWord === "znahid") {
      return "філософію";
    } else {
      return "";
    }
  } else if (word === "Релігіозність") {
    if (caseWord === "znahid") {
      return "релігіозність";
    } else {
      return "";
    }
  } else if (word === "Мораль") {
    if (caseWord === "znahid") {
      return "мораль";
    } else {
      return "";
    }
  } else if (word === "Вища освіта") {
    if (caseWord === "znahid") {
      return "вищу освіту";
    } else {
      return "";
    }
  } else if (word === "Етика") {
    if (caseWord === "znahid") {
      return "етику";
    } else {
      return "";
    }
  } else if (word === "Наука") {
    if (caseWord === "znahid") {
      return "науку";
    } else {
      return "";
    }
  } else if (word === "Стратегія") {
    if (caseWord === "znahid") {
      return "стратегію";
    } else {
      return "";
    }
  } else if (word === "Соціальний статус") {
    if (caseWord === "znahid") {
      return "соціальний статус";
    } else {
      return "";
    }
  } else if (word === "Моральні та матеріальні блага") {
    if (caseWord === "znahid") {
      return "моральні та матеріальні блага";
    } else {
      return "";
    }
  } else if (word === "Посада") {
    if (caseWord === "znahid") {
      return "посаду";
    } else {
      return "";
    }
  } else if (word === "Авторитет") {
    if (caseWord === "znahid") {
      return "авторитет";
    } else {
      return "";
    }
  } else if (word === "Репутація") {
    if (caseWord === "znahid") {
      return "репутацію";
    } else {
      return "";
    }
  } else if (word === "Політика") {
    if (caseWord === "znahid") {
      return "політику";
    } else {
      return "";
    }
  } else if (word === "Друзі") {
    if (caseWord === "znahid") {
      return "друзів";
    } else {
      return "";
    }
  } else if (word === "Колективна творчість") {
    if (caseWord === "znahid") {
      return "колективну творчість";
    } else {
      return "";
    }
  } else if (word === "Єдинодумці") {
    if (caseWord === "znahid") {
      return "єдинодумців";
    } else {
      return "";
    }
  } else if (word === "Тусовка") {
    if (caseWord === "znahid") {
      return "тусовку";
    } else {
      return "";
    }
  } else if (word === "Надії та плани") {
    if (caseWord === "znahid") {
      return "надії та плани";
    } else {
      return "";
    }
  } else if (word === "Майбутнє") {
    if (caseWord === "znahid") {
      return "майбутнє";
    } else {
      return "";
    }
  } else if (word === "Творчість") {
    if (caseWord === "znahid") {
      return "творчість";
    } else {
      return "";
    }
  } else if (word === "Благодійність") {
    if (caseWord === "znahid") {
      return "благодійність";
    } else {
      return "";
    }
  } else if (word === "Випробування долі") {
    if (caseWord === "znahid") {
      return "випробування долі";
    } else {
      return "";
    }
  } else if (word === "Приховані вороги") {
    if (caseWord === "znahid") {
      return "прихованих ворогів";
    } else {
      return "";
    }
  } else if (word === "Заточення") {
    if (caseWord === "znahid") {
      return "заточення";
    } else {
      return "";
    }
  } else if (word === "Хвороби") {
    if (caseWord === "znahid") {
      return "хвороби";
    } else {
      return "";
    }
  } else if (word === "Нещасні випадки") {
    if (caseWord === "znahid") {
      return "нещасні випадки";
    } else {
      return "";
    }
  } else if (word === "Служіння") {
    if (caseWord === "znahid") {
      return "служіння";
    } else {
      return "";
    }
  } else if (word === "Нетрадиційна медицина") {
    if (caseWord === "znahid") {
      return "нетрадиційну медицину";
    } else {
      return "";
    }
  } else if (word === "Акторська майстерність") {
    if (caseWord === "znahid") {
      return "акторську майстерність";
    } else {
      return "";
    }
  } else if (word === "Відчуття світу") {
    if (caseWord === "znahid") {
      return "відчуття світу";
    } else {
      return "";
    }
  } else if (word === "Езотерика") {
    if (caseWord === "znahid") {
      return "езотерику";
    } else {
      return "";
    }
  } else {
    return "";
  }
}

function onClickHouseMngBtn() {
  let totalText = "";

  const keysOfHouses = getKeysOfHouses();

  const houseOne = inputOne.value;

  const houseTwo = inputTwo.value;

  const foundArrayHouses = keysOfHouses.find(
    (element) => element.planet === houseOne
  );

  const ArrayOne = foundArrayHouses.planetArray;

  const foundArrayHousesTwo = keysOfHouses.find(
    (element) => element.planet === houseTwo
  );

  const ArrayTwo = foundArrayHousesTwo.planetArray;

  for (let a = 0; a < ArrayOne.length; a += 1) {
    for (let b = 0; b < ArrayTwo.length; b += 1) {
      const elemOne = ArrayOne[a];
      const elemTwo = ArrayTwo[b];
      if (elemOne !== elemTwo) {
        totalText =
          totalText +
          elemOne +
          " через " +
          getTheCaseValue(elemTwo, "znahid") +
          "; ";
      }
    }
  }

  /* const arrayManager = getArrayManager();
  const houseOne = Number(inputOne.value);
  const houseTwo = Number(inputTwo.value);
  const arrayFilter = arrayManager.filter(
    (el) => el.houseOne === houseOne && el.houseTwo === houseTwo
  );

  const totStr = getTotalStr(arrayFilter);*/
  textArea.textContent = totalText;
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

function addDateHouses3_1(totalArray) {
  let array1 = [];
  array1.push("себе самого");

  const Obj1 = {
    houseOne: 3,
    houseTwo: 1,
    charact: "Пізнання ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("навчання");

  const Obj2 = {
    houseOne: 3,
    houseTwo: 1,
    charact: "Самостійне ",
    arraychar: array2,
  };

  totalArray.push(Obj2);

  let array3 = [];
  array3.push("по власним справам");

  const Obj3 = {
    houseOne: 3,
    houseTwo: 1,
    charact: "Короткі поїздки ",
    arraychar: array3,
  };

  totalArray.push(Obj3);
}

function addDateHouses3_2(totalArray) {
  let array1 = [];
  array1.push("інвестуванню");

  const Obj1 = {
    houseOne: 3,
    houseTwo: 2,
    charact: "Навчання ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("близьке оточення");
  array2.push("брати/сестри");

  const Obj2 = {
    houseOne: 3,
    houseTwo: 2,
    charact: "Займаються фінансовою справою ",
    arraychar: array2,
  };

  totalArray.push(Obj2);

  let array3 = [];
  array3.push("по отриманню/заробітку грошей");

  const Obj3 = {
    houseOne: 3,
    houseTwo: 2,
    charact: "Короткі поїздки ",
    arraychar: array3,
  };

  totalArray.push(Obj3);
}

function addDateHouses3_4(totalArray) {
  let array1 = [];
  array1.push("родового коріння");

  const Obj1 = {
    houseOne: 3,
    houseTwo: 4,
    charact: "Пізнання ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("ріелторству");

  const Obj2 = {
    houseOne: 3,
    houseTwo: 4,
    charact: "Навчання ",
    arraychar: array2,
  };

  totalArray.push(Obj2);

  let array3 = [];
  array3.push("до батьків");

  const Obj3 = {
    houseOne: 3,
    houseTwo: 4,
    charact: "Короткі поїздки ",
    arraychar: array3,
  };

  totalArray.push(Obj3);

  let array4 = [];
  array4.push("мають спадщину");

  const Obj4 = {
    houseOne: 3,
    houseTwo: 4,
    charact: "Брати/сестри ",
    arraychar: array4,
  };

  totalArray.push(Obj4);
}

function addDateHouses3_5(totalArray) {
  let array1 = [];
  array1.push("ігри");

  const Obj1 = {
    houseOne: 3,
    houseTwo: 5,
    charact: "Інтелектуальні ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("по справам кохання");
  array2.push("заради розваг");

  const Obj2 = {
    houseOne: 3,
    houseTwo: 5,
    charact: "Поїздки ",
    arraychar: array2,
  };

  totalArray.push(Obj2);

  let array3 = [];
  array3.push("дітей");

  const Obj3 = {
    houseOne: 3,
    houseTwo: 5,
    charact: "Навчання ",
    arraychar: array3,
  };

  totalArray.push(Obj3);
}

function addDateHouses3_6(totalArray) {
  let array1 = [];
  array1.push("по роботі");

  const Obj1 = {
    houseOne: 3,
    houseTwo: 6,
    charact: "Поїздки ",
    arraychar: array1,
  };

  totalArray.push(Obj1);

  let array2 = [];
  array2.push("по роботі з персоналом");

  const Obj2 = {
    houseOne: 3,
    houseTwo: 6,
    charact: "Навчання ",
    arraychar: array2,
  };

  totalArray.push(Obj2);

  let array3 = [];
  array3.push("по здоров'ю");
  array3.push("через домашніх тварин");

  const Obj3 = {
    houseOne: 3,
    houseTwo: 6,
    charact: "Поїздки ",
    arraychar: array3,
  };

  totalArray.push(Obj3);

  let array4 = [];
  array4.push("братів/сестер");

  const Obj4 = {
    houseOne: 3,
    houseTwo: 6,
    charact: "Здоров'я ",
    arraychar: array4,
  };

  totalArray.push(Obj4);

  let array5 = [];
  array5.push("братів/сестер");

  const Obj5 = {
    houseOne: 3,
    houseTwo: 6,
    charact: "Домашні тварини ",
    arraychar: array5,
  };

  totalArray.push(Obj5);
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
  addDateHouses3_1(totalArray);
  addDateHouses3_2(totalArray);
  addDateHouses3_4(totalArray);
  addDateHouses3_5(totalArray);
  addDateHouses3_6(totalArray);
  return totalArray;
}
