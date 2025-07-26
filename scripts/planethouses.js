const buttonAsp = document.querySelector(".tract_button");

const planetName = document.querySelector("#aspect-sun");
const houseName = document.querySelector("#number-house");

buttonAsp.addEventListener("click", onClickBtnAsp);

function onClickBtnAsp() {
  let planetValue = planetName.options[planetName.value - 1].textContent;
  let houseValue = houseName.options[houseName.value - 1].textContent;

  const keysOfPlanet = getKeysOfPlanets();

  const foundArray = keysOfPlanet.find(
    (element) => element.planet === planetValue
  );

  if (foundArray !== undefined) {
    console.log(foundArray.planetArray);
  }
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
