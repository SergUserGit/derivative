const buttonAsp = document.querySelector(".tract_button");

const planetName = document.querySelector("#aspect-sun");
const houseName = document.querySelector("#number-house");

const infoLabel = document.querySelector(".information-fild");

buttonAsp.addEventListener("click", onClickBtnAsp);

function getStrAllComb(array1, array2) {
  let totalStr = "";
  for (let k = 0; k < array1.length; k += 1) {
    const el1 = array1[k];
    for (let b = 0; b < el1.planetArray.length; b += 1) {
      for (let m = 0; m < array2.length; m += 1) {
        const el2 = array2[m];
        for (let i = 0; i < el2.planetArray.length; i += 1) {
          totalStr =
            totalStr + el1.planetArray[b] + " - " + el2.planetArray[i] + "\n";
        }
      }
    }
  }
  return totalStr;
}

function getItnerpretation(keyOfPlanet, keysOfHouse) {
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Я") {
    return "Людина вкладає життєві сили в себе";
  }
  if (
    keyOfPlanet === "Життєві сили" &&
    keysOfHouse === "Мій зовнішній вигляд"
  ) {
    return "Людина вкладає життєві сили в свій зовнішній вигляд";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Мої починання") {
    return "Людина вкладає життєві сили у власні починання";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Блага") {
    return "Людина вкладає життєві сили у блага";
  }

  if (
    keyOfPlanet === "Життєві сили" &&
    keysOfHouse === "Матеріальні цінності"
  ) {
    return "Людина вкладає життєві сили в матеріальні цінності";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Фінанси") {
    return "Людина вкладає життєві сили у фінанси";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Мої гроші") {
    return "Людина вкладає життєві сили у власні гроші";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Мої статки") {
    return "Людина вкладає життєві сили у власні статки";
  }

  if (
    keyOfPlanet === "Життєві сили" &&
    keysOfHouse ===
      "Ситуації заробітку грошей та накоплення ресурсів своєю працею"
  ) {
    return "Для заробітку грошей потрібні життєві сили";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Інтелект") {
    return "Людина вкладає життєві сили в інтелект";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Пізнання") {
    return "Людина вкладає життєві сили в пізнання";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Навчання") {
    return "Людина вкладає життєві сили в навчання";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Близьке оточення") {
    return "Людина вкладає життєві сили в близьке оточення, або близьке оточення надають життєвих сил";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Короткі подорожі") {
    return "Людина отримує життєві сили від коротких подорожей";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Брати/сестри") {
    return "Людина отримує життєві сили від братів та сестер";
  }

  return "";
}

function onClickBtnAsp() {
  let planetValue = planetName.options[planetName.value - 1].textContent;
  let houseValue = houseName.options[houseName.value - 1].textContent;

  const keysOfPlanet = getKeysOfPlanets();

  const keysOfHouses = getKeysOfHouses();

  /*const tesrtVar = getStrAllComb(keysOfPlanet, keysOfHouses);

  console.log(tesrtVar);*/

  const foundArray = keysOfPlanet.find(
    (element) => element.planet === planetValue
  );

  const foundArrayHouses = keysOfHouses.find(
    (element) => element.planet === houseValue
  );

  if (foundArray !== undefined && foundArrayHouses !== undefined) {
    const resultString = getResultString(
      foundArray.planetArray,
      foundArrayHouses.planetArray
    );
    infoLabel.textContent = resultString;
  }
}

function getResultString(planetArray, housesArray) {
  let resString = "";

  for (let i = 0; i < planetArray.length; i += 1) {
    for (let b = 0; b < housesArray.length; b += 1) {
      const strOne = planetArray[i];
      const strTwo = housesArray[b];

      resString = resString + strOne + " - " + strTwo;
      resString = resString + ", ";
    }
  }

  return resString;
}

function addObjectInArrayHouses(arrayOfKeys, numberOfHouse) {
  const planetArray = getArrayOfKeysHouses(numberOfHouse);
  const planetObj = {
    planet: numberOfHouse,
    planetArray,
  };
  arrayOfKeys.push(planetObj);
}

function getKeysOfHouses() {
  let arrayOfKeys = [];
  addObjectInArrayHouses(arrayOfKeys, "1");
  addObjectInArrayHouses(arrayOfKeys, "2");
  addObjectInArrayHouses(arrayOfKeys, "3");
  addObjectInArrayHouses(arrayOfKeys, "4");
  addObjectInArrayHouses(arrayOfKeys, "5");
  addObjectInArrayHouses(arrayOfKeys, "6");
  addObjectInArrayHouses(arrayOfKeys, "7");
  addObjectInArrayHouses(arrayOfKeys, "8");
  addObjectInArrayHouses(arrayOfKeys, "9");
  addObjectInArrayHouses(arrayOfKeys, "10");
  addObjectInArrayHouses(arrayOfKeys, "11");
  addObjectInArrayHouses(arrayOfKeys, "12");
  return arrayOfKeys;
}

function getArrayOfKeysHouses(numberOfHouse) {
  let totalArray = [];

  if (numberOfHouse === "1") {
    totalArray.push("Я");
    totalArray.push("Моє проявлення себе в соціумі");
    totalArray.push("Мій зовнішній вигляд");
    totalArray.push("Мої починання");
    totalArray.push("Як мене соціум зчитує");
  } else if (numberOfHouse === "2") {
    totalArray.push("Блага");
    totalArray.push("Матеріальні цінності");
    totalArray.push("Фінанси");
    totalArray.push("Мої гроші");
    totalArray.push("Мої статки");
    totalArray.push(
      "Ситуації заробітку грошей та накоплення ресурсів своєю працею"
    );
    totalArray.push("Запас сил");
  } else if (numberOfHouse === "3") {
    totalArray.push("Інтелект");
    totalArray.push("Пізнання");
    totalArray.push("Навчання");
    totalArray.push("Близьке оточення");
    totalArray.push("Брати/сестри");
    totalArray.push("Переміщення");
    totalArray.push("Короткі подорожі");
  } else if (numberOfHouse === "4") {
    totalArray.push("Батьківський дім");
    totalArray.push("Батьки");
    totalArray.push("Спадщина");
    totalArray.push("Домівка");
    totalArray.push("Сімейність");
    totalArray.push("Родове коріння");
  } else if (numberOfHouse === "5") {
    totalArray.push("Дом серця");
    totalArray.push("Випадкові позашлюбні зв'язки");
    totalArray.push("Пристрасті");
    totalArray.push("Пригоди");
    totalArray.push("Любов");
    totalArray.push("Діти");
    totalArray.push("Розваги");
    totalArray.push("Ігри");
    totalArray.push("Дозвілля");
  } else if (numberOfHouse === "6") {
    totalArray.push("Здоров'я");
    totalArray.push("Набуті хвороби");
    totalArray.push("Трудова діяльність");
    totalArray.push("Робота");
    totalArray.push("Корисність");
    totalArray.push("Борги");
    totalArray.push("Домашні тварини");
    totalArray.push("Персонал");
  } else if (numberOfHouse === "7") {
    totalArray.push("Шлюб");
    totalArray.push("Партнерство");
    totalArray.push("Суди");
    totalArray.push("Розлучення");
  } else if (numberOfHouse === "8") {
    totalArray.push("Переродження");
    totalArray.push("Трансформація");
    totalArray.push("Спадщина");
    totalArray.push("Великі чужі гроші");
    totalArray.push("Магія");
    totalArray.push("Гіпноз");
    totalArray.push("Секс");
    totalArray.push("Народження");
    totalArray.push("Великі проблеми");
    totalArray.push("Кризи та ризики");
  } else if (numberOfHouse === "9") {
    totalArray.push("Закордон");
    totalArray.push("Неформальна влада");
    totalArray.push("Духовний розвиток");
    totalArray.push("Світогляд");
    totalArray.push("Мислення");
    totalArray.push("Філософія");
    totalArray.push("Релігіозність");
    totalArray.push("Мораль");
    totalArray.push("Вища освіта");
    totalArray.push("Етика");
    totalArray.push("Наука");
  } else if (numberOfHouse === "10") {
    totalArray.push("Стратегія");
    totalArray.push("Соціальний статус");
    totalArray.push("Моральні та матеріальні блага");
    totalArray.push("Посада");
    totalArray.push("Авторитет");
    totalArray.push("Репутація");
  } else if (numberOfHouse === "11") {
    totalArray.push("Політика");
    totalArray.push("Друзі");
    totalArray.push("Колективна творчість");
    totalArray.push("Єдинодумці");
    totalArray.push("Тусовка");
    totalArray.push("Навчання");
    totalArray.push("Надії та плани");
    totalArray.push("Майбутнє");
  } else if (numberOfHouse === "12") {
    totalArray.push("Творчість");
    totalArray.push("Духовний розвиток");
    totalArray.push("Благодійність");
    totalArray.push("Випробування долі");
    totalArray.push("Приховані вороги");
    totalArray.push("Заточення");
    totalArray.push("Хвороби");
    totalArray.push("Нещасні випадки");
    totalArray.push("Служіння");
    totalArray.push("Нетрадиційна медицина");
    totalArray.push("Акторська майстерність");
    totalArray.push("Відчуття світу");
    totalArray.push("Езотерика");
  }
  return totalArray;
}

function getArrayOfPlanet(planetName) {
  let totalArray = [];

  if (planetName === "Сонце") {
    totalArray.push("Життєві сили");
    totalArray.push("Дух");
    totalArray.push("Сила волі");
    totalArray.push("Батько");
  } else if (planetName === "Місяць") {
    totalArray.push("Душа");
    totalArray.push("Эмоції");
    totalArray.push("Родові програми");
    totalArray.push("Сприйняття світу");
    totalArray.push("Зона комфорту");
    totalArray.push("Спадковість");
    totalArray.push("Родючість");
    totalArray.push("Мати");
  } else if (planetName === "Меркурій") {
    totalArray.push("Інтелект");
    totalArray.push("Мислення та аналітичні здібності");
    totalArray.push("Зв'язки");
    totalArray.push("Контактність");
    totalArray.push("Мова");
    totalArray.push("Взаємодія з оточуючими");
    totalArray.push("Здатність розуміти інших");
  } else if (planetName === "Венера") {
    totalArray.push("Почуття");
    totalArray.push("Симпатії");
    totalArray.push("Гармонія");
    totalArray.push("Проявлення в коханні");
    totalArray.push("Образ коханки в карті чоловіка");
  } else if (planetName === "Марс") {
    totalArray.push("Сексуальність");
    totalArray.push("Активність");
    totalArray.push("Воля");
    totalArray.push("Імпульс");
    totalArray.push("Мужність");
    totalArray.push("Рішучість");
    totalArray.push("Агресивність");
    totalArray.push("Боротьба");
    totalArray.push("Конкуренція");
    totalArray.push("Необачність");
  } else if (planetName === "Сатурн") {
    totalArray.push("Обмеження");
    totalArray.push("Стиснення");
    totalArray.push("Закони");
    totalArray.push("Правила");
    totalArray.push("Концентрація");
    totalArray.push("Витримка");
    totalArray.push("Сер'йозність");
    totalArray.push("Скупість");
    totalArray.push("Завзятість");
    totalArray.push("Борг");
  } else if (planetName === "Юпітер") {
    totalArray.push("Розширення");
    totalArray.push("Щедрість");
    totalArray.push("Мудрість");
    totalArray.push("Справедливість");
    totalArray.push("Філософський світогляд");
    totalArray.push("Духовні цінності");
    totalArray.push("Люксові бренди");
    totalArray.push("За кордон");
    totalArray.push("Викладання");
  } else if (planetName === "Уран") {
    totalArray.push("Оригінальність");
    totalArray.push("Свобода");
    totalArray.push("Спонтанність");
    totalArray.push("Неочікуваність");
    totalArray.push("Астрологія");
    totalArray.push("Відкриття");
    totalArray.push("Інформаційні технології");
    totalArray.push("Фантастика");
    totalArray.push("Космос");
    totalArray.push("Майбутнє");
  } else if (planetName === "Нептун") {
    totalArray.push("Геніальність");
    totalArray.push("Екстрасенсорні здібності");
    totalArray.push("Фантазія");
    totalArray.push("Духовний розвиток");
    totalArray.push("Віщі сни");
    totalArray.push("Натхнення");
    totalArray.push("Обмани");
    totalArray.push("Самообмани");
    totalArray.push("Залежності");
    totalArray.push("Медитації");
  } else if (planetName === "Плутон") {
    totalArray.push("Трансформація");
    totalArray.push("Екстремальні ситуації");
    totalArray.push("Вища воля");
    totalArray.push("Руйнівна сила");
    totalArray.push("Тиск та управління людьми");
    totalArray.push("Смерть");
    totalArray.push("Народження");
    totalArray.push("Оргазми");
    totalArray.push("Магія");
    totalArray.push("Мафія");
    totalArray.push("Влада");
    totalArray.push("Маніпуляції");
    totalArray.push("Недіагностовані хвороби");
    totalArray.push("Онкологія");
    totalArray.push("Розорення");
    totalArray.push("Пограничні ситуації життя та смерті");
  }
  return totalArray;
}

function addObjectInArrayPlanet(arrayOfKeys, namePlanet) {
  const planetArray = getArrayOfPlanet(namePlanet);
  const planetObj = {
    planet: namePlanet,
    planetArray,
  };
  arrayOfKeys.push(planetObj);
}

function getKeysOfPlanets() {
  let arrayOfKeys = [];
  addObjectInArrayPlanet(arrayOfKeys, "Сонце");
  addObjectInArrayPlanet(arrayOfKeys, "Місяць");
  addObjectInArrayPlanet(arrayOfKeys, "Меркурій");
  addObjectInArrayPlanet(arrayOfKeys, "Венера");
  addObjectInArrayPlanet(arrayOfKeys, "Марс");
  addObjectInArrayPlanet(arrayOfKeys, "Сатурн");
  addObjectInArrayPlanet(arrayOfKeys, "Юпітер");
  addObjectInArrayPlanet(arrayOfKeys, "Уран");
  addObjectInArrayPlanet(arrayOfKeys, "Нептун");
  addObjectInArrayPlanet(arrayOfKeys, "Плутон");
  return arrayOfKeys;
}
