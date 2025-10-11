const generet = document.querySelector(".genegate_button");
const areaOne = document.querySelector(".text_one_generate");
const areaTwo = document.querySelector(".text_two_generate");
const btn_gnr_key_wrds = document.querySelector(".button_generate_keywords");
const input_generate_begin = document.querySelector("#text-generate-begin");
const input_generate_end = document.querySelector("#text-generate-end");
const text_gen_kewrds = document.querySelector(".textarea_generate_keywords");
const button_interp = document.querySelector(".button_generate_interp");
const text_gnrte_interp_one = document.querySelector(
  ".text_generate_interp_one"
);
const text_gnrte_interp_two = document.querySelector(
  ".text_generate_interp_two"
);

btn_gnr_key_wrds.addEventListener("click", onClickBtnGnrKeyWrds);
generet.addEventListener("click", generet_But);
button_interp.addEventListener("click", generet_But_interp_of_text);

function generet_But_interp_of_text() {
  const curValue = text_gnrte_interp_one.value;
  const arrayInterp = curValue.split("\n");
  let totalText = "";
  for (let i = 0; i < arrayInterp.length; i += 1) {
    const curElem = arrayInterp[i];
    const curInterp = generet_But_interp(curElem);
    if (i !== arrayInterp.length - 1) {
      totalText = totalText + curInterp + "\n";
    } else {
      totalText = totalText + curInterp;
    }
  }
  text_gnrte_interp_two.textContent = totalText;
}

function generet_But_interp(text_interp) {
  const partInterp = getFunctionPartInterp(text_interp);
  const partCaseStruct = caseStruct(partInterp.partOne);
  const wordOne = partCaseStruct.wordOne;
  const caseValue = getTheCaseValue(
    partInterp.partTwo,
    partCaseStruct.wordCase
  );
  const totalInterp = text_interp + " = " + wordOne + " " + caseValue;
  return totalInterp;
}

function getFunctionPartInterp(text_interp) {
  const strReplace = text_interp.replace("-", "&");
  const arrayStr = strReplace.split("&");
  return {
    partOne: arrayStr[0].trim(),
    partTwo: arrayStr[1].trim(),
  };
}

function onClickBtnGnrKeyWrds() {
  const value_begin = input_generate_begin.value.trim();
  const arrayWordCases = getWordCases();
  const resultArray = arrayWordCases.filter(
    (curObj) => curObj.caseValue === value_begin
  );
  const value_end = input_generate_end.value.trim();
  let textArray = "";
  for (let i = 0; i < resultArray.length; i += 1) {
    const curElem = resultArray[i];
    if (i !== resultArray.length - 1) {
      textArray =
        textArray +
        curElem.word +
        "&" +
        value_end +
        "&" +
        curElem.wordCase +
        "\n";
    } else {
      textArray =
        textArray + curElem.word + "&" + value_end + "&" + curElem.wordCase;
    }
  }
  text_gen_kewrds.textContent = textArray;
}

function getWordCases() {
  let arrayCases = [];

  arrayCases.push({
    word: "Я",
    caseValue: "nazyv",
    wordCase: "я",
  });

  arrayCases.push({
    word: "Моє проявлення себе в соціумі",
    caseValue: "nazyv",
    wordCase: "моє проявлення себе в соціумі",
  });

  arrayCases.push({
    word: "Мій зовнішній вигляд",
    caseValue: "nazyv",
    wordCase: "мій зовнішній вигляд",
  });

  arrayCases.push({
    word: "Мої починання",
    caseValue: "nazyv",
    wordCase: "мої починання",
  });

  arrayCases.push({
    word: "Як мене соціум зчитує",
    caseValue: "nazyv",
    wordCase: "як мене соціум зчитує",
  });

  arrayCases.push({
    word: "Блага",
    caseValue: "nazyv",
    wordCase: "блага",
  });

  arrayCases.push({
    word: "Матеріальні цінності",
    caseValue: "nazyv",
    wordCase: "матеріальні цінності",
  });

  arrayCases.push({
    word: "Фінанси",
    caseValue: "nazyv",
    wordCase: "фінанси",
  });

  arrayCases.push({
    word: "Мої гроші",
    caseValue: "nazyv",
    wordCase: "мої гроші",
  });

  arrayCases.push({
    word: "Мої статки",
    caseValue: "nazyv",
    wordCase: "мої статки",
  });

  arrayCases.push({
    word: "Ситуації заробітку грошей та накоплення ресурсів своєю працею",
    caseValue: "nazyv",
    wordCase: "ситуації заробітку грошей та накоплення ресурсів своєю працею",
  });

  arrayCases.push({
    word: "Запас сил",
    caseValue: "nazyv",
    wordCase: "запас сил",
  });

  arrayCases.push({
    word: "Інтелект",
    caseValue: "nazyv",
    wordCase: "інтелект",
  });

  arrayCases.push({
    word: "Пізнання",
    caseValue: "nazyv",
    wordCase: "пізнання",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "nazyv",
    wordCase: "навчання",
  });

  arrayCases.push({
    word: "Близьке оточення",
    caseValue: "nazyv",
    wordCase: "близьке оточення",
  });

  arrayCases.push({
    word: "Брати/сестри",
    caseValue: "nazyv",
    wordCase: "брати/сестри",
  });

  arrayCases.push({
    word: "Переміщення",
    caseValue: "nazyv",
    wordCase: "переміщення",
  });

  arrayCases.push({
    word: "Короткі подорожі",
    caseValue: "nazyv",
    wordCase: "короткі подорожі",
  });

  arrayCases.push({
    word: "Батьківський дім",
    caseValue: "nazyv",
    wordCase: "батьківський дім",
  });

  arrayCases.push({
    word: "Батьки",
    caseValue: "nazyv",
    wordCase: "батьки",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "nazyv",
    wordCase: "спадщина",
  });

  arrayCases.push({
    word: "Домівка",
    caseValue: "nazyv",
    wordCase: "домівка",
  });

  arrayCases.push({
    word: "Сімейність",
    caseValue: "nazyv",
    wordCase: "сімейність",
  });

  arrayCases.push({
    word: "Родове коріння",
    caseValue: "nazyv",
    wordCase: "родове коріння",
  });

  arrayCases.push({
    word: "Дом серця",
    caseValue: "nazyv",
    wordCase: "дом серця",
  });

  arrayCases.push({
    word: "Випадкові позашлюбні зв'язки",
    caseValue: "nazyv",
    wordCase: "випадкові позашлюбні зв'язки",
  });

  arrayCases.push({
    word: "Пристрасті",
    caseValue: "nazyv",
    wordCase: "пристрасті",
  });

  arrayCases.push({
    word: "Пригоди",
    caseValue: "nazyv",
    wordCase: "пригоди",
  });

  arrayCases.push({
    word: "Любов",
    caseValue: "nazyv",
    wordCase: "любов",
  });

  arrayCases.push({
    word: "Діти",
    caseValue: "nazyv",
    wordCase: "діти",
  });

  arrayCases.push({
    word: "Розваги",
    caseValue: "nazyv",
    wordCase: "розваги",
  });

  arrayCases.push({
    word: "Ігри",
    caseValue: "nazyv",
    wordCase: "ігри",
  });

  arrayCases.push({
    word: "Дозвілля",
    caseValue: "nazyv",
    wordCase: "дозвілля",
  });

  arrayCases.push({
    word: "Здоров'я",
    caseValue: "nazyv",
    wordCase: "здоров'я",
  });

  arrayCases.push({
    word: "Набуті хвороби",
    caseValue: "nazyv",
    wordCase: "набуті хвороби",
  });

  arrayCases.push({
    word: "Трудова діяльність",
    caseValue: "nazyv",
    wordCase: "трудова діяльність",
  });

  arrayCases.push({
    word: "Робота",
    caseValue: "nazyv",
    wordCase: "робота",
  });

  arrayCases.push({
    word: "Корисність",
    caseValue: "nazyv",
    wordCase: "корисність",
  });

  arrayCases.push({
    word: "Борги",
    caseValue: "nazyv",
    wordCase: "борги",
  });

  arrayCases.push({
    word: "Домашні тварини",
    caseValue: "nazyv",
    wordCase: "домашні тварини",
  });

  arrayCases.push({
    word: "Персонал",
    caseValue: "nazyv",
    wordCase: "персонал",
  });

  arrayCases.push({
    word: "Шлюб",
    caseValue: "nazyv",
    wordCase: "шлюб",
  });

  arrayCases.push({
    word: "Партнерство",
    caseValue: "nazyv",
    wordCase: "партнерство",
  });

  arrayCases.push({
    word: "Суди",
    caseValue: "nazyv",
    wordCase: "суди",
  });

  arrayCases.push({
    word: "Розлучення",
    caseValue: "nazyv",
    wordCase: "розлучення",
  });

  arrayCases.push({
    word: "Переродження",
    caseValue: "nazyv",
    wordCase: "переродження",
  });

  arrayCases.push({
    word: "Трансформація",
    caseValue: "nazyv",
    wordCase: "трансформація",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "nazyv",
    wordCase: "спадщина",
  });

  arrayCases.push({
    word: "Великі чужі гроші",
    caseValue: "nazyv",
    wordCase: "великі чужі гроші",
  });

  arrayCases.push({
    word: "Магія",
    caseValue: "nazyv",
    wordCase: "магія",
  });

  arrayCases.push({
    word: "Гіпноз",
    caseValue: "nazyv",
    wordCase: "гіпноз",
  });

  arrayCases.push({
    word: "Секс",
    caseValue: "nazyv",
    wordCase: "секс",
  });

  arrayCases.push({
    word: "Народження",
    caseValue: "nazyv",
    wordCase: "народження",
  });

  arrayCases.push({
    word: "Великі проблеми",
    caseValue: "nazyv",
    wordCase: "великі проблеми",
  });

  arrayCases.push({
    word: "Кризи та ризики",
    caseValue: "nazyv",
    wordCase: "кризи та ризики",
  });

  arrayCases.push({
    word: "Закордон",
    caseValue: "nazyv",
    wordCase: "закордон",
  });

  arrayCases.push({
    word: "Неформальна влада",
    caseValue: "nazyv",
    wordCase: "неформальна влада",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "nazyv",
    wordCase: "духовний розвиток",
  });

  arrayCases.push({
    word: "Світогляд",
    caseValue: "nazyv",
    wordCase: "світогляд",
  });

  arrayCases.push({
    word: "Мислення",
    caseValue: "nazyv",
    wordCase: "мислення",
  });

  arrayCases.push({
    word: "Філософія",
    caseValue: "nazyv",
    wordCase: "філософія",
  });

  arrayCases.push({
    word: "Релігіозність",
    caseValue: "nazyv",
    wordCase: "релігіозність",
  });

  arrayCases.push({
    word: "Мораль",
    caseValue: "nazyv",
    wordCase: "мораль",
  });

  arrayCases.push({
    word: "Вища освіта",
    caseValue: "nazyv",
    wordCase: "вища освіта",
  });

  arrayCases.push({
    word: "Етика",
    caseValue: "nazyv",
    wordCase: "етика",
  });

  arrayCases.push({
    word: "Наука",
    caseValue: "nazyv",
    wordCase: "наука",
  });

  arrayCases.push({
    word: "Стратегія",
    caseValue: "nazyv",
    wordCase: "стратегія",
  });

  arrayCases.push({
    word: "Соціальний статус",
    caseValue: "nazyv",
    wordCase: "соціальний статус",
  });

  arrayCases.push({
    word: "Моральні та матеріальні блага",
    caseValue: "nazyv",
    wordCase: "моральні та матеріальні блага",
  });

  arrayCases.push({
    word: "Посада",
    caseValue: "nazyv",
    wordCase: "посада",
  });

  arrayCases.push({
    word: "Авторитет",
    caseValue: "nazyv",
    wordCase: "авторитет",
  });

  arrayCases.push({
    word: "Репутація",
    caseValue: "nazyv",
    wordCase: "репутація",
  });

  arrayCases.push({
    word: "Політика",
    caseValue: "nazyv",
    wordCase: "політика",
  });

  arrayCases.push({
    word: "Друзі",
    caseValue: "nazyv",
    wordCase: "друзі",
  });

  arrayCases.push({
    word: "Колективна творчість",
    caseValue: "nazyv",
    wordCase: "колективна творчість",
  });

  arrayCases.push({
    word: "Єдинодумці",
    caseValue: "nazyv",
    wordCase: "єдинодумці",
  });

  arrayCases.push({
    word: "Тусовка",
    caseValue: "nazyv",
    wordCase: "тусовка",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "nazyv",
    wordCase: "навчання",
  });

  arrayCases.push({
    word: "Надії та плани",
    caseValue: "nazyv",
    wordCase: "надії та плани",
  });

  arrayCases.push({
    word: "Майбутнє",
    caseValue: "nazyv",
    wordCase: "майбутнє",
  });

  arrayCases.push({
    word: "Творчість",
    caseValue: "nazyv",
    wordCase: "творчість",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "nazyv",
    wordCase: "духовний розвиток",
  });

  arrayCases.push({
    word: "Благодійність",
    caseValue: "nazyv",
    wordCase: "благодійність",
  });

  arrayCases.push({
    word: "Випробування долі",
    caseValue: "nazyv",
    wordCase: "випробування долі",
  });

  arrayCases.push({
    word: "Приховані вороги",
    caseValue: "nazyv",
    wordCase: "приховані вороги",
  });

  arrayCases.push({
    word: "Заточення",
    caseValue: "nazyv",
    wordCase: "заточення",
  });

  arrayCases.push({
    word: "Хвороби",
    caseValue: "nazyv",
    wordCase: "хвороби",
  });

  arrayCases.push({
    word: "Нещасні випадки",
    caseValue: "nazyv",
    wordCase: "нещасні випадки",
  });

  arrayCases.push({
    word: "Служіння",
    caseValue: "nazyv",
    wordCase: "служіння",
  });

  arrayCases.push({
    word: "Нетрадиційна медицина",
    caseValue: "nazyv",
    wordCase: "нетрадиційна медицина",
  });

  arrayCases.push({
    word: "Акторська майстерність",
    caseValue: "nazyv",
    wordCase: "акторська майстерність",
  });

  arrayCases.push({
    word: "Відчуття світу",
    caseValue: "nazyv",
    wordCase: "відчуття світу",
  });

  arrayCases.push({
    word: "Езотерика",
    caseValue: "nazyv",
    wordCase: "езотерика",
  });

  arrayCases.push({
    word: "Я",
    caseValue: "rodov",
    wordCase: "мене",
  });

  arrayCases.push({
    word: "Моє проявлення себе в соціумі",
    caseValue: "rodov",
    wordCase: "мого проявлення себе в соціумі",
  });

  arrayCases.push({
    word: "Мій зовнішній вигляд",
    caseValue: "rodov",
    wordCase: "мого зовнішнього вигляду",
  });

  arrayCases.push({
    word: "Мої починання",
    caseValue: "rodov",
    wordCase: "моїх починань",
  });

  arrayCases.push({
    word: "Як мене соціум зчитує",
    caseValue: "rodov",
    wordCase: "як мене соціум зчитує",
  });

  arrayCases.push({
    word: "Блага",
    caseValue: "rodov",
    wordCase: "блага",
  });

  arrayCases.push({
    word: "Матеріальні цінності",
    caseValue: "rodov",
    wordCase: "матеріальних цінностей",
  });

  arrayCases.push({
    word: "Фінанси",
    caseValue: "rodov",
    wordCase: "фінансів",
  });

  arrayCases.push({
    word: "Мої гроші",
    caseValue: "rodov",
    wordCase: "моїх грошей",
  });

  arrayCases.push({
    word: "Мої статки",
    caseValue: "rodov",
    wordCase: "моїх статків",
  });

  arrayCases.push({
    word: "Ситуації заробітку грошей та накоплення ресурсів своєю працею",
    caseValue: "rodov",
    wordCase: "ситуацій заробітку грошей та накоплення ресурсів своєю працею",
  });

  arrayCases.push({
    word: "Запас сил",
    caseValue: "rodov",
    wordCase: "запасу сил",
  });

  arrayCases.push({
    word: "Інтелект",
    caseValue: "rodov",
    wordCase: "інтелекту",
  });

  arrayCases.push({
    word: "Пізнання",
    caseValue: "rodov",
    wordCase: "пізнання",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "rodov",
    wordCase: "навчання",
  });

  arrayCases.push({
    word: "Близьке оточення",
    caseValue: "rodov",
    wordCase: "близького оточення",
  });

  arrayCases.push({
    word: "Брати/сестри",
    caseValue: "rodov",
    wordCase: "братів/сестер",
  });

  arrayCases.push({
    word: "Переміщення",
    caseValue: "rodov",
    wordCase: "переміщення",
  });

  arrayCases.push({
    word: "Короткі подорожі",
    caseValue: "rodov",
    wordCase: "коротких подорожів",
  });

  arrayCases.push({
    word: "Батьківський дім",
    caseValue: "rodov",
    wordCase: "батьківського дому",
  });

  arrayCases.push({
    word: "Батьки",
    caseValue: "rodov",
    wordCase: "батьків",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "rodov",
    wordCase: "спадщини",
  });

  arrayCases.push({
    word: "Домівка",
    caseValue: "rodov",
    wordCase: "домівки",
  });

  arrayCases.push({
    word: "Сімейність",
    caseValue: "rodov",
    wordCase: "сімейності",
  });

  arrayCases.push({
    word: "Родове коріння",
    caseValue: "rodov",
    wordCase: "родового коріння",
  });

  arrayCases.push({
    word: "Дом серця",
    caseValue: "rodov",
    wordCase: "дому серця",
  });

  arrayCases.push({
    word: "Випадкові позашлюбні зв'язки",
    caseValue: "rodov",
    wordCase: "випадкових позашлюбних зв'язків",
  });

  arrayCases.push({
    word: "Пристрасті",
    caseValue: "rodov",
    wordCase: "пристрастей",
  });

  arrayCases.push({
    word: "Пригоди",
    caseValue: "rodov",
    wordCase: "пригод",
  });

  arrayCases.push({
    word: "Любов",
    caseValue: "rodov",
    wordCase: "любові",
  });

  arrayCases.push({
    word: "Діти",
    caseValue: "rodov",
    wordCase: "дітей",
  });

  arrayCases.push({
    word: "Розваги",
    caseValue: "rodov",
    wordCase: "розваг",
  });

  arrayCases.push({
    word: "Ігри",
    caseValue: "rodov",
    wordCase: "ігор",
  });

  arrayCases.push({
    word: "Дозвілля",
    caseValue: "rodov",
    wordCase: "дозвілля",
  });

  arrayCases.push({
    word: "Здоров'я",
    caseValue: "rodov",
    wordCase: "здоров'я",
  });

  arrayCases.push({
    word: "Набуті хвороби",
    caseValue: "rodov",
    wordCase: "набутих хвороб",
  });

  arrayCases.push({
    word: "Трудова діяльність",
    caseValue: "rodov",
    wordCase: "трудової діяльності",
  });

  arrayCases.push({
    word: "Робота",
    caseValue: "rodov",
    wordCase: "роботи",
  });

  arrayCases.push({
    word: "Корисність",
    caseValue: "rodov",
    wordCase: "користності",
  });

  arrayCases.push({
    word: "Борги",
    caseValue: "rodov",
    wordCase: "боргів",
  });

  arrayCases.push({
    word: "Домашні тварини",
    caseValue: "rodov",
    wordCase: "домашніх тварин",
  });

  arrayCases.push({
    word: "Персонал",
    caseValue: "rodov",
    wordCase: "персоналу",
  });

  arrayCases.push({
    word: "Шлюб",
    caseValue: "rodov",
    wordCase: "шлюбу",
  });

  arrayCases.push({
    word: "Партнерство",
    caseValue: "rodov",
    wordCase: "партнерства",
  });

  arrayCases.push({
    word: "Суди",
    caseValue: "rodov",
    wordCase: "судів",
  });

  arrayCases.push({
    word: "Розлучення",
    caseValue: "rodov",
    wordCase: "розлучення",
  });

  arrayCases.push({
    word: "Переродження",
    caseValue: "rodov",
    wordCase: "переродження",
  });

  arrayCases.push({
    word: "Трансформація",
    caseValue: "rodov",
    wordCase: "трансформації",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "rodov",
    wordCase: "спадщини",
  });

  arrayCases.push({
    word: "Великі чужі гроші",
    caseValue: "rodov",
    wordCase: "великих чужих грошей",
  });

  arrayCases.push({
    word: "Магія",
    caseValue: "rodov",
    wordCase: "магії",
  });

  arrayCases.push({
    word: "Гіпноз",
    caseValue: "rodov",
    wordCase: "гіпнозу",
  });

  arrayCases.push({
    word: "Секс",
    caseValue: "rodov",
    wordCase: "сексу",
  });

  arrayCases.push({
    word: "Народження",
    caseValue: "rodov",
    wordCase: "народження",
  });

  arrayCases.push({
    word: "Великі проблеми",
    caseValue: "rodov",
    wordCase: "великих проблем",
  });

  arrayCases.push({
    word: "Кризи та ризики",
    caseValue: "rodov",
    wordCase: "криз та ризиків",
  });

  arrayCases.push({
    word: "Закордон",
    caseValue: "rodov",
    wordCase: "закордону",
  });

  arrayCases.push({
    word: "Неформальна влада",
    caseValue: "rodov",
    wordCase: "неформальної влади",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "rodov",
    wordCase: "духовного розвитку",
  });

  arrayCases.push({
    word: "Світогляд",
    caseValue: "rodov",
    wordCase: "світогляду",
  });

  arrayCases.push({
    word: "Мислення",
    caseValue: "rodov",
    wordCase: "мислення",
  });

  arrayCases.push({
    word: "Філософія",
    caseValue: "rodov",
    wordCase: "філософії",
  });

  arrayCases.push({
    word: "Релігіозність",
    caseValue: "rodov",
    wordCase: "релігіозності",
  });

  arrayCases.push({
    word: "Мораль",
    caseValue: "rodov",
    wordCase: "моралі",
  });

  arrayCases.push({
    word: "Вища освіта",
    caseValue: "rodov",
    wordCase: "вищої освіти",
  });

  arrayCases.push({
    word: "Етика",
    caseValue: "rodov",
    wordCase: "етики",
  });

  arrayCases.push({
    word: "Наука",
    caseValue: "rodov",
    wordCase: "науки",
  });

  arrayCases.push({
    word: "Стратегія",
    caseValue: "rodov",
    wordCase: "стратегії",
  });

  arrayCases.push({
    word: "Соціальний статус",
    caseValue: "rodov",
    wordCase: "соціального статусу",
  });

  arrayCases.push({
    word: "Моральні та матеріальні блага",
    caseValue: "rodov",
    wordCase: "моральних та матеріальних благ",
  });

  arrayCases.push({
    word: "Посада",
    caseValue: "rodov",
    wordCase: "посади",
  });

  arrayCases.push({
    word: "Авторитет",
    caseValue: "rodov",
    wordCase: "авторитету",
  });

  arrayCases.push({
    word: "Репутація",
    caseValue: "rodov",
    wordCase: "репутації",
  });

  arrayCases.push({
    word: "Політика",
    caseValue: "rodov",
    wordCase: "політики",
  });

  arrayCases.push({
    word: "Друзі",
    caseValue: "rodov",
    wordCase: "друзів",
  });

  arrayCases.push({
    word: "Колективна творчість",
    caseValue: "rodov",
    wordCase: "колективної творчості",
  });

  arrayCases.push({
    word: "Єдинодумці",
    caseValue: "rodov",
    wordCase: "єдинодумців",
  });

  arrayCases.push({
    word: "Тусовка",
    caseValue: "rodov",
    wordCase: "тусовки",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "rodov",
    wordCase: "навчання",
  });

  arrayCases.push({
    word: "Надії та плани",
    caseValue: "rodov",
    wordCase: "надій та планів",
  });

  arrayCases.push({
    word: "Майбутнє",
    caseValue: "rodov",
    wordCase: "майбутнього",
  });

  arrayCases.push({
    word: "Творчість",
    caseValue: "rodov",
    wordCase: "творчості",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "rodov",
    wordCase: "духовного розвитку",
  });

  arrayCases.push({
    word: "Благодійність",
    caseValue: "rodov",
    wordCase: "благодійності",
  });

  arrayCases.push({
    word: "Випробування долі",
    caseValue: "rodov",
    wordCase: "випробування долі",
  });

  arrayCases.push({
    word: "Приховані вороги",
    caseValue: "rodov",
    wordCase: "прихованих ворогів",
  });

  arrayCases.push({
    word: "Заточення",
    caseValue: "rodov",
    wordCase: "заточення",
  });

  arrayCases.push({
    word: "Хвороби",
    caseValue: "rodov",
    wordCase: "хвороб",
  });

  arrayCases.push({
    word: "Нещасні випадки",
    caseValue: "rodov",
    wordCase: "нещасних випадків",
  });

  arrayCases.push({
    word: "Служіння",
    caseValue: "rodov",
    wordCase: "служіння",
  });

  arrayCases.push({
    word: "Нетрадиційна медицина",
    caseValue: "rodov",
    wordCase: "нетрадиційної медицини",
  });

  arrayCases.push({
    word: "Акторська майстерність",
    caseValue: "rodov",
    wordCase: "акторської майстерності",
  });

  arrayCases.push({
    word: "Відчуття світу",
    caseValue: "rodov",
    wordCase: "відчуття світу",
  });

  arrayCases.push({
    word: "Езотерика",
    caseValue: "rodov",
    wordCase: "езотерики",
  });

  arrayCases.push({
    word: "Я",
    caseValue: "davaln",
    wordCase: "мені",
  });

  arrayCases.push({
    word: "Моє проявлення себе в соціумі",
    caseValue: "davaln",
    wordCase: "моєму проявленню себе в соціумі",
  });

  arrayCases.push({
    word: "Мій зовнішній вигляд",
    caseValue: "davaln",
    wordCase: "моєму зовнішньому вигляду",
  });

  arrayCases.push({
    word: "Мої починання",
    caseValue: "davaln",
    wordCase: "моїм починанням",
  });

  arrayCases.push({
    word: "Як мене соціум зчитує",
    caseValue: "davaln",
    wordCase: "як мене соціум зчитує",
  });

  arrayCases.push({
    word: "Блага",
    caseValue: "davaln",
    wordCase: "благам",
  });

  arrayCases.push({
    word: "Матеріальні цінності",
    caseValue: "davaln",
    wordCase: "матеріальним цінностям",
  });

  arrayCases.push({
    word: "Фінанси",
    caseValue: "davaln",
    wordCase: "фінансам",
  });

  arrayCases.push({
    word: "Мої гроші",
    caseValue: "davaln",
    wordCase: "моїм грошам",
  });

  arrayCases.push({
    word: "Мої статки",
    caseValue: "davaln",
    wordCase: "моїм статкам",
  });

  arrayCases.push({
    word: "Ситуації заробітку грошей та накоплення ресурсів своєю працею",
    caseValue: "davaln",
    wordCase: "ситуаціям заробітку грошей та накоплення ресурсів своєю працею",
  });

  arrayCases.push({
    word: "Запас сил",
    caseValue: "davaln",
    wordCase: "запасу сил",
  });

  arrayCases.push({
    word: "Інтелект",
    caseValue: "davaln",
    wordCase: "інтелекту",
  });

  arrayCases.push({
    word: "Пізнання",
    caseValue: "davaln",
    wordCase: "пізнанню",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "davaln",
    wordCase: "навчанню",
  });

  arrayCases.push({
    word: "Близьке оточення",
    caseValue: "davaln",
    wordCase: "близькому оточенню",
  });

  arrayCases.push({
    word: "Брати/сестри",
    caseValue: "davaln",
    wordCase: "братам/сестрам",
  });

  arrayCases.push({
    word: "Переміщення",
    caseValue: "davaln",
    wordCase: "переміщенню",
  });

  arrayCases.push({
    word: "Короткі подорожі",
    caseValue: "davaln",
    wordCase: "коротким подорожам",
  });

  arrayCases.push({
    word: "Батьківський дім",
    caseValue: "davaln",
    wordCase: "батьківському дому",
  });

  arrayCases.push({
    word: "Батьки",
    caseValue: "davaln",
    wordCase: "батькам",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "davaln",
    wordCase: "спадщині",
  });

  arrayCases.push({
    word: "Домівка",
    caseValue: "davaln",
    wordCase: "домівці",
  });

  arrayCases.push({
    word: "Сімейність",
    caseValue: "davaln",
    wordCase: "сімейності",
  });

  arrayCases.push({
    word: "Родове коріння",
    caseValue: "davaln",
    wordCase: "родовому корінню",
  });

  arrayCases.push({
    word: "Дом серця",
    caseValue: "davaln",
    wordCase: "дому серця",
  });

  arrayCases.push({
    word: "Випадкові позашлюбні зв'язки",
    caseValue: "davaln",
    wordCase: "випадковим позашлюбним зв'язкам",
  });

  arrayCases.push({
    word: "Пристрасті",
    caseValue: "davaln",
    wordCase: "пристрастям",
  });

  arrayCases.push({
    word: "Пригоди",
    caseValue: "davaln",
    wordCase: "пригодам",
  });

  arrayCases.push({
    word: "Любов",
    caseValue: "davaln",
    wordCase: "любові",
  });

  arrayCases.push({
    word: "Діти",
    caseValue: "davaln",
    wordCase: "дітям",
  });

  arrayCases.push({
    word: "Розваги",
    caseValue: "davaln",
    wordCase: "розвагам",
  });

  arrayCases.push({
    word: "Ігри",
    caseValue: "davaln",
    wordCase: "іграм",
  });

  arrayCases.push({
    word: "Дозвілля",
    caseValue: "davaln",
    wordCase: "дозвіллю",
  });

  arrayCases.push({
    word: "Здоров'я",
    caseValue: "davaln",
    wordCase: "Здоров'ю",
  });

  arrayCases.push({
    word: "Набуті хвороби",
    caseValue: "davaln",
    wordCase: "набутим хворобам",
  });

  arrayCases.push({
    word: "Трудова діяльність",
    caseValue: "davaln",
    wordCase: "трудовій діяльності",
  });

  arrayCases.push({
    word: "Робота",
    caseValue: "davaln",
    wordCase: "роботі",
  });

  arrayCases.push({
    word: "Корисність",
    caseValue: "davaln",
    wordCase: "корисності",
  });

  arrayCases.push({
    word: "Борги",
    caseValue: "davaln",
    wordCase: "боргам",
  });

  arrayCases.push({
    word: "Домашні тварини",
    caseValue: "davaln",
    wordCase: "домашнім тваринам",
  });

  arrayCases.push({
    word: "Персонал",
    caseValue: "davaln",
    wordCase: "персоналу",
  });

  arrayCases.push({
    word: "Шлюб",
    caseValue: "davaln",
    wordCase: "шлюбу",
  });

  arrayCases.push({
    word: "Партнерство",
    caseValue: "davaln",
    wordCase: "партнерству",
  });

  arrayCases.push({
    word: "Суди",
    caseValue: "davaln",
    wordCase: "судам",
  });

  arrayCases.push({
    word: "Розлучення",
    caseValue: "davaln",
    wordCase: "розлученню",
  });

  arrayCases.push({
    word: "Переродження",
    caseValue: "davaln",
    wordCase: "переродженню",
  });

  arrayCases.push({
    word: "Трансформація",
    caseValue: "davaln",
    wordCase: "трансформації",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "davaln",
    wordCase: "спадщині",
  });

  arrayCases.push({
    word: "Великі чужі гроші",
    caseValue: "davaln",
    wordCase: "великим чужим грошам",
  });

  arrayCases.push({
    word: "Магія",
    caseValue: "davaln",
    wordCase: "магії",
  });

  arrayCases.push({
    word: "Гіпноз",
    caseValue: "davaln",
    wordCase: "гіпнозу",
  });

  arrayCases.push({
    word: "Секс",
    caseValue: "davaln",
    wordCase: "сексу",
  });

  arrayCases.push({
    word: "Народження",
    caseValue: "davaln",
    wordCase: "народженню",
  });

  arrayCases.push({
    word: "Великі проблеми",
    caseValue: "davaln",
    wordCase: "великим проблемам",
  });

  arrayCases.push({
    word: "Кризи та ризики",
    caseValue: "davaln",
    wordCase: "кризам та ризикам",
  });

  arrayCases.push({
    word: "Закордон",
    caseValue: "davaln",
    wordCase: "закордону",
  });

  arrayCases.push({
    word: "Неформальна влада",
    caseValue: "davaln",
    wordCase: "неформальній владі",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "davaln",
    wordCase: "духовному розвитку",
  });

  arrayCases.push({
    word: "Світогляд",
    caseValue: "davaln",
    wordCase: "світогляду",
  });

  arrayCases.push({
    word: "Мислення",
    caseValue: "davaln",
    wordCase: "мисленню",
  });

  arrayCases.push({
    word: "Філософія",
    caseValue: "davaln",
    wordCase: "філософії",
  });

  arrayCases.push({
    word: "Релігіозність",
    caseValue: "davaln",
    wordCase: "релігіозності",
  });

  arrayCases.push({
    word: "Мораль",
    caseValue: "davaln",
    wordCase: "моралі",
  });

  arrayCases.push({
    word: "Вища освіта",
    caseValue: "davaln",
    wordCase: "вищій освіті",
  });

  arrayCases.push({
    word: "Етика",
    caseValue: "davaln",
    wordCase: "етиці",
  });

  arrayCases.push({
    word: "Наука",
    caseValue: "davaln",
    wordCase: "науці",
  });

  arrayCases.push({
    word: "Стратегія",
    caseValue: "davaln",
    wordCase: "стратегії",
  });

  arrayCases.push({
    word: "Соціальний статус",
    caseValue: "davaln",
    wordCase: "соціальному статусу",
  });

  arrayCases.push({
    word: "Моральні та матеріальні блага",
    caseValue: "davaln",
    wordCase: "моральним та матеріальним благам",
  });

  arrayCases.push({
    word: "Посада",
    caseValue: "davaln",
    wordCase: "посаді",
  });

  arrayCases.push({
    word: "Авторитет",
    caseValue: "davaln",
    wordCase: "авторитету",
  });

  arrayCases.push({
    word: "Репутація",
    caseValue: "davaln",
    wordCase: "репутації",
  });

  arrayCases.push({
    word: "Політика",
    caseValue: "davaln",
    wordCase: "політиці",
  });

  arrayCases.push({
    word: "Друзі",
    caseValue: "davaln",
    wordCase: "друзям",
  });

  arrayCases.push({
    word: "Колективна творчість",
    caseValue: "davaln",
    wordCase: "колективній творчості",
  });

  arrayCases.push({
    word: "Єдинодумці",
    caseValue: "davaln",
    wordCase: "єдинодумцям",
  });

  arrayCases.push({
    word: "Тусовка",
    caseValue: "davaln",
    wordCase: "тусовці",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "davaln",
    wordCase: "навчанню",
  });

  arrayCases.push({
    word: "Надії та плани",
    caseValue: "davaln",
    wordCase: "надія та планам",
  });

  arrayCases.push({
    word: "Майбутнє",
    caseValue: "davaln",
    wordCase: "майбутньому",
  });

  arrayCases.push({
    word: "Творчість",
    caseValue: "davaln",
    wordCase: "творчості",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "davaln",
    wordCase: "духовному розвитку",
  });

  arrayCases.push({
    word: "Благодійність",
    caseValue: "davaln",
    wordCase: "благодійності",
  });

  arrayCases.push({
    word: "Випробування долі",
    caseValue: "davaln",
    wordCase: "випробуванням долі",
  });

  arrayCases.push({
    word: "Приховані вороги",
    caseValue: "davaln",
    wordCase: "прихованим ворогам",
  });

  arrayCases.push({
    word: "Заточення",
    caseValue: "davaln",
    wordCase: "заточенню",
  });

  arrayCases.push({
    word: "Хвороби",
    caseValue: "davaln",
    wordCase: "хворобам",
  });

  arrayCases.push({
    word: "Нещасні випадки",
    caseValue: "davaln",
    wordCase: "нещасним випадкам",
  });

  arrayCases.push({
    word: "Служіння",
    caseValue: "davaln",
    wordCase: "служінню",
  });

  arrayCases.push({
    word: "Нетрадиційна медицина",
    caseValue: "davaln",
    wordCase: "нетрадиційній медицині",
  });

  arrayCases.push({
    word: "Акторська майстерність",
    caseValue: "davaln",
    wordCase: "акторській майстерності",
  });

  arrayCases.push({
    word: "Відчуття світу",
    caseValue: "davaln",
    wordCase: "відчуттю світу",
  });

  arrayCases.push({
    word: "Езотерика",
    caseValue: "davaln",
    wordCase: "езотериці",
  });

  arrayCases.push({
    word: "Я",
    caseValue: "znahid",
    wordCase: "себе",
  });

  arrayCases.push({
    word: "Моє проявлення себе в соціумі",
    caseValue: "znahid",
    wordCase: "моє проявлення себе в соціумі",
  });

  arrayCases.push({
    word: "Мій зовнішній вигляд",
    caseValue: "znahid",
    wordCase: "мій зовнішній вигляд",
  });

  arrayCases.push({
    word: "Мої починання",
    caseValue: "znahid",
    wordCase: "мої починання",
  });

  arrayCases.push({
    word: "Як мене соціум зчитує",
    caseValue: "znahid",
    wordCase: "як мене соціум зчитує",
  });

  arrayCases.push({
    word: "Блага",
    caseValue: "znahid",
    wordCase: "блага",
  });

  arrayCases.push({
    word: "Матеріальні цінності",
    caseValue: "znahid",
    wordCase: "матеріальні цінності",
  });

  arrayCases.push({
    word: "Фінанси",
    caseValue: "znahid",
    wordCase: "фінанси",
  });

  arrayCases.push({
    word: "Мої гроші",
    caseValue: "znahid",
    wordCase: "мої гроші",
  });

  arrayCases.push({
    word: "Мої статки",
    caseValue: "znahid",
    wordCase: "мої статки",
  });

  arrayCases.push({
    word: "Ситуації заробітку грошей та накоплення ресурсів своєю працею",
    caseValue: "znahid",
    wordCase: "ситуації заробітку грошей та накоплення ресурсів своєю працею",
  });

  arrayCases.push({
    word: "Запас сил",
    caseValue: "znahid",
    wordCase: "запас сил",
  });

  arrayCases.push({
    word: "Інтелект",
    caseValue: "znahid",
    wordCase: "інтелект",
  });

  arrayCases.push({
    word: "Пізнання",
    caseValue: "znahid",
    wordCase: "пізнання",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "znahid",
    wordCase: "навчання",
  });

  arrayCases.push({
    word: "Близьке оточення",
    caseValue: "znahid",
    wordCase: "близьке оточення",
  });

  arrayCases.push({
    word: "Близьке оточення",
    caseValue: "znahid",
    wordCase: "близьке оточення",
  });

  arrayCases.push({
    word: "Брати/сестри",
    caseValue: "znahid",
    wordCase: "братів/сестер",
  });

  arrayCases.push({
    word: "Переміщення",
    caseValue: "znahid",
    wordCase: "переміщення",
  });

  arrayCases.push({
    word: "Короткі подорожі",
    caseValue: "znahid",
    wordCase: "короткі подорожі",
  });

  arrayCases.push({
    word: "Батьківський дім",
    caseValue: "znahid",
    wordCase: "батьківський дім",
  });

  arrayCases.push({
    word: "Батьки",
    caseValue: "znahid",
    wordCase: "батьків",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "znahid",
    wordCase: "спадщину",
  });

  arrayCases.push({
    word: "Домівка",
    caseValue: "znahid",
    wordCase: "домівку",
  });

  arrayCases.push({
    word: "Сімейність",
    caseValue: "znahid",
    wordCase: "сімейність",
  });

  arrayCases.push({
    word: "Родове коріння",
    caseValue: "znahid",
    wordCase: "родове коріння",
  });

  arrayCases.push({
    word: "Дом серця",
    caseValue: "znahid",
    wordCase: "дом серця",
  });

  arrayCases.push({
    word: "Випадкові позашлюбні зв'язки",
    caseValue: "znahid",
    wordCase: "випадкові позашлюбні зв'язки",
  });

  arrayCases.push({
    word: "Пристрасті",
    caseValue: "znahid",
    wordCase: "пристрасті",
  });

  arrayCases.push({
    word: "Пригоди",
    caseValue: "znahid",
    wordCase: "пригоди",
  });

  arrayCases.push({
    word: "Любов",
    caseValue: "znahid",
    wordCase: "любов",
  });

  arrayCases.push({
    word: "Діти",
    caseValue: "znahid",
    wordCase: "дітей",
  });

  arrayCases.push({
    word: "Розваги",
    caseValue: "znahid",
    wordCase: "розваги",
  });

  arrayCases.push({
    word: "Ігри",
    caseValue: "znahid",
    wordCase: "ігри",
  });

  arrayCases.push({
    word: "Дозвілля",
    caseValue: "znahid",
    wordCase: "дозвілля",
  });

  arrayCases.push({
    word: "Здоров'я",
    caseValue: "znahid",
    wordCase: "здоров'я",
  });

  arrayCases.push({
    word: "Набуті хвороби",
    caseValue: "znahid",
    wordCase: "набуті хвороби",
  });

  arrayCases.push({
    word: "Трудова діяльність",
    caseValue: "znahid",
    wordCase: "трудову діяльність",
  });

  arrayCases.push({
    word: "Робота",
    caseValue: "znahid",
    wordCase: "робота",
  });

  arrayCases.push({
    word: "Корисність",
    caseValue: "znahid",
    wordCase: "корисність",
  });

  arrayCases.push({
    word: "Борги",
    caseValue: "znahid",
    wordCase: "борги",
  });

  arrayCases.push({
    word: "Домашні тварини",
    caseValue: "znahid",
    wordCase: "домашніх тварин",
  });

  arrayCases.push({
    word: "Персонал",
    caseValue: "znahid",
    wordCase: "персонал",
  });

  arrayCases.push({
    word: "Шлюб",
    caseValue: "znahid",
    wordCase: "шлюб",
  });

  arrayCases.push({
    word: "Партнерство",
    caseValue: "znahid",
    wordCase: "партнерство",
  });

  arrayCases.push({
    word: "Суди",
    caseValue: "znahid",
    wordCase: "суди",
  });

  arrayCases.push({
    word: "Розлучення",
    caseValue: "znahid",
    wordCase: "розлучення",
  });

  arrayCases.push({
    word: "Переродження",
    caseValue: "znahid",
    wordCase: "переродження",
  });

  arrayCases.push({
    word: "Трансформація",
    caseValue: "znahid",
    wordCase: "трансформацію",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "znahid",
    wordCase: "спадщину",
  });

  arrayCases.push({
    word: "Великі чужі гроші",
    caseValue: "znahid",
    wordCase: "великі чужі гроші",
  });

  arrayCases.push({
    word: "Магія",
    caseValue: "znahid",
    wordCase: "магію",
  });

  arrayCases.push({
    word: "Гіпноз",
    caseValue: "znahid",
    wordCase: "гіпноз",
  });

  arrayCases.push({
    word: "Секс",
    caseValue: "znahid",
    wordCase: "секс",
  });

  arrayCases.push({
    word: "Народження",
    caseValue: "znahid",
    wordCase: "народження",
  });

  arrayCases.push({
    word: "Великі проблеми",
    caseValue: "znahid",
    wordCase: "великі проблеми",
  });

  arrayCases.push({
    word: "Кризи та ризики",
    caseValue: "znahid",
    wordCase: "кризи та ризики",
  });

  arrayCases.push({
    word: "Закордон",
    caseValue: "znahid",
    wordCase: "закордон",
  });

  arrayCases.push({
    word: "Неформальна влада",
    caseValue: "znahid",
    wordCase: "неформальну владу",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "znahid",
    wordCase: "духовний розвиток",
  });

  arrayCases.push({
    word: "Світогляд",
    caseValue: "znahid",
    wordCase: "світогляд",
  });

  arrayCases.push({
    word: "Мислення",
    caseValue: "znahid",
    wordCase: "мислення",
  });

  arrayCases.push({
    word: "Філософія",
    caseValue: "znahid",
    wordCase: "філософію",
  });

  arrayCases.push({
    word: "Релігіозність",
    caseValue: "znahid",
    wordCase: "релігіозність",
  });

  arrayCases.push({
    word: "Мораль",
    caseValue: "znahid",
    wordCase: "мораль",
  });

  arrayCases.push({
    word: "Вища освіта",
    caseValue: "znahid",
    wordCase: "вищу освіту",
  });

  arrayCases.push({
    word: "Етика",
    caseValue: "znahid",
    wordCase: "етику",
  });

  arrayCases.push({
    word: "Наука",
    caseValue: "znahid",
    wordCase: "науку",
  });

  arrayCases.push({
    word: "Стратегія",
    caseValue: "znahid",
    wordCase: "стратегію",
  });

  arrayCases.push({
    word: "Соціальний статус",
    caseValue: "znahid",
    wordCase: "соціальний статус",
  });

  arrayCases.push({
    word: "Моральні та матеріальні блага",
    caseValue: "znahid",
    wordCase: "моральні та матеріальні блага",
  });

  arrayCases.push({
    word: "Посада",
    caseValue: "znahid",
    wordCase: "посаду",
  });

  arrayCases.push({
    word: "Авторитет",
    caseValue: "znahid",
    wordCase: "авторитет",
  });

  arrayCases.push({
    word: "Репутація",
    caseValue: "znahid",
    wordCase: "репутацію",
  });

  arrayCases.push({
    word: "Політика",
    caseValue: "znahid",
    wordCase: "політику",
  });

  arrayCases.push({
    word: "Друзі",
    caseValue: "znahid",
    wordCase: "друзів",
  });

  arrayCases.push({
    word: "Колективна творчість",
    caseValue: "znahid",
    wordCase: "колективну творчість",
  });

  arrayCases.push({
    word: "Єдинодумці",
    caseValue: "znahid",
    wordCase: "єдинодумців",
  });

  arrayCases.push({
    word: "Тусовка",
    caseValue: "znahid",
    wordCase: "тусовку",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "znahid",
    wordCase: "навчання",
  });

  arrayCases.push({
    word: "Надії та плани",
    caseValue: "znahid",
    wordCase: "надії та плани",
  });

  arrayCases.push({
    word: "Майбутнє",
    caseValue: "znahid",
    wordCase: "майбутнє",
  });

  arrayCases.push({
    word: "Творчість",
    caseValue: "znahid",
    wordCase: "творчість",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "znahid",
    wordCase: "духовний розвиток",
  });

  arrayCases.push({
    word: "Благодійність",
    caseValue: "znahid",
    wordCase: "благодійність",
  });

  arrayCases.push({
    word: "Випробування долі",
    caseValue: "znahid",
    wordCase: "випробування долі",
  });

  arrayCases.push({
    word: "Приховані вороги",
    caseValue: "znahid",
    wordCase: "прихованих ворогів",
  });

  arrayCases.push({
    word: "Заточення",
    caseValue: "znahid",
    wordCase: "заточення",
  });

  arrayCases.push({
    word: "Хвороби",
    caseValue: "znahid",
    wordCase: "хвороби",
  });

  arrayCases.push({
    word: "Нещасні випадки",
    caseValue: "znahid",
    wordCase: "нещасні випадки",
  });

  arrayCases.push({
    word: "Служіння",
    caseValue: "znahid",
    wordCase: "служіння",
  });

  arrayCases.push({
    word: "Нетрадиційна медицина",
    caseValue: "znahid",
    wordCase: "нетрадиційну медицину",
  });

  arrayCases.push({
    word: "Акторська майстерність",
    caseValue: "znahid",
    wordCase: "акторську майстерність",
  });

  arrayCases.push({
    word: "Відчуття світу",
    caseValue: "znahid",
    wordCase: "відчуття світу",
  });

  arrayCases.push({
    word: "Езотерика",
    caseValue: "znahid",
    wordCase: "езотерику",
  });

  arrayCases.push({
    word: "Я",
    caseValue: "orudn",
    wordCase: "собою",
  });

  arrayCases.push({
    word: "Моє проявлення себе в соціумі",
    caseValue: "orudn",
    wordCase: "моїм проявленням себе в соціумі",
  });

  arrayCases.push({
    word: "Мій зовнішній вигляд",
    caseValue: "orudn",
    wordCase: "моїм зовнішнім виглядом",
  });

  arrayCases.push({
    word: "Мої починання",
    caseValue: "orudn",
    wordCase: "моїми починаннями",
  });

  arrayCases.push({
    word: "Як мене соціум зчитує",
    caseValue: "orudn",
    wordCase: "як мене соціум зчитує",
  });

  arrayCases.push({
    word: "Блага",
    caseValue: "orudn",
    wordCase: "благами",
  });

  arrayCases.push({
    word: "Матеріальні цінності",
    caseValue: "orudn",
    wordCase: "матеріальними цінностями",
  });

  arrayCases.push({
    word: "Фінанси",
    caseValue: "orudn",
    wordCase: "фінансами",
  });

  arrayCases.push({
    word: "Мої гроші",
    caseValue: "orudn",
    wordCase: "моїми грошима",
  });

  arrayCases.push({
    word: "Мої статки",
    caseValue: "orudn",
    wordCase: "моїми статками",
  });

  arrayCases.push({
    word: "Ситуації заробітку грошей та накоплення ресурсів своєю працею",
    caseValue: "orudn",
    wordCase: "ситуаціями заробітку грошей та накоплення ресурсів своєю працею",
  });

  arrayCases.push({
    word: "Запас сил",
    caseValue: "orudn",
    wordCase: "запасом сил",
  });

  arrayCases.push({
    word: "Інтелект",
    caseValue: "orudn",
    wordCase: "інтелектом",
  });

  arrayCases.push({
    word: "Пізнання",
    caseValue: "orudn",
    wordCase: "пізнанням",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "orudn",
    wordCase: "навчанням",
  });

  arrayCases.push({
    word: "Близьке оточення",
    caseValue: "orudn",
    wordCase: "близьким оточенням",
  });

  arrayCases.push({
    word: "Брати/сестри",
    caseValue: "orudn",
    wordCase: "братами/сестрами",
  });

  arrayCases.push({
    word: "Переміщення",
    caseValue: "orudn",
    wordCase: "переміщенням",
  });

  arrayCases.push({
    word: "Короткі подорожі",
    caseValue: "orudn",
    wordCase: "короткими подорожами",
  });

  arrayCases.push({
    word: "Батьківський дім",
    caseValue: "orudn",
    wordCase: "батьківським домом",
  });

  arrayCases.push({
    word: "Батьки",
    caseValue: "orudn",
    wordCase: "батьками",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "orudn",
    wordCase: "спадщиною",
  });

  arrayCases.push({
    word: "Домівка",
    caseValue: "orudn",
    wordCase: "домівкою",
  });

  arrayCases.push({
    word: "Сімейність",
    caseValue: "orudn",
    wordCase: "сімейністью",
  });

  arrayCases.push({
    word: "Родове коріння",
    caseValue: "orudn",
    wordCase: "родовим корінням",
  });

  arrayCases.push({
    word: "Дом серця",
    caseValue: "orudn",
    wordCase: "домом серця",
  });

  arrayCases.push({
    word: "Випадкові позашлюбні зв'язки",
    caseValue: "orudn",
    wordCase: "випадковими позашлюбними зв'язками",
  });

  arrayCases.push({
    word: "Пристрасті",
    caseValue: "orudn",
    wordCase: "пристрастями",
  });

  arrayCases.push({
    word: "Пригоди",
    caseValue: "orudn",
    wordCase: "пригодами",
  });

  arrayCases.push({
    word: "Любов",
    caseValue: "orudn",
    wordCase: "любов'ю",
  });

  arrayCases.push({
    word: "Діти",
    caseValue: "orudn",
    wordCase: "дітьми",
  });

  arrayCases.push({
    word: "Розваги",
    caseValue: "orudn",
    wordCase: "розвагами",
  });

  arrayCases.push({
    word: "Ігри",
    caseValue: "orudn",
    wordCase: "іграми",
  });

  arrayCases.push({
    word: "Дозвілля",
    caseValue: "orudn",
    wordCase: "дозвіллям",
  });

  arrayCases.push({
    word: "Здоров'я",
    caseValue: "orudn",
    wordCase: "здоров'ям",
  });

  arrayCases.push({
    word: "Набуті хвороби",
    caseValue: "orudn",
    wordCase: "набутими хворобами",
  });

  arrayCases.push({
    word: "Трудова діяльність",
    caseValue: "orudn",
    wordCase: "трудовою діяльністю",
  });

  arrayCases.push({
    word: "Робота",
    caseValue: "orudn",
    wordCase: "роботою",
  });

  arrayCases.push({
    word: "Корисність",
    caseValue: "orudn",
    wordCase: "корисністю",
  });

  arrayCases.push({
    word: "Борги",
    caseValue: "orudn",
    wordCase: "боргами",
  });

  arrayCases.push({
    word: "Домашні тварини",
    caseValue: "orudn",
    wordCase: "домашніми тваринами",
  });

  arrayCases.push({
    word: "Персонал",
    caseValue: "orudn",
    wordCase: "персоналом",
  });

  arrayCases.push({
    word: "Шлюб",
    caseValue: "orudn",
    wordCase: "шлюбом",
  });

  arrayCases.push({
    word: "Партнерство",
    caseValue: "orudn",
    wordCase: "партнерством",
  });

  arrayCases.push({
    word: "Суди",
    caseValue: "orudn",
    wordCase: "судами",
  });

  arrayCases.push({
    word: "Розлучення",
    caseValue: "orudn",
    wordCase: "розлученням",
  });

  arrayCases.push({
    word: "Переродження",
    caseValue: "orudn",
    wordCase: "переродженням",
  });

  arrayCases.push({
    word: "Трансформація",
    caseValue: "orudn",
    wordCase: "трансформацією",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "orudn",
    wordCase: "спадщиною",
  });

  arrayCases.push({
    word: "Великі чужі гроші",
    caseValue: "orudn",
    wordCase: "великими чужими грошима",
  });

  arrayCases.push({
    word: "Магія",
    caseValue: "orudn",
    wordCase: "магією",
  });

  arrayCases.push({
    word: "Гіпноз",
    caseValue: "orudn",
    wordCase: "гіпнозом",
  });

  arrayCases.push({
    word: "Секс",
    caseValue: "orudn",
    wordCase: "сексом",
  });

  arrayCases.push({
    word: "Секс",
    caseValue: "orudn",
    wordCase: "сексом",
  });

  arrayCases.push({
    word: "Народження",
    caseValue: "orudn",
    wordCase: "народженням",
  });

  arrayCases.push({
    word: "Великі проблеми",
    caseValue: "orudn",
    wordCase: "великими проблемами",
  });

  arrayCases.push({
    word: "Кризи та ризики",
    caseValue: "orudn",
    wordCase: "кризами та ризиками",
  });

  arrayCases.push({
    word: "Закордон",
    caseValue: "orudn",
    wordCase: "закордоном",
  });

  arrayCases.push({
    word: "Неформальна влада",
    caseValue: "orudn",
    wordCase: "неформальною владою",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "orudn",
    wordCase: "духовним розвитком",
  });

  arrayCases.push({
    word: "Світогляд",
    caseValue: "orudn",
    wordCase: "світоглядом",
  });

  arrayCases.push({
    word: "Мислення",
    caseValue: "orudn",
    wordCase: "мисленням",
  });

  arrayCases.push({
    word: "Філософія",
    caseValue: "orudn",
    wordCase: "філософією",
  });

  arrayCases.push({
    word: "Релігіозність",
    caseValue: "orudn",
    wordCase: "релігіозністю",
  });

  arrayCases.push({
    word: "Мораль",
    caseValue: "orudn",
    wordCase: "мораллю",
  });

  arrayCases.push({
    word: "Вища освіта",
    caseValue: "orudn",
    wordCase: "вищою освітою",
  });

  arrayCases.push({
    word: "Етика",
    caseValue: "orudn",
    wordCase: "етикою",
  });

  arrayCases.push({
    word: "Наука",
    caseValue: "orudn",
    wordCase: "наукою",
  });

  arrayCases.push({
    word: "Стратегія",
    caseValue: "orudn",
    wordCase: "стратегією",
  });

  arrayCases.push({
    word: "Соціальний статус",
    caseValue: "orudn",
    wordCase: "соціальним статусом",
  });

  arrayCases.push({
    word: "Моральні та матеріальні блага",
    caseValue: "orudn",
    wordCase: "моральними та матеріальними благами",
  });

  arrayCases.push({
    word: "Посада",
    caseValue: "orudn",
    wordCase: "посадою",
  });

  arrayCases.push({
    word: "Авторитет",
    caseValue: "orudn",
    wordCase: "авторитетом",
  });

  arrayCases.push({
    word: "Репутація",
    caseValue: "orudn",
    wordCase: "репутацією",
  });

  arrayCases.push({
    word: "Політика",
    caseValue: "orudn",
    wordCase: "політикою",
  });

  arrayCases.push({
    word: "Друзі",
    caseValue: "orudn",
    wordCase: "друзями",
  });

  arrayCases.push({
    word: "Колективна творчість",
    caseValue: "orudn",
    wordCase: "колективною творчістю",
  });

  arrayCases.push({
    word: "Єдинодумці",
    caseValue: "orudn",
    wordCase: "єдинодумцями",
  });

  arrayCases.push({
    word: "Тусовка",
    caseValue: "orudn",
    wordCase: "тусовкою",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "orudn",
    wordCase: "навчанням",
  });

  arrayCases.push({
    word: "Надії та плани",
    caseValue: "orudn",
    wordCase: "надіями та планами",
  });

  arrayCases.push({
    word: "Майбутнє",
    caseValue: "orudn",
    wordCase: "майбутнім",
  });

  arrayCases.push({
    word: "Творчість",
    caseValue: "orudn",
    wordCase: "творчістю",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "orudn",
    wordCase: "духовним розвитком",
  });

  arrayCases.push({
    word: "Благодійність",
    caseValue: "orudn",
    wordCase: "благодійністю",
  });

  arrayCases.push({
    word: "Випробування долі",
    caseValue: "orudn",
    wordCase: "випробуваннями долі",
  });

  arrayCases.push({
    word: "Приховані вороги",
    caseValue: "orudn",
    wordCase: "прихованими ворогами",
  });

  arrayCases.push({
    word: "Заточення",
    caseValue: "orudn",
    wordCase: "заточенням",
  });

  arrayCases.push({
    word: "Хвороби",
    caseValue: "orudn",
    wordCase: "хворобами",
  });

  arrayCases.push({
    word: "Нещасні випадки",
    caseValue: "orudn",
    wordCase: "нещасними випадками",
  });

  arrayCases.push({
    word: "Служіння",
    caseValue: "orudn",
    wordCase: "служінням",
  });

  arrayCases.push({
    word: "Нетрадиційна медицина",
    caseValue: "orudn",
    wordCase: "нетрадиційною медициною",
  });

  arrayCases.push({
    word: "Акторська майстерність",
    caseValue: "orudn",
    wordCase: "акторською майстерністю",
  });

  arrayCases.push({
    word: "Відчуття світу",
    caseValue: "orudn",
    wordCase: "відчуттям світу",
  });

  arrayCases.push({
    word: "Езотерика",
    caseValue: "orudn",
    wordCase: "езотерикою",
  });

  arrayCases.push({
    word: "Я",
    caseValue: "miscev",
    wordCase: "собі",
  });

  arrayCases.push({
    word: "Моє проявлення себе в соціумі",
    caseValue: "miscev",
    wordCase: "моєму проявленні себе в соціумі",
  });

  arrayCases.push({
    word: "Мій зовнішній вигляд",
    caseValue: "miscev",
    wordCase: "моєму зовнішньому вигляді",
  });

  arrayCases.push({
    word: "Мої починання",
    caseValue: "miscev",
    wordCase: "моїх починаннях",
  });

  arrayCases.push({
    word: "Як мене соціум зчитує",
    caseValue: "miscev",
    wordCase: "як мене соціум зчитує",
  });

  arrayCases.push({
    word: "Блага",
    caseValue: "miscev",
    wordCase: "благах",
  });

  arrayCases.push({
    word: "Матеріальні цінності",
    caseValue: "miscev",
    wordCase: "матеріальних цінностях",
  });

  arrayCases.push({
    word: "Фінанси",
    caseValue: "miscev",
    wordCase: "фінансах",
  });

  arrayCases.push({
    word: "Мої гроші",
    caseValue: "miscev",
    wordCase: "моїх грошах",
  });

  arrayCases.push({
    word: "Мої статки",
    caseValue: "miscev",
    wordCase: "моїх статках",
  });

  arrayCases.push({
    word: "Ситуації заробітку грошей та накоплення ресурсів своєю працею",
    caseValue: "miscev",
    wordCase: "ситуаціях заробітку грошей та накоплення ресурсів своєю працею",
  });

  arrayCases.push({
    word: "Запас сил",
    caseValue: "miscev",
    wordCase: "запасі сил",
  });

  arrayCases.push({
    word: "Інтелект",
    caseValue: "miscev",
    wordCase: "інтелекті",
  });

  arrayCases.push({
    word: "Пізнання",
    caseValue: "miscev",
    wordCase: "пізнанні",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "miscev",
    wordCase: "навчанні",
  });

  arrayCases.push({
    word: "Близьке оточення",
    caseValue: "miscev",
    wordCase: "близькому оточенні",
  });

  arrayCases.push({
    word: "Брати/сестри",
    caseValue: "miscev",
    wordCase: "братах/сестрах",
  });

  arrayCases.push({
    word: "Переміщення",
    caseValue: "miscev",
    wordCase: "переміщенні",
  });

  arrayCases.push({
    word: "Короткі подорожі",
    caseValue: "miscev",
    wordCase: "коротких подорожах",
  });

  arrayCases.push({
    word: "Батьківський дім",
    caseValue: "miscev",
    wordCase: "батьківському домі",
  });

  arrayCases.push({
    word: "Батьки",
    caseValue: "miscev",
    wordCase: "батьках",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "miscev",
    wordCase: "спадщині",
  });

  arrayCases.push({
    word: "Домівка",
    caseValue: "miscev",
    wordCase: "домівці",
  });

  arrayCases.push({
    word: "Сімейність",
    caseValue: "miscev",
    wordCase: "сімейності",
  });

  arrayCases.push({
    word: "Родове коріння",
    caseValue: "miscev",
    wordCase: "родовому корінні",
  });

  arrayCases.push({
    word: "Дом серця",
    caseValue: "miscev",
    wordCase: "домі серця",
  });

  arrayCases.push({
    word: "Випадкові позашлюбні зв'язки",
    caseValue: "miscev",
    wordCase: "випадкових позашлюбних зв'язках",
  });

  arrayCases.push({
    word: "Пристрасті",
    caseValue: "miscev",
    wordCase: "пристрастях",
  });

  arrayCases.push({
    word: "Пригоди",
    caseValue: "miscev",
    wordCase: "пригодах",
  });

  arrayCases.push({
    word: "Любов",
    caseValue: "miscev",
    wordCase: "любові",
  });

  arrayCases.push({
    word: "Діти",
    caseValue: "miscev",
    wordCase: "дітях",
  });

  arrayCases.push({
    word: "Розваги",
    caseValue: "miscev",
    wordCase: "розвагах",
  });

  arrayCases.push({
    word: "Ігри",
    caseValue: "miscev",
    wordCase: "іграх",
  });

  arrayCases.push({
    word: "Дозвілля",
    caseValue: "miscev",
    wordCase: "дозвіллі",
  });

  arrayCases.push({
    word: "Здоров'я",
    caseValue: "miscev",
    wordCase: "здоров'ї",
  });

  arrayCases.push({
    word: "Набуті хвороби",
    caseValue: "miscev",
    wordCase: "набутих хворобах",
  });

  arrayCases.push({
    word: "Трудова діяльність",
    caseValue: "miscev",
    wordCase: "трудовій діяльності",
  });

  arrayCases.push({
    word: "Робота",
    caseValue: "miscev",
    wordCase: "роботі",
  });

  arrayCases.push({
    word: "Корисність",
    caseValue: "miscev",
    wordCase: "корисності",
  });

  arrayCases.push({
    word: "Борги",
    caseValue: "miscev",
    wordCase: "боргах",
  });

  arrayCases.push({
    word: "Домашні тварини",
    caseValue: "miscev",
    wordCase: "домашніх тваринах",
  });

  arrayCases.push({
    word: "Персонал",
    caseValue: "miscev",
    wordCase: "персоналі",
  });

  arrayCases.push({
    word: "Шлюб",
    caseValue: "miscev",
    wordCase: "шлюбі",
  });

  arrayCases.push({
    word: "Партнерство",
    caseValue: "miscev",
    wordCase: "партнерстві",
  });

  arrayCases.push({
    word: "Суди",
    caseValue: "miscev",
    wordCase: "судах",
  });

  arrayCases.push({
    word: "Розлучення",
    caseValue: "miscev",
    wordCase: "розлученні",
  });

  arrayCases.push({
    word: "Переродження",
    caseValue: "miscev",
    wordCase: "переродженні",
  });

  arrayCases.push({
    word: "Трансформація",
    caseValue: "miscev",
    wordCase: "трансформації",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "miscev",
    wordCase: "спадщині",
  });

  arrayCases.push({
    word: "Великі чужі гроші",
    caseValue: "miscev",
    wordCase: "великих чужих грошах",
  });

  arrayCases.push({
    word: "Магія",
    caseValue: "miscev",
    wordCase: "магії",
  });

  arrayCases.push({
    word: "Гіпноз",
    caseValue: "miscev",
    wordCase: "гіпнозі",
  });

  arrayCases.push({
    word: "Секс",
    caseValue: "miscev",
    wordCase: "сексі",
  });

  arrayCases.push({
    word: "Народження",
    caseValue: "miscev",
    wordCase: "народженні",
  });

  arrayCases.push({
    word: "Великі проблеми",
    caseValue: "miscev",
    wordCase: "великих проблемах",
  });

  arrayCases.push({
    word: "Кризи та ризики",
    caseValue: "miscev",
    wordCase: "кризах та ризиках",
  });

  arrayCases.push({
    word: "Закордон",
    caseValue: "miscev",
    wordCase: "закордоні",
  });

  arrayCases.push({
    word: "Неформальна влада",
    caseValue: "miscev",
    wordCase: "неформальній владі",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "miscev",
    wordCase: "духовному розвитку",
  });

  arrayCases.push({
    word: "Світогляд",
    caseValue: "miscev",
    wordCase: "світогляді",
  });

  arrayCases.push({
    word: "Мислення",
    caseValue: "miscev",
    wordCase: "мисленні",
  });

  arrayCases.push({
    word: "Філософія",
    caseValue: "miscev",
    wordCase: "філософії",
  });

  arrayCases.push({
    word: "Релігіозність",
    caseValue: "miscev",
    wordCase: "релігіозності",
  });

  arrayCases.push({
    word: "Мораль",
    caseValue: "miscev",
    wordCase: "моралі",
  });

  arrayCases.push({
    word: "Вища освіта",
    caseValue: "miscev",
    wordCase: "вищій освіті",
  });

  arrayCases.push({
    word: "Етика",
    caseValue: "miscev",
    wordCase: "етиці",
  });

  arrayCases.push({
    word: "Наука",
    caseValue: "miscev",
    wordCase: "науці",
  });

  arrayCases.push({
    word: "Стратегія",
    caseValue: "miscev",
    wordCase: "стратегії",
  });

  arrayCases.push({
    word: "Соціальний статус",
    caseValue: "miscev",
    wordCase: "соціальному статусі",
  });

  arrayCases.push({
    word: "Моральні та матеріальні блага",
    caseValue: "miscev",
    wordCase: "моральних та матеріальни благах",
  });

  arrayCases.push({
    word: "Посада",
    caseValue: "miscev",
    wordCase: "посаді",
  });

  arrayCases.push({
    word: "Авторитет",
    caseValue: "miscev",
    wordCase: "авторитеті",
  });

  arrayCases.push({
    word: "Репутація",
    caseValue: "miscev",
    wordCase: "репутації",
  });

  arrayCases.push({
    word: "Політика",
    caseValue: "miscev",
    wordCase: "політиці",
  });

  arrayCases.push({
    word: "Політика",
    caseValue: "miscev",
    wordCase: "політиці",
  });

  arrayCases.push({
    word: "Друзі",
    caseValue: "miscev",
    wordCase: "друзях",
  });

  arrayCases.push({
    word: "Колективна творчість",
    caseValue: "miscev",
    wordCase: "колективній творчості",
  });

  arrayCases.push({
    word: "Єдинодумці",
    caseValue: "miscev",
    wordCase: "єдинодумцях",
  });

  arrayCases.push({
    word: "Тусовка",
    caseValue: "miscev",
    wordCase: "тусовці",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "miscev",
    wordCase: "навчанні",
  });

  arrayCases.push({
    word: "Надії та плани",
    caseValue: "miscev",
    wordCase: "надіях та планах",
  });

  arrayCases.push({
    word: "Майбутнє",
    caseValue: "miscev",
    wordCase: "майбутньому",
  });

  arrayCases.push({
    word: "Творчість",
    caseValue: "miscev",
    wordCase: "творчості",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "miscev",
    wordCase: "духовному розвитку",
  });

  arrayCases.push({
    word: "Благодійність",
    caseValue: "miscev",
    wordCase: "благодійності",
  });

  arrayCases.push({
    word: "Випробування долі",
    caseValue: "miscev",
    wordCase: "випробуваннях долі",
  });

  arrayCases.push({
    word: "Приховані вороги",
    caseValue: "miscev",
    wordCase: "прихованих ворогах",
  });

  arrayCases.push({
    word: "Заточення",
    caseValue: "miscev",
    wordCase: "заточенні",
  });

  arrayCases.push({
    word: "Хвороби",
    caseValue: "miscev",
    wordCase: "хворобах",
  });

  arrayCases.push({
    word: "Нещасні випадки",
    caseValue: "miscev",
    wordCase: "нещасних випадках",
  });

  arrayCases.push({
    word: "Служіння",
    caseValue: "miscev",
    wordCase: "служінні",
  });

  arrayCases.push({
    word: "Нетрадиційна медицина",
    caseValue: "miscev",
    wordCase: "нетрадиційній медицині",
  });

  arrayCases.push({
    word: "Акторська майстерність",
    caseValue: "miscev",
    wordCase: "акторській майстерності",
  });

  arrayCases.push({
    word: "Відчуття світу",
    caseValue: "miscev",
    wordCase: "відчутті світу",
  });

  arrayCases.push({
    word: "Езотерика",
    caseValue: "miscev",
    wordCase: "езотериці",
  });

  arrayCases.push({
    word: "Я",
    caseValue: "individualmaty",
    wordCase: "моя",
  });

  arrayCases.push({
    word: "Моє проявлення себе в соціумі",
    caseValue: "individualmaty",
    wordCase: "проявляє себе в соціумі",
  });

  arrayCases.push({
    word: "Мій зовнішній вигляд",
    caseValue: "individualmaty",
    wordCase: "має привабливий зовнішній вигляд",
  });

  arrayCases.push({
    word: "Як мене соціум зчитує",
    caseValue: "individualmaty",
    wordCase: "зчитує соціум",
  });

  arrayCases.push({
    word: "Блага",
    caseValue: "individualmaty",
    wordCase: "має блага",
  });

  arrayCases.push({
    word: "Матеріальні цінності",
    caseValue: "individualmaty",
    wordCase: "має матеріальні цінності",
  });

  arrayCases.push({
    word: "Фінанси",
    caseValue: "individualmaty",
    wordCase: "займається фінансами",
  });

  arrayCases.push({
    word: "Мої гроші",
    caseValue: "individualmaty",
    wordCase: "контролює мої гроші",
  });

  arrayCases.push({
    word: "Мої статки",
    caseValue: "individualmaty",
    wordCase: "контролює мої статки",
  });

  arrayCases.push({
    word: "Ситуації заробітку грошей та накоплення ресурсів своєю працею",
    caseValue: "individualmaty",
    wordCase:
      "впливає на ситуації заробітку грошей та накоплення ресурсів своєю працею",
  });

  arrayCases.push({
    word: "Запас сил",
    caseValue: "individualmaty",
    wordCase: "має запас сил",
  });

  arrayCases.push({
    word: "Інтелект",
    caseValue: "individualmaty",
    wordCase: "має інтелект",
  });

  arrayCases.push({
    word: "Пізнання",
    caseValue: "individualmaty",
    wordCase: "пізнає",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "individualmaty",
    wordCase: "навчається",
  });

  arrayCases.push({
    word: "Близьке оточення",
    caseValue: "individualmaty",
    wordCase: "в близькому оточенні",
  });

  arrayCases.push({
    word: "Брати/сестри",
    caseValue: "individualmaty",
    wordCase: "має братів/сестер",
  });

  arrayCases.push({
    word: "Переміщення",
    caseValue: "individualmaty",
    wordCase: "переміщається",
  });

  arrayCases.push({
    word: "Короткі подорожі",
    caseValue: "individualmaty",
    wordCase: "подорожує",
  });

  arrayCases.push({
    word: "Батьківський дім",
    caseValue: "individualmaty",
    wordCase: "в батьківському домі",
  });

  arrayCases.push({
    word: "Батьки",
    caseValue: "individualmaty",
    wordCase: "має батьків",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "individualmaty",
    wordCase: "має спадщину",
  });

  arrayCases.push({
    word: "Домівка",
    caseValue: "individualmaty",
    wordCase: "має домівку",
  });

  arrayCases.push({
    word: "Сімейність",
    caseValue: "individualmaty",
    wordCase: "має сімейність",
  });

  arrayCases.push({
    word: "Родове коріння",
    caseValue: "individualmaty",
    wordCase: "має родове коріння",
  });

  arrayCases.push({
    word: "Дом серця",
    caseValue: "individualmaty",
    wordCase: "пов'язана з домом серця",
  });

  arrayCases.push({
    word: "Випадкові позашлюбні зв'язки",
    caseValue: "individualmaty",
    wordCase: "мала випадкові позашлюбні зв'язки",
  });

  arrayCases.push({
    word: "Пристрасті",
    caseValue: "individualmaty",
    wordCase: "пристрастна",
  });

  arrayCases.push({
    word: "Пригоди",
    caseValue: "individualmaty",
    wordCase: "любить пригоди",
  });

  arrayCases.push({
    word: "Любов",
    caseValue: "individualmaty",
    wordCase: "любила",
  });

  arrayCases.push({
    word: "Діти",
    caseValue: "individualmaty",
    wordCase: "мала дітей",
  });

  arrayCases.push({
    word: "Розваги",
    caseValue: "individualmaty",
    wordCase: "любила розваги",
  });

  arrayCases.push({
    word: "Ігри",
    caseValue: "individualmaty",
    wordCase: "любила ігри",
  });

  arrayCases.push({
    word: "Дозвілля",
    caseValue: "individualmaty",
    wordCase: "любила дозвілля",
  });

  arrayCases.push({
    word: "Здоров'я",
    caseValue: "individualmaty",
    wordCase: "піклувалась про здоров'я",
  });

  arrayCases.push({
    word: "Набуті хвороби",
    caseValue: "individualmaty",
    wordCase: "дала набуті хвороби",
  });

  arrayCases.push({
    word: "Трудова діяльність",
    caseValue: "individualmaty",
    wordCase: "займалась трудовою діяльністю",
  });

  arrayCases.push({
    word: "Робота",
    caseValue: "individualmaty",
    wordCase: "займалась роботою",
  });

  arrayCases.push({
    word: "Корисність",
    caseValue: "individualmaty",
    wordCase: "приносила користь",
  });

  arrayCases.push({
    word: "Борги",
    caseValue: "individualmaty",
    wordCase: "мала борги",
  });

  arrayCases.push({
    word: "Домашні тварини",
    caseValue: "individualmaty",
    wordCase: "мала домашніх тварин",
  });

  arrayCases.push({
    word: "Персонал",
    caseValue: "individualmaty",
    wordCase: "керувала персоналом",
  });

  arrayCases.push({
    word: "Шлюб",
    caseValue: "individualmaty",
    wordCase: "була у шлюбі",
  });

  arrayCases.push({
    word: "Партнерство",
    caseValue: "individualmaty",
    wordCase: "була у партнерстві",
  });

  arrayCases.push({
    word: "Суди",
    caseValue: "individualmaty",
    wordCase: "приймала участь у судах",
  });

  arrayCases.push({
    word: "Розлучення",
    caseValue: "individualmaty",
    wordCase: "була у розлученні",
  });

  arrayCases.push({
    word: "Переродження",
    caseValue: "individualmaty",
    wordCase: "мала переродження",
  });

  arrayCases.push({
    word: "Трансформація",
    caseValue: "individualmaty",
    wordCase: "пережила трансформацію",
  });

  arrayCases.push({
    word: "Спадщина",
    caseValue: "individualmaty",
    wordCase: "мала спадщину",
  });

  arrayCases.push({
    word: "Великі чужі гроші",
    caseValue: "individualmaty",
    wordCase: "мала великі чужі гроші",
  });

  arrayCases.push({
    word: "Магія",
    caseValue: "individualmaty",
    wordCase: "володіла магією",
  });

  arrayCases.push({
    word: "Гіпноз",
    caseValue: "individualmaty",
    wordCase: "володіла гіпнозом",
  });

  arrayCases.push({
    word: "Секс",
    caseValue: "individualmaty",
    wordCase: "любила секс",
  });

  arrayCases.push({
    word: "Народження",
    caseValue: "individualmaty",
    wordCase: "пережила народження",
  });

  arrayCases.push({
    word: "Великі проблеми",
    caseValue: "individualmaty",
    wordCase: "мала великі проблеми",
  });

  arrayCases.push({
    word: "Кризи та ризики",
    caseValue: "individualmaty",
    wordCase: "мала кризи та ризики",
  });

  arrayCases.push({
    word: "Закордон",
    caseValue: "individualmaty",
    wordCase: "була закордоном",
  });

  arrayCases.push({
    word: "Неформальна влада",
    caseValue: "individualmaty",
    wordCase: "мала неформальну владу",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "individualmaty",
    wordCase: "займалась духовним розвитком",
  });

  arrayCases.push({
    word: "Світогляд",
    caseValue: "individualmaty",
    wordCase: "мала світогляд",
  });

  arrayCases.push({
    word: "Мислення",
    caseValue: "individualmaty",
    wordCase: "вміє мислити",
  });

  arrayCases.push({
    word: "Філософія",
    caseValue: "individualmaty",
    wordCase: "любила філософію",
  });

  arrayCases.push({
    word: "Релігіозність",
    caseValue: "individualmaty",
    wordCase: "релігіозна",
  });

  arrayCases.push({
    word: "Мораль",
    caseValue: "individualmaty",
    wordCase: "моральна",
  });

  arrayCases.push({
    word: "Вища освіта",
    caseValue: "individualmaty",
    wordCase: "має вищу освіту",
  });

  arrayCases.push({
    word: "Етика",
    caseValue: "individualmaty",
    wordCase: "етична",
  });

  arrayCases.push({
    word: "Наука",
    caseValue: "individualmaty",
    wordCase: "займалась наукою",
  });

  arrayCases.push({
    word: "Стратегія",
    caseValue: "individualmaty",
    wordCase: "мала стратегію",
  });

  arrayCases.push({
    word: "Соціальний статус",
    caseValue: "individualmaty",
    wordCase: "має соціальний статус",
  });

  arrayCases.push({
    word: "Моральні та матеріальні блага",
    caseValue: "individualmaty",
    wordCase: "любить моральні та матеріальні блага",
  });

  arrayCases.push({
    word: "Посада",
    caseValue: "individualmaty",
    wordCase: "має посаду",
  });

  arrayCases.push({
    word: "Авторитет",
    caseValue: "individualmaty",
    wordCase: "має авторитет",
  });

  arrayCases.push({
    word: "Репутація",
    caseValue: "individualmaty",
    wordCase: "має репутацію",
  });

  arrayCases.push({
    word: "Політика",
    caseValue: "individualmaty",
    wordCase: "була в політиці",
  });

  arrayCases.push({
    word: "Друзі",
    caseValue: "individualmaty",
    wordCase: "має друзів",
  });

  arrayCases.push({
    word: "Колективна творчість",
    caseValue: "individualmaty",
    wordCase: "займалась колективною творчістю",
  });

  arrayCases.push({
    word: "Єдинодумці",
    caseValue: "individualmaty",
    wordCase: "має єдинодумців",
  });

  arrayCases.push({
    word: "Тусовка",
    caseValue: "individualmaty",
    wordCase: "любить тусовку",
  });

  arrayCases.push({
    word: "Навчання",
    caseValue: "individualmaty",
    wordCase: "займалась навчанням",
  });

  arrayCases.push({
    word: "Надії та плани",
    caseValue: "individualmaty",
    wordCase: "будує надії на плани",
  });

  arrayCases.push({
    word: "Майбутнє",
    caseValue: "individualmaty",
    wordCase: "планує майбутнє",
  });

  arrayCases.push({
    word: "Майбутнє",
    caseValue: "individualmaty",
    wordCase: "планує майбутнє",
  });

  arrayCases.push({
    word: "Майбутнє",
    caseValue: "individualmaty",
    wordCase: "планує майбутнє",
  });

  arrayCases.push({
    word: "Творчість",
    caseValue: "individualmaty",
    wordCase: "займається творчістю",
  });

  arrayCases.push({
    word: "Духовний розвиток",
    caseValue: "individualmaty",
    wordCase: "займалась духовним розвитком",
  });

  arrayCases.push({
    word: "Благодійність",
    caseValue: "individualmaty",
    wordCase: "займається благодійністю",
  });

  arrayCases.push({
    word: "Випробування долі",
    caseValue: "individualmaty",
    wordCase: "мала випробування долі",
  });

  arrayCases.push({
    word: "Приховані вороги",
    caseValue: "individualmaty",
    wordCase: "мала прихованих ворогів",
  });

  arrayCases.push({
    word: "Заточення",
    caseValue: "individualmaty",
    wordCase: "можливо була в заточенні",
  });

  arrayCases.push({
    word: "Хвороби",
    caseValue: "individualmaty",
    wordCase: "можливо мала хвороби",
  });

  arrayCases.push({
    word: "Нещасні випадки",
    caseValue: "individualmaty",
    wordCase: "можливо мала нещасні випадки",
  });

  arrayCases.push({
    word: "Служіння",
    caseValue: "individualmaty",
    wordCase: "займалась служінням",
  });

  arrayCases.push({
    word: "Нетрадиційна медицина",
    caseValue: "individualmaty",
    wordCase: "займалась нетрадиційною медициною",
  });

  arrayCases.push({
    word: "Акторська майстерність",
    caseValue: "individualmaty",
    wordCase: "володіла акторскою майстерністю",
  });

  arrayCases.push({
    word: "Відчуття світу",
    caseValue: "individualmaty",
    wordCase: "має відчуття світу",
  });

  arrayCases.push({
    word: "Езотерика",
    caseValue: "individualmaty",
    wordCase: "займалась езотерикою",
  });

  return arrayCases;
}

function caseStruct(keyWord) {
  if (keyWord === "Дух") {
    return {
      wordOne: "Дух в",
      wordCase: "duhmiscev",
    };
  }

  if (keyWord === "Сила волі") {
    return {
      wordOne: "Сила волі в",
      wordCase: "silvolimiscev",
    };
  }

  if (keyWord === "Душа") {
    return {
      wordOne: "Душа",
      wordCase: "dushrodov",
    };
  }

  if (keyWord === "Эмоції") {
    return {
      wordOne: "Эмоції від",
      wordCase: "emozrodov",
    };
  }

  if (keyWord === "Родові програми") {
    return {
      wordOne: "Родові програми від",
      wordCase: "rodprogramrodov",
    };
  }

  if (keyWord === "Сприйняття світу") {
    return {
      wordOne: "Сприйняття світу в",
      wordCase: "sprsvitmisz",
    };
  }

  if (keyWord === "Зона комфорту") {
    return {
      wordOne: "Зона комфорту в",
      wordCase: "zonacomfmisz",
    };
  }

  if (keyWord === "Спадковість") {
    return {
      wordOne: "Спадковість від",
      wordCase: "spadkovistrodov",
    };
  }

  if (keyWord === "Родючість") {
    return {
      wordOne: "Родючість в",
      wordCase: "roduchmisz",
    };
  }

  if (keyWord === "Мати") {
    return {
      wordOne: "Мати",
      wordCase: "matyindividualmaty",
    };
  }

  if (keyWord === "Інтелект") {
    return {
      wordOne: "Інтелект в",
      wordCase: "intelectmisz",
    };
  }

  if (keyWord === "Мислення та аналітичні здібності") {
    return {
      wordOne: "Мислення та аналітичні здібності в",
      wordCase: "mislanalitmisz",
    };
  }

  if (keyWord === "Зв'язки") {
    return {
      wordOne: "Зв'язки з",
      wordCase: "zvazkorudn",
    };
  }

  if (keyWord === "Контактність") {
    return {
      wordOne: "Контактність з",
      wordCase: "kontaktnistorudn",
    };
  }

  if (keyWord === "Мова") {
    return {
      wordOne: "Мова про",
      wordCase: "movaznahid",
    };
  }

  if (keyWord === "Взаємодія з оточуючими") {
    return {
      wordOne: "Взаємодія з оточуючими через",
      wordCase: "vzaemotochznahid",
    };
  }

  if (keyWord === "Здатність розуміти інших") {
    return {
      wordOne: "Здатність розуміти інших через",
      wordCase: "zdatnistrosuminshznahid",
    };
  }

  if (keyWord === "Почуття") {
    return {
      wordOne: "Почуття в",
      wordCase: "pochuttamisz",
    };
  }

  if (keyWord === "Симпатії") {
    return {
      wordOne: "Симпатії у",
      wordCase: "sumpatmisz",
    };
  }

  if (keyWord === "Гармонія") {
    return {
      wordOne: "Гармонія в",
      wordCase: "garmonmisz",
    };
  }

  if (keyWord === "Проявлення в коханні") {
    return {
      wordOne: "Проявлення в коханні через",
      wordCase: "proyavlenvkoxanznahid",
    };
  }

  if (keyWord === "Образ коханки в карті чоловіка") {
    return {
      wordOne: "Образ коханки в карті чоловіка проявляється через",
      wordCase: "obrazkohanznahid",
    };
  }

  if (keyWord === "Сексуальність") {
    return {
      wordOne: "Сексуальність в",
      wordCase: "seksualnmisz",
    };
  }

  if (keyWord === "Активність") {
    return {
      wordOne: "Активність в",
      wordCase: "aktivnmisz",
    };
  }

  if (keyWord === "Воля") {
    return {
      wordOne: "Воля в",
      wordCase: "volyamisz",
    };
  }

  if (keyWord === "Імпульс") {
    return {
      wordOne: "Імпульс",
      wordCase: "impulsrodov",
    };
  }

  if (keyWord === "Мужність") {
    return {
      wordOne: "Мужність в",
      wordCase: "musnmisz",
    };
  }

  if (keyWord === "Рішучість") {
    return {
      wordOne: "Рішучість в",
      wordCase: "rishuchmisz",
    };
  }

  if (keyWord === "Агресивність") {
    return {
      wordOne: "Агресивність в",
      wordCase: "agresivmisz",
    };
  }

  if (keyWord === "Боротьба") {
    return {
      wordOne: "Боротьба з",
      wordCase: "borotbaorudn",
    };
  }

  if (keyWord === "Конкуренція") {
    return {
      wordOne: "Конкуренція з",
      wordCase: "konkurenzorudn",
    };
  }

  if (keyWord === "Необачність") {
    return {
      wordOne: "Необачність в",
      wordCase: "neobachnmisz",
    };
  }

  if (keyWord === "Обмеження") {
    return {
      wordOne: "Обмеження в",
      wordCase: "obmezenmisz",
    };
  }

  if (keyWord === "Стиснення") {
    return {
      wordOne: "Стиснення",
      wordCase: "stusnenrodov",
    };
  }

  if (keyWord === "Закони") {
    return {
      wordOne: "Закони в ",
      wordCase: "zakonymisz",
    };
  }

  if (keyWord === "Правила") {
    return {
      wordOne: "Правила",
      wordCase: "pravularodov",
    };
  }

  if (keyWord === "Концентрація") {
    return {
      wordOne: "Концентрація на",
      wordCase: "konzentratmiszev",
    };
  }

  if (keyWord === "Витримка") {
    return {
      wordOne: "Витримка в",
      wordCase: "vutrummiszev",
    };
  }

  if (keyWord === "Сер'йозність") {
    return {
      wordOne: "Сер'йозність",
      wordCase: "seriozrodov",
    };
  }

  if (keyWord === "Скупість") {
    return {
      wordOne: "Скупість в",
      wordCase: "skupistmiszev",
    };
  }

  if (keyWord === "Завзятість") {
    return {
      wordOne: "Завзятість в",
      wordCase: "zavzatmiszev",
    };
  }

  if (keyWord === "Борг") {
    return {
      wordOne: "Борг перед",
      wordCase: "borgorudn",
    };
  }

  if (keyWord === "Розширення") {
    return {
      wordOne: "Розширення",
      wordCase: "rozshurenrodov",
    };
  }

  if (keyWord === "Щедрість") {
    return {
      wordOne: "Щедрість у",
      wordCase: "ghedristmiszev",
    };
  }

  if (keyWord === "Мудрість") {
    return {
      wordOne: "Мудрість в",
      wordCase: "mudristmiszev",
    };
  }

  if (keyWord === "Справедливість") {
    return {
      wordOne: "Справедливість",
      wordCase: "spravedrodov",
    };
  }

  if (keyWord === "Філософський світогляд") {
    return {
      wordOne: "Філософський світогляд в",
      wordCase: "philosovsvitogladmiszev",
    };
  }

  if (keyWord === "Духовні цінності") {
    return {
      wordOne: "Духовні цінності в",
      wordCase: "duhovnzinnostimiszev",
    };
  }

  if (keyWord === "Люксові бренди") {
    return {
      wordOne: "Люксові бренди через",
      wordCase: "luksbrendznahid",
    };
  }

  if (keyWord === "За кордон") {
    return {
      wordOne: "За кордоном",
      wordCase: "zakordonomnazyv",
    };
  }

  if (keyWord === "Викладання") {
    return {
      wordOne: "Викладання",
      wordCase: "vukladannyarodov",
    };
  }

  if (keyWord === "Оригінальність") {
    return {
      wordOne: "Оригінальність в",
      wordCase: "originalmiszev",
    };
  }

  if (keyWord === "Свобода") {
    return {
      wordOne: "Свобода в",
      wordCase: "svobodamiszev",
    };
  }

  if (keyWord === "Спонтанність") {
    return {
      wordOne: "Спонтанність в",
      wordCase: "spontanistmiszev",
    };
  }

  if (keyWord === "Неочікуваність") {
    return {
      wordOne: "Неочікуваність",
      wordCase: "neochikuvanrodov",
    };
  }

  if (keyWord === "Астрологія") {
    return {
      wordOne: "Астрологія",
      wordCase: "astrologrodov",
    };
  }

  if (keyWord === "Відкриття") {
    return {
      wordOne: "Відкриття",
      wordCase: "vidkruttyarodov",
    };
  }

  if (keyWord === "Інформаційні технології") {
    return {
      wordOne: "Інформаційні технології пов'язані з",
      wordCase: "informattehnologorudn",
    };
  }

  if (keyWord === "Фантастика") {
    return {
      wordOne: "Фантастика",
      wordCase: "fantastikrodov",
    };
  }

  if (keyWord === "Космос") {
    return {
      wordOne: "Космос в",
      wordCase: "kosmosmiszev",
    };
  }

  if (keyWord === "Майбутнє") {
    return {
      wordOne: "Майбутнє в",
      wordCase: "maibutnmiszev",
    };
  }

  if (keyWord === "Геніальність") {
    return {
      wordOne: "Геніальність в",
      wordCase: "genialnmiszev",
    };
  }

  if (keyWord === "Екстрасенсорні здібності") {
    return {
      wordOne: "Екстрасенсорні здібності через",
      wordCase: "ekstrasenszdibznahid",
    };
  }

  if (keyWord === "Фантазія") {
    return {
      wordOne: "Фантазія в",
      wordCase: "phantazmiszev",
    };
  }

  if (keyWord === "Духовний розвиток") {
    return {
      wordOne: "Духовний розвиток через",
      wordCase: "duhovnrozvutokznahid",
    };
  }

  if (keyWord === "Віщі сни") {
    return {
      wordOne: "Віщі сни про",
      wordCase: "vighisnyznahid",
    };
  }

  if (keyWord === "Натхнення") {
    return {
      wordOne: "Натхнення в",
      wordCase: "nathnennamiszev",
    };
  }

  if (keyWord === "Обмани") {
    return {
      wordOne: "Обмани в",
      wordCase: "obmanmiszev",
    };
  }

  if (keyWord === "Самообмани") {
    return {
      wordOne: "Самообмани в",
      wordCase: "samoobmanmiszev",
    };
  }

  if (keyWord === "Залежності") {
    return {
      wordOne: "Залежності від",
      wordCase: "zalegnostrodov",
    };
  }

  if (keyWord === "Медитації") {
    return {
      wordOne: "Медитації про",
      wordCase: "meditacznahid",
    };
  }

  if (keyWord === "Трансформація") {
    return {
      wordOne: "Трансформація через",
      wordCase: "transormznahid",
    };
  }

  if (keyWord === "Екстремальні ситуації") {
    return {
      wordOne: "Екстремальні ситуації з",
      wordCase: "extremsituazorudn",
    };
  }

  if (keyWord === "Вища воля") {
    return {
      wordOne: "Вища воля",
      wordCase: "vuchavolarodov",
    };
  }

  if (keyWord === "Руйнівна сила") {
    return {
      wordOne: "Руйнівна сила в",
      wordCase: "ruinivnasulmiszev",
    };
  }

  if (keyWord === "Тиск та управління людьми") {
    return {
      wordOne: "Тиск та управління людьми через",
      wordCase: "tuskupravlinznahid",
    };
  }

  if (keyWord === "Смерть") {
    return {
      wordOne: "Смерть",
      wordCase: "smertrodov",
    };
  }

  if (keyWord === "Народження") {
    return {
      wordOne: "Народження",
      wordCase: "narodgrodov",
    };
  }

  if (keyWord === "Оргазми") {
    return {
      wordOne: "Оргазми",
      wordCase: "orgazmrodov",
    };
  }

  if (keyWord === "Магія") {
    return {
      wordOne: "Магія",
      wordCase: "magiarodov",
    };
  }

  if (keyWord === "Мафія") {
    return {
      wordOne: "Мафія через",
      wordCase: "mafiaznahid",
    };
  }

  if (keyWord === "Влада") {
    return {
      wordOne: "Влада через",
      wordCase: "vladaznahid",
    };
  }

  if (keyWord === "Маніпуляції") {
    return {
      wordOne: "Маніпуляції",
      wordCase: "manipulorudn",
    };
  }

  if (keyWord === "Недіагностовані хвороби") {
    return {
      wordOne: "Недіагностовані хвороби через",
      wordCase: "nediagnosthvorzhahid",
    };
  }

  if (keyWord === "Онкологія") {
    return {
      wordOne: "Онкологія",
      wordCase: "onkologrodov",
    };
  }

  if (keyWord === "Розорення") {
    return {
      wordOne: "Розорення через",
      wordCase: "rozorenznahid",
    };
  }

  if (keyWord === "Пограничні ситуації життя та смерті") {
    return {
      wordOne: "Пограничні ситуації життя та смерті через",
      wordCase: "pogransutznahid",
    };
  }
}

function generet_But() {
  const valueText = areaOne.value;
  const arrayOfInterp = valueText.split("\n");

  const arrayCase = arrayOfInterp.map((el) => {
    return {
      curWord: el.split("&")[0].trim(),
      case: el.split("&")[1].trim(),
      valueWord: el.split("&")[2].trim(),
      count: 1,
    };
  });

  const resultGroup = arrayCase.reduce((acc, item) => {
    if (!acc[item.curWord]) {
      acc[item.curWord] = 0;
    }
    acc[item.curWord] += item.count;
    return acc;
  }, {});

  const keys = Object.keys(resultGroup);

  areaTwo.textContent = getTextOfFunction(arrayCase, keys);
}

function getTextOfFunction(arrayCase, keys) {
  let curTextFunction = "";

  curTextFunction =
    curTextFunction + "function getTheCaseValue(word,caseWord) {" + "\n";

  const lengthKeys = keys.length;

  if (lengthKeys === 1) {
    curTextFunction =
      curTextFunction + "if (word===" + '"' + keys[0] + '"' + ")" + " {" + "\n";
    curTextFunction = curTextFunction + "}" + "\n";
    curTextFunction = curTextFunction + "else" + "\n";
    curTextFunction = curTextFunction + "{" + "\n";
    curTextFunction = curTextFunction + "return" + " " + '"' + '"' + ";" + "\n";
    curTextFunction = curTextFunction + "}" + "\n";
  } else {
    let countOfKeys = 1;

    for (const key of keys) {
      if (countOfKeys === 1) {
        curTextFunction =
          curTextFunction + "if (word===" + '"' + key + '"' + ")" + " {" + "\n";

        const resultArray = arrayCase.filter((word) => word.curWord === key);

        const countOfResult = resultArray.length;
        if (countOfResult === 1) {
          const curCase = resultArray[0].case;
          const curValueWord = resultArray[0].valueWord;
          curTextFunction =
            curTextFunction +
            "if (caseWord===" +
            '"' +
            curCase +
            '"' +
            ")" +
            " {" +
            "\n";
          curTextFunction =
            curTextFunction + "return " + '"' + curValueWord + '"' + ";" + "\n";
          curTextFunction = curTextFunction + "}" + "\n";
          curTextFunction = curTextFunction + "else" + "\n";
          curTextFunction = curTextFunction + "{" + "\n";
          curTextFunction =
            curTextFunction + "return" + " " + '"' + '"' + ";" + "\n";
          curTextFunction = curTextFunction + "}" + "\n";
        } else {
          let countCaseArr = 1;
          for (let i = 0; i < resultArray.length; i += 1) {
            const curCase = resultArray[i].case;
            const curValueWord = resultArray[i].valueWord;
            if (countCaseArr === 1) {
              curTextFunction =
                curTextFunction +
                "if (caseWord===" +
                '"' +
                curCase +
                '"' +
                ")" +
                " {" +
                "\n";
              curTextFunction =
                curTextFunction +
                "return " +
                '"' +
                curValueWord +
                '"' +
                ";" +
                "\n";
              curTextFunction = curTextFunction + "}" + "\n";
            } else {
              curTextFunction =
                curTextFunction +
                "else if (caseWord===" +
                '"' +
                curCase +
                '"' +
                ")" +
                " {" +
                "\n";
              curTextFunction =
                curTextFunction +
                "return " +
                '"' +
                curValueWord +
                '"' +
                ";" +
                "\n";
              curTextFunction = curTextFunction + "}" + "\n";
            }
            countCaseArr = countCaseArr += 1;
          }
          curTextFunction = curTextFunction + "else" + "\n";
          curTextFunction = curTextFunction + "{" + "\n";
          curTextFunction =
            curTextFunction + "return" + " " + '"' + '"' + ";" + "\n";
          curTextFunction = curTextFunction + "}" + "\n";
        }
        curTextFunction = curTextFunction + "}" + "\n";
      } else {
        curTextFunction =
          curTextFunction +
          "else if (word===" +
          '"' +
          key +
          '"' +
          ")" +
          " {" +
          "\n";

        const resultArray = arrayCase.filter((word) => word.curWord === key);

        const countOfResult = resultArray.length;

        if (countOfResult === 1) {
          const curCase = resultArray[0].case;
          const curValueWord = resultArray[0].valueWord;
          curTextFunction =
            curTextFunction +
            "if (caseWord===" +
            '"' +
            curCase +
            '"' +
            ")" +
            " {" +
            "\n";
          curTextFunction =
            curTextFunction + "return " + '"' + curValueWord + '"' + ";" + "\n";
          curTextFunction = curTextFunction + "}" + "\n";
          curTextFunction = curTextFunction + "else" + "\n";
          curTextFunction = curTextFunction + "{" + "\n";
          curTextFunction =
            curTextFunction + "return" + " " + '"' + '"' + ";" + "\n";
          curTextFunction = curTextFunction + "}" + "\n";
        } else {
          let countCaseArr = 1;
          for (let i = 0; i < resultArray.length; i += 1) {
            const curCase = resultArray[i].case;
            const curValueWord = resultArray[i].valueWord;
            if (countCaseArr === 1) {
              curTextFunction =
                curTextFunction +
                "if (caseWord===" +
                '"' +
                curCase +
                '"' +
                ")" +
                " {" +
                "\n";
              curTextFunction =
                curTextFunction +
                "return " +
                '"' +
                curValueWord +
                '"' +
                ";" +
                "\n";
              curTextFunction = curTextFunction + "}" + "\n";
            } else {
              curTextFunction =
                curTextFunction +
                "else if (caseWord===" +
                '"' +
                curCase +
                '"' +
                ")" +
                " {" +
                "\n";
              curTextFunction =
                curTextFunction +
                "return " +
                '"' +
                curValueWord +
                '"' +
                ";" +
                "\n";
              curTextFunction = curTextFunction + "}" + "\n";
            }
            countCaseArr = countCaseArr += 1;
          }
          curTextFunction = curTextFunction + "else" + "\n";
          curTextFunction = curTextFunction + "{" + "\n";
          curTextFunction =
            curTextFunction + "return" + " " + '"' + '"' + ";" + "\n";
          curTextFunction = curTextFunction + "}" + "\n";
        }
        curTextFunction = curTextFunction + "}" + "\n";
      }
      countOfKeys += 1;
    }

    curTextFunction = curTextFunction + "else" + "\n";
    curTextFunction = curTextFunction + "{" + "\n";
    curTextFunction = curTextFunction + "return" + " " + '"' + '"' + ";" + "\n";
    curTextFunction = curTextFunction + "}" + "\n";
  }
  curTextFunction = curTextFunction + "}";

  return curTextFunction;
}

function getTheCaseValue(word, caseWord) {
  if (word === "Я") {
    if (caseWord === "rishuchmisz") {
      return "собі";
    } else if (caseWord === "agresivmisz") {
      return "собі";
    } else if (caseWord === "borotbaorudn") {
      return "собою";
    } else if (caseWord === "konkurenzorudn") {
      return "собою";
    } else if (caseWord === "neobachnmisz") {
      return "собі";
    } else if (caseWord === "obmezenmisz") {
      return "собі";
    } else if (caseWord === "stusnenrodov") {
      return "мене";
    } else if (caseWord === "zakonymisz") {
      return "собі";
    } else if (caseWord === "pravularodov") {
      return "мене";
    } else if (caseWord === "konzentratmiszev") {
      return "собі";
    } else if (caseWord === "vutrummiszev") {
      return "собі";
    } else if (caseWord === "seriozrodov") {
      return "мене";
    } else if (caseWord === "skupistmiszev") {
      return "собі";
    } else if (caseWord === "zavzatmiszev") {
      return "собі";
    } else if (caseWord === "borgorudn") {
      return "собою";
    } else if (caseWord === "rozshurenrodov") {
      return "мене";
    } else if (caseWord === "ghedristmiszev") {
      return "собі";
    } else if (caseWord === "mudristmiszev") {
      return "собі";
    } else if (caseWord === "spravedrodov") {
      return "мене";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "собі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "собі";
    } else if (caseWord === "luksbrendznahid") {
      return "себе";
    } else if (caseWord === "zakordonomnazyv") {
      return "я";
    } else if (caseWord === "vukladannyarodov") {
      return "мене";
    } else if (caseWord === "originalmiszev") {
      return "собі";
    } else if (caseWord === "svobodamiszev") {
      return "собі";
    } else if (caseWord === "spontanistmiszev") {
      return "собі";
    } else if (caseWord === "neochikuvanrodov") {
      return "мене";
    } else if (caseWord === "astrologrodov") {
      return "мене";
    } else if (caseWord === "vidkruttyarodov") {
      return "мене";
    } else if (caseWord === "informattehnologorudn") {
      return "собою";
    } else if (caseWord === "fantastikrodov") {
      return "мене";
    } else if (caseWord === "kosmosmiszev") {
      return "собі";
    } else if (caseWord === "maibutnmiszev") {
      return "собі";
    } else if (caseWord === "genialnmiszev") {
      return "собі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "себе";
    } else if (caseWord === "phantazmiszev") {
      return "собі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "себе";
    } else if (caseWord === "vighisnyznahid") {
      return "себе";
    } else if (caseWord === "nathnennamiszev") {
      return "собі";
    } else if (caseWord === "obmanmiszev") {
      return "собі";
    } else if (caseWord === "samoobmanmiszev") {
      return "собі";
    } else if (caseWord === "zalegnostrodov") {
      return "мене";
    } else if (caseWord === "meditacznahid") {
      return "себе";
    } else if (caseWord === "transormznahid") {
      return "себе";
    } else if (caseWord === "extremsituazorudn") {
      return "собою";
    } else if (caseWord === "vuchavolarodov") {
      return "мене";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "собі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "себе";
    } else if (caseWord === "tuskupravlinznahid") {
      return "себе";
    } else if (caseWord === "narodgrodov") {
      return "мене";
    } else if (caseWord === "orgazmrodov") {
      return "мене";
    } else if (caseWord === "magiarodov") {
      return "мене";
    } else if (caseWord === "mafiaznahid") {
      return "себе";
    } else if (caseWord === "vladaznahid") {
      return "себе";
    } else if (caseWord === "manipulorudn") {
      return "собою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "себе";
    } else if (caseWord === "onkologrodov") {
      return "мене";
    } else if (caseWord === "rozorenznahid") {
      return "себе";
    } else if (caseWord === "pogransutznahid") {
      return "себе";
    } else if (caseWord === "duhmiscev") {
      return "собі";
    } else if (caseWord === "silvolimiscev") {
      return "собі";
    } else if (caseWord === "dushrodov") {
      return "мене";
    } else if (caseWord === "emozrodov") {
      return "мене";
    } else if (caseWord === "rodprogramrodov") {
      return "мене";
    } else if (caseWord === "sprsvitmisz") {
      return "собі";
    } else if (caseWord === "zonacomfmisz") {
      return "собі";
    } else if (caseWord === "spadkovistrodov") {
      return "мене";
    } else if (caseWord === "roduchmisz") {
      return "собі";
    } else if (caseWord === "matyindividualmaty") {
      return "моя";
    } else if (caseWord === "intelectmisz") {
      return "собі";
    } else if (caseWord === "mislanalitmisz") {
      return "собі";
    } else if (caseWord === "zvazkorudn") {
      return "собою";
    } else if (caseWord === "kontaktnistorudn") {
      return "собою";
    } else if (caseWord === "movaznahid") {
      return "себе";
    } else if (caseWord === "vzaemotochznahid") {
      return "себе";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "себе";
    } else if (caseWord === "pochuttamisz") {
      return "собі";
    } else if (caseWord === "sumpatmisz") {
      return "собі";
    } else if (caseWord === "garmonmisz") {
      return "собі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "себе";
    } else if (caseWord === "obrazkohanznahid") {
      return "себе";
    } else if (caseWord === "seksualnmisz") {
      return "собі";
    } else if (caseWord === "aktivnmisz") {
      return "собі";
    } else if (caseWord === "volyamisz") {
      return "собі";
    } else if (caseWord === "impulsrodov") {
      return "мене";
    } else if (caseWord === "musnmisz") {
      return "собі";
    } else {
      return "";
    }
  } else if (word === "Моє проявлення себе в соціумі") {
    if (caseWord === "rishuchmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "agresivmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "borotbaorudn") {
      return "моїм проявленням себе в соціумі";
    } else if (caseWord === "konkurenzorudn") {
      return "моїм проявленням себе в соціумі";
    } else if (caseWord === "neobachnmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "obmezenmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "stusnenrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "zakonymisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "pravularodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "konzentratmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "vutrummiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "seriozrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "skupistmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "zavzatmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "borgorudn") {
      return "моїм проявленням себе в соціумі";
    } else if (caseWord === "rozshurenrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "ghedristmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "mudristmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "spravedrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "luksbrendznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "zakordonomnazyv") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "vukladannyarodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "originalmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "svobodamiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "spontanistmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "neochikuvanrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "astrologrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "vidkruttyarodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "informattehnologorudn") {
      return "моїм проявленням себе в соціумі";
    } else if (caseWord === "fantastikrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "kosmosmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "maibutnmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "genialnmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "phantazmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "vighisnyznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "nathnennamiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "obmanmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "samoobmanmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "zalegnostrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "meditacznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "transormznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "extremsituazorudn") {
      return "моїм проявленням себе в соціумі";
    } else if (caseWord === "vuchavolarodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "narodgrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "orgazmrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "magiarodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "mafiaznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "vladaznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "manipulorudn") {
      return "моїм проявленням себе в соціумі";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "onkologrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "rozorenznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "pogransutznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "duhmiscev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "silvolimiscev") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "dushrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "emozrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "rodprogramrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "sprsvitmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "zonacomfmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "spadkovistrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "roduchmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "matyindividualmaty") {
      return "проявляє себе в соціумі";
    } else if (caseWord === "intelectmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "mislanalitmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "zvazkorudn") {
      return "моїм проявленням себе в соціумі";
    } else if (caseWord === "kontaktnistorudn") {
      return "моїм проявленням себе в соціумі";
    } else if (caseWord === "movaznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "vzaemotochznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "pochuttamisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "sumpatmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "garmonmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "obrazkohanznahid") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "seksualnmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "aktivnmisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "volyamisz") {
      return "моєму проявленні себе в соціумі";
    } else if (caseWord === "impulsrodov") {
      return "мого проявлення себе в соціумі";
    } else if (caseWord === "musnmisz") {
      return "моєму проявленні себе в соціумі";
    } else {
      return "";
    }
  } else if (word === "Мій зовнішній вигляд") {
    if (caseWord === "rishuchmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "agresivmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "borotbaorudn") {
      return "моїм зовнішнім виглядом";
    } else if (caseWord === "konkurenzorudn") {
      return "моїм зовнішнім виглядом";
    } else if (caseWord === "neobachnmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "obmezenmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "stusnenrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "zakonymisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "pravularodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "konzentratmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "vutrummiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "seriozrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "skupistmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "zavzatmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "borgorudn") {
      return "моїм зовнішнім виглядом";
    } else if (caseWord === "rozshurenrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "ghedristmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "mudristmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "spravedrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "luksbrendznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "zakordonomnazyv") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "vukladannyarodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "originalmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "svobodamiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "spontanistmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "neochikuvanrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "astrologrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "vidkruttyarodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "informattehnologorudn") {
      return "моїм зовнішнім виглядом";
    } else if (caseWord === "fantastikrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "kosmosmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "maibutnmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "genialnmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "phantazmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "vighisnyznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "nathnennamiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "obmanmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "samoobmanmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "zalegnostrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "meditacznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "transormznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "extremsituazorudn") {
      return "моїм зовнішнім виглядом";
    } else if (caseWord === "vuchavolarodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "narodgrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "orgazmrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "magiarodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "mafiaznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "vladaznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "manipulorudn") {
      return "моїм зовнішнім виглядом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "onkologrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "rozorenznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "pogransutznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "duhmiscev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "silvolimiscev") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "dushrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "emozrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "rodprogramrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "sprsvitmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "zonacomfmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "spadkovistrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "roduchmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "matyindividualmaty") {
      return "має привабливий зовнішній вигляд";
    } else if (caseWord === "intelectmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "mislanalitmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "zvazkorudn") {
      return "моїм зовнішнім виглядом";
    } else if (caseWord === "kontaktnistorudn") {
      return "моїм зовнішнім виглядом";
    } else if (caseWord === "movaznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "vzaemotochznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "pochuttamisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "sumpatmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "garmonmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "obrazkohanznahid") {
      return "мій зовнішній вигляд";
    } else if (caseWord === "seksualnmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "aktivnmisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "volyamisz") {
      return "моєму зовнішньому вигляді";
    } else if (caseWord === "impulsrodov") {
      return "мого зовнішнього вигляду";
    } else if (caseWord === "musnmisz") {
      return "моєму зовнішньому вигляді";
    } else {
      return "";
    }
  } else if (word === "Мої починання") {
    if (caseWord === "rishuchmisz") {
      return "моїх починаннях";
    } else if (caseWord === "agresivmisz") {
      return "моїх починаннях";
    } else if (caseWord === "borotbaorudn") {
      return "моїми починаннями";
    } else if (caseWord === "konkurenzorudn") {
      return "моїми починаннями";
    } else if (caseWord === "neobachnmisz") {
      return "моїх починаннях";
    } else if (caseWord === "obmezenmisz") {
      return "моїх починаннях";
    } else if (caseWord === "stusnenrodov") {
      return "моїх починань";
    } else if (caseWord === "zakonymisz") {
      return "моїх починаннях";
    } else if (caseWord === "pravularodov") {
      return "моїх починань";
    } else if (caseWord === "konzentratmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "vutrummiszev") {
      return "моїх починаннях";
    } else if (caseWord === "seriozrodov") {
      return "моїх починань";
    } else if (caseWord === "skupistmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "zavzatmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "borgorudn") {
      return "моїми починаннями";
    } else if (caseWord === "rozshurenrodov") {
      return "моїх починань";
    } else if (caseWord === "ghedristmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "mudristmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "spravedrodov") {
      return "моїх починань";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "моїх починаннях";
    } else if (caseWord === "luksbrendznahid") {
      return "мої починання";
    } else if (caseWord === "zakordonomnazyv") {
      return "мої починання";
    } else if (caseWord === "vukladannyarodov") {
      return "моїх починань";
    } else if (caseWord === "originalmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "svobodamiszev") {
      return "моїх починаннях";
    } else if (caseWord === "spontanistmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "neochikuvanrodov") {
      return "моїх починань";
    } else if (caseWord === "astrologrodov") {
      return "моїх починань";
    } else if (caseWord === "vidkruttyarodov") {
      return "моїх починань";
    } else if (caseWord === "informattehnologorudn") {
      return "моїми починаннями";
    } else if (caseWord === "fantastikrodov") {
      return "моїх починань";
    } else if (caseWord === "kosmosmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "maibutnmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "genialnmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "мої починання";
    } else if (caseWord === "phantazmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "мої починання";
    } else if (caseWord === "vighisnyznahid") {
      return "мої починання";
    } else if (caseWord === "nathnennamiszev") {
      return "моїх починаннях";
    } else if (caseWord === "obmanmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "samoobmanmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "zalegnostrodov") {
      return "моїх починань";
    } else if (caseWord === "meditacznahid") {
      return "мої починання";
    } else if (caseWord === "transormznahid") {
      return "мої починання";
    } else if (caseWord === "extremsituazorudn") {
      return "моїми починаннями";
    } else if (caseWord === "vuchavolarodov") {
      return "моїх починань";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "моїх починаннях";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мої починання";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мої починання";
    } else if (caseWord === "narodgrodov") {
      return "моїх починань";
    } else if (caseWord === "orgazmrodov") {
      return "моїх починань";
    } else if (caseWord === "magiarodov") {
      return "моїх починань";
    } else if (caseWord === "mafiaznahid") {
      return "мої починання";
    } else if (caseWord === "vladaznahid") {
      return "мої починання";
    } else if (caseWord === "manipulorudn") {
      return "моїми починаннями";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "мої починання";
    } else if (caseWord === "onkologrodov") {
      return "моїх починань";
    } else if (caseWord === "rozorenznahid") {
      return "мої починання";
    } else if (caseWord === "pogransutznahid") {
      return "мої починання";
    } else if (caseWord === "duhmiscev") {
      return "моїх починаннях";
    } else if (caseWord === "silvolimiscev") {
      return "моїх починаннях";
    } else if (caseWord === "dushrodov") {
      return "моїх починань";
    } else if (caseWord === "emozrodov") {
      return "моїх починань";
    } else if (caseWord === "rodprogramrodov") {
      return "моїх починань";
    } else if (caseWord === "sprsvitmisz") {
      return "моїх починаннях";
    } else if (caseWord === "zonacomfmisz") {
      return "моїх починаннях";
    } else if (caseWord === "spadkovistrodov") {
      return "моїх починань";
    } else if (caseWord === "roduchmisz") {
      return "моїх починаннях";
    } else if (caseWord === "intelectmisz") {
      return "моїх починаннях";
    } else if (caseWord === "mislanalitmisz") {
      return "моїх починаннях";
    } else if (caseWord === "zvazkorudn") {
      return "моїми починаннями";
    } else if (caseWord === "kontaktnistorudn") {
      return "моїми починаннями";
    } else if (caseWord === "movaznahid") {
      return "мої починання";
    } else if (caseWord === "vzaemotochznahid") {
      return "мої починання";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "мої починання";
    } else if (caseWord === "pochuttamisz") {
      return "моїх починаннях";
    } else if (caseWord === "sumpatmisz") {
      return "моїх починаннях";
    } else if (caseWord === "garmonmisz") {
      return "моїх починаннях";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "мої починання";
    } else if (caseWord === "obrazkohanznahid") {
      return "мої починання";
    } else if (caseWord === "seksualnmisz") {
      return "моїх починаннях";
    } else if (caseWord === "aktivnmisz") {
      return "моїх починаннях";
    } else if (caseWord === "volyamisz") {
      return "моїх починаннях";
    } else if (caseWord === "impulsrodov") {
      return "моїх починань";
    } else if (caseWord === "musnmisz") {
      return "моїх починаннях";
    } else {
      return "";
    }
  } else if (word === "Як мене соціум зчитує") {
    if (caseWord === "rishuchmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "agresivmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "borotbaorudn") {
      return "як мене соціум зчитує";
    } else if (caseWord === "konkurenzorudn") {
      return "як мене соціум зчитує";
    } else if (caseWord === "neobachnmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "obmezenmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "stusnenrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "zakonymisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "pravularodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "konzentratmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "vutrummiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "seriozrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "skupistmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "zavzatmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "borgorudn") {
      return "як мене соціум зчитує";
    } else if (caseWord === "rozshurenrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "ghedristmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "mudristmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "spravedrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "luksbrendznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "zakordonomnazyv") {
      return "як мене соціум зчитує";
    } else if (caseWord === "vukladannyarodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "originalmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "svobodamiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "spontanistmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "neochikuvanrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "astrologrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "vidkruttyarodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "informattehnologorudn") {
      return "як мене соціум зчитує";
    } else if (caseWord === "fantastikrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "kosmosmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "maibutnmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "genialnmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "phantazmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "vighisnyznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "nathnennamiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "obmanmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "samoobmanmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "zalegnostrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "meditacznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "transormznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "extremsituazorudn") {
      return "як мене соціум зчитує";
    } else if (caseWord === "vuchavolarodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "tuskupravlinznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "tuskupravlinznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "narodgrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "orgazmrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "magiarodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "mafiaznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "vladaznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "manipulorudn") {
      return "як мене соціум зчитує";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "onkologrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "rozorenznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "pogransutznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "duhmiscev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "silvolimiscev") {
      return "як мене соціум зчитує";
    } else if (caseWord === "dushrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "emozrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "rodprogramrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "sprsvitmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "zonacomfmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "spadkovistrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "roduchmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "matyindividualmaty") {
      return "зчитує соціум";
    } else if (caseWord === "intelectmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "mislanalitmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "zvazkorudn") {
      return "як мене соціум зчитує";
    } else if (caseWord === "kontaktnistorudn") {
      return "як мене соціум зчитує";
    } else if (caseWord === "movaznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "vzaemotochznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "pochuttamisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "sumpatmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "garmonmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "obrazkohanznahid") {
      return "як мене соціум зчитує";
    } else if (caseWord === "seksualnmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "aktivnmisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "volyamisz") {
      return "як мене соціум зчитує";
    } else if (caseWord === "impulsrodov") {
      return "як мене соціум зчитує";
    } else if (caseWord === "musnmisz") {
      return "як мене соціум зчитує";
    } else {
      return "";
    }
  } else if (word === "Блага") {
    if (caseWord === "rishuchmisz") {
      return "благах";
    } else if (caseWord === "agresivmisz") {
      return "благах";
    } else if (caseWord === "borotbaorudn") {
      return "благами";
    } else if (caseWord === "konkurenzorudn") {
      return "благами";
    } else if (caseWord === "neobachnmisz") {
      return "благах";
    } else if (caseWord === "obmezenmisz") {
      return "благах";
    } else if (caseWord === "stusnenrodov") {
      return "блага";
    } else if (caseWord === "zakonymisz") {
      return "благах";
    } else if (caseWord === "pravularodov") {
      return "блага";
    } else if (caseWord === "konzentratmiszev") {
      return "благах";
    } else if (caseWord === "vutrummiszev") {
      return "благах";
    } else if (caseWord === "seriozrodov") {
      return "блага";
    } else if (caseWord === "skupistmiszev") {
      return "благах";
    } else if (caseWord === "zavzatmiszev") {
      return "благах";
    } else if (caseWord === "borgorudn") {
      return "благами";
    } else if (caseWord === "rozshurenrodov") {
      return "блага";
    } else if (caseWord === "ghedristmiszev") {
      return "благах";
    } else if (caseWord === "mudristmiszev") {
      return "благах";
    } else if (caseWord === "spravedrodov") {
      return "блага";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "благах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "благах";
    } else if (caseWord === "luksbrendznahid") {
      return "блага";
    } else if (caseWord === "zakordonomnazyv") {
      return "блага";
    } else if (caseWord === "vukladannyarodov") {
      return "блага";
    } else if (caseWord === "originalmiszev") {
      return "благах";
    } else if (caseWord === "svobodamiszev") {
      return "благах";
    } else if (caseWord === "spontanistmiszev") {
      return "благах";
    } else if (caseWord === "neochikuvanrodov") {
      return "блага";
    } else if (caseWord === "astrologrodov") {
      return "блага";
    } else if (caseWord === "vidkruttyarodov") {
      return "блага";
    } else if (caseWord === "informattehnologorudn") {
      return "благами";
    } else if (caseWord === "fantastikrodov") {
      return "блага";
    } else if (caseWord === "kosmosmiszev") {
      return "благах";
    } else if (caseWord === "maibutnmiszev") {
      return "благах";
    } else if (caseWord === "genialnmiszev") {
      return "благах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "блага";
    } else if (caseWord === "phantazmiszev") {
      return "благах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "блага";
    } else if (caseWord === "vighisnyznahid") {
      return "блага";
    } else if (caseWord === "nathnennamiszev") {
      return "благах";
    } else if (caseWord === "obmanmiszev") {
      return "благах";
    } else if (caseWord === "samoobmanmiszev") {
      return "благах";
    } else if (caseWord === "zalegnostrodov") {
      return "блага";
    } else if (caseWord === "meditacznahid") {
      return "блага";
    } else if (caseWord === "transormznahid") {
      return "блага";
    } else if (caseWord === "extremsituazorudn") {
      return "благами";
    } else if (caseWord === "vuchavolarodov") {
      return "блага";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "благах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "блага";
    } else if (caseWord === "tuskupravlinznahid") {
      return "блага";
    } else if (caseWord === "narodgrodov") {
      return "блага";
    } else if (caseWord === "orgazmrodov") {
      return "блага";
    } else if (caseWord === "magiarodov") {
      return "блага";
    } else if (caseWord === "mafiaznahid") {
      return "блага";
    } else if (caseWord === "vladaznahid") {
      return "блага";
    } else if (caseWord === "manipulorudn") {
      return "благами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "блага";
    } else if (caseWord === "onkologrodov") {
      return "блага";
    } else if (caseWord === "rozorenznahid") {
      return "блага";
    } else if (caseWord === "pogransutznahid") {
      return "блага";
    } else if (caseWord === "duhmiscev") {
      return "благах";
    } else if (caseWord === "silvolimiscev") {
      return "благах";
    } else if (caseWord === "dushrodov") {
      return "блага";
    } else if (caseWord === "emozrodov") {
      return "блага";
    } else if (caseWord === "rodprogramrodov") {
      return "блага";
    } else if (caseWord === "sprsvitmisz") {
      return "благах";
    } else if (caseWord === "zonacomfmisz") {
      return "благах";
    } else if (caseWord === "spadkovistrodov") {
      return "блага";
    } else if (caseWord === "roduchmisz") {
      return "благах";
    } else if (caseWord === "matyindividualmaty") {
      return "має блага";
    } else if (caseWord === "intelectmisz") {
      return "благах";
    } else if (caseWord === "mislanalitmisz") {
      return "благах";
    } else if (caseWord === "zvazkorudn") {
      return "благами";
    } else if (caseWord === "kontaktnistorudn") {
      return "благами";
    } else if (caseWord === "movaznahid") {
      return "блага";
    } else if (caseWord === "vzaemotochznahid") {
      return "блага";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "блага";
    } else if (caseWord === "pochuttamisz") {
      return "благах";
    } else if (caseWord === "sumpatmisz") {
      return "благах";
    } else if (caseWord === "garmonmisz") {
      return "благах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "блага";
    } else if (caseWord === "obrazkohanznahid") {
      return "блага";
    } else if (caseWord === "seksualnmisz") {
      return "благах";
    } else if (caseWord === "aktivnmisz") {
      return "благах";
    } else if (caseWord === "volyamisz") {
      return "благах";
    } else if (caseWord === "impulsrodov") {
      return "блага";
    } else if (caseWord === "musnmisz") {
      return "благах";
    } else {
      return "";
    }
  } else if (word === "Матеріальні цінності") {
    if (caseWord === "rishuchmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "agresivmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "borotbaorudn") {
      return "матеріальними цінностями";
    } else if (caseWord === "konkurenzorudn") {
      return "матеріальними цінностями";
    } else if (caseWord === "neobachnmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "obmezenmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "stusnenrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "zakonymisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "pravularodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "konzentratmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "vutrummiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "seriozrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "skupistmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "zavzatmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "borgorudn") {
      return "матеріальними цінностями";
    } else if (caseWord === "rozshurenrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "ghedristmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "mudristmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "spravedrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "luksbrendznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "zakordonomnazyv") {
      return "матеріальні цінності";
    } else if (caseWord === "vukladannyarodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "originalmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "svobodamiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "spontanistmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "neochikuvanrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "astrologrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "vidkruttyarodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "informattehnologorudn") {
      return "матеріальними цінностями";
    } else if (caseWord === "fantastikrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "kosmosmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "maibutnmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "genialnmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "phantazmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "vighisnyznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "nathnennamiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "obmanmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "samoobmanmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "zalegnostrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "meditacznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "transormznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "extremsituazorudn") {
      return "матеріальними цінностями";
    } else if (caseWord === "vuchavolarodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "матеріальних цінностях";
    } else if (caseWord === "tuskupravlinznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "tuskupravlinznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "narodgrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "orgazmrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "magiarodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "mafiaznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "vladaznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "manipulorudn") {
      return "матеріальними цінностями";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "матеріальні цінності";
    } else if (caseWord === "onkologrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "rozorenznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "pogransutznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "duhmiscev") {
      return "матеріальних цінностях";
    } else if (caseWord === "silvolimiscev") {
      return "матеріальних цінностях";
    } else if (caseWord === "dushrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "emozrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "rodprogramrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "sprsvitmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "zonacomfmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "spadkovistrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "roduchmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "matyindividualmaty") {
      return "має матеріальні цінності";
    } else if (caseWord === "intelectmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "mislanalitmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "zvazkorudn") {
      return "матеріальними цінностями";
    } else if (caseWord === "kontaktnistorudn") {
      return "матеріальними цінностями";
    } else if (caseWord === "movaznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "vzaemotochznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "pochuttamisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "sumpatmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "garmonmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "obrazkohanznahid") {
      return "матеріальні цінності";
    } else if (caseWord === "seksualnmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "aktivnmisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "volyamisz") {
      return "матеріальних цінностях";
    } else if (caseWord === "impulsrodov") {
      return "матеріальних цінностей";
    } else if (caseWord === "musnmisz") {
      return "матеріальних цінностях";
    } else {
      return "";
    }
  } else if (word === "Фінанси") {
    if (caseWord === "rishuchmisz") {
      return "фінансах";
    } else if (caseWord === "agresivmisz") {
      return "фінансах";
    } else if (caseWord === "borotbaorudn") {
      return "фінансами";
    } else if (caseWord === "konkurenzorudn") {
      return "фінансами";
    } else if (caseWord === "neobachnmisz") {
      return "фінансах";
    } else if (caseWord === "obmezenmisz") {
      return "фінансах";
    } else if (caseWord === "stusnenrodov") {
      return "фінансів";
    } else if (caseWord === "zakonymisz") {
      return "фінансах";
    } else if (caseWord === "pravularodov") {
      return "фінансів";
    } else if (caseWord === "konzentratmiszev") {
      return "фінансах";
    } else if (caseWord === "vutrummiszev") {
      return "фінансах";
    } else if (caseWord === "seriozrodov") {
      return "фінансів";
    } else if (caseWord === "skupistmiszev") {
      return "фінансах";
    } else if (caseWord === "zavzatmiszev") {
      return "фінансах";
    } else if (caseWord === "borgorudn") {
      return "фінансами";
    } else if (caseWord === "rozshurenrodov") {
      return "фінансів";
    } else if (caseWord === "ghedristmiszev") {
      return "фінансах";
    } else if (caseWord === "mudristmiszev") {
      return "фінансах";
    } else if (caseWord === "spravedrodov") {
      return "фінансів";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "фінансах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "фінансах";
    } else if (caseWord === "luksbrendznahid") {
      return "фінанси";
    } else if (caseWord === "zakordonomnazyv") {
      return "фінанси";
    } else if (caseWord === "vukladannyarodov") {
      return "фінансів";
    } else if (caseWord === "originalmiszev") {
      return "фінансах";
    } else if (caseWord === "svobodamiszev") {
      return "фінансах";
    } else if (caseWord === "spontanistmiszev") {
      return "фінансах";
    } else if (caseWord === "neochikuvanrodov") {
      return "фінансів";
    } else if (caseWord === "astrologrodov") {
      return "фінансів";
    } else if (caseWord === "vidkruttyarodov") {
      return "фінансів";
    } else if (caseWord === "informattehnologorudn") {
      return "фінансами";
    } else if (caseWord === "fantastikrodov") {
      return "фінансів";
    } else if (caseWord === "kosmosmiszev") {
      return "фінансах";
    } else if (caseWord === "maibutnmiszev") {
      return "фінансах";
    } else if (caseWord === "genialnmiszev") {
      return "фінансах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "фінанси";
    } else if (caseWord === "phantazmiszev") {
      return "фінансах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "фінанси";
    } else if (caseWord === "vighisnyznahid") {
      return "фінанси";
    } else if (caseWord === "nathnennamiszev") {
      return "фінансах";
    } else if (caseWord === "obmanmiszev") {
      return "фінансах";
    } else if (caseWord === "samoobmanmiszev") {
      return "фінансах";
    } else if (caseWord === "zalegnostrodov") {
      return "фінансів";
    } else if (caseWord === "meditacznahid") {
      return "фінанси";
    } else if (caseWord === "transormznahid") {
      return "фінанси";
    } else if (caseWord === "extremsituazorudn") {
      return "фінансами";
    } else if (caseWord === "vuchavolarodov") {
      return "фінансів";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "фінансах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "фінанси";
    } else if (caseWord === "tuskupravlinznahid") {
      return "фінанси";
    } else if (caseWord === "narodgrodov") {
      return "фінансів";
    } else if (caseWord === "orgazmrodov") {
      return "фінансів";
    } else if (caseWord === "magiarodov") {
      return "фінансів";
    } else if (caseWord === "mafiaznahid") {
      return "фінанси";
    } else if (caseWord === "vladaznahid") {
      return "фінанси";
    } else if (caseWord === "manipulorudn") {
      return "фінансами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "фінанси";
    } else if (caseWord === "onkologrodov") {
      return "фінансів";
    } else if (caseWord === "rozorenznahid") {
      return "фінанси";
    } else if (caseWord === "pogransutznahid") {
      return "фінанси";
    } else if (caseWord === "duhmiscev") {
      return "фінансах";
    } else if (caseWord === "silvolimiscev") {
      return "фінансах";
    } else if (caseWord === "dushrodov") {
      return "фінансів";
    } else if (caseWord === "emozrodov") {
      return "фінансів";
    } else if (caseWord === "rodprogramrodov") {
      return "фінансів";
    } else if (caseWord === "sprsvitmisz") {
      return "фінансах";
    } else if (caseWord === "zonacomfmisz") {
      return "фінансах";
    } else if (caseWord === "spadkovistrodov") {
      return "фінансів";
    } else if (caseWord === "roduchmisz") {
      return "фінансах";
    } else if (caseWord === "matyindividualmaty") {
      return "займається фінансами";
    } else if (caseWord === "intelectmisz") {
      return "фінансах";
    } else if (caseWord === "mislanalitmisz") {
      return "фінансах";
    } else if (caseWord === "zvazkorudn") {
      return "фінансами";
    } else if (caseWord === "kontaktnistorudn") {
      return "фінансами";
    } else if (caseWord === "movaznahid") {
      return "фінанси";
    } else if (caseWord === "vzaemotochznahid") {
      return "фінанси";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "фінанси";
    } else if (caseWord === "pochuttamisz") {
      return "фінансах";
    } else if (caseWord === "sumpatmisz") {
      return "фінансах";
    } else if (caseWord === "garmonmisz") {
      return "фінансах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "фінанси";
    } else if (caseWord === "obrazkohanznahid") {
      return "фінанси";
    } else if (caseWord === "seksualnmisz") {
      return "фінансах";
    } else if (caseWord === "aktivnmisz") {
      return "фінансах";
    } else if (caseWord === "volyamisz") {
      return "фінансах";
    } else if (caseWord === "impulsrodov") {
      return "фінансів";
    } else if (caseWord === "musnmisz") {
      return "фінансах";
    } else {
      return "";
    }
  } else if (word === "Мої гроші") {
    if (caseWord === "rishuchmisz") {
      return "моїх грошах";
    } else if (caseWord === "agresivmisz") {
      return "моїх грошах";
    } else if (caseWord === "borotbaorudn") {
      return "моїми грошима";
    } else if (caseWord === "konkurenzorudn") {
      return "моїми грошима";
    } else if (caseWord === "neobachnmisz") {
      return "моїх грошах";
    } else if (caseWord === "obmezenmisz") {
      return "моїх грошах";
    } else if (caseWord === "stusnenrodov") {
      return "моїх грошей";
    } else if (caseWord === "zakonymisz") {
      return "моїх грошах";
    } else if (caseWord === "pravularodov") {
      return "моїх грошей";
    } else if (caseWord === "konzentratmiszev") {
      return "моїх грошах";
    } else if (caseWord === "vutrummiszev") {
      return "моїх грошах";
    } else if (caseWord === "seriozrodov") {
      return "моїх грошей";
    } else if (caseWord === "skupistmiszev") {
      return "моїх грошах";
    } else if (caseWord === "zavzatmiszev") {
      return "моїх грошах";
    } else if (caseWord === "borgorudn") {
      return "моїми грошима";
    } else if (caseWord === "rozshurenrodov") {
      return "моїх грошей";
    } else if (caseWord === "ghedristmiszev") {
      return "моїх грошах";
    } else if (caseWord === "mudristmiszev") {
      return "моїх грошах";
    } else if (caseWord === "spravedrodov") {
      return "моїх грошей";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "моїх грошах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "моїх грошах";
    } else if (caseWord === "luksbrendznahid") {
      return "мої гроші";
    } else if (caseWord === "zakordonomnazyv") {
      return "мої гроші";
    } else if (caseWord === "vukladannyarodov") {
      return "моїх грошей";
    } else if (caseWord === "originalmiszev") {
      return "моїх грошах";
    } else if (caseWord === "svobodamiszev") {
      return "моїх грошах";
    } else if (caseWord === "spontanistmiszev") {
      return "моїх грошах";
    } else if (caseWord === "neochikuvanrodov") {
      return "моїх грошей";
    } else if (caseWord === "astrologrodov") {
      return "моїх грошей";
    } else if (caseWord === "vidkruttyarodov") {
      return "моїх грошей";
    } else if (caseWord === "informattehnologorudn") {
      return "моїми грошима";
    } else if (caseWord === "fantastikrodov") {
      return "моїх грошей";
    } else if (caseWord === "kosmosmiszev") {
      return "моїх грошах";
    } else if (caseWord === "maibutnmiszev") {
      return "моїх грошах";
    } else if (caseWord === "genialnmiszev") {
      return "моїх грошах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "мої гроші";
    } else if (caseWord === "phantazmiszev") {
      return "моїх грошах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "мої гроші";
    } else if (caseWord === "vighisnyznahid") {
      return "мої гроші";
    } else if (caseWord === "nathnennamiszev") {
      return "моїх грошах";
    } else if (caseWord === "obmanmiszev") {
      return "моїх грошах";
    } else if (caseWord === "samoobmanmiszev") {
      return "моїх грошах";
    } else if (caseWord === "zalegnostrodov") {
      return "моїх грошей";
    } else if (caseWord === "meditacznahid") {
      return "мої гроші";
    } else if (caseWord === "transormznahid") {
      return "мої гроші";
    } else if (caseWord === "extremsituazorudn") {
      return "моїми грошима";
    } else if (caseWord === "vuchavolarodov") {
      return "моїх грошей";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "моїх грошах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мої гроші";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мої гроші";
    } else if (caseWord === "narodgrodov") {
      return "моїх грошей";
    } else if (caseWord === "orgazmrodov") {
      return "моїх грошей";
    } else if (caseWord === "magiarodov") {
      return "моїх грошей";
    } else if (caseWord === "mafiaznahid") {
      return "мої гроші";
    } else if (caseWord === "vladaznahid") {
      return "мої гроші";
    } else if (caseWord === "manipulorudn") {
      return "моїми грошима";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "мої гроші";
    } else if (caseWord === "onkologrodov") {
      return "моїх грошей";
    } else if (caseWord === "rozorenznahid") {
      return "мої гроші";
    } else if (caseWord === "pogransutznahid") {
      return "мої гроші";
    } else if (caseWord === "duhmiscev") {
      return "моїх грошах";
    } else if (caseWord === "silvolimiscev") {
      return "моїх грошах";
    } else if (caseWord === "dushrodov") {
      return "моїх грошей";
    } else if (caseWord === "emozrodov") {
      return "моїх грошей";
    } else if (caseWord === "rodprogramrodov") {
      return "моїх грошей";
    } else if (caseWord === "sprsvitmisz") {
      return "моїх грошах";
    } else if (caseWord === "zonacomfmisz") {
      return "моїх грошах";
    } else if (caseWord === "spadkovistrodov") {
      return "моїх грошей";
    } else if (caseWord === "roduchmisz") {
      return "моїх грошах";
    } else if (caseWord === "matyindividualmaty") {
      return "контролює мої гроші";
    } else if (caseWord === "intelectmisz") {
      return "моїх грошах";
    } else if (caseWord === "mislanalitmisz") {
      return "моїх грошах";
    } else if (caseWord === "zvazkorudn") {
      return "моїми грошима";
    } else if (caseWord === "kontaktnistorudn") {
      return "моїми грошима";
    } else if (caseWord === "movaznahid") {
      return "мої гроші";
    } else if (caseWord === "vzaemotochznahid") {
      return "мої гроші";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "мої гроші";
    } else if (caseWord === "pochuttamisz") {
      return "моїх грошах";
    } else if (caseWord === "sumpatmisz") {
      return "моїх грошах";
    } else if (caseWord === "garmonmisz") {
      return "моїх грошах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "мої гроші";
    } else if (caseWord === "obrazkohanznahid") {
      return "мої гроші";
    } else if (caseWord === "seksualnmisz") {
      return "моїх грошах";
    } else if (caseWord === "aktivnmisz") {
      return "моїх грошах";
    } else if (caseWord === "volyamisz") {
      return "моїх грошах";
    } else if (caseWord === "impulsrodov") {
      return "моїх грошей";
    } else if (caseWord === "musnmisz") {
      return "моїх грошах";
    } else {
      return "";
    }
  } else if (word === "Мої статки") {
    if (caseWord === "rishuchmisz") {
      return "моїх статках";
    } else if (caseWord === "agresivmisz") {
      return "моїх статках";
    } else if (caseWord === "borotbaorudn") {
      return "моїми статками";
    } else if (caseWord === "konkurenzorudn") {
      return "моїми статками";
    } else if (caseWord === "neobachnmisz") {
      return "моїх статках";
    } else if (caseWord === "obmezenmisz") {
      return "моїх статках";
    } else if (caseWord === "stusnenrodov") {
      return "моїх статків";
    } else if (caseWord === "zakonymisz") {
      return "моїх статках";
    } else if (caseWord === "pravularodov") {
      return "моїх статків";
    } else if (caseWord === "konzentratmiszev") {
      return "моїх статках";
    } else if (caseWord === "vutrummiszev") {
      return "моїх статках";
    } else if (caseWord === "seriozrodov") {
      return "моїх статків";
    } else if (caseWord === "skupistmiszev") {
      return "моїх статках";
    } else if (caseWord === "zavzatmiszev") {
      return "моїх статках";
    } else if (caseWord === "borgorudn") {
      return "моїми статками";
    } else if (caseWord === "rozshurenrodov") {
      return "моїх статків";
    } else if (caseWord === "ghedristmiszev") {
      return "моїх статках";
    } else if (caseWord === "mudristmiszev") {
      return "моїх статках";
    } else if (caseWord === "spravedrodov") {
      return "моїх статків";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "моїх статках";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "моїх статках";
    } else if (caseWord === "luksbrendznahid") {
      return "мої статки";
    } else if (caseWord === "zakordonomnazyv") {
      return "мої статки";
    } else if (caseWord === "vukladannyarodov") {
      return "моїх статків";
    } else if (caseWord === "originalmiszev") {
      return "моїх статках";
    } else if (caseWord === "svobodamiszev") {
      return "моїх статках";
    } else if (caseWord === "spontanistmiszev") {
      return "моїх статках";
    } else if (caseWord === "neochikuvanrodov") {
      return "моїх статків";
    } else if (caseWord === "astrologrodov") {
      return "моїх статків";
    } else if (caseWord === "vidkruttyarodov") {
      return "моїх статків";
    } else if (caseWord === "informattehnologorudn") {
      return "моїми статками";
    } else if (caseWord === "fantastikrodov") {
      return "моїх статків";
    } else if (caseWord === "kosmosmiszev") {
      return "моїх статках";
    } else if (caseWord === "maibutnmiszev") {
      return "моїх статках";
    } else if (caseWord === "genialnmiszev") {
      return "моїх статках";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "мої статки";
    } else if (caseWord === "phantazmiszev") {
      return "моїх статках";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "мої статки";
    } else if (caseWord === "vighisnyznahid") {
      return "мої статки";
    } else if (caseWord === "nathnennamiszev") {
      return "моїх статках";
    } else if (caseWord === "obmanmiszev") {
      return "моїх статках";
    } else if (caseWord === "samoobmanmiszev") {
      return "моїх статках";
    } else if (caseWord === "zalegnostrodov") {
      return "моїх статків";
    } else if (caseWord === "meditacznahid") {
      return "мої статки";
    } else if (caseWord === "transormznahid") {
      return "мої статки";
    } else if (caseWord === "extremsituazorudn") {
      return "моїми статками";
    } else if (caseWord === "vuchavolarodov") {
      return "моїх статків";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "моїх статках";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мої статки";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мої статки";
    } else if (caseWord === "narodgrodov") {
      return "моїх статків";
    } else if (caseWord === "orgazmrodov") {
      return "моїх статків";
    } else if (caseWord === "magiarodov") {
      return "моїх статків";
    } else if (caseWord === "mafiaznahid") {
      return "мої статки";
    } else if (caseWord === "vladaznahid") {
      return "мої статки";
    } else if (caseWord === "manipulorudn") {
      return "моїми статками";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "мої статки";
    } else if (caseWord === "onkologrodov") {
      return "моїх статків";
    } else if (caseWord === "rozorenznahid") {
      return "мої статки";
    } else if (caseWord === "pogransutznahid") {
      return "мої статки";
    } else if (caseWord === "duhmiscev") {
      return "моїх статках";
    } else if (caseWord === "silvolimiscev") {
      return "моїх статках";
    } else if (caseWord === "dushrodov") {
      return "моїх статків";
    } else if (caseWord === "emozrodov") {
      return "моїх статків";
    } else if (caseWord === "rodprogramrodov") {
      return "моїх статків";
    } else if (caseWord === "sprsvitmisz") {
      return "моїх статках";
    } else if (caseWord === "zonacomfmisz") {
      return "моїх статках";
    } else if (caseWord === "spadkovistrodov") {
      return "моїх статків";
    } else if (caseWord === "roduchmisz") {
      return "моїх статках";
    } else if (caseWord === "matyindividualmaty") {
      return "контролює мої статки";
    } else if (caseWord === "intelectmisz") {
      return "моїх статках";
    } else if (caseWord === "mislanalitmisz") {
      return "моїх статках";
    } else if (caseWord === "zvazkorudn") {
      return "моїми статками";
    } else if (caseWord === "kontaktnistorudn") {
      return "моїми статками";
    } else if (caseWord === "movaznahid") {
      return "мої статки";
    } else if (caseWord === "vzaemotochznahid") {
      return "мої статки";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "мої статки";
    } else if (caseWord === "pochuttamisz") {
      return "моїх статках";
    } else if (caseWord === "sumpatmisz") {
      return "моїх статках";
    } else if (caseWord === "garmonmisz") {
      return "моїх статках";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "мої статки";
    } else if (caseWord === "obrazkohanznahid") {
      return "мої статки";
    } else if (caseWord === "seksualnmisz") {
      return "моїх статках";
    } else if (caseWord === "aktivnmisz") {
      return "моїх статках";
    } else if (caseWord === "volyamisz") {
      return "моїх статках";
    } else if (caseWord === "impulsrodov") {
      return "моїх статків";
    } else if (caseWord === "musnmisz") {
      return "моїх статках";
    } else {
      return "";
    }
  } else if (
    word === "Ситуації заробітку грошей та накоплення ресурсів своєю працею"
  ) {
    if (caseWord === "rishuchmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "agresivmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "borotbaorudn") {
      return "ситуаціями заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "konkurenzorudn") {
      return "ситуаціями заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "neobachnmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "obmezenmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "stusnenrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "zakonymisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "pravularodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "konzentratmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "vutrummiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "seriozrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "skupistmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "zavzatmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "borgorudn") {
      return "ситуаціями заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "rozshurenrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "ghedristmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "mudristmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "spravedrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "luksbrendznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "zakordonomnazyv") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "vukladannyarodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "originalmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "svobodamiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "spontanistmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "neochikuvanrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "astrologrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "vidkruttyarodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "informattehnologorudn") {
      return "ситуаціями заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "fantastikrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "kosmosmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "maibutnmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "genialnmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "phantazmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "vighisnyznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "nathnennamiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "obmanmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "samoobmanmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "zalegnostrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "meditacznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "transormznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "extremsituazorudn") {
      return "ситуаціями заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "vuchavolarodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "tuskupravlinznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "tuskupravlinznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "narodgrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "orgazmrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "magiarodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "mafiaznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "vladaznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "manipulorudn") {
      return "ситуаціями заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "onkologrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "rozorenznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "pogransutznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "duhmiscev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "silvolimiscev") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "dushrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "emozrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "rodprogramrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "sprsvitmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "zonacomfmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "spadkovistrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "roduchmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "matyindividualmaty") {
      return "впливає на ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "intelectmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "mislanalitmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "zvazkorudn") {
      return "ситуаціями заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "kontaktnistorudn") {
      return "ситуаціями заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "movaznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "vzaemotochznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "pochuttamisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "sumpatmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "garmonmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "obrazkohanznahid") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "seksualnmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "aktivnmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "volyamisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "impulsrodov") {
      return "ситуацій заробітку грошей та накоплення ресурсів своєю працею";
    } else if (caseWord === "musnmisz") {
      return "ситуаціях заробітку грошей та накоплення ресурсів своєю працею";
    } else {
      return "";
    }
  } else if (word === "Запас сил") {
    if (caseWord === "rishuchmisz") {
      return "запасі сил";
    } else if (caseWord === "agresivmisz") {
      return "запасі сил";
    } else if (caseWord === "borotbaorudn") {
      return "запасом сил";
    } else if (caseWord === "konkurenzorudn") {
      return "запасом сил";
    } else if (caseWord === "neobachnmisz") {
      return "запасі сил";
    } else if (caseWord === "obmezenmisz") {
      return "запасі сил";
    } else if (caseWord === "stusnenrodov") {
      return "запасу сил";
    } else if (caseWord === "zakonymisz") {
      return "запасі сил";
    } else if (caseWord === "pravularodov") {
      return "запасу сил";
    } else if (caseWord === "konzentratmiszev") {
      return "запасі сил";
    } else if (caseWord === "vutrummiszev") {
      return "запасі сил";
    } else if (caseWord === "seriozrodov") {
      return "запасу сил";
    } else if (caseWord === "skupistmiszev") {
      return "запасі сил";
    } else if (caseWord === "zavzatmiszev") {
      return "запасі сил";
    } else if (caseWord === "borgorudn") {
      return "запасом сил";
    } else if (caseWord === "rozshurenrodov") {
      return "запасу сил";
    } else if (caseWord === "ghedristmiszev") {
      return "запасі сил";
    } else if (caseWord === "mudristmiszev") {
      return "запасі сил";
    } else if (caseWord === "spravedrodov") {
      return "запасу сил";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "запасі сил";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "запасі сил";
    } else if (caseWord === "luksbrendznahid") {
      return "запас сил";
    } else if (caseWord === "zakordonomnazyv") {
      return "запас сил";
    } else if (caseWord === "vukladannyarodov") {
      return "запасу сил";
    } else if (caseWord === "originalmiszev") {
      return "запасі сил";
    } else if (caseWord === "svobodamiszev") {
      return "запасі сил";
    } else if (caseWord === "spontanistmiszev") {
      return "запасі сил";
    } else if (caseWord === "neochikuvanrodov") {
      return "запасу сил";
    } else if (caseWord === "astrologrodov") {
      return "запасу сил";
    } else if (caseWord === "vidkruttyarodov") {
      return "запасу сил";
    } else if (caseWord === "informattehnologorudn") {
      return "запасом сил";
    } else if (caseWord === "fantastikrodov") {
      return "запасу сил";
    } else if (caseWord === "kosmosmiszev") {
      return "запасі сил";
    } else if (caseWord === "maibutnmiszev") {
      return "запасі сил";
    } else if (caseWord === "genialnmiszev") {
      return "запасі сил";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "запас сил";
    } else if (caseWord === "phantazmiszev") {
      return "запасі сил";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "запас сил";
    } else if (caseWord === "vighisnyznahid") {
      return "запас сил";
    } else if (caseWord === "nathnennamiszev") {
      return "запасі сил";
    } else if (caseWord === "obmanmiszev") {
      return "запасі сил";
    } else if (caseWord === "samoobmanmiszev") {
      return "запасі сил";
    } else if (caseWord === "zalegnostrodov") {
      return "запасу сил";
    } else if (caseWord === "meditacznahid") {
      return "запас сил";
    } else if (caseWord === "transormznahid") {
      return "запас сил";
    } else if (caseWord === "extremsituazorudn") {
      return "запасом сил";
    } else if (caseWord === "vuchavolarodov") {
      return "запасу сил";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "запасі сил";
    } else if (caseWord === "tuskupravlinznahid") {
      return "запас сил";
    } else if (caseWord === "tuskupravlinznahid") {
      return "запас сил";
    } else if (caseWord === "narodgrodov") {
      return "запасу сил";
    } else if (caseWord === "orgazmrodov") {
      return "запасу сил";
    } else if (caseWord === "magiarodov") {
      return "запасу сил";
    } else if (caseWord === "mafiaznahid") {
      return "запас сил";
    } else if (caseWord === "vladaznahid") {
      return "запас сил";
    } else if (caseWord === "manipulorudn") {
      return "запасом сил";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "запас сил";
    } else if (caseWord === "onkologrodov") {
      return "запасу сил";
    } else if (caseWord === "rozorenznahid") {
      return "запас сил";
    } else if (caseWord === "pogransutznahid") {
      return "запас сил";
    } else if (caseWord === "duhmiscev") {
      return "запасі сил";
    } else if (caseWord === "silvolimiscev") {
      return "запасі сил";
    } else if (caseWord === "dushrodov") {
      return "запасу сил";
    } else if (caseWord === "emozrodov") {
      return "запасу сил";
    } else if (caseWord === "rodprogramrodov") {
      return "запасу сил";
    } else if (caseWord === "sprsvitmisz") {
      return "запасі сил";
    } else if (caseWord === "zonacomfmisz") {
      return "запасі сил";
    } else if (caseWord === "spadkovistrodov") {
      return "запасу сил";
    } else if (caseWord === "roduchmisz") {
      return "запасі сил";
    } else if (caseWord === "matyindividualmaty") {
      return "має запас сил";
    } else if (caseWord === "intelectmisz") {
      return "запасі сил";
    } else if (caseWord === "mislanalitmisz") {
      return "запасі сил";
    } else if (caseWord === "zvazkorudn") {
      return "запасом сил";
    } else if (caseWord === "kontaktnistorudn") {
      return "запасом сил";
    } else if (caseWord === "movaznahid") {
      return "запас сил";
    } else if (caseWord === "vzaemotochznahid") {
      return "запас сил";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "запас сил";
    } else if (caseWord === "pochuttamisz") {
      return "запасі сил";
    } else if (caseWord === "sumpatmisz") {
      return "запасі сил";
    } else if (caseWord === "garmonmisz") {
      return "запасі сил";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "запас сил";
    } else if (caseWord === "obrazkohanznahid") {
      return "запас сил";
    } else if (caseWord === "seksualnmisz") {
      return "запасі сил";
    } else if (caseWord === "aktivnmisz") {
      return "запасі сил";
    } else if (caseWord === "volyamisz") {
      return "запасі сил";
    } else if (caseWord === "impulsrodov") {
      return "запасу сил";
    } else if (caseWord === "musnmisz") {
      return "запасі сил";
    } else {
      return "";
    }
  } else if (word === "Інтелект") {
    if (caseWord === "rishuchmisz") {
      return "інтелекті";
    } else if (caseWord === "agresivmisz") {
      return "інтелекті";
    } else if (caseWord === "borotbaorudn") {
      return "інтелектом";
    } else if (caseWord === "konkurenzorudn") {
      return "інтелектом";
    } else if (caseWord === "neobachnmisz") {
      return "інтелекті";
    } else if (caseWord === "obmezenmisz") {
      return "інтелекті";
    } else if (caseWord === "stusnenrodov") {
      return "інтелекту";
    } else if (caseWord === "zakonymisz") {
      return "інтелекті";
    } else if (caseWord === "pravularodov") {
      return "інтелекту";
    } else if (caseWord === "konzentratmiszev") {
      return "інтелекті";
    } else if (caseWord === "vutrummiszev") {
      return "інтелекті";
    } else if (caseWord === "seriozrodov") {
      return "інтелекту";
    } else if (caseWord === "skupistmiszev") {
      return "інтелекті";
    } else if (caseWord === "zavzatmiszev") {
      return "інтелекті";
    } else if (caseWord === "borgorudn") {
      return "інтелектом";
    } else if (caseWord === "rozshurenrodov") {
      return "інтелекту";
    } else if (caseWord === "ghedristmiszev") {
      return "інтелекті";
    } else if (caseWord === "mudristmiszev") {
      return "інтелекті";
    } else if (caseWord === "spravedrodov") {
      return "інтелекту";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "інтелекті";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "інтелекті";
    } else if (caseWord === "luksbrendznahid") {
      return "інтелект";
    } else if (caseWord === "zakordonomnazyv") {
      return "інтелект";
    } else if (caseWord === "vukladannyarodov") {
      return "інтелекту";
    } else if (caseWord === "originalmiszev") {
      return "інтелекті";
    } else if (caseWord === "svobodamiszev") {
      return "інтелекті";
    } else if (caseWord === "spontanistmiszev") {
      return "інтелекті";
    } else if (caseWord === "neochikuvanrodov") {
      return "інтелекту";
    } else if (caseWord === "astrologrodov") {
      return "інтелекту";
    } else if (caseWord === "vidkruttyarodov") {
      return "інтелекту";
    } else if (caseWord === "informattehnologorudn") {
      return "інтелектом";
    } else if (caseWord === "fantastikrodov") {
      return "інтелекту";
    } else if (caseWord === "kosmosmiszev") {
      return "інтелекті";
    } else if (caseWord === "maibutnmiszev") {
      return "інтелекті";
    } else if (caseWord === "genialnmiszev") {
      return "інтелекті";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "інтелект";
    } else if (caseWord === "phantazmiszev") {
      return "інтелекті";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "інтелект";
    } else if (caseWord === "vighisnyznahid") {
      return "інтелект";
    } else if (caseWord === "nathnennamiszev") {
      return "інтелекті";
    } else if (caseWord === "obmanmiszev") {
      return "інтелекті";
    } else if (caseWord === "samoobmanmiszev") {
      return "інтелекті";
    } else if (caseWord === "zalegnostrodov") {
      return "інтелекту";
    } else if (caseWord === "meditacznahid") {
      return "інтелект";
    } else if (caseWord === "transormznahid") {
      return "інтелект";
    } else if (caseWord === "extremsituazorudn") {
      return "інтелектом";
    } else if (caseWord === "vuchavolarodov") {
      return "інтелекту";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "інтелекті";
    } else if (caseWord === "tuskupravlinznahid") {
      return "інтелект";
    } else if (caseWord === "tuskupravlinznahid") {
      return "інтелект";
    } else if (caseWord === "narodgrodov") {
      return "інтелекту";
    } else if (caseWord === "orgazmrodov") {
      return "інтелекту";
    } else if (caseWord === "magiarodov") {
      return "інтелекту";
    } else if (caseWord === "mafiaznahid") {
      return "інтелект";
    } else if (caseWord === "vladaznahid") {
      return "інтелект";
    } else if (caseWord === "manipulorudn") {
      return "інтелектом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "інтелект";
    } else if (caseWord === "onkologrodov") {
      return "інтелекту";
    } else if (caseWord === "rozorenznahid") {
      return "інтелект";
    } else if (caseWord === "pogransutznahid") {
      return "інтелект";
    } else if (caseWord === "duhmiscev") {
      return "інтелекті";
    } else if (caseWord === "silvolimiscev") {
      return "інтелекті";
    } else if (caseWord === "dushrodov") {
      return "інтелекту";
    } else if (caseWord === "emozrodov") {
      return "інтелекту";
    } else if (caseWord === "rodprogramrodov") {
      return "інтелекту";
    } else if (caseWord === "sprsvitmisz") {
      return "інтелекті";
    } else if (caseWord === "zonacomfmisz") {
      return "інтелекті";
    } else if (caseWord === "spadkovistrodov") {
      return "інтелекту";
    } else if (caseWord === "roduchmisz") {
      return "інтелекті";
    } else if (caseWord === "matyindividualmaty") {
      return "має інтелект";
    } else if (caseWord === "intelectmisz") {
      return "інтелекті";
    } else if (caseWord === "mislanalitmisz") {
      return "інтелекті";
    } else if (caseWord === "zvazkorudn") {
      return "інтелектом";
    } else if (caseWord === "kontaktnistorudn") {
      return "інтелектом";
    } else if (caseWord === "movaznahid") {
      return "інтелект";
    } else if (caseWord === "vzaemotochznahid") {
      return "інтелект";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "інтелект";
    } else if (caseWord === "pochuttamisz") {
      return "інтелекті";
    } else if (caseWord === "sumpatmisz") {
      return "інтелекті";
    } else if (caseWord === "garmonmisz") {
      return "інтелекті";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "інтелект";
    } else if (caseWord === "obrazkohanznahid") {
      return "інтелект";
    } else if (caseWord === "seksualnmisz") {
      return "інтелекті";
    } else if (caseWord === "aktivnmisz") {
      return "інтелекті";
    } else if (caseWord === "volyamisz") {
      return "інтелекті";
    } else if (caseWord === "impulsrodov") {
      return "інтелекту";
    } else if (caseWord === "musnmisz") {
      return "інтелекті";
    } else {
      return "";
    }
  } else if (word === "Пізнання") {
    if (caseWord === "rishuchmisz") {
      return "пізнанні";
    } else if (caseWord === "agresivmisz") {
      return "пізнанні";
    } else if (caseWord === "borotbaorudn") {
      return "пізнанням";
    } else if (caseWord === "konkurenzorudn") {
      return "пізнанням";
    } else if (caseWord === "neobachnmisz") {
      return "пізнанні";
    } else if (caseWord === "obmezenmisz") {
      return "пізнанні";
    } else if (caseWord === "stusnenrodov") {
      return "пізнання";
    } else if (caseWord === "zakonymisz") {
      return "пізнанні";
    } else if (caseWord === "pravularodov") {
      return "пізнання";
    } else if (caseWord === "konzentratmiszev") {
      return "пізнанні";
    } else if (caseWord === "vutrummiszev") {
      return "пізнанні";
    } else if (caseWord === "seriozrodov") {
      return "пізнання";
    } else if (caseWord === "skupistmiszev") {
      return "пізнанні";
    } else if (caseWord === "zavzatmiszev") {
      return "пізнанні";
    } else if (caseWord === "borgorudn") {
      return "пізнанням";
    } else if (caseWord === "rozshurenrodov") {
      return "пізнання";
    } else if (caseWord === "ghedristmiszev") {
      return "пізнанні";
    } else if (caseWord === "mudristmiszev") {
      return "пізнанні";
    } else if (caseWord === "spravedrodov") {
      return "пізнання";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "пізнанні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "пізнанні";
    } else if (caseWord === "luksbrendznahid") {
      return "пізнання";
    } else if (caseWord === "zakordonomnazyv") {
      return "пізнання";
    } else if (caseWord === "vukladannyarodov") {
      return "пізнання";
    } else if (caseWord === "originalmiszev") {
      return "пізнанні";
    } else if (caseWord === "svobodamiszev") {
      return "пізнанні";
    } else if (caseWord === "spontanistmiszev") {
      return "пізнанні";
    } else if (caseWord === "neochikuvanrodov") {
      return "пізнання";
    } else if (caseWord === "astrologrodov") {
      return "пізнання";
    } else if (caseWord === "vidkruttyarodov") {
      return "пізнання";
    } else if (caseWord === "informattehnologorudn") {
      return "пізнанням";
    } else if (caseWord === "fantastikrodov") {
      return "пізнання";
    } else if (caseWord === "kosmosmiszev") {
      return "пізнанні";
    } else if (caseWord === "maibutnmiszev") {
      return "пізнанні";
    } else if (caseWord === "genialnmiszev") {
      return "пізнанні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "пізнання";
    } else if (caseWord === "phantazmiszev") {
      return "пізнанні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "пізнання";
    } else if (caseWord === "vighisnyznahid") {
      return "пізнання";
    } else if (caseWord === "nathnennamiszev") {
      return "пізнанні";
    } else if (caseWord === "obmanmiszev") {
      return "пізнанні";
    } else if (caseWord === "samoobmanmiszev") {
      return "пізнанні";
    } else if (caseWord === "zalegnostrodov") {
      return "пізнання";
    } else if (caseWord === "meditacznahid") {
      return "пізнання";
    } else if (caseWord === "transormznahid") {
      return "пізнання";
    } else if (caseWord === "extremsituazorudn") {
      return "пізнанням";
    } else if (caseWord === "vuchavolarodov") {
      return "пізнання";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "пізнанні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "пізнання";
    } else if (caseWord === "tuskupravlinznahid") {
      return "пізнання";
    } else if (caseWord === "narodgrodov") {
      return "пізнання";
    } else if (caseWord === "orgazmrodov") {
      return "пізнання";
    } else if (caseWord === "magiarodov") {
      return "пізнання";
    } else if (caseWord === "mafiaznahid") {
      return "пізнання";
    } else if (caseWord === "vladaznahid") {
      return "пізнання";
    } else if (caseWord === "manipulorudn") {
      return "пізнанням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "пізнання";
    } else if (caseWord === "onkologrodov") {
      return "пізнання";
    } else if (caseWord === "rozorenznahid") {
      return "пізнання";
    } else if (caseWord === "pogransutznahid") {
      return "пізнання";
    } else if (caseWord === "duhmiscev") {
      return "пізнанні";
    } else if (caseWord === "silvolimiscev") {
      return "пізнанні";
    } else if (caseWord === "dushrodov") {
      return "пізнання";
    } else if (caseWord === "emozrodov") {
      return "пізнання";
    } else if (caseWord === "rodprogramrodov") {
      return "пізнання";
    } else if (caseWord === "sprsvitmisz") {
      return "пізнанні";
    } else if (caseWord === "zonacomfmisz") {
      return "пізнанні";
    } else if (caseWord === "spadkovistrodov") {
      return "пізнання";
    } else if (caseWord === "roduchmisz") {
      return "пізнанні";
    } else if (caseWord === "matyindividualmaty") {
      return "пізнає";
    } else if (caseWord === "intelectmisz") {
      return "пізнанні";
    } else if (caseWord === "mislanalitmisz") {
      return "пізнанні";
    } else if (caseWord === "zvazkorudn") {
      return "пізнанням";
    } else if (caseWord === "kontaktnistorudn") {
      return "пізнанням";
    } else if (caseWord === "movaznahid") {
      return "пізнання";
    } else if (caseWord === "vzaemotochznahid") {
      return "пізнання";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "пізнання";
    } else if (caseWord === "pochuttamisz") {
      return "пізнанні";
    } else if (caseWord === "sumpatmisz") {
      return "пізнанні";
    } else if (caseWord === "garmonmisz") {
      return "пізнанні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "пізнання";
    } else if (caseWord === "obrazkohanznahid") {
      return "пізнання";
    } else if (caseWord === "seksualnmisz") {
      return "пізнанні";
    } else if (caseWord === "aktivnmisz") {
      return "пізнанні";
    } else if (caseWord === "volyamisz") {
      return "пізнанні";
    } else if (caseWord === "impulsrodov") {
      return "пізнання";
    } else if (caseWord === "musnmisz") {
      return "пізнанні";
    } else {
      return "";
    }
  } else if (word === "Навчання") {
    if (caseWord === "rishuchmisz") {
      return "навчанні";
    } else if (caseWord === "rishuchmisz") {
      return "навчанні";
    } else if (caseWord === "agresivmisz") {
      return "навчанні";
    } else if (caseWord === "agresivmisz") {
      return "навчанні";
    } else if (caseWord === "borotbaorudn") {
      return "навчанням";
    } else if (caseWord === "borotbaorudn") {
      return "навчанням";
    } else if (caseWord === "konkurenzorudn") {
      return "навчанням";
    } else if (caseWord === "konkurenzorudn") {
      return "навчанням";
    } else if (caseWord === "neobachnmisz") {
      return "навчанні";
    } else if (caseWord === "neobachnmisz") {
      return "навчанні";
    } else if (caseWord === "obmezenmisz") {
      return "навчанні";
    } else if (caseWord === "obmezenmisz") {
      return "навчанні";
    } else if (caseWord === "stusnenrodov") {
      return "навчання";
    } else if (caseWord === "stusnenrodov") {
      return "навчання";
    } else if (caseWord === "zakonymisz") {
      return "навчанні";
    } else if (caseWord === "zakonymisz") {
      return "навчанні";
    } else if (caseWord === "pravularodov") {
      return "навчання";
    } else if (caseWord === "pravularodov") {
      return "навчання";
    } else if (caseWord === "konzentratmiszev") {
      return "навчанні";
    } else if (caseWord === "konzentratmiszev") {
      return "навчанні";
    } else if (caseWord === "vutrummiszev") {
      return "навчанні";
    } else if (caseWord === "vutrummiszev") {
      return "навчанні";
    } else if (caseWord === "seriozrodov") {
      return "навчання";
    } else if (caseWord === "seriozrodov") {
      return "навчання";
    } else if (caseWord === "skupistmiszev") {
      return "навчанні";
    } else if (caseWord === "skupistmiszev") {
      return "навчанні";
    } else if (caseWord === "zavzatmiszev") {
      return "навчанні";
    } else if (caseWord === "zavzatmiszev") {
      return "навчанні";
    } else if (caseWord === "borgorudn") {
      return "навчанням";
    } else if (caseWord === "borgorudn") {
      return "навчанням";
    } else if (caseWord === "rozshurenrodov") {
      return "навчання";
    } else if (caseWord === "rozshurenrodov") {
      return "навчання";
    } else if (caseWord === "ghedristmiszev") {
      return "навчанні";
    } else if (caseWord === "ghedristmiszev") {
      return "навчанні";
    } else if (caseWord === "mudristmiszev") {
      return "навчанні";
    } else if (caseWord === "mudristmiszev") {
      return "навчанні";
    } else if (caseWord === "spravedrodov") {
      return "навчання";
    } else if (caseWord === "spravedrodov") {
      return "навчання";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "навчанні";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "навчанні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "навчанні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "навчанні";
    } else if (caseWord === "luksbrendznahid") {
      return "навчання";
    } else if (caseWord === "luksbrendznahid") {
      return "навчання";
    } else if (caseWord === "zakordonomnazyv") {
      return "навчання";
    } else if (caseWord === "zakordonomnazyv") {
      return "навчання";
    } else if (caseWord === "vukladannyarodov") {
      return "навчання";
    } else if (caseWord === "vukladannyarodov") {
      return "навчання";
    } else if (caseWord === "originalmiszev") {
      return "навчанні";
    } else if (caseWord === "originalmiszev") {
      return "навчанні";
    } else if (caseWord === "svobodamiszev") {
      return "навчанні";
    } else if (caseWord === "svobodamiszev") {
      return "навчанні";
    } else if (caseWord === "spontanistmiszev") {
      return "навчанні";
    } else if (caseWord === "spontanistmiszev") {
      return "навчанні";
    } else if (caseWord === "neochikuvanrodov") {
      return "навчання";
    } else if (caseWord === "neochikuvanrodov") {
      return "навчання";
    } else if (caseWord === "astrologrodov") {
      return "навчання";
    } else if (caseWord === "astrologrodov") {
      return "навчання";
    } else if (caseWord === "vidkruttyarodov") {
      return "навчання";
    } else if (caseWord === "vidkruttyarodov") {
      return "навчання";
    } else if (caseWord === "informattehnologorudn") {
      return "навчанням";
    } else if (caseWord === "informattehnologorudn") {
      return "навчанням";
    } else if (caseWord === "fantastikrodov") {
      return "навчання";
    } else if (caseWord === "fantastikrodov") {
      return "навчання";
    } else if (caseWord === "kosmosmiszev") {
      return "навчанні";
    } else if (caseWord === "kosmosmiszev") {
      return "навчанні";
    } else if (caseWord === "maibutnmiszev") {
      return "навчанні";
    } else if (caseWord === "maibutnmiszev") {
      return "навчанні";
    } else if (caseWord === "genialnmiszev") {
      return "навчанні";
    } else if (caseWord === "genialnmiszev") {
      return "навчанні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "навчання";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "навчання";
    } else if (caseWord === "phantazmiszev") {
      return "навчанні";
    } else if (caseWord === "phantazmiszev") {
      return "навчанні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "навчання";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "навчання";
    } else if (caseWord === "vighisnyznahid") {
      return "навчання";
    } else if (caseWord === "vighisnyznahid") {
      return "навчання";
    } else if (caseWord === "nathnennamiszev") {
      return "навчанні";
    } else if (caseWord === "nathnennamiszev") {
      return "навчанні";
    } else if (caseWord === "obmanmiszev") {
      return "навчанні";
    } else if (caseWord === "obmanmiszev") {
      return "навчанні";
    } else if (caseWord === "samoobmanmiszev") {
      return "навчанні";
    } else if (caseWord === "samoobmanmiszev") {
      return "навчанні";
    } else if (caseWord === "zalegnostrodov") {
      return "навчання";
    } else if (caseWord === "zalegnostrodov") {
      return "навчання";
    } else if (caseWord === "meditacznahid") {
      return "навчання";
    } else if (caseWord === "meditacznahid") {
      return "навчання";
    } else if (caseWord === "transormznahid") {
      return "навчання";
    } else if (caseWord === "transormznahid") {
      return "навчання";
    } else if (caseWord === "extremsituazorudn") {
      return "навчанням";
    } else if (caseWord === "extremsituazorudn") {
      return "навчанням";
    } else if (caseWord === "vuchavolarodov") {
      return "навчання";
    } else if (caseWord === "vuchavolarodov") {
      return "навчання";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "навчанні";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "навчанні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "навчання";
    } else if (caseWord === "tuskupravlinznahid") {
      return "навчання";
    } else if (caseWord === "tuskupravlinznahid") {
      return "навчання";
    } else if (caseWord === "tuskupravlinznahid") {
      return "навчання";
    } else if (caseWord === "narodgrodov") {
      return "навчання";
    } else if (caseWord === "narodgrodov") {
      return "навчання";
    } else if (caseWord === "orgazmrodov") {
      return "навчання";
    } else if (caseWord === "orgazmrodov") {
      return "навчання";
    } else if (caseWord === "magiarodov") {
      return "навчання";
    } else if (caseWord === "magiarodov") {
      return "навчання";
    } else if (caseWord === "mafiaznahid") {
      return "навчання";
    } else if (caseWord === "mafiaznahid") {
      return "навчання";
    } else if (caseWord === "vladaznahid") {
      return "навчання";
    } else if (caseWord === "vladaznahid") {
      return "навчання";
    } else if (caseWord === "manipulorudn") {
      return "навчанням";
    } else if (caseWord === "manipulorudn") {
      return "навчанням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "навчання";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "навчання";
    } else if (caseWord === "onkologrodov") {
      return "навчання";
    } else if (caseWord === "onkologrodov") {
      return "навчання";
    } else if (caseWord === "rozorenznahid") {
      return "навчання";
    } else if (caseWord === "rozorenznahid") {
      return "навчання";
    } else if (caseWord === "pogransutznahid") {
      return "навчання";
    } else if (caseWord === "pogransutznahid") {
      return "навчання";
    } else if (caseWord === "duhmiscev") {
      return "навчанні";
    } else if (caseWord === "duhmiscev") {
      return "навчанні";
    } else if (caseWord === "silvolimiscev") {
      return "навчанні";
    } else if (caseWord === "silvolimiscev") {
      return "навчанні";
    } else if (caseWord === "dushrodov") {
      return "навчання";
    } else if (caseWord === "dushrodov") {
      return "навчання";
    } else if (caseWord === "emozrodov") {
      return "навчання";
    } else if (caseWord === "emozrodov") {
      return "навчання";
    } else if (caseWord === "rodprogramrodov") {
      return "навчання";
    } else if (caseWord === "rodprogramrodov") {
      return "навчання";
    } else if (caseWord === "sprsvitmisz") {
      return "навчанні";
    } else if (caseWord === "sprsvitmisz") {
      return "навчанні";
    } else if (caseWord === "zonacomfmisz") {
      return "навчанні";
    } else if (caseWord === "zonacomfmisz") {
      return "навчанні";
    } else if (caseWord === "spadkovistrodov") {
      return "навчання";
    } else if (caseWord === "spadkovistrodov") {
      return "навчання";
    } else if (caseWord === "roduchmisz") {
      return "навчанні";
    } else if (caseWord === "roduchmisz") {
      return "навчанні";
    } else if (caseWord === "matyindividualmaty") {
      return "навчається";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась навчанням";
    } else if (caseWord === "intelectmisz") {
      return "навчанні";
    } else if (caseWord === "intelectmisz") {
      return "навчанні";
    } else if (caseWord === "mislanalitmisz") {
      return "навчанні";
    } else if (caseWord === "mislanalitmisz") {
      return "навчанні";
    } else if (caseWord === "zvazkorudn") {
      return "навчанням";
    } else if (caseWord === "zvazkorudn") {
      return "навчанням";
    } else if (caseWord === "kontaktnistorudn") {
      return "навчанням";
    } else if (caseWord === "kontaktnistorudn") {
      return "навчанням";
    } else if (caseWord === "movaznahid") {
      return "навчання";
    } else if (caseWord === "movaznahid") {
      return "навчання";
    } else if (caseWord === "vzaemotochznahid") {
      return "навчання";
    } else if (caseWord === "vzaemotochznahid") {
      return "навчання";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "навчання";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "навчання";
    } else if (caseWord === "pochuttamisz") {
      return "навчанні";
    } else if (caseWord === "pochuttamisz") {
      return "навчанні";
    } else if (caseWord === "sumpatmisz") {
      return "навчанні";
    } else if (caseWord === "sumpatmisz") {
      return "навчанні";
    } else if (caseWord === "garmonmisz") {
      return "навчанні";
    } else if (caseWord === "garmonmisz") {
      return "навчанні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "навчання";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "навчання";
    } else if (caseWord === "obrazkohanznahid") {
      return "навчання";
    } else if (caseWord === "obrazkohanznahid") {
      return "навчання";
    } else if (caseWord === "seksualnmisz") {
      return "навчанні";
    } else if (caseWord === "seksualnmisz") {
      return "навчанні";
    } else if (caseWord === "aktivnmisz") {
      return "навчанні";
    } else if (caseWord === "aktivnmisz") {
      return "навчанні";
    } else if (caseWord === "volyamisz") {
      return "навчанні";
    } else if (caseWord === "volyamisz") {
      return "навчанні";
    } else if (caseWord === "impulsrodov") {
      return "навчання";
    } else if (caseWord === "impulsrodov") {
      return "навчання";
    } else if (caseWord === "musnmisz") {
      return "навчанні";
    } else if (caseWord === "musnmisz") {
      return "навчанні";
    } else {
      return "";
    }
  } else if (word === "Близьке оточення") {
    if (caseWord === "rishuchmisz") {
      return "близькому оточенні";
    } else if (caseWord === "agresivmisz") {
      return "близькому оточенні";
    } else if (caseWord === "borotbaorudn") {
      return "близьким оточенням";
    } else if (caseWord === "konkurenzorudn") {
      return "близьким оточенням";
    } else if (caseWord === "neobachnmisz") {
      return "близькому оточенні";
    } else if (caseWord === "obmezenmisz") {
      return "близькому оточенні";
    } else if (caseWord === "stusnenrodov") {
      return "близького оточення";
    } else if (caseWord === "zakonymisz") {
      return "близькому оточенні";
    } else if (caseWord === "pravularodov") {
      return "близького оточення";
    } else if (caseWord === "konzentratmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "vutrummiszev") {
      return "близькому оточенні";
    } else if (caseWord === "seriozrodov") {
      return "близького оточення";
    } else if (caseWord === "skupistmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "zavzatmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "borgorudn") {
      return "близьким оточенням";
    } else if (caseWord === "rozshurenrodov") {
      return "близького оточення";
    } else if (caseWord === "ghedristmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "mudristmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "spravedrodov") {
      return "близького оточення";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "близькому оточенні";
    } else if (caseWord === "luksbrendznahid") {
      return "близьке оточення";
    } else if (caseWord === "luksbrendznahid") {
      return "близьке оточення";
    } else if (caseWord === "zakordonomnazyv") {
      return "близьке оточення";
    } else if (caseWord === "vukladannyarodov") {
      return "близького оточення";
    } else if (caseWord === "originalmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "svobodamiszev") {
      return "близькому оточенні";
    } else if (caseWord === "spontanistmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "neochikuvanrodov") {
      return "близького оточення";
    } else if (caseWord === "astrologrodov") {
      return "близького оточення";
    } else if (caseWord === "vidkruttyarodov") {
      return "близького оточення";
    } else if (caseWord === "informattehnologorudn") {
      return "близьким оточенням";
    } else if (caseWord === "fantastikrodov") {
      return "близького оточення";
    } else if (caseWord === "kosmosmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "maibutnmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "genialnmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "близьке оточення";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "близьке оточення";
    } else if (caseWord === "phantazmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "близьке оточення";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "близьке оточення";
    } else if (caseWord === "vighisnyznahid") {
      return "близьке оточення";
    } else if (caseWord === "vighisnyznahid") {
      return "близьке оточення";
    } else if (caseWord === "nathnennamiszev") {
      return "близькому оточенні";
    } else if (caseWord === "obmanmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "samoobmanmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "zalegnostrodov") {
      return "близького оточення";
    } else if (caseWord === "meditacznahid") {
      return "близьке оточення";
    } else if (caseWord === "meditacznahid") {
      return "близьке оточення";
    } else if (caseWord === "transormznahid") {
      return "близьке оточення";
    } else if (caseWord === "transormznahid") {
      return "близьке оточення";
    } else if (caseWord === "extremsituazorudn") {
      return "близьким оточенням";
    } else if (caseWord === "vuchavolarodov") {
      return "близького оточення";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "близькому оточенні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "близьке оточення";
    } else if (caseWord === "tuskupravlinznahid") {
      return "близьке оточення";
    } else if (caseWord === "tuskupravlinznahid") {
      return "близьке оточення";
    } else if (caseWord === "tuskupravlinznahid") {
      return "близьке оточення";
    } else if (caseWord === "narodgrodov") {
      return "близького оточення";
    } else if (caseWord === "orgazmrodov") {
      return "близького оточення";
    } else if (caseWord === "magiarodov") {
      return "близького оточення";
    } else if (caseWord === "mafiaznahid") {
      return "близьке оточення";
    } else if (caseWord === "mafiaznahid") {
      return "близьке оточення";
    } else if (caseWord === "vladaznahid") {
      return "близьке оточення";
    } else if (caseWord === "vladaznahid") {
      return "близьке оточення";
    } else if (caseWord === "manipulorudn") {
      return "близьким оточенням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "близьке оточення";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "близьке оточення";
    } else if (caseWord === "onkologrodov") {
      return "близького оточення";
    } else if (caseWord === "rozorenznahid") {
      return "близьке оточення";
    } else if (caseWord === "rozorenznahid") {
      return "близьке оточення";
    } else if (caseWord === "pogransutznahid") {
      return "близьке оточення";
    } else if (caseWord === "pogransutznahid") {
      return "близьке оточення";
    } else if (caseWord === "duhmiscev") {
      return "близькому оточенні";
    } else if (caseWord === "silvolimiscev") {
      return "близькому оточенні";
    } else if (caseWord === "dushrodov") {
      return "близького оточення";
    } else if (caseWord === "emozrodov") {
      return "близького оточення";
    } else if (caseWord === "rodprogramrodov") {
      return "близького оточення";
    } else if (caseWord === "sprsvitmisz") {
      return "близькому оточенні";
    } else if (caseWord === "zonacomfmisz") {
      return "близькому оточенні";
    } else if (caseWord === "spadkovistrodov") {
      return "близького оточення";
    } else if (caseWord === "roduchmisz") {
      return "близькому оточенні";
    } else if (caseWord === "matyindividualmaty") {
      return "в близькому оточенні";
    } else if (caseWord === "intelectmisz") {
      return "близькому оточенні";
    } else if (caseWord === "mislanalitmisz") {
      return "близькому оточенні";
    } else if (caseWord === "zvazkorudn") {
      return "близьким оточенням";
    } else if (caseWord === "kontaktnistorudn") {
      return "близьким оточенням";
    } else if (caseWord === "movaznahid") {
      return "близьке оточення";
    } else if (caseWord === "movaznahid") {
      return "близьке оточення";
    } else if (caseWord === "vzaemotochznahid") {
      return "близьке оточення";
    } else if (caseWord === "vzaemotochznahid") {
      return "близьке оточення";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "близьке оточення";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "близьке оточення";
    } else if (caseWord === "pochuttamisz") {
      return "близькому оточенні";
    } else if (caseWord === "sumpatmisz") {
      return "близькому оточенні";
    } else if (caseWord === "garmonmisz") {
      return "близькому оточенні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "близьке оточення";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "близьке оточення";
    } else if (caseWord === "obrazkohanznahid") {
      return "близьке оточення";
    } else if (caseWord === "obrazkohanznahid") {
      return "близьке оточення";
    } else if (caseWord === "seksualnmisz") {
      return "близькому оточенні";
    } else if (caseWord === "aktivnmisz") {
      return "близькому оточенні";
    } else if (caseWord === "volyamisz") {
      return "близькому оточенні";
    } else if (caseWord === "impulsrodov") {
      return "близького оточення";
    } else if (caseWord === "musnmisz") {
      return "близькому оточенні";
    } else {
      return "";
    }
  } else if (word === "Брати/сестри") {
    if (caseWord === "rishuchmisz") {
      return "братах/сестрах";
    } else if (caseWord === "agresivmisz") {
      return "братах/сестрах";
    } else if (caseWord === "borotbaorudn") {
      return "братами/сестрами";
    } else if (caseWord === "konkurenzorudn") {
      return "братами/сестрами";
    } else if (caseWord === "neobachnmisz") {
      return "братах/сестрах";
    } else if (caseWord === "obmezenmisz") {
      return "братах/сестрах";
    } else if (caseWord === "stusnenrodov") {
      return "братів/сестер";
    } else if (caseWord === "zakonymisz") {
      return "братах/сестрах";
    } else if (caseWord === "pravularodov") {
      return "братів/сестер";
    } else if (caseWord === "konzentratmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "vutrummiszev") {
      return "братах/сестрах";
    } else if (caseWord === "seriozrodov") {
      return "братів/сестер";
    } else if (caseWord === "skupistmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "zavzatmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "borgorudn") {
      return "братами/сестрами";
    } else if (caseWord === "rozshurenrodov") {
      return "братів/сестер";
    } else if (caseWord === "ghedristmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "mudristmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "spravedrodov") {
      return "братів/сестер";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "братах/сестрах";
    } else if (caseWord === "luksbrendznahid") {
      return "братів/сестер";
    } else if (caseWord === "zakordonomnazyv") {
      return "брати/сестри";
    } else if (caseWord === "vukladannyarodov") {
      return "братів/сестер";
    } else if (caseWord === "originalmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "svobodamiszev") {
      return "братах/сестрах";
    } else if (caseWord === "spontanistmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "neochikuvanrodov") {
      return "братів/сестер";
    } else if (caseWord === "astrologrodov") {
      return "братів/сестер";
    } else if (caseWord === "vidkruttyarodov") {
      return "братів/сестер";
    } else if (caseWord === "informattehnologorudn") {
      return "братами/сестрами";
    } else if (caseWord === "fantastikrodov") {
      return "братів/сестер";
    } else if (caseWord === "kosmosmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "maibutnmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "genialnmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "братів/сестер";
    } else if (caseWord === "phantazmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "братів/сестер";
    } else if (caseWord === "vighisnyznahid") {
      return "братів/сестер";
    } else if (caseWord === "nathnennamiszev") {
      return "братах/сестрах";
    } else if (caseWord === "obmanmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "samoobmanmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "zalegnostrodov") {
      return "братів/сестер";
    } else if (caseWord === "meditacznahid") {
      return "братів/сестер";
    } else if (caseWord === "transormznahid") {
      return "братів/сестер";
    } else if (caseWord === "extremsituazorudn") {
      return "братами/сестрами";
    } else if (caseWord === "vuchavolarodov") {
      return "братів/сестер";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "братах/сестрах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "братів/сестер";
    } else if (caseWord === "tuskupravlinznahid") {
      return "братів/сестер";
    } else if (caseWord === "narodgrodov") {
      return "братів/сестер";
    } else if (caseWord === "orgazmrodov") {
      return "братів/сестер";
    } else if (caseWord === "magiarodov") {
      return "братів/сестер";
    } else if (caseWord === "mafiaznahid") {
      return "братів/сестер";
    } else if (caseWord === "vladaznahid") {
      return "братів/сестер";
    } else if (caseWord === "manipulorudn") {
      return "братами/сестрами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "братів/сестер";
    } else if (caseWord === "onkologrodov") {
      return "братів/сестер";
    } else if (caseWord === "rozorenznahid") {
      return "братів/сестер";
    } else if (caseWord === "pogransutznahid") {
      return "братів/сестер";
    } else if (caseWord === "duhmiscev") {
      return "братах/сестрах";
    } else if (caseWord === "silvolimiscev") {
      return "братах/сестрах";
    } else if (caseWord === "dushrodov") {
      return "братів/сестер";
    } else if (caseWord === "emozrodov") {
      return "братів/сестер";
    } else if (caseWord === "rodprogramrodov") {
      return "братів/сестер";
    } else if (caseWord === "sprsvitmisz") {
      return "братах/сестрах";
    } else if (caseWord === "zonacomfmisz") {
      return "братах/сестрах";
    } else if (caseWord === "spadkovistrodov") {
      return "братів/сестер";
    } else if (caseWord === "roduchmisz") {
      return "братах/сестрах";
    } else if (caseWord === "matyindividualmaty") {
      return "має братів/сестер";
    } else if (caseWord === "intelectmisz") {
      return "братах/сестрах";
    } else if (caseWord === "mislanalitmisz") {
      return "братах/сестрах";
    } else if (caseWord === "zvazkorudn") {
      return "братами/сестрами";
    } else if (caseWord === "kontaktnistorudn") {
      return "братами/сестрами";
    } else if (caseWord === "movaznahid") {
      return "братів/сестер";
    } else if (caseWord === "vzaemotochznahid") {
      return "братів/сестер";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "братів/сестер";
    } else if (caseWord === "pochuttamisz") {
      return "братах/сестрах";
    } else if (caseWord === "sumpatmisz") {
      return "братах/сестрах";
    } else if (caseWord === "garmonmisz") {
      return "братах/сестрах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "братів/сестер";
    } else if (caseWord === "obrazkohanznahid") {
      return "братів/сестер";
    } else if (caseWord === "seksualnmisz") {
      return "братах/сестрах";
    } else if (caseWord === "aktivnmisz") {
      return "братах/сестрах";
    } else if (caseWord === "volyamisz") {
      return "братах/сестрах";
    } else if (caseWord === "impulsrodov") {
      return "братів/сестер";
    } else if (caseWord === "musnmisz") {
      return "братах/сестрах";
    } else {
      return "";
    }
  } else if (word === "Переміщення") {
    if (caseWord === "rishuchmisz") {
      return "переміщенні";
    } else if (caseWord === "agresivmisz") {
      return "переміщенні";
    } else if (caseWord === "borotbaorudn") {
      return "переміщенням";
    } else if (caseWord === "konkurenzorudn") {
      return "переміщенням";
    } else if (caseWord === "neobachnmisz") {
      return "переміщенні";
    } else if (caseWord === "obmezenmisz") {
      return "переміщенні";
    } else if (caseWord === "stusnenrodov") {
      return "переміщення";
    } else if (caseWord === "zakonymisz") {
      return "переміщенні";
    } else if (caseWord === "pravularodov") {
      return "переміщення";
    } else if (caseWord === "konzentratmiszev") {
      return "переміщенні";
    } else if (caseWord === "vutrummiszev") {
      return "переміщенні";
    } else if (caseWord === "seriozrodov") {
      return "переміщення";
    } else if (caseWord === "skupistmiszev") {
      return "переміщенні";
    } else if (caseWord === "zavzatmiszev") {
      return "переміщенні";
    } else if (caseWord === "borgorudn") {
      return "переміщенням";
    } else if (caseWord === "rozshurenrodov") {
      return "переміщення";
    } else if (caseWord === "ghedristmiszev") {
      return "переміщенні";
    } else if (caseWord === "mudristmiszev") {
      return "переміщенні";
    } else if (caseWord === "spravedrodov") {
      return "переміщення";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "переміщенні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "переміщенні";
    } else if (caseWord === "luksbrendznahid") {
      return "переміщення";
    } else if (caseWord === "zakordonomnazyv") {
      return "переміщення";
    } else if (caseWord === "vukladannyarodov") {
      return "переміщення";
    } else if (caseWord === "originalmiszev") {
      return "переміщенні";
    } else if (caseWord === "svobodamiszev") {
      return "переміщенні";
    } else if (caseWord === "spontanistmiszev") {
      return "переміщенні";
    } else if (caseWord === "neochikuvanrodov") {
      return "переміщення";
    } else if (caseWord === "astrologrodov") {
      return "переміщення";
    } else if (caseWord === "vidkruttyarodov") {
      return "переміщення";
    } else if (caseWord === "informattehnologorudn") {
      return "переміщенням";
    } else if (caseWord === "fantastikrodov") {
      return "переміщення";
    } else if (caseWord === "kosmosmiszev") {
      return "переміщенні";
    } else if (caseWord === "maibutnmiszev") {
      return "переміщенні";
    } else if (caseWord === "genialnmiszev") {
      return "переміщенні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "переміщення";
    } else if (caseWord === "phantazmiszev") {
      return "переміщенні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "переміщення";
    } else if (caseWord === "vighisnyznahid") {
      return "переміщення";
    } else if (caseWord === "nathnennamiszev") {
      return "переміщенні";
    } else if (caseWord === "obmanmiszev") {
      return "переміщенні";
    } else if (caseWord === "samoobmanmiszev") {
      return "переміщенні";
    } else if (caseWord === "zalegnostrodov") {
      return "переміщення";
    } else if (caseWord === "meditacznahid") {
      return "переміщення";
    } else if (caseWord === "transormznahid") {
      return "переміщення";
    } else if (caseWord === "extremsituazorudn") {
      return "переміщенням";
    } else if (caseWord === "vuchavolarodov") {
      return "переміщення";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "переміщенні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "переміщення";
    } else if (caseWord === "tuskupravlinznahid") {
      return "переміщення";
    } else if (caseWord === "narodgrodov") {
      return "переміщення";
    } else if (caseWord === "orgazmrodov") {
      return "переміщення";
    } else if (caseWord === "magiarodov") {
      return "переміщення";
    } else if (caseWord === "mafiaznahid") {
      return "переміщення";
    } else if (caseWord === "vladaznahid") {
      return "переміщення";
    } else if (caseWord === "manipulorudn") {
      return "переміщенням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "переміщення";
    } else if (caseWord === "onkologrodov") {
      return "переміщення";
    } else if (caseWord === "rozorenznahid") {
      return "переміщення";
    } else if (caseWord === "pogransutznahid") {
      return "переміщення";
    } else if (caseWord === "duhmiscev") {
      return "переміщенні";
    } else if (caseWord === "silvolimiscev") {
      return "переміщенні";
    } else if (caseWord === "dushrodov") {
      return "переміщення";
    } else if (caseWord === "emozrodov") {
      return "переміщення";
    } else if (caseWord === "rodprogramrodov") {
      return "переміщення";
    } else if (caseWord === "sprsvitmisz") {
      return "переміщенні";
    } else if (caseWord === "zonacomfmisz") {
      return "переміщенні";
    } else if (caseWord === "spadkovistrodov") {
      return "переміщення";
    } else if (caseWord === "roduchmisz") {
      return "переміщенні";
    } else if (caseWord === "matyindividualmaty") {
      return "переміщається";
    } else if (caseWord === "intelectmisz") {
      return "переміщенні";
    } else if (caseWord === "mislanalitmisz") {
      return "переміщенні";
    } else if (caseWord === "zvazkorudn") {
      return "переміщенням";
    } else if (caseWord === "kontaktnistorudn") {
      return "переміщенням";
    } else if (caseWord === "movaznahid") {
      return "переміщення";
    } else if (caseWord === "vzaemotochznahid") {
      return "переміщення";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "переміщення";
    } else if (caseWord === "pochuttamisz") {
      return "переміщенні";
    } else if (caseWord === "sumpatmisz") {
      return "переміщенні";
    } else if (caseWord === "garmonmisz") {
      return "переміщенні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "переміщення";
    } else if (caseWord === "obrazkohanznahid") {
      return "переміщення";
    } else if (caseWord === "seksualnmisz") {
      return "переміщенні";
    } else if (caseWord === "aktivnmisz") {
      return "переміщенні";
    } else if (caseWord === "volyamisz") {
      return "переміщенні";
    } else if (caseWord === "impulsrodov") {
      return "переміщення";
    } else if (caseWord === "musnmisz") {
      return "переміщенні";
    } else {
      return "";
    }
  } else if (word === "Короткі подорожі") {
    if (caseWord === "rishuchmisz") {
      return "коротких подорожах";
    } else if (caseWord === "agresivmisz") {
      return "коротких подорожах";
    } else if (caseWord === "borotbaorudn") {
      return "короткими подорожами";
    } else if (caseWord === "konkurenzorudn") {
      return "короткими подорожами";
    } else if (caseWord === "neobachnmisz") {
      return "коротких подорожах";
    } else if (caseWord === "obmezenmisz") {
      return "коротких подорожах";
    } else if (caseWord === "stusnenrodov") {
      return "коротких подорожів";
    } else if (caseWord === "zakonymisz") {
      return "коротких подорожах";
    } else if (caseWord === "pravularodov") {
      return "коротких подорожів";
    } else if (caseWord === "konzentratmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "vutrummiszev") {
      return "коротких подорожах";
    } else if (caseWord === "seriozrodov") {
      return "коротких подорожів";
    } else if (caseWord === "skupistmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "zavzatmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "borgorudn") {
      return "короткими подорожами";
    } else if (caseWord === "rozshurenrodov") {
      return "коротких подорожів";
    } else if (caseWord === "ghedristmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "mudristmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "spravedrodov") {
      return "коротких подорожів";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "коротких подорожах";
    } else if (caseWord === "luksbrendznahid") {
      return "короткі подорожі";
    } else if (caseWord === "zakordonomnazyv") {
      return "короткі подорожі";
    } else if (caseWord === "vukladannyarodov") {
      return "коротких подорожів";
    } else if (caseWord === "originalmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "svobodamiszev") {
      return "коротких подорожах";
    } else if (caseWord === "spontanistmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "neochikuvanrodov") {
      return "коротких подорожів";
    } else if (caseWord === "astrologrodov") {
      return "коротких подорожів";
    } else if (caseWord === "vidkruttyarodov") {
      return "коротких подорожів";
    } else if (caseWord === "informattehnologorudn") {
      return "короткими подорожами";
    } else if (caseWord === "fantastikrodov") {
      return "коротких подорожів";
    } else if (caseWord === "kosmosmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "maibutnmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "genialnmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "короткі подорожі";
    } else if (caseWord === "phantazmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "короткі подорожі";
    } else if (caseWord === "vighisnyznahid") {
      return "короткі подорожі";
    } else if (caseWord === "nathnennamiszev") {
      return "коротких подорожах";
    } else if (caseWord === "obmanmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "samoobmanmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "zalegnostrodov") {
      return "коротких подорожів";
    } else if (caseWord === "meditacznahid") {
      return "короткі подорожі";
    } else if (caseWord === "transormznahid") {
      return "короткі подорожі";
    } else if (caseWord === "extremsituazorudn") {
      return "короткими подорожами";
    } else if (caseWord === "vuchavolarodov") {
      return "коротких подорожів";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "коротких подорожах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "короткі подорожі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "короткі подорожі";
    } else if (caseWord === "narodgrodov") {
      return "коротких подорожів";
    } else if (caseWord === "orgazmrodov") {
      return "коротких подорожів";
    } else if (caseWord === "magiarodov") {
      return "коротких подорожів";
    } else if (caseWord === "mafiaznahid") {
      return "короткі подорожі";
    } else if (caseWord === "vladaznahid") {
      return "короткі подорожі";
    } else if (caseWord === "manipulorudn") {
      return "короткими подорожами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "короткі подорожі";
    } else if (caseWord === "onkologrodov") {
      return "коротких подорожів";
    } else if (caseWord === "rozorenznahid") {
      return "короткі подорожі";
    } else if (caseWord === "pogransutznahid") {
      return "короткі подорожі";
    } else if (caseWord === "duhmiscev") {
      return "коротких подорожах";
    } else if (caseWord === "silvolimiscev") {
      return "коротких подорожах";
    } else if (caseWord === "dushrodov") {
      return "коротких подорожів";
    } else if (caseWord === "emozrodov") {
      return "коротких подорожів";
    } else if (caseWord === "rodprogramrodov") {
      return "коротких подорожів";
    } else if (caseWord === "sprsvitmisz") {
      return "коротких подорожах";
    } else if (caseWord === "zonacomfmisz") {
      return "коротких подорожах";
    } else if (caseWord === "spadkovistrodov") {
      return "коротких подорожів";
    } else if (caseWord === "roduchmisz") {
      return "коротких подорожах";
    } else if (caseWord === "matyindividualmaty") {
      return "подорожує";
    } else if (caseWord === "intelectmisz") {
      return "коротких подорожах";
    } else if (caseWord === "mislanalitmisz") {
      return "коротких подорожах";
    } else if (caseWord === "zvazkorudn") {
      return "короткими подорожами";
    } else if (caseWord === "kontaktnistorudn") {
      return "короткими подорожами";
    } else if (caseWord === "movaznahid") {
      return "короткі подорожі";
    } else if (caseWord === "vzaemotochznahid") {
      return "короткі подорожі";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "короткі подорожі";
    } else if (caseWord === "pochuttamisz") {
      return "коротких подорожах";
    } else if (caseWord === "sumpatmisz") {
      return "коротких подорожах";
    } else if (caseWord === "garmonmisz") {
      return "коротких подорожах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "короткі подорожі";
    } else if (caseWord === "obrazkohanznahid") {
      return "короткі подорожі";
    } else if (caseWord === "seksualnmisz") {
      return "коротких подорожах";
    } else if (caseWord === "aktivnmisz") {
      return "коротких подорожах";
    } else if (caseWord === "volyamisz") {
      return "коротких подорожах";
    } else if (caseWord === "impulsrodov") {
      return "коротких подорожів";
    } else if (caseWord === "musnmisz") {
      return "коротких подорожах";
    } else {
      return "";
    }
  } else if (word === "Батьківський дім") {
    if (caseWord === "rishuchmisz") {
      return "батьківському домі";
    } else if (caseWord === "agresivmisz") {
      return "батьківському домі";
    } else if (caseWord === "borotbaorudn") {
      return "батьківським домом";
    } else if (caseWord === "konkurenzorudn") {
      return "батьківським домом";
    } else if (caseWord === "neobachnmisz") {
      return "батьківському домі";
    } else if (caseWord === "obmezenmisz") {
      return "батьківському домі";
    } else if (caseWord === "stusnenrodov") {
      return "батьківського дому";
    } else if (caseWord === "zakonymisz") {
      return "батьківському домі";
    } else if (caseWord === "pravularodov") {
      return "батьківського дому";
    } else if (caseWord === "konzentratmiszev") {
      return "батьківському домі";
    } else if (caseWord === "vutrummiszev") {
      return "батьківському домі";
    } else if (caseWord === "seriozrodov") {
      return "батьківського дому";
    } else if (caseWord === "skupistmiszev") {
      return "батьківському домі";
    } else if (caseWord === "zavzatmiszev") {
      return "батьківському домі";
    } else if (caseWord === "borgorudn") {
      return "батьківським домом";
    } else if (caseWord === "rozshurenrodov") {
      return "батьківського дому";
    } else if (caseWord === "ghedristmiszev") {
      return "батьківському домі";
    } else if (caseWord === "mudristmiszev") {
      return "батьківському домі";
    } else if (caseWord === "spravedrodov") {
      return "батьківського дому";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "батьківському домі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "батьківському домі";
    } else if (caseWord === "luksbrendznahid") {
      return "батьківський дім";
    } else if (caseWord === "zakordonomnazyv") {
      return "батьківський дім";
    } else if (caseWord === "vukladannyarodov") {
      return "батьківського дому";
    } else if (caseWord === "originalmiszev") {
      return "батьківському домі";
    } else if (caseWord === "svobodamiszev") {
      return "батьківському домі";
    } else if (caseWord === "spontanistmiszev") {
      return "батьківському домі";
    } else if (caseWord === "neochikuvanrodov") {
      return "батьківського дому";
    } else if (caseWord === "astrologrodov") {
      return "батьківського дому";
    } else if (caseWord === "vidkruttyarodov") {
      return "батьківського дому";
    } else if (caseWord === "informattehnologorudn") {
      return "батьківським домом";
    } else if (caseWord === "fantastikrodov") {
      return "батьківського дому";
    } else if (caseWord === "kosmosmiszev") {
      return "батьківському домі";
    } else if (caseWord === "maibutnmiszev") {
      return "батьківському домі";
    } else if (caseWord === "genialnmiszev") {
      return "батьківському домі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "батьківський дім";
    } else if (caseWord === "phantazmiszev") {
      return "батьківському домі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "батьківський дім";
    } else if (caseWord === "vighisnyznahid") {
      return "батьківський дім";
    } else if (caseWord === "nathnennamiszev") {
      return "батьківському домі";
    } else if (caseWord === "obmanmiszev") {
      return "батьківському домі";
    } else if (caseWord === "samoobmanmiszev") {
      return "батьківському домі";
    } else if (caseWord === "zalegnostrodov") {
      return "батьківського дому";
    } else if (caseWord === "meditacznahid") {
      return "батьківський дім";
    } else if (caseWord === "transormznahid") {
      return "батьківський дім";
    } else if (caseWord === "extremsituazorudn") {
      return "батьківським домом";
    } else if (caseWord === "vuchavolarodov") {
      return "батьківського дому";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "батьківському домі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "батьківський дім";
    } else if (caseWord === "tuskupravlinznahid") {
      return "батьківський дім";
    } else if (caseWord === "narodgrodov") {
      return "батьківського дому";
    } else if (caseWord === "orgazmrodov") {
      return "батьківського дому";
    } else if (caseWord === "magiarodov") {
      return "батьківського дому";
    } else if (caseWord === "mafiaznahid") {
      return "батьківський дім";
    } else if (caseWord === "vladaznahid") {
      return "батьківський дім";
    } else if (caseWord === "manipulorudn") {
      return "батьківським домом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "батьківський дім";
    } else if (caseWord === "onkologrodov") {
      return "батьківського дому";
    } else if (caseWord === "rozorenznahid") {
      return "батьківський дім";
    } else if (caseWord === "pogransutznahid") {
      return "батьківський дім";
    } else if (caseWord === "duhmiscev") {
      return "батьківському домі";
    } else if (caseWord === "silvolimiscev") {
      return "батьківському домі";
    } else if (caseWord === "dushrodov") {
      return "батьківського дому";
    } else if (caseWord === "emozrodov") {
      return "батьківського дому";
    } else if (caseWord === "rodprogramrodov") {
      return "батьківського дому";
    } else if (caseWord === "sprsvitmisz") {
      return "батьківському домі";
    } else if (caseWord === "zonacomfmisz") {
      return "батьківському домі";
    } else if (caseWord === "spadkovistrodov") {
      return "батьківського дому";
    } else if (caseWord === "roduchmisz") {
      return "батьківському домі";
    } else if (caseWord === "matyindividualmaty") {
      return "в батьківському домі";
    } else if (caseWord === "intelectmisz") {
      return "батьківському домі";
    } else if (caseWord === "mislanalitmisz") {
      return "батьківському домі";
    } else if (caseWord === "zvazkorudn") {
      return "батьківським домом";
    } else if (caseWord === "kontaktnistorudn") {
      return "батьківським домом";
    } else if (caseWord === "movaznahid") {
      return "батьківський дім";
    } else if (caseWord === "vzaemotochznahid") {
      return "батьківський дім";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "батьківський дім";
    } else if (caseWord === "pochuttamisz") {
      return "батьківському домі";
    } else if (caseWord === "sumpatmisz") {
      return "батьківському домі";
    } else if (caseWord === "garmonmisz") {
      return "батьківському домі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "батьківський дім";
    } else if (caseWord === "obrazkohanznahid") {
      return "батьківський дім";
    } else if (caseWord === "seksualnmisz") {
      return "батьківському домі";
    } else if (caseWord === "aktivnmisz") {
      return "батьківському домі";
    } else if (caseWord === "volyamisz") {
      return "батьківському домі";
    } else if (caseWord === "impulsrodov") {
      return "батьківського дому";
    } else if (caseWord === "musnmisz") {
      return "батьківському домі";
    } else {
      return "";
    }
  } else if (word === "Батьки") {
    if (caseWord === "rishuchmisz") {
      return "батьках";
    } else if (caseWord === "agresivmisz") {
      return "батьках";
    } else if (caseWord === "borotbaorudn") {
      return "батьками";
    } else if (caseWord === "konkurenzorudn") {
      return "батьками";
    } else if (caseWord === "neobachnmisz") {
      return "батьках";
    } else if (caseWord === "obmezenmisz") {
      return "батьках";
    } else if (caseWord === "stusnenrodov") {
      return "батьків";
    } else if (caseWord === "zakonymisz") {
      return "батьках";
    } else if (caseWord === "pravularodov") {
      return "батьків";
    } else if (caseWord === "konzentratmiszev") {
      return "батьках";
    } else if (caseWord === "vutrummiszev") {
      return "батьках";
    } else if (caseWord === "seriozrodov") {
      return "батьків";
    } else if (caseWord === "skupistmiszev") {
      return "батьках";
    } else if (caseWord === "zavzatmiszev") {
      return "батьках";
    } else if (caseWord === "borgorudn") {
      return "батьками";
    } else if (caseWord === "rozshurenrodov") {
      return "батьків";
    } else if (caseWord === "ghedristmiszev") {
      return "батьках";
    } else if (caseWord === "mudristmiszev") {
      return "батьках";
    } else if (caseWord === "spravedrodov") {
      return "батьків";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "батьках";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "батьках";
    } else if (caseWord === "luksbrendznahid") {
      return "батьків";
    } else if (caseWord === "zakordonomnazyv") {
      return "батьки";
    } else if (caseWord === "vukladannyarodov") {
      return "батьків";
    } else if (caseWord === "originalmiszev") {
      return "батьках";
    } else if (caseWord === "svobodamiszev") {
      return "батьках";
    } else if (caseWord === "spontanistmiszev") {
      return "батьках";
    } else if (caseWord === "neochikuvanrodov") {
      return "батьків";
    } else if (caseWord === "astrologrodov") {
      return "батьків";
    } else if (caseWord === "vidkruttyarodov") {
      return "батьків";
    } else if (caseWord === "informattehnologorudn") {
      return "батьками";
    } else if (caseWord === "fantastikrodov") {
      return "батьків";
    } else if (caseWord === "kosmosmiszev") {
      return "батьках";
    } else if (caseWord === "maibutnmiszev") {
      return "батьках";
    } else if (caseWord === "genialnmiszev") {
      return "батьках";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "батьків";
    } else if (caseWord === "phantazmiszev") {
      return "батьках";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "батьків";
    } else if (caseWord === "vighisnyznahid") {
      return "батьків";
    } else if (caseWord === "nathnennamiszev") {
      return "батьках";
    } else if (caseWord === "obmanmiszev") {
      return "батьках";
    } else if (caseWord === "samoobmanmiszev") {
      return "батьках";
    } else if (caseWord === "zalegnostrodov") {
      return "батьків";
    } else if (caseWord === "meditacznahid") {
      return "батьків";
    } else if (caseWord === "transormznahid") {
      return "батьків";
    } else if (caseWord === "extremsituazorudn") {
      return "батьками";
    } else if (caseWord === "vuchavolarodov") {
      return "батьків";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "батьках";
    } else if (caseWord === "tuskupravlinznahid") {
      return "батьків";
    } else if (caseWord === "tuskupravlinznahid") {
      return "батьків";
    } else if (caseWord === "narodgrodov") {
      return "батьків";
    } else if (caseWord === "orgazmrodov") {
      return "батьків";
    } else if (caseWord === "magiarodov") {
      return "батьків";
    } else if (caseWord === "mafiaznahid") {
      return "батьків";
    } else if (caseWord === "vladaznahid") {
      return "батьків";
    } else if (caseWord === "manipulorudn") {
      return "батьками";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "батьків";
    } else if (caseWord === "onkologrodov") {
      return "батьків";
    } else if (caseWord === "rozorenznahid") {
      return "батьків";
    } else if (caseWord === "pogransutznahid") {
      return "батьків";
    } else if (caseWord === "duhmiscev") {
      return "батьках";
    } else if (caseWord === "silvolimiscev") {
      return "батьках";
    } else if (caseWord === "dushrodov") {
      return "батьків";
    } else if (caseWord === "emozrodov") {
      return "батьків";
    } else if (caseWord === "rodprogramrodov") {
      return "батьків";
    } else if (caseWord === "sprsvitmisz") {
      return "батьках";
    } else if (caseWord === "zonacomfmisz") {
      return "батьках";
    } else if (caseWord === "spadkovistrodov") {
      return "батьків";
    } else if (caseWord === "roduchmisz") {
      return "батьках";
    } else if (caseWord === "matyindividualmaty") {
      return "має батьків";
    } else if (caseWord === "intelectmisz") {
      return "батьках";
    } else if (caseWord === "mislanalitmisz") {
      return "батьках";
    } else if (caseWord === "zvazkorudn") {
      return "батьками";
    } else if (caseWord === "kontaktnistorudn") {
      return "батьками";
    } else if (caseWord === "movaznahid") {
      return "батьків";
    } else if (caseWord === "vzaemotochznahid") {
      return "батьків";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "батьків";
    } else if (caseWord === "pochuttamisz") {
      return "батьках";
    } else if (caseWord === "sumpatmisz") {
      return "батьках";
    } else if (caseWord === "garmonmisz") {
      return "батьках";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "батьків";
    } else if (caseWord === "obrazkohanznahid") {
      return "батьків";
    } else if (caseWord === "seksualnmisz") {
      return "батьках";
    } else if (caseWord === "aktivnmisz") {
      return "батьках";
    } else if (caseWord === "volyamisz") {
      return "батьках";
    } else if (caseWord === "impulsrodov") {
      return "батьків";
    } else if (caseWord === "musnmisz") {
      return "батьках";
    } else {
      return "";
    }
  } else if (word === "Спадщина") {
    if (caseWord === "rishuchmisz") {
      return "спадщині";
    } else if (caseWord === "rishuchmisz") {
      return "спадщині";
    } else if (caseWord === "agresivmisz") {
      return "спадщині";
    } else if (caseWord === "agresivmisz") {
      return "спадщині";
    } else if (caseWord === "borotbaorudn") {
      return "спадщиною";
    } else if (caseWord === "borotbaorudn") {
      return "спадщиною";
    } else if (caseWord === "konkurenzorudn") {
      return "спадщиною";
    } else if (caseWord === "konkurenzorudn") {
      return "спадщиною";
    } else if (caseWord === "neobachnmisz") {
      return "спадщині";
    } else if (caseWord === "neobachnmisz") {
      return "спадщині";
    } else if (caseWord === "obmezenmisz") {
      return "спадщині";
    } else if (caseWord === "obmezenmisz") {
      return "спадщині";
    } else if (caseWord === "stusnenrodov") {
      return "спадщини";
    } else if (caseWord === "stusnenrodov") {
      return "спадщини";
    } else if (caseWord === "zakonymisz") {
      return "спадщині";
    } else if (caseWord === "zakonymisz") {
      return "спадщині";
    } else if (caseWord === "pravularodov") {
      return "спадщини";
    } else if (caseWord === "pravularodov") {
      return "спадщини";
    } else if (caseWord === "konzentratmiszev") {
      return "спадщині";
    } else if (caseWord === "konzentratmiszev") {
      return "спадщині";
    } else if (caseWord === "vutrummiszev") {
      return "спадщині";
    } else if (caseWord === "vutrummiszev") {
      return "спадщині";
    } else if (caseWord === "seriozrodov") {
      return "спадщини";
    } else if (caseWord === "seriozrodov") {
      return "спадщини";
    } else if (caseWord === "skupistmiszev") {
      return "спадщині";
    } else if (caseWord === "skupistmiszev") {
      return "спадщині";
    } else if (caseWord === "zavzatmiszev") {
      return "спадщині";
    } else if (caseWord === "zavzatmiszev") {
      return "спадщині";
    } else if (caseWord === "borgorudn") {
      return "спадщиною";
    } else if (caseWord === "borgorudn") {
      return "спадщиною";
    } else if (caseWord === "rozshurenrodov") {
      return "спадщини";
    } else if (caseWord === "rozshurenrodov") {
      return "спадщини";
    } else if (caseWord === "ghedristmiszev") {
      return "спадщині";
    } else if (caseWord === "ghedristmiszev") {
      return "спадщині";
    } else if (caseWord === "mudristmiszev") {
      return "спадщині";
    } else if (caseWord === "mudristmiszev") {
      return "спадщині";
    } else if (caseWord === "spravedrodov") {
      return "спадщини";
    } else if (caseWord === "spravedrodov") {
      return "спадщини";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "спадщині";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "спадщині";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "спадщині";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "спадщині";
    } else if (caseWord === "luksbrendznahid") {
      return "спадщину";
    } else if (caseWord === "luksbrendznahid") {
      return "спадщину";
    } else if (caseWord === "zakordonomnazyv") {
      return "спадщина";
    } else if (caseWord === "zakordonomnazyv") {
      return "спадщина";
    } else if (caseWord === "vukladannyarodov") {
      return "спадщини";
    } else if (caseWord === "vukladannyarodov") {
      return "спадщини";
    } else if (caseWord === "originalmiszev") {
      return "спадщині";
    } else if (caseWord === "originalmiszev") {
      return "спадщині";
    } else if (caseWord === "svobodamiszev") {
      return "спадщині";
    } else if (caseWord === "svobodamiszev") {
      return "спадщині";
    } else if (caseWord === "spontanistmiszev") {
      return "спадщині";
    } else if (caseWord === "spontanistmiszev") {
      return "спадщині";
    } else if (caseWord === "neochikuvanrodov") {
      return "спадщини";
    } else if (caseWord === "neochikuvanrodov") {
      return "спадщини";
    } else if (caseWord === "astrologrodov") {
      return "спадщини";
    } else if (caseWord === "astrologrodov") {
      return "спадщини";
    } else if (caseWord === "vidkruttyarodov") {
      return "спадщини";
    } else if (caseWord === "vidkruttyarodov") {
      return "спадщини";
    } else if (caseWord === "informattehnologorudn") {
      return "спадщиною";
    } else if (caseWord === "informattehnologorudn") {
      return "спадщиною";
    } else if (caseWord === "fantastikrodov") {
      return "спадщини";
    } else if (caseWord === "fantastikrodov") {
      return "спадщини";
    } else if (caseWord === "kosmosmiszev") {
      return "спадщині";
    } else if (caseWord === "kosmosmiszev") {
      return "спадщині";
    } else if (caseWord === "maibutnmiszev") {
      return "спадщині";
    } else if (caseWord === "maibutnmiszev") {
      return "спадщині";
    } else if (caseWord === "genialnmiszev") {
      return "спадщині";
    } else if (caseWord === "genialnmiszev") {
      return "спадщині";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "спадщину";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "спадщину";
    } else if (caseWord === "phantazmiszev") {
      return "спадщині";
    } else if (caseWord === "phantazmiszev") {
      return "спадщині";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "спадщину";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "спадщину";
    } else if (caseWord === "vighisnyznahid") {
      return "спадщину";
    } else if (caseWord === "vighisnyznahid") {
      return "спадщину";
    } else if (caseWord === "nathnennamiszev") {
      return "спадщині";
    } else if (caseWord === "nathnennamiszev") {
      return "спадщині";
    } else if (caseWord === "obmanmiszev") {
      return "спадщині";
    } else if (caseWord === "obmanmiszev") {
      return "спадщині";
    } else if (caseWord === "samoobmanmiszev") {
      return "спадщині";
    } else if (caseWord === "samoobmanmiszev") {
      return "спадщині";
    } else if (caseWord === "zalegnostrodov") {
      return "спадщини";
    } else if (caseWord === "zalegnostrodov") {
      return "спадщини";
    } else if (caseWord === "meditacznahid") {
      return "спадщину";
    } else if (caseWord === "meditacznahid") {
      return "спадщину";
    } else if (caseWord === "transormznahid") {
      return "спадщину";
    } else if (caseWord === "transormznahid") {
      return "спадщину";
    } else if (caseWord === "extremsituazorudn") {
      return "спадщиною";
    } else if (caseWord === "extremsituazorudn") {
      return "спадщиною";
    } else if (caseWord === "vuchavolarodov") {
      return "спадщини";
    } else if (caseWord === "vuchavolarodov") {
      return "спадщини";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "спадщині";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "спадщині";
    } else if (caseWord === "tuskupravlinznahid") {
      return "спадщину";
    } else if (caseWord === "tuskupravlinznahid") {
      return "спадщину";
    } else if (caseWord === "tuskupravlinznahid") {
      return "спадщину";
    } else if (caseWord === "tuskupravlinznahid") {
      return "спадщину";
    } else if (caseWord === "narodgrodov") {
      return "спадщини";
    } else if (caseWord === "narodgrodov") {
      return "спадщини";
    } else if (caseWord === "orgazmrodov") {
      return "спадщини";
    } else if (caseWord === "orgazmrodov") {
      return "спадщини";
    } else if (caseWord === "magiarodov") {
      return "спадщини";
    } else if (caseWord === "magiarodov") {
      return "спадщини";
    } else if (caseWord === "mafiaznahid") {
      return "спадщину";
    } else if (caseWord === "mafiaznahid") {
      return "спадщину";
    } else if (caseWord === "vladaznahid") {
      return "спадщину";
    } else if (caseWord === "vladaznahid") {
      return "спадщину";
    } else if (caseWord === "manipulorudn") {
      return "спадщиною";
    } else if (caseWord === "manipulorudn") {
      return "спадщиною";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "спадщину";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "спадщину";
    } else if (caseWord === "onkologrodov") {
      return "спадщини";
    } else if (caseWord === "onkologrodov") {
      return "спадщини";
    } else if (caseWord === "rozorenznahid") {
      return "спадщину";
    } else if (caseWord === "rozorenznahid") {
      return "спадщину";
    } else if (caseWord === "pogransutznahid") {
      return "спадщину";
    } else if (caseWord === "pogransutznahid") {
      return "спадщину";
    } else if (caseWord === "duhmiscev") {
      return "спадщині";
    } else if (caseWord === "duhmiscev") {
      return "спадщині";
    } else if (caseWord === "silvolimiscev") {
      return "спадщині";
    } else if (caseWord === "silvolimiscev") {
      return "спадщині";
    } else if (caseWord === "dushrodov") {
      return "спадщини";
    } else if (caseWord === "dushrodov") {
      return "спадщини";
    } else if (caseWord === "emozrodov") {
      return "спадщини";
    } else if (caseWord === "emozrodov") {
      return "спадщини";
    } else if (caseWord === "rodprogramrodov") {
      return "спадщини";
    } else if (caseWord === "rodprogramrodov") {
      return "спадщини";
    } else if (caseWord === "sprsvitmisz") {
      return "спадщині";
    } else if (caseWord === "sprsvitmisz") {
      return "спадщині";
    } else if (caseWord === "zonacomfmisz") {
      return "спадщині";
    } else if (caseWord === "zonacomfmisz") {
      return "спадщині";
    } else if (caseWord === "spadkovistrodov") {
      return "спадщини";
    } else if (caseWord === "spadkovistrodov") {
      return "спадщини";
    } else if (caseWord === "roduchmisz") {
      return "спадщині";
    } else if (caseWord === "roduchmisz") {
      return "спадщині";
    } else if (caseWord === "matyindividualmaty") {
      return "має спадщину";
    } else if (caseWord === "matyindividualmaty") {
      return "мала спадщину";
    } else if (caseWord === "intelectmisz") {
      return "спадщині";
    } else if (caseWord === "intelectmisz") {
      return "спадщині";
    } else if (caseWord === "mislanalitmisz") {
      return "спадщині";
    } else if (caseWord === "mislanalitmisz") {
      return "спадщині";
    } else if (caseWord === "zvazkorudn") {
      return "спадщиною";
    } else if (caseWord === "zvazkorudn") {
      return "спадщиною";
    } else if (caseWord === "kontaktnistorudn") {
      return "спадщиною";
    } else if (caseWord === "kontaktnistorudn") {
      return "спадщиною";
    } else if (caseWord === "movaznahid") {
      return "спадщину";
    } else if (caseWord === "movaznahid") {
      return "спадщину";
    } else if (caseWord === "vzaemotochznahid") {
      return "спадщину";
    } else if (caseWord === "vzaemotochznahid") {
      return "спадщину";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "спадщину";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "спадщину";
    } else if (caseWord === "pochuttamisz") {
      return "спадщині";
    } else if (caseWord === "pochuttamisz") {
      return "спадщині";
    } else if (caseWord === "sumpatmisz") {
      return "спадщині";
    } else if (caseWord === "sumpatmisz") {
      return "спадщині";
    } else if (caseWord === "garmonmisz") {
      return "спадщині";
    } else if (caseWord === "garmonmisz") {
      return "спадщині";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "спадщину";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "спадщину";
    } else if (caseWord === "obrazkohanznahid") {
      return "спадщину";
    } else if (caseWord === "obrazkohanznahid") {
      return "спадщину";
    } else if (caseWord === "seksualnmisz") {
      return "спадщині";
    } else if (caseWord === "seksualnmisz") {
      return "спадщині";
    } else if (caseWord === "aktivnmisz") {
      return "спадщині";
    } else if (caseWord === "aktivnmisz") {
      return "спадщині";
    } else if (caseWord === "volyamisz") {
      return "спадщині";
    } else if (caseWord === "volyamisz") {
      return "спадщині";
    } else if (caseWord === "impulsrodov") {
      return "спадщини";
    } else if (caseWord === "impulsrodov") {
      return "спадщини";
    } else if (caseWord === "musnmisz") {
      return "спадщині";
    } else if (caseWord === "musnmisz") {
      return "спадщині";
    } else {
      return "";
    }
  } else if (word === "Домівка") {
    if (caseWord === "rishuchmisz") {
      return "домівці";
    } else if (caseWord === "agresivmisz") {
      return "домівці";
    } else if (caseWord === "borotbaorudn") {
      return "домівкою";
    } else if (caseWord === "konkurenzorudn") {
      return "домівкою";
    } else if (caseWord === "neobachnmisz") {
      return "домівці";
    } else if (caseWord === "obmezenmisz") {
      return "домівці";
    } else if (caseWord === "stusnenrodov") {
      return "домівки";
    } else if (caseWord === "zakonymisz") {
      return "домівці";
    } else if (caseWord === "pravularodov") {
      return "домівки";
    } else if (caseWord === "konzentratmiszev") {
      return "домівці";
    } else if (caseWord === "vutrummiszev") {
      return "домівці";
    } else if (caseWord === "seriozrodov") {
      return "домівки";
    } else if (caseWord === "skupistmiszev") {
      return "домівці";
    } else if (caseWord === "zavzatmiszev") {
      return "домівці";
    } else if (caseWord === "borgorudn") {
      return "домівкою";
    } else if (caseWord === "rozshurenrodov") {
      return "домівки";
    } else if (caseWord === "ghedristmiszev") {
      return "домівці";
    } else if (caseWord === "mudristmiszev") {
      return "домівці";
    } else if (caseWord === "spravedrodov") {
      return "домівки";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "домівці";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "домівці";
    } else if (caseWord === "luksbrendznahid") {
      return "домівку";
    } else if (caseWord === "zakordonomnazyv") {
      return "домівка";
    } else if (caseWord === "vukladannyarodov") {
      return "домівки";
    } else if (caseWord === "originalmiszev") {
      return "домівці";
    } else if (caseWord === "svobodamiszev") {
      return "домівці";
    } else if (caseWord === "spontanistmiszev") {
      return "домівці";
    } else if (caseWord === "neochikuvanrodov") {
      return "домівки";
    } else if (caseWord === "astrologrodov") {
      return "домівки";
    } else if (caseWord === "vidkruttyarodov") {
      return "домівки";
    } else if (caseWord === "informattehnologorudn") {
      return "домівкою";
    } else if (caseWord === "fantastikrodov") {
      return "домівки";
    } else if (caseWord === "kosmosmiszev") {
      return "домівці";
    } else if (caseWord === "maibutnmiszev") {
      return "домівці";
    } else if (caseWord === "genialnmiszev") {
      return "домівці";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "домівку";
    } else if (caseWord === "phantazmiszev") {
      return "домівці";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "домівку";
    } else if (caseWord === "vighisnyznahid") {
      return "домівку";
    } else if (caseWord === "nathnennamiszev") {
      return "домівці";
    } else if (caseWord === "obmanmiszev") {
      return "домівці";
    } else if (caseWord === "samoobmanmiszev") {
      return "домівці";
    } else if (caseWord === "zalegnostrodov") {
      return "домівки";
    } else if (caseWord === "meditacznahid") {
      return "домівку";
    } else if (caseWord === "transormznahid") {
      return "домівку";
    } else if (caseWord === "extremsituazorudn") {
      return "домівкою";
    } else if (caseWord === "vuchavolarodov") {
      return "домівки";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "домівці";
    } else if (caseWord === "tuskupravlinznahid") {
      return "домівку";
    } else if (caseWord === "tuskupravlinznahid") {
      return "домівку";
    } else if (caseWord === "narodgrodov") {
      return "домівки";
    } else if (caseWord === "orgazmrodov") {
      return "домівки";
    } else if (caseWord === "magiarodov") {
      return "домівки";
    } else if (caseWord === "mafiaznahid") {
      return "домівку";
    } else if (caseWord === "vladaznahid") {
      return "домівку";
    } else if (caseWord === "manipulorudn") {
      return "домівкою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "домівку";
    } else if (caseWord === "onkologrodov") {
      return "домівки";
    } else if (caseWord === "rozorenznahid") {
      return "домівку";
    } else if (caseWord === "pogransutznahid") {
      return "домівку";
    } else if (caseWord === "duhmiscev") {
      return "домівці";
    } else if (caseWord === "silvolimiscev") {
      return "домівці";
    } else if (caseWord === "dushrodov") {
      return "домівки";
    } else if (caseWord === "emozrodov") {
      return "домівки";
    } else if (caseWord === "rodprogramrodov") {
      return "домівки";
    } else if (caseWord === "sprsvitmisz") {
      return "домівці";
    } else if (caseWord === "zonacomfmisz") {
      return "домівці";
    } else if (caseWord === "spadkovistrodov") {
      return "домівки";
    } else if (caseWord === "roduchmisz") {
      return "домівці";
    } else if (caseWord === "matyindividualmaty") {
      return "має домівку";
    } else if (caseWord === "intelectmisz") {
      return "домівці";
    } else if (caseWord === "mislanalitmisz") {
      return "домівці";
    } else if (caseWord === "zvazkorudn") {
      return "домівкою";
    } else if (caseWord === "kontaktnistorudn") {
      return "домівкою";
    } else if (caseWord === "movaznahid") {
      return "домівку";
    } else if (caseWord === "vzaemotochznahid") {
      return "домівку";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "домівку";
    } else if (caseWord === "pochuttamisz") {
      return "домівці";
    } else if (caseWord === "sumpatmisz") {
      return "домівці";
    } else if (caseWord === "garmonmisz") {
      return "домівці";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "домівку";
    } else if (caseWord === "obrazkohanznahid") {
      return "домівку";
    } else if (caseWord === "seksualnmisz") {
      return "домівці";
    } else if (caseWord === "aktivnmisz") {
      return "домівці";
    } else if (caseWord === "volyamisz") {
      return "домівці";
    } else if (caseWord === "impulsrodov") {
      return "домівки";
    } else if (caseWord === "musnmisz") {
      return "домівці";
    } else {
      return "";
    }
  } else if (word === "Сімейність") {
    if (caseWord === "rishuchmisz") {
      return "сімейності";
    } else if (caseWord === "agresivmisz") {
      return "сімейності";
    } else if (caseWord === "borotbaorudn") {
      return "сімейністью";
    } else if (caseWord === "konkurenzorudn") {
      return "сімейністью";
    } else if (caseWord === "neobachnmisz") {
      return "сімейності";
    } else if (caseWord === "obmezenmisz") {
      return "сімейності";
    } else if (caseWord === "stusnenrodov") {
      return "сімейності";
    } else if (caseWord === "zakonymisz") {
      return "сімейності";
    } else if (caseWord === "pravularodov") {
      return "сімейності";
    } else if (caseWord === "konzentratmiszev") {
      return "сімейності";
    } else if (caseWord === "vutrummiszev") {
      return "сімейності";
    } else if (caseWord === "seriozrodov") {
      return "сімейності";
    } else if (caseWord === "skupistmiszev") {
      return "сімейності";
    } else if (caseWord === "zavzatmiszev") {
      return "сімейності";
    } else if (caseWord === "borgorudn") {
      return "сімейністью";
    } else if (caseWord === "rozshurenrodov") {
      return "сімейності";
    } else if (caseWord === "ghedristmiszev") {
      return "сімейності";
    } else if (caseWord === "mudristmiszev") {
      return "сімейності";
    } else if (caseWord === "spravedrodov") {
      return "сімейності";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "сімейності";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "сімейності";
    } else if (caseWord === "luksbrendznahid") {
      return "сімейність";
    } else if (caseWord === "zakordonomnazyv") {
      return "сімейність";
    } else if (caseWord === "vukladannyarodov") {
      return "сімейності";
    } else if (caseWord === "originalmiszev") {
      return "сімейності";
    } else if (caseWord === "svobodamiszev") {
      return "сімейності";
    } else if (caseWord === "spontanistmiszev") {
      return "сімейності";
    } else if (caseWord === "neochikuvanrodov") {
      return "сімейності";
    } else if (caseWord === "astrologrodov") {
      return "сімейності";
    } else if (caseWord === "vidkruttyarodov") {
      return "сімейності";
    } else if (caseWord === "informattehnologorudn") {
      return "сімейністью";
    } else if (caseWord === "fantastikrodov") {
      return "сімейності";
    } else if (caseWord === "kosmosmiszev") {
      return "сімейності";
    } else if (caseWord === "maibutnmiszev") {
      return "сімейності";
    } else if (caseWord === "genialnmiszev") {
      return "сімейності";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "сімейність";
    } else if (caseWord === "phantazmiszev") {
      return "сімейності";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "сімейність";
    } else if (caseWord === "vighisnyznahid") {
      return "сімейність";
    } else if (caseWord === "nathnennamiszev") {
      return "сімейності";
    } else if (caseWord === "obmanmiszev") {
      return "сімейності";
    } else if (caseWord === "samoobmanmiszev") {
      return "сімейності";
    } else if (caseWord === "zalegnostrodov") {
      return "сімейності";
    } else if (caseWord === "meditacznahid") {
      return "сімейність";
    } else if (caseWord === "transormznahid") {
      return "сімейність";
    } else if (caseWord === "extremsituazorudn") {
      return "сімейністью";
    } else if (caseWord === "vuchavolarodov") {
      return "сімейності";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "сімейності";
    } else if (caseWord === "tuskupravlinznahid") {
      return "сімейність";
    } else if (caseWord === "tuskupravlinznahid") {
      return "сімейність";
    } else if (caseWord === "narodgrodov") {
      return "сімейності";
    } else if (caseWord === "orgazmrodov") {
      return "сімейності";
    } else if (caseWord === "magiarodov") {
      return "сімейності";
    } else if (caseWord === "mafiaznahid") {
      return "сімейність";
    } else if (caseWord === "vladaznahid") {
      return "сімейність";
    } else if (caseWord === "manipulorudn") {
      return "сімейністью";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "сімейність";
    } else if (caseWord === "onkologrodov") {
      return "сімейності";
    } else if (caseWord === "rozorenznahid") {
      return "сімейність";
    } else if (caseWord === "pogransutznahid") {
      return "сімейність";
    } else if (caseWord === "duhmiscev") {
      return "сімейності";
    } else if (caseWord === "silvolimiscev") {
      return "сімейності";
    } else if (caseWord === "dushrodov") {
      return "сімейності";
    } else if (caseWord === "emozrodov") {
      return "сімейності";
    } else if (caseWord === "rodprogramrodov") {
      return "сімейності";
    } else if (caseWord === "sprsvitmisz") {
      return "сімейності";
    } else if (caseWord === "zonacomfmisz") {
      return "сімейності";
    } else if (caseWord === "spadkovistrodov") {
      return "сімейності";
    } else if (caseWord === "roduchmisz") {
      return "сімейності";
    } else if (caseWord === "matyindividualmaty") {
      return "має сімейність";
    } else if (caseWord === "intelectmisz") {
      return "сімейності";
    } else if (caseWord === "mislanalitmisz") {
      return "сімейності";
    } else if (caseWord === "zvazkorudn") {
      return "сімейністью";
    } else if (caseWord === "kontaktnistorudn") {
      return "сімейністью";
    } else if (caseWord === "movaznahid") {
      return "сімейність";
    } else if (caseWord === "vzaemotochznahid") {
      return "сімейність";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "сімейність";
    } else if (caseWord === "pochuttamisz") {
      return "сімейності";
    } else if (caseWord === "sumpatmisz") {
      return "сімейності";
    } else if (caseWord === "garmonmisz") {
      return "сімейності";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "сімейність";
    } else if (caseWord === "obrazkohanznahid") {
      return "сімейність";
    } else if (caseWord === "seksualnmisz") {
      return "сімейності";
    } else if (caseWord === "aktivnmisz") {
      return "сімейності";
    } else if (caseWord === "volyamisz") {
      return "сімейності";
    } else if (caseWord === "impulsrodov") {
      return "сімейності";
    } else if (caseWord === "musnmisz") {
      return "сімейності";
    } else {
      return "";
    }
  } else if (word === "Родове коріння") {
    if (caseWord === "rishuchmisz") {
      return "родовому корінні";
    } else if (caseWord === "agresivmisz") {
      return "родовому корінні";
    } else if (caseWord === "borotbaorudn") {
      return "родовим корінням";
    } else if (caseWord === "konkurenzorudn") {
      return "родовим корінням";
    } else if (caseWord === "neobachnmisz") {
      return "родовому корінні";
    } else if (caseWord === "obmezenmisz") {
      return "родовому корінні";
    } else if (caseWord === "stusnenrodov") {
      return "родового коріння";
    } else if (caseWord === "zakonymisz") {
      return "родовому корінні";
    } else if (caseWord === "pravularodov") {
      return "родового коріння";
    } else if (caseWord === "konzentratmiszev") {
      return "родовому корінні";
    } else if (caseWord === "vutrummiszev") {
      return "родовому корінні";
    } else if (caseWord === "seriozrodov") {
      return "родового коріння";
    } else if (caseWord === "skupistmiszev") {
      return "родовому корінні";
    } else if (caseWord === "zavzatmiszev") {
      return "родовому корінні";
    } else if (caseWord === "borgorudn") {
      return "родовим корінням";
    } else if (caseWord === "rozshurenrodov") {
      return "родового коріння";
    } else if (caseWord === "ghedristmiszev") {
      return "родовому корінні";
    } else if (caseWord === "mudristmiszev") {
      return "родовому корінні";
    } else if (caseWord === "spravedrodov") {
      return "родового коріння";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "родовому корінні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "родовому корінні";
    } else if (caseWord === "luksbrendznahid") {
      return "родове коріння";
    } else if (caseWord === "zakordonomnazyv") {
      return "родове коріння";
    } else if (caseWord === "vukladannyarodov") {
      return "родового коріння";
    } else if (caseWord === "originalmiszev") {
      return "родовому корінні";
    } else if (caseWord === "svobodamiszev") {
      return "родовому корінні";
    } else if (caseWord === "spontanistmiszev") {
      return "родовому корінні";
    } else if (caseWord === "neochikuvanrodov") {
      return "родового коріння";
    } else if (caseWord === "astrologrodov") {
      return "родового коріння";
    } else if (caseWord === "vidkruttyarodov") {
      return "родового коріння";
    } else if (caseWord === "informattehnologorudn") {
      return "родовим корінням";
    } else if (caseWord === "fantastikrodov") {
      return "родового коріння";
    } else if (caseWord === "kosmosmiszev") {
      return "родовому корінні";
    } else if (caseWord === "maibutnmiszev") {
      return "родовому корінні";
    } else if (caseWord === "genialnmiszev") {
      return "родовому корінні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "родове коріння";
    } else if (caseWord === "phantazmiszev") {
      return "родовому корінні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "родове коріння";
    } else if (caseWord === "vighisnyznahid") {
      return "родове коріння";
    } else if (caseWord === "nathnennamiszev") {
      return "родовому корінні";
    } else if (caseWord === "obmanmiszev") {
      return "родовому корінні";
    } else if (caseWord === "samoobmanmiszev") {
      return "родовому корінні";
    } else if (caseWord === "zalegnostrodov") {
      return "родового коріння";
    } else if (caseWord === "meditacznahid") {
      return "родове коріння";
    } else if (caseWord === "transormznahid") {
      return "родове коріння";
    } else if (caseWord === "extremsituazorudn") {
      return "родовим корінням";
    } else if (caseWord === "vuchavolarodov") {
      return "родового коріння";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "родовому корінні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "родове коріння";
    } else if (caseWord === "tuskupravlinznahid") {
      return "родове коріння";
    } else if (caseWord === "narodgrodov") {
      return "родового коріння";
    } else if (caseWord === "orgazmrodov") {
      return "родового коріння";
    } else if (caseWord === "magiarodov") {
      return "родового коріння";
    } else if (caseWord === "mafiaznahid") {
      return "родове коріння";
    } else if (caseWord === "vladaznahid") {
      return "родове коріння";
    } else if (caseWord === "manipulorudn") {
      return "родовим корінням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "родове коріння";
    } else if (caseWord === "onkologrodov") {
      return "родового коріння";
    } else if (caseWord === "rozorenznahid") {
      return "родове коріння";
    } else if (caseWord === "pogransutznahid") {
      return "родове коріння";
    } else if (caseWord === "duhmiscev") {
      return "родовому корінні";
    } else if (caseWord === "silvolimiscev") {
      return "родовому корінні";
    } else if (caseWord === "dushrodov") {
      return "родового коріння";
    } else if (caseWord === "emozrodov") {
      return "родового коріння";
    } else if (caseWord === "rodprogramrodov") {
      return "родового коріння";
    } else if (caseWord === "sprsvitmisz") {
      return "родовому корінні";
    } else if (caseWord === "zonacomfmisz") {
      return "родовому корінні";
    } else if (caseWord === "spadkovistrodov") {
      return "родового коріння";
    } else if (caseWord === "roduchmisz") {
      return "родовому корінні";
    } else if (caseWord === "matyindividualmaty") {
      return "має родове коріння";
    } else if (caseWord === "intelectmisz") {
      return "родовому корінні";
    } else if (caseWord === "mislanalitmisz") {
      return "родовому корінні";
    } else if (caseWord === "zvazkorudn") {
      return "родовим корінням";
    } else if (caseWord === "kontaktnistorudn") {
      return "родовим корінням";
    } else if (caseWord === "movaznahid") {
      return "родове коріння";
    } else if (caseWord === "vzaemotochznahid") {
      return "родове коріння";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "родове коріння";
    } else if (caseWord === "pochuttamisz") {
      return "родовому корінні";
    } else if (caseWord === "sumpatmisz") {
      return "родовому корінні";
    } else if (caseWord === "garmonmisz") {
      return "родовому корінні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "родове коріння";
    } else if (caseWord === "obrazkohanznahid") {
      return "родове коріння";
    } else if (caseWord === "seksualnmisz") {
      return "родовому корінні";
    } else if (caseWord === "aktivnmisz") {
      return "родовому корінні";
    } else if (caseWord === "volyamisz") {
      return "родовому корінні";
    } else if (caseWord === "impulsrodov") {
      return "родового коріння";
    } else if (caseWord === "musnmisz") {
      return "родовому корінні";
    } else {
      return "";
    }
  } else if (word === "Дом серця") {
    if (caseWord === "rishuchmisz") {
      return "домі серця";
    } else if (caseWord === "agresivmisz") {
      return "домі серця";
    } else if (caseWord === "borotbaorudn") {
      return "домом серця";
    } else if (caseWord === "konkurenzorudn") {
      return "домом серця";
    } else if (caseWord === "neobachnmisz") {
      return "домі серця";
    } else if (caseWord === "obmezenmisz") {
      return "домі серця";
    } else if (caseWord === "stusnenrodov") {
      return "дому серця";
    } else if (caseWord === "zakonymisz") {
      return "домі серця";
    } else if (caseWord === "pravularodov") {
      return "дому серця";
    } else if (caseWord === "konzentratmiszev") {
      return "домі серця";
    } else if (caseWord === "vutrummiszev") {
      return "домі серця";
    } else if (caseWord === "seriozrodov") {
      return "дому серця";
    } else if (caseWord === "skupistmiszev") {
      return "домі серця";
    } else if (caseWord === "zavzatmiszev") {
      return "домі серця";
    } else if (caseWord === "borgorudn") {
      return "домом серця";
    } else if (caseWord === "rozshurenrodov") {
      return "дому серця";
    } else if (caseWord === "ghedristmiszev") {
      return "домі серця";
    } else if (caseWord === "mudristmiszev") {
      return "домі серця";
    } else if (caseWord === "spravedrodov") {
      return "дому серця";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "домі серця";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "домі серця";
    } else if (caseWord === "luksbrendznahid") {
      return "дом серця";
    } else if (caseWord === "zakordonomnazyv") {
      return "дом серця";
    } else if (caseWord === "vukladannyarodov") {
      return "дому серця";
    } else if (caseWord === "originalmiszev") {
      return "домі серця";
    } else if (caseWord === "svobodamiszev") {
      return "домі серця";
    } else if (caseWord === "spontanistmiszev") {
      return "домі серця";
    } else if (caseWord === "neochikuvanrodov") {
      return "дому серця";
    } else if (caseWord === "astrologrodov") {
      return "дому серця";
    } else if (caseWord === "vidkruttyarodov") {
      return "дому серця";
    } else if (caseWord === "informattehnologorudn") {
      return "домом серця";
    } else if (caseWord === "fantastikrodov") {
      return "дому серця";
    } else if (caseWord === "kosmosmiszev") {
      return "домі серця";
    } else if (caseWord === "maibutnmiszev") {
      return "домі серця";
    } else if (caseWord === "genialnmiszev") {
      return "домі серця";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "дом серця";
    } else if (caseWord === "phantazmiszev") {
      return "домі серця";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "дом серця";
    } else if (caseWord === "vighisnyznahid") {
      return "дом серця";
    } else if (caseWord === "nathnennamiszev") {
      return "домі серця";
    } else if (caseWord === "obmanmiszev") {
      return "домі серця";
    } else if (caseWord === "samoobmanmiszev") {
      return "домі серця";
    } else if (caseWord === "zalegnostrodov") {
      return "дому серця";
    } else if (caseWord === "meditacznahid") {
      return "дом серця";
    } else if (caseWord === "transormznahid") {
      return "дом серця";
    } else if (caseWord === "extremsituazorudn") {
      return "домом серця";
    } else if (caseWord === "vuchavolarodov") {
      return "дому серця";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "домі серця";
    } else if (caseWord === "tuskupravlinznahid") {
      return "дом серця";
    } else if (caseWord === "tuskupravlinznahid") {
      return "дом серця";
    } else if (caseWord === "narodgrodov") {
      return "дому серця";
    } else if (caseWord === "orgazmrodov") {
      return "дому серця";
    } else if (caseWord === "magiarodov") {
      return "дому серця";
    } else if (caseWord === "mafiaznahid") {
      return "дом серця";
    } else if (caseWord === "vladaznahid") {
      return "дом серця";
    } else if (caseWord === "manipulorudn") {
      return "домом серця";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "дом серця";
    } else if (caseWord === "onkologrodov") {
      return "дому серця";
    } else if (caseWord === "rozorenznahid") {
      return "дом серця";
    } else if (caseWord === "pogransutznahid") {
      return "дом серця";
    } else if (caseWord === "duhmiscev") {
      return "домі серця";
    } else if (caseWord === "silvolimiscev") {
      return "домі серця";
    } else if (caseWord === "dushrodov") {
      return "дому серця";
    } else if (caseWord === "emozrodov") {
      return "дому серця";
    } else if (caseWord === "rodprogramrodov") {
      return "дому серця";
    } else if (caseWord === "sprsvitmisz") {
      return "домі серця";
    } else if (caseWord === "zonacomfmisz") {
      return "домі серця";
    } else if (caseWord === "spadkovistrodov") {
      return "дому серця";
    } else if (caseWord === "roduchmisz") {
      return "домі серця";
    } else if (caseWord === "matyindividualmaty") {
      return "пов'язана з домом серця";
    } else if (caseWord === "intelectmisz") {
      return "домі серця";
    } else if (caseWord === "mislanalitmisz") {
      return "домі серця";
    } else if (caseWord === "zvazkorudn") {
      return "домом серця";
    } else if (caseWord === "kontaktnistorudn") {
      return "домом серця";
    } else if (caseWord === "movaznahid") {
      return "дом серця";
    } else if (caseWord === "vzaemotochznahid") {
      return "дом серця";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "дом серця";
    } else if (caseWord === "pochuttamisz") {
      return "домі серця";
    } else if (caseWord === "sumpatmisz") {
      return "домі серця";
    } else if (caseWord === "garmonmisz") {
      return "домі серця";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "дом серця";
    } else if (caseWord === "obrazkohanznahid") {
      return "дом серця";
    } else if (caseWord === "seksualnmisz") {
      return "домі серця";
    } else if (caseWord === "aktivnmisz") {
      return "домі серця";
    } else if (caseWord === "volyamisz") {
      return "домі серця";
    } else if (caseWord === "impulsrodov") {
      return "дому серця";
    } else if (caseWord === "musnmisz") {
      return "домі серця";
    } else {
      return "";
    }
  } else if (word === "Випадкові позашлюбні зв'язки") {
    if (caseWord === "rishuchmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "agresivmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "borotbaorudn") {
      return "випадковими позашлюбними зв'язками";
    } else if (caseWord === "konkurenzorudn") {
      return "випадковими позашлюбними зв'язками";
    } else if (caseWord === "neobachnmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "obmezenmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "stusnenrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "zakonymisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "pravularodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "konzentratmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "vutrummiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "seriozrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "skupistmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "zavzatmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "borgorudn") {
      return "випадковими позашлюбними зв'язками";
    } else if (caseWord === "rozshurenrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "ghedristmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "mudristmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "spravedrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "luksbrendznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "zakordonomnazyv") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "vukladannyarodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "originalmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "svobodamiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "spontanistmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "neochikuvanrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "astrologrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "vidkruttyarodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "informattehnologorudn") {
      return "випадковими позашлюбними зв'язками";
    } else if (caseWord === "fantastikrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "kosmosmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "maibutnmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "genialnmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "phantazmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "vighisnyznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "nathnennamiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "obmanmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "samoobmanmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "zalegnostrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "meditacznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "transormznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "extremsituazorudn") {
      return "випадковими позашлюбними зв'язками";
    } else if (caseWord === "vuchavolarodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "tuskupravlinznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "tuskupravlinznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "narodgrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "orgazmrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "magiarodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "mafiaznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "vladaznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "manipulorudn") {
      return "випадковими позашлюбними зв'язками";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "onkologrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "rozorenznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "pogransutznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "duhmiscev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "silvolimiscev") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "dushrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "emozrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "rodprogramrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "sprsvitmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "zonacomfmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "spadkovistrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "roduchmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "matyindividualmaty") {
      return "мала випадкові позашлюбні зв'язки";
    } else if (caseWord === "intelectmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "mislanalitmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "zvazkorudn") {
      return "випадковими позашлюбними зв'язками";
    } else if (caseWord === "kontaktnistorudn") {
      return "випадковими позашлюбними зв'язками";
    } else if (caseWord === "movaznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "vzaemotochznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "pochuttamisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "sumpatmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "garmonmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "obrazkohanznahid") {
      return "випадкові позашлюбні зв'язки";
    } else if (caseWord === "seksualnmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "aktivnmisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "volyamisz") {
      return "випадкових позашлюбних зв'язках";
    } else if (caseWord === "impulsrodov") {
      return "випадкових позашлюбних зв'язків";
    } else if (caseWord === "musnmisz") {
      return "випадкових позашлюбних зв'язках";
    } else {
      return "";
    }
  } else if (word === "Пристрасті") {
    if (caseWord === "rishuchmisz") {
      return "пристрастях";
    } else if (caseWord === "agresivmisz") {
      return "пристрастях";
    } else if (caseWord === "borotbaorudn") {
      return "пристрастями";
    } else if (caseWord === "konkurenzorudn") {
      return "пристрастями";
    } else if (caseWord === "neobachnmisz") {
      return "пристрастях";
    } else if (caseWord === "obmezenmisz") {
      return "пристрастях";
    } else if (caseWord === "stusnenrodov") {
      return "пристрастей";
    } else if (caseWord === "zakonymisz") {
      return "пристрастях";
    } else if (caseWord === "pravularodov") {
      return "пристрастей";
    } else if (caseWord === "konzentratmiszev") {
      return "пристрастях";
    } else if (caseWord === "vutrummiszev") {
      return "пристрастях";
    } else if (caseWord === "seriozrodov") {
      return "пристрастей";
    } else if (caseWord === "skupistmiszev") {
      return "пристрастях";
    } else if (caseWord === "zavzatmiszev") {
      return "пристрастях";
    } else if (caseWord === "borgorudn") {
      return "пристрастями";
    } else if (caseWord === "rozshurenrodov") {
      return "пристрастей";
    } else if (caseWord === "ghedristmiszev") {
      return "пристрастях";
    } else if (caseWord === "mudristmiszev") {
      return "пристрастях";
    } else if (caseWord === "spravedrodov") {
      return "пристрастей";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "пристрастях";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "пристрастях";
    } else if (caseWord === "luksbrendznahid") {
      return "пристрасті";
    } else if (caseWord === "zakordonomnazyv") {
      return "пристрасті";
    } else if (caseWord === "vukladannyarodov") {
      return "пристрастей";
    } else if (caseWord === "originalmiszev") {
      return "пристрастях";
    } else if (caseWord === "svobodamiszev") {
      return "пристрастях";
    } else if (caseWord === "spontanistmiszev") {
      return "пристрастях";
    } else if (caseWord === "neochikuvanrodov") {
      return "пристрастей";
    } else if (caseWord === "astrologrodov") {
      return "пристрастей";
    } else if (caseWord === "vidkruttyarodov") {
      return "пристрастей";
    } else if (caseWord === "informattehnologorudn") {
      return "пристрастями";
    } else if (caseWord === "fantastikrodov") {
      return "пристрастей";
    } else if (caseWord === "kosmosmiszev") {
      return "пристрастях";
    } else if (caseWord === "maibutnmiszev") {
      return "пристрастях";
    } else if (caseWord === "genialnmiszev") {
      return "пристрастях";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "пристрасті";
    } else if (caseWord === "phantazmiszev") {
      return "пристрастях";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "пристрасті";
    } else if (caseWord === "vighisnyznahid") {
      return "пристрасті";
    } else if (caseWord === "nathnennamiszev") {
      return "пристрастях";
    } else if (caseWord === "obmanmiszev") {
      return "пристрастях";
    } else if (caseWord === "samoobmanmiszev") {
      return "пристрастях";
    } else if (caseWord === "zalegnostrodov") {
      return "пристрастей";
    } else if (caseWord === "meditacznahid") {
      return "пристрасті";
    } else if (caseWord === "transormznahid") {
      return "пристрасті";
    } else if (caseWord === "extremsituazorudn") {
      return "пристрастями";
    } else if (caseWord === "vuchavolarodov") {
      return "пристрастей";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "пристрастях";
    } else if (caseWord === "tuskupravlinznahid") {
      return "пристрасті";
    } else if (caseWord === "tuskupravlinznahid") {
      return "пристрасті";
    } else if (caseWord === "narodgrodov") {
      return "пристрастей";
    } else if (caseWord === "orgazmrodov") {
      return "пристрастей";
    } else if (caseWord === "magiarodov") {
      return "пристрастей";
    } else if (caseWord === "mafiaznahid") {
      return "пристрасті";
    } else if (caseWord === "vladaznahid") {
      return "пристрасті";
    } else if (caseWord === "manipulorudn") {
      return "пристрастями";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "пристрасті";
    } else if (caseWord === "onkologrodov") {
      return "пристрастей";
    } else if (caseWord === "rozorenznahid") {
      return "пристрасті";
    } else if (caseWord === "pogransutznahid") {
      return "пристрасті";
    } else if (caseWord === "duhmiscev") {
      return "пристрастях";
    } else if (caseWord === "silvolimiscev") {
      return "пристрастях";
    } else if (caseWord === "dushrodov") {
      return "пристрастей";
    } else if (caseWord === "emozrodov") {
      return "пристрастей";
    } else if (caseWord === "rodprogramrodov") {
      return "пристрастей";
    } else if (caseWord === "sprsvitmisz") {
      return "пристрастях";
    } else if (caseWord === "zonacomfmisz") {
      return "пристрастях";
    } else if (caseWord === "spadkovistrodov") {
      return "пристрастей";
    } else if (caseWord === "roduchmisz") {
      return "пристрастях";
    } else if (caseWord === "matyindividualmaty") {
      return "пристрастна";
    } else if (caseWord === "intelectmisz") {
      return "пристрастях";
    } else if (caseWord === "mislanalitmisz") {
      return "пристрастях";
    } else if (caseWord === "zvazkorudn") {
      return "пристрастями";
    } else if (caseWord === "kontaktnistorudn") {
      return "пристрастями";
    } else if (caseWord === "movaznahid") {
      return "пристрасті";
    } else if (caseWord === "vzaemotochznahid") {
      return "пристрасті";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "пристрасті";
    } else if (caseWord === "pochuttamisz") {
      return "пристрастях";
    } else if (caseWord === "sumpatmisz") {
      return "пристрастях";
    } else if (caseWord === "garmonmisz") {
      return "пристрастях";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "пристрасті";
    } else if (caseWord === "obrazkohanznahid") {
      return "пристрасті";
    } else if (caseWord === "seksualnmisz") {
      return "пристрастях";
    } else if (caseWord === "aktivnmisz") {
      return "пристрастях";
    } else if (caseWord === "volyamisz") {
      return "пристрастях";
    } else if (caseWord === "impulsrodov") {
      return "пристрастей";
    } else if (caseWord === "musnmisz") {
      return "пристрастях";
    } else {
      return "";
    }
  } else if (word === "Пригоди") {
    if (caseWord === "rishuchmisz") {
      return "пригодах";
    } else if (caseWord === "agresivmisz") {
      return "пригодах";
    } else if (caseWord === "borotbaorudn") {
      return "пригодами";
    } else if (caseWord === "konkurenzorudn") {
      return "пригодами";
    } else if (caseWord === "neobachnmisz") {
      return "пригодах";
    } else if (caseWord === "obmezenmisz") {
      return "пригодах";
    } else if (caseWord === "stusnenrodov") {
      return "пригод";
    } else if (caseWord === "zakonymisz") {
      return "пригодах";
    } else if (caseWord === "pravularodov") {
      return "пригод";
    } else if (caseWord === "konzentratmiszev") {
      return "пригодах";
    } else if (caseWord === "vutrummiszev") {
      return "пригодах";
    } else if (caseWord === "seriozrodov") {
      return "пригод";
    } else if (caseWord === "skupistmiszev") {
      return "пригодах";
    } else if (caseWord === "zavzatmiszev") {
      return "пригодах";
    } else if (caseWord === "borgorudn") {
      return "пригодами";
    } else if (caseWord === "rozshurenrodov") {
      return "пригод";
    } else if (caseWord === "ghedristmiszev") {
      return "пригодах";
    } else if (caseWord === "mudristmiszev") {
      return "пригодах";
    } else if (caseWord === "spravedrodov") {
      return "пригод";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "пригодах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "пригодах";
    } else if (caseWord === "luksbrendznahid") {
      return "пригоди";
    } else if (caseWord === "zakordonomnazyv") {
      return "пригоди";
    } else if (caseWord === "vukladannyarodov") {
      return "пригод";
    } else if (caseWord === "originalmiszev") {
      return "пригодах";
    } else if (caseWord === "svobodamiszev") {
      return "пригодах";
    } else if (caseWord === "spontanistmiszev") {
      return "пригодах";
    } else if (caseWord === "neochikuvanrodov") {
      return "пригод";
    } else if (caseWord === "astrologrodov") {
      return "пригод";
    } else if (caseWord === "vidkruttyarodov") {
      return "пригод";
    } else if (caseWord === "informattehnologorudn") {
      return "пригодами";
    } else if (caseWord === "fantastikrodov") {
      return "пригод";
    } else if (caseWord === "kosmosmiszev") {
      return "пригодах";
    } else if (caseWord === "maibutnmiszev") {
      return "пригодах";
    } else if (caseWord === "genialnmiszev") {
      return "пригодах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "пригоди";
    } else if (caseWord === "phantazmiszev") {
      return "пригодах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "пригоди";
    } else if (caseWord === "vighisnyznahid") {
      return "пригоди";
    } else if (caseWord === "nathnennamiszev") {
      return "пригодах";
    } else if (caseWord === "obmanmiszev") {
      return "пригодах";
    } else if (caseWord === "samoobmanmiszev") {
      return "пригодах";
    } else if (caseWord === "zalegnostrodov") {
      return "пригод";
    } else if (caseWord === "meditacznahid") {
      return "пригоди";
    } else if (caseWord === "transormznahid") {
      return "пригоди";
    } else if (caseWord === "extremsituazorudn") {
      return "пригодами";
    } else if (caseWord === "vuchavolarodov") {
      return "пригод";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "пригодах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "пригоди";
    } else if (caseWord === "tuskupravlinznahid") {
      return "пригоди";
    } else if (caseWord === "narodgrodov") {
      return "пригод";
    } else if (caseWord === "orgazmrodov") {
      return "пригод";
    } else if (caseWord === "magiarodov") {
      return "пригод";
    } else if (caseWord === "mafiaznahid") {
      return "пригоди";
    } else if (caseWord === "vladaznahid") {
      return "пригоди";
    } else if (caseWord === "manipulorudn") {
      return "пригодами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "пригоди";
    } else if (caseWord === "onkologrodov") {
      return "пригод";
    } else if (caseWord === "rozorenznahid") {
      return "пригоди";
    } else if (caseWord === "pogransutznahid") {
      return "пригоди";
    } else if (caseWord === "duhmiscev") {
      return "пригодах";
    } else if (caseWord === "silvolimiscev") {
      return "пригодах";
    } else if (caseWord === "dushrodov") {
      return "пригод";
    } else if (caseWord === "emozrodov") {
      return "пригод";
    } else if (caseWord === "rodprogramrodov") {
      return "пригод";
    } else if (caseWord === "sprsvitmisz") {
      return "пригодах";
    } else if (caseWord === "zonacomfmisz") {
      return "пригодах";
    } else if (caseWord === "spadkovistrodov") {
      return "пригод";
    } else if (caseWord === "roduchmisz") {
      return "пригодах";
    } else if (caseWord === "matyindividualmaty") {
      return "любить пригоди";
    } else if (caseWord === "intelectmisz") {
      return "пригодах";
    } else if (caseWord === "mislanalitmisz") {
      return "пригодах";
    } else if (caseWord === "zvazkorudn") {
      return "пригодами";
    } else if (caseWord === "kontaktnistorudn") {
      return "пригодами";
    } else if (caseWord === "movaznahid") {
      return "пригоди";
    } else if (caseWord === "vzaemotochznahid") {
      return "пригоди";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "пригоди";
    } else if (caseWord === "pochuttamisz") {
      return "пригодах";
    } else if (caseWord === "sumpatmisz") {
      return "пригодах";
    } else if (caseWord === "garmonmisz") {
      return "пригодах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "пригоди";
    } else if (caseWord === "obrazkohanznahid") {
      return "пригоди";
    } else if (caseWord === "seksualnmisz") {
      return "пригодах";
    } else if (caseWord === "aktivnmisz") {
      return "пригодах";
    } else if (caseWord === "volyamisz") {
      return "пригодах";
    } else if (caseWord === "impulsrodov") {
      return "пригод";
    } else if (caseWord === "musnmisz") {
      return "пригодах";
    } else {
      return "";
    }
  } else if (word === "Любов") {
    if (caseWord === "rishuchmisz") {
      return "любові";
    } else if (caseWord === "agresivmisz") {
      return "любові";
    } else if (caseWord === "borotbaorudn") {
      return "любов'ю";
    } else if (caseWord === "konkurenzorudn") {
      return "любов'ю";
    } else if (caseWord === "neobachnmisz") {
      return "любові";
    } else if (caseWord === "obmezenmisz") {
      return "любові";
    } else if (caseWord === "stusnenrodov") {
      return "любові";
    } else if (caseWord === "zakonymisz") {
      return "любові";
    } else if (caseWord === "pravularodov") {
      return "любові";
    } else if (caseWord === "konzentratmiszev") {
      return "любові";
    } else if (caseWord === "vutrummiszev") {
      return "любові";
    } else if (caseWord === "seriozrodov") {
      return "любові";
    } else if (caseWord === "skupistmiszev") {
      return "любові";
    } else if (caseWord === "zavzatmiszev") {
      return "любові";
    } else if (caseWord === "borgorudn") {
      return "любов'ю";
    } else if (caseWord === "rozshurenrodov") {
      return "любові";
    } else if (caseWord === "ghedristmiszev") {
      return "любові";
    } else if (caseWord === "mudristmiszev") {
      return "любові";
    } else if (caseWord === "spravedrodov") {
      return "любові";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "любові";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "любові";
    } else if (caseWord === "luksbrendznahid") {
      return "любов";
    } else if (caseWord === "zakordonomnazyv") {
      return "любов";
    } else if (caseWord === "vukladannyarodov") {
      return "любові";
    } else if (caseWord === "originalmiszev") {
      return "любові";
    } else if (caseWord === "svobodamiszev") {
      return "любові";
    } else if (caseWord === "spontanistmiszev") {
      return "любові";
    } else if (caseWord === "neochikuvanrodov") {
      return "любові";
    } else if (caseWord === "astrologrodov") {
      return "любові";
    } else if (caseWord === "vidkruttyarodov") {
      return "любові";
    } else if (caseWord === "informattehnologorudn") {
      return "любов'ю";
    } else if (caseWord === "fantastikrodov") {
      return "любові";
    } else if (caseWord === "kosmosmiszev") {
      return "любові";
    } else if (caseWord === "maibutnmiszev") {
      return "любові";
    } else if (caseWord === "genialnmiszev") {
      return "любові";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "любов";
    } else if (caseWord === "phantazmiszev") {
      return "любові";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "любов";
    } else if (caseWord === "vighisnyznahid") {
      return "любов";
    } else if (caseWord === "nathnennamiszev") {
      return "любові";
    } else if (caseWord === "obmanmiszev") {
      return "любові";
    } else if (caseWord === "samoobmanmiszev") {
      return "любові";
    } else if (caseWord === "zalegnostrodov") {
      return "любові";
    } else if (caseWord === "meditacznahid") {
      return "любов";
    } else if (caseWord === "transormznahid") {
      return "любов";
    } else if (caseWord === "extremsituazorudn") {
      return "любов'ю";
    } else if (caseWord === "vuchavolarodov") {
      return "любові";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "любові";
    } else if (caseWord === "tuskupravlinznahid") {
      return "любов";
    } else if (caseWord === "tuskupravlinznahid") {
      return "любов";
    } else if (caseWord === "narodgrodov") {
      return "любові";
    } else if (caseWord === "orgazmrodov") {
      return "любові";
    } else if (caseWord === "magiarodov") {
      return "любові";
    } else if (caseWord === "mafiaznahid") {
      return "любов";
    } else if (caseWord === "vladaznahid") {
      return "любов";
    } else if (caseWord === "manipulorudn") {
      return "любов'ю";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "любов";
    } else if (caseWord === "onkologrodov") {
      return "любові";
    } else if (caseWord === "rozorenznahid") {
      return "любов";
    } else if (caseWord === "pogransutznahid") {
      return "любов";
    } else if (caseWord === "duhmiscev") {
      return "любові";
    } else if (caseWord === "silvolimiscev") {
      return "любові";
    } else if (caseWord === "dushrodov") {
      return "любові";
    } else if (caseWord === "emozrodov") {
      return "любові";
    } else if (caseWord === "rodprogramrodov") {
      return "любові";
    } else if (caseWord === "sprsvitmisz") {
      return "любові";
    } else if (caseWord === "zonacomfmisz") {
      return "любові";
    } else if (caseWord === "spadkovistrodov") {
      return "любові";
    } else if (caseWord === "roduchmisz") {
      return "любові";
    } else if (caseWord === "matyindividualmaty") {
      return "любила";
    } else if (caseWord === "intelectmisz") {
      return "любові";
    } else if (caseWord === "mislanalitmisz") {
      return "любові";
    } else if (caseWord === "zvazkorudn") {
      return "любов'ю";
    } else if (caseWord === "kontaktnistorudn") {
      return "любов'ю";
    } else if (caseWord === "movaznahid") {
      return "любов";
    } else if (caseWord === "vzaemotochznahid") {
      return "любов";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "любов";
    } else if (caseWord === "pochuttamisz") {
      return "любові";
    } else if (caseWord === "sumpatmisz") {
      return "любові";
    } else if (caseWord === "garmonmisz") {
      return "любові";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "любов";
    } else if (caseWord === "obrazkohanznahid") {
      return "любов";
    } else if (caseWord === "seksualnmisz") {
      return "любові";
    } else if (caseWord === "aktivnmisz") {
      return "любові";
    } else if (caseWord === "volyamisz") {
      return "любові";
    } else if (caseWord === "impulsrodov") {
      return "любові";
    } else if (caseWord === "musnmisz") {
      return "любові";
    } else {
      return "";
    }
  } else if (word === "Діти") {
    if (caseWord === "rishuchmisz") {
      return "дітях";
    } else if (caseWord === "agresivmisz") {
      return "дітях";
    } else if (caseWord === "borotbaorudn") {
      return "дітьми";
    } else if (caseWord === "konkurenzorudn") {
      return "дітьми";
    } else if (caseWord === "neobachnmisz") {
      return "дітях";
    } else if (caseWord === "obmezenmisz") {
      return "дітях";
    } else if (caseWord === "stusnenrodov") {
      return "дітей";
    } else if (caseWord === "zakonymisz") {
      return "дітях";
    } else if (caseWord === "pravularodov") {
      return "дітей";
    } else if (caseWord === "konzentratmiszev") {
      return "дітях";
    } else if (caseWord === "vutrummiszev") {
      return "дітях";
    } else if (caseWord === "seriozrodov") {
      return "дітей";
    } else if (caseWord === "skupistmiszev") {
      return "дітях";
    } else if (caseWord === "zavzatmiszev") {
      return "дітях";
    } else if (caseWord === "borgorudn") {
      return "дітьми";
    } else if (caseWord === "rozshurenrodov") {
      return "дітей";
    } else if (caseWord === "ghedristmiszev") {
      return "дітях";
    } else if (caseWord === "mudristmiszev") {
      return "дітях";
    } else if (caseWord === "spravedrodov") {
      return "дітей";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "дітях";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "дітях";
    } else if (caseWord === "luksbrendznahid") {
      return "дітей";
    } else if (caseWord === "zakordonomnazyv") {
      return "діти";
    } else if (caseWord === "vukladannyarodov") {
      return "дітей";
    } else if (caseWord === "originalmiszev") {
      return "дітях";
    } else if (caseWord === "svobodamiszev") {
      return "дітях";
    } else if (caseWord === "spontanistmiszev") {
      return "дітях";
    } else if (caseWord === "neochikuvanrodov") {
      return "дітей";
    } else if (caseWord === "astrologrodov") {
      return "дітей";
    } else if (caseWord === "vidkruttyarodov") {
      return "дітей";
    } else if (caseWord === "informattehnologorudn") {
      return "дітьми";
    } else if (caseWord === "fantastikrodov") {
      return "дітей";
    } else if (caseWord === "kosmosmiszev") {
      return "дітях";
    } else if (caseWord === "maibutnmiszev") {
      return "дітях";
    } else if (caseWord === "genialnmiszev") {
      return "дітях";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "дітей";
    } else if (caseWord === "phantazmiszev") {
      return "дітях";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "дітей";
    } else if (caseWord === "vighisnyznahid") {
      return "дітей";
    } else if (caseWord === "nathnennamiszev") {
      return "дітях";
    } else if (caseWord === "obmanmiszev") {
      return "дітях";
    } else if (caseWord === "samoobmanmiszev") {
      return "дітях";
    } else if (caseWord === "zalegnostrodov") {
      return "дітей";
    } else if (caseWord === "meditacznahid") {
      return "дітей";
    } else if (caseWord === "transormznahid") {
      return "дітей";
    } else if (caseWord === "extremsituazorudn") {
      return "дітьми";
    } else if (caseWord === "vuchavolarodov") {
      return "дітей";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "дітях";
    } else if (caseWord === "tuskupravlinznahid") {
      return "дітей";
    } else if (caseWord === "tuskupravlinznahid") {
      return "дітей";
    } else if (caseWord === "narodgrodov") {
      return "дітей";
    } else if (caseWord === "orgazmrodov") {
      return "дітей";
    } else if (caseWord === "magiarodov") {
      return "дітей";
    } else if (caseWord === "mafiaznahid") {
      return "дітей";
    } else if (caseWord === "vladaznahid") {
      return "дітей";
    } else if (caseWord === "manipulorudn") {
      return "дітьми";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "дітей";
    } else if (caseWord === "onkologrodov") {
      return "дітей";
    } else if (caseWord === "rozorenznahid") {
      return "дітей";
    } else if (caseWord === "pogransutznahid") {
      return "дітей";
    } else if (caseWord === "duhmiscev") {
      return "дітях";
    } else if (caseWord === "silvolimiscev") {
      return "дітях";
    } else if (caseWord === "dushrodov") {
      return "дітей";
    } else if (caseWord === "emozrodov") {
      return "дітей";
    } else if (caseWord === "rodprogramrodov") {
      return "дітей";
    } else if (caseWord === "sprsvitmisz") {
      return "дітях";
    } else if (caseWord === "zonacomfmisz") {
      return "дітях";
    } else if (caseWord === "spadkovistrodov") {
      return "дітей";
    } else if (caseWord === "roduchmisz") {
      return "дітях";
    } else if (caseWord === "matyindividualmaty") {
      return "мала дітей";
    } else if (caseWord === "intelectmisz") {
      return "дітях";
    } else if (caseWord === "mislanalitmisz") {
      return "дітях";
    } else if (caseWord === "zvazkorudn") {
      return "дітьми";
    } else if (caseWord === "kontaktnistorudn") {
      return "дітьми";
    } else if (caseWord === "movaznahid") {
      return "дітей";
    } else if (caseWord === "vzaemotochznahid") {
      return "дітей";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "дітей";
    } else if (caseWord === "pochuttamisz") {
      return "дітях";
    } else if (caseWord === "sumpatmisz") {
      return "дітях";
    } else if (caseWord === "garmonmisz") {
      return "дітях";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "дітей";
    } else if (caseWord === "obrazkohanznahid") {
      return "дітей";
    } else if (caseWord === "seksualnmisz") {
      return "дітях";
    } else if (caseWord === "aktivnmisz") {
      return "дітях";
    } else if (caseWord === "volyamisz") {
      return "дітях";
    } else if (caseWord === "impulsrodov") {
      return "дітей";
    } else if (caseWord === "musnmisz") {
      return "дітях";
    } else {
      return "";
    }
  } else if (word === "Розваги") {
    if (caseWord === "rishuchmisz") {
      return "розвагах";
    } else if (caseWord === "agresivmisz") {
      return "розвагах";
    } else if (caseWord === "borotbaorudn") {
      return "розвагами";
    } else if (caseWord === "konkurenzorudn") {
      return "розвагами";
    } else if (caseWord === "neobachnmisz") {
      return "розвагах";
    } else if (caseWord === "obmezenmisz") {
      return "розвагах";
    } else if (caseWord === "stusnenrodov") {
      return "розваг";
    } else if (caseWord === "zakonymisz") {
      return "розвагах";
    } else if (caseWord === "pravularodov") {
      return "розваг";
    } else if (caseWord === "konzentratmiszev") {
      return "розвагах";
    } else if (caseWord === "vutrummiszev") {
      return "розвагах";
    } else if (caseWord === "seriozrodov") {
      return "розваг";
    } else if (caseWord === "skupistmiszev") {
      return "розвагах";
    } else if (caseWord === "zavzatmiszev") {
      return "розвагах";
    } else if (caseWord === "borgorudn") {
      return "розвагами";
    } else if (caseWord === "rozshurenrodov") {
      return "розваг";
    } else if (caseWord === "ghedristmiszev") {
      return "розвагах";
    } else if (caseWord === "mudristmiszev") {
      return "розвагах";
    } else if (caseWord === "spravedrodov") {
      return "розваг";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "розвагах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "розвагах";
    } else if (caseWord === "luksbrendznahid") {
      return "розваги";
    } else if (caseWord === "zakordonomnazyv") {
      return "розваги";
    } else if (caseWord === "vukladannyarodov") {
      return "розваг";
    } else if (caseWord === "originalmiszev") {
      return "розвагах";
    } else if (caseWord === "svobodamiszev") {
      return "розвагах";
    } else if (caseWord === "spontanistmiszev") {
      return "розвагах";
    } else if (caseWord === "neochikuvanrodov") {
      return "розваг";
    } else if (caseWord === "astrologrodov") {
      return "розваг";
    } else if (caseWord === "vidkruttyarodov") {
      return "розваг";
    } else if (caseWord === "informattehnologorudn") {
      return "розвагами";
    } else if (caseWord === "fantastikrodov") {
      return "розваг";
    } else if (caseWord === "kosmosmiszev") {
      return "розвагах";
    } else if (caseWord === "maibutnmiszev") {
      return "розвагах";
    } else if (caseWord === "genialnmiszev") {
      return "розвагах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "розваги";
    } else if (caseWord === "phantazmiszev") {
      return "розвагах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "розваги";
    } else if (caseWord === "vighisnyznahid") {
      return "розваги";
    } else if (caseWord === "nathnennamiszev") {
      return "розвагах";
    } else if (caseWord === "obmanmiszev") {
      return "розвагах";
    } else if (caseWord === "samoobmanmiszev") {
      return "розвагах";
    } else if (caseWord === "zalegnostrodov") {
      return "розваг";
    } else if (caseWord === "meditacznahid") {
      return "розваги";
    } else if (caseWord === "transormznahid") {
      return "розваги";
    } else if (caseWord === "extremsituazorudn") {
      return "розвагами";
    } else if (caseWord === "vuchavolarodov") {
      return "розваг";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "розвагах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "розваги";
    } else if (caseWord === "tuskupravlinznahid") {
      return "розваги";
    } else if (caseWord === "narodgrodov") {
      return "розваг";
    } else if (caseWord === "orgazmrodov") {
      return "розваг";
    } else if (caseWord === "magiarodov") {
      return "розваг";
    } else if (caseWord === "mafiaznahid") {
      return "розваги";
    } else if (caseWord === "vladaznahid") {
      return "розваги";
    } else if (caseWord === "manipulorudn") {
      return "розвагами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "розваги";
    } else if (caseWord === "onkologrodov") {
      return "розваг";
    } else if (caseWord === "rozorenznahid") {
      return "розваги";
    } else if (caseWord === "pogransutznahid") {
      return "розваги";
    } else if (caseWord === "duhmiscev") {
      return "розвагах";
    } else if (caseWord === "silvolimiscev") {
      return "розвагах";
    } else if (caseWord === "dushrodov") {
      return "розваг";
    } else if (caseWord === "emozrodov") {
      return "розваг";
    } else if (caseWord === "rodprogramrodov") {
      return "розваг";
    } else if (caseWord === "sprsvitmisz") {
      return "розвагах";
    } else if (caseWord === "zonacomfmisz") {
      return "розвагах";
    } else if (caseWord === "spadkovistrodov") {
      return "розваг";
    } else if (caseWord === "roduchmisz") {
      return "розвагах";
    } else if (caseWord === "matyindividualmaty") {
      return "любила розваги";
    } else if (caseWord === "intelectmisz") {
      return "розвагах";
    } else if (caseWord === "mislanalitmisz") {
      return "розвагах";
    } else if (caseWord === "zvazkorudn") {
      return "розвагами";
    } else if (caseWord === "kontaktnistorudn") {
      return "розвагами";
    } else if (caseWord === "movaznahid") {
      return "розваги";
    } else if (caseWord === "vzaemotochznahid") {
      return "розваги";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "розваги";
    } else if (caseWord === "pochuttamisz") {
      return "розвагах";
    } else if (caseWord === "sumpatmisz") {
      return "розвагах";
    } else if (caseWord === "garmonmisz") {
      return "розвагах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "розваги";
    } else if (caseWord === "obrazkohanznahid") {
      return "розваги";
    } else if (caseWord === "seksualnmisz") {
      return "розвагах";
    } else if (caseWord === "aktivnmisz") {
      return "розвагах";
    } else if (caseWord === "volyamisz") {
      return "розвагах";
    } else if (caseWord === "impulsrodov") {
      return "розваг";
    } else if (caseWord === "musnmisz") {
      return "розвагах";
    } else {
      return "";
    }
  } else if (word === "Ігри") {
    if (caseWord === "rishuchmisz") {
      return "іграх";
    } else if (caseWord === "agresivmisz") {
      return "іграх";
    } else if (caseWord === "borotbaorudn") {
      return "іграми";
    } else if (caseWord === "konkurenzorudn") {
      return "іграми";
    } else if (caseWord === "neobachnmisz") {
      return "іграх";
    } else if (caseWord === "obmezenmisz") {
      return "іграх";
    } else if (caseWord === "stusnenrodov") {
      return "ігор";
    } else if (caseWord === "zakonymisz") {
      return "іграх";
    } else if (caseWord === "pravularodov") {
      return "ігор";
    } else if (caseWord === "konzentratmiszev") {
      return "іграх";
    } else if (caseWord === "vutrummiszev") {
      return "іграх";
    } else if (caseWord === "seriozrodov") {
      return "ігор";
    } else if (caseWord === "skupistmiszev") {
      return "іграх";
    } else if (caseWord === "zavzatmiszev") {
      return "іграх";
    } else if (caseWord === "borgorudn") {
      return "іграми";
    } else if (caseWord === "rozshurenrodov") {
      return "ігор";
    } else if (caseWord === "ghedristmiszev") {
      return "іграх";
    } else if (caseWord === "mudristmiszev") {
      return "іграх";
    } else if (caseWord === "spravedrodov") {
      return "ігор";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "іграх";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "іграх";
    } else if (caseWord === "luksbrendznahid") {
      return "ігри";
    } else if (caseWord === "zakordonomnazyv") {
      return "ігри";
    } else if (caseWord === "vukladannyarodov") {
      return "ігор";
    } else if (caseWord === "originalmiszev") {
      return "іграх";
    } else if (caseWord === "svobodamiszev") {
      return "іграх";
    } else if (caseWord === "spontanistmiszev") {
      return "іграх";
    } else if (caseWord === "neochikuvanrodov") {
      return "ігор";
    } else if (caseWord === "astrologrodov") {
      return "ігор";
    } else if (caseWord === "vidkruttyarodov") {
      return "ігор";
    } else if (caseWord === "informattehnologorudn") {
      return "іграми";
    } else if (caseWord === "fantastikrodov") {
      return "ігор";
    } else if (caseWord === "kosmosmiszev") {
      return "іграх";
    } else if (caseWord === "maibutnmiszev") {
      return "іграх";
    } else if (caseWord === "genialnmiszev") {
      return "іграх";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "ігри";
    } else if (caseWord === "phantazmiszev") {
      return "іграх";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "ігри";
    } else if (caseWord === "vighisnyznahid") {
      return "ігри";
    } else if (caseWord === "nathnennamiszev") {
      return "іграх";
    } else if (caseWord === "obmanmiszev") {
      return "іграх";
    } else if (caseWord === "samoobmanmiszev") {
      return "іграх";
    } else if (caseWord === "zalegnostrodov") {
      return "ігор";
    } else if (caseWord === "meditacznahid") {
      return "ігри";
    } else if (caseWord === "transormznahid") {
      return "ігри";
    } else if (caseWord === "extremsituazorudn") {
      return "іграми";
    } else if (caseWord === "vuchavolarodov") {
      return "ігор";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "іграх";
    } else if (caseWord === "tuskupravlinznahid") {
      return "ігри";
    } else if (caseWord === "tuskupravlinznahid") {
      return "ігри";
    } else if (caseWord === "narodgrodov") {
      return "ігор";
    } else if (caseWord === "orgazmrodov") {
      return "ігор";
    } else if (caseWord === "magiarodov") {
      return "ігор";
    } else if (caseWord === "mafiaznahid") {
      return "ігри";
    } else if (caseWord === "vladaznahid") {
      return "ігри";
    } else if (caseWord === "manipulorudn") {
      return "іграми";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "ігри";
    } else if (caseWord === "onkologrodov") {
      return "ігор";
    } else if (caseWord === "rozorenznahid") {
      return "ігри";
    } else if (caseWord === "pogransutznahid") {
      return "ігри";
    } else if (caseWord === "duhmiscev") {
      return "іграх";
    } else if (caseWord === "silvolimiscev") {
      return "іграх";
    } else if (caseWord === "dushrodov") {
      return "ігор";
    } else if (caseWord === "emozrodov") {
      return "ігор";
    } else if (caseWord === "rodprogramrodov") {
      return "ігор";
    } else if (caseWord === "sprsvitmisz") {
      return "іграх";
    } else if (caseWord === "zonacomfmisz") {
      return "іграх";
    } else if (caseWord === "spadkovistrodov") {
      return "ігор";
    } else if (caseWord === "roduchmisz") {
      return "іграх";
    } else if (caseWord === "matyindividualmaty") {
      return "любила ігри";
    } else if (caseWord === "intelectmisz") {
      return "іграх";
    } else if (caseWord === "mislanalitmisz") {
      return "іграх";
    } else if (caseWord === "zvazkorudn") {
      return "іграми";
    } else if (caseWord === "kontaktnistorudn") {
      return "іграми";
    } else if (caseWord === "movaznahid") {
      return "ігри";
    } else if (caseWord === "vzaemotochznahid") {
      return "ігри";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "ігри";
    } else if (caseWord === "pochuttamisz") {
      return "іграх";
    } else if (caseWord === "sumpatmisz") {
      return "іграх";
    } else if (caseWord === "garmonmisz") {
      return "іграх";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "ігри";
    } else if (caseWord === "obrazkohanznahid") {
      return "ігри";
    } else if (caseWord === "seksualnmisz") {
      return "іграх";
    } else if (caseWord === "aktivnmisz") {
      return "іграх";
    } else if (caseWord === "volyamisz") {
      return "іграх";
    } else if (caseWord === "impulsrodov") {
      return "ігор";
    } else if (caseWord === "musnmisz") {
      return "іграх";
    } else {
      return "";
    }
  } else if (word === "Дозвілля") {
    if (caseWord === "rishuchmisz") {
      return "дозвіллі";
    } else if (caseWord === "agresivmisz") {
      return "дозвіллі";
    } else if (caseWord === "borotbaorudn") {
      return "дозвіллям";
    } else if (caseWord === "konkurenzorudn") {
      return "дозвіллям";
    } else if (caseWord === "neobachnmisz") {
      return "дозвіллі";
    } else if (caseWord === "obmezenmisz") {
      return "дозвіллі";
    } else if (caseWord === "stusnenrodov") {
      return "дозвілля";
    } else if (caseWord === "zakonymisz") {
      return "дозвіллі";
    } else if (caseWord === "pravularodov") {
      return "дозвілля";
    } else if (caseWord === "konzentratmiszev") {
      return "дозвіллі";
    } else if (caseWord === "vutrummiszev") {
      return "дозвіллі";
    } else if (caseWord === "seriozrodov") {
      return "дозвілля";
    } else if (caseWord === "skupistmiszev") {
      return "дозвіллі";
    } else if (caseWord === "zavzatmiszev") {
      return "дозвіллі";
    } else if (caseWord === "borgorudn") {
      return "дозвіллям";
    } else if (caseWord === "rozshurenrodov") {
      return "дозвілля";
    } else if (caseWord === "ghedristmiszev") {
      return "дозвіллі";
    } else if (caseWord === "mudristmiszev") {
      return "дозвіллі";
    } else if (caseWord === "spravedrodov") {
      return "дозвілля";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "дозвіллі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "дозвіллі";
    } else if (caseWord === "luksbrendznahid") {
      return "дозвілля";
    } else if (caseWord === "zakordonomnazyv") {
      return "дозвілля";
    } else if (caseWord === "vukladannyarodov") {
      return "дозвілля";
    } else if (caseWord === "originalmiszev") {
      return "дозвіллі";
    } else if (caseWord === "svobodamiszev") {
      return "дозвіллі";
    } else if (caseWord === "spontanistmiszev") {
      return "дозвіллі";
    } else if (caseWord === "neochikuvanrodov") {
      return "дозвілля";
    } else if (caseWord === "astrologrodov") {
      return "дозвілля";
    } else if (caseWord === "vidkruttyarodov") {
      return "дозвілля";
    } else if (caseWord === "informattehnologorudn") {
      return "дозвіллям";
    } else if (caseWord === "fantastikrodov") {
      return "дозвілля";
    } else if (caseWord === "kosmosmiszev") {
      return "дозвіллі";
    } else if (caseWord === "maibutnmiszev") {
      return "дозвіллі";
    } else if (caseWord === "genialnmiszev") {
      return "дозвіллі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "дозвілля";
    } else if (caseWord === "phantazmiszev") {
      return "дозвіллі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "дозвілля";
    } else if (caseWord === "vighisnyznahid") {
      return "дозвілля";
    } else if (caseWord === "nathnennamiszev") {
      return "дозвіллі";
    } else if (caseWord === "obmanmiszev") {
      return "дозвіллі";
    } else if (caseWord === "samoobmanmiszev") {
      return "дозвіллі";
    } else if (caseWord === "zalegnostrodov") {
      return "дозвілля";
    } else if (caseWord === "meditacznahid") {
      return "дозвілля";
    } else if (caseWord === "transormznahid") {
      return "дозвілля";
    } else if (caseWord === "extremsituazorudn") {
      return "дозвіллям";
    } else if (caseWord === "vuchavolarodov") {
      return "дозвілля";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "дозвіллі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "дозвілля";
    } else if (caseWord === "tuskupravlinznahid") {
      return "дозвілля";
    } else if (caseWord === "narodgrodov") {
      return "дозвілля";
    } else if (caseWord === "orgazmrodov") {
      return "дозвілля";
    } else if (caseWord === "magiarodov") {
      return "дозвілля";
    } else if (caseWord === "mafiaznahid") {
      return "дозвілля";
    } else if (caseWord === "vladaznahid") {
      return "дозвілля";
    } else if (caseWord === "manipulorudn") {
      return "дозвіллям";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "дозвілля";
    } else if (caseWord === "onkologrodov") {
      return "дозвілля";
    } else if (caseWord === "rozorenznahid") {
      return "дозвілля";
    } else if (caseWord === "pogransutznahid") {
      return "дозвілля";
    } else if (caseWord === "duhmiscev") {
      return "дозвіллі";
    } else if (caseWord === "silvolimiscev") {
      return "дозвіллі";
    } else if (caseWord === "dushrodov") {
      return "дозвілля";
    } else if (caseWord === "emozrodov") {
      return "дозвілля";
    } else if (caseWord === "rodprogramrodov") {
      return "дозвілля";
    } else if (caseWord === "sprsvitmisz") {
      return "дозвіллі";
    } else if (caseWord === "zonacomfmisz") {
      return "дозвіллі";
    } else if (caseWord === "spadkovistrodov") {
      return "дозвілля";
    } else if (caseWord === "roduchmisz") {
      return "дозвіллі";
    } else if (caseWord === "matyindividualmaty") {
      return "любила дозвілля";
    } else if (caseWord === "intelectmisz") {
      return "дозвіллі";
    } else if (caseWord === "mislanalitmisz") {
      return "дозвіллі";
    } else if (caseWord === "zvazkorudn") {
      return "дозвіллям";
    } else if (caseWord === "kontaktnistorudn") {
      return "дозвіллям";
    } else if (caseWord === "movaznahid") {
      return "дозвілля";
    } else if (caseWord === "vzaemotochznahid") {
      return "дозвілля";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "дозвілля";
    } else if (caseWord === "pochuttamisz") {
      return "дозвіллі";
    } else if (caseWord === "sumpatmisz") {
      return "дозвіллі";
    } else if (caseWord === "garmonmisz") {
      return "дозвіллі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "дозвілля";
    } else if (caseWord === "obrazkohanznahid") {
      return "дозвілля";
    } else if (caseWord === "seksualnmisz") {
      return "дозвіллі";
    } else if (caseWord === "aktivnmisz") {
      return "дозвіллі";
    } else if (caseWord === "volyamisz") {
      return "дозвіллі";
    } else if (caseWord === "impulsrodov") {
      return "дозвілля";
    } else if (caseWord === "musnmisz") {
      return "дозвіллі";
    } else {
      return "";
    }
  } else if (word === "Здоров'я") {
    if (caseWord === "rishuchmisz") {
      return "здоров'ї";
    } else if (caseWord === "agresivmisz") {
      return "здоров'ї";
    } else if (caseWord === "borotbaorudn") {
      return "здоров'ям";
    } else if (caseWord === "konkurenzorudn") {
      return "здоров'ям";
    } else if (caseWord === "neobachnmisz") {
      return "здоров'ї";
    } else if (caseWord === "obmezenmisz") {
      return "здоров'ї";
    } else if (caseWord === "stusnenrodov") {
      return "здоров'я";
    } else if (caseWord === "zakonymisz") {
      return "здоров'ї";
    } else if (caseWord === "pravularodov") {
      return "здоров'я";
    } else if (caseWord === "konzentratmiszev") {
      return "здоров'ї";
    } else if (caseWord === "vutrummiszev") {
      return "здоров'ї";
    } else if (caseWord === "seriozrodov") {
      return "здоров'я";
    } else if (caseWord === "skupistmiszev") {
      return "здоров'ї";
    } else if (caseWord === "zavzatmiszev") {
      return "здоров'ї";
    } else if (caseWord === "borgorudn") {
      return "здоров'ям";
    } else if (caseWord === "rozshurenrodov") {
      return "здоров'я";
    } else if (caseWord === "ghedristmiszev") {
      return "здоров'ї";
    } else if (caseWord === "mudristmiszev") {
      return "здоров'ї";
    } else if (caseWord === "spravedrodov") {
      return "здоров'я";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "здоров'ї";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "здоров'ї";
    } else if (caseWord === "luksbrendznahid") {
      return "здоров'я";
    } else if (caseWord === "zakordonomnazyv") {
      return "здоров'я";
    } else if (caseWord === "vukladannyarodov") {
      return "здоров'я";
    } else if (caseWord === "originalmiszev") {
      return "здоров'ї";
    } else if (caseWord === "svobodamiszev") {
      return "здоров'ї";
    } else if (caseWord === "spontanistmiszev") {
      return "здоров'ї";
    } else if (caseWord === "neochikuvanrodov") {
      return "здоров'я";
    } else if (caseWord === "astrologrodov") {
      return "здоров'я";
    } else if (caseWord === "vidkruttyarodov") {
      return "здоров'я";
    } else if (caseWord === "informattehnologorudn") {
      return "здоров'ям";
    } else if (caseWord === "fantastikrodov") {
      return "здоров'я";
    } else if (caseWord === "kosmosmiszev") {
      return "здоров'ї";
    } else if (caseWord === "maibutnmiszev") {
      return "здоров'ї";
    } else if (caseWord === "genialnmiszev") {
      return "здоров'ї";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "здоров'я";
    } else if (caseWord === "phantazmiszev") {
      return "здоров'ї";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "здоров'я";
    } else if (caseWord === "vighisnyznahid") {
      return "здоров'я";
    } else if (caseWord === "nathnennamiszev") {
      return "здоров'ї";
    } else if (caseWord === "obmanmiszev") {
      return "здоров'ї";
    } else if (caseWord === "samoobmanmiszev") {
      return "здоров'ї";
    } else if (caseWord === "zalegnostrodov") {
      return "здоров'я";
    } else if (caseWord === "meditacznahid") {
      return "здоров'я";
    } else if (caseWord === "transormznahid") {
      return "здоров'я";
    } else if (caseWord === "extremsituazorudn") {
      return "здоров'ям";
    } else if (caseWord === "vuchavolarodov") {
      return "здоров'я";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "здоров'ї";
    } else if (caseWord === "tuskupravlinznahid") {
      return "здоров'я";
    } else if (caseWord === "tuskupravlinznahid") {
      return "здоров'я";
    } else if (caseWord === "narodgrodov") {
      return "здоров'я";
    } else if (caseWord === "orgazmrodov") {
      return "здоров'я";
    } else if (caseWord === "magiarodov") {
      return "здоров'я";
    } else if (caseWord === "mafiaznahid") {
      return "здоров'я";
    } else if (caseWord === "vladaznahid") {
      return "здоров'я";
    } else if (caseWord === "manipulorudn") {
      return "здоров'ям";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "здоров'я";
    } else if (caseWord === "onkologrodov") {
      return "здоров'я";
    } else if (caseWord === "rozorenznahid") {
      return "здоров'я";
    } else if (caseWord === "pogransutznahid") {
      return "здоров'я";
    } else if (caseWord === "duhmiscev") {
      return "здоров'ї";
    } else if (caseWord === "silvolimiscev") {
      return "здоров'ї";
    } else if (caseWord === "dushrodov") {
      return "здоров'я";
    } else if (caseWord === "emozrodov") {
      return "здоров'я";
    } else if (caseWord === "rodprogramrodov") {
      return "здоров'я";
    } else if (caseWord === "sprsvitmisz") {
      return "здоров'ї";
    } else if (caseWord === "zonacomfmisz") {
      return "здоров'ї";
    } else if (caseWord === "spadkovistrodov") {
      return "здоров'я";
    } else if (caseWord === "roduchmisz") {
      return "здоров'ї";
    } else if (caseWord === "matyindividualmaty") {
      return "піклувалась про здоров'я";
    } else if (caseWord === "intelectmisz") {
      return "здоров'ї";
    } else if (caseWord === "mislanalitmisz") {
      return "здоров'ї";
    } else if (caseWord === "zvazkorudn") {
      return "здоров'ям";
    } else if (caseWord === "kontaktnistorudn") {
      return "здоров'ям";
    } else if (caseWord === "movaznahid") {
      return "здоров'я";
    } else if (caseWord === "vzaemotochznahid") {
      return "здоров'я";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "здоров'я";
    } else if (caseWord === "pochuttamisz") {
      return "здоров'ї";
    } else if (caseWord === "sumpatmisz") {
      return "здоров'ї";
    } else if (caseWord === "garmonmisz") {
      return "здоров'ї";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "здоров'я";
    } else if (caseWord === "obrazkohanznahid") {
      return "здоров'я";
    } else if (caseWord === "seksualnmisz") {
      return "здоров'ї";
    } else if (caseWord === "aktivnmisz") {
      return "здоров'ї";
    } else if (caseWord === "volyamisz") {
      return "здоров'ї";
    } else if (caseWord === "impulsrodov") {
      return "здоров'я";
    } else if (caseWord === "musnmisz") {
      return "здоров'ї";
    } else {
      return "";
    }
  } else if (word === "Набуті хвороби") {
    if (caseWord === "rishuchmisz") {
      return "набутих хворобах";
    } else if (caseWord === "agresivmisz") {
      return "набутих хворобах";
    } else if (caseWord === "borotbaorudn") {
      return "набутими хворобами";
    } else if (caseWord === "konkurenzorudn") {
      return "набутими хворобами";
    } else if (caseWord === "neobachnmisz") {
      return "набутих хворобах";
    } else if (caseWord === "obmezenmisz") {
      return "набутих хворобах";
    } else if (caseWord === "stusnenrodov") {
      return "набутих хвороб";
    } else if (caseWord === "zakonymisz") {
      return "набутих хворобах";
    } else if (caseWord === "pravularodov") {
      return "набутих хвороб";
    } else if (caseWord === "konzentratmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "vutrummiszev") {
      return "набутих хворобах";
    } else if (caseWord === "seriozrodov") {
      return "набутих хвороб";
    } else if (caseWord === "skupistmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "zavzatmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "borgorudn") {
      return "набутими хворобами";
    } else if (caseWord === "rozshurenrodov") {
      return "набутих хвороб";
    } else if (caseWord === "ghedristmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "mudristmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "spravedrodov") {
      return "набутих хвороб";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "набутих хворобах";
    } else if (caseWord === "luksbrendznahid") {
      return "набуті хвороби";
    } else if (caseWord === "zakordonomnazyv") {
      return "набуті хвороби";
    } else if (caseWord === "vukladannyarodov") {
      return "набутих хвороб";
    } else if (caseWord === "originalmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "svobodamiszev") {
      return "набутих хворобах";
    } else if (caseWord === "spontanistmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "neochikuvanrodov") {
      return "набутих хвороб";
    } else if (caseWord === "astrologrodov") {
      return "набутих хвороб";
    } else if (caseWord === "vidkruttyarodov") {
      return "набутих хвороб";
    } else if (caseWord === "informattehnologorudn") {
      return "набутими хворобами";
    } else if (caseWord === "fantastikrodov") {
      return "набутих хвороб";
    } else if (caseWord === "kosmosmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "maibutnmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "genialnmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "набуті хвороби";
    } else if (caseWord === "phantazmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "набуті хвороби";
    } else if (caseWord === "vighisnyznahid") {
      return "набуті хвороби";
    } else if (caseWord === "nathnennamiszev") {
      return "набутих хворобах";
    } else if (caseWord === "obmanmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "samoobmanmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "zalegnostrodov") {
      return "набутих хвороб";
    } else if (caseWord === "meditacznahid") {
      return "набуті хвороби";
    } else if (caseWord === "transormznahid") {
      return "набуті хвороби";
    } else if (caseWord === "extremsituazorudn") {
      return "набутими хворобами";
    } else if (caseWord === "vuchavolarodov") {
      return "набутих хвороб";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "набутих хворобах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "набуті хвороби";
    } else if (caseWord === "tuskupravlinznahid") {
      return "набуті хвороби";
    } else if (caseWord === "narodgrodov") {
      return "набутих хвороб";
    } else if (caseWord === "orgazmrodov") {
      return "набутих хвороб";
    } else if (caseWord === "magiarodov") {
      return "набутих хвороб";
    } else if (caseWord === "mafiaznahid") {
      return "набуті хвороби";
    } else if (caseWord === "vladaznahid") {
      return "набуті хвороби";
    } else if (caseWord === "manipulorudn") {
      return "набутими хворобами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "набуті хвороби";
    } else if (caseWord === "onkologrodov") {
      return "набутих хвороб";
    } else if (caseWord === "rozorenznahid") {
      return "набуті хвороби";
    } else if (caseWord === "pogransutznahid") {
      return "набуті хвороби";
    } else if (caseWord === "duhmiscev") {
      return "набутих хворобах";
    } else if (caseWord === "silvolimiscev") {
      return "набутих хворобах";
    } else if (caseWord === "dushrodov") {
      return "набутих хвороб";
    } else if (caseWord === "emozrodov") {
      return "набутих хвороб";
    } else if (caseWord === "rodprogramrodov") {
      return "набутих хвороб";
    } else if (caseWord === "sprsvitmisz") {
      return "набутих хворобах";
    } else if (caseWord === "zonacomfmisz") {
      return "набутих хворобах";
    } else if (caseWord === "spadkovistrodov") {
      return "набутих хвороб";
    } else if (caseWord === "roduchmisz") {
      return "набутих хворобах";
    } else if (caseWord === "matyindividualmaty") {
      return "дала набуті хвороби";
    } else if (caseWord === "intelectmisz") {
      return "набутих хворобах";
    } else if (caseWord === "mislanalitmisz") {
      return "набутих хворобах";
    } else if (caseWord === "zvazkorudn") {
      return "набутими хворобами";
    } else if (caseWord === "kontaktnistorudn") {
      return "набутими хворобами";
    } else if (caseWord === "movaznahid") {
      return "набуті хвороби";
    } else if (caseWord === "vzaemotochznahid") {
      return "набуті хвороби";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "набуті хвороби";
    } else if (caseWord === "pochuttamisz") {
      return "набутих хворобах";
    } else if (caseWord === "sumpatmisz") {
      return "набутих хворобах";
    } else if (caseWord === "garmonmisz") {
      return "набутих хворобах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "набуті хвороби";
    } else if (caseWord === "obrazkohanznahid") {
      return "набуті хвороби";
    } else if (caseWord === "seksualnmisz") {
      return "набутих хворобах";
    } else if (caseWord === "aktivnmisz") {
      return "набутих хворобах";
    } else if (caseWord === "volyamisz") {
      return "набутих хворобах";
    } else if (caseWord === "impulsrodov") {
      return "набутих хвороб";
    } else if (caseWord === "musnmisz") {
      return "набутих хворобах";
    } else {
      return "";
    }
  } else if (word === "Трудова діяльність") {
    if (caseWord === "rishuchmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "agresivmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "borotbaorudn") {
      return "трудовою діяльністю";
    } else if (caseWord === "konkurenzorudn") {
      return "трудовою діяльністю";
    } else if (caseWord === "neobachnmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "obmezenmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "stusnenrodov") {
      return "трудової діяльності";
    } else if (caseWord === "zakonymisz") {
      return "трудовій діяльності";
    } else if (caseWord === "pravularodov") {
      return "трудової діяльності";
    } else if (caseWord === "konzentratmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "vutrummiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "seriozrodov") {
      return "трудової діяльності";
    } else if (caseWord === "skupistmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "zavzatmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "borgorudn") {
      return "трудовою діяльністю";
    } else if (caseWord === "rozshurenrodov") {
      return "трудової діяльності";
    } else if (caseWord === "ghedristmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "mudristmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "spravedrodov") {
      return "трудової діяльності";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "luksbrendznahid") {
      return "трудову діяльність";
    } else if (caseWord === "zakordonomnazyv") {
      return "трудова діяльність";
    } else if (caseWord === "vukladannyarodov") {
      return "трудової діяльності";
    } else if (caseWord === "originalmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "svobodamiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "spontanistmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "neochikuvanrodov") {
      return "трудової діяльності";
    } else if (caseWord === "astrologrodov") {
      return "трудової діяльності";
    } else if (caseWord === "vidkruttyarodov") {
      return "трудової діяльності";
    } else if (caseWord === "informattehnologorudn") {
      return "трудовою діяльністю";
    } else if (caseWord === "fantastikrodov") {
      return "трудової діяльності";
    } else if (caseWord === "kosmosmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "maibutnmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "genialnmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "трудову діяльність";
    } else if (caseWord === "phantazmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "трудову діяльність";
    } else if (caseWord === "vighisnyznahid") {
      return "трудову діяльність";
    } else if (caseWord === "nathnennamiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "obmanmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "samoobmanmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "zalegnostrodov") {
      return "трудової діяльності";
    } else if (caseWord === "meditacznahid") {
      return "трудову діяльність";
    } else if (caseWord === "transormznahid") {
      return "трудову діяльність";
    } else if (caseWord === "extremsituazorudn") {
      return "трудовою діяльністю";
    } else if (caseWord === "vuchavolarodov") {
      return "трудової діяльності";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "трудовій діяльності";
    } else if (caseWord === "tuskupravlinznahid") {
      return "трудову діяльність";
    } else if (caseWord === "tuskupravlinznahid") {
      return "трудову діяльність";
    } else if (caseWord === "narodgrodov") {
      return "трудової діяльності";
    } else if (caseWord === "orgazmrodov") {
      return "трудової діяльності";
    } else if (caseWord === "magiarodov") {
      return "трудової діяльності";
    } else if (caseWord === "mafiaznahid") {
      return "трудову діяльність";
    } else if (caseWord === "vladaznahid") {
      return "трудову діяльність";
    } else if (caseWord === "manipulorudn") {
      return "трудовою діяльністю";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "трудову діяльність";
    } else if (caseWord === "onkologrodov") {
      return "трудової діяльності";
    } else if (caseWord === "rozorenznahid") {
      return "трудову діяльність";
    } else if (caseWord === "pogransutznahid") {
      return "трудову діяльність";
    } else if (caseWord === "duhmiscev") {
      return "трудовій діяльності";
    } else if (caseWord === "silvolimiscev") {
      return "трудовій діяльності";
    } else if (caseWord === "dushrodov") {
      return "трудової діяльності";
    } else if (caseWord === "emozrodov") {
      return "трудової діяльності";
    } else if (caseWord === "rodprogramrodov") {
      return "трудової діяльності";
    } else if (caseWord === "sprsvitmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "zonacomfmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "spadkovistrodov") {
      return "трудової діяльності";
    } else if (caseWord === "roduchmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась трудовою діяльністю";
    } else if (caseWord === "intelectmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "mislanalitmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "zvazkorudn") {
      return "трудовою діяльністю";
    } else if (caseWord === "kontaktnistorudn") {
      return "трудовою діяльністю";
    } else if (caseWord === "movaznahid") {
      return "трудову діяльність";
    } else if (caseWord === "vzaemotochznahid") {
      return "трудову діяльність";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "трудову діяльність";
    } else if (caseWord === "pochuttamisz") {
      return "трудовій діяльності";
    } else if (caseWord === "sumpatmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "garmonmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "трудову діяльність";
    } else if (caseWord === "obrazkohanznahid") {
      return "трудову діяльність";
    } else if (caseWord === "seksualnmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "aktivnmisz") {
      return "трудовій діяльності";
    } else if (caseWord === "volyamisz") {
      return "трудовій діяльності";
    } else if (caseWord === "impulsrodov") {
      return "трудової діяльності";
    } else if (caseWord === "musnmisz") {
      return "трудовій діяльності";
    } else {
      return "";
    }
  } else if (word === "Робота") {
    if (caseWord === "rishuchmisz") {
      return "роботі";
    } else if (caseWord === "agresivmisz") {
      return "роботі";
    } else if (caseWord === "borotbaorudn") {
      return "роботою";
    } else if (caseWord === "konkurenzorudn") {
      return "роботою";
    } else if (caseWord === "neobachnmisz") {
      return "роботі";
    } else if (caseWord === "obmezenmisz") {
      return "роботі";
    } else if (caseWord === "stusnenrodov") {
      return "роботи";
    } else if (caseWord === "zakonymisz") {
      return "роботі";
    } else if (caseWord === "pravularodov") {
      return "роботи";
    } else if (caseWord === "konzentratmiszev") {
      return "роботі";
    } else if (caseWord === "vutrummiszev") {
      return "роботі";
    } else if (caseWord === "seriozrodov") {
      return "роботи";
    } else if (caseWord === "skupistmiszev") {
      return "роботі";
    } else if (caseWord === "zavzatmiszev") {
      return "роботі";
    } else if (caseWord === "borgorudn") {
      return "роботою";
    } else if (caseWord === "rozshurenrodov") {
      return "роботи";
    } else if (caseWord === "ghedristmiszev") {
      return "роботі";
    } else if (caseWord === "mudristmiszev") {
      return "роботі";
    } else if (caseWord === "spravedrodov") {
      return "роботи";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "роботі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "роботі";
    } else if (caseWord === "luksbrendznahid") {
      return "робота";
    } else if (caseWord === "zakordonomnazyv") {
      return "робота";
    } else if (caseWord === "vukladannyarodov") {
      return "роботи";
    } else if (caseWord === "originalmiszev") {
      return "роботі";
    } else if (caseWord === "svobodamiszev") {
      return "роботі";
    } else if (caseWord === "spontanistmiszev") {
      return "роботі";
    } else if (caseWord === "neochikuvanrodov") {
      return "роботи";
    } else if (caseWord === "astrologrodov") {
      return "роботи";
    } else if (caseWord === "vidkruttyarodov") {
      return "роботи";
    } else if (caseWord === "informattehnologorudn") {
      return "роботою";
    } else if (caseWord === "fantastikrodov") {
      return "роботи";
    } else if (caseWord === "kosmosmiszev") {
      return "роботі";
    } else if (caseWord === "maibutnmiszev") {
      return "роботі";
    } else if (caseWord === "genialnmiszev") {
      return "роботі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "робота";
    } else if (caseWord === "phantazmiszev") {
      return "роботі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "робота";
    } else if (caseWord === "vighisnyznahid") {
      return "робота";
    } else if (caseWord === "nathnennamiszev") {
      return "роботі";
    } else if (caseWord === "obmanmiszev") {
      return "роботі";
    } else if (caseWord === "samoobmanmiszev") {
      return "роботі";
    } else if (caseWord === "zalegnostrodov") {
      return "роботи";
    } else if (caseWord === "meditacznahid") {
      return "робота";
    } else if (caseWord === "transormznahid") {
      return "робота";
    } else if (caseWord === "extremsituazorudn") {
      return "роботою";
    } else if (caseWord === "vuchavolarodov") {
      return "роботи";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "роботі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "робота";
    } else if (caseWord === "tuskupravlinznahid") {
      return "робота";
    } else if (caseWord === "narodgrodov") {
      return "роботи";
    } else if (caseWord === "orgazmrodov") {
      return "роботи";
    } else if (caseWord === "magiarodov") {
      return "роботи";
    } else if (caseWord === "mafiaznahid") {
      return "робота";
    } else if (caseWord === "vladaznahid") {
      return "робота";
    } else if (caseWord === "manipulorudn") {
      return "роботою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "робота";
    } else if (caseWord === "onkologrodov") {
      return "роботи";
    } else if (caseWord === "rozorenznahid") {
      return "робота";
    } else if (caseWord === "pogransutznahid") {
      return "робота";
    } else if (caseWord === "duhmiscev") {
      return "роботі";
    } else if (caseWord === "silvolimiscev") {
      return "роботі";
    } else if (caseWord === "dushrodov") {
      return "роботи";
    } else if (caseWord === "emozrodov") {
      return "роботи";
    } else if (caseWord === "rodprogramrodov") {
      return "роботи";
    } else if (caseWord === "sprsvitmisz") {
      return "роботі";
    } else if (caseWord === "zonacomfmisz") {
      return "роботі";
    } else if (caseWord === "spadkovistrodov") {
      return "роботи";
    } else if (caseWord === "roduchmisz") {
      return "роботі";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась роботою";
    } else if (caseWord === "intelectmisz") {
      return "роботі";
    } else if (caseWord === "mislanalitmisz") {
      return "роботі";
    } else if (caseWord === "zvazkorudn") {
      return "роботою";
    } else if (caseWord === "kontaktnistorudn") {
      return "роботою";
    } else if (caseWord === "movaznahid") {
      return "робота";
    } else if (caseWord === "vzaemotochznahid") {
      return "робота";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "робота";
    } else if (caseWord === "pochuttamisz") {
      return "роботі";
    } else if (caseWord === "sumpatmisz") {
      return "роботі";
    } else if (caseWord === "garmonmisz") {
      return "роботі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "робота";
    } else if (caseWord === "obrazkohanznahid") {
      return "робота";
    } else if (caseWord === "seksualnmisz") {
      return "роботі";
    } else if (caseWord === "aktivnmisz") {
      return "роботі";
    } else if (caseWord === "volyamisz") {
      return "роботі";
    } else if (caseWord === "impulsrodov") {
      return "роботи";
    } else if (caseWord === "musnmisz") {
      return "роботі";
    } else {
      return "";
    }
  } else if (word === "Корисність") {
    if (caseWord === "rishuchmisz") {
      return "корисності";
    } else if (caseWord === "agresivmisz") {
      return "корисності";
    } else if (caseWord === "borotbaorudn") {
      return "корисністю";
    } else if (caseWord === "konkurenzorudn") {
      return "корисністю";
    } else if (caseWord === "neobachnmisz") {
      return "корисності";
    } else if (caseWord === "obmezenmisz") {
      return "корисності";
    } else if (caseWord === "stusnenrodov") {
      return "користності";
    } else if (caseWord === "zakonymisz") {
      return "корисності";
    } else if (caseWord === "pravularodov") {
      return "користності";
    } else if (caseWord === "konzentratmiszev") {
      return "корисності";
    } else if (caseWord === "vutrummiszev") {
      return "корисності";
    } else if (caseWord === "seriozrodov") {
      return "користності";
    } else if (caseWord === "skupistmiszev") {
      return "корисності";
    } else if (caseWord === "zavzatmiszev") {
      return "корисності";
    } else if (caseWord === "borgorudn") {
      return "корисністю";
    } else if (caseWord === "rozshurenrodov") {
      return "користності";
    } else if (caseWord === "ghedristmiszev") {
      return "корисності";
    } else if (caseWord === "mudristmiszev") {
      return "корисності";
    } else if (caseWord === "spravedrodov") {
      return "користності";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "корисності";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "корисності";
    } else if (caseWord === "luksbrendznahid") {
      return "корисність";
    } else if (caseWord === "zakordonomnazyv") {
      return "корисність";
    } else if (caseWord === "vukladannyarodov") {
      return "користності";
    } else if (caseWord === "originalmiszev") {
      return "корисності";
    } else if (caseWord === "svobodamiszev") {
      return "корисності";
    } else if (caseWord === "spontanistmiszev") {
      return "корисності";
    } else if (caseWord === "neochikuvanrodov") {
      return "користності";
    } else if (caseWord === "astrologrodov") {
      return "користності";
    } else if (caseWord === "vidkruttyarodov") {
      return "користності";
    } else if (caseWord === "informattehnologorudn") {
      return "корисністю";
    } else if (caseWord === "fantastikrodov") {
      return "користності";
    } else if (caseWord === "kosmosmiszev") {
      return "корисності";
    } else if (caseWord === "maibutnmiszev") {
      return "корисності";
    } else if (caseWord === "genialnmiszev") {
      return "корисності";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "корисність";
    } else if (caseWord === "phantazmiszev") {
      return "корисності";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "корисність";
    } else if (caseWord === "vighisnyznahid") {
      return "корисність";
    } else if (caseWord === "nathnennamiszev") {
      return "корисності";
    } else if (caseWord === "obmanmiszev") {
      return "корисності";
    } else if (caseWord === "samoobmanmiszev") {
      return "корисності";
    } else if (caseWord === "zalegnostrodov") {
      return "користності";
    } else if (caseWord === "meditacznahid") {
      return "корисність";
    } else if (caseWord === "transormznahid") {
      return "корисність";
    } else if (caseWord === "extremsituazorudn") {
      return "корисністю";
    } else if (caseWord === "vuchavolarodov") {
      return "користності";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "корисності";
    } else if (caseWord === "tuskupravlinznahid") {
      return "корисність";
    } else if (caseWord === "tuskupravlinznahid") {
      return "корисність";
    } else if (caseWord === "narodgrodov") {
      return "користності";
    } else if (caseWord === "orgazmrodov") {
      return "користності";
    } else if (caseWord === "magiarodov") {
      return "користності";
    } else if (caseWord === "mafiaznahid") {
      return "корисність";
    } else if (caseWord === "vladaznahid") {
      return "корисність";
    } else if (caseWord === "manipulorudn") {
      return "корисністю";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "корисність";
    } else if (caseWord === "onkologrodov") {
      return "користності";
    } else if (caseWord === "rozorenznahid") {
      return "корисність";
    } else if (caseWord === "pogransutznahid") {
      return "корисність";
    } else if (caseWord === "duhmiscev") {
      return "корисності";
    } else if (caseWord === "silvolimiscev") {
      return "корисності";
    } else if (caseWord === "dushrodov") {
      return "користності";
    } else if (caseWord === "emozrodov") {
      return "користності";
    } else if (caseWord === "rodprogramrodov") {
      return "користності";
    } else if (caseWord === "sprsvitmisz") {
      return "корисності";
    } else if (caseWord === "zonacomfmisz") {
      return "корисності";
    } else if (caseWord === "spadkovistrodov") {
      return "користності";
    } else if (caseWord === "roduchmisz") {
      return "корисності";
    } else if (caseWord === "matyindividualmaty") {
      return "приносила користь";
    } else if (caseWord === "intelectmisz") {
      return "корисності";
    } else if (caseWord === "mislanalitmisz") {
      return "корисності";
    } else if (caseWord === "zvazkorudn") {
      return "корисністю";
    } else if (caseWord === "kontaktnistorudn") {
      return "корисністю";
    } else if (caseWord === "movaznahid") {
      return "корисність";
    } else if (caseWord === "vzaemotochznahid") {
      return "корисність";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "корисність";
    } else if (caseWord === "pochuttamisz") {
      return "корисності";
    } else if (caseWord === "sumpatmisz") {
      return "корисності";
    } else if (caseWord === "garmonmisz") {
      return "корисності";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "корисність";
    } else if (caseWord === "obrazkohanznahid") {
      return "корисність";
    } else if (caseWord === "seksualnmisz") {
      return "корисності";
    } else if (caseWord === "aktivnmisz") {
      return "корисності";
    } else if (caseWord === "volyamisz") {
      return "корисності";
    } else if (caseWord === "impulsrodov") {
      return "користності";
    } else if (caseWord === "musnmisz") {
      return "корисності";
    } else {
      return "";
    }
  } else if (word === "Борги") {
    if (caseWord === "rishuchmisz") {
      return "боргах";
    } else if (caseWord === "agresivmisz") {
      return "боргах";
    } else if (caseWord === "borotbaorudn") {
      return "боргами";
    } else if (caseWord === "konkurenzorudn") {
      return "боргами";
    } else if (caseWord === "neobachnmisz") {
      return "боргах";
    } else if (caseWord === "obmezenmisz") {
      return "боргах";
    } else if (caseWord === "stusnenrodov") {
      return "боргів";
    } else if (caseWord === "zakonymisz") {
      return "боргах";
    } else if (caseWord === "pravularodov") {
      return "боргів";
    } else if (caseWord === "konzentratmiszev") {
      return "боргах";
    } else if (caseWord === "vutrummiszev") {
      return "боргах";
    } else if (caseWord === "seriozrodov") {
      return "боргів";
    } else if (caseWord === "skupistmiszev") {
      return "боргах";
    } else if (caseWord === "zavzatmiszev") {
      return "боргах";
    } else if (caseWord === "borgorudn") {
      return "боргами";
    } else if (caseWord === "rozshurenrodov") {
      return "боргів";
    } else if (caseWord === "ghedristmiszev") {
      return "боргах";
    } else if (caseWord === "mudristmiszev") {
      return "боргах";
    } else if (caseWord === "spravedrodov") {
      return "боргів";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "боргах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "боргах";
    } else if (caseWord === "luksbrendznahid") {
      return "борги";
    } else if (caseWord === "zakordonomnazyv") {
      return "борги";
    } else if (caseWord === "vukladannyarodov") {
      return "боргів";
    } else if (caseWord === "originalmiszev") {
      return "боргах";
    } else if (caseWord === "svobodamiszev") {
      return "боргах";
    } else if (caseWord === "spontanistmiszev") {
      return "боргах";
    } else if (caseWord === "neochikuvanrodov") {
      return "боргів";
    } else if (caseWord === "astrologrodov") {
      return "боргів";
    } else if (caseWord === "vidkruttyarodov") {
      return "боргів";
    } else if (caseWord === "informattehnologorudn") {
      return "боргами";
    } else if (caseWord === "fantastikrodov") {
      return "боргів";
    } else if (caseWord === "kosmosmiszev") {
      return "боргах";
    } else if (caseWord === "maibutnmiszev") {
      return "боргах";
    } else if (caseWord === "genialnmiszev") {
      return "боргах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "борги";
    } else if (caseWord === "phantazmiszev") {
      return "боргах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "борги";
    } else if (caseWord === "vighisnyznahid") {
      return "борги";
    } else if (caseWord === "nathnennamiszev") {
      return "боргах";
    } else if (caseWord === "obmanmiszev") {
      return "боргах";
    } else if (caseWord === "samoobmanmiszev") {
      return "боргах";
    } else if (caseWord === "zalegnostrodov") {
      return "боргів";
    } else if (caseWord === "meditacznahid") {
      return "борги";
    } else if (caseWord === "transormznahid") {
      return "борги";
    } else if (caseWord === "extremsituazorudn") {
      return "боргами";
    } else if (caseWord === "vuchavolarodov") {
      return "боргів";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "боргах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "борги";
    } else if (caseWord === "tuskupravlinznahid") {
      return "борги";
    } else if (caseWord === "narodgrodov") {
      return "боргів";
    } else if (caseWord === "orgazmrodov") {
      return "боргів";
    } else if (caseWord === "magiarodov") {
      return "боргів";
    } else if (caseWord === "mafiaznahid") {
      return "борги";
    } else if (caseWord === "vladaznahid") {
      return "борги";
    } else if (caseWord === "manipulorudn") {
      return "боргами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "борги";
    } else if (caseWord === "onkologrodov") {
      return "боргів";
    } else if (caseWord === "rozorenznahid") {
      return "борги";
    } else if (caseWord === "pogransutznahid") {
      return "борги";
    } else if (caseWord === "duhmiscev") {
      return "боргах";
    } else if (caseWord === "silvolimiscev") {
      return "боргах";
    } else if (caseWord === "dushrodov") {
      return "боргів";
    } else if (caseWord === "emozrodov") {
      return "боргів";
    } else if (caseWord === "rodprogramrodov") {
      return "боргів";
    } else if (caseWord === "sprsvitmisz") {
      return "боргах";
    } else if (caseWord === "zonacomfmisz") {
      return "боргах";
    } else if (caseWord === "spadkovistrodov") {
      return "боргів";
    } else if (caseWord === "roduchmisz") {
      return "боргах";
    } else if (caseWord === "matyindividualmaty") {
      return "мала борги";
    } else if (caseWord === "intelectmisz") {
      return "боргах";
    } else if (caseWord === "mislanalitmisz") {
      return "боргах";
    } else if (caseWord === "zvazkorudn") {
      return "боргами";
    } else if (caseWord === "kontaktnistorudn") {
      return "боргами";
    } else if (caseWord === "movaznahid") {
      return "борги";
    } else if (caseWord === "vzaemotochznahid") {
      return "борги";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "борги";
    } else if (caseWord === "pochuttamisz") {
      return "боргах";
    } else if (caseWord === "sumpatmisz") {
      return "боргах";
    } else if (caseWord === "garmonmisz") {
      return "боргах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "борги";
    } else if (caseWord === "obrazkohanznahid") {
      return "борги";
    } else if (caseWord === "seksualnmisz") {
      return "боргах";
    } else if (caseWord === "aktivnmisz") {
      return "боргах";
    } else if (caseWord === "volyamisz") {
      return "боргах";
    } else if (caseWord === "impulsrodov") {
      return "боргів";
    } else if (caseWord === "musnmisz") {
      return "боргах";
    } else {
      return "";
    }
  } else if (word === "Домашні тварини") {
    if (caseWord === "rishuchmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "agresivmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "borotbaorudn") {
      return "домашніми тваринами";
    } else if (caseWord === "konkurenzorudn") {
      return "домашніми тваринами";
    } else if (caseWord === "neobachnmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "obmezenmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "stusnenrodov") {
      return "домашніх тварин";
    } else if (caseWord === "zakonymisz") {
      return "домашніх тваринах";
    } else if (caseWord === "pravularodov") {
      return "домашніх тварин";
    } else if (caseWord === "konzentratmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "vutrummiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "seriozrodov") {
      return "домашніх тварин";
    } else if (caseWord === "skupistmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "zavzatmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "borgorudn") {
      return "домашніми тваринами";
    } else if (caseWord === "rozshurenrodov") {
      return "домашніх тварин";
    } else if (caseWord === "ghedristmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "mudristmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "spravedrodov") {
      return "домашніх тварин";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "luksbrendznahid") {
      return "домашніх тварин";
    } else if (caseWord === "zakordonomnazyv") {
      return "домашні тварини";
    } else if (caseWord === "vukladannyarodov") {
      return "домашніх тварин";
    } else if (caseWord === "originalmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "svobodamiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "spontanistmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "neochikuvanrodov") {
      return "домашніх тварин";
    } else if (caseWord === "astrologrodov") {
      return "домашніх тварин";
    } else if (caseWord === "vidkruttyarodov") {
      return "домашніх тварин";
    } else if (caseWord === "informattehnologorudn") {
      return "домашніми тваринами";
    } else if (caseWord === "fantastikrodov") {
      return "домашніх тварин";
    } else if (caseWord === "kosmosmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "maibutnmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "genialnmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "домашніх тварин";
    } else if (caseWord === "phantazmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "домашніх тварин";
    } else if (caseWord === "vighisnyznahid") {
      return "домашніх тварин";
    } else if (caseWord === "nathnennamiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "obmanmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "samoobmanmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "zalegnostrodov") {
      return "домашніх тварин";
    } else if (caseWord === "meditacznahid") {
      return "домашніх тварин";
    } else if (caseWord === "transormznahid") {
      return "домашніх тварин";
    } else if (caseWord === "extremsituazorudn") {
      return "домашніми тваринами";
    } else if (caseWord === "vuchavolarodov") {
      return "домашніх тварин";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "домашніх тваринах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "домашніх тварин";
    } else if (caseWord === "tuskupravlinznahid") {
      return "домашніх тварин";
    } else if (caseWord === "narodgrodov") {
      return "домашніх тварин";
    } else if (caseWord === "orgazmrodov") {
      return "домашніх тварин";
    } else if (caseWord === "magiarodov") {
      return "домашніх тварин";
    } else if (caseWord === "mafiaznahid") {
      return "домашніх тварин";
    } else if (caseWord === "vladaznahid") {
      return "домашніх тварин";
    } else if (caseWord === "manipulorudn") {
      return "домашніми тваринами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "домашніх тварин";
    } else if (caseWord === "onkologrodov") {
      return "домашніх тварин";
    } else if (caseWord === "rozorenznahid") {
      return "домашніх тварин";
    } else if (caseWord === "pogransutznahid") {
      return "домашніх тварин";
    } else if (caseWord === "duhmiscev") {
      return "домашніх тваринах";
    } else if (caseWord === "silvolimiscev") {
      return "домашніх тваринах";
    } else if (caseWord === "dushrodov") {
      return "домашніх тварин";
    } else if (caseWord === "emozrodov") {
      return "домашніх тварин";
    } else if (caseWord === "rodprogramrodov") {
      return "домашніх тварин";
    } else if (caseWord === "sprsvitmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "zonacomfmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "spadkovistrodov") {
      return "домашніх тварин";
    } else if (caseWord === "roduchmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "matyindividualmaty") {
      return "мала домашніх тварин";
    } else if (caseWord === "intelectmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "mislanalitmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "zvazkorudn") {
      return "домашніми тваринами";
    } else if (caseWord === "kontaktnistorudn") {
      return "домашніми тваринами";
    } else if (caseWord === "movaznahid") {
      return "домашніх тварин";
    } else if (caseWord === "vzaemotochznahid") {
      return "домашніх тварин";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "домашніх тварин";
    } else if (caseWord === "pochuttamisz") {
      return "домашніх тваринах";
    } else if (caseWord === "sumpatmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "garmonmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "домашніх тварин";
    } else if (caseWord === "obrazkohanznahid") {
      return "домашніх тварин";
    } else if (caseWord === "seksualnmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "aktivnmisz") {
      return "домашніх тваринах";
    } else if (caseWord === "volyamisz") {
      return "домашніх тваринах";
    } else if (caseWord === "impulsrodov") {
      return "домашніх тварин";
    } else if (caseWord === "musnmisz") {
      return "домашніх тваринах";
    } else {
      return "";
    }
  } else if (word === "Персонал") {
    if (caseWord === "rishuchmisz") {
      return "персоналі";
    } else if (caseWord === "agresivmisz") {
      return "персоналі";
    } else if (caseWord === "borotbaorudn") {
      return "персоналом";
    } else if (caseWord === "konkurenzorudn") {
      return "персоналом";
    } else if (caseWord === "neobachnmisz") {
      return "персоналі";
    } else if (caseWord === "obmezenmisz") {
      return "персоналі";
    } else if (caseWord === "stusnenrodov") {
      return "персоналу";
    } else if (caseWord === "zakonymisz") {
      return "персоналі";
    } else if (caseWord === "pravularodov") {
      return "персоналу";
    } else if (caseWord === "konzentratmiszev") {
      return "персоналі";
    } else if (caseWord === "vutrummiszev") {
      return "персоналі";
    } else if (caseWord === "seriozrodov") {
      return "персоналу";
    } else if (caseWord === "skupistmiszev") {
      return "персоналі";
    } else if (caseWord === "zavzatmiszev") {
      return "персоналі";
    } else if (caseWord === "borgorudn") {
      return "персоналом";
    } else if (caseWord === "rozshurenrodov") {
      return "персоналу";
    } else if (caseWord === "ghedristmiszev") {
      return "персоналі";
    } else if (caseWord === "mudristmiszev") {
      return "персоналі";
    } else if (caseWord === "spravedrodov") {
      return "персоналу";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "персоналі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "персоналі";
    } else if (caseWord === "luksbrendznahid") {
      return "персонал";
    } else if (caseWord === "zakordonomnazyv") {
      return "персонал";
    } else if (caseWord === "vukladannyarodov") {
      return "персоналу";
    } else if (caseWord === "originalmiszev") {
      return "персоналі";
    } else if (caseWord === "svobodamiszev") {
      return "персоналі";
    } else if (caseWord === "spontanistmiszev") {
      return "персоналі";
    } else if (caseWord === "neochikuvanrodov") {
      return "персоналу";
    } else if (caseWord === "astrologrodov") {
      return "персоналу";
    } else if (caseWord === "vidkruttyarodov") {
      return "персоналу";
    } else if (caseWord === "informattehnologorudn") {
      return "персоналом";
    } else if (caseWord === "fantastikrodov") {
      return "персоналу";
    } else if (caseWord === "kosmosmiszev") {
      return "персоналі";
    } else if (caseWord === "maibutnmiszev") {
      return "персоналі";
    } else if (caseWord === "genialnmiszev") {
      return "персоналі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "персонал";
    } else if (caseWord === "phantazmiszev") {
      return "персоналі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "персонал";
    } else if (caseWord === "vighisnyznahid") {
      return "персонал";
    } else if (caseWord === "nathnennamiszev") {
      return "персоналі";
    } else if (caseWord === "obmanmiszev") {
      return "персоналі";
    } else if (caseWord === "samoobmanmiszev") {
      return "персоналі";
    } else if (caseWord === "zalegnostrodov") {
      return "персоналу";
    } else if (caseWord === "meditacznahid") {
      return "персонал";
    } else if (caseWord === "transormznahid") {
      return "персонал";
    } else if (caseWord === "extremsituazorudn") {
      return "персоналом";
    } else if (caseWord === "vuchavolarodov") {
      return "персоналу";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "персоналі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "персонал";
    } else if (caseWord === "tuskupravlinznahid") {
      return "персонал";
    } else if (caseWord === "narodgrodov") {
      return "персоналу";
    } else if (caseWord === "orgazmrodov") {
      return "персоналу";
    } else if (caseWord === "magiarodov") {
      return "персоналу";
    } else if (caseWord === "mafiaznahid") {
      return "персонал";
    } else if (caseWord === "vladaznahid") {
      return "персонал";
    } else if (caseWord === "manipulorudn") {
      return "персоналом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "персонал";
    } else if (caseWord === "onkologrodov") {
      return "персоналу";
    } else if (caseWord === "rozorenznahid") {
      return "персонал";
    } else if (caseWord === "pogransutznahid") {
      return "персонал";
    } else if (caseWord === "duhmiscev") {
      return "персоналі";
    } else if (caseWord === "silvolimiscev") {
      return "персоналі";
    } else if (caseWord === "dushrodov") {
      return "персоналу";
    } else if (caseWord === "emozrodov") {
      return "персоналу";
    } else if (caseWord === "rodprogramrodov") {
      return "персоналу";
    } else if (caseWord === "sprsvitmisz") {
      return "персоналі";
    } else if (caseWord === "zonacomfmisz") {
      return "персоналі";
    } else if (caseWord === "spadkovistrodov") {
      return "персоналу";
    } else if (caseWord === "roduchmisz") {
      return "персоналі";
    } else if (caseWord === "matyindividualmaty") {
      return "керувала персоналом";
    } else if (caseWord === "intelectmisz") {
      return "персоналі";
    } else if (caseWord === "mislanalitmisz") {
      return "персоналі";
    } else if (caseWord === "zvazkorudn") {
      return "персоналом";
    } else if (caseWord === "kontaktnistorudn") {
      return "персоналом";
    } else if (caseWord === "movaznahid") {
      return "персонал";
    } else if (caseWord === "vzaemotochznahid") {
      return "персонал";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "персонал";
    } else if (caseWord === "pochuttamisz") {
      return "персоналі";
    } else if (caseWord === "sumpatmisz") {
      return "персоналі";
    } else if (caseWord === "garmonmisz") {
      return "персоналі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "персонал";
    } else if (caseWord === "obrazkohanznahid") {
      return "персонал";
    } else if (caseWord === "seksualnmisz") {
      return "персоналі";
    } else if (caseWord === "aktivnmisz") {
      return "персоналі";
    } else if (caseWord === "volyamisz") {
      return "персоналі";
    } else if (caseWord === "impulsrodov") {
      return "персоналу";
    } else if (caseWord === "musnmisz") {
      return "персоналі";
    } else {
      return "";
    }
  } else if (word === "Шлюб") {
    if (caseWord === "rishuchmisz") {
      return "шлюбі";
    } else if (caseWord === "agresivmisz") {
      return "шлюбі";
    } else if (caseWord === "borotbaorudn") {
      return "шлюбом";
    } else if (caseWord === "konkurenzorudn") {
      return "шлюбом";
    } else if (caseWord === "neobachnmisz") {
      return "шлюбі";
    } else if (caseWord === "obmezenmisz") {
      return "шлюбі";
    } else if (caseWord === "stusnenrodov") {
      return "шлюбу";
    } else if (caseWord === "zakonymisz") {
      return "шлюбі";
    } else if (caseWord === "pravularodov") {
      return "шлюбу";
    } else if (caseWord === "konzentratmiszev") {
      return "шлюбі";
    } else if (caseWord === "vutrummiszev") {
      return "шлюбі";
    } else if (caseWord === "seriozrodov") {
      return "шлюбу";
    } else if (caseWord === "skupistmiszev") {
      return "шлюбі";
    } else if (caseWord === "zavzatmiszev") {
      return "шлюбі";
    } else if (caseWord === "borgorudn") {
      return "шлюбом";
    } else if (caseWord === "rozshurenrodov") {
      return "шлюбу";
    } else if (caseWord === "ghedristmiszev") {
      return "шлюбі";
    } else if (caseWord === "mudristmiszev") {
      return "шлюбі";
    } else if (caseWord === "spravedrodov") {
      return "шлюбу";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "шлюбі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "шлюбі";
    } else if (caseWord === "luksbrendznahid") {
      return "шлюб";
    } else if (caseWord === "zakordonomnazyv") {
      return "шлюб";
    } else if (caseWord === "vukladannyarodov") {
      return "шлюбу";
    } else if (caseWord === "originalmiszev") {
      return "шлюбі";
    } else if (caseWord === "svobodamiszev") {
      return "шлюбі";
    } else if (caseWord === "spontanistmiszev") {
      return "шлюбі";
    } else if (caseWord === "neochikuvanrodov") {
      return "шлюбу";
    } else if (caseWord === "astrologrodov") {
      return "шлюбу";
    } else if (caseWord === "vidkruttyarodov") {
      return "шлюбу";
    } else if (caseWord === "informattehnologorudn") {
      return "шлюбом";
    } else if (caseWord === "fantastikrodov") {
      return "шлюбу";
    } else if (caseWord === "kosmosmiszev") {
      return "шлюбі";
    } else if (caseWord === "maibutnmiszev") {
      return "шлюбі";
    } else if (caseWord === "genialnmiszev") {
      return "шлюбі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "шлюб";
    } else if (caseWord === "phantazmiszev") {
      return "шлюбі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "шлюб";
    } else if (caseWord === "vighisnyznahid") {
      return "шлюб";
    } else if (caseWord === "nathnennamiszev") {
      return "шлюбі";
    } else if (caseWord === "obmanmiszev") {
      return "шлюбі";
    } else if (caseWord === "samoobmanmiszev") {
      return "шлюбі";
    } else if (caseWord === "zalegnostrodov") {
      return "шлюбу";
    } else if (caseWord === "meditacznahid") {
      return "шлюб";
    } else if (caseWord === "transormznahid") {
      return "шлюб";
    } else if (caseWord === "extremsituazorudn") {
      return "шлюбом";
    } else if (caseWord === "vuchavolarodov") {
      return "шлюбу";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "шлюбі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "шлюб";
    } else if (caseWord === "tuskupravlinznahid") {
      return "шлюб";
    } else if (caseWord === "narodgrodov") {
      return "шлюбу";
    } else if (caseWord === "orgazmrodov") {
      return "шлюбу";
    } else if (caseWord === "magiarodov") {
      return "шлюбу";
    } else if (caseWord === "mafiaznahid") {
      return "шлюб";
    } else if (caseWord === "vladaznahid") {
      return "шлюб";
    } else if (caseWord === "manipulorudn") {
      return "шлюбом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "шлюб";
    } else if (caseWord === "onkologrodov") {
      return "шлюбу";
    } else if (caseWord === "rozorenznahid") {
      return "шлюб";
    } else if (caseWord === "pogransutznahid") {
      return "шлюб";
    } else if (caseWord === "duhmiscev") {
      return "шлюбі";
    } else if (caseWord === "silvolimiscev") {
      return "шлюбі";
    } else if (caseWord === "dushrodov") {
      return "шлюбу";
    } else if (caseWord === "emozrodov") {
      return "шлюбу";
    } else if (caseWord === "rodprogramrodov") {
      return "шлюбу";
    } else if (caseWord === "sprsvitmisz") {
      return "шлюбі";
    } else if (caseWord === "zonacomfmisz") {
      return "шлюбі";
    } else if (caseWord === "spadkovistrodov") {
      return "шлюбу";
    } else if (caseWord === "roduchmisz") {
      return "шлюбі";
    } else if (caseWord === "matyindividualmaty") {
      return "була у шлюбі";
    } else if (caseWord === "intelectmisz") {
      return "шлюбі";
    } else if (caseWord === "mislanalitmisz") {
      return "шлюбі";
    } else if (caseWord === "zvazkorudn") {
      return "шлюбом";
    } else if (caseWord === "kontaktnistorudn") {
      return "шлюбом";
    } else if (caseWord === "movaznahid") {
      return "шлюб";
    } else if (caseWord === "vzaemotochznahid") {
      return "шлюб";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "шлюб";
    } else if (caseWord === "pochuttamisz") {
      return "шлюбі";
    } else if (caseWord === "sumpatmisz") {
      return "шлюбі";
    } else if (caseWord === "garmonmisz") {
      return "шлюбі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "шлюб";
    } else if (caseWord === "obrazkohanznahid") {
      return "шлюб";
    } else if (caseWord === "seksualnmisz") {
      return "шлюбі";
    } else if (caseWord === "aktivnmisz") {
      return "шлюбі";
    } else if (caseWord === "volyamisz") {
      return "шлюбі";
    } else if (caseWord === "impulsrodov") {
      return "шлюбу";
    } else if (caseWord === "musnmisz") {
      return "шлюбі";
    } else {
      return "";
    }
  } else if (word === "Партнерство") {
    if (caseWord === "rishuchmisz") {
      return "партнерстві";
    } else if (caseWord === "agresivmisz") {
      return "партнерстві";
    } else if (caseWord === "borotbaorudn") {
      return "партнерством";
    } else if (caseWord === "konkurenzorudn") {
      return "партнерством";
    } else if (caseWord === "neobachnmisz") {
      return "партнерстві";
    } else if (caseWord === "obmezenmisz") {
      return "партнерстві";
    } else if (caseWord === "stusnenrodov") {
      return "партнерства";
    } else if (caseWord === "zakonymisz") {
      return "партнерстві";
    } else if (caseWord === "pravularodov") {
      return "партнерства";
    } else if (caseWord === "konzentratmiszev") {
      return "партнерстві";
    } else if (caseWord === "vutrummiszev") {
      return "партнерстві";
    } else if (caseWord === "seriozrodov") {
      return "партнерства";
    } else if (caseWord === "skupistmiszev") {
      return "партнерстві";
    } else if (caseWord === "zavzatmiszev") {
      return "партнерстві";
    } else if (caseWord === "borgorudn") {
      return "партнерством";
    } else if (caseWord === "rozshurenrodov") {
      return "партнерства";
    } else if (caseWord === "ghedristmiszev") {
      return "партнерстві";
    } else if (caseWord === "mudristmiszev") {
      return "партнерстві";
    } else if (caseWord === "spravedrodov") {
      return "партнерства";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "партнерстві";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "партнерстві";
    } else if (caseWord === "luksbrendznahid") {
      return "партнерство";
    } else if (caseWord === "zakordonomnazyv") {
      return "партнерство";
    } else if (caseWord === "vukladannyarodov") {
      return "партнерства";
    } else if (caseWord === "originalmiszev") {
      return "партнерстві";
    } else if (caseWord === "svobodamiszev") {
      return "партнерстві";
    } else if (caseWord === "spontanistmiszev") {
      return "партнерстві";
    } else if (caseWord === "neochikuvanrodov") {
      return "партнерства";
    } else if (caseWord === "astrologrodov") {
      return "партнерства";
    } else if (caseWord === "vidkruttyarodov") {
      return "партнерства";
    } else if (caseWord === "informattehnologorudn") {
      return "партнерством";
    } else if (caseWord === "fantastikrodov") {
      return "партнерства";
    } else if (caseWord === "kosmosmiszev") {
      return "партнерстві";
    } else if (caseWord === "maibutnmiszev") {
      return "партнерстві";
    } else if (caseWord === "genialnmiszev") {
      return "партнерстві";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "партнерство";
    } else if (caseWord === "phantazmiszev") {
      return "партнерстві";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "партнерство";
    } else if (caseWord === "vighisnyznahid") {
      return "партнерство";
    } else if (caseWord === "nathnennamiszev") {
      return "партнерстві";
    } else if (caseWord === "obmanmiszev") {
      return "партнерстві";
    } else if (caseWord === "samoobmanmiszev") {
      return "партнерстві";
    } else if (caseWord === "zalegnostrodov") {
      return "партнерства";
    } else if (caseWord === "meditacznahid") {
      return "партнерство";
    } else if (caseWord === "transormznahid") {
      return "партнерство";
    } else if (caseWord === "extremsituazorudn") {
      return "партнерством";
    } else if (caseWord === "vuchavolarodov") {
      return "партнерства";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "партнерстві";
    } else if (caseWord === "tuskupravlinznahid") {
      return "партнерство";
    } else if (caseWord === "tuskupravlinznahid") {
      return "партнерство";
    } else if (caseWord === "narodgrodov") {
      return "партнерства";
    } else if (caseWord === "orgazmrodov") {
      return "партнерства";
    } else if (caseWord === "magiarodov") {
      return "партнерства";
    } else if (caseWord === "mafiaznahid") {
      return "партнерство";
    } else if (caseWord === "vladaznahid") {
      return "партнерство";
    } else if (caseWord === "manipulorudn") {
      return "партнерством";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "партнерство";
    } else if (caseWord === "onkologrodov") {
      return "партнерства";
    } else if (caseWord === "rozorenznahid") {
      return "партнерство";
    } else if (caseWord === "pogransutznahid") {
      return "партнерство";
    } else if (caseWord === "duhmiscev") {
      return "партнерстві";
    } else if (caseWord === "silvolimiscev") {
      return "партнерстві";
    } else if (caseWord === "dushrodov") {
      return "партнерства";
    } else if (caseWord === "emozrodov") {
      return "партнерства";
    } else if (caseWord === "rodprogramrodov") {
      return "партнерства";
    } else if (caseWord === "sprsvitmisz") {
      return "партнерстві";
    } else if (caseWord === "zonacomfmisz") {
      return "партнерстві";
    } else if (caseWord === "spadkovistrodov") {
      return "партнерства";
    } else if (caseWord === "roduchmisz") {
      return "партнерстві";
    } else if (caseWord === "matyindividualmaty") {
      return "була у партнерстві";
    } else if (caseWord === "intelectmisz") {
      return "партнерстві";
    } else if (caseWord === "mislanalitmisz") {
      return "партнерстві";
    } else if (caseWord === "zvazkorudn") {
      return "партнерством";
    } else if (caseWord === "kontaktnistorudn") {
      return "партнерством";
    } else if (caseWord === "movaznahid") {
      return "партнерство";
    } else if (caseWord === "vzaemotochznahid") {
      return "партнерство";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "партнерство";
    } else if (caseWord === "pochuttamisz") {
      return "партнерстві";
    } else if (caseWord === "sumpatmisz") {
      return "партнерстві";
    } else if (caseWord === "garmonmisz") {
      return "партнерстві";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "партнерство";
    } else if (caseWord === "obrazkohanznahid") {
      return "партнерство";
    } else if (caseWord === "seksualnmisz") {
      return "партнерстві";
    } else if (caseWord === "aktivnmisz") {
      return "партнерстві";
    } else if (caseWord === "volyamisz") {
      return "партнерстві";
    } else if (caseWord === "impulsrodov") {
      return "партнерства";
    } else if (caseWord === "musnmisz") {
      return "партнерстві";
    } else {
      return "";
    }
  } else if (word === "Суди") {
    if (caseWord === "rishuchmisz") {
      return "судах";
    } else if (caseWord === "agresivmisz") {
      return "судах";
    } else if (caseWord === "borotbaorudn") {
      return "судами";
    } else if (caseWord === "konkurenzorudn") {
      return "судами";
    } else if (caseWord === "neobachnmisz") {
      return "судах";
    } else if (caseWord === "obmezenmisz") {
      return "судах";
    } else if (caseWord === "stusnenrodov") {
      return "судів";
    } else if (caseWord === "zakonymisz") {
      return "судах";
    } else if (caseWord === "pravularodov") {
      return "судів";
    } else if (caseWord === "konzentratmiszev") {
      return "судах";
    } else if (caseWord === "vutrummiszev") {
      return "судах";
    } else if (caseWord === "seriozrodov") {
      return "судів";
    } else if (caseWord === "skupistmiszev") {
      return "судах";
    } else if (caseWord === "zavzatmiszev") {
      return "судах";
    } else if (caseWord === "borgorudn") {
      return "судами";
    } else if (caseWord === "rozshurenrodov") {
      return "судів";
    } else if (caseWord === "ghedristmiszev") {
      return "судах";
    } else if (caseWord === "mudristmiszev") {
      return "судах";
    } else if (caseWord === "spravedrodov") {
      return "судів";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "судах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "судах";
    } else if (caseWord === "luksbrendznahid") {
      return "суди";
    } else if (caseWord === "zakordonomnazyv") {
      return "суди";
    } else if (caseWord === "vukladannyarodov") {
      return "судів";
    } else if (caseWord === "originalmiszev") {
      return "судах";
    } else if (caseWord === "svobodamiszev") {
      return "судах";
    } else if (caseWord === "spontanistmiszev") {
      return "судах";
    } else if (caseWord === "neochikuvanrodov") {
      return "судів";
    } else if (caseWord === "astrologrodov") {
      return "судів";
    } else if (caseWord === "vidkruttyarodov") {
      return "судів";
    } else if (caseWord === "informattehnologorudn") {
      return "судами";
    } else if (caseWord === "fantastikrodov") {
      return "судів";
    } else if (caseWord === "kosmosmiszev") {
      return "судах";
    } else if (caseWord === "maibutnmiszev") {
      return "судах";
    } else if (caseWord === "genialnmiszev") {
      return "судах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "суди";
    } else if (caseWord === "phantazmiszev") {
      return "судах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "суди";
    } else if (caseWord === "vighisnyznahid") {
      return "суди";
    } else if (caseWord === "nathnennamiszev") {
      return "судах";
    } else if (caseWord === "obmanmiszev") {
      return "судах";
    } else if (caseWord === "samoobmanmiszev") {
      return "судах";
    } else if (caseWord === "zalegnostrodov") {
      return "судів";
    } else if (caseWord === "meditacznahid") {
      return "суди";
    } else if (caseWord === "transormznahid") {
      return "суди";
    } else if (caseWord === "extremsituazorudn") {
      return "судами";
    } else if (caseWord === "vuchavolarodov") {
      return "судів";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "судах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "суди";
    } else if (caseWord === "tuskupravlinznahid") {
      return "суди";
    } else if (caseWord === "narodgrodov") {
      return "судів";
    } else if (caseWord === "orgazmrodov") {
      return "судів";
    } else if (caseWord === "magiarodov") {
      return "судів";
    } else if (caseWord === "mafiaznahid") {
      return "суди";
    } else if (caseWord === "vladaznahid") {
      return "суди";
    } else if (caseWord === "manipulorudn") {
      return "судами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "суди";
    } else if (caseWord === "onkologrodov") {
      return "судів";
    } else if (caseWord === "rozorenznahid") {
      return "суди";
    } else if (caseWord === "pogransutznahid") {
      return "суди";
    } else if (caseWord === "duhmiscev") {
      return "судах";
    } else if (caseWord === "silvolimiscev") {
      return "судах";
    } else if (caseWord === "dushrodov") {
      return "судів";
    } else if (caseWord === "emozrodov") {
      return "судів";
    } else if (caseWord === "rodprogramrodov") {
      return "судів";
    } else if (caseWord === "sprsvitmisz") {
      return "судах";
    } else if (caseWord === "zonacomfmisz") {
      return "судах";
    } else if (caseWord === "spadkovistrodov") {
      return "судів";
    } else if (caseWord === "roduchmisz") {
      return "судах";
    } else if (caseWord === "matyindividualmaty") {
      return "приймала участь у судах";
    } else if (caseWord === "intelectmisz") {
      return "судах";
    } else if (caseWord === "mislanalitmisz") {
      return "судах";
    } else if (caseWord === "zvazkorudn") {
      return "судами";
    } else if (caseWord === "kontaktnistorudn") {
      return "судами";
    } else if (caseWord === "movaznahid") {
      return "суди";
    } else if (caseWord === "vzaemotochznahid") {
      return "суди";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "суди";
    } else if (caseWord === "pochuttamisz") {
      return "судах";
    } else if (caseWord === "sumpatmisz") {
      return "судах";
    } else if (caseWord === "garmonmisz") {
      return "судах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "суди";
    } else if (caseWord === "obrazkohanznahid") {
      return "суди";
    } else if (caseWord === "seksualnmisz") {
      return "судах";
    } else if (caseWord === "aktivnmisz") {
      return "судах";
    } else if (caseWord === "volyamisz") {
      return "судах";
    } else if (caseWord === "impulsrodov") {
      return "судів";
    } else if (caseWord === "musnmisz") {
      return "судах";
    } else {
      return "";
    }
  } else if (word === "Розлучення") {
    if (caseWord === "rishuchmisz") {
      return "розлученні";
    } else if (caseWord === "agresivmisz") {
      return "розлученні";
    } else if (caseWord === "borotbaorudn") {
      return "розлученням";
    } else if (caseWord === "konkurenzorudn") {
      return "розлученням";
    } else if (caseWord === "neobachnmisz") {
      return "розлученні";
    } else if (caseWord === "obmezenmisz") {
      return "розлученні";
    } else if (caseWord === "stusnenrodov") {
      return "розлучення";
    } else if (caseWord === "zakonymisz") {
      return "розлученні";
    } else if (caseWord === "pravularodov") {
      return "розлучення";
    } else if (caseWord === "konzentratmiszev") {
      return "розлученні";
    } else if (caseWord === "vutrummiszev") {
      return "розлученні";
    } else if (caseWord === "seriozrodov") {
      return "розлучення";
    } else if (caseWord === "skupistmiszev") {
      return "розлученні";
    } else if (caseWord === "zavzatmiszev") {
      return "розлученні";
    } else if (caseWord === "borgorudn") {
      return "розлученням";
    } else if (caseWord === "rozshurenrodov") {
      return "розлучення";
    } else if (caseWord === "ghedristmiszev") {
      return "розлученні";
    } else if (caseWord === "mudristmiszev") {
      return "розлученні";
    } else if (caseWord === "spravedrodov") {
      return "розлучення";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "розлученні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "розлученні";
    } else if (caseWord === "luksbrendznahid") {
      return "розлучення";
    } else if (caseWord === "zakordonomnazyv") {
      return "розлучення";
    } else if (caseWord === "vukladannyarodov") {
      return "розлучення";
    } else if (caseWord === "originalmiszev") {
      return "розлученні";
    } else if (caseWord === "svobodamiszev") {
      return "розлученні";
    } else if (caseWord === "spontanistmiszev") {
      return "розлученні";
    } else if (caseWord === "neochikuvanrodov") {
      return "розлучення";
    } else if (caseWord === "astrologrodov") {
      return "розлучення";
    } else if (caseWord === "vidkruttyarodov") {
      return "розлучення";
    } else if (caseWord === "informattehnologorudn") {
      return "розлученням";
    } else if (caseWord === "fantastikrodov") {
      return "розлучення";
    } else if (caseWord === "kosmosmiszev") {
      return "розлученні";
    } else if (caseWord === "maibutnmiszev") {
      return "розлученні";
    } else if (caseWord === "genialnmiszev") {
      return "розлученні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "розлучення";
    } else if (caseWord === "phantazmiszev") {
      return "розлученні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "розлучення";
    } else if (caseWord === "vighisnyznahid") {
      return "розлучення";
    } else if (caseWord === "nathnennamiszev") {
      return "розлученні";
    } else if (caseWord === "obmanmiszev") {
      return "розлученні";
    } else if (caseWord === "samoobmanmiszev") {
      return "розлученні";
    } else if (caseWord === "zalegnostrodov") {
      return "розлучення";
    } else if (caseWord === "meditacznahid") {
      return "розлучення";
    } else if (caseWord === "transormznahid") {
      return "розлучення";
    } else if (caseWord === "extremsituazorudn") {
      return "розлученням";
    } else if (caseWord === "vuchavolarodov") {
      return "розлучення";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "розлученні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "розлучення";
    } else if (caseWord === "tuskupravlinznahid") {
      return "розлучення";
    } else if (caseWord === "narodgrodov") {
      return "розлучення";
    } else if (caseWord === "orgazmrodov") {
      return "розлучення";
    } else if (caseWord === "magiarodov") {
      return "розлучення";
    } else if (caseWord === "mafiaznahid") {
      return "розлучення";
    } else if (caseWord === "vladaznahid") {
      return "розлучення";
    } else if (caseWord === "manipulorudn") {
      return "розлученням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "розлучення";
    } else if (caseWord === "onkologrodov") {
      return "розлучення";
    } else if (caseWord === "rozorenznahid") {
      return "розлучення";
    } else if (caseWord === "pogransutznahid") {
      return "розлучення";
    } else if (caseWord === "duhmiscev") {
      return "розлученні";
    } else if (caseWord === "silvolimiscev") {
      return "розлученні";
    } else if (caseWord === "dushrodov") {
      return "розлучення";
    } else if (caseWord === "emozrodov") {
      return "розлучення";
    } else if (caseWord === "rodprogramrodov") {
      return "розлучення";
    } else if (caseWord === "sprsvitmisz") {
      return "розлученні";
    } else if (caseWord === "zonacomfmisz") {
      return "розлученні";
    } else if (caseWord === "spadkovistrodov") {
      return "розлучення";
    } else if (caseWord === "roduchmisz") {
      return "розлученні";
    } else if (caseWord === "matyindividualmaty") {
      return "була у розлученні";
    } else if (caseWord === "intelectmisz") {
      return "розлученні";
    } else if (caseWord === "mislanalitmisz") {
      return "розлученні";
    } else if (caseWord === "zvazkorudn") {
      return "розлученням";
    } else if (caseWord === "kontaktnistorudn") {
      return "розлученням";
    } else if (caseWord === "movaznahid") {
      return "розлучення";
    } else if (caseWord === "vzaemotochznahid") {
      return "розлучення";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "розлучення";
    } else if (caseWord === "pochuttamisz") {
      return "розлученні";
    } else if (caseWord === "sumpatmisz") {
      return "розлученні";
    } else if (caseWord === "garmonmisz") {
      return "розлученні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "розлучення";
    } else if (caseWord === "obrazkohanznahid") {
      return "розлучення";
    } else if (caseWord === "seksualnmisz") {
      return "розлученні";
    } else if (caseWord === "aktivnmisz") {
      return "розлученні";
    } else if (caseWord === "volyamisz") {
      return "розлученні";
    } else if (caseWord === "impulsrodov") {
      return "розлучення";
    } else if (caseWord === "musnmisz") {
      return "розлученні";
    } else {
      return "";
    }
  } else if (word === "Переродження") {
    if (caseWord === "rishuchmisz") {
      return "переродженні";
    } else if (caseWord === "agresivmisz") {
      return "переродженні";
    } else if (caseWord === "borotbaorudn") {
      return "переродженням";
    } else if (caseWord === "konkurenzorudn") {
      return "переродженням";
    } else if (caseWord === "neobachnmisz") {
      return "переродженні";
    } else if (caseWord === "obmezenmisz") {
      return "переродженні";
    } else if (caseWord === "stusnenrodov") {
      return "переродження";
    } else if (caseWord === "zakonymisz") {
      return "переродженні";
    } else if (caseWord === "pravularodov") {
      return "переродження";
    } else if (caseWord === "konzentratmiszev") {
      return "переродженні";
    } else if (caseWord === "vutrummiszev") {
      return "переродженні";
    } else if (caseWord === "seriozrodov") {
      return "переродження";
    } else if (caseWord === "skupistmiszev") {
      return "переродженні";
    } else if (caseWord === "zavzatmiszev") {
      return "переродженні";
    } else if (caseWord === "borgorudn") {
      return "переродженням";
    } else if (caseWord === "rozshurenrodov") {
      return "переродження";
    } else if (caseWord === "ghedristmiszev") {
      return "переродженні";
    } else if (caseWord === "mudristmiszev") {
      return "переродженні";
    } else if (caseWord === "spravedrodov") {
      return "переродження";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "переродженні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "переродженні";
    } else if (caseWord === "luksbrendznahid") {
      return "переродження";
    } else if (caseWord === "zakordonomnazyv") {
      return "переродження";
    } else if (caseWord === "vukladannyarodov") {
      return "переродження";
    } else if (caseWord === "originalmiszev") {
      return "переродженні";
    } else if (caseWord === "svobodamiszev") {
      return "переродженні";
    } else if (caseWord === "spontanistmiszev") {
      return "переродженні";
    } else if (caseWord === "neochikuvanrodov") {
      return "переродження";
    } else if (caseWord === "astrologrodov") {
      return "переродження";
    } else if (caseWord === "vidkruttyarodov") {
      return "переродження";
    } else if (caseWord === "informattehnologorudn") {
      return "переродженням";
    } else if (caseWord === "fantastikrodov") {
      return "переродження";
    } else if (caseWord === "kosmosmiszev") {
      return "переродженні";
    } else if (caseWord === "maibutnmiszev") {
      return "переродженні";
    } else if (caseWord === "genialnmiszev") {
      return "переродженні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "переродження";
    } else if (caseWord === "phantazmiszev") {
      return "переродженні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "переродження";
    } else if (caseWord === "vighisnyznahid") {
      return "переродження";
    } else if (caseWord === "nathnennamiszev") {
      return "переродженні";
    } else if (caseWord === "obmanmiszev") {
      return "переродженні";
    } else if (caseWord === "samoobmanmiszev") {
      return "переродженні";
    } else if (caseWord === "zalegnostrodov") {
      return "переродження";
    } else if (caseWord === "meditacznahid") {
      return "переродження";
    } else if (caseWord === "transormznahid") {
      return "переродження";
    } else if (caseWord === "extremsituazorudn") {
      return "переродженням";
    } else if (caseWord === "vuchavolarodov") {
      return "переродження";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "переродженні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "переродження";
    } else if (caseWord === "tuskupravlinznahid") {
      return "переродження";
    } else if (caseWord === "narodgrodov") {
      return "переродження";
    } else if (caseWord === "orgazmrodov") {
      return "переродження";
    } else if (caseWord === "magiarodov") {
      return "переродження";
    } else if (caseWord === "mafiaznahid") {
      return "переродження";
    } else if (caseWord === "vladaznahid") {
      return "переродження";
    } else if (caseWord === "manipulorudn") {
      return "переродженням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "переродження";
    } else if (caseWord === "onkologrodov") {
      return "переродження";
    } else if (caseWord === "rozorenznahid") {
      return "переродження";
    } else if (caseWord === "pogransutznahid") {
      return "переродження";
    } else if (caseWord === "duhmiscev") {
      return "переродженні";
    } else if (caseWord === "silvolimiscev") {
      return "переродженні";
    } else if (caseWord === "dushrodov") {
      return "переродження";
    } else if (caseWord === "emozrodov") {
      return "переродження";
    } else if (caseWord === "rodprogramrodov") {
      return "переродження";
    } else if (caseWord === "sprsvitmisz") {
      return "переродженні";
    } else if (caseWord === "zonacomfmisz") {
      return "переродженні";
    } else if (caseWord === "spadkovistrodov") {
      return "переродження";
    } else if (caseWord === "roduchmisz") {
      return "переродженні";
    } else if (caseWord === "matyindividualmaty") {
      return "мала переродження";
    } else if (caseWord === "intelectmisz") {
      return "переродженні";
    } else if (caseWord === "mislanalitmisz") {
      return "переродженні";
    } else if (caseWord === "zvazkorudn") {
      return "переродженням";
    } else if (caseWord === "kontaktnistorudn") {
      return "переродженням";
    } else if (caseWord === "movaznahid") {
      return "переродження";
    } else if (caseWord === "vzaemotochznahid") {
      return "переродження";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "переродження";
    } else if (caseWord === "pochuttamisz") {
      return "переродженні";
    } else if (caseWord === "sumpatmisz") {
      return "переродженні";
    } else if (caseWord === "garmonmisz") {
      return "переродженні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "переродження";
    } else if (caseWord === "obrazkohanznahid") {
      return "переродження";
    } else if (caseWord === "seksualnmisz") {
      return "переродженні";
    } else if (caseWord === "aktivnmisz") {
      return "переродженні";
    } else if (caseWord === "volyamisz") {
      return "переродженні";
    } else if (caseWord === "impulsrodov") {
      return "переродження";
    } else if (caseWord === "musnmisz") {
      return "переродженні";
    } else {
      return "";
    }
  } else if (word === "Трансформація") {
    if (caseWord === "rishuchmisz") {
      return "трансформації";
    } else if (caseWord === "agresivmisz") {
      return "трансформації";
    } else if (caseWord === "borotbaorudn") {
      return "трансформацією";
    } else if (caseWord === "konkurenzorudn") {
      return "трансформацією";
    } else if (caseWord === "neobachnmisz") {
      return "трансформації";
    } else if (caseWord === "obmezenmisz") {
      return "трансформації";
    } else if (caseWord === "stusnenrodov") {
      return "трансформації";
    } else if (caseWord === "zakonymisz") {
      return "трансформації";
    } else if (caseWord === "pravularodov") {
      return "трансформації";
    } else if (caseWord === "konzentratmiszev") {
      return "трансформації";
    } else if (caseWord === "vutrummiszev") {
      return "трансформації";
    } else if (caseWord === "seriozrodov") {
      return "трансформації";
    } else if (caseWord === "skupistmiszev") {
      return "трансформації";
    } else if (caseWord === "zavzatmiszev") {
      return "трансформації";
    } else if (caseWord === "borgorudn") {
      return "трансформацією";
    } else if (caseWord === "rozshurenrodov") {
      return "трансформації";
    } else if (caseWord === "ghedristmiszev") {
      return "трансформації";
    } else if (caseWord === "mudristmiszev") {
      return "трансформації";
    } else if (caseWord === "spravedrodov") {
      return "трансформації";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "трансформації";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "трансформації";
    } else if (caseWord === "luksbrendznahid") {
      return "трансформацію";
    } else if (caseWord === "zakordonomnazyv") {
      return "трансформація";
    } else if (caseWord === "vukladannyarodov") {
      return "трансформації";
    } else if (caseWord === "originalmiszev") {
      return "трансформації";
    } else if (caseWord === "svobodamiszev") {
      return "трансформації";
    } else if (caseWord === "spontanistmiszev") {
      return "трансформації";
    } else if (caseWord === "neochikuvanrodov") {
      return "трансформації";
    } else if (caseWord === "astrologrodov") {
      return "трансформації";
    } else if (caseWord === "vidkruttyarodov") {
      return "трансформації";
    } else if (caseWord === "informattehnologorudn") {
      return "трансформацією";
    } else if (caseWord === "fantastikrodov") {
      return "трансформації";
    } else if (caseWord === "kosmosmiszev") {
      return "трансформації";
    } else if (caseWord === "maibutnmiszev") {
      return "трансформації";
    } else if (caseWord === "genialnmiszev") {
      return "трансформації";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "трансформацію";
    } else if (caseWord === "phantazmiszev") {
      return "трансформації";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "трансформацію";
    } else if (caseWord === "vighisnyznahid") {
      return "трансформацію";
    } else if (caseWord === "nathnennamiszev") {
      return "трансформації";
    } else if (caseWord === "obmanmiszev") {
      return "трансформації";
    } else if (caseWord === "samoobmanmiszev") {
      return "трансформації";
    } else if (caseWord === "zalegnostrodov") {
      return "трансформації";
    } else if (caseWord === "meditacznahid") {
      return "трансформацію";
    } else if (caseWord === "transormznahid") {
      return "трансформацію";
    } else if (caseWord === "extremsituazorudn") {
      return "трансформацією";
    } else if (caseWord === "vuchavolarodov") {
      return "трансформації";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "трансформації";
    } else if (caseWord === "tuskupravlinznahid") {
      return "трансформацію";
    } else if (caseWord === "tuskupravlinznahid") {
      return "трансформацію";
    } else if (caseWord === "narodgrodov") {
      return "трансформації";
    } else if (caseWord === "orgazmrodov") {
      return "трансформації";
    } else if (caseWord === "magiarodov") {
      return "трансформації";
    } else if (caseWord === "mafiaznahid") {
      return "трансформацію";
    } else if (caseWord === "vladaznahid") {
      return "трансформацію";
    } else if (caseWord === "manipulorudn") {
      return "трансформацією";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "трансформацію";
    } else if (caseWord === "onkologrodov") {
      return "трансформації";
    } else if (caseWord === "rozorenznahid") {
      return "трансформацію";
    } else if (caseWord === "pogransutznahid") {
      return "трансформацію";
    } else if (caseWord === "duhmiscev") {
      return "трансформації";
    } else if (caseWord === "silvolimiscev") {
      return "трансформації";
    } else if (caseWord === "dushrodov") {
      return "трансформації";
    } else if (caseWord === "emozrodov") {
      return "трансформації";
    } else if (caseWord === "rodprogramrodov") {
      return "трансформації";
    } else if (caseWord === "sprsvitmisz") {
      return "трансформації";
    } else if (caseWord === "zonacomfmisz") {
      return "трансформації";
    } else if (caseWord === "spadkovistrodov") {
      return "трансформації";
    } else if (caseWord === "roduchmisz") {
      return "трансформації";
    } else if (caseWord === "matyindividualmaty") {
      return "пережила трансформацію";
    } else if (caseWord === "intelectmisz") {
      return "трансформації";
    } else if (caseWord === "mislanalitmisz") {
      return "трансформації";
    } else if (caseWord === "zvazkorudn") {
      return "трансформацією";
    } else if (caseWord === "kontaktnistorudn") {
      return "трансформацією";
    } else if (caseWord === "movaznahid") {
      return "трансформацію";
    } else if (caseWord === "vzaemotochznahid") {
      return "трансформацію";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "трансформацію";
    } else if (caseWord === "pochuttamisz") {
      return "трансформації";
    } else if (caseWord === "sumpatmisz") {
      return "трансформації";
    } else if (caseWord === "garmonmisz") {
      return "трансформації";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "трансформацію";
    } else if (caseWord === "obrazkohanznahid") {
      return "трансформацію";
    } else if (caseWord === "seksualnmisz") {
      return "трансформації";
    } else if (caseWord === "aktivnmisz") {
      return "трансформації";
    } else if (caseWord === "volyamisz") {
      return "трансформації";
    } else if (caseWord === "impulsrodov") {
      return "трансформації";
    } else if (caseWord === "musnmisz") {
      return "трансформації";
    } else {
      return "";
    }
  } else if (word === "Великі чужі гроші") {
    if (caseWord === "rishuchmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "agresivmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "borotbaorudn") {
      return "великими чужими грошима";
    } else if (caseWord === "konkurenzorudn") {
      return "великими чужими грошима";
    } else if (caseWord === "neobachnmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "obmezenmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "stusnenrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "zakonymisz") {
      return "великих чужих грошах";
    } else if (caseWord === "pravularodov") {
      return "великих чужих грошей";
    } else if (caseWord === "konzentratmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "vutrummiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "seriozrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "skupistmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "zavzatmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "borgorudn") {
      return "великими чужими грошима";
    } else if (caseWord === "rozshurenrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "ghedristmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "mudristmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "spravedrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "luksbrendznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "zakordonomnazyv") {
      return "великі чужі гроші";
    } else if (caseWord === "vukladannyarodov") {
      return "великих чужих грошей";
    } else if (caseWord === "originalmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "svobodamiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "spontanistmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "neochikuvanrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "astrologrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "vidkruttyarodov") {
      return "великих чужих грошей";
    } else if (caseWord === "informattehnologorudn") {
      return "великими чужими грошима";
    } else if (caseWord === "fantastikrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "kosmosmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "maibutnmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "genialnmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "phantazmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "vighisnyznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "nathnennamiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "obmanmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "samoobmanmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "zalegnostrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "meditacznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "transormznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "extremsituazorudn") {
      return "великими чужими грошима";
    } else if (caseWord === "vuchavolarodov") {
      return "великих чужих грошей";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "великих чужих грошах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "tuskupravlinznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "narodgrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "orgazmrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "magiarodov") {
      return "великих чужих грошей";
    } else if (caseWord === "mafiaznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "vladaznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "manipulorudn") {
      return "великими чужими грошима";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "великі чужі гроші";
    } else if (caseWord === "onkologrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "rozorenznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "pogransutznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "duhmiscev") {
      return "великих чужих грошах";
    } else if (caseWord === "silvolimiscev") {
      return "великих чужих грошах";
    } else if (caseWord === "dushrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "emozrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "rodprogramrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "sprsvitmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "zonacomfmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "spadkovistrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "roduchmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "matyindividualmaty") {
      return "мала великі чужі гроші";
    } else if (caseWord === "intelectmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "mislanalitmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "zvazkorudn") {
      return "великими чужими грошима";
    } else if (caseWord === "kontaktnistorudn") {
      return "великими чужими грошима";
    } else if (caseWord === "movaznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "vzaemotochznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "pochuttamisz") {
      return "великих чужих грошах";
    } else if (caseWord === "sumpatmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "garmonmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "obrazkohanznahid") {
      return "великі чужі гроші";
    } else if (caseWord === "seksualnmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "aktivnmisz") {
      return "великих чужих грошах";
    } else if (caseWord === "volyamisz") {
      return "великих чужих грошах";
    } else if (caseWord === "impulsrodov") {
      return "великих чужих грошей";
    } else if (caseWord === "musnmisz") {
      return "великих чужих грошах";
    } else {
      return "";
    }
  } else if (word === "Магія") {
    if (caseWord === "rishuchmisz") {
      return "магії";
    } else if (caseWord === "agresivmisz") {
      return "магії";
    } else if (caseWord === "borotbaorudn") {
      return "магією";
    } else if (caseWord === "konkurenzorudn") {
      return "магією";
    } else if (caseWord === "neobachnmisz") {
      return "магії";
    } else if (caseWord === "obmezenmisz") {
      return "магії";
    } else if (caseWord === "stusnenrodov") {
      return "магії";
    } else if (caseWord === "zakonymisz") {
      return "магії";
    } else if (caseWord === "pravularodov") {
      return "магії";
    } else if (caseWord === "konzentratmiszev") {
      return "магії";
    } else if (caseWord === "vutrummiszev") {
      return "магії";
    } else if (caseWord === "seriozrodov") {
      return "магії";
    } else if (caseWord === "skupistmiszev") {
      return "магії";
    } else if (caseWord === "zavzatmiszev") {
      return "магії";
    } else if (caseWord === "borgorudn") {
      return "магією";
    } else if (caseWord === "rozshurenrodov") {
      return "магії";
    } else if (caseWord === "ghedristmiszev") {
      return "магії";
    } else if (caseWord === "mudristmiszev") {
      return "магії";
    } else if (caseWord === "spravedrodov") {
      return "магії";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "магії";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "магії";
    } else if (caseWord === "luksbrendznahid") {
      return "магію";
    } else if (caseWord === "zakordonomnazyv") {
      return "магія";
    } else if (caseWord === "vukladannyarodov") {
      return "магії";
    } else if (caseWord === "originalmiszev") {
      return "магії";
    } else if (caseWord === "svobodamiszev") {
      return "магії";
    } else if (caseWord === "spontanistmiszev") {
      return "магії";
    } else if (caseWord === "neochikuvanrodov") {
      return "магії";
    } else if (caseWord === "astrologrodov") {
      return "магії";
    } else if (caseWord === "vidkruttyarodov") {
      return "магії";
    } else if (caseWord === "informattehnologorudn") {
      return "магією";
    } else if (caseWord === "fantastikrodov") {
      return "магії";
    } else if (caseWord === "kosmosmiszev") {
      return "магії";
    } else if (caseWord === "maibutnmiszev") {
      return "магії";
    } else if (caseWord === "genialnmiszev") {
      return "магії";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "магію";
    } else if (caseWord === "phantazmiszev") {
      return "магії";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "магію";
    } else if (caseWord === "vighisnyznahid") {
      return "магію";
    } else if (caseWord === "nathnennamiszev") {
      return "магії";
    } else if (caseWord === "obmanmiszev") {
      return "магії";
    } else if (caseWord === "samoobmanmiszev") {
      return "магії";
    } else if (caseWord === "zalegnostrodov") {
      return "магії";
    } else if (caseWord === "meditacznahid") {
      return "магію";
    } else if (caseWord === "transormznahid") {
      return "магію";
    } else if (caseWord === "extremsituazorudn") {
      return "магією";
    } else if (caseWord === "vuchavolarodov") {
      return "магії";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "магії";
    } else if (caseWord === "tuskupravlinznahid") {
      return "магію";
    } else if (caseWord === "tuskupravlinznahid") {
      return "магію";
    } else if (caseWord === "narodgrodov") {
      return "магії";
    } else if (caseWord === "orgazmrodov") {
      return "магії";
    } else if (caseWord === "magiarodov") {
      return "магії";
    } else if (caseWord === "mafiaznahid") {
      return "магію";
    } else if (caseWord === "vladaznahid") {
      return "магію";
    } else if (caseWord === "manipulorudn") {
      return "магією";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "магію";
    } else if (caseWord === "onkologrodov") {
      return "магії";
    } else if (caseWord === "rozorenznahid") {
      return "магію";
    } else if (caseWord === "pogransutznahid") {
      return "магію";
    } else if (caseWord === "duhmiscev") {
      return "магії";
    } else if (caseWord === "silvolimiscev") {
      return "магії";
    } else if (caseWord === "dushrodov") {
      return "магії";
    } else if (caseWord === "emozrodov") {
      return "магії";
    } else if (caseWord === "rodprogramrodov") {
      return "магії";
    } else if (caseWord === "sprsvitmisz") {
      return "магії";
    } else if (caseWord === "zonacomfmisz") {
      return "магії";
    } else if (caseWord === "spadkovistrodov") {
      return "магії";
    } else if (caseWord === "roduchmisz") {
      return "магії";
    } else if (caseWord === "matyindividualmaty") {
      return "володіла магією";
    } else if (caseWord === "intelectmisz") {
      return "магії";
    } else if (caseWord === "mislanalitmisz") {
      return "магії";
    } else if (caseWord === "zvazkorudn") {
      return "магією";
    } else if (caseWord === "kontaktnistorudn") {
      return "магією";
    } else if (caseWord === "movaznahid") {
      return "магію";
    } else if (caseWord === "vzaemotochznahid") {
      return "магію";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "магію";
    } else if (caseWord === "pochuttamisz") {
      return "магії";
    } else if (caseWord === "sumpatmisz") {
      return "магії";
    } else if (caseWord === "garmonmisz") {
      return "магії";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "магію";
    } else if (caseWord === "obrazkohanznahid") {
      return "магію";
    } else if (caseWord === "seksualnmisz") {
      return "магії";
    } else if (caseWord === "aktivnmisz") {
      return "магії";
    } else if (caseWord === "volyamisz") {
      return "магії";
    } else if (caseWord === "impulsrodov") {
      return "магії";
    } else if (caseWord === "musnmisz") {
      return "магії";
    } else {
      return "";
    }
  } else if (word === "Гіпноз") {
    if (caseWord === "rishuchmisz") {
      return "гіпнозі";
    } else if (caseWord === "agresivmisz") {
      return "гіпнозі";
    } else if (caseWord === "borotbaorudn") {
      return "гіпнозом";
    } else if (caseWord === "konkurenzorudn") {
      return "гіпнозом";
    } else if (caseWord === "neobachnmisz") {
      return "гіпнозі";
    } else if (caseWord === "obmezenmisz") {
      return "гіпнозі";
    } else if (caseWord === "stusnenrodov") {
      return "гіпнозу";
    } else if (caseWord === "zakonymisz") {
      return "гіпнозі";
    } else if (caseWord === "pravularodov") {
      return "гіпнозу";
    } else if (caseWord === "konzentratmiszev") {
      return "гіпнозі";
    } else if (caseWord === "vutrummiszev") {
      return "гіпнозі";
    } else if (caseWord === "seriozrodov") {
      return "гіпнозу";
    } else if (caseWord === "skupistmiszev") {
      return "гіпнозі";
    } else if (caseWord === "zavzatmiszev") {
      return "гіпнозі";
    } else if (caseWord === "borgorudn") {
      return "гіпнозом";
    } else if (caseWord === "rozshurenrodov") {
      return "гіпнозу";
    } else if (caseWord === "ghedristmiszev") {
      return "гіпнозі";
    } else if (caseWord === "mudristmiszev") {
      return "гіпнозі";
    } else if (caseWord === "spravedrodov") {
      return "гіпнозу";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "гіпнозі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "гіпнозі";
    } else if (caseWord === "luksbrendznahid") {
      return "гіпноз";
    } else if (caseWord === "zakordonomnazyv") {
      return "гіпноз";
    } else if (caseWord === "vukladannyarodov") {
      return "гіпнозу";
    } else if (caseWord === "originalmiszev") {
      return "гіпнозі";
    } else if (caseWord === "svobodamiszev") {
      return "гіпнозі";
    } else if (caseWord === "spontanistmiszev") {
      return "гіпнозі";
    } else if (caseWord === "neochikuvanrodov") {
      return "гіпнозу";
    } else if (caseWord === "astrologrodov") {
      return "гіпнозу";
    } else if (caseWord === "vidkruttyarodov") {
      return "гіпнозу";
    } else if (caseWord === "informattehnologorudn") {
      return "гіпнозом";
    } else if (caseWord === "fantastikrodov") {
      return "гіпнозу";
    } else if (caseWord === "kosmosmiszev") {
      return "гіпнозі";
    } else if (caseWord === "maibutnmiszev") {
      return "гіпнозі";
    } else if (caseWord === "genialnmiszev") {
      return "гіпнозі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "гіпноз";
    } else if (caseWord === "phantazmiszev") {
      return "гіпнозі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "гіпноз";
    } else if (caseWord === "vighisnyznahid") {
      return "гіпноз";
    } else if (caseWord === "nathnennamiszev") {
      return "гіпнозі";
    } else if (caseWord === "obmanmiszev") {
      return "гіпнозі";
    } else if (caseWord === "samoobmanmiszev") {
      return "гіпнозі";
    } else if (caseWord === "zalegnostrodov") {
      return "гіпнозу";
    } else if (caseWord === "meditacznahid") {
      return "гіпноз";
    } else if (caseWord === "transormznahid") {
      return "гіпноз";
    } else if (caseWord === "extremsituazorudn") {
      return "гіпнозом";
    } else if (caseWord === "vuchavolarodov") {
      return "гіпнозу";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "гіпнозі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "гіпноз";
    } else if (caseWord === "tuskupravlinznahid") {
      return "гіпноз";
    } else if (caseWord === "narodgrodov") {
      return "гіпнозу";
    } else if (caseWord === "orgazmrodov") {
      return "гіпнозу";
    } else if (caseWord === "magiarodov") {
      return "гіпнозу";
    } else if (caseWord === "mafiaznahid") {
      return "гіпноз";
    } else if (caseWord === "vladaznahid") {
      return "гіпноз";
    } else if (caseWord === "manipulorudn") {
      return "гіпнозом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "гіпноз";
    } else if (caseWord === "onkologrodov") {
      return "гіпнозу";
    } else if (caseWord === "rozorenznahid") {
      return "гіпноз";
    } else if (caseWord === "pogransutznahid") {
      return "гіпноз";
    } else if (caseWord === "duhmiscev") {
      return "гіпнозі";
    } else if (caseWord === "silvolimiscev") {
      return "гіпнозі";
    } else if (caseWord === "dushrodov") {
      return "гіпнозу";
    } else if (caseWord === "emozrodov") {
      return "гіпнозу";
    } else if (caseWord === "rodprogramrodov") {
      return "гіпнозу";
    } else if (caseWord === "sprsvitmisz") {
      return "гіпнозі";
    } else if (caseWord === "zonacomfmisz") {
      return "гіпнозі";
    } else if (caseWord === "spadkovistrodov") {
      return "гіпнозу";
    } else if (caseWord === "roduchmisz") {
      return "гіпнозі";
    } else if (caseWord === "matyindividualmaty") {
      return "володіла гіпнозом";
    } else if (caseWord === "intelectmisz") {
      return "гіпнозі";
    } else if (caseWord === "mislanalitmisz") {
      return "гіпнозі";
    } else if (caseWord === "zvazkorudn") {
      return "гіпнозом";
    } else if (caseWord === "kontaktnistorudn") {
      return "гіпнозом";
    } else if (caseWord === "movaznahid") {
      return "гіпноз";
    } else if (caseWord === "vzaemotochznahid") {
      return "гіпноз";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "гіпноз";
    } else if (caseWord === "pochuttamisz") {
      return "гіпнозі";
    } else if (caseWord === "sumpatmisz") {
      return "гіпнозі";
    } else if (caseWord === "garmonmisz") {
      return "гіпнозі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "гіпноз";
    } else if (caseWord === "obrazkohanznahid") {
      return "гіпноз";
    } else if (caseWord === "seksualnmisz") {
      return "гіпнозі";
    } else if (caseWord === "aktivnmisz") {
      return "гіпнозі";
    } else if (caseWord === "volyamisz") {
      return "гіпнозі";
    } else if (caseWord === "impulsrodov") {
      return "гіпнозу";
    } else if (caseWord === "musnmisz") {
      return "гіпнозі";
    } else {
      return "";
    }
  } else if (word === "Секс") {
    if (caseWord === "rishuchmisz") {
      return "сексі";
    } else if (caseWord === "agresivmisz") {
      return "сексі";
    } else if (caseWord === "borotbaorudn") {
      return "сексом";
    } else if (caseWord === "borotbaorudn") {
      return "сексом";
    } else if (caseWord === "konkurenzorudn") {
      return "сексом";
    } else if (caseWord === "konkurenzorudn") {
      return "сексом";
    } else if (caseWord === "neobachnmisz") {
      return "сексі";
    } else if (caseWord === "obmezenmisz") {
      return "сексі";
    } else if (caseWord === "stusnenrodov") {
      return "сексу";
    } else if (caseWord === "zakonymisz") {
      return "сексі";
    } else if (caseWord === "pravularodov") {
      return "сексу";
    } else if (caseWord === "konzentratmiszev") {
      return "сексі";
    } else if (caseWord === "vutrummiszev") {
      return "сексі";
    } else if (caseWord === "seriozrodov") {
      return "сексу";
    } else if (caseWord === "skupistmiszev") {
      return "сексі";
    } else if (caseWord === "zavzatmiszev") {
      return "сексі";
    } else if (caseWord === "borgorudn") {
      return "сексом";
    } else if (caseWord === "borgorudn") {
      return "сексом";
    } else if (caseWord === "rozshurenrodov") {
      return "сексу";
    } else if (caseWord === "ghedristmiszev") {
      return "сексі";
    } else if (caseWord === "mudristmiszev") {
      return "сексі";
    } else if (caseWord === "spravedrodov") {
      return "сексу";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "сексі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "сексі";
    } else if (caseWord === "luksbrendznahid") {
      return "секс";
    } else if (caseWord === "zakordonomnazyv") {
      return "секс";
    } else if (caseWord === "vukladannyarodov") {
      return "сексу";
    } else if (caseWord === "originalmiszev") {
      return "сексі";
    } else if (caseWord === "svobodamiszev") {
      return "сексі";
    } else if (caseWord === "spontanistmiszev") {
      return "сексі";
    } else if (caseWord === "neochikuvanrodov") {
      return "сексу";
    } else if (caseWord === "astrologrodov") {
      return "сексу";
    } else if (caseWord === "vidkruttyarodov") {
      return "сексу";
    } else if (caseWord === "informattehnologorudn") {
      return "сексом";
    } else if (caseWord === "informattehnologorudn") {
      return "сексом";
    } else if (caseWord === "fantastikrodov") {
      return "сексу";
    } else if (caseWord === "kosmosmiszev") {
      return "сексі";
    } else if (caseWord === "maibutnmiszev") {
      return "сексі";
    } else if (caseWord === "genialnmiszev") {
      return "сексі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "секс";
    } else if (caseWord === "phantazmiszev") {
      return "сексі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "секс";
    } else if (caseWord === "vighisnyznahid") {
      return "секс";
    } else if (caseWord === "nathnennamiszev") {
      return "сексі";
    } else if (caseWord === "obmanmiszev") {
      return "сексі";
    } else if (caseWord === "samoobmanmiszev") {
      return "сексі";
    } else if (caseWord === "zalegnostrodov") {
      return "сексу";
    } else if (caseWord === "meditacznahid") {
      return "секс";
    } else if (caseWord === "transormznahid") {
      return "секс";
    } else if (caseWord === "extremsituazorudn") {
      return "сексом";
    } else if (caseWord === "extremsituazorudn") {
      return "сексом";
    } else if (caseWord === "vuchavolarodov") {
      return "сексу";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "сексі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "секс";
    } else if (caseWord === "tuskupravlinznahid") {
      return "секс";
    } else if (caseWord === "narodgrodov") {
      return "сексу";
    } else if (caseWord === "orgazmrodov") {
      return "сексу";
    } else if (caseWord === "magiarodov") {
      return "сексу";
    } else if (caseWord === "mafiaznahid") {
      return "секс";
    } else if (caseWord === "vladaznahid") {
      return "секс";
    } else if (caseWord === "manipulorudn") {
      return "сексом";
    } else if (caseWord === "manipulorudn") {
      return "сексом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "секс";
    } else if (caseWord === "onkologrodov") {
      return "сексу";
    } else if (caseWord === "rozorenznahid") {
      return "секс";
    } else if (caseWord === "pogransutznahid") {
      return "секс";
    } else if (caseWord === "duhmiscev") {
      return "сексі";
    } else if (caseWord === "silvolimiscev") {
      return "сексі";
    } else if (caseWord === "dushrodov") {
      return "сексу";
    } else if (caseWord === "emozrodov") {
      return "сексу";
    } else if (caseWord === "rodprogramrodov") {
      return "сексу";
    } else if (caseWord === "sprsvitmisz") {
      return "сексі";
    } else if (caseWord === "zonacomfmisz") {
      return "сексі";
    } else if (caseWord === "spadkovistrodov") {
      return "сексу";
    } else if (caseWord === "roduchmisz") {
      return "сексі";
    } else if (caseWord === "matyindividualmaty") {
      return "любила секс";
    } else if (caseWord === "intelectmisz") {
      return "сексі";
    } else if (caseWord === "mislanalitmisz") {
      return "сексі";
    } else if (caseWord === "zvazkorudn") {
      return "сексом";
    } else if (caseWord === "zvazkorudn") {
      return "сексом";
    } else if (caseWord === "kontaktnistorudn") {
      return "сексом";
    } else if (caseWord === "kontaktnistorudn") {
      return "сексом";
    } else if (caseWord === "movaznahid") {
      return "секс";
    } else if (caseWord === "vzaemotochznahid") {
      return "секс";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "секс";
    } else if (caseWord === "pochuttamisz") {
      return "сексі";
    } else if (caseWord === "sumpatmisz") {
      return "сексі";
    } else if (caseWord === "garmonmisz") {
      return "сексі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "секс";
    } else if (caseWord === "obrazkohanznahid") {
      return "секс";
    } else if (caseWord === "seksualnmisz") {
      return "сексі";
    } else if (caseWord === "aktivnmisz") {
      return "сексі";
    } else if (caseWord === "volyamisz") {
      return "сексі";
    } else if (caseWord === "impulsrodov") {
      return "сексу";
    } else if (caseWord === "musnmisz") {
      return "сексі";
    } else {
      return "";
    }
  } else if (word === "Народження") {
    if (caseWord === "rishuchmisz") {
      return "народженні";
    } else if (caseWord === "agresivmisz") {
      return "народженні";
    } else if (caseWord === "borotbaorudn") {
      return "народженням";
    } else if (caseWord === "konkurenzorudn") {
      return "народженням";
    } else if (caseWord === "neobachnmisz") {
      return "народженні";
    } else if (caseWord === "obmezenmisz") {
      return "народженні";
    } else if (caseWord === "stusnenrodov") {
      return "народження";
    } else if (caseWord === "zakonymisz") {
      return "народженні";
    } else if (caseWord === "pravularodov") {
      return "народження";
    } else if (caseWord === "konzentratmiszev") {
      return "народженні";
    } else if (caseWord === "vutrummiszev") {
      return "народженні";
    } else if (caseWord === "seriozrodov") {
      return "народження";
    } else if (caseWord === "skupistmiszev") {
      return "народженні";
    } else if (caseWord === "zavzatmiszev") {
      return "народженні";
    } else if (caseWord === "borgorudn") {
      return "народженням";
    } else if (caseWord === "rozshurenrodov") {
      return "народження";
    } else if (caseWord === "ghedristmiszev") {
      return "народженні";
    } else if (caseWord === "mudristmiszev") {
      return "народженні";
    } else if (caseWord === "spravedrodov") {
      return "народження";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "народженні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "народженні";
    } else if (caseWord === "luksbrendznahid") {
      return "народження";
    } else if (caseWord === "zakordonomnazyv") {
      return "народження";
    } else if (caseWord === "vukladannyarodov") {
      return "народження";
    } else if (caseWord === "originalmiszev") {
      return "народженні";
    } else if (caseWord === "svobodamiszev") {
      return "народженні";
    } else if (caseWord === "spontanistmiszev") {
      return "народженні";
    } else if (caseWord === "neochikuvanrodov") {
      return "народження";
    } else if (caseWord === "astrologrodov") {
      return "народження";
    } else if (caseWord === "vidkruttyarodov") {
      return "народження";
    } else if (caseWord === "informattehnologorudn") {
      return "народженням";
    } else if (caseWord === "fantastikrodov") {
      return "народження";
    } else if (caseWord === "kosmosmiszev") {
      return "народженні";
    } else if (caseWord === "maibutnmiszev") {
      return "народженні";
    } else if (caseWord === "genialnmiszev") {
      return "народженні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "народження";
    } else if (caseWord === "phantazmiszev") {
      return "народженні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "народження";
    } else if (caseWord === "vighisnyznahid") {
      return "народження";
    } else if (caseWord === "nathnennamiszev") {
      return "народженні";
    } else if (caseWord === "obmanmiszev") {
      return "народженні";
    } else if (caseWord === "samoobmanmiszev") {
      return "народженні";
    } else if (caseWord === "zalegnostrodov") {
      return "народження";
    } else if (caseWord === "meditacznahid") {
      return "народження";
    } else if (caseWord === "transormznahid") {
      return "народження";
    } else if (caseWord === "extremsituazorudn") {
      return "народженням";
    } else if (caseWord === "vuchavolarodov") {
      return "народження";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "народженні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "народження";
    } else if (caseWord === "tuskupravlinznahid") {
      return "народження";
    } else if (caseWord === "narodgrodov") {
      return "народження";
    } else if (caseWord === "orgazmrodov") {
      return "народження";
    } else if (caseWord === "magiarodov") {
      return "народження";
    } else if (caseWord === "mafiaznahid") {
      return "народження";
    } else if (caseWord === "vladaznahid") {
      return "народження";
    } else if (caseWord === "manipulorudn") {
      return "народженням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "народження";
    } else if (caseWord === "onkologrodov") {
      return "народження";
    } else if (caseWord === "rozorenznahid") {
      return "народження";
    } else if (caseWord === "pogransutznahid") {
      return "народження";
    } else if (caseWord === "duhmiscev") {
      return "народженні";
    } else if (caseWord === "silvolimiscev") {
      return "народженні";
    } else if (caseWord === "dushrodov") {
      return "народження";
    } else if (caseWord === "emozrodov") {
      return "народження";
    } else if (caseWord === "rodprogramrodov") {
      return "народження";
    } else if (caseWord === "sprsvitmisz") {
      return "народженні";
    } else if (caseWord === "zonacomfmisz") {
      return "народженні";
    } else if (caseWord === "spadkovistrodov") {
      return "народження";
    } else if (caseWord === "roduchmisz") {
      return "народженні";
    } else if (caseWord === "matyindividualmaty") {
      return "пережила народження";
    } else if (caseWord === "intelectmisz") {
      return "народженні";
    } else if (caseWord === "mislanalitmisz") {
      return "народженні";
    } else if (caseWord === "zvazkorudn") {
      return "народженням";
    } else if (caseWord === "kontaktnistorudn") {
      return "народженням";
    } else if (caseWord === "movaznahid") {
      return "народження";
    } else if (caseWord === "vzaemotochznahid") {
      return "народження";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "народження";
    } else if (caseWord === "pochuttamisz") {
      return "народженні";
    } else if (caseWord === "sumpatmisz") {
      return "народженні";
    } else if (caseWord === "garmonmisz") {
      return "народженні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "народження";
    } else if (caseWord === "obrazkohanznahid") {
      return "народження";
    } else if (caseWord === "seksualnmisz") {
      return "народженні";
    } else if (caseWord === "aktivnmisz") {
      return "народженні";
    } else if (caseWord === "volyamisz") {
      return "народженні";
    } else if (caseWord === "impulsrodov") {
      return "народження";
    } else if (caseWord === "musnmisz") {
      return "народженні";
    } else {
      return "";
    }
  } else if (word === "Великі проблеми") {
    if (caseWord === "rishuchmisz") {
      return "великих проблемах";
    } else if (caseWord === "agresivmisz") {
      return "великих проблемах";
    } else if (caseWord === "borotbaorudn") {
      return "великими проблемами";
    } else if (caseWord === "konkurenzorudn") {
      return "великими проблемами";
    } else if (caseWord === "neobachnmisz") {
      return "великих проблемах";
    } else if (caseWord === "obmezenmisz") {
      return "великих проблемах";
    } else if (caseWord === "stusnenrodov") {
      return "великих проблем";
    } else if (caseWord === "zakonymisz") {
      return "великих проблемах";
    } else if (caseWord === "pravularodov") {
      return "великих проблем";
    } else if (caseWord === "konzentratmiszev") {
      return "великих проблемах";
    } else if (caseWord === "vutrummiszev") {
      return "великих проблемах";
    } else if (caseWord === "seriozrodov") {
      return "великих проблем";
    } else if (caseWord === "skupistmiszev") {
      return "великих проблемах";
    } else if (caseWord === "zavzatmiszev") {
      return "великих проблемах";
    } else if (caseWord === "borgorudn") {
      return "великими проблемами";
    } else if (caseWord === "rozshurenrodov") {
      return "великих проблем";
    } else if (caseWord === "ghedristmiszev") {
      return "великих проблемах";
    } else if (caseWord === "mudristmiszev") {
      return "великих проблемах";
    } else if (caseWord === "spravedrodov") {
      return "великих проблем";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "великих проблемах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "великих проблемах";
    } else if (caseWord === "luksbrendznahid") {
      return "великі проблеми";
    } else if (caseWord === "zakordonomnazyv") {
      return "великі проблеми";
    } else if (caseWord === "vukladannyarodov") {
      return "великих проблем";
    } else if (caseWord === "originalmiszev") {
      return "великих проблемах";
    } else if (caseWord === "svobodamiszev") {
      return "великих проблемах";
    } else if (caseWord === "spontanistmiszev") {
      return "великих проблемах";
    } else if (caseWord === "neochikuvanrodov") {
      return "великих проблем";
    } else if (caseWord === "astrologrodov") {
      return "великих проблем";
    } else if (caseWord === "vidkruttyarodov") {
      return "великих проблем";
    } else if (caseWord === "informattehnologorudn") {
      return "великими проблемами";
    } else if (caseWord === "fantastikrodov") {
      return "великих проблем";
    } else if (caseWord === "kosmosmiszev") {
      return "великих проблемах";
    } else if (caseWord === "maibutnmiszev") {
      return "великих проблемах";
    } else if (caseWord === "genialnmiszev") {
      return "великих проблемах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "великі проблеми";
    } else if (caseWord === "phantazmiszev") {
      return "великих проблемах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "великі проблеми";
    } else if (caseWord === "vighisnyznahid") {
      return "великі проблеми";
    } else if (caseWord === "nathnennamiszev") {
      return "великих проблемах";
    } else if (caseWord === "obmanmiszev") {
      return "великих проблемах";
    } else if (caseWord === "samoobmanmiszev") {
      return "великих проблемах";
    } else if (caseWord === "zalegnostrodov") {
      return "великих проблем";
    } else if (caseWord === "meditacznahid") {
      return "великі проблеми";
    } else if (caseWord === "transormznahid") {
      return "великі проблеми";
    } else if (caseWord === "extremsituazorudn") {
      return "великими проблемами";
    } else if (caseWord === "vuchavolarodov") {
      return "великих проблем";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "великих проблемах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "великі проблеми";
    } else if (caseWord === "tuskupravlinznahid") {
      return "великі проблеми";
    } else if (caseWord === "narodgrodov") {
      return "великих проблем";
    } else if (caseWord === "orgazmrodov") {
      return "великих проблем";
    } else if (caseWord === "magiarodov") {
      return "великих проблем";
    } else if (caseWord === "mafiaznahid") {
      return "великі проблеми";
    } else if (caseWord === "vladaznahid") {
      return "великі проблеми";
    } else if (caseWord === "manipulorudn") {
      return "великими проблемами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "великі проблеми";
    } else if (caseWord === "onkologrodov") {
      return "великих проблем";
    } else if (caseWord === "rozorenznahid") {
      return "великі проблеми";
    } else if (caseWord === "pogransutznahid") {
      return "великі проблеми";
    } else if (caseWord === "duhmiscev") {
      return "великих проблемах";
    } else if (caseWord === "silvolimiscev") {
      return "великих проблемах";
    } else if (caseWord === "dushrodov") {
      return "великих проблем";
    } else if (caseWord === "emozrodov") {
      return "великих проблем";
    } else if (caseWord === "rodprogramrodov") {
      return "великих проблем";
    } else if (caseWord === "sprsvitmisz") {
      return "великих проблемах";
    } else if (caseWord === "zonacomfmisz") {
      return "великих проблемах";
    } else if (caseWord === "spadkovistrodov") {
      return "великих проблем";
    } else if (caseWord === "roduchmisz") {
      return "великих проблемах";
    } else if (caseWord === "matyindividualmaty") {
      return "мала великі проблеми";
    } else if (caseWord === "intelectmisz") {
      return "великих проблемах";
    } else if (caseWord === "mislanalitmisz") {
      return "великих проблемах";
    } else if (caseWord === "zvazkorudn") {
      return "великими проблемами";
    } else if (caseWord === "kontaktnistorudn") {
      return "великими проблемами";
    } else if (caseWord === "movaznahid") {
      return "великі проблеми";
    } else if (caseWord === "vzaemotochznahid") {
      return "великі проблеми";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "великі проблеми";
    } else if (caseWord === "pochuttamisz") {
      return "великих проблемах";
    } else if (caseWord === "sumpatmisz") {
      return "великих проблемах";
    } else if (caseWord === "garmonmisz") {
      return "великих проблемах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "великі проблеми";
    } else if (caseWord === "obrazkohanznahid") {
      return "великі проблеми";
    } else if (caseWord === "seksualnmisz") {
      return "великих проблемах";
    } else if (caseWord === "aktivnmisz") {
      return "великих проблемах";
    } else if (caseWord === "volyamisz") {
      return "великих проблемах";
    } else if (caseWord === "impulsrodov") {
      return "великих проблем";
    } else if (caseWord === "musnmisz") {
      return "великих проблемах";
    } else {
      return "";
    }
  } else if (word === "Кризи та ризики") {
    if (caseWord === "rishuchmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "agresivmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "borotbaorudn") {
      return "кризами та ризиками";
    } else if (caseWord === "konkurenzorudn") {
      return "кризами та ризиками";
    } else if (caseWord === "neobachnmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "obmezenmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "stusnenrodov") {
      return "криз та ризиків";
    } else if (caseWord === "zakonymisz") {
      return "кризах та ризиках";
    } else if (caseWord === "pravularodov") {
      return "криз та ризиків";
    } else if (caseWord === "konzentratmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "vutrummiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "seriozrodov") {
      return "криз та ризиків";
    } else if (caseWord === "skupistmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "zavzatmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "borgorudn") {
      return "кризами та ризиками";
    } else if (caseWord === "rozshurenrodov") {
      return "криз та ризиків";
    } else if (caseWord === "ghedristmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "mudristmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "spravedrodov") {
      return "криз та ризиків";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "luksbrendznahid") {
      return "кризи та ризики";
    } else if (caseWord === "zakordonomnazyv") {
      return "кризи та ризики";
    } else if (caseWord === "vukladannyarodov") {
      return "криз та ризиків";
    } else if (caseWord === "originalmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "svobodamiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "spontanistmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "neochikuvanrodov") {
      return "криз та ризиків";
    } else if (caseWord === "astrologrodov") {
      return "криз та ризиків";
    } else if (caseWord === "vidkruttyarodov") {
      return "криз та ризиків";
    } else if (caseWord === "informattehnologorudn") {
      return "кризами та ризиками";
    } else if (caseWord === "fantastikrodov") {
      return "криз та ризиків";
    } else if (caseWord === "kosmosmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "maibutnmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "genialnmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "кризи та ризики";
    } else if (caseWord === "phantazmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "кризи та ризики";
    } else if (caseWord === "vighisnyznahid") {
      return "кризи та ризики";
    } else if (caseWord === "nathnennamiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "obmanmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "samoobmanmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "zalegnostrodov") {
      return "криз та ризиків";
    } else if (caseWord === "meditacznahid") {
      return "кризи та ризики";
    } else if (caseWord === "transormznahid") {
      return "кризи та ризики";
    } else if (caseWord === "extremsituazorudn") {
      return "кризами та ризиками";
    } else if (caseWord === "vuchavolarodov") {
      return "криз та ризиків";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "кризах та ризиках";
    } else if (caseWord === "tuskupravlinznahid") {
      return "кризи та ризики";
    } else if (caseWord === "tuskupravlinznahid") {
      return "кризи та ризики";
    } else if (caseWord === "narodgrodov") {
      return "криз та ризиків";
    } else if (caseWord === "orgazmrodov") {
      return "криз та ризиків";
    } else if (caseWord === "magiarodov") {
      return "криз та ризиків";
    } else if (caseWord === "mafiaznahid") {
      return "кризи та ризики";
    } else if (caseWord === "vladaznahid") {
      return "кризи та ризики";
    } else if (caseWord === "manipulorudn") {
      return "кризами та ризиками";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "кризи та ризики";
    } else if (caseWord === "onkologrodov") {
      return "криз та ризиків";
    } else if (caseWord === "rozorenznahid") {
      return "кризи та ризики";
    } else if (caseWord === "pogransutznahid") {
      return "кризи та ризики";
    } else if (caseWord === "duhmiscev") {
      return "кризах та ризиках";
    } else if (caseWord === "silvolimiscev") {
      return "кризах та ризиках";
    } else if (caseWord === "dushrodov") {
      return "криз та ризиків";
    } else if (caseWord === "emozrodov") {
      return "криз та ризиків";
    } else if (caseWord === "rodprogramrodov") {
      return "криз та ризиків";
    } else if (caseWord === "sprsvitmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "zonacomfmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "spadkovistrodov") {
      return "криз та ризиків";
    } else if (caseWord === "roduchmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "matyindividualmaty") {
      return "мала кризи та ризики";
    } else if (caseWord === "intelectmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "mislanalitmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "zvazkorudn") {
      return "кризами та ризиками";
    } else if (caseWord === "kontaktnistorudn") {
      return "кризами та ризиками";
    } else if (caseWord === "movaznahid") {
      return "кризи та ризики";
    } else if (caseWord === "vzaemotochznahid") {
      return "кризи та ризики";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "кризи та ризики";
    } else if (caseWord === "pochuttamisz") {
      return "кризах та ризиках";
    } else if (caseWord === "sumpatmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "garmonmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "кризи та ризики";
    } else if (caseWord === "obrazkohanznahid") {
      return "кризи та ризики";
    } else if (caseWord === "seksualnmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "aktivnmisz") {
      return "кризах та ризиках";
    } else if (caseWord === "volyamisz") {
      return "кризах та ризиках";
    } else if (caseWord === "impulsrodov") {
      return "криз та ризиків";
    } else if (caseWord === "musnmisz") {
      return "кризах та ризиках";
    } else {
      return "";
    }
  } else if (word === "Закордон") {
    if (caseWord === "rishuchmisz") {
      return "закордоні";
    } else if (caseWord === "agresivmisz") {
      return "закордоні";
    } else if (caseWord === "borotbaorudn") {
      return "закордоном";
    } else if (caseWord === "konkurenzorudn") {
      return "закордоном";
    } else if (caseWord === "neobachnmisz") {
      return "закордоні";
    } else if (caseWord === "obmezenmisz") {
      return "закордоні";
    } else if (caseWord === "stusnenrodov") {
      return "закордону";
    } else if (caseWord === "zakonymisz") {
      return "закордоні";
    } else if (caseWord === "pravularodov") {
      return "закордону";
    } else if (caseWord === "konzentratmiszev") {
      return "закордоні";
    } else if (caseWord === "vutrummiszev") {
      return "закордоні";
    } else if (caseWord === "seriozrodov") {
      return "закордону";
    } else if (caseWord === "skupistmiszev") {
      return "закордоні";
    } else if (caseWord === "zavzatmiszev") {
      return "закордоні";
    } else if (caseWord === "borgorudn") {
      return "закордоном";
    } else if (caseWord === "rozshurenrodov") {
      return "закордону";
    } else if (caseWord === "ghedristmiszev") {
      return "закордоні";
    } else if (caseWord === "mudristmiszev") {
      return "закордоні";
    } else if (caseWord === "spravedrodov") {
      return "закордону";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "закордоні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "закордоні";
    } else if (caseWord === "luksbrendznahid") {
      return "закордон";
    } else if (caseWord === "zakordonomnazyv") {
      return "закордон";
    } else if (caseWord === "vukladannyarodov") {
      return "закордону";
    } else if (caseWord === "originalmiszev") {
      return "закордоні";
    } else if (caseWord === "svobodamiszev") {
      return "закордоні";
    } else if (caseWord === "spontanistmiszev") {
      return "закордоні";
    } else if (caseWord === "neochikuvanrodov") {
      return "закордону";
    } else if (caseWord === "astrologrodov") {
      return "закордону";
    } else if (caseWord === "vidkruttyarodov") {
      return "закордону";
    } else if (caseWord === "informattehnologorudn") {
      return "закордоном";
    } else if (caseWord === "fantastikrodov") {
      return "закордону";
    } else if (caseWord === "kosmosmiszev") {
      return "закордоні";
    } else if (caseWord === "maibutnmiszev") {
      return "закордоні";
    } else if (caseWord === "genialnmiszev") {
      return "закордоні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "закордон";
    } else if (caseWord === "phantazmiszev") {
      return "закордоні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "закордон";
    } else if (caseWord === "vighisnyznahid") {
      return "закордон";
    } else if (caseWord === "nathnennamiszev") {
      return "закордоні";
    } else if (caseWord === "obmanmiszev") {
      return "закордоні";
    } else if (caseWord === "samoobmanmiszev") {
      return "закордоні";
    } else if (caseWord === "zalegnostrodov") {
      return "закордону";
    } else if (caseWord === "meditacznahid") {
      return "закордон";
    } else if (caseWord === "transormznahid") {
      return "закордон";
    } else if (caseWord === "extremsituazorudn") {
      return "закордоном";
    } else if (caseWord === "vuchavolarodov") {
      return "закордону";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "закордоні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "закордон";
    } else if (caseWord === "tuskupravlinznahid") {
      return "закордон";
    } else if (caseWord === "narodgrodov") {
      return "закордону";
    } else if (caseWord === "orgazmrodov") {
      return "закордону";
    } else if (caseWord === "magiarodov") {
      return "закордону";
    } else if (caseWord === "mafiaznahid") {
      return "закордон";
    } else if (caseWord === "vladaznahid") {
      return "закордон";
    } else if (caseWord === "manipulorudn") {
      return "закордоном";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "закордон";
    } else if (caseWord === "onkologrodov") {
      return "закордону";
    } else if (caseWord === "rozorenznahid") {
      return "закордон";
    } else if (caseWord === "pogransutznahid") {
      return "закордон";
    } else if (caseWord === "duhmiscev") {
      return "закордоні";
    } else if (caseWord === "silvolimiscev") {
      return "закордоні";
    } else if (caseWord === "dushrodov") {
      return "закордону";
    } else if (caseWord === "emozrodov") {
      return "закордону";
    } else if (caseWord === "rodprogramrodov") {
      return "закордону";
    } else if (caseWord === "sprsvitmisz") {
      return "закордоні";
    } else if (caseWord === "zonacomfmisz") {
      return "закордоні";
    } else if (caseWord === "spadkovistrodov") {
      return "закордону";
    } else if (caseWord === "roduchmisz") {
      return "закордоні";
    } else if (caseWord === "matyindividualmaty") {
      return "була закордоном";
    } else if (caseWord === "intelectmisz") {
      return "закордоні";
    } else if (caseWord === "mislanalitmisz") {
      return "закордоні";
    } else if (caseWord === "zvazkorudn") {
      return "закордоном";
    } else if (caseWord === "kontaktnistorudn") {
      return "закордоном";
    } else if (caseWord === "movaznahid") {
      return "закордон";
    } else if (caseWord === "vzaemotochznahid") {
      return "закордон";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "закордон";
    } else if (caseWord === "pochuttamisz") {
      return "закордоні";
    } else if (caseWord === "sumpatmisz") {
      return "закордоні";
    } else if (caseWord === "garmonmisz") {
      return "закордоні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "закордон";
    } else if (caseWord === "obrazkohanznahid") {
      return "закордон";
    } else if (caseWord === "seksualnmisz") {
      return "закордоні";
    } else if (caseWord === "aktivnmisz") {
      return "закордоні";
    } else if (caseWord === "volyamisz") {
      return "закордоні";
    } else if (caseWord === "impulsrodov") {
      return "закордону";
    } else if (caseWord === "musnmisz") {
      return "закордоні";
    } else {
      return "";
    }
  } else if (word === "Неформальна влада") {
    if (caseWord === "rishuchmisz") {
      return "неформальній владі";
    } else if (caseWord === "agresivmisz") {
      return "неформальній владі";
    } else if (caseWord === "borotbaorudn") {
      return "неформальною владою";
    } else if (caseWord === "konkurenzorudn") {
      return "неформальною владою";
    } else if (caseWord === "neobachnmisz") {
      return "неформальній владі";
    } else if (caseWord === "obmezenmisz") {
      return "неформальній владі";
    } else if (caseWord === "stusnenrodov") {
      return "неформальної влади";
    } else if (caseWord === "zakonymisz") {
      return "неформальній владі";
    } else if (caseWord === "pravularodov") {
      return "неформальної влади";
    } else if (caseWord === "konzentratmiszev") {
      return "неформальній владі";
    } else if (caseWord === "vutrummiszev") {
      return "неформальній владі";
    } else if (caseWord === "seriozrodov") {
      return "неформальної влади";
    } else if (caseWord === "skupistmiszev") {
      return "неформальній владі";
    } else if (caseWord === "zavzatmiszev") {
      return "неформальній владі";
    } else if (caseWord === "borgorudn") {
      return "неформальною владою";
    } else if (caseWord === "rozshurenrodov") {
      return "неформальної влади";
    } else if (caseWord === "ghedristmiszev") {
      return "неформальній владі";
    } else if (caseWord === "mudristmiszev") {
      return "неформальній владі";
    } else if (caseWord === "spravedrodov") {
      return "неформальної влади";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "неформальній владі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "неформальній владі";
    } else if (caseWord === "luksbrendznahid") {
      return "неформальну владу";
    } else if (caseWord === "zakordonomnazyv") {
      return "неформальна влада";
    } else if (caseWord === "vukladannyarodov") {
      return "неформальної влади";
    } else if (caseWord === "originalmiszev") {
      return "неформальній владі";
    } else if (caseWord === "svobodamiszev") {
      return "неформальній владі";
    } else if (caseWord === "spontanistmiszev") {
      return "неформальній владі";
    } else if (caseWord === "neochikuvanrodov") {
      return "неформальної влади";
    } else if (caseWord === "astrologrodov") {
      return "неформальної влади";
    } else if (caseWord === "vidkruttyarodov") {
      return "неформальної влади";
    } else if (caseWord === "informattehnologorudn") {
      return "неформальною владою";
    } else if (caseWord === "fantastikrodov") {
      return "неформальної влади";
    } else if (caseWord === "kosmosmiszev") {
      return "неформальній владі";
    } else if (caseWord === "maibutnmiszev") {
      return "неформальній владі";
    } else if (caseWord === "genialnmiszev") {
      return "неформальній владі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "неформальну владу";
    } else if (caseWord === "phantazmiszev") {
      return "неформальній владі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "неформальну владу";
    } else if (caseWord === "vighisnyznahid") {
      return "неформальну владу";
    } else if (caseWord === "nathnennamiszev") {
      return "неформальній владі";
    } else if (caseWord === "obmanmiszev") {
      return "неформальній владі";
    } else if (caseWord === "samoobmanmiszev") {
      return "неформальній владі";
    } else if (caseWord === "zalegnostrodov") {
      return "неформальної влади";
    } else if (caseWord === "meditacznahid") {
      return "неформальну владу";
    } else if (caseWord === "transormznahid") {
      return "неформальну владу";
    } else if (caseWord === "extremsituazorudn") {
      return "неформальною владою";
    } else if (caseWord === "vuchavolarodov") {
      return "неформальної влади";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "неформальній владі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "неформальну владу";
    } else if (caseWord === "tuskupravlinznahid") {
      return "неформальну владу";
    } else if (caseWord === "narodgrodov") {
      return "неформальної влади";
    } else if (caseWord === "orgazmrodov") {
      return "неформальної влади";
    } else if (caseWord === "magiarodov") {
      return "неформальної влади";
    } else if (caseWord === "mafiaznahid") {
      return "неформальну владу";
    } else if (caseWord === "vladaznahid") {
      return "неформальну владу";
    } else if (caseWord === "manipulorudn") {
      return "неформальною владою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "неформальну владу";
    } else if (caseWord === "onkologrodov") {
      return "неформальної влади";
    } else if (caseWord === "rozorenznahid") {
      return "неформальну владу";
    } else if (caseWord === "pogransutznahid") {
      return "неформальну владу";
    } else if (caseWord === "duhmiscev") {
      return "неформальній владі";
    } else if (caseWord === "silvolimiscev") {
      return "неформальній владі";
    } else if (caseWord === "dushrodov") {
      return "неформальної влади";
    } else if (caseWord === "emozrodov") {
      return "неформальної влади";
    } else if (caseWord === "rodprogramrodov") {
      return "неформальної влади";
    } else if (caseWord === "sprsvitmisz") {
      return "неформальній владі";
    } else if (caseWord === "zonacomfmisz") {
      return "неформальній владі";
    } else if (caseWord === "spadkovistrodov") {
      return "неформальної влади";
    } else if (caseWord === "roduchmisz") {
      return "неформальній владі";
    } else if (caseWord === "matyindividualmaty") {
      return "мала неформальну владу";
    } else if (caseWord === "intelectmisz") {
      return "неформальній владі";
    } else if (caseWord === "mislanalitmisz") {
      return "неформальній владі";
    } else if (caseWord === "zvazkorudn") {
      return "неформальною владою";
    } else if (caseWord === "kontaktnistorudn") {
      return "неформальною владою";
    } else if (caseWord === "movaznahid") {
      return "неформальну владу";
    } else if (caseWord === "vzaemotochznahid") {
      return "неформальну владу";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "неформальну владу";
    } else if (caseWord === "pochuttamisz") {
      return "неформальній владі";
    } else if (caseWord === "sumpatmisz") {
      return "неформальній владі";
    } else if (caseWord === "garmonmisz") {
      return "неформальній владі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "неформальну владу";
    } else if (caseWord === "obrazkohanznahid") {
      return "неформальну владу";
    } else if (caseWord === "seksualnmisz") {
      return "неформальній владі";
    } else if (caseWord === "aktivnmisz") {
      return "неформальній владі";
    } else if (caseWord === "volyamisz") {
      return "неформальній владі";
    } else if (caseWord === "impulsrodov") {
      return "неформальної влади";
    } else if (caseWord === "musnmisz") {
      return "неформальній владі";
    } else {
      return "";
    }
  } else if (word === "Духовний розвиток") {
    if (caseWord === "rishuchmisz") {
      return "духовному розвитку";
    } else if (caseWord === "rishuchmisz") {
      return "духовному розвитку";
    } else if (caseWord === "agresivmisz") {
      return "духовному розвитку";
    } else if (caseWord === "agresivmisz") {
      return "духовному розвитку";
    } else if (caseWord === "borotbaorudn") {
      return "духовним розвитком";
    } else if (caseWord === "borotbaorudn") {
      return "духовним розвитком";
    } else if (caseWord === "konkurenzorudn") {
      return "духовним розвитком";
    } else if (caseWord === "konkurenzorudn") {
      return "духовним розвитком";
    } else if (caseWord === "neobachnmisz") {
      return "духовному розвитку";
    } else if (caseWord === "neobachnmisz") {
      return "духовному розвитку";
    } else if (caseWord === "obmezenmisz") {
      return "духовному розвитку";
    } else if (caseWord === "obmezenmisz") {
      return "духовному розвитку";
    } else if (caseWord === "stusnenrodov") {
      return "духовного розвитку";
    } else if (caseWord === "stusnenrodov") {
      return "духовного розвитку";
    } else if (caseWord === "zakonymisz") {
      return "духовному розвитку";
    } else if (caseWord === "zakonymisz") {
      return "духовному розвитку";
    } else if (caseWord === "pravularodov") {
      return "духовного розвитку";
    } else if (caseWord === "pravularodov") {
      return "духовного розвитку";
    } else if (caseWord === "konzentratmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "konzentratmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "vutrummiszev") {
      return "духовному розвитку";
    } else if (caseWord === "vutrummiszev") {
      return "духовному розвитку";
    } else if (caseWord === "seriozrodov") {
      return "духовного розвитку";
    } else if (caseWord === "seriozrodov") {
      return "духовного розвитку";
    } else if (caseWord === "skupistmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "skupistmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "zavzatmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "zavzatmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "borgorudn") {
      return "духовним розвитком";
    } else if (caseWord === "borgorudn") {
      return "духовним розвитком";
    } else if (caseWord === "rozshurenrodov") {
      return "духовного розвитку";
    } else if (caseWord === "rozshurenrodov") {
      return "духовного розвитку";
    } else if (caseWord === "ghedristmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "ghedristmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "mudristmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "mudristmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "spravedrodov") {
      return "духовного розвитку";
    } else if (caseWord === "spravedrodov") {
      return "духовного розвитку";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "духовному розвитку";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "духовному розвитку";
    } else if (caseWord === "luksbrendznahid") {
      return "духовний розвиток";
    } else if (caseWord === "luksbrendznahid") {
      return "духовний розвиток";
    } else if (caseWord === "zakordonomnazyv") {
      return "духовний розвиток";
    } else if (caseWord === "zakordonomnazyv") {
      return "духовний розвиток";
    } else if (caseWord === "vukladannyarodov") {
      return "духовного розвитку";
    } else if (caseWord === "vukladannyarodov") {
      return "духовного розвитку";
    } else if (caseWord === "originalmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "originalmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "svobodamiszev") {
      return "духовному розвитку";
    } else if (caseWord === "svobodamiszev") {
      return "духовному розвитку";
    } else if (caseWord === "spontanistmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "spontanistmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "neochikuvanrodov") {
      return "духовного розвитку";
    } else if (caseWord === "neochikuvanrodov") {
      return "духовного розвитку";
    } else if (caseWord === "astrologrodov") {
      return "духовного розвитку";
    } else if (caseWord === "astrologrodov") {
      return "духовного розвитку";
    } else if (caseWord === "vidkruttyarodov") {
      return "духовного розвитку";
    } else if (caseWord === "vidkruttyarodov") {
      return "духовного розвитку";
    } else if (caseWord === "informattehnologorudn") {
      return "духовним розвитком";
    } else if (caseWord === "informattehnologorudn") {
      return "духовним розвитком";
    } else if (caseWord === "fantastikrodov") {
      return "духовного розвитку";
    } else if (caseWord === "fantastikrodov") {
      return "духовного розвитку";
    } else if (caseWord === "kosmosmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "kosmosmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "maibutnmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "maibutnmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "genialnmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "genialnmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "духовний розвиток";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "духовний розвиток";
    } else if (caseWord === "phantazmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "phantazmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "духовний розвиток";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "духовний розвиток";
    } else if (caseWord === "vighisnyznahid") {
      return "духовний розвиток";
    } else if (caseWord === "vighisnyznahid") {
      return "духовний розвиток";
    } else if (caseWord === "nathnennamiszev") {
      return "духовному розвитку";
    } else if (caseWord === "nathnennamiszev") {
      return "духовному розвитку";
    } else if (caseWord === "obmanmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "obmanmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "samoobmanmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "samoobmanmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "zalegnostrodov") {
      return "духовного розвитку";
    } else if (caseWord === "zalegnostrodov") {
      return "духовного розвитку";
    } else if (caseWord === "meditacznahid") {
      return "духовний розвиток";
    } else if (caseWord === "meditacznahid") {
      return "духовний розвиток";
    } else if (caseWord === "transormznahid") {
      return "духовний розвиток";
    } else if (caseWord === "transormznahid") {
      return "духовний розвиток";
    } else if (caseWord === "extremsituazorudn") {
      return "духовним розвитком";
    } else if (caseWord === "extremsituazorudn") {
      return "духовним розвитком";
    } else if (caseWord === "vuchavolarodov") {
      return "духовного розвитку";
    } else if (caseWord === "vuchavolarodov") {
      return "духовного розвитку";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "духовному розвитку";
    } else if (caseWord === "tuskupravlinznahid") {
      return "духовний розвиток";
    } else if (caseWord === "tuskupravlinznahid") {
      return "духовний розвиток";
    } else if (caseWord === "tuskupravlinznahid") {
      return "духовний розвиток";
    } else if (caseWord === "tuskupravlinznahid") {
      return "духовний розвиток";
    } else if (caseWord === "narodgrodov") {
      return "духовного розвитку";
    } else if (caseWord === "narodgrodov") {
      return "духовного розвитку";
    } else if (caseWord === "orgazmrodov") {
      return "духовного розвитку";
    } else if (caseWord === "orgazmrodov") {
      return "духовного розвитку";
    } else if (caseWord === "magiarodov") {
      return "духовного розвитку";
    } else if (caseWord === "magiarodov") {
      return "духовного розвитку";
    } else if (caseWord === "mafiaznahid") {
      return "духовний розвиток";
    } else if (caseWord === "mafiaznahid") {
      return "духовний розвиток";
    } else if (caseWord === "vladaznahid") {
      return "духовний розвиток";
    } else if (caseWord === "vladaznahid") {
      return "духовний розвиток";
    } else if (caseWord === "manipulorudn") {
      return "духовним розвитком";
    } else if (caseWord === "manipulorudn") {
      return "духовним розвитком";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "духовний розвиток";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "духовний розвиток";
    } else if (caseWord === "onkologrodov") {
      return "духовного розвитку";
    } else if (caseWord === "onkologrodov") {
      return "духовного розвитку";
    } else if (caseWord === "rozorenznahid") {
      return "духовний розвиток";
    } else if (caseWord === "rozorenznahid") {
      return "духовний розвиток";
    } else if (caseWord === "pogransutznahid") {
      return "духовний розвиток";
    } else if (caseWord === "pogransutznahid") {
      return "духовний розвиток";
    } else if (caseWord === "duhmiscev") {
      return "духовному розвитку";
    } else if (caseWord === "duhmiscev") {
      return "духовному розвитку";
    } else if (caseWord === "silvolimiscev") {
      return "духовному розвитку";
    } else if (caseWord === "silvolimiscev") {
      return "духовному розвитку";
    } else if (caseWord === "dushrodov") {
      return "духовного розвитку";
    } else if (caseWord === "dushrodov") {
      return "духовного розвитку";
    } else if (caseWord === "emozrodov") {
      return "духовного розвитку";
    } else if (caseWord === "emozrodov") {
      return "духовного розвитку";
    } else if (caseWord === "rodprogramrodov") {
      return "духовного розвитку";
    } else if (caseWord === "rodprogramrodov") {
      return "духовного розвитку";
    } else if (caseWord === "sprsvitmisz") {
      return "духовному розвитку";
    } else if (caseWord === "sprsvitmisz") {
      return "духовному розвитку";
    } else if (caseWord === "zonacomfmisz") {
      return "духовному розвитку";
    } else if (caseWord === "zonacomfmisz") {
      return "духовному розвитку";
    } else if (caseWord === "spadkovistrodov") {
      return "духовного розвитку";
    } else if (caseWord === "spadkovistrodov") {
      return "духовного розвитку";
    } else if (caseWord === "roduchmisz") {
      return "духовному розвитку";
    } else if (caseWord === "roduchmisz") {
      return "духовному розвитку";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась духовним розвитком";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась духовним розвитком";
    } else if (caseWord === "intelectmisz") {
      return "духовному розвитку";
    } else if (caseWord === "intelectmisz") {
      return "духовному розвитку";
    } else if (caseWord === "mislanalitmisz") {
      return "духовному розвитку";
    } else if (caseWord === "mislanalitmisz") {
      return "духовному розвитку";
    } else if (caseWord === "zvazkorudn") {
      return "духовним розвитком";
    } else if (caseWord === "zvazkorudn") {
      return "духовним розвитком";
    } else if (caseWord === "kontaktnistorudn") {
      return "духовним розвитком";
    } else if (caseWord === "kontaktnistorudn") {
      return "духовним розвитком";
    } else if (caseWord === "movaznahid") {
      return "духовний розвиток";
    } else if (caseWord === "movaznahid") {
      return "духовний розвиток";
    } else if (caseWord === "vzaemotochznahid") {
      return "духовний розвиток";
    } else if (caseWord === "vzaemotochznahid") {
      return "духовний розвиток";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "духовний розвиток";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "духовний розвиток";
    } else if (caseWord === "pochuttamisz") {
      return "духовному розвитку";
    } else if (caseWord === "pochuttamisz") {
      return "духовному розвитку";
    } else if (caseWord === "sumpatmisz") {
      return "духовному розвитку";
    } else if (caseWord === "sumpatmisz") {
      return "духовному розвитку";
    } else if (caseWord === "garmonmisz") {
      return "духовному розвитку";
    } else if (caseWord === "garmonmisz") {
      return "духовному розвитку";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "духовний розвиток";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "духовний розвиток";
    } else if (caseWord === "obrazkohanznahid") {
      return "духовний розвиток";
    } else if (caseWord === "obrazkohanznahid") {
      return "духовний розвиток";
    } else if (caseWord === "seksualnmisz") {
      return "духовному розвитку";
    } else if (caseWord === "seksualnmisz") {
      return "духовному розвитку";
    } else if (caseWord === "aktivnmisz") {
      return "духовному розвитку";
    } else if (caseWord === "aktivnmisz") {
      return "духовному розвитку";
    } else if (caseWord === "volyamisz") {
      return "духовному розвитку";
    } else if (caseWord === "volyamisz") {
      return "духовному розвитку";
    } else if (caseWord === "impulsrodov") {
      return "духовного розвитку";
    } else if (caseWord === "impulsrodov") {
      return "духовного розвитку";
    } else if (caseWord === "musnmisz") {
      return "духовному розвитку";
    } else if (caseWord === "musnmisz") {
      return "духовному розвитку";
    } else {
      return "";
    }
  } else if (word === "Світогляд") {
    if (caseWord === "rishuchmisz") {
      return "світогляді";
    } else if (caseWord === "agresivmisz") {
      return "світогляді";
    } else if (caseWord === "borotbaorudn") {
      return "світоглядом";
    } else if (caseWord === "konkurenzorudn") {
      return "світоглядом";
    } else if (caseWord === "neobachnmisz") {
      return "світогляді";
    } else if (caseWord === "obmezenmisz") {
      return "світогляді";
    } else if (caseWord === "stusnenrodov") {
      return "світогляду";
    } else if (caseWord === "zakonymisz") {
      return "світогляді";
    } else if (caseWord === "pravularodov") {
      return "світогляду";
    } else if (caseWord === "konzentratmiszev") {
      return "світогляді";
    } else if (caseWord === "vutrummiszev") {
      return "світогляді";
    } else if (caseWord === "seriozrodov") {
      return "світогляду";
    } else if (caseWord === "skupistmiszev") {
      return "світогляді";
    } else if (caseWord === "zavzatmiszev") {
      return "світогляді";
    } else if (caseWord === "borgorudn") {
      return "світоглядом";
    } else if (caseWord === "rozshurenrodov") {
      return "світогляду";
    } else if (caseWord === "ghedristmiszev") {
      return "світогляді";
    } else if (caseWord === "mudristmiszev") {
      return "світогляді";
    } else if (caseWord === "spravedrodov") {
      return "світогляду";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "світогляді";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "світогляді";
    } else if (caseWord === "luksbrendznahid") {
      return "світогляд";
    } else if (caseWord === "zakordonomnazyv") {
      return "світогляд";
    } else if (caseWord === "vukladannyarodov") {
      return "світогляду";
    } else if (caseWord === "originalmiszev") {
      return "світогляді";
    } else if (caseWord === "svobodamiszev") {
      return "світогляді";
    } else if (caseWord === "spontanistmiszev") {
      return "світогляді";
    } else if (caseWord === "neochikuvanrodov") {
      return "світогляду";
    } else if (caseWord === "astrologrodov") {
      return "світогляду";
    } else if (caseWord === "vidkruttyarodov") {
      return "світогляду";
    } else if (caseWord === "informattehnologorudn") {
      return "світоглядом";
    } else if (caseWord === "fantastikrodov") {
      return "світогляду";
    } else if (caseWord === "kosmosmiszev") {
      return "світогляді";
    } else if (caseWord === "maibutnmiszev") {
      return "світогляді";
    } else if (caseWord === "genialnmiszev") {
      return "світогляді";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "світогляд";
    } else if (caseWord === "phantazmiszev") {
      return "світогляді";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "світогляд";
    } else if (caseWord === "vighisnyznahid") {
      return "світогляд";
    } else if (caseWord === "nathnennamiszev") {
      return "світогляді";
    } else if (caseWord === "obmanmiszev") {
      return "світогляді";
    } else if (caseWord === "samoobmanmiszev") {
      return "світогляді";
    } else if (caseWord === "zalegnostrodov") {
      return "світогляду";
    } else if (caseWord === "meditacznahid") {
      return "світогляд";
    } else if (caseWord === "transormznahid") {
      return "світогляд";
    } else if (caseWord === "extremsituazorudn") {
      return "світоглядом";
    } else if (caseWord === "vuchavolarodov") {
      return "світогляду";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "світогляді";
    } else if (caseWord === "tuskupravlinznahid") {
      return "світогляд";
    } else if (caseWord === "tuskupravlinznahid") {
      return "світогляд";
    } else if (caseWord === "narodgrodov") {
      return "світогляду";
    } else if (caseWord === "orgazmrodov") {
      return "світогляду";
    } else if (caseWord === "magiarodov") {
      return "світогляду";
    } else if (caseWord === "mafiaznahid") {
      return "світогляд";
    } else if (caseWord === "vladaznahid") {
      return "світогляд";
    } else if (caseWord === "manipulorudn") {
      return "світоглядом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "світогляд";
    } else if (caseWord === "onkologrodov") {
      return "світогляду";
    } else if (caseWord === "rozorenznahid") {
      return "світогляд";
    } else if (caseWord === "pogransutznahid") {
      return "світогляд";
    } else if (caseWord === "duhmiscev") {
      return "світогляді";
    } else if (caseWord === "silvolimiscev") {
      return "світогляді";
    } else if (caseWord === "dushrodov") {
      return "світогляду";
    } else if (caseWord === "emozrodov") {
      return "світогляду";
    } else if (caseWord === "rodprogramrodov") {
      return "світогляду";
    } else if (caseWord === "sprsvitmisz") {
      return "світогляді";
    } else if (caseWord === "zonacomfmisz") {
      return "світогляді";
    } else if (caseWord === "spadkovistrodov") {
      return "світогляду";
    } else if (caseWord === "roduchmisz") {
      return "світогляді";
    } else if (caseWord === "matyindividualmaty") {
      return "мала світогляд";
    } else if (caseWord === "intelectmisz") {
      return "світогляді";
    } else if (caseWord === "mislanalitmisz") {
      return "світогляді";
    } else if (caseWord === "zvazkorudn") {
      return "світоглядом";
    } else if (caseWord === "kontaktnistorudn") {
      return "світоглядом";
    } else if (caseWord === "movaznahid") {
      return "світогляд";
    } else if (caseWord === "vzaemotochznahid") {
      return "світогляд";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "світогляд";
    } else if (caseWord === "pochuttamisz") {
      return "світогляді";
    } else if (caseWord === "sumpatmisz") {
      return "світогляді";
    } else if (caseWord === "garmonmisz") {
      return "світогляді";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "світогляд";
    } else if (caseWord === "obrazkohanznahid") {
      return "світогляд";
    } else if (caseWord === "seksualnmisz") {
      return "світогляді";
    } else if (caseWord === "aktivnmisz") {
      return "світогляді";
    } else if (caseWord === "volyamisz") {
      return "світогляді";
    } else if (caseWord === "impulsrodov") {
      return "світогляду";
    } else if (caseWord === "musnmisz") {
      return "світогляді";
    } else {
      return "";
    }
  } else if (word === "Мислення") {
    if (caseWord === "rishuchmisz") {
      return "мисленні";
    } else if (caseWord === "agresivmisz") {
      return "мисленні";
    } else if (caseWord === "borotbaorudn") {
      return "мисленням";
    } else if (caseWord === "konkurenzorudn") {
      return "мисленням";
    } else if (caseWord === "neobachnmisz") {
      return "мисленні";
    } else if (caseWord === "obmezenmisz") {
      return "мисленні";
    } else if (caseWord === "stusnenrodov") {
      return "мислення";
    } else if (caseWord === "zakonymisz") {
      return "мисленні";
    } else if (caseWord === "pravularodov") {
      return "мислення";
    } else if (caseWord === "konzentratmiszev") {
      return "мисленні";
    } else if (caseWord === "vutrummiszev") {
      return "мисленні";
    } else if (caseWord === "seriozrodov") {
      return "мислення";
    } else if (caseWord === "skupistmiszev") {
      return "мисленні";
    } else if (caseWord === "zavzatmiszev") {
      return "мисленні";
    } else if (caseWord === "borgorudn") {
      return "мисленням";
    } else if (caseWord === "rozshurenrodov") {
      return "мислення";
    } else if (caseWord === "ghedristmiszev") {
      return "мисленні";
    } else if (caseWord === "mudristmiszev") {
      return "мисленні";
    } else if (caseWord === "spravedrodov") {
      return "мислення";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "мисленні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "мисленні";
    } else if (caseWord === "luksbrendznahid") {
      return "мислення";
    } else if (caseWord === "zakordonomnazyv") {
      return "мислення";
    } else if (caseWord === "vukladannyarodov") {
      return "мислення";
    } else if (caseWord === "originalmiszev") {
      return "мисленні";
    } else if (caseWord === "svobodamiszev") {
      return "мисленні";
    } else if (caseWord === "spontanistmiszev") {
      return "мисленні";
    } else if (caseWord === "neochikuvanrodov") {
      return "мислення";
    } else if (caseWord === "astrologrodov") {
      return "мислення";
    } else if (caseWord === "vidkruttyarodov") {
      return "мислення";
    } else if (caseWord === "informattehnologorudn") {
      return "мисленням";
    } else if (caseWord === "fantastikrodov") {
      return "мислення";
    } else if (caseWord === "kosmosmiszev") {
      return "мисленні";
    } else if (caseWord === "maibutnmiszev") {
      return "мисленні";
    } else if (caseWord === "genialnmiszev") {
      return "мисленні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "мислення";
    } else if (caseWord === "phantazmiszev") {
      return "мисленні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "мислення";
    } else if (caseWord === "vighisnyznahid") {
      return "мислення";
    } else if (caseWord === "nathnennamiszev") {
      return "мисленні";
    } else if (caseWord === "obmanmiszev") {
      return "мисленні";
    } else if (caseWord === "samoobmanmiszev") {
      return "мисленні";
    } else if (caseWord === "zalegnostrodov") {
      return "мислення";
    } else if (caseWord === "meditacznahid") {
      return "мислення";
    } else if (caseWord === "transormznahid") {
      return "мислення";
    } else if (caseWord === "extremsituazorudn") {
      return "мисленням";
    } else if (caseWord === "vuchavolarodov") {
      return "мислення";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "мисленні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мислення";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мислення";
    } else if (caseWord === "narodgrodov") {
      return "мислення";
    } else if (caseWord === "orgazmrodov") {
      return "мислення";
    } else if (caseWord === "magiarodov") {
      return "мислення";
    } else if (caseWord === "mafiaznahid") {
      return "мислення";
    } else if (caseWord === "vladaznahid") {
      return "мислення";
    } else if (caseWord === "manipulorudn") {
      return "мисленням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "мислення";
    } else if (caseWord === "onkologrodov") {
      return "мислення";
    } else if (caseWord === "rozorenznahid") {
      return "мислення";
    } else if (caseWord === "pogransutznahid") {
      return "мислення";
    } else if (caseWord === "duhmiscev") {
      return "мисленні";
    } else if (caseWord === "silvolimiscev") {
      return "мисленні";
    } else if (caseWord === "dushrodov") {
      return "мислення";
    } else if (caseWord === "emozrodov") {
      return "мислення";
    } else if (caseWord === "rodprogramrodov") {
      return "мислення";
    } else if (caseWord === "sprsvitmisz") {
      return "мисленні";
    } else if (caseWord === "zonacomfmisz") {
      return "мисленні";
    } else if (caseWord === "spadkovistrodov") {
      return "мислення";
    } else if (caseWord === "roduchmisz") {
      return "мисленні";
    } else if (caseWord === "matyindividualmaty") {
      return "вміє мислити";
    } else if (caseWord === "intelectmisz") {
      return "мисленні";
    } else if (caseWord === "mislanalitmisz") {
      return "мисленні";
    } else if (caseWord === "zvazkorudn") {
      return "мисленням";
    } else if (caseWord === "kontaktnistorudn") {
      return "мисленням";
    } else if (caseWord === "movaznahid") {
      return "мислення";
    } else if (caseWord === "vzaemotochznahid") {
      return "мислення";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "мислення";
    } else if (caseWord === "pochuttamisz") {
      return "мисленні";
    } else if (caseWord === "sumpatmisz") {
      return "мисленні";
    } else if (caseWord === "garmonmisz") {
      return "мисленні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "мислення";
    } else if (caseWord === "obrazkohanznahid") {
      return "мислення";
    } else if (caseWord === "seksualnmisz") {
      return "мисленні";
    } else if (caseWord === "aktivnmisz") {
      return "мисленні";
    } else if (caseWord === "volyamisz") {
      return "мисленні";
    } else if (caseWord === "impulsrodov") {
      return "мислення";
    } else if (caseWord === "musnmisz") {
      return "мисленні";
    } else {
      return "";
    }
  } else if (word === "Філософія") {
    if (caseWord === "rishuchmisz") {
      return "філософії";
    } else if (caseWord === "agresivmisz") {
      return "філософії";
    } else if (caseWord === "borotbaorudn") {
      return "філософією";
    } else if (caseWord === "konkurenzorudn") {
      return "філософією";
    } else if (caseWord === "neobachnmisz") {
      return "філософії";
    } else if (caseWord === "obmezenmisz") {
      return "філософії";
    } else if (caseWord === "stusnenrodov") {
      return "філософії";
    } else if (caseWord === "zakonymisz") {
      return "філософії";
    } else if (caseWord === "pravularodov") {
      return "філософії";
    } else if (caseWord === "konzentratmiszev") {
      return "філософії";
    } else if (caseWord === "vutrummiszev") {
      return "філософії";
    } else if (caseWord === "seriozrodov") {
      return "філософії";
    } else if (caseWord === "skupistmiszev") {
      return "філософії";
    } else if (caseWord === "zavzatmiszev") {
      return "філософії";
    } else if (caseWord === "borgorudn") {
      return "філософією";
    } else if (caseWord === "rozshurenrodov") {
      return "філософії";
    } else if (caseWord === "ghedristmiszev") {
      return "філософії";
    } else if (caseWord === "mudristmiszev") {
      return "філософії";
    } else if (caseWord === "spravedrodov") {
      return "філософії";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "філософії";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "філософії";
    } else if (caseWord === "luksbrendznahid") {
      return "філософію";
    } else if (caseWord === "zakordonomnazyv") {
      return "філософія";
    } else if (caseWord === "vukladannyarodov") {
      return "філософії";
    } else if (caseWord === "originalmiszev") {
      return "філософії";
    } else if (caseWord === "svobodamiszev") {
      return "філософії";
    } else if (caseWord === "spontanistmiszev") {
      return "філософії";
    } else if (caseWord === "neochikuvanrodov") {
      return "філософії";
    } else if (caseWord === "astrologrodov") {
      return "філософії";
    } else if (caseWord === "vidkruttyarodov") {
      return "філософії";
    } else if (caseWord === "informattehnologorudn") {
      return "філософією";
    } else if (caseWord === "fantastikrodov") {
      return "філософії";
    } else if (caseWord === "kosmosmiszev") {
      return "філософії";
    } else if (caseWord === "maibutnmiszev") {
      return "філософії";
    } else if (caseWord === "genialnmiszev") {
      return "філософії";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "філософію";
    } else if (caseWord === "phantazmiszev") {
      return "філософії";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "філософію";
    } else if (caseWord === "vighisnyznahid") {
      return "філософію";
    } else if (caseWord === "nathnennamiszev") {
      return "філософії";
    } else if (caseWord === "obmanmiszev") {
      return "філософії";
    } else if (caseWord === "samoobmanmiszev") {
      return "філософії";
    } else if (caseWord === "zalegnostrodov") {
      return "філософії";
    } else if (caseWord === "meditacznahid") {
      return "філософію";
    } else if (caseWord === "transormznahid") {
      return "філософію";
    } else if (caseWord === "extremsituazorudn") {
      return "філософією";
    } else if (caseWord === "vuchavolarodov") {
      return "філософії";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "філософії";
    } else if (caseWord === "tuskupravlinznahid") {
      return "філософію";
    } else if (caseWord === "tuskupravlinznahid") {
      return "філософію";
    } else if (caseWord === "narodgrodov") {
      return "філософії";
    } else if (caseWord === "orgazmrodov") {
      return "філософії";
    } else if (caseWord === "magiarodov") {
      return "філософії";
    } else if (caseWord === "mafiaznahid") {
      return "філософію";
    } else if (caseWord === "vladaznahid") {
      return "філософію";
    } else if (caseWord === "manipulorudn") {
      return "філософією";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "філософію";
    } else if (caseWord === "onkologrodov") {
      return "філософії";
    } else if (caseWord === "rozorenznahid") {
      return "філософію";
    } else if (caseWord === "pogransutznahid") {
      return "філософію";
    } else if (caseWord === "duhmiscev") {
      return "філософії";
    } else if (caseWord === "silvolimiscev") {
      return "філософії";
    } else if (caseWord === "dushrodov") {
      return "філософії";
    } else if (caseWord === "emozrodov") {
      return "філософії";
    } else if (caseWord === "rodprogramrodov") {
      return "філософії";
    } else if (caseWord === "sprsvitmisz") {
      return "філософії";
    } else if (caseWord === "zonacomfmisz") {
      return "філософії";
    } else if (caseWord === "spadkovistrodov") {
      return "філософії";
    } else if (caseWord === "roduchmisz") {
      return "філософії";
    } else if (caseWord === "matyindividualmaty") {
      return "любила філософію";
    } else if (caseWord === "intelectmisz") {
      return "філософії";
    } else if (caseWord === "mislanalitmisz") {
      return "філософії";
    } else if (caseWord === "zvazkorudn") {
      return "філософією";
    } else if (caseWord === "kontaktnistorudn") {
      return "філософією";
    } else if (caseWord === "movaznahid") {
      return "філософію";
    } else if (caseWord === "vzaemotochznahid") {
      return "філософію";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "філософію";
    } else if (caseWord === "pochuttamisz") {
      return "філософії";
    } else if (caseWord === "sumpatmisz") {
      return "філософії";
    } else if (caseWord === "garmonmisz") {
      return "філософії";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "філософію";
    } else if (caseWord === "obrazkohanznahid") {
      return "філософію";
    } else if (caseWord === "seksualnmisz") {
      return "філософії";
    } else if (caseWord === "aktivnmisz") {
      return "філософії";
    } else if (caseWord === "volyamisz") {
      return "філософії";
    } else if (caseWord === "impulsrodov") {
      return "філософії";
    } else if (caseWord === "musnmisz") {
      return "філософії";
    } else {
      return "";
    }
  } else if (word === "Релігіозність") {
    if (caseWord === "rishuchmisz") {
      return "релігіозності";
    } else if (caseWord === "agresivmisz") {
      return "релігіозності";
    } else if (caseWord === "borotbaorudn") {
      return "релігіозністю";
    } else if (caseWord === "konkurenzorudn") {
      return "релігіозністю";
    } else if (caseWord === "neobachnmisz") {
      return "релігіозності";
    } else if (caseWord === "obmezenmisz") {
      return "релігіозності";
    } else if (caseWord === "stusnenrodov") {
      return "релігіозності";
    } else if (caseWord === "zakonymisz") {
      return "релігіозності";
    } else if (caseWord === "pravularodov") {
      return "релігіозності";
    } else if (caseWord === "konzentratmiszev") {
      return "релігіозності";
    } else if (caseWord === "vutrummiszev") {
      return "релігіозності";
    } else if (caseWord === "seriozrodov") {
      return "релігіозності";
    } else if (caseWord === "skupistmiszev") {
      return "релігіозності";
    } else if (caseWord === "zavzatmiszev") {
      return "релігіозності";
    } else if (caseWord === "borgorudn") {
      return "релігіозністю";
    } else if (caseWord === "rozshurenrodov") {
      return "релігіозності";
    } else if (caseWord === "ghedristmiszev") {
      return "релігіозності";
    } else if (caseWord === "mudristmiszev") {
      return "релігіозності";
    } else if (caseWord === "spravedrodov") {
      return "релігіозності";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "релігіозності";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "релігіозності";
    } else if (caseWord === "luksbrendznahid") {
      return "релігіозність";
    } else if (caseWord === "zakordonomnazyv") {
      return "релігіозність";
    } else if (caseWord === "vukladannyarodov") {
      return "релігіозності";
    } else if (caseWord === "originalmiszev") {
      return "релігіозності";
    } else if (caseWord === "svobodamiszev") {
      return "релігіозності";
    } else if (caseWord === "spontanistmiszev") {
      return "релігіозності";
    } else if (caseWord === "neochikuvanrodov") {
      return "релігіозності";
    } else if (caseWord === "astrologrodov") {
      return "релігіозності";
    } else if (caseWord === "vidkruttyarodov") {
      return "релігіозності";
    } else if (caseWord === "informattehnologorudn") {
      return "релігіозністю";
    } else if (caseWord === "fantastikrodov") {
      return "релігіозності";
    } else if (caseWord === "kosmosmiszev") {
      return "релігіозності";
    } else if (caseWord === "maibutnmiszev") {
      return "релігіозності";
    } else if (caseWord === "genialnmiszev") {
      return "релігіозності";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "релігіозність";
    } else if (caseWord === "phantazmiszev") {
      return "релігіозності";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "релігіозність";
    } else if (caseWord === "vighisnyznahid") {
      return "релігіозність";
    } else if (caseWord === "nathnennamiszev") {
      return "релігіозності";
    } else if (caseWord === "obmanmiszev") {
      return "релігіозності";
    } else if (caseWord === "samoobmanmiszev") {
      return "релігіозності";
    } else if (caseWord === "zalegnostrodov") {
      return "релігіозності";
    } else if (caseWord === "meditacznahid") {
      return "релігіозність";
    } else if (caseWord === "transormznahid") {
      return "релігіозність";
    } else if (caseWord === "extremsituazorudn") {
      return "релігіозністю";
    } else if (caseWord === "vuchavolarodov") {
      return "релігіозності";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "релігіозності";
    } else if (caseWord === "tuskupravlinznahid") {
      return "релігіозність";
    } else if (caseWord === "tuskupravlinznahid") {
      return "релігіозність";
    } else if (caseWord === "narodgrodov") {
      return "релігіозності";
    } else if (caseWord === "orgazmrodov") {
      return "релігіозності";
    } else if (caseWord === "magiarodov") {
      return "релігіозності";
    } else if (caseWord === "mafiaznahid") {
      return "релігіозність";
    } else if (caseWord === "vladaznahid") {
      return "релігіозність";
    } else if (caseWord === "manipulorudn") {
      return "релігіозністю";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "релігіозність";
    } else if (caseWord === "onkologrodov") {
      return "релігіозності";
    } else if (caseWord === "rozorenznahid") {
      return "релігіозність";
    } else if (caseWord === "pogransutznahid") {
      return "релігіозність";
    } else if (caseWord === "duhmiscev") {
      return "релігіозності";
    } else if (caseWord === "silvolimiscev") {
      return "релігіозності";
    } else if (caseWord === "dushrodov") {
      return "релігіозності";
    } else if (caseWord === "emozrodov") {
      return "релігіозності";
    } else if (caseWord === "rodprogramrodov") {
      return "релігіозності";
    } else if (caseWord === "sprsvitmisz") {
      return "релігіозності";
    } else if (caseWord === "zonacomfmisz") {
      return "релігіозності";
    } else if (caseWord === "spadkovistrodov") {
      return "релігіозності";
    } else if (caseWord === "roduchmisz") {
      return "релігіозності";
    } else if (caseWord === "matyindividualmaty") {
      return "релігіозна";
    } else if (caseWord === "intelectmisz") {
      return "релігіозності";
    } else if (caseWord === "mislanalitmisz") {
      return "релігіозності";
    } else if (caseWord === "zvazkorudn") {
      return "релігіозністю";
    } else if (caseWord === "kontaktnistorudn") {
      return "релігіозністю";
    } else if (caseWord === "movaznahid") {
      return "релігіозність";
    } else if (caseWord === "vzaemotochznahid") {
      return "релігіозність";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "релігіозність";
    } else if (caseWord === "pochuttamisz") {
      return "релігіозності";
    } else if (caseWord === "sumpatmisz") {
      return "релігіозності";
    } else if (caseWord === "garmonmisz") {
      return "релігіозності";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "релігіозність";
    } else if (caseWord === "obrazkohanznahid") {
      return "релігіозність";
    } else if (caseWord === "seksualnmisz") {
      return "релігіозності";
    } else if (caseWord === "aktivnmisz") {
      return "релігіозності";
    } else if (caseWord === "volyamisz") {
      return "релігіозності";
    } else if (caseWord === "impulsrodov") {
      return "релігіозності";
    } else if (caseWord === "musnmisz") {
      return "релігіозності";
    } else {
      return "";
    }
  } else if (word === "Мораль") {
    if (caseWord === "rishuchmisz") {
      return "моралі";
    } else if (caseWord === "agresivmisz") {
      return "моралі";
    } else if (caseWord === "borotbaorudn") {
      return "мораллю";
    } else if (caseWord === "konkurenzorudn") {
      return "мораллю";
    } else if (caseWord === "neobachnmisz") {
      return "моралі";
    } else if (caseWord === "obmezenmisz") {
      return "моралі";
    } else if (caseWord === "stusnenrodov") {
      return "моралі";
    } else if (caseWord === "zakonymisz") {
      return "моралі";
    } else if (caseWord === "pravularodov") {
      return "моралі";
    } else if (caseWord === "konzentratmiszev") {
      return "моралі";
    } else if (caseWord === "vutrummiszev") {
      return "моралі";
    } else if (caseWord === "seriozrodov") {
      return "моралі";
    } else if (caseWord === "skupistmiszev") {
      return "моралі";
    } else if (caseWord === "zavzatmiszev") {
      return "моралі";
    } else if (caseWord === "borgorudn") {
      return "мораллю";
    } else if (caseWord === "rozshurenrodov") {
      return "моралі";
    } else if (caseWord === "ghedristmiszev") {
      return "моралі";
    } else if (caseWord === "mudristmiszev") {
      return "моралі";
    } else if (caseWord === "spravedrodov") {
      return "моралі";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "моралі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "моралі";
    } else if (caseWord === "luksbrendznahid") {
      return "мораль";
    } else if (caseWord === "zakordonomnazyv") {
      return "мораль";
    } else if (caseWord === "vukladannyarodov") {
      return "моралі";
    } else if (caseWord === "originalmiszev") {
      return "моралі";
    } else if (caseWord === "svobodamiszev") {
      return "моралі";
    } else if (caseWord === "spontanistmiszev") {
      return "моралі";
    } else if (caseWord === "neochikuvanrodov") {
      return "моралі";
    } else if (caseWord === "astrologrodov") {
      return "моралі";
    } else if (caseWord === "vidkruttyarodov") {
      return "моралі";
    } else if (caseWord === "informattehnologorudn") {
      return "мораллю";
    } else if (caseWord === "fantastikrodov") {
      return "моралі";
    } else if (caseWord === "kosmosmiszev") {
      return "моралі";
    } else if (caseWord === "maibutnmiszev") {
      return "моралі";
    } else if (caseWord === "genialnmiszev") {
      return "моралі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "мораль";
    } else if (caseWord === "phantazmiszev") {
      return "моралі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "мораль";
    } else if (caseWord === "vighisnyznahid") {
      return "мораль";
    } else if (caseWord === "nathnennamiszev") {
      return "моралі";
    } else if (caseWord === "obmanmiszev") {
      return "моралі";
    } else if (caseWord === "samoobmanmiszev") {
      return "моралі";
    } else if (caseWord === "zalegnostrodov") {
      return "моралі";
    } else if (caseWord === "meditacznahid") {
      return "мораль";
    } else if (caseWord === "transormznahid") {
      return "мораль";
    } else if (caseWord === "extremsituazorudn") {
      return "мораллю";
    } else if (caseWord === "vuchavolarodov") {
      return "моралі";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "моралі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мораль";
    } else if (caseWord === "tuskupravlinznahid") {
      return "мораль";
    } else if (caseWord === "narodgrodov") {
      return "моралі";
    } else if (caseWord === "orgazmrodov") {
      return "моралі";
    } else if (caseWord === "magiarodov") {
      return "моралі";
    } else if (caseWord === "mafiaznahid") {
      return "мораль";
    } else if (caseWord === "vladaznahid") {
      return "мораль";
    } else if (caseWord === "manipulorudn") {
      return "мораллю";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "мораль";
    } else if (caseWord === "onkologrodov") {
      return "моралі";
    } else if (caseWord === "rozorenznahid") {
      return "мораль";
    } else if (caseWord === "pogransutznahid") {
      return "мораль";
    } else if (caseWord === "duhmiscev") {
      return "моралі";
    } else if (caseWord === "silvolimiscev") {
      return "моралі";
    } else if (caseWord === "dushrodov") {
      return "моралі";
    } else if (caseWord === "emozrodov") {
      return "моралі";
    } else if (caseWord === "rodprogramrodov") {
      return "моралі";
    } else if (caseWord === "sprsvitmisz") {
      return "моралі";
    } else if (caseWord === "zonacomfmisz") {
      return "моралі";
    } else if (caseWord === "spadkovistrodov") {
      return "моралі";
    } else if (caseWord === "roduchmisz") {
      return "моралі";
    } else if (caseWord === "matyindividualmaty") {
      return "моральна";
    } else if (caseWord === "intelectmisz") {
      return "моралі";
    } else if (caseWord === "mislanalitmisz") {
      return "моралі";
    } else if (caseWord === "zvazkorudn") {
      return "мораллю";
    } else if (caseWord === "kontaktnistorudn") {
      return "мораллю";
    } else if (caseWord === "movaznahid") {
      return "мораль";
    } else if (caseWord === "vzaemotochznahid") {
      return "мораль";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "мораль";
    } else if (caseWord === "pochuttamisz") {
      return "моралі";
    } else if (caseWord === "sumpatmisz") {
      return "моралі";
    } else if (caseWord === "garmonmisz") {
      return "моралі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "мораль";
    } else if (caseWord === "obrazkohanznahid") {
      return "мораль";
    } else if (caseWord === "seksualnmisz") {
      return "моралі";
    } else if (caseWord === "aktivnmisz") {
      return "моралі";
    } else if (caseWord === "volyamisz") {
      return "моралі";
    } else if (caseWord === "impulsrodov") {
      return "моралі";
    } else if (caseWord === "musnmisz") {
      return "моралі";
    } else {
      return "";
    }
  } else if (word === "Вища освіта") {
    if (caseWord === "rishuchmisz") {
      return "вищій освіті";
    } else if (caseWord === "agresivmisz") {
      return "вищій освіті";
    } else if (caseWord === "borotbaorudn") {
      return "вищою освітою";
    } else if (caseWord === "konkurenzorudn") {
      return "вищою освітою";
    } else if (caseWord === "neobachnmisz") {
      return "вищій освіті";
    } else if (caseWord === "obmezenmisz") {
      return "вищій освіті";
    } else if (caseWord === "stusnenrodov") {
      return "вищої освіти";
    } else if (caseWord === "zakonymisz") {
      return "вищій освіті";
    } else if (caseWord === "pravularodov") {
      return "вищої освіти";
    } else if (caseWord === "konzentratmiszev") {
      return "вищій освіті";
    } else if (caseWord === "vutrummiszev") {
      return "вищій освіті";
    } else if (caseWord === "seriozrodov") {
      return "вищої освіти";
    } else if (caseWord === "skupistmiszev") {
      return "вищій освіті";
    } else if (caseWord === "zavzatmiszev") {
      return "вищій освіті";
    } else if (caseWord === "borgorudn") {
      return "вищою освітою";
    } else if (caseWord === "rozshurenrodov") {
      return "вищої освіти";
    } else if (caseWord === "ghedristmiszev") {
      return "вищій освіті";
    } else if (caseWord === "mudristmiszev") {
      return "вищій освіті";
    } else if (caseWord === "spravedrodov") {
      return "вищої освіти";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "вищій освіті";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "вищій освіті";
    } else if (caseWord === "luksbrendznahid") {
      return "вищу освіту";
    } else if (caseWord === "zakordonomnazyv") {
      return "вища освіта";
    } else if (caseWord === "vukladannyarodov") {
      return "вищої освіти";
    } else if (caseWord === "originalmiszev") {
      return "вищій освіті";
    } else if (caseWord === "svobodamiszev") {
      return "вищій освіті";
    } else if (caseWord === "spontanistmiszev") {
      return "вищій освіті";
    } else if (caseWord === "neochikuvanrodov") {
      return "вищої освіти";
    } else if (caseWord === "astrologrodov") {
      return "вищої освіти";
    } else if (caseWord === "vidkruttyarodov") {
      return "вищої освіти";
    } else if (caseWord === "informattehnologorudn") {
      return "вищою освітою";
    } else if (caseWord === "fantastikrodov") {
      return "вищої освіти";
    } else if (caseWord === "kosmosmiszev") {
      return "вищій освіті";
    } else if (caseWord === "maibutnmiszev") {
      return "вищій освіті";
    } else if (caseWord === "genialnmiszev") {
      return "вищій освіті";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "вищу освіту";
    } else if (caseWord === "phantazmiszev") {
      return "вищій освіті";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "вищу освіту";
    } else if (caseWord === "vighisnyznahid") {
      return "вищу освіту";
    } else if (caseWord === "nathnennamiszev") {
      return "вищій освіті";
    } else if (caseWord === "obmanmiszev") {
      return "вищій освіті";
    } else if (caseWord === "samoobmanmiszev") {
      return "вищій освіті";
    } else if (caseWord === "zalegnostrodov") {
      return "вищої освіти";
    } else if (caseWord === "meditacznahid") {
      return "вищу освіту";
    } else if (caseWord === "transormznahid") {
      return "вищу освіту";
    } else if (caseWord === "extremsituazorudn") {
      return "вищою освітою";
    } else if (caseWord === "vuchavolarodov") {
      return "вищої освіти";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "вищій освіті";
    } else if (caseWord === "tuskupravlinznahid") {
      return "вищу освіту";
    } else if (caseWord === "tuskupravlinznahid") {
      return "вищу освіту";
    } else if (caseWord === "narodgrodov") {
      return "вищої освіти";
    } else if (caseWord === "orgazmrodov") {
      return "вищої освіти";
    } else if (caseWord === "magiarodov") {
      return "вищої освіти";
    } else if (caseWord === "mafiaznahid") {
      return "вищу освіту";
    } else if (caseWord === "vladaznahid") {
      return "вищу освіту";
    } else if (caseWord === "manipulorudn") {
      return "вищою освітою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "вищу освіту";
    } else if (caseWord === "onkologrodov") {
      return "вищої освіти";
    } else if (caseWord === "rozorenznahid") {
      return "вищу освіту";
    } else if (caseWord === "pogransutznahid") {
      return "вищу освіту";
    } else if (caseWord === "duhmiscev") {
      return "вищій освіті";
    } else if (caseWord === "silvolimiscev") {
      return "вищій освіті";
    } else if (caseWord === "dushrodov") {
      return "вищої освіти";
    } else if (caseWord === "emozrodov") {
      return "вищої освіти";
    } else if (caseWord === "rodprogramrodov") {
      return "вищої освіти";
    } else if (caseWord === "sprsvitmisz") {
      return "вищій освіті";
    } else if (caseWord === "zonacomfmisz") {
      return "вищій освіті";
    } else if (caseWord === "spadkovistrodov") {
      return "вищої освіти";
    } else if (caseWord === "roduchmisz") {
      return "вищій освіті";
    } else if (caseWord === "matyindividualmaty") {
      return "має вищу освіту";
    } else if (caseWord === "intelectmisz") {
      return "вищій освіті";
    } else if (caseWord === "mislanalitmisz") {
      return "вищій освіті";
    } else if (caseWord === "zvazkorudn") {
      return "вищою освітою";
    } else if (caseWord === "kontaktnistorudn") {
      return "вищою освітою";
    } else if (caseWord === "movaznahid") {
      return "вищу освіту";
    } else if (caseWord === "vzaemotochznahid") {
      return "вищу освіту";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "вищу освіту";
    } else if (caseWord === "pochuttamisz") {
      return "вищій освіті";
    } else if (caseWord === "sumpatmisz") {
      return "вищій освіті";
    } else if (caseWord === "garmonmisz") {
      return "вищій освіті";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "вищу освіту";
    } else if (caseWord === "obrazkohanznahid") {
      return "вищу освіту";
    } else if (caseWord === "seksualnmisz") {
      return "вищій освіті";
    } else if (caseWord === "aktivnmisz") {
      return "вищій освіті";
    } else if (caseWord === "volyamisz") {
      return "вищій освіті";
    } else if (caseWord === "impulsrodov") {
      return "вищої освіти";
    } else if (caseWord === "musnmisz") {
      return "вищій освіті";
    } else {
      return "";
    }
  } else if (word === "Етика") {
    if (caseWord === "rishuchmisz") {
      return "етиці";
    } else if (caseWord === "agresivmisz") {
      return "етиці";
    } else if (caseWord === "borotbaorudn") {
      return "етикою";
    } else if (caseWord === "konkurenzorudn") {
      return "етикою";
    } else if (caseWord === "neobachnmisz") {
      return "етиці";
    } else if (caseWord === "obmezenmisz") {
      return "етиці";
    } else if (caseWord === "stusnenrodov") {
      return "етики";
    } else if (caseWord === "zakonymisz") {
      return "етиці";
    } else if (caseWord === "pravularodov") {
      return "етики";
    } else if (caseWord === "konzentratmiszev") {
      return "етиці";
    } else if (caseWord === "vutrummiszev") {
      return "етиці";
    } else if (caseWord === "seriozrodov") {
      return "етики";
    } else if (caseWord === "skupistmiszev") {
      return "етиці";
    } else if (caseWord === "zavzatmiszev") {
      return "етиці";
    } else if (caseWord === "borgorudn") {
      return "етикою";
    } else if (caseWord === "rozshurenrodov") {
      return "етики";
    } else if (caseWord === "ghedristmiszev") {
      return "етиці";
    } else if (caseWord === "mudristmiszev") {
      return "етиці";
    } else if (caseWord === "spravedrodov") {
      return "етики";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "етиці";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "етиці";
    } else if (caseWord === "luksbrendznahid") {
      return "етику";
    } else if (caseWord === "zakordonomnazyv") {
      return "етика";
    } else if (caseWord === "vukladannyarodov") {
      return "етики";
    } else if (caseWord === "originalmiszev") {
      return "етиці";
    } else if (caseWord === "svobodamiszev") {
      return "етиці";
    } else if (caseWord === "spontanistmiszev") {
      return "етиці";
    } else if (caseWord === "neochikuvanrodov") {
      return "етики";
    } else if (caseWord === "astrologrodov") {
      return "етики";
    } else if (caseWord === "vidkruttyarodov") {
      return "етики";
    } else if (caseWord === "informattehnologorudn") {
      return "етикою";
    } else if (caseWord === "fantastikrodov") {
      return "етики";
    } else if (caseWord === "kosmosmiszev") {
      return "етиці";
    } else if (caseWord === "maibutnmiszev") {
      return "етиці";
    } else if (caseWord === "genialnmiszev") {
      return "етиці";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "етику";
    } else if (caseWord === "phantazmiszev") {
      return "етиці";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "етику";
    } else if (caseWord === "vighisnyznahid") {
      return "етику";
    } else if (caseWord === "nathnennamiszev") {
      return "етиці";
    } else if (caseWord === "obmanmiszev") {
      return "етиці";
    } else if (caseWord === "samoobmanmiszev") {
      return "етиці";
    } else if (caseWord === "zalegnostrodov") {
      return "етики";
    } else if (caseWord === "meditacznahid") {
      return "етику";
    } else if (caseWord === "transormznahid") {
      return "етику";
    } else if (caseWord === "extremsituazorudn") {
      return "етикою";
    } else if (caseWord === "vuchavolarodov") {
      return "етики";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "етиці";
    } else if (caseWord === "tuskupravlinznahid") {
      return "етику";
    } else if (caseWord === "tuskupravlinznahid") {
      return "етику";
    } else if (caseWord === "narodgrodov") {
      return "етики";
    } else if (caseWord === "orgazmrodov") {
      return "етики";
    } else if (caseWord === "magiarodov") {
      return "етики";
    } else if (caseWord === "mafiaznahid") {
      return "етику";
    } else if (caseWord === "vladaznahid") {
      return "етику";
    } else if (caseWord === "manipulorudn") {
      return "етикою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "етику";
    } else if (caseWord === "onkologrodov") {
      return "етики";
    } else if (caseWord === "rozorenznahid") {
      return "етику";
    } else if (caseWord === "pogransutznahid") {
      return "етику";
    } else if (caseWord === "duhmiscev") {
      return "етиці";
    } else if (caseWord === "silvolimiscev") {
      return "етиці";
    } else if (caseWord === "dushrodov") {
      return "етики";
    } else if (caseWord === "emozrodov") {
      return "етики";
    } else if (caseWord === "rodprogramrodov") {
      return "етики";
    } else if (caseWord === "sprsvitmisz") {
      return "етиці";
    } else if (caseWord === "zonacomfmisz") {
      return "етиці";
    } else if (caseWord === "spadkovistrodov") {
      return "етики";
    } else if (caseWord === "roduchmisz") {
      return "етиці";
    } else if (caseWord === "matyindividualmaty") {
      return "етична";
    } else if (caseWord === "intelectmisz") {
      return "етиці";
    } else if (caseWord === "mislanalitmisz") {
      return "етиці";
    } else if (caseWord === "zvazkorudn") {
      return "етикою";
    } else if (caseWord === "kontaktnistorudn") {
      return "етикою";
    } else if (caseWord === "movaznahid") {
      return "етику";
    } else if (caseWord === "vzaemotochznahid") {
      return "етику";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "етику";
    } else if (caseWord === "pochuttamisz") {
      return "етиці";
    } else if (caseWord === "sumpatmisz") {
      return "етиці";
    } else if (caseWord === "garmonmisz") {
      return "етиці";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "етику";
    } else if (caseWord === "obrazkohanznahid") {
      return "етику";
    } else if (caseWord === "seksualnmisz") {
      return "етиці";
    } else if (caseWord === "aktivnmisz") {
      return "етиці";
    } else if (caseWord === "volyamisz") {
      return "етиці";
    } else if (caseWord === "impulsrodov") {
      return "етики";
    } else if (caseWord === "musnmisz") {
      return "етиці";
    } else {
      return "";
    }
  } else if (word === "Наука") {
    if (caseWord === "rishuchmisz") {
      return "науці";
    } else if (caseWord === "agresivmisz") {
      return "науці";
    } else if (caseWord === "borotbaorudn") {
      return "наукою";
    } else if (caseWord === "konkurenzorudn") {
      return "наукою";
    } else if (caseWord === "neobachnmisz") {
      return "науці";
    } else if (caseWord === "obmezenmisz") {
      return "науці";
    } else if (caseWord === "stusnenrodov") {
      return "науки";
    } else if (caseWord === "zakonymisz") {
      return "науці";
    } else if (caseWord === "pravularodov") {
      return "науки";
    } else if (caseWord === "konzentratmiszev") {
      return "науці";
    } else if (caseWord === "vutrummiszev") {
      return "науці";
    } else if (caseWord === "seriozrodov") {
      return "науки";
    } else if (caseWord === "skupistmiszev") {
      return "науці";
    } else if (caseWord === "zavzatmiszev") {
      return "науці";
    } else if (caseWord === "borgorudn") {
      return "наукою";
    } else if (caseWord === "rozshurenrodov") {
      return "науки";
    } else if (caseWord === "ghedristmiszev") {
      return "науці";
    } else if (caseWord === "mudristmiszev") {
      return "науці";
    } else if (caseWord === "spravedrodov") {
      return "науки";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "науці";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "науці";
    } else if (caseWord === "luksbrendznahid") {
      return "науку";
    } else if (caseWord === "zakordonomnazyv") {
      return "наука";
    } else if (caseWord === "vukladannyarodov") {
      return "науки";
    } else if (caseWord === "originalmiszev") {
      return "науці";
    } else if (caseWord === "svobodamiszev") {
      return "науці";
    } else if (caseWord === "spontanistmiszev") {
      return "науці";
    } else if (caseWord === "neochikuvanrodov") {
      return "науки";
    } else if (caseWord === "astrologrodov") {
      return "науки";
    } else if (caseWord === "vidkruttyarodov") {
      return "науки";
    } else if (caseWord === "informattehnologorudn") {
      return "наукою";
    } else if (caseWord === "fantastikrodov") {
      return "науки";
    } else if (caseWord === "kosmosmiszev") {
      return "науці";
    } else if (caseWord === "maibutnmiszev") {
      return "науці";
    } else if (caseWord === "genialnmiszev") {
      return "науці";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "науку";
    } else if (caseWord === "phantazmiszev") {
      return "науці";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "науку";
    } else if (caseWord === "vighisnyznahid") {
      return "науку";
    } else if (caseWord === "nathnennamiszev") {
      return "науці";
    } else if (caseWord === "obmanmiszev") {
      return "науці";
    } else if (caseWord === "samoobmanmiszev") {
      return "науці";
    } else if (caseWord === "zalegnostrodov") {
      return "науки";
    } else if (caseWord === "meditacznahid") {
      return "науку";
    } else if (caseWord === "transormznahid") {
      return "науку";
    } else if (caseWord === "extremsituazorudn") {
      return "наукою";
    } else if (caseWord === "vuchavolarodov") {
      return "науки";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "науці";
    } else if (caseWord === "tuskupravlinznahid") {
      return "науку";
    } else if (caseWord === "tuskupravlinznahid") {
      return "науку";
    } else if (caseWord === "narodgrodov") {
      return "науки";
    } else if (caseWord === "orgazmrodov") {
      return "науки";
    } else if (caseWord === "magiarodov") {
      return "науки";
    } else if (caseWord === "mafiaznahid") {
      return "науку";
    } else if (caseWord === "vladaznahid") {
      return "науку";
    } else if (caseWord === "manipulorudn") {
      return "наукою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "науку";
    } else if (caseWord === "onkologrodov") {
      return "науки";
    } else if (caseWord === "rozorenznahid") {
      return "науку";
    } else if (caseWord === "pogransutznahid") {
      return "науку";
    } else if (caseWord === "duhmiscev") {
      return "науці";
    } else if (caseWord === "silvolimiscev") {
      return "науці";
    } else if (caseWord === "dushrodov") {
      return "науки";
    } else if (caseWord === "emozrodov") {
      return "науки";
    } else if (caseWord === "rodprogramrodov") {
      return "науки";
    } else if (caseWord === "sprsvitmisz") {
      return "науці";
    } else if (caseWord === "zonacomfmisz") {
      return "науці";
    } else if (caseWord === "spadkovistrodov") {
      return "науки";
    } else if (caseWord === "roduchmisz") {
      return "науці";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась наукою";
    } else if (caseWord === "intelectmisz") {
      return "науці";
    } else if (caseWord === "mislanalitmisz") {
      return "науці";
    } else if (caseWord === "zvazkorudn") {
      return "наукою";
    } else if (caseWord === "kontaktnistorudn") {
      return "наукою";
    } else if (caseWord === "movaznahid") {
      return "науку";
    } else if (caseWord === "vzaemotochznahid") {
      return "науку";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "науку";
    } else if (caseWord === "pochuttamisz") {
      return "науці";
    } else if (caseWord === "sumpatmisz") {
      return "науці";
    } else if (caseWord === "garmonmisz") {
      return "науці";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "науку";
    } else if (caseWord === "obrazkohanznahid") {
      return "науку";
    } else if (caseWord === "seksualnmisz") {
      return "науці";
    } else if (caseWord === "aktivnmisz") {
      return "науці";
    } else if (caseWord === "volyamisz") {
      return "науці";
    } else if (caseWord === "impulsrodov") {
      return "науки";
    } else if (caseWord === "musnmisz") {
      return "науці";
    } else {
      return "";
    }
  } else if (word === "Стратегія") {
    if (caseWord === "rishuchmisz") {
      return "стратегії";
    } else if (caseWord === "agresivmisz") {
      return "стратегії";
    } else if (caseWord === "borotbaorudn") {
      return "стратегією";
    } else if (caseWord === "konkurenzorudn") {
      return "стратегією";
    } else if (caseWord === "neobachnmisz") {
      return "стратегії";
    } else if (caseWord === "obmezenmisz") {
      return "стратегії";
    } else if (caseWord === "stusnenrodov") {
      return "стратегії";
    } else if (caseWord === "zakonymisz") {
      return "стратегії";
    } else if (caseWord === "pravularodov") {
      return "стратегії";
    } else if (caseWord === "konzentratmiszev") {
      return "стратегії";
    } else if (caseWord === "vutrummiszev") {
      return "стратегії";
    } else if (caseWord === "seriozrodov") {
      return "стратегії";
    } else if (caseWord === "skupistmiszev") {
      return "стратегії";
    } else if (caseWord === "zavzatmiszev") {
      return "стратегії";
    } else if (caseWord === "borgorudn") {
      return "стратегією";
    } else if (caseWord === "rozshurenrodov") {
      return "стратегії";
    } else if (caseWord === "ghedristmiszev") {
      return "стратегії";
    } else if (caseWord === "mudristmiszev") {
      return "стратегії";
    } else if (caseWord === "spravedrodov") {
      return "стратегії";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "стратегії";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "стратегії";
    } else if (caseWord === "luksbrendznahid") {
      return "стратегію";
    } else if (caseWord === "zakordonomnazyv") {
      return "стратегія";
    } else if (caseWord === "vukladannyarodov") {
      return "стратегії";
    } else if (caseWord === "originalmiszev") {
      return "стратегії";
    } else if (caseWord === "svobodamiszev") {
      return "стратегії";
    } else if (caseWord === "spontanistmiszev") {
      return "стратегії";
    } else if (caseWord === "neochikuvanrodov") {
      return "стратегії";
    } else if (caseWord === "astrologrodov") {
      return "стратегії";
    } else if (caseWord === "vidkruttyarodov") {
      return "стратегії";
    } else if (caseWord === "informattehnologorudn") {
      return "стратегією";
    } else if (caseWord === "fantastikrodov") {
      return "стратегії";
    } else if (caseWord === "kosmosmiszev") {
      return "стратегії";
    } else if (caseWord === "maibutnmiszev") {
      return "стратегії";
    } else if (caseWord === "genialnmiszev") {
      return "стратегії";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "стратегію";
    } else if (caseWord === "phantazmiszev") {
      return "стратегії";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "стратегію";
    } else if (caseWord === "vighisnyznahid") {
      return "стратегію";
    } else if (caseWord === "nathnennamiszev") {
      return "стратегії";
    } else if (caseWord === "obmanmiszev") {
      return "стратегії";
    } else if (caseWord === "samoobmanmiszev") {
      return "стратегії";
    } else if (caseWord === "zalegnostrodov") {
      return "стратегії";
    } else if (caseWord === "meditacznahid") {
      return "стратегію";
    } else if (caseWord === "transormznahid") {
      return "стратегію";
    } else if (caseWord === "extremsituazorudn") {
      return "стратегією";
    } else if (caseWord === "vuchavolarodov") {
      return "стратегії";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "стратегії";
    } else if (caseWord === "tuskupravlinznahid") {
      return "стратегію";
    } else if (caseWord === "tuskupravlinznahid") {
      return "стратегію";
    } else if (caseWord === "narodgrodov") {
      return "стратегії";
    } else if (caseWord === "orgazmrodov") {
      return "стратегії";
    } else if (caseWord === "magiarodov") {
      return "стратегії";
    } else if (caseWord === "mafiaznahid") {
      return "стратегію";
    } else if (caseWord === "vladaznahid") {
      return "стратегію";
    } else if (caseWord === "manipulorudn") {
      return "стратегією";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "стратегію";
    } else if (caseWord === "onkologrodov") {
      return "стратегії";
    } else if (caseWord === "rozorenznahid") {
      return "стратегію";
    } else if (caseWord === "pogransutznahid") {
      return "стратегію";
    } else if (caseWord === "duhmiscev") {
      return "стратегії";
    } else if (caseWord === "silvolimiscev") {
      return "стратегії";
    } else if (caseWord === "dushrodov") {
      return "стратегії";
    } else if (caseWord === "emozrodov") {
      return "стратегії";
    } else if (caseWord === "rodprogramrodov") {
      return "стратегії";
    } else if (caseWord === "sprsvitmisz") {
      return "стратегії";
    } else if (caseWord === "zonacomfmisz") {
      return "стратегії";
    } else if (caseWord === "spadkovistrodov") {
      return "стратегії";
    } else if (caseWord === "roduchmisz") {
      return "стратегії";
    } else if (caseWord === "matyindividualmaty") {
      return "мала стратегію";
    } else if (caseWord === "intelectmisz") {
      return "стратегії";
    } else if (caseWord === "mislanalitmisz") {
      return "стратегії";
    } else if (caseWord === "zvazkorudn") {
      return "стратегією";
    } else if (caseWord === "kontaktnistorudn") {
      return "стратегією";
    } else if (caseWord === "movaznahid") {
      return "стратегію";
    } else if (caseWord === "vzaemotochznahid") {
      return "стратегію";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "стратегію";
    } else if (caseWord === "pochuttamisz") {
      return "стратегії";
    } else if (caseWord === "sumpatmisz") {
      return "стратегії";
    } else if (caseWord === "garmonmisz") {
      return "стратегії";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "стратегію";
    } else if (caseWord === "obrazkohanznahid") {
      return "стратегію";
    } else if (caseWord === "seksualnmisz") {
      return "стратегії";
    } else if (caseWord === "aktivnmisz") {
      return "стратегії";
    } else if (caseWord === "volyamisz") {
      return "стратегії";
    } else if (caseWord === "impulsrodov") {
      return "стратегії";
    } else if (caseWord === "musnmisz") {
      return "стратегії";
    } else {
      return "";
    }
  } else if (word === "Соціальний статус") {
    if (caseWord === "rishuchmisz") {
      return "соціальному статусі";
    } else if (caseWord === "agresivmisz") {
      return "соціальному статусі";
    } else if (caseWord === "borotbaorudn") {
      return "соціальним статусом";
    } else if (caseWord === "konkurenzorudn") {
      return "соціальним статусом";
    } else if (caseWord === "neobachnmisz") {
      return "соціальному статусі";
    } else if (caseWord === "obmezenmisz") {
      return "соціальному статусі";
    } else if (caseWord === "stusnenrodov") {
      return "соціального статусу";
    } else if (caseWord === "zakonymisz") {
      return "соціальному статусі";
    } else if (caseWord === "pravularodov") {
      return "соціального статусу";
    } else if (caseWord === "konzentratmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "vutrummiszev") {
      return "соціальному статусі";
    } else if (caseWord === "seriozrodov") {
      return "соціального статусу";
    } else if (caseWord === "skupistmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "zavzatmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "borgorudn") {
      return "соціальним статусом";
    } else if (caseWord === "rozshurenrodov") {
      return "соціального статусу";
    } else if (caseWord === "ghedristmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "mudristmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "spravedrodov") {
      return "соціального статусу";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "соціальному статусі";
    } else if (caseWord === "luksbrendznahid") {
      return "соціальний статус";
    } else if (caseWord === "zakordonomnazyv") {
      return "соціальний статус";
    } else if (caseWord === "vukladannyarodov") {
      return "соціального статусу";
    } else if (caseWord === "originalmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "svobodamiszev") {
      return "соціальному статусі";
    } else if (caseWord === "spontanistmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "neochikuvanrodov") {
      return "соціального статусу";
    } else if (caseWord === "astrologrodov") {
      return "соціального статусу";
    } else if (caseWord === "vidkruttyarodov") {
      return "соціального статусу";
    } else if (caseWord === "informattehnologorudn") {
      return "соціальним статусом";
    } else if (caseWord === "fantastikrodov") {
      return "соціального статусу";
    } else if (caseWord === "kosmosmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "maibutnmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "genialnmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "соціальний статус";
    } else if (caseWord === "phantazmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "соціальний статус";
    } else if (caseWord === "vighisnyznahid") {
      return "соціальний статус";
    } else if (caseWord === "nathnennamiszev") {
      return "соціальному статусі";
    } else if (caseWord === "obmanmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "samoobmanmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "zalegnostrodov") {
      return "соціального статусу";
    } else if (caseWord === "meditacznahid") {
      return "соціальний статус";
    } else if (caseWord === "transormznahid") {
      return "соціальний статус";
    } else if (caseWord === "extremsituazorudn") {
      return "соціальним статусом";
    } else if (caseWord === "vuchavolarodov") {
      return "соціального статусу";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "соціальному статусі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "соціальний статус";
    } else if (caseWord === "tuskupravlinznahid") {
      return "соціальний статус";
    } else if (caseWord === "narodgrodov") {
      return "соціального статусу";
    } else if (caseWord === "orgazmrodov") {
      return "соціального статусу";
    } else if (caseWord === "magiarodov") {
      return "соціального статусу";
    } else if (caseWord === "mafiaznahid") {
      return "соціальний статус";
    } else if (caseWord === "vladaznahid") {
      return "соціальний статус";
    } else if (caseWord === "manipulorudn") {
      return "соціальним статусом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "соціальний статус";
    } else if (caseWord === "onkologrodov") {
      return "соціального статусу";
    } else if (caseWord === "rozorenznahid") {
      return "соціальний статус";
    } else if (caseWord === "pogransutznahid") {
      return "соціальний статус";
    } else if (caseWord === "duhmiscev") {
      return "соціальному статусі";
    } else if (caseWord === "silvolimiscev") {
      return "соціальному статусі";
    } else if (caseWord === "dushrodov") {
      return "соціального статусу";
    } else if (caseWord === "emozrodov") {
      return "соціального статусу";
    } else if (caseWord === "rodprogramrodov") {
      return "соціального статусу";
    } else if (caseWord === "sprsvitmisz") {
      return "соціальному статусі";
    } else if (caseWord === "zonacomfmisz") {
      return "соціальному статусі";
    } else if (caseWord === "spadkovistrodov") {
      return "соціального статусу";
    } else if (caseWord === "roduchmisz") {
      return "соціальному статусі";
    } else if (caseWord === "matyindividualmaty") {
      return "має соціальний статус";
    } else if (caseWord === "intelectmisz") {
      return "соціальному статусі";
    } else if (caseWord === "mislanalitmisz") {
      return "соціальному статусі";
    } else if (caseWord === "zvazkorudn") {
      return "соціальним статусом";
    } else if (caseWord === "kontaktnistorudn") {
      return "соціальним статусом";
    } else if (caseWord === "movaznahid") {
      return "соціальний статус";
    } else if (caseWord === "vzaemotochznahid") {
      return "соціальний статус";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "соціальний статус";
    } else if (caseWord === "pochuttamisz") {
      return "соціальному статусі";
    } else if (caseWord === "sumpatmisz") {
      return "соціальному статусі";
    } else if (caseWord === "garmonmisz") {
      return "соціальному статусі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "соціальний статус";
    } else if (caseWord === "obrazkohanznahid") {
      return "соціальний статус";
    } else if (caseWord === "seksualnmisz") {
      return "соціальному статусі";
    } else if (caseWord === "aktivnmisz") {
      return "соціальному статусі";
    } else if (caseWord === "volyamisz") {
      return "соціальному статусі";
    } else if (caseWord === "impulsrodov") {
      return "соціального статусу";
    } else if (caseWord === "musnmisz") {
      return "соціальному статусі";
    } else {
      return "";
    }
  } else if (word === "Моральні та матеріальні блага") {
    if (caseWord === "rishuchmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "agresivmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "borotbaorudn") {
      return "моральними та матеріальними благами";
    } else if (caseWord === "konkurenzorudn") {
      return "моральними та матеріальними благами";
    } else if (caseWord === "neobachnmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "obmezenmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "stusnenrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "zakonymisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "pravularodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "konzentratmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "vutrummiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "seriozrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "skupistmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "zavzatmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "borgorudn") {
      return "моральними та матеріальними благами";
    } else if (caseWord === "rozshurenrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "ghedristmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "mudristmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "spravedrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "luksbrendznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "zakordonomnazyv") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "vukladannyarodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "originalmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "svobodamiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "spontanistmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "neochikuvanrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "astrologrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "vidkruttyarodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "informattehnologorudn") {
      return "моральними та матеріальними благами";
    } else if (caseWord === "fantastikrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "kosmosmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "maibutnmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "genialnmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "phantazmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "vighisnyznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "nathnennamiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "obmanmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "samoobmanmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "zalegnostrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "meditacznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "transormznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "extremsituazorudn") {
      return "моральними та матеріальними благами";
    } else if (caseWord === "vuchavolarodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "tuskupravlinznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "narodgrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "orgazmrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "magiarodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "mafiaznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "vladaznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "manipulorudn") {
      return "моральними та матеріальними благами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "onkologrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "rozorenznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "pogransutznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "duhmiscev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "silvolimiscev") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "dushrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "emozrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "rodprogramrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "sprsvitmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "zonacomfmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "spadkovistrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "roduchmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "matyindividualmaty") {
      return "любить моральні та матеріальні блага";
    } else if (caseWord === "intelectmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "mislanalitmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "zvazkorudn") {
      return "моральними та матеріальними благами";
    } else if (caseWord === "kontaktnistorudn") {
      return "моральними та матеріальними благами";
    } else if (caseWord === "movaznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "vzaemotochznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "pochuttamisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "sumpatmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "garmonmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "obrazkohanznahid") {
      return "моральні та матеріальні блага";
    } else if (caseWord === "seksualnmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "aktivnmisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "volyamisz") {
      return "моральних та матеріальни благах";
    } else if (caseWord === "impulsrodov") {
      return "моральних та матеріальних благ";
    } else if (caseWord === "musnmisz") {
      return "моральних та матеріальни благах";
    } else {
      return "";
    }
  } else if (word === "Посада") {
    if (caseWord === "rishuchmisz") {
      return "посаді";
    } else if (caseWord === "agresivmisz") {
      return "посаді";
    } else if (caseWord === "borotbaorudn") {
      return "посадою";
    } else if (caseWord === "konkurenzorudn") {
      return "посадою";
    } else if (caseWord === "neobachnmisz") {
      return "посаді";
    } else if (caseWord === "obmezenmisz") {
      return "посаді";
    } else if (caseWord === "stusnenrodov") {
      return "посади";
    } else if (caseWord === "zakonymisz") {
      return "посаді";
    } else if (caseWord === "pravularodov") {
      return "посади";
    } else if (caseWord === "konzentratmiszev") {
      return "посаді";
    } else if (caseWord === "vutrummiszev") {
      return "посаді";
    } else if (caseWord === "seriozrodov") {
      return "посади";
    } else if (caseWord === "skupistmiszev") {
      return "посаді";
    } else if (caseWord === "zavzatmiszev") {
      return "посаді";
    } else if (caseWord === "borgorudn") {
      return "посадою";
    } else if (caseWord === "rozshurenrodov") {
      return "посади";
    } else if (caseWord === "ghedristmiszev") {
      return "посаді";
    } else if (caseWord === "mudristmiszev") {
      return "посаді";
    } else if (caseWord === "spravedrodov") {
      return "посади";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "посаді";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "посаді";
    } else if (caseWord === "luksbrendznahid") {
      return "посаду";
    } else if (caseWord === "zakordonomnazyv") {
      return "посада";
    } else if (caseWord === "vukladannyarodov") {
      return "посади";
    } else if (caseWord === "originalmiszev") {
      return "посаді";
    } else if (caseWord === "svobodamiszev") {
      return "посаді";
    } else if (caseWord === "spontanistmiszev") {
      return "посаді";
    } else if (caseWord === "neochikuvanrodov") {
      return "посади";
    } else if (caseWord === "astrologrodov") {
      return "посади";
    } else if (caseWord === "vidkruttyarodov") {
      return "посади";
    } else if (caseWord === "informattehnologorudn") {
      return "посадою";
    } else if (caseWord === "fantastikrodov") {
      return "посади";
    } else if (caseWord === "kosmosmiszev") {
      return "посаді";
    } else if (caseWord === "maibutnmiszev") {
      return "посаді";
    } else if (caseWord === "genialnmiszev") {
      return "посаді";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "посаду";
    } else if (caseWord === "phantazmiszev") {
      return "посаді";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "посаду";
    } else if (caseWord === "vighisnyznahid") {
      return "посаду";
    } else if (caseWord === "nathnennamiszev") {
      return "посаді";
    } else if (caseWord === "obmanmiszev") {
      return "посаді";
    } else if (caseWord === "samoobmanmiszev") {
      return "посаді";
    } else if (caseWord === "zalegnostrodov") {
      return "посади";
    } else if (caseWord === "meditacznahid") {
      return "посаду";
    } else if (caseWord === "transormznahid") {
      return "посаду";
    } else if (caseWord === "extremsituazorudn") {
      return "посадою";
    } else if (caseWord === "vuchavolarodov") {
      return "посади";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "посаді";
    } else if (caseWord === "tuskupravlinznahid") {
      return "посаду";
    } else if (caseWord === "tuskupravlinznahid") {
      return "посаду";
    } else if (caseWord === "narodgrodov") {
      return "посади";
    } else if (caseWord === "orgazmrodov") {
      return "посади";
    } else if (caseWord === "magiarodov") {
      return "посади";
    } else if (caseWord === "mafiaznahid") {
      return "посаду";
    } else if (caseWord === "vladaznahid") {
      return "посаду";
    } else if (caseWord === "manipulorudn") {
      return "посадою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "посаду";
    } else if (caseWord === "onkologrodov") {
      return "посади";
    } else if (caseWord === "rozorenznahid") {
      return "посаду";
    } else if (caseWord === "pogransutznahid") {
      return "посаду";
    } else if (caseWord === "duhmiscev") {
      return "посаді";
    } else if (caseWord === "silvolimiscev") {
      return "посаді";
    } else if (caseWord === "dushrodov") {
      return "посади";
    } else if (caseWord === "emozrodov") {
      return "посади";
    } else if (caseWord === "rodprogramrodov") {
      return "посади";
    } else if (caseWord === "sprsvitmisz") {
      return "посаді";
    } else if (caseWord === "zonacomfmisz") {
      return "посаді";
    } else if (caseWord === "spadkovistrodov") {
      return "посади";
    } else if (caseWord === "roduchmisz") {
      return "посаді";
    } else if (caseWord === "matyindividualmaty") {
      return "має посаду";
    } else if (caseWord === "intelectmisz") {
      return "посаді";
    } else if (caseWord === "mislanalitmisz") {
      return "посаді";
    } else if (caseWord === "zvazkorudn") {
      return "посадою";
    } else if (caseWord === "kontaktnistorudn") {
      return "посадою";
    } else if (caseWord === "movaznahid") {
      return "посаду";
    } else if (caseWord === "vzaemotochznahid") {
      return "посаду";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "посаду";
    } else if (caseWord === "pochuttamisz") {
      return "посаді";
    } else if (caseWord === "sumpatmisz") {
      return "посаді";
    } else if (caseWord === "garmonmisz") {
      return "посаді";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "посаду";
    } else if (caseWord === "obrazkohanznahid") {
      return "посаду";
    } else if (caseWord === "seksualnmisz") {
      return "посаді";
    } else if (caseWord === "aktivnmisz") {
      return "посаді";
    } else if (caseWord === "volyamisz") {
      return "посаді";
    } else if (caseWord === "impulsrodov") {
      return "посади";
    } else if (caseWord === "musnmisz") {
      return "посаді";
    } else {
      return "";
    }
  } else if (word === "Авторитет") {
    if (caseWord === "rishuchmisz") {
      return "авторитеті";
    } else if (caseWord === "agresivmisz") {
      return "авторитеті";
    } else if (caseWord === "borotbaorudn") {
      return "авторитетом";
    } else if (caseWord === "konkurenzorudn") {
      return "авторитетом";
    } else if (caseWord === "neobachnmisz") {
      return "авторитеті";
    } else if (caseWord === "obmezenmisz") {
      return "авторитеті";
    } else if (caseWord === "stusnenrodov") {
      return "авторитету";
    } else if (caseWord === "zakonymisz") {
      return "авторитеті";
    } else if (caseWord === "pravularodov") {
      return "авторитету";
    } else if (caseWord === "konzentratmiszev") {
      return "авторитеті";
    } else if (caseWord === "vutrummiszev") {
      return "авторитеті";
    } else if (caseWord === "seriozrodov") {
      return "авторитету";
    } else if (caseWord === "skupistmiszev") {
      return "авторитеті";
    } else if (caseWord === "zavzatmiszev") {
      return "авторитеті";
    } else if (caseWord === "borgorudn") {
      return "авторитетом";
    } else if (caseWord === "rozshurenrodov") {
      return "авторитету";
    } else if (caseWord === "ghedristmiszev") {
      return "авторитеті";
    } else if (caseWord === "mudristmiszev") {
      return "авторитеті";
    } else if (caseWord === "spravedrodov") {
      return "авторитету";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "авторитеті";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "авторитеті";
    } else if (caseWord === "luksbrendznahid") {
      return "авторитет";
    } else if (caseWord === "zakordonomnazyv") {
      return "авторитет";
    } else if (caseWord === "vukladannyarodov") {
      return "авторитету";
    } else if (caseWord === "originalmiszev") {
      return "авторитеті";
    } else if (caseWord === "svobodamiszev") {
      return "авторитеті";
    } else if (caseWord === "spontanistmiszev") {
      return "авторитеті";
    } else if (caseWord === "neochikuvanrodov") {
      return "авторитету";
    } else if (caseWord === "astrologrodov") {
      return "авторитету";
    } else if (caseWord === "vidkruttyarodov") {
      return "авторитету";
    } else if (caseWord === "informattehnologorudn") {
      return "авторитетом";
    } else if (caseWord === "fantastikrodov") {
      return "авторитету";
    } else if (caseWord === "kosmosmiszev") {
      return "авторитеті";
    } else if (caseWord === "maibutnmiszev") {
      return "авторитеті";
    } else if (caseWord === "genialnmiszev") {
      return "авторитеті";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "авторитет";
    } else if (caseWord === "phantazmiszev") {
      return "авторитеті";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "авторитет";
    } else if (caseWord === "vighisnyznahid") {
      return "авторитет";
    } else if (caseWord === "nathnennamiszev") {
      return "авторитеті";
    } else if (caseWord === "obmanmiszev") {
      return "авторитеті";
    } else if (caseWord === "samoobmanmiszev") {
      return "авторитеті";
    } else if (caseWord === "zalegnostrodov") {
      return "авторитету";
    } else if (caseWord === "meditacznahid") {
      return "авторитет";
    } else if (caseWord === "transormznahid") {
      return "авторитет";
    } else if (caseWord === "extremsituazorudn") {
      return "авторитетом";
    } else if (caseWord === "vuchavolarodov") {
      return "авторитету";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "авторитеті";
    } else if (caseWord === "tuskupravlinznahid") {
      return "авторитет";
    } else if (caseWord === "tuskupravlinznahid") {
      return "авторитет";
    } else if (caseWord === "narodgrodov") {
      return "авторитету";
    } else if (caseWord === "orgazmrodov") {
      return "авторитету";
    } else if (caseWord === "magiarodov") {
      return "авторитету";
    } else if (caseWord === "mafiaznahid") {
      return "авторитет";
    } else if (caseWord === "vladaznahid") {
      return "авторитет";
    } else if (caseWord === "manipulorudn") {
      return "авторитетом";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "авторитет";
    } else if (caseWord === "onkologrodov") {
      return "авторитету";
    } else if (caseWord === "rozorenznahid") {
      return "авторитет";
    } else if (caseWord === "pogransutznahid") {
      return "авторитет";
    } else if (caseWord === "duhmiscev") {
      return "авторитеті";
    } else if (caseWord === "silvolimiscev") {
      return "авторитеті";
    } else if (caseWord === "dushrodov") {
      return "авторитету";
    } else if (caseWord === "emozrodov") {
      return "авторитету";
    } else if (caseWord === "rodprogramrodov") {
      return "авторитету";
    } else if (caseWord === "sprsvitmisz") {
      return "авторитеті";
    } else if (caseWord === "zonacomfmisz") {
      return "авторитеті";
    } else if (caseWord === "spadkovistrodov") {
      return "авторитету";
    } else if (caseWord === "roduchmisz") {
      return "авторитеті";
    } else if (caseWord === "matyindividualmaty") {
      return "має авторитет";
    } else if (caseWord === "intelectmisz") {
      return "авторитеті";
    } else if (caseWord === "mislanalitmisz") {
      return "авторитеті";
    } else if (caseWord === "zvazkorudn") {
      return "авторитетом";
    } else if (caseWord === "kontaktnistorudn") {
      return "авторитетом";
    } else if (caseWord === "movaznahid") {
      return "авторитет";
    } else if (caseWord === "vzaemotochznahid") {
      return "авторитет";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "авторитет";
    } else if (caseWord === "pochuttamisz") {
      return "авторитеті";
    } else if (caseWord === "sumpatmisz") {
      return "авторитеті";
    } else if (caseWord === "garmonmisz") {
      return "авторитеті";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "авторитет";
    } else if (caseWord === "obrazkohanznahid") {
      return "авторитет";
    } else if (caseWord === "seksualnmisz") {
      return "авторитеті";
    } else if (caseWord === "aktivnmisz") {
      return "авторитеті";
    } else if (caseWord === "volyamisz") {
      return "авторитеті";
    } else if (caseWord === "impulsrodov") {
      return "авторитету";
    } else if (caseWord === "musnmisz") {
      return "авторитеті";
    } else {
      return "";
    }
  } else if (word === "Репутація") {
    if (caseWord === "rishuchmisz") {
      return "репутації";
    } else if (caseWord === "agresivmisz") {
      return "репутації";
    } else if (caseWord === "borotbaorudn") {
      return "репутацією";
    } else if (caseWord === "konkurenzorudn") {
      return "репутацією";
    } else if (caseWord === "neobachnmisz") {
      return "репутації";
    } else if (caseWord === "obmezenmisz") {
      return "репутації";
    } else if (caseWord === "stusnenrodov") {
      return "репутації";
    } else if (caseWord === "zakonymisz") {
      return "репутації";
    } else if (caseWord === "pravularodov") {
      return "репутації";
    } else if (caseWord === "konzentratmiszev") {
      return "репутації";
    } else if (caseWord === "vutrummiszev") {
      return "репутації";
    } else if (caseWord === "seriozrodov") {
      return "репутації";
    } else if (caseWord === "skupistmiszev") {
      return "репутації";
    } else if (caseWord === "zavzatmiszev") {
      return "репутації";
    } else if (caseWord === "borgorudn") {
      return "репутацією";
    } else if (caseWord === "rozshurenrodov") {
      return "репутації";
    } else if (caseWord === "ghedristmiszev") {
      return "репутації";
    } else if (caseWord === "mudristmiszev") {
      return "репутації";
    } else if (caseWord === "spravedrodov") {
      return "репутації";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "репутації";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "репутації";
    } else if (caseWord === "luksbrendznahid") {
      return "репутацію";
    } else if (caseWord === "zakordonomnazyv") {
      return "репутація";
    } else if (caseWord === "vukladannyarodov") {
      return "репутації";
    } else if (caseWord === "originalmiszev") {
      return "репутації";
    } else if (caseWord === "svobodamiszev") {
      return "репутації";
    } else if (caseWord === "spontanistmiszev") {
      return "репутації";
    } else if (caseWord === "neochikuvanrodov") {
      return "репутації";
    } else if (caseWord === "astrologrodov") {
      return "репутації";
    } else if (caseWord === "vidkruttyarodov") {
      return "репутації";
    } else if (caseWord === "informattehnologorudn") {
      return "репутацією";
    } else if (caseWord === "fantastikrodov") {
      return "репутації";
    } else if (caseWord === "kosmosmiszev") {
      return "репутації";
    } else if (caseWord === "maibutnmiszev") {
      return "репутації";
    } else if (caseWord === "genialnmiszev") {
      return "репутації";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "репутацію";
    } else if (caseWord === "phantazmiszev") {
      return "репутації";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "репутацію";
    } else if (caseWord === "vighisnyznahid") {
      return "репутацію";
    } else if (caseWord === "nathnennamiszev") {
      return "репутації";
    } else if (caseWord === "obmanmiszev") {
      return "репутації";
    } else if (caseWord === "samoobmanmiszev") {
      return "репутації";
    } else if (caseWord === "zalegnostrodov") {
      return "репутації";
    } else if (caseWord === "meditacznahid") {
      return "репутацію";
    } else if (caseWord === "transormznahid") {
      return "репутацію";
    } else if (caseWord === "extremsituazorudn") {
      return "репутацією";
    } else if (caseWord === "vuchavolarodov") {
      return "репутації";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "репутації";
    } else if (caseWord === "tuskupravlinznahid") {
      return "репутацію";
    } else if (caseWord === "tuskupravlinznahid") {
      return "репутацію";
    } else if (caseWord === "narodgrodov") {
      return "репутації";
    } else if (caseWord === "orgazmrodov") {
      return "репутації";
    } else if (caseWord === "magiarodov") {
      return "репутації";
    } else if (caseWord === "mafiaznahid") {
      return "репутацію";
    } else if (caseWord === "vladaznahid") {
      return "репутацію";
    } else if (caseWord === "manipulorudn") {
      return "репутацією";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "репутацію";
    } else if (caseWord === "onkologrodov") {
      return "репутації";
    } else if (caseWord === "rozorenznahid") {
      return "репутацію";
    } else if (caseWord === "pogransutznahid") {
      return "репутацію";
    } else if (caseWord === "duhmiscev") {
      return "репутації";
    } else if (caseWord === "silvolimiscev") {
      return "репутації";
    } else if (caseWord === "dushrodov") {
      return "репутації";
    } else if (caseWord === "emozrodov") {
      return "репутації";
    } else if (caseWord === "rodprogramrodov") {
      return "репутації";
    } else if (caseWord === "sprsvitmisz") {
      return "репутації";
    } else if (caseWord === "zonacomfmisz") {
      return "репутації";
    } else if (caseWord === "spadkovistrodov") {
      return "репутації";
    } else if (caseWord === "roduchmisz") {
      return "репутації";
    } else if (caseWord === "matyindividualmaty") {
      return "має репутацію";
    } else if (caseWord === "intelectmisz") {
      return "репутації";
    } else if (caseWord === "mislanalitmisz") {
      return "репутації";
    } else if (caseWord === "zvazkorudn") {
      return "репутацією";
    } else if (caseWord === "kontaktnistorudn") {
      return "репутацією";
    } else if (caseWord === "movaznahid") {
      return "репутацію";
    } else if (caseWord === "vzaemotochznahid") {
      return "репутацію";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "репутацію";
    } else if (caseWord === "pochuttamisz") {
      return "репутації";
    } else if (caseWord === "sumpatmisz") {
      return "репутації";
    } else if (caseWord === "garmonmisz") {
      return "репутації";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "репутацію";
    } else if (caseWord === "obrazkohanznahid") {
      return "репутацію";
    } else if (caseWord === "seksualnmisz") {
      return "репутації";
    } else if (caseWord === "aktivnmisz") {
      return "репутації";
    } else if (caseWord === "volyamisz") {
      return "репутації";
    } else if (caseWord === "impulsrodov") {
      return "репутації";
    } else if (caseWord === "musnmisz") {
      return "репутації";
    } else {
      return "";
    }
  } else if (word === "Політика") {
    if (caseWord === "rishuchmisz") {
      return "політиці";
    } else if (caseWord === "rishuchmisz") {
      return "політиці";
    } else if (caseWord === "agresivmisz") {
      return "політиці";
    } else if (caseWord === "agresivmisz") {
      return "політиці";
    } else if (caseWord === "borotbaorudn") {
      return "політикою";
    } else if (caseWord === "konkurenzorudn") {
      return "політикою";
    } else if (caseWord === "neobachnmisz") {
      return "політиці";
    } else if (caseWord === "neobachnmisz") {
      return "політиці";
    } else if (caseWord === "obmezenmisz") {
      return "політиці";
    } else if (caseWord === "obmezenmisz") {
      return "політиці";
    } else if (caseWord === "stusnenrodov") {
      return "політики";
    } else if (caseWord === "zakonymisz") {
      return "політиці";
    } else if (caseWord === "zakonymisz") {
      return "політиці";
    } else if (caseWord === "pravularodov") {
      return "політики";
    } else if (caseWord === "konzentratmiszev") {
      return "політиці";
    } else if (caseWord === "konzentratmiszev") {
      return "політиці";
    } else if (caseWord === "vutrummiszev") {
      return "політиці";
    } else if (caseWord === "vutrummiszev") {
      return "політиці";
    } else if (caseWord === "seriozrodov") {
      return "політики";
    } else if (caseWord === "skupistmiszev") {
      return "політиці";
    } else if (caseWord === "skupistmiszev") {
      return "політиці";
    } else if (caseWord === "zavzatmiszev") {
      return "політиці";
    } else if (caseWord === "zavzatmiszev") {
      return "політиці";
    } else if (caseWord === "borgorudn") {
      return "політикою";
    } else if (caseWord === "rozshurenrodov") {
      return "політики";
    } else if (caseWord === "ghedristmiszev") {
      return "політиці";
    } else if (caseWord === "ghedristmiszev") {
      return "політиці";
    } else if (caseWord === "mudristmiszev") {
      return "політиці";
    } else if (caseWord === "mudristmiszev") {
      return "політиці";
    } else if (caseWord === "spravedrodov") {
      return "політики";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "політиці";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "політиці";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "політиці";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "політиці";
    } else if (caseWord === "luksbrendznahid") {
      return "політику";
    } else if (caseWord === "zakordonomnazyv") {
      return "політика";
    } else if (caseWord === "vukladannyarodov") {
      return "політики";
    } else if (caseWord === "originalmiszev") {
      return "політиці";
    } else if (caseWord === "originalmiszev") {
      return "політиці";
    } else if (caseWord === "svobodamiszev") {
      return "політиці";
    } else if (caseWord === "svobodamiszev") {
      return "політиці";
    } else if (caseWord === "spontanistmiszev") {
      return "політиці";
    } else if (caseWord === "spontanistmiszev") {
      return "політиці";
    } else if (caseWord === "neochikuvanrodov") {
      return "політики";
    } else if (caseWord === "astrologrodov") {
      return "політики";
    } else if (caseWord === "vidkruttyarodov") {
      return "політики";
    } else if (caseWord === "informattehnologorudn") {
      return "політикою";
    } else if (caseWord === "fantastikrodov") {
      return "політики";
    } else if (caseWord === "kosmosmiszev") {
      return "політиці";
    } else if (caseWord === "kosmosmiszev") {
      return "політиці";
    } else if (caseWord === "maibutnmiszev") {
      return "політиці";
    } else if (caseWord === "maibutnmiszev") {
      return "політиці";
    } else if (caseWord === "genialnmiszev") {
      return "політиці";
    } else if (caseWord === "genialnmiszev") {
      return "політиці";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "політику";
    } else if (caseWord === "phantazmiszev") {
      return "політиці";
    } else if (caseWord === "phantazmiszev") {
      return "політиці";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "політику";
    } else if (caseWord === "vighisnyznahid") {
      return "політику";
    } else if (caseWord === "nathnennamiszev") {
      return "політиці";
    } else if (caseWord === "nathnennamiszev") {
      return "політиці";
    } else if (caseWord === "obmanmiszev") {
      return "політиці";
    } else if (caseWord === "obmanmiszev") {
      return "політиці";
    } else if (caseWord === "samoobmanmiszev") {
      return "політиці";
    } else if (caseWord === "samoobmanmiszev") {
      return "політиці";
    } else if (caseWord === "zalegnostrodov") {
      return "політики";
    } else if (caseWord === "meditacznahid") {
      return "політику";
    } else if (caseWord === "transormznahid") {
      return "політику";
    } else if (caseWord === "extremsituazorudn") {
      return "політикою";
    } else if (caseWord === "vuchavolarodov") {
      return "політики";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "політиці";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "політиці";
    } else if (caseWord === "tuskupravlinznahid") {
      return "політику";
    } else if (caseWord === "tuskupravlinznahid") {
      return "політику";
    } else if (caseWord === "narodgrodov") {
      return "політики";
    } else if (caseWord === "orgazmrodov") {
      return "політики";
    } else if (caseWord === "magiarodov") {
      return "політики";
    } else if (caseWord === "mafiaznahid") {
      return "політику";
    } else if (caseWord === "vladaznahid") {
      return "політику";
    } else if (caseWord === "manipulorudn") {
      return "політикою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "політику";
    } else if (caseWord === "onkologrodov") {
      return "політики";
    } else if (caseWord === "rozorenznahid") {
      return "політику";
    } else if (caseWord === "pogransutznahid") {
      return "політику";
    } else if (caseWord === "duhmiscev") {
      return "політиці";
    } else if (caseWord === "duhmiscev") {
      return "політиці";
    } else if (caseWord === "silvolimiscev") {
      return "політиці";
    } else if (caseWord === "silvolimiscev") {
      return "політиці";
    } else if (caseWord === "dushrodov") {
      return "політики";
    } else if (caseWord === "emozrodov") {
      return "політики";
    } else if (caseWord === "rodprogramrodov") {
      return "політики";
    } else if (caseWord === "sprsvitmisz") {
      return "політиці";
    } else if (caseWord === "sprsvitmisz") {
      return "політиці";
    } else if (caseWord === "zonacomfmisz") {
      return "політиці";
    } else if (caseWord === "zonacomfmisz") {
      return "політиці";
    } else if (caseWord === "spadkovistrodov") {
      return "політики";
    } else if (caseWord === "roduchmisz") {
      return "політиці";
    } else if (caseWord === "roduchmisz") {
      return "політиці";
    } else if (caseWord === "matyindividualmaty") {
      return "була в політиці";
    } else if (caseWord === "intelectmisz") {
      return "політиці";
    } else if (caseWord === "intelectmisz") {
      return "політиці";
    } else if (caseWord === "mislanalitmisz") {
      return "політиці";
    } else if (caseWord === "mislanalitmisz") {
      return "політиці";
    } else if (caseWord === "zvazkorudn") {
      return "політикою";
    } else if (caseWord === "kontaktnistorudn") {
      return "політикою";
    } else if (caseWord === "movaznahid") {
      return "політику";
    } else if (caseWord === "vzaemotochznahid") {
      return "політику";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "політику";
    } else if (caseWord === "pochuttamisz") {
      return "політиці";
    } else if (caseWord === "pochuttamisz") {
      return "політиці";
    } else if (caseWord === "sumpatmisz") {
      return "політиці";
    } else if (caseWord === "sumpatmisz") {
      return "політиці";
    } else if (caseWord === "garmonmisz") {
      return "політиці";
    } else if (caseWord === "garmonmisz") {
      return "політиці";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "політику";
    } else if (caseWord === "obrazkohanznahid") {
      return "політику";
    } else if (caseWord === "seksualnmisz") {
      return "політиці";
    } else if (caseWord === "seksualnmisz") {
      return "політиці";
    } else if (caseWord === "aktivnmisz") {
      return "політиці";
    } else if (caseWord === "aktivnmisz") {
      return "політиці";
    } else if (caseWord === "volyamisz") {
      return "політиці";
    } else if (caseWord === "volyamisz") {
      return "політиці";
    } else if (caseWord === "impulsrodov") {
      return "політики";
    } else if (caseWord === "musnmisz") {
      return "політиці";
    } else if (caseWord === "musnmisz") {
      return "політиці";
    } else {
      return "";
    }
  } else if (word === "Друзі") {
    if (caseWord === "rishuchmisz") {
      return "друзях";
    } else if (caseWord === "agresivmisz") {
      return "друзях";
    } else if (caseWord === "borotbaorudn") {
      return "друзями";
    } else if (caseWord === "konkurenzorudn") {
      return "друзями";
    } else if (caseWord === "neobachnmisz") {
      return "друзях";
    } else if (caseWord === "obmezenmisz") {
      return "друзях";
    } else if (caseWord === "stusnenrodov") {
      return "друзів";
    } else if (caseWord === "zakonymisz") {
      return "друзях";
    } else if (caseWord === "pravularodov") {
      return "друзів";
    } else if (caseWord === "konzentratmiszev") {
      return "друзях";
    } else if (caseWord === "vutrummiszev") {
      return "друзях";
    } else if (caseWord === "seriozrodov") {
      return "друзів";
    } else if (caseWord === "skupistmiszev") {
      return "друзях";
    } else if (caseWord === "zavzatmiszev") {
      return "друзях";
    } else if (caseWord === "borgorudn") {
      return "друзями";
    } else if (caseWord === "rozshurenrodov") {
      return "друзів";
    } else if (caseWord === "ghedristmiszev") {
      return "друзях";
    } else if (caseWord === "mudristmiszev") {
      return "друзях";
    } else if (caseWord === "spravedrodov") {
      return "друзів";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "друзях";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "друзях";
    } else if (caseWord === "luksbrendznahid") {
      return "друзів";
    } else if (caseWord === "zakordonomnazyv") {
      return "друзі";
    } else if (caseWord === "vukladannyarodov") {
      return "друзів";
    } else if (caseWord === "originalmiszev") {
      return "друзях";
    } else if (caseWord === "svobodamiszev") {
      return "друзях";
    } else if (caseWord === "spontanistmiszev") {
      return "друзях";
    } else if (caseWord === "neochikuvanrodov") {
      return "друзів";
    } else if (caseWord === "astrologrodov") {
      return "друзів";
    } else if (caseWord === "vidkruttyarodov") {
      return "друзів";
    } else if (caseWord === "informattehnologorudn") {
      return "друзями";
    } else if (caseWord === "fantastikrodov") {
      return "друзів";
    } else if (caseWord === "kosmosmiszev") {
      return "друзях";
    } else if (caseWord === "maibutnmiszev") {
      return "друзях";
    } else if (caseWord === "genialnmiszev") {
      return "друзях";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "друзів";
    } else if (caseWord === "phantazmiszev") {
      return "друзях";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "друзів";
    } else if (caseWord === "vighisnyznahid") {
      return "друзів";
    } else if (caseWord === "nathnennamiszev") {
      return "друзях";
    } else if (caseWord === "obmanmiszev") {
      return "друзях";
    } else if (caseWord === "samoobmanmiszev") {
      return "друзях";
    } else if (caseWord === "zalegnostrodov") {
      return "друзів";
    } else if (caseWord === "meditacznahid") {
      return "друзів";
    } else if (caseWord === "transormznahid") {
      return "друзів";
    } else if (caseWord === "extremsituazorudn") {
      return "друзями";
    } else if (caseWord === "vuchavolarodov") {
      return "друзів";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "друзях";
    } else if (caseWord === "tuskupravlinznahid") {
      return "друзів";
    } else if (caseWord === "tuskupravlinznahid") {
      return "друзів";
    } else if (caseWord === "narodgrodov") {
      return "друзів";
    } else if (caseWord === "orgazmrodov") {
      return "друзів";
    } else if (caseWord === "magiarodov") {
      return "друзів";
    } else if (caseWord === "mafiaznahid") {
      return "друзів";
    } else if (caseWord === "vladaznahid") {
      return "друзів";
    } else if (caseWord === "manipulorudn") {
      return "друзями";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "друзів";
    } else if (caseWord === "onkologrodov") {
      return "друзів";
    } else if (caseWord === "rozorenznahid") {
      return "друзів";
    } else if (caseWord === "pogransutznahid") {
      return "друзів";
    } else if (caseWord === "duhmiscev") {
      return "друзях";
    } else if (caseWord === "silvolimiscev") {
      return "друзях";
    } else if (caseWord === "dushrodov") {
      return "друзів";
    } else if (caseWord === "emozrodov") {
      return "друзів";
    } else if (caseWord === "rodprogramrodov") {
      return "друзів";
    } else if (caseWord === "sprsvitmisz") {
      return "друзях";
    } else if (caseWord === "zonacomfmisz") {
      return "друзях";
    } else if (caseWord === "spadkovistrodov") {
      return "друзів";
    } else if (caseWord === "roduchmisz") {
      return "друзях";
    } else if (caseWord === "matyindividualmaty") {
      return "має друзів";
    } else if (caseWord === "intelectmisz") {
      return "друзях";
    } else if (caseWord === "mislanalitmisz") {
      return "друзях";
    } else if (caseWord === "zvazkorudn") {
      return "друзями";
    } else if (caseWord === "kontaktnistorudn") {
      return "друзями";
    } else if (caseWord === "movaznahid") {
      return "друзів";
    } else if (caseWord === "vzaemotochznahid") {
      return "друзів";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "друзів";
    } else if (caseWord === "pochuttamisz") {
      return "друзях";
    } else if (caseWord === "sumpatmisz") {
      return "друзях";
    } else if (caseWord === "garmonmisz") {
      return "друзях";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "друзів";
    } else if (caseWord === "obrazkohanznahid") {
      return "друзів";
    } else if (caseWord === "seksualnmisz") {
      return "друзях";
    } else if (caseWord === "aktivnmisz") {
      return "друзях";
    } else if (caseWord === "volyamisz") {
      return "друзях";
    } else if (caseWord === "impulsrodov") {
      return "друзів";
    } else if (caseWord === "musnmisz") {
      return "друзях";
    } else {
      return "";
    }
  } else if (word === "Колективна творчість") {
    if (caseWord === "rishuchmisz") {
      return "колективній творчості";
    } else if (caseWord === "agresivmisz") {
      return "колективній творчості";
    } else if (caseWord === "borotbaorudn") {
      return "колективною творчістю";
    } else if (caseWord === "konkurenzorudn") {
      return "колективною творчістю";
    } else if (caseWord === "neobachnmisz") {
      return "колективній творчості";
    } else if (caseWord === "obmezenmisz") {
      return "колективній творчості";
    } else if (caseWord === "stusnenrodov") {
      return "колективної творчості";
    } else if (caseWord === "zakonymisz") {
      return "колективній творчості";
    } else if (caseWord === "pravularodov") {
      return "колективної творчості";
    } else if (caseWord === "konzentratmiszev") {
      return "колективній творчості";
    } else if (caseWord === "vutrummiszev") {
      return "колективній творчості";
    } else if (caseWord === "seriozrodov") {
      return "колективної творчості";
    } else if (caseWord === "skupistmiszev") {
      return "колективній творчості";
    } else if (caseWord === "zavzatmiszev") {
      return "колективній творчості";
    } else if (caseWord === "borgorudn") {
      return "колективною творчістю";
    } else if (caseWord === "rozshurenrodov") {
      return "колективної творчості";
    } else if (caseWord === "ghedristmiszev") {
      return "колективній творчості";
    } else if (caseWord === "mudristmiszev") {
      return "колективній творчості";
    } else if (caseWord === "spravedrodov") {
      return "колективної творчості";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "колективній творчості";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "колективній творчості";
    } else if (caseWord === "luksbrendznahid") {
      return "колективну творчість";
    } else if (caseWord === "zakordonomnazyv") {
      return "колективна творчість";
    } else if (caseWord === "vukladannyarodov") {
      return "колективної творчості";
    } else if (caseWord === "originalmiszev") {
      return "колективній творчості";
    } else if (caseWord === "svobodamiszev") {
      return "колективній творчості";
    } else if (caseWord === "spontanistmiszev") {
      return "колективній творчості";
    } else if (caseWord === "neochikuvanrodov") {
      return "колективної творчості";
    } else if (caseWord === "astrologrodov") {
      return "колективної творчості";
    } else if (caseWord === "vidkruttyarodov") {
      return "колективної творчості";
    } else if (caseWord === "informattehnologorudn") {
      return "колективною творчістю";
    } else if (caseWord === "fantastikrodov") {
      return "колективної творчості";
    } else if (caseWord === "kosmosmiszev") {
      return "колективній творчості";
    } else if (caseWord === "maibutnmiszev") {
      return "колективній творчості";
    } else if (caseWord === "genialnmiszev") {
      return "колективній творчості";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "колективну творчість";
    } else if (caseWord === "phantazmiszev") {
      return "колективній творчості";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "колективну творчість";
    } else if (caseWord === "vighisnyznahid") {
      return "колективну творчість";
    } else if (caseWord === "nathnennamiszev") {
      return "колективній творчості";
    } else if (caseWord === "obmanmiszev") {
      return "колективній творчості";
    } else if (caseWord === "samoobmanmiszev") {
      return "колективній творчості";
    } else if (caseWord === "zalegnostrodov") {
      return "колективної творчості";
    } else if (caseWord === "meditacznahid") {
      return "колективну творчість";
    } else if (caseWord === "transormznahid") {
      return "колективну творчість";
    } else if (caseWord === "extremsituazorudn") {
      return "колективною творчістю";
    } else if (caseWord === "vuchavolarodov") {
      return "колективної творчості";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "колективній творчості";
    } else if (caseWord === "tuskupravlinznahid") {
      return "колективну творчість";
    } else if (caseWord === "tuskupravlinznahid") {
      return "колективну творчість";
    } else if (caseWord === "narodgrodov") {
      return "колективної творчості";
    } else if (caseWord === "orgazmrodov") {
      return "колективної творчості";
    } else if (caseWord === "magiarodov") {
      return "колективної творчості";
    } else if (caseWord === "mafiaznahid") {
      return "колективну творчість";
    } else if (caseWord === "vladaznahid") {
      return "колективну творчість";
    } else if (caseWord === "manipulorudn") {
      return "колективною творчістю";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "колективну творчість";
    } else if (caseWord === "onkologrodov") {
      return "колективної творчості";
    } else if (caseWord === "rozorenznahid") {
      return "колективну творчість";
    } else if (caseWord === "pogransutznahid") {
      return "колективну творчість";
    } else if (caseWord === "duhmiscev") {
      return "колективній творчості";
    } else if (caseWord === "silvolimiscev") {
      return "колективній творчості";
    } else if (caseWord === "dushrodov") {
      return "колективної творчості";
    } else if (caseWord === "emozrodov") {
      return "колективної творчості";
    } else if (caseWord === "rodprogramrodov") {
      return "колективної творчості";
    } else if (caseWord === "sprsvitmisz") {
      return "колективній творчості";
    } else if (caseWord === "zonacomfmisz") {
      return "колективній творчості";
    } else if (caseWord === "spadkovistrodov") {
      return "колективної творчості";
    } else if (caseWord === "roduchmisz") {
      return "колективній творчості";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась колективною творчістю";
    } else if (caseWord === "intelectmisz") {
      return "колективній творчості";
    } else if (caseWord === "mislanalitmisz") {
      return "колективній творчості";
    } else if (caseWord === "zvazkorudn") {
      return "колективною творчістю";
    } else if (caseWord === "kontaktnistorudn") {
      return "колективною творчістю";
    } else if (caseWord === "movaznahid") {
      return "колективну творчість";
    } else if (caseWord === "vzaemotochznahid") {
      return "колективну творчість";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "колективну творчість";
    } else if (caseWord === "pochuttamisz") {
      return "колективній творчості";
    } else if (caseWord === "sumpatmisz") {
      return "колективній творчості";
    } else if (caseWord === "garmonmisz") {
      return "колективній творчості";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "колективну творчість";
    } else if (caseWord === "obrazkohanznahid") {
      return "колективну творчість";
    } else if (caseWord === "seksualnmisz") {
      return "колективній творчості";
    } else if (caseWord === "aktivnmisz") {
      return "колективній творчості";
    } else if (caseWord === "volyamisz") {
      return "колективній творчості";
    } else if (caseWord === "impulsrodov") {
      return "колективної творчості";
    } else if (caseWord === "musnmisz") {
      return "колективній творчості";
    } else {
      return "";
    }
  } else if (word === "Єдинодумці") {
    if (caseWord === "rishuchmisz") {
      return "єдинодумцях";
    } else if (caseWord === "agresivmisz") {
      return "єдинодумцях";
    } else if (caseWord === "borotbaorudn") {
      return "єдинодумцями";
    } else if (caseWord === "konkurenzorudn") {
      return "єдинодумцями";
    } else if (caseWord === "neobachnmisz") {
      return "єдинодумцях";
    } else if (caseWord === "obmezenmisz") {
      return "єдинодумцях";
    } else if (caseWord === "stusnenrodov") {
      return "єдинодумців";
    } else if (caseWord === "zakonymisz") {
      return "єдинодумцях";
    } else if (caseWord === "pravularodov") {
      return "єдинодумців";
    } else if (caseWord === "konzentratmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "vutrummiszev") {
      return "єдинодумцях";
    } else if (caseWord === "seriozrodov") {
      return "єдинодумців";
    } else if (caseWord === "skupistmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "zavzatmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "borgorudn") {
      return "єдинодумцями";
    } else if (caseWord === "rozshurenrodov") {
      return "єдинодумців";
    } else if (caseWord === "ghedristmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "mudristmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "spravedrodov") {
      return "єдинодумців";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "єдинодумцях";
    } else if (caseWord === "luksbrendznahid") {
      return "єдинодумців";
    } else if (caseWord === "zakordonomnazyv") {
      return "єдинодумці";
    } else if (caseWord === "vukladannyarodov") {
      return "єдинодумців";
    } else if (caseWord === "originalmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "svobodamiszev") {
      return "єдинодумцях";
    } else if (caseWord === "spontanistmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "neochikuvanrodov") {
      return "єдинодумців";
    } else if (caseWord === "astrologrodov") {
      return "єдинодумців";
    } else if (caseWord === "vidkruttyarodov") {
      return "єдинодумців";
    } else if (caseWord === "informattehnologorudn") {
      return "єдинодумцями";
    } else if (caseWord === "fantastikrodov") {
      return "єдинодумців";
    } else if (caseWord === "kosmosmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "maibutnmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "genialnmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "єдинодумців";
    } else if (caseWord === "phantazmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "єдинодумців";
    } else if (caseWord === "vighisnyznahid") {
      return "єдинодумців";
    } else if (caseWord === "nathnennamiszev") {
      return "єдинодумцях";
    } else if (caseWord === "obmanmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "samoobmanmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "zalegnostrodov") {
      return "єдинодумців";
    } else if (caseWord === "meditacznahid") {
      return "єдинодумців";
    } else if (caseWord === "transormznahid") {
      return "єдинодумців";
    } else if (caseWord === "extremsituazorudn") {
      return "єдинодумцями";
    } else if (caseWord === "vuchavolarodov") {
      return "єдинодумців";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "єдинодумцях";
    } else if (caseWord === "tuskupravlinznahid") {
      return "єдинодумців";
    } else if (caseWord === "tuskupravlinznahid") {
      return "єдинодумців";
    } else if (caseWord === "narodgrodov") {
      return "єдинодумців";
    } else if (caseWord === "orgazmrodov") {
      return "єдинодумців";
    } else if (caseWord === "magiarodov") {
      return "єдинодумців";
    } else if (caseWord === "mafiaznahid") {
      return "єдинодумців";
    } else if (caseWord === "vladaznahid") {
      return "єдинодумців";
    } else if (caseWord === "manipulorudn") {
      return "єдинодумцями";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "єдинодумців";
    } else if (caseWord === "onkologrodov") {
      return "єдинодумців";
    } else if (caseWord === "rozorenznahid") {
      return "єдинодумців";
    } else if (caseWord === "pogransutznahid") {
      return "єдинодумців";
    } else if (caseWord === "duhmiscev") {
      return "єдинодумцях";
    } else if (caseWord === "silvolimiscev") {
      return "єдинодумцях";
    } else if (caseWord === "dushrodov") {
      return "єдинодумців";
    } else if (caseWord === "emozrodov") {
      return "єдинодумців";
    } else if (caseWord === "rodprogramrodov") {
      return "єдинодумців";
    } else if (caseWord === "sprsvitmisz") {
      return "єдинодумцях";
    } else if (caseWord === "zonacomfmisz") {
      return "єдинодумцях";
    } else if (caseWord === "spadkovistrodov") {
      return "єдинодумців";
    } else if (caseWord === "roduchmisz") {
      return "єдинодумцях";
    } else if (caseWord === "matyindividualmaty") {
      return "має єдинодумців";
    } else if (caseWord === "intelectmisz") {
      return "єдинодумцях";
    } else if (caseWord === "mislanalitmisz") {
      return "єдинодумцях";
    } else if (caseWord === "zvazkorudn") {
      return "єдинодумцями";
    } else if (caseWord === "kontaktnistorudn") {
      return "єдинодумцями";
    } else if (caseWord === "movaznahid") {
      return "єдинодумців";
    } else if (caseWord === "vzaemotochznahid") {
      return "єдинодумців";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "єдинодумців";
    } else if (caseWord === "pochuttamisz") {
      return "єдинодумцях";
    } else if (caseWord === "sumpatmisz") {
      return "єдинодумцях";
    } else if (caseWord === "garmonmisz") {
      return "єдинодумцях";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "єдинодумців";
    } else if (caseWord === "obrazkohanznahid") {
      return "єдинодумців";
    } else if (caseWord === "seksualnmisz") {
      return "єдинодумцях";
    } else if (caseWord === "aktivnmisz") {
      return "єдинодумцях";
    } else if (caseWord === "volyamisz") {
      return "єдинодумцях";
    } else if (caseWord === "impulsrodov") {
      return "єдинодумців";
    } else if (caseWord === "musnmisz") {
      return "єдинодумцях";
    } else {
      return "";
    }
  } else if (word === "Тусовка") {
    if (caseWord === "rishuchmisz") {
      return "тусовці";
    } else if (caseWord === "agresivmisz") {
      return "тусовці";
    } else if (caseWord === "borotbaorudn") {
      return "тусовкою";
    } else if (caseWord === "konkurenzorudn") {
      return "тусовкою";
    } else if (caseWord === "neobachnmisz") {
      return "тусовці";
    } else if (caseWord === "obmezenmisz") {
      return "тусовці";
    } else if (caseWord === "stusnenrodov") {
      return "тусовки";
    } else if (caseWord === "zakonymisz") {
      return "тусовці";
    } else if (caseWord === "pravularodov") {
      return "тусовки";
    } else if (caseWord === "konzentratmiszev") {
      return "тусовці";
    } else if (caseWord === "vutrummiszev") {
      return "тусовці";
    } else if (caseWord === "seriozrodov") {
      return "тусовки";
    } else if (caseWord === "skupistmiszev") {
      return "тусовці";
    } else if (caseWord === "zavzatmiszev") {
      return "тусовці";
    } else if (caseWord === "borgorudn") {
      return "тусовкою";
    } else if (caseWord === "rozshurenrodov") {
      return "тусовки";
    } else if (caseWord === "ghedristmiszev") {
      return "тусовці";
    } else if (caseWord === "mudristmiszev") {
      return "тусовці";
    } else if (caseWord === "spravedrodov") {
      return "тусовки";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "тусовці";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "тусовці";
    } else if (caseWord === "luksbrendznahid") {
      return "тусовку";
    } else if (caseWord === "zakordonomnazyv") {
      return "тусовка";
    } else if (caseWord === "vukladannyarodov") {
      return "тусовки";
    } else if (caseWord === "originalmiszev") {
      return "тусовці";
    } else if (caseWord === "svobodamiszev") {
      return "тусовці";
    } else if (caseWord === "spontanistmiszev") {
      return "тусовці";
    } else if (caseWord === "neochikuvanrodov") {
      return "тусовки";
    } else if (caseWord === "astrologrodov") {
      return "тусовки";
    } else if (caseWord === "vidkruttyarodov") {
      return "тусовки";
    } else if (caseWord === "informattehnologorudn") {
      return "тусовкою";
    } else if (caseWord === "fantastikrodov") {
      return "тусовки";
    } else if (caseWord === "kosmosmiszev") {
      return "тусовці";
    } else if (caseWord === "maibutnmiszev") {
      return "тусовці";
    } else if (caseWord === "genialnmiszev") {
      return "тусовці";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "тусовку";
    } else if (caseWord === "phantazmiszev") {
      return "тусовці";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "тусовку";
    } else if (caseWord === "vighisnyznahid") {
      return "тусовку";
    } else if (caseWord === "nathnennamiszev") {
      return "тусовці";
    } else if (caseWord === "obmanmiszev") {
      return "тусовці";
    } else if (caseWord === "samoobmanmiszev") {
      return "тусовці";
    } else if (caseWord === "zalegnostrodov") {
      return "тусовки";
    } else if (caseWord === "meditacznahid") {
      return "тусовку";
    } else if (caseWord === "transormznahid") {
      return "тусовку";
    } else if (caseWord === "extremsituazorudn") {
      return "тусовкою";
    } else if (caseWord === "vuchavolarodov") {
      return "тусовки";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "тусовці";
    } else if (caseWord === "tuskupravlinznahid") {
      return "тусовку";
    } else if (caseWord === "tuskupravlinznahid") {
      return "тусовку";
    } else if (caseWord === "narodgrodov") {
      return "тусовки";
    } else if (caseWord === "orgazmrodov") {
      return "тусовки";
    } else if (caseWord === "magiarodov") {
      return "тусовки";
    } else if (caseWord === "mafiaznahid") {
      return "тусовку";
    } else if (caseWord === "vladaznahid") {
      return "тусовку";
    } else if (caseWord === "manipulorudn") {
      return "тусовкою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "тусовку";
    } else if (caseWord === "onkologrodov") {
      return "тусовки";
    } else if (caseWord === "rozorenznahid") {
      return "тусовку";
    } else if (caseWord === "pogransutznahid") {
      return "тусовку";
    } else if (caseWord === "duhmiscev") {
      return "тусовці";
    } else if (caseWord === "silvolimiscev") {
      return "тусовці";
    } else if (caseWord === "dushrodov") {
      return "тусовки";
    } else if (caseWord === "emozrodov") {
      return "тусовки";
    } else if (caseWord === "rodprogramrodov") {
      return "тусовки";
    } else if (caseWord === "sprsvitmisz") {
      return "тусовці";
    } else if (caseWord === "zonacomfmisz") {
      return "тусовці";
    } else if (caseWord === "spadkovistrodov") {
      return "тусовки";
    } else if (caseWord === "roduchmisz") {
      return "тусовці";
    } else if (caseWord === "matyindividualmaty") {
      return "любить тусовку";
    } else if (caseWord === "intelectmisz") {
      return "тусовці";
    } else if (caseWord === "mislanalitmisz") {
      return "тусовці";
    } else if (caseWord === "zvazkorudn") {
      return "тусовкою";
    } else if (caseWord === "kontaktnistorudn") {
      return "тусовкою";
    } else if (caseWord === "movaznahid") {
      return "тусовку";
    } else if (caseWord === "vzaemotochznahid") {
      return "тусовку";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "тусовку";
    } else if (caseWord === "pochuttamisz") {
      return "тусовці";
    } else if (caseWord === "sumpatmisz") {
      return "тусовці";
    } else if (caseWord === "garmonmisz") {
      return "тусовці";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "тусовку";
    } else if (caseWord === "obrazkohanznahid") {
      return "тусовку";
    } else if (caseWord === "seksualnmisz") {
      return "тусовці";
    } else if (caseWord === "aktivnmisz") {
      return "тусовці";
    } else if (caseWord === "volyamisz") {
      return "тусовці";
    } else if (caseWord === "impulsrodov") {
      return "тусовки";
    } else if (caseWord === "musnmisz") {
      return "тусовці";
    } else {
      return "";
    }
  } else if (word === "Надії та плани") {
    if (caseWord === "rishuchmisz") {
      return "надіях та планах";
    } else if (caseWord === "agresivmisz") {
      return "надіях та планах";
    } else if (caseWord === "borotbaorudn") {
      return "надіями та планами";
    } else if (caseWord === "konkurenzorudn") {
      return "надіями та планами";
    } else if (caseWord === "neobachnmisz") {
      return "надіях та планах";
    } else if (caseWord === "obmezenmisz") {
      return "надіях та планах";
    } else if (caseWord === "stusnenrodov") {
      return "надій та планів";
    } else if (caseWord === "zakonymisz") {
      return "надіях та планах";
    } else if (caseWord === "pravularodov") {
      return "надій та планів";
    } else if (caseWord === "konzentratmiszev") {
      return "надіях та планах";
    } else if (caseWord === "vutrummiszev") {
      return "надіях та планах";
    } else if (caseWord === "seriozrodov") {
      return "надій та планів";
    } else if (caseWord === "skupistmiszev") {
      return "надіях та планах";
    } else if (caseWord === "zavzatmiszev") {
      return "надіях та планах";
    } else if (caseWord === "borgorudn") {
      return "надіями та планами";
    } else if (caseWord === "rozshurenrodov") {
      return "надій та планів";
    } else if (caseWord === "ghedristmiszev") {
      return "надіях та планах";
    } else if (caseWord === "mudristmiszev") {
      return "надіях та планах";
    } else if (caseWord === "spravedrodov") {
      return "надій та планів";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "надіях та планах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "надіях та планах";
    } else if (caseWord === "luksbrendznahid") {
      return "надії та плани";
    } else if (caseWord === "zakordonomnazyv") {
      return "надії та плани";
    } else if (caseWord === "vukladannyarodov") {
      return "надій та планів";
    } else if (caseWord === "originalmiszev") {
      return "надіях та планах";
    } else if (caseWord === "svobodamiszev") {
      return "надіях та планах";
    } else if (caseWord === "spontanistmiszev") {
      return "надіях та планах";
    } else if (caseWord === "neochikuvanrodov") {
      return "надій та планів";
    } else if (caseWord === "astrologrodov") {
      return "надій та планів";
    } else if (caseWord === "vidkruttyarodov") {
      return "надій та планів";
    } else if (caseWord === "informattehnologorudn") {
      return "надіями та планами";
    } else if (caseWord === "fantastikrodov") {
      return "надій та планів";
    } else if (caseWord === "kosmosmiszev") {
      return "надіях та планах";
    } else if (caseWord === "maibutnmiszev") {
      return "надіях та планах";
    } else if (caseWord === "genialnmiszev") {
      return "надіях та планах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "надії та плани";
    } else if (caseWord === "phantazmiszev") {
      return "надіях та планах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "надії та плани";
    } else if (caseWord === "vighisnyznahid") {
      return "надії та плани";
    } else if (caseWord === "nathnennamiszev") {
      return "надіях та планах";
    } else if (caseWord === "obmanmiszev") {
      return "надіях та планах";
    } else if (caseWord === "samoobmanmiszev") {
      return "надіях та планах";
    } else if (caseWord === "zalegnostrodov") {
      return "надій та планів";
    } else if (caseWord === "meditacznahid") {
      return "надії та плани";
    } else if (caseWord === "transormznahid") {
      return "надії та плани";
    } else if (caseWord === "extremsituazorudn") {
      return "надіями та планами";
    } else if (caseWord === "vuchavolarodov") {
      return "надій та планів";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "надіях та планах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "надії та плани";
    } else if (caseWord === "tuskupravlinznahid") {
      return "надії та плани";
    } else if (caseWord === "narodgrodov") {
      return "надій та планів";
    } else if (caseWord === "orgazmrodov") {
      return "надій та планів";
    } else if (caseWord === "magiarodov") {
      return "надій та планів";
    } else if (caseWord === "mafiaznahid") {
      return "надії та плани";
    } else if (caseWord === "vladaznahid") {
      return "надії та плани";
    } else if (caseWord === "manipulorudn") {
      return "надіями та планами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "надії та плани";
    } else if (caseWord === "onkologrodov") {
      return "надій та планів";
    } else if (caseWord === "rozorenznahid") {
      return "надії та плани";
    } else if (caseWord === "pogransutznahid") {
      return "надії та плани";
    } else if (caseWord === "duhmiscev") {
      return "надіях та планах";
    } else if (caseWord === "silvolimiscev") {
      return "надіях та планах";
    } else if (caseWord === "dushrodov") {
      return "надій та планів";
    } else if (caseWord === "emozrodov") {
      return "надій та планів";
    } else if (caseWord === "rodprogramrodov") {
      return "надій та планів";
    } else if (caseWord === "sprsvitmisz") {
      return "надіях та планах";
    } else if (caseWord === "zonacomfmisz") {
      return "надіях та планах";
    } else if (caseWord === "spadkovistrodov") {
      return "надій та планів";
    } else if (caseWord === "roduchmisz") {
      return "надіях та планах";
    } else if (caseWord === "matyindividualmaty") {
      return "будує надії на плани";
    } else if (caseWord === "intelectmisz") {
      return "надіях та планах";
    } else if (caseWord === "mislanalitmisz") {
      return "надіях та планах";
    } else if (caseWord === "zvazkorudn") {
      return "надіями та планами";
    } else if (caseWord === "kontaktnistorudn") {
      return "надіями та планами";
    } else if (caseWord === "movaznahid") {
      return "надії та плани";
    } else if (caseWord === "vzaemotochznahid") {
      return "надії та плани";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "надії та плани";
    } else if (caseWord === "pochuttamisz") {
      return "надіях та планах";
    } else if (caseWord === "sumpatmisz") {
      return "надіях та планах";
    } else if (caseWord === "garmonmisz") {
      return "надіях та планах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "надії та плани";
    } else if (caseWord === "obrazkohanznahid") {
      return "надії та плани";
    } else if (caseWord === "seksualnmisz") {
      return "надіях та планах";
    } else if (caseWord === "aktivnmisz") {
      return "надіях та планах";
    } else if (caseWord === "volyamisz") {
      return "надіях та планах";
    } else if (caseWord === "impulsrodov") {
      return "надій та планів";
    } else if (caseWord === "musnmisz") {
      return "надіях та планах";
    } else {
      return "";
    }
  } else if (word === "Майбутнє") {
    if (caseWord === "rishuchmisz") {
      return "майбутньому";
    } else if (caseWord === "agresivmisz") {
      return "майбутньому";
    } else if (caseWord === "borotbaorudn") {
      return "майбутнім";
    } else if (caseWord === "konkurenzorudn") {
      return "майбутнім";
    } else if (caseWord === "neobachnmisz") {
      return "майбутньому";
    } else if (caseWord === "obmezenmisz") {
      return "майбутньому";
    } else if (caseWord === "stusnenrodov") {
      return "майбутнього";
    } else if (caseWord === "zakonymisz") {
      return "майбутньому";
    } else if (caseWord === "pravularodov") {
      return "майбутнього";
    } else if (caseWord === "konzentratmiszev") {
      return "майбутньому";
    } else if (caseWord === "vutrummiszev") {
      return "майбутньому";
    } else if (caseWord === "seriozrodov") {
      return "майбутнього";
    } else if (caseWord === "skupistmiszev") {
      return "майбутньому";
    } else if (caseWord === "zavzatmiszev") {
      return "майбутньому";
    } else if (caseWord === "borgorudn") {
      return "майбутнім";
    } else if (caseWord === "rozshurenrodov") {
      return "майбутнього";
    } else if (caseWord === "ghedristmiszev") {
      return "майбутньому";
    } else if (caseWord === "mudristmiszev") {
      return "майбутньому";
    } else if (caseWord === "spravedrodov") {
      return "майбутнього";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "майбутньому";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "майбутньому";
    } else if (caseWord === "luksbrendznahid") {
      return "майбутнє";
    } else if (caseWord === "zakordonomnazyv") {
      return "майбутнє";
    } else if (caseWord === "vukladannyarodov") {
      return "майбутнього";
    } else if (caseWord === "originalmiszev") {
      return "майбутньому";
    } else if (caseWord === "svobodamiszev") {
      return "майбутньому";
    } else if (caseWord === "spontanistmiszev") {
      return "майбутньому";
    } else if (caseWord === "neochikuvanrodov") {
      return "майбутнього";
    } else if (caseWord === "astrologrodov") {
      return "майбутнього";
    } else if (caseWord === "vidkruttyarodov") {
      return "майбутнього";
    } else if (caseWord === "informattehnologorudn") {
      return "майбутнім";
    } else if (caseWord === "fantastikrodov") {
      return "майбутнього";
    } else if (caseWord === "kosmosmiszev") {
      return "майбутньому";
    } else if (caseWord === "maibutnmiszev") {
      return "майбутньому";
    } else if (caseWord === "genialnmiszev") {
      return "майбутньому";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "майбутнє";
    } else if (caseWord === "phantazmiszev") {
      return "майбутньому";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "майбутнє";
    } else if (caseWord === "vighisnyznahid") {
      return "майбутнє";
    } else if (caseWord === "nathnennamiszev") {
      return "майбутньому";
    } else if (caseWord === "obmanmiszev") {
      return "майбутньому";
    } else if (caseWord === "samoobmanmiszev") {
      return "майбутньому";
    } else if (caseWord === "zalegnostrodov") {
      return "майбутнього";
    } else if (caseWord === "meditacznahid") {
      return "майбутнє";
    } else if (caseWord === "transormznahid") {
      return "майбутнє";
    } else if (caseWord === "extremsituazorudn") {
      return "майбутнім";
    } else if (caseWord === "vuchavolarodov") {
      return "майбутнього";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "майбутньому";
    } else if (caseWord === "tuskupravlinznahid") {
      return "майбутнє";
    } else if (caseWord === "tuskupravlinznahid") {
      return "майбутнє";
    } else if (caseWord === "narodgrodov") {
      return "майбутнього";
    } else if (caseWord === "orgazmrodov") {
      return "майбутнього";
    } else if (caseWord === "magiarodov") {
      return "майбутнього";
    } else if (caseWord === "mafiaznahid") {
      return "майбутнє";
    } else if (caseWord === "vladaznahid") {
      return "майбутнє";
    } else if (caseWord === "manipulorudn") {
      return "майбутнім";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "майбутнє";
    } else if (caseWord === "onkologrodov") {
      return "майбутнього";
    } else if (caseWord === "rozorenznahid") {
      return "майбутнє";
    } else if (caseWord === "pogransutznahid") {
      return "майбутнє";
    } else if (caseWord === "duhmiscev") {
      return "майбутньому";
    } else if (caseWord === "silvolimiscev") {
      return "майбутньому";
    } else if (caseWord === "dushrodov") {
      return "майбутнього";
    } else if (caseWord === "emozrodov") {
      return "майбутнього";
    } else if (caseWord === "rodprogramrodov") {
      return "майбутнього";
    } else if (caseWord === "sprsvitmisz") {
      return "майбутньому";
    } else if (caseWord === "zonacomfmisz") {
      return "майбутньому";
    } else if (caseWord === "spadkovistrodov") {
      return "майбутнього";
    } else if (caseWord === "roduchmisz") {
      return "майбутньому";
    } else if (caseWord === "matyindividualmaty") {
      return "планує майбутнє";
    } else if (caseWord === "matyindividualmaty") {
      return "планує майбутнє";
    } else if (caseWord === "matyindividualmaty") {
      return "планує майбутнє";
    } else if (caseWord === "intelectmisz") {
      return "майбутньому";
    } else if (caseWord === "mislanalitmisz") {
      return "майбутньому";
    } else if (caseWord === "zvazkorudn") {
      return "майбутнім";
    } else if (caseWord === "kontaktnistorudn") {
      return "майбутнім";
    } else if (caseWord === "movaznahid") {
      return "майбутнє";
    } else if (caseWord === "vzaemotochznahid") {
      return "майбутнє";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "майбутнє";
    } else if (caseWord === "pochuttamisz") {
      return "майбутньому";
    } else if (caseWord === "sumpatmisz") {
      return "майбутньому";
    } else if (caseWord === "garmonmisz") {
      return "майбутньому";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "майбутнє";
    } else if (caseWord === "obrazkohanznahid") {
      return "майбутнє";
    } else if (caseWord === "seksualnmisz") {
      return "майбутньому";
    } else if (caseWord === "aktivnmisz") {
      return "майбутньому";
    } else if (caseWord === "volyamisz") {
      return "майбутньому";
    } else if (caseWord === "impulsrodov") {
      return "майбутнього";
    } else if (caseWord === "musnmisz") {
      return "майбутньому";
    } else {
      return "";
    }
  } else if (word === "Творчість") {
    if (caseWord === "rishuchmisz") {
      return "творчості";
    } else if (caseWord === "agresivmisz") {
      return "творчості";
    } else if (caseWord === "borotbaorudn") {
      return "творчістю";
    } else if (caseWord === "konkurenzorudn") {
      return "творчістю";
    } else if (caseWord === "neobachnmisz") {
      return "творчості";
    } else if (caseWord === "obmezenmisz") {
      return "творчості";
    } else if (caseWord === "stusnenrodov") {
      return "творчості";
    } else if (caseWord === "zakonymisz") {
      return "творчості";
    } else if (caseWord === "pravularodov") {
      return "творчості";
    } else if (caseWord === "konzentratmiszev") {
      return "творчості";
    } else if (caseWord === "vutrummiszev") {
      return "творчості";
    } else if (caseWord === "seriozrodov") {
      return "творчості";
    } else if (caseWord === "skupistmiszev") {
      return "творчості";
    } else if (caseWord === "zavzatmiszev") {
      return "творчості";
    } else if (caseWord === "borgorudn") {
      return "творчістю";
    } else if (caseWord === "rozshurenrodov") {
      return "творчості";
    } else if (caseWord === "ghedristmiszev") {
      return "творчості";
    } else if (caseWord === "mudristmiszev") {
      return "творчості";
    } else if (caseWord === "spravedrodov") {
      return "творчості";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "творчості";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "творчості";
    } else if (caseWord === "luksbrendznahid") {
      return "творчість";
    } else if (caseWord === "zakordonomnazyv") {
      return "творчість";
    } else if (caseWord === "vukladannyarodov") {
      return "творчості";
    } else if (caseWord === "originalmiszev") {
      return "творчості";
    } else if (caseWord === "svobodamiszev") {
      return "творчості";
    } else if (caseWord === "spontanistmiszev") {
      return "творчості";
    } else if (caseWord === "neochikuvanrodov") {
      return "творчості";
    } else if (caseWord === "astrologrodov") {
      return "творчості";
    } else if (caseWord === "vidkruttyarodov") {
      return "творчості";
    } else if (caseWord === "informattehnologorudn") {
      return "творчістю";
    } else if (caseWord === "fantastikrodov") {
      return "творчості";
    } else if (caseWord === "kosmosmiszev") {
      return "творчості";
    } else if (caseWord === "maibutnmiszev") {
      return "творчості";
    } else if (caseWord === "genialnmiszev") {
      return "творчості";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "творчість";
    } else if (caseWord === "phantazmiszev") {
      return "творчості";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "творчість";
    } else if (caseWord === "vighisnyznahid") {
      return "творчість";
    } else if (caseWord === "nathnennamiszev") {
      return "творчості";
    } else if (caseWord === "obmanmiszev") {
      return "творчості";
    } else if (caseWord === "samoobmanmiszev") {
      return "творчості";
    } else if (caseWord === "zalegnostrodov") {
      return "творчості";
    } else if (caseWord === "meditacznahid") {
      return "творчість";
    } else if (caseWord === "transormznahid") {
      return "творчість";
    } else if (caseWord === "extremsituazorudn") {
      return "творчістю";
    } else if (caseWord === "vuchavolarodov") {
      return "творчості";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "творчості";
    } else if (caseWord === "tuskupravlinznahid") {
      return "творчість";
    } else if (caseWord === "tuskupravlinznahid") {
      return "творчість";
    } else if (caseWord === "narodgrodov") {
      return "творчості";
    } else if (caseWord === "orgazmrodov") {
      return "творчості";
    } else if (caseWord === "magiarodov") {
      return "творчості";
    } else if (caseWord === "mafiaznahid") {
      return "творчість";
    } else if (caseWord === "vladaznahid") {
      return "творчість";
    } else if (caseWord === "manipulorudn") {
      return "творчістю";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "творчість";
    } else if (caseWord === "onkologrodov") {
      return "творчості";
    } else if (caseWord === "rozorenznahid") {
      return "творчість";
    } else if (caseWord === "pogransutznahid") {
      return "творчість";
    } else if (caseWord === "duhmiscev") {
      return "творчості";
    } else if (caseWord === "silvolimiscev") {
      return "творчості";
    } else if (caseWord === "dushrodov") {
      return "творчості";
    } else if (caseWord === "emozrodov") {
      return "творчості";
    } else if (caseWord === "rodprogramrodov") {
      return "творчості";
    } else if (caseWord === "sprsvitmisz") {
      return "творчості";
    } else if (caseWord === "zonacomfmisz") {
      return "творчості";
    } else if (caseWord === "spadkovistrodov") {
      return "творчості";
    } else if (caseWord === "roduchmisz") {
      return "творчості";
    } else if (caseWord === "matyindividualmaty") {
      return "займається творчістю";
    } else if (caseWord === "intelectmisz") {
      return "творчості";
    } else if (caseWord === "mislanalitmisz") {
      return "творчості";
    } else if (caseWord === "zvazkorudn") {
      return "творчістю";
    } else if (caseWord === "kontaktnistorudn") {
      return "творчістю";
    } else if (caseWord === "movaznahid") {
      return "творчість";
    } else if (caseWord === "vzaemotochznahid") {
      return "творчість";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "творчість";
    } else if (caseWord === "pochuttamisz") {
      return "творчості";
    } else if (caseWord === "sumpatmisz") {
      return "творчості";
    } else if (caseWord === "garmonmisz") {
      return "творчості";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "творчість";
    } else if (caseWord === "obrazkohanznahid") {
      return "творчість";
    } else if (caseWord === "seksualnmisz") {
      return "творчості";
    } else if (caseWord === "aktivnmisz") {
      return "творчості";
    } else if (caseWord === "volyamisz") {
      return "творчості";
    } else if (caseWord === "impulsrodov") {
      return "творчості";
    } else if (caseWord === "musnmisz") {
      return "творчості";
    } else {
      return "";
    }
  } else if (word === "Благодійність") {
    if (caseWord === "rishuchmisz") {
      return "благодійності";
    } else if (caseWord === "agresivmisz") {
      return "благодійності";
    } else if (caseWord === "borotbaorudn") {
      return "благодійністю";
    } else if (caseWord === "konkurenzorudn") {
      return "благодійністю";
    } else if (caseWord === "neobachnmisz") {
      return "благодійності";
    } else if (caseWord === "obmezenmisz") {
      return "благодійності";
    } else if (caseWord === "stusnenrodov") {
      return "благодійності";
    } else if (caseWord === "zakonymisz") {
      return "благодійності";
    } else if (caseWord === "pravularodov") {
      return "благодійності";
    } else if (caseWord === "konzentratmiszev") {
      return "благодійності";
    } else if (caseWord === "vutrummiszev") {
      return "благодійності";
    } else if (caseWord === "seriozrodov") {
      return "благодійності";
    } else if (caseWord === "skupistmiszev") {
      return "благодійності";
    } else if (caseWord === "zavzatmiszev") {
      return "благодійності";
    } else if (caseWord === "borgorudn") {
      return "благодійністю";
    } else if (caseWord === "rozshurenrodov") {
      return "благодійності";
    } else if (caseWord === "ghedristmiszev") {
      return "благодійності";
    } else if (caseWord === "mudristmiszev") {
      return "благодійності";
    } else if (caseWord === "spravedrodov") {
      return "благодійності";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "благодійності";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "благодійності";
    } else if (caseWord === "luksbrendznahid") {
      return "благодійність";
    } else if (caseWord === "zakordonomnazyv") {
      return "благодійність";
    } else if (caseWord === "vukladannyarodov") {
      return "благодійності";
    } else if (caseWord === "originalmiszev") {
      return "благодійності";
    } else if (caseWord === "svobodamiszev") {
      return "благодійності";
    } else if (caseWord === "spontanistmiszev") {
      return "благодійності";
    } else if (caseWord === "neochikuvanrodov") {
      return "благодійності";
    } else if (caseWord === "astrologrodov") {
      return "благодійності";
    } else if (caseWord === "vidkruttyarodov") {
      return "благодійності";
    } else if (caseWord === "informattehnologorudn") {
      return "благодійністю";
    } else if (caseWord === "fantastikrodov") {
      return "благодійності";
    } else if (caseWord === "kosmosmiszev") {
      return "благодійності";
    } else if (caseWord === "maibutnmiszev") {
      return "благодійності";
    } else if (caseWord === "genialnmiszev") {
      return "благодійності";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "благодійність";
    } else if (caseWord === "phantazmiszev") {
      return "благодійності";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "благодійність";
    } else if (caseWord === "vighisnyznahid") {
      return "благодійність";
    } else if (caseWord === "nathnennamiszev") {
      return "благодійності";
    } else if (caseWord === "obmanmiszev") {
      return "благодійності";
    } else if (caseWord === "samoobmanmiszev") {
      return "благодійності";
    } else if (caseWord === "zalegnostrodov") {
      return "благодійності";
    } else if (caseWord === "meditacznahid") {
      return "благодійність";
    } else if (caseWord === "transormznahid") {
      return "благодійність";
    } else if (caseWord === "extremsituazorudn") {
      return "благодійністю";
    } else if (caseWord === "vuchavolarodov") {
      return "благодійності";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "благодійності";
    } else if (caseWord === "tuskupravlinznahid") {
      return "благодійність";
    } else if (caseWord === "tuskupravlinznahid") {
      return "благодійність";
    } else if (caseWord === "narodgrodov") {
      return "благодійності";
    } else if (caseWord === "orgazmrodov") {
      return "благодійності";
    } else if (caseWord === "magiarodov") {
      return "благодійності";
    } else if (caseWord === "mafiaznahid") {
      return "благодійність";
    } else if (caseWord === "vladaznahid") {
      return "благодійність";
    } else if (caseWord === "manipulorudn") {
      return "благодійністю";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "благодійність";
    } else if (caseWord === "onkologrodov") {
      return "благодійності";
    } else if (caseWord === "rozorenznahid") {
      return "благодійність";
    } else if (caseWord === "pogransutznahid") {
      return "благодійність";
    } else if (caseWord === "duhmiscev") {
      return "благодійності";
    } else if (caseWord === "silvolimiscev") {
      return "благодійності";
    } else if (caseWord === "dushrodov") {
      return "благодійності";
    } else if (caseWord === "emozrodov") {
      return "благодійності";
    } else if (caseWord === "rodprogramrodov") {
      return "благодійності";
    } else if (caseWord === "sprsvitmisz") {
      return "благодійності";
    } else if (caseWord === "zonacomfmisz") {
      return "благодійності";
    } else if (caseWord === "spadkovistrodov") {
      return "благодійності";
    } else if (caseWord === "roduchmisz") {
      return "благодійності";
    } else if (caseWord === "matyindividualmaty") {
      return "займається благодійністю";
    } else if (caseWord === "intelectmisz") {
      return "благодійності";
    } else if (caseWord === "mislanalitmisz") {
      return "благодійності";
    } else if (caseWord === "zvazkorudn") {
      return "благодійністю";
    } else if (caseWord === "kontaktnistorudn") {
      return "благодійністю";
    } else if (caseWord === "movaznahid") {
      return "благодійність";
    } else if (caseWord === "vzaemotochznahid") {
      return "благодійність";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "благодійність";
    } else if (caseWord === "pochuttamisz") {
      return "благодійності";
    } else if (caseWord === "sumpatmisz") {
      return "благодійності";
    } else if (caseWord === "garmonmisz") {
      return "благодійності";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "благодійність";
    } else if (caseWord === "obrazkohanznahid") {
      return "благодійність";
    } else if (caseWord === "seksualnmisz") {
      return "благодійності";
    } else if (caseWord === "aktivnmisz") {
      return "благодійності";
    } else if (caseWord === "volyamisz") {
      return "благодійності";
    } else if (caseWord === "impulsrodov") {
      return "благодійності";
    } else if (caseWord === "musnmisz") {
      return "благодійності";
    } else {
      return "";
    }
  } else if (word === "Випробування долі") {
    if (caseWord === "rishuchmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "agresivmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "borotbaorudn") {
      return "випробуваннями долі";
    } else if (caseWord === "konkurenzorudn") {
      return "випробуваннями долі";
    } else if (caseWord === "neobachnmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "obmezenmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "stusnenrodov") {
      return "випробування долі";
    } else if (caseWord === "zakonymisz") {
      return "випробуваннях долі";
    } else if (caseWord === "pravularodov") {
      return "випробування долі";
    } else if (caseWord === "konzentratmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "vutrummiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "seriozrodov") {
      return "випробування долі";
    } else if (caseWord === "skupistmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "zavzatmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "borgorudn") {
      return "випробуваннями долі";
    } else if (caseWord === "rozshurenrodov") {
      return "випробування долі";
    } else if (caseWord === "ghedristmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "mudristmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "spravedrodov") {
      return "випробування долі";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "luksbrendznahid") {
      return "випробування долі";
    } else if (caseWord === "zakordonomnazyv") {
      return "випробування долі";
    } else if (caseWord === "vukladannyarodov") {
      return "випробування долі";
    } else if (caseWord === "originalmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "svobodamiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "spontanistmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "neochikuvanrodov") {
      return "випробування долі";
    } else if (caseWord === "astrologrodov") {
      return "випробування долі";
    } else if (caseWord === "vidkruttyarodov") {
      return "випробування долі";
    } else if (caseWord === "informattehnologorudn") {
      return "випробуваннями долі";
    } else if (caseWord === "fantastikrodov") {
      return "випробування долі";
    } else if (caseWord === "kosmosmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "maibutnmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "genialnmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "випробування долі";
    } else if (caseWord === "phantazmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "випробування долі";
    } else if (caseWord === "vighisnyznahid") {
      return "випробування долі";
    } else if (caseWord === "nathnennamiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "obmanmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "samoobmanmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "zalegnostrodov") {
      return "випробування долі";
    } else if (caseWord === "meditacznahid") {
      return "випробування долі";
    } else if (caseWord === "transormznahid") {
      return "випробування долі";
    } else if (caseWord === "extremsituazorudn") {
      return "випробуваннями долі";
    } else if (caseWord === "vuchavolarodov") {
      return "випробування долі";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "випробуваннях долі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "випробування долі";
    } else if (caseWord === "tuskupravlinznahid") {
      return "випробування долі";
    } else if (caseWord === "narodgrodov") {
      return "випробування долі";
    } else if (caseWord === "orgazmrodov") {
      return "випробування долі";
    } else if (caseWord === "magiarodov") {
      return "випробування долі";
    } else if (caseWord === "mafiaznahid") {
      return "випробування долі";
    } else if (caseWord === "vladaznahid") {
      return "випробування долі";
    } else if (caseWord === "manipulorudn") {
      return "випробуваннями долі";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "випробування долі";
    } else if (caseWord === "onkologrodov") {
      return "випробування долі";
    } else if (caseWord === "rozorenznahid") {
      return "випробування долі";
    } else if (caseWord === "pogransutznahid") {
      return "випробування долі";
    } else if (caseWord === "duhmiscev") {
      return "випробуваннях долі";
    } else if (caseWord === "silvolimiscev") {
      return "випробуваннях долі";
    } else if (caseWord === "dushrodov") {
      return "випробування долі";
    } else if (caseWord === "emozrodov") {
      return "випробування долі";
    } else if (caseWord === "rodprogramrodov") {
      return "випробування долі";
    } else if (caseWord === "sprsvitmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "zonacomfmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "spadkovistrodov") {
      return "випробування долі";
    } else if (caseWord === "roduchmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "matyindividualmaty") {
      return "мала випробування долі";
    } else if (caseWord === "intelectmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "mislanalitmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "zvazkorudn") {
      return "випробуваннями долі";
    } else if (caseWord === "kontaktnistorudn") {
      return "випробуваннями долі";
    } else if (caseWord === "movaznahid") {
      return "випробування долі";
    } else if (caseWord === "vzaemotochznahid") {
      return "випробування долі";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "випробування долі";
    } else if (caseWord === "pochuttamisz") {
      return "випробуваннях долі";
    } else if (caseWord === "sumpatmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "garmonmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "випробування долі";
    } else if (caseWord === "obrazkohanznahid") {
      return "випробування долі";
    } else if (caseWord === "seksualnmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "aktivnmisz") {
      return "випробуваннях долі";
    } else if (caseWord === "volyamisz") {
      return "випробуваннях долі";
    } else if (caseWord === "impulsrodov") {
      return "випробування долі";
    } else if (caseWord === "musnmisz") {
      return "випробуваннях долі";
    } else {
      return "";
    }
  } else if (word === "Приховані вороги") {
    if (caseWord === "rishuchmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "agresivmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "borotbaorudn") {
      return "прихованими ворогами";
    } else if (caseWord === "konkurenzorudn") {
      return "прихованими ворогами";
    } else if (caseWord === "neobachnmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "obmezenmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "stusnenrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "zakonymisz") {
      return "прихованих ворогах";
    } else if (caseWord === "pravularodov") {
      return "прихованих ворогів";
    } else if (caseWord === "konzentratmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "vutrummiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "seriozrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "skupistmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "zavzatmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "borgorudn") {
      return "прихованими ворогами";
    } else if (caseWord === "rozshurenrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "ghedristmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "mudristmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "spravedrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "luksbrendznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "zakordonomnazyv") {
      return "приховані вороги";
    } else if (caseWord === "vukladannyarodov") {
      return "прихованих ворогів";
    } else if (caseWord === "originalmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "svobodamiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "spontanistmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "neochikuvanrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "astrologrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "vidkruttyarodov") {
      return "прихованих ворогів";
    } else if (caseWord === "informattehnologorudn") {
      return "прихованими ворогами";
    } else if (caseWord === "fantastikrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "kosmosmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "maibutnmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "genialnmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "phantazmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "vighisnyznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "nathnennamiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "obmanmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "samoobmanmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "zalegnostrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "meditacznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "transormznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "extremsituazorudn") {
      return "прихованими ворогами";
    } else if (caseWord === "vuchavolarodov") {
      return "прихованих ворогів";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "прихованих ворогах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "tuskupravlinznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "narodgrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "orgazmrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "magiarodov") {
      return "прихованих ворогів";
    } else if (caseWord === "mafiaznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "vladaznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "manipulorudn") {
      return "прихованими ворогами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "прихованих ворогів";
    } else if (caseWord === "onkologrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "rozorenznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "pogransutznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "duhmiscev") {
      return "прихованих ворогах";
    } else if (caseWord === "silvolimiscev") {
      return "прихованих ворогах";
    } else if (caseWord === "dushrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "emozrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "rodprogramrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "sprsvitmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "zonacomfmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "spadkovistrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "roduchmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "matyindividualmaty") {
      return "мала прихованих ворогів";
    } else if (caseWord === "intelectmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "mislanalitmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "zvazkorudn") {
      return "прихованими ворогами";
    } else if (caseWord === "kontaktnistorudn") {
      return "прихованими ворогами";
    } else if (caseWord === "movaznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "vzaemotochznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "pochuttamisz") {
      return "прихованих ворогах";
    } else if (caseWord === "sumpatmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "garmonmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "obrazkohanznahid") {
      return "прихованих ворогів";
    } else if (caseWord === "seksualnmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "aktivnmisz") {
      return "прихованих ворогах";
    } else if (caseWord === "volyamisz") {
      return "прихованих ворогах";
    } else if (caseWord === "impulsrodov") {
      return "прихованих ворогів";
    } else if (caseWord === "musnmisz") {
      return "прихованих ворогах";
    } else {
      return "";
    }
  } else if (word === "Заточення") {
    if (caseWord === "rishuchmisz") {
      return "заточенні";
    } else if (caseWord === "agresivmisz") {
      return "заточенні";
    } else if (caseWord === "borotbaorudn") {
      return "заточенням";
    } else if (caseWord === "konkurenzorudn") {
      return "заточенням";
    } else if (caseWord === "neobachnmisz") {
      return "заточенні";
    } else if (caseWord === "obmezenmisz") {
      return "заточенні";
    } else if (caseWord === "stusnenrodov") {
      return "заточення";
    } else if (caseWord === "zakonymisz") {
      return "заточенні";
    } else if (caseWord === "pravularodov") {
      return "заточення";
    } else if (caseWord === "konzentratmiszev") {
      return "заточенні";
    } else if (caseWord === "vutrummiszev") {
      return "заточенні";
    } else if (caseWord === "seriozrodov") {
      return "заточення";
    } else if (caseWord === "skupistmiszev") {
      return "заточенні";
    } else if (caseWord === "zavzatmiszev") {
      return "заточенні";
    } else if (caseWord === "borgorudn") {
      return "заточенням";
    } else if (caseWord === "rozshurenrodov") {
      return "заточення";
    } else if (caseWord === "ghedristmiszev") {
      return "заточенні";
    } else if (caseWord === "mudristmiszev") {
      return "заточенні";
    } else if (caseWord === "spravedrodov") {
      return "заточення";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "заточенні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "заточенні";
    } else if (caseWord === "luksbrendznahid") {
      return "заточення";
    } else if (caseWord === "zakordonomnazyv") {
      return "заточення";
    } else if (caseWord === "vukladannyarodov") {
      return "заточення";
    } else if (caseWord === "originalmiszev") {
      return "заточенні";
    } else if (caseWord === "svobodamiszev") {
      return "заточенні";
    } else if (caseWord === "spontanistmiszev") {
      return "заточенні";
    } else if (caseWord === "neochikuvanrodov") {
      return "заточення";
    } else if (caseWord === "astrologrodov") {
      return "заточення";
    } else if (caseWord === "vidkruttyarodov") {
      return "заточення";
    } else if (caseWord === "informattehnologorudn") {
      return "заточенням";
    } else if (caseWord === "fantastikrodov") {
      return "заточення";
    } else if (caseWord === "kosmosmiszev") {
      return "заточенні";
    } else if (caseWord === "maibutnmiszev") {
      return "заточенні";
    } else if (caseWord === "genialnmiszev") {
      return "заточенні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "заточення";
    } else if (caseWord === "phantazmiszev") {
      return "заточенні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "заточення";
    } else if (caseWord === "vighisnyznahid") {
      return "заточення";
    } else if (caseWord === "nathnennamiszev") {
      return "заточенні";
    } else if (caseWord === "obmanmiszev") {
      return "заточенні";
    } else if (caseWord === "samoobmanmiszev") {
      return "заточенні";
    } else if (caseWord === "zalegnostrodov") {
      return "заточення";
    } else if (caseWord === "meditacznahid") {
      return "заточення";
    } else if (caseWord === "transormznahid") {
      return "заточення";
    } else if (caseWord === "extremsituazorudn") {
      return "заточенням";
    } else if (caseWord === "vuchavolarodov") {
      return "заточення";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "заточенні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "заточення";
    } else if (caseWord === "tuskupravlinznahid") {
      return "заточення";
    } else if (caseWord === "narodgrodov") {
      return "заточення";
    } else if (caseWord === "orgazmrodov") {
      return "заточення";
    } else if (caseWord === "magiarodov") {
      return "заточення";
    } else if (caseWord === "mafiaznahid") {
      return "заточення";
    } else if (caseWord === "vladaznahid") {
      return "заточення";
    } else if (caseWord === "manipulorudn") {
      return "заточенням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "заточення";
    } else if (caseWord === "onkologrodov") {
      return "заточення";
    } else if (caseWord === "rozorenznahid") {
      return "заточення";
    } else if (caseWord === "pogransutznahid") {
      return "заточення";
    } else if (caseWord === "duhmiscev") {
      return "заточенні";
    } else if (caseWord === "silvolimiscev") {
      return "заточенні";
    } else if (caseWord === "dushrodov") {
      return "заточення";
    } else if (caseWord === "emozrodov") {
      return "заточення";
    } else if (caseWord === "rodprogramrodov") {
      return "заточення";
    } else if (caseWord === "sprsvitmisz") {
      return "заточенні";
    } else if (caseWord === "zonacomfmisz") {
      return "заточенні";
    } else if (caseWord === "spadkovistrodov") {
      return "заточення";
    } else if (caseWord === "roduchmisz") {
      return "заточенні";
    } else if (caseWord === "matyindividualmaty") {
      return "можливо була в заточенні";
    } else if (caseWord === "intelectmisz") {
      return "заточенні";
    } else if (caseWord === "mislanalitmisz") {
      return "заточенні";
    } else if (caseWord === "zvazkorudn") {
      return "заточенням";
    } else if (caseWord === "kontaktnistorudn") {
      return "заточенням";
    } else if (caseWord === "movaznahid") {
      return "заточення";
    } else if (caseWord === "vzaemotochznahid") {
      return "заточення";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "заточення";
    } else if (caseWord === "pochuttamisz") {
      return "заточенні";
    } else if (caseWord === "sumpatmisz") {
      return "заточенні";
    } else if (caseWord === "garmonmisz") {
      return "заточенні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "заточення";
    } else if (caseWord === "obrazkohanznahid") {
      return "заточення";
    } else if (caseWord === "seksualnmisz") {
      return "заточенні";
    } else if (caseWord === "aktivnmisz") {
      return "заточенні";
    } else if (caseWord === "volyamisz") {
      return "заточенні";
    } else if (caseWord === "impulsrodov") {
      return "заточення";
    } else if (caseWord === "musnmisz") {
      return "заточенні";
    } else {
      return "";
    }
  } else if (word === "Хвороби") {
    if (caseWord === "rishuchmisz") {
      return "хворобах";
    } else if (caseWord === "agresivmisz") {
      return "хворобах";
    } else if (caseWord === "borotbaorudn") {
      return "хворобами";
    } else if (caseWord === "konkurenzorudn") {
      return "хворобами";
    } else if (caseWord === "neobachnmisz") {
      return "хворобах";
    } else if (caseWord === "obmezenmisz") {
      return "хворобах";
    } else if (caseWord === "stusnenrodov") {
      return "хвороб";
    } else if (caseWord === "zakonymisz") {
      return "хворобах";
    } else if (caseWord === "pravularodov") {
      return "хвороб";
    } else if (caseWord === "konzentratmiszev") {
      return "хворобах";
    } else if (caseWord === "vutrummiszev") {
      return "хворобах";
    } else if (caseWord === "seriozrodov") {
      return "хвороб";
    } else if (caseWord === "skupistmiszev") {
      return "хворобах";
    } else if (caseWord === "zavzatmiszev") {
      return "хворобах";
    } else if (caseWord === "borgorudn") {
      return "хворобами";
    } else if (caseWord === "rozshurenrodov") {
      return "хвороб";
    } else if (caseWord === "ghedristmiszev") {
      return "хворобах";
    } else if (caseWord === "mudristmiszev") {
      return "хворобах";
    } else if (caseWord === "spravedrodov") {
      return "хвороб";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "хворобах";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "хворобах";
    } else if (caseWord === "luksbrendznahid") {
      return "хвороби";
    } else if (caseWord === "zakordonomnazyv") {
      return "хвороби";
    } else if (caseWord === "vukladannyarodov") {
      return "хвороб";
    } else if (caseWord === "originalmiszev") {
      return "хворобах";
    } else if (caseWord === "svobodamiszev") {
      return "хворобах";
    } else if (caseWord === "spontanistmiszev") {
      return "хворобах";
    } else if (caseWord === "neochikuvanrodov") {
      return "хвороб";
    } else if (caseWord === "astrologrodov") {
      return "хвороб";
    } else if (caseWord === "vidkruttyarodov") {
      return "хвороб";
    } else if (caseWord === "informattehnologorudn") {
      return "хворобами";
    } else if (caseWord === "fantastikrodov") {
      return "хвороб";
    } else if (caseWord === "kosmosmiszev") {
      return "хворобах";
    } else if (caseWord === "maibutnmiszev") {
      return "хворобах";
    } else if (caseWord === "genialnmiszev") {
      return "хворобах";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "хвороби";
    } else if (caseWord === "phantazmiszev") {
      return "хворобах";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "хвороби";
    } else if (caseWord === "vighisnyznahid") {
      return "хвороби";
    } else if (caseWord === "nathnennamiszev") {
      return "хворобах";
    } else if (caseWord === "obmanmiszev") {
      return "хворобах";
    } else if (caseWord === "samoobmanmiszev") {
      return "хворобах";
    } else if (caseWord === "zalegnostrodov") {
      return "хвороб";
    } else if (caseWord === "meditacznahid") {
      return "хвороби";
    } else if (caseWord === "transormznahid") {
      return "хвороби";
    } else if (caseWord === "extremsituazorudn") {
      return "хворобами";
    } else if (caseWord === "vuchavolarodov") {
      return "хвороб";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "хворобах";
    } else if (caseWord === "tuskupravlinznahid") {
      return "хвороби";
    } else if (caseWord === "tuskupravlinznahid") {
      return "хвороби";
    } else if (caseWord === "narodgrodov") {
      return "хвороб";
    } else if (caseWord === "orgazmrodov") {
      return "хвороб";
    } else if (caseWord === "magiarodov") {
      return "хвороб";
    } else if (caseWord === "mafiaznahid") {
      return "хвороби";
    } else if (caseWord === "vladaznahid") {
      return "хвороби";
    } else if (caseWord === "manipulorudn") {
      return "хворобами";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "хвороби";
    } else if (caseWord === "onkologrodov") {
      return "хвороб";
    } else if (caseWord === "rozorenznahid") {
      return "хвороби";
    } else if (caseWord === "pogransutznahid") {
      return "хвороби";
    } else if (caseWord === "duhmiscev") {
      return "хворобах";
    } else if (caseWord === "silvolimiscev") {
      return "хворобах";
    } else if (caseWord === "dushrodov") {
      return "хвороб";
    } else if (caseWord === "emozrodov") {
      return "хвороб";
    } else if (caseWord === "rodprogramrodov") {
      return "хвороб";
    } else if (caseWord === "sprsvitmisz") {
      return "хворобах";
    } else if (caseWord === "zonacomfmisz") {
      return "хворобах";
    } else if (caseWord === "spadkovistrodov") {
      return "хвороб";
    } else if (caseWord === "roduchmisz") {
      return "хворобах";
    } else if (caseWord === "matyindividualmaty") {
      return "можливо мала хвороби";
    } else if (caseWord === "intelectmisz") {
      return "хворобах";
    } else if (caseWord === "mislanalitmisz") {
      return "хворобах";
    } else if (caseWord === "zvazkorudn") {
      return "хворобами";
    } else if (caseWord === "kontaktnistorudn") {
      return "хворобами";
    } else if (caseWord === "movaznahid") {
      return "хвороби";
    } else if (caseWord === "vzaemotochznahid") {
      return "хвороби";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "хвороби";
    } else if (caseWord === "pochuttamisz") {
      return "хворобах";
    } else if (caseWord === "sumpatmisz") {
      return "хворобах";
    } else if (caseWord === "garmonmisz") {
      return "хворобах";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "хвороби";
    } else if (caseWord === "obrazkohanznahid") {
      return "хвороби";
    } else if (caseWord === "seksualnmisz") {
      return "хворобах";
    } else if (caseWord === "aktivnmisz") {
      return "хворобах";
    } else if (caseWord === "volyamisz") {
      return "хворобах";
    } else if (caseWord === "impulsrodov") {
      return "хвороб";
    } else if (caseWord === "musnmisz") {
      return "хворобах";
    } else {
      return "";
    }
  } else if (word === "Нещасні випадки") {
    if (caseWord === "rishuchmisz") {
      return "нещасних випадках";
    } else if (caseWord === "agresivmisz") {
      return "нещасних випадках";
    } else if (caseWord === "borotbaorudn") {
      return "нещасними випадками";
    } else if (caseWord === "konkurenzorudn") {
      return "нещасними випадками";
    } else if (caseWord === "neobachnmisz") {
      return "нещасних випадках";
    } else if (caseWord === "obmezenmisz") {
      return "нещасних випадках";
    } else if (caseWord === "stusnenrodov") {
      return "нещасних випадків";
    } else if (caseWord === "zakonymisz") {
      return "нещасних випадках";
    } else if (caseWord === "pravularodov") {
      return "нещасних випадків";
    } else if (caseWord === "konzentratmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "vutrummiszev") {
      return "нещасних випадках";
    } else if (caseWord === "seriozrodov") {
      return "нещасних випадків";
    } else if (caseWord === "skupistmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "zavzatmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "borgorudn") {
      return "нещасними випадками";
    } else if (caseWord === "rozshurenrodov") {
      return "нещасних випадків";
    } else if (caseWord === "ghedristmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "mudristmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "spravedrodov") {
      return "нещасних випадків";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "нещасних випадках";
    } else if (caseWord === "luksbrendznahid") {
      return "нещасні випадки";
    } else if (caseWord === "zakordonomnazyv") {
      return "нещасні випадки";
    } else if (caseWord === "vukladannyarodov") {
      return "нещасних випадків";
    } else if (caseWord === "originalmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "svobodamiszev") {
      return "нещасних випадках";
    } else if (caseWord === "spontanistmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "neochikuvanrodov") {
      return "нещасних випадків";
    } else if (caseWord === "astrologrodov") {
      return "нещасних випадків";
    } else if (caseWord === "vidkruttyarodov") {
      return "нещасних випадків";
    } else if (caseWord === "informattehnologorudn") {
      return "нещасними випадками";
    } else if (caseWord === "fantastikrodov") {
      return "нещасних випадків";
    } else if (caseWord === "kosmosmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "maibutnmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "genialnmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "нещасні випадки";
    } else if (caseWord === "phantazmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "нещасні випадки";
    } else if (caseWord === "vighisnyznahid") {
      return "нещасні випадки";
    } else if (caseWord === "nathnennamiszev") {
      return "нещасних випадках";
    } else if (caseWord === "obmanmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "samoobmanmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "zalegnostrodov") {
      return "нещасних випадків";
    } else if (caseWord === "meditacznahid") {
      return "нещасні випадки";
    } else if (caseWord === "transormznahid") {
      return "нещасні випадки";
    } else if (caseWord === "extremsituazorudn") {
      return "нещасними випадками";
    } else if (caseWord === "vuchavolarodov") {
      return "нещасних випадків";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "нещасних випадках";
    } else if (caseWord === "tuskupravlinznahid") {
      return "нещасні випадки";
    } else if (caseWord === "tuskupravlinznahid") {
      return "нещасні випадки";
    } else if (caseWord === "narodgrodov") {
      return "нещасних випадків";
    } else if (caseWord === "orgazmrodov") {
      return "нещасних випадків";
    } else if (caseWord === "magiarodov") {
      return "нещасних випадків";
    } else if (caseWord === "mafiaznahid") {
      return "нещасні випадки";
    } else if (caseWord === "vladaznahid") {
      return "нещасні випадки";
    } else if (caseWord === "manipulorudn") {
      return "нещасними випадками";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "нещасні випадки";
    } else if (caseWord === "onkologrodov") {
      return "нещасних випадків";
    } else if (caseWord === "rozorenznahid") {
      return "нещасні випадки";
    } else if (caseWord === "pogransutznahid") {
      return "нещасні випадки";
    } else if (caseWord === "duhmiscev") {
      return "нещасних випадках";
    } else if (caseWord === "silvolimiscev") {
      return "нещасних випадках";
    } else if (caseWord === "dushrodov") {
      return "нещасних випадків";
    } else if (caseWord === "emozrodov") {
      return "нещасних випадків";
    } else if (caseWord === "rodprogramrodov") {
      return "нещасних випадків";
    } else if (caseWord === "sprsvitmisz") {
      return "нещасних випадках";
    } else if (caseWord === "zonacomfmisz") {
      return "нещасних випадках";
    } else if (caseWord === "spadkovistrodov") {
      return "нещасних випадків";
    } else if (caseWord === "roduchmisz") {
      return "нещасних випадках";
    } else if (caseWord === "matyindividualmaty") {
      return "можливо мала нещасні випадки";
    } else if (caseWord === "intelectmisz") {
      return "нещасних випадках";
    } else if (caseWord === "mislanalitmisz") {
      return "нещасних випадках";
    } else if (caseWord === "zvazkorudn") {
      return "нещасними випадками";
    } else if (caseWord === "kontaktnistorudn") {
      return "нещасними випадками";
    } else if (caseWord === "movaznahid") {
      return "нещасні випадки";
    } else if (caseWord === "vzaemotochznahid") {
      return "нещасні випадки";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "нещасні випадки";
    } else if (caseWord === "pochuttamisz") {
      return "нещасних випадках";
    } else if (caseWord === "sumpatmisz") {
      return "нещасних випадках";
    } else if (caseWord === "garmonmisz") {
      return "нещасних випадках";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "нещасні випадки";
    } else if (caseWord === "obrazkohanznahid") {
      return "нещасні випадки";
    } else if (caseWord === "seksualnmisz") {
      return "нещасних випадках";
    } else if (caseWord === "aktivnmisz") {
      return "нещасних випадках";
    } else if (caseWord === "volyamisz") {
      return "нещасних випадках";
    } else if (caseWord === "impulsrodov") {
      return "нещасних випадків";
    } else if (caseWord === "musnmisz") {
      return "нещасних випадках";
    } else {
      return "";
    }
  } else if (word === "Служіння") {
    if (caseWord === "rishuchmisz") {
      return "служінні";
    } else if (caseWord === "agresivmisz") {
      return "служінні";
    } else if (caseWord === "borotbaorudn") {
      return "служінням";
    } else if (caseWord === "konkurenzorudn") {
      return "служінням";
    } else if (caseWord === "neobachnmisz") {
      return "служінні";
    } else if (caseWord === "obmezenmisz") {
      return "служінні";
    } else if (caseWord === "stusnenrodov") {
      return "служіння";
    } else if (caseWord === "zakonymisz") {
      return "служінні";
    } else if (caseWord === "pravularodov") {
      return "служіння";
    } else if (caseWord === "konzentratmiszev") {
      return "служінні";
    } else if (caseWord === "vutrummiszev") {
      return "служінні";
    } else if (caseWord === "seriozrodov") {
      return "служіння";
    } else if (caseWord === "skupistmiszev") {
      return "служінні";
    } else if (caseWord === "zavzatmiszev") {
      return "служінні";
    } else if (caseWord === "borgorudn") {
      return "служінням";
    } else if (caseWord === "rozshurenrodov") {
      return "служіння";
    } else if (caseWord === "ghedristmiszev") {
      return "служінні";
    } else if (caseWord === "mudristmiszev") {
      return "служінні";
    } else if (caseWord === "spravedrodov") {
      return "служіння";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "служінні";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "служінні";
    } else if (caseWord === "luksbrendznahid") {
      return "служіння";
    } else if (caseWord === "zakordonomnazyv") {
      return "служіння";
    } else if (caseWord === "vukladannyarodov") {
      return "служіння";
    } else if (caseWord === "originalmiszev") {
      return "служінні";
    } else if (caseWord === "svobodamiszev") {
      return "служінні";
    } else if (caseWord === "spontanistmiszev") {
      return "служінні";
    } else if (caseWord === "neochikuvanrodov") {
      return "служіння";
    } else if (caseWord === "astrologrodov") {
      return "служіння";
    } else if (caseWord === "vidkruttyarodov") {
      return "служіння";
    } else if (caseWord === "informattehnologorudn") {
      return "служінням";
    } else if (caseWord === "fantastikrodov") {
      return "служіння";
    } else if (caseWord === "kosmosmiszev") {
      return "служінні";
    } else if (caseWord === "maibutnmiszev") {
      return "служінні";
    } else if (caseWord === "genialnmiszev") {
      return "служінні";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "служіння";
    } else if (caseWord === "phantazmiszev") {
      return "служінні";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "служіння";
    } else if (caseWord === "vighisnyznahid") {
      return "служіння";
    } else if (caseWord === "nathnennamiszev") {
      return "служінні";
    } else if (caseWord === "obmanmiszev") {
      return "служінні";
    } else if (caseWord === "samoobmanmiszev") {
      return "служінні";
    } else if (caseWord === "zalegnostrodov") {
      return "служіння";
    } else if (caseWord === "meditacznahid") {
      return "служіння";
    } else if (caseWord === "transormznahid") {
      return "служіння";
    } else if (caseWord === "extremsituazorudn") {
      return "служінням";
    } else if (caseWord === "vuchavolarodov") {
      return "служіння";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "служінні";
    } else if (caseWord === "tuskupravlinznahid") {
      return "служіння";
    } else if (caseWord === "tuskupravlinznahid") {
      return "служіння";
    } else if (caseWord === "narodgrodov") {
      return "служіння";
    } else if (caseWord === "orgazmrodov") {
      return "служіння";
    } else if (caseWord === "magiarodov") {
      return "служіння";
    } else if (caseWord === "mafiaznahid") {
      return "служіння";
    } else if (caseWord === "vladaznahid") {
      return "служіння";
    } else if (caseWord === "manipulorudn") {
      return "служінням";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "служіння";
    } else if (caseWord === "onkologrodov") {
      return "служіння";
    } else if (caseWord === "rozorenznahid") {
      return "служіння";
    } else if (caseWord === "pogransutznahid") {
      return "служіння";
    } else if (caseWord === "duhmiscev") {
      return "служінні";
    } else if (caseWord === "silvolimiscev") {
      return "служінні";
    } else if (caseWord === "dushrodov") {
      return "служіння";
    } else if (caseWord === "emozrodov") {
      return "служіння";
    } else if (caseWord === "rodprogramrodov") {
      return "служіння";
    } else if (caseWord === "sprsvitmisz") {
      return "служінні";
    } else if (caseWord === "zonacomfmisz") {
      return "служінні";
    } else if (caseWord === "spadkovistrodov") {
      return "служіння";
    } else if (caseWord === "roduchmisz") {
      return "служінні";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась служінням";
    } else if (caseWord === "intelectmisz") {
      return "служінні";
    } else if (caseWord === "mislanalitmisz") {
      return "служінні";
    } else if (caseWord === "zvazkorudn") {
      return "служінням";
    } else if (caseWord === "kontaktnistorudn") {
      return "служінням";
    } else if (caseWord === "movaznahid") {
      return "служіння";
    } else if (caseWord === "vzaemotochznahid") {
      return "служіння";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "служіння";
    } else if (caseWord === "pochuttamisz") {
      return "служінні";
    } else if (caseWord === "sumpatmisz") {
      return "служінні";
    } else if (caseWord === "garmonmisz") {
      return "служінні";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "служіння";
    } else if (caseWord === "obrazkohanznahid") {
      return "служіння";
    } else if (caseWord === "seksualnmisz") {
      return "служінні";
    } else if (caseWord === "aktivnmisz") {
      return "служінні";
    } else if (caseWord === "volyamisz") {
      return "служінні";
    } else if (caseWord === "impulsrodov") {
      return "служіння";
    } else if (caseWord === "musnmisz") {
      return "служінні";
    } else {
      return "";
    }
  } else if (word === "Нетрадиційна медицина") {
    if (caseWord === "rishuchmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "agresivmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "borotbaorudn") {
      return "нетрадиційною медициною";
    } else if (caseWord === "konkurenzorudn") {
      return "нетрадиційною медициною";
    } else if (caseWord === "neobachnmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "obmezenmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "stusnenrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "zakonymisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "pravularodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "konzentratmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "vutrummiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "seriozrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "skupistmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "zavzatmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "borgorudn") {
      return "нетрадиційною медициною";
    } else if (caseWord === "rozshurenrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "ghedristmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "mudristmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "spravedrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "luksbrendznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "zakordonomnazyv") {
      return "нетрадиційна медицина";
    } else if (caseWord === "vukladannyarodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "originalmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "svobodamiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "spontanistmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "neochikuvanrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "astrologrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "vidkruttyarodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "informattehnologorudn") {
      return "нетрадиційною медициною";
    } else if (caseWord === "fantastikrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "kosmosmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "maibutnmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "genialnmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "phantazmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "vighisnyznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "nathnennamiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "obmanmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "samoobmanmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "zalegnostrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "meditacznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "transormznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "extremsituazorudn") {
      return "нетрадиційною медициною";
    } else if (caseWord === "vuchavolarodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "tuskupravlinznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "tuskupravlinznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "narodgrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "orgazmrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "magiarodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "mafiaznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "vladaznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "manipulorudn") {
      return "нетрадиційною медициною";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "onkologrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "rozorenznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "pogransutznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "duhmiscev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "silvolimiscev") {
      return "нетрадиційній медицині";
    } else if (caseWord === "dushrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "emozrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "rodprogramrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "sprsvitmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "zonacomfmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "spadkovistrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "roduchmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась нетрадиційною медициною";
    } else if (caseWord === "intelectmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "mislanalitmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "zvazkorudn") {
      return "нетрадиційною медициною";
    } else if (caseWord === "kontaktnistorudn") {
      return "нетрадиційною медициною";
    } else if (caseWord === "movaznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "vzaemotochznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "pochuttamisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "sumpatmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "garmonmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "obrazkohanznahid") {
      return "нетрадиційну медицину";
    } else if (caseWord === "seksualnmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "aktivnmisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "volyamisz") {
      return "нетрадиційній медицині";
    } else if (caseWord === "impulsrodov") {
      return "нетрадиційної медицини";
    } else if (caseWord === "musnmisz") {
      return "нетрадиційній медицині";
    } else {
      return "";
    }
  } else if (word === "Акторська майстерність") {
    if (caseWord === "rishuchmisz") {
      return "акторській майстерності";
    } else if (caseWord === "agresivmisz") {
      return "акторській майстерності";
    } else if (caseWord === "borotbaorudn") {
      return "акторською майстерністю";
    } else if (caseWord === "konkurenzorudn") {
      return "акторською майстерністю";
    } else if (caseWord === "neobachnmisz") {
      return "акторській майстерності";
    } else if (caseWord === "obmezenmisz") {
      return "акторській майстерності";
    } else if (caseWord === "stusnenrodov") {
      return "акторської майстерності";
    } else if (caseWord === "zakonymisz") {
      return "акторській майстерності";
    } else if (caseWord === "pravularodov") {
      return "акторської майстерності";
    } else if (caseWord === "konzentratmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "vutrummiszev") {
      return "акторській майстерності";
    } else if (caseWord === "seriozrodov") {
      return "акторської майстерності";
    } else if (caseWord === "skupistmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "zavzatmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "borgorudn") {
      return "акторською майстерністю";
    } else if (caseWord === "rozshurenrodov") {
      return "акторської майстерності";
    } else if (caseWord === "ghedristmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "mudristmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "spravedrodov") {
      return "акторської майстерності";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "акторській майстерності";
    } else if (caseWord === "luksbrendznahid") {
      return "акторську майстерність";
    } else if (caseWord === "zakordonomnazyv") {
      return "акторська майстерність";
    } else if (caseWord === "vukladannyarodov") {
      return "акторської майстерності";
    } else if (caseWord === "originalmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "svobodamiszev") {
      return "акторській майстерності";
    } else if (caseWord === "spontanistmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "neochikuvanrodov") {
      return "акторської майстерності";
    } else if (caseWord === "astrologrodov") {
      return "акторської майстерності";
    } else if (caseWord === "vidkruttyarodov") {
      return "акторської майстерності";
    } else if (caseWord === "informattehnologorudn") {
      return "акторською майстерністю";
    } else if (caseWord === "fantastikrodov") {
      return "акторської майстерності";
    } else if (caseWord === "kosmosmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "maibutnmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "genialnmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "акторську майстерність";
    } else if (caseWord === "phantazmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "акторську майстерність";
    } else if (caseWord === "vighisnyznahid") {
      return "акторську майстерність";
    } else if (caseWord === "nathnennamiszev") {
      return "акторській майстерності";
    } else if (caseWord === "obmanmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "samoobmanmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "zalegnostrodov") {
      return "акторської майстерності";
    } else if (caseWord === "meditacznahid") {
      return "акторську майстерність";
    } else if (caseWord === "transormznahid") {
      return "акторську майстерність";
    } else if (caseWord === "extremsituazorudn") {
      return "акторською майстерністю";
    } else if (caseWord === "vuchavolarodov") {
      return "акторської майстерності";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "акторській майстерності";
    } else if (caseWord === "tuskupravlinznahid") {
      return "акторську майстерність";
    } else if (caseWord === "tuskupravlinznahid") {
      return "акторську майстерність";
    } else if (caseWord === "narodgrodov") {
      return "акторської майстерності";
    } else if (caseWord === "orgazmrodov") {
      return "акторської майстерності";
    } else if (caseWord === "magiarodov") {
      return "акторської майстерності";
    } else if (caseWord === "mafiaznahid") {
      return "акторську майстерність";
    } else if (caseWord === "vladaznahid") {
      return "акторську майстерність";
    } else if (caseWord === "manipulorudn") {
      return "акторською майстерністю";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "акторську майстерність";
    } else if (caseWord === "onkologrodov") {
      return "акторської майстерності";
    } else if (caseWord === "rozorenznahid") {
      return "акторську майстерність";
    } else if (caseWord === "pogransutznahid") {
      return "акторську майстерність";
    } else if (caseWord === "duhmiscev") {
      return "акторській майстерності";
    } else if (caseWord === "silvolimiscev") {
      return "акторській майстерності";
    } else if (caseWord === "dushrodov") {
      return "акторської майстерності";
    } else if (caseWord === "emozrodov") {
      return "акторської майстерності";
    } else if (caseWord === "rodprogramrodov") {
      return "акторської майстерності";
    } else if (caseWord === "sprsvitmisz") {
      return "акторській майстерності";
    } else if (caseWord === "zonacomfmisz") {
      return "акторській майстерності";
    } else if (caseWord === "spadkovistrodov") {
      return "акторської майстерності";
    } else if (caseWord === "roduchmisz") {
      return "акторській майстерності";
    } else if (caseWord === "matyindividualmaty") {
      return "володіла акторскою майстерністю";
    } else if (caseWord === "intelectmisz") {
      return "акторській майстерності";
    } else if (caseWord === "mislanalitmisz") {
      return "акторській майстерності";
    } else if (caseWord === "zvazkorudn") {
      return "акторською майстерністю";
    } else if (caseWord === "kontaktnistorudn") {
      return "акторською майстерністю";
    } else if (caseWord === "movaznahid") {
      return "акторську майстерність";
    } else if (caseWord === "vzaemotochznahid") {
      return "акторську майстерність";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "акторську майстерність";
    } else if (caseWord === "pochuttamisz") {
      return "акторській майстерності";
    } else if (caseWord === "sumpatmisz") {
      return "акторській майстерності";
    } else if (caseWord === "garmonmisz") {
      return "акторській майстерності";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "акторську майстерність";
    } else if (caseWord === "obrazkohanznahid") {
      return "акторську майстерність";
    } else if (caseWord === "seksualnmisz") {
      return "акторській майстерності";
    } else if (caseWord === "aktivnmisz") {
      return "акторській майстерності";
    } else if (caseWord === "volyamisz") {
      return "акторській майстерності";
    } else if (caseWord === "impulsrodov") {
      return "акторської майстерності";
    } else if (caseWord === "musnmisz") {
      return "акторській майстерності";
    } else {
      return "";
    }
  } else if (word === "Відчуття світу") {
    if (caseWord === "rishuchmisz") {
      return "відчутті світу";
    } else if (caseWord === "agresivmisz") {
      return "відчутті світу";
    } else if (caseWord === "borotbaorudn") {
      return "відчуттям світу";
    } else if (caseWord === "konkurenzorudn") {
      return "відчуттям світу";
    } else if (caseWord === "neobachnmisz") {
      return "відчутті світу";
    } else if (caseWord === "obmezenmisz") {
      return "відчутті світу";
    } else if (caseWord === "stusnenrodov") {
      return "відчуття світу";
    } else if (caseWord === "zakonymisz") {
      return "відчутті світу";
    } else if (caseWord === "pravularodov") {
      return "відчуття світу";
    } else if (caseWord === "konzentratmiszev") {
      return "відчутті світу";
    } else if (caseWord === "vutrummiszev") {
      return "відчутті світу";
    } else if (caseWord === "seriozrodov") {
      return "відчуття світу";
    } else if (caseWord === "skupistmiszev") {
      return "відчутті світу";
    } else if (caseWord === "zavzatmiszev") {
      return "відчутті світу";
    } else if (caseWord === "borgorudn") {
      return "відчуттям світу";
    } else if (caseWord === "rozshurenrodov") {
      return "відчуття світу";
    } else if (caseWord === "ghedristmiszev") {
      return "відчутті світу";
    } else if (caseWord === "mudristmiszev") {
      return "відчутті світу";
    } else if (caseWord === "spravedrodov") {
      return "відчуття світу";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "відчутті світу";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "відчутті світу";
    } else if (caseWord === "luksbrendznahid") {
      return "відчуття світу";
    } else if (caseWord === "zakordonomnazyv") {
      return "відчуття світу";
    } else if (caseWord === "vukladannyarodov") {
      return "відчуття світу";
    } else if (caseWord === "originalmiszev") {
      return "відчутті світу";
    } else if (caseWord === "svobodamiszev") {
      return "відчутті світу";
    } else if (caseWord === "spontanistmiszev") {
      return "відчутті світу";
    } else if (caseWord === "neochikuvanrodov") {
      return "відчуття світу";
    } else if (caseWord === "astrologrodov") {
      return "відчуття світу";
    } else if (caseWord === "vidkruttyarodov") {
      return "відчуття світу";
    } else if (caseWord === "informattehnologorudn") {
      return "відчуттям світу";
    } else if (caseWord === "fantastikrodov") {
      return "відчуття світу";
    } else if (caseWord === "kosmosmiszev") {
      return "відчутті світу";
    } else if (caseWord === "maibutnmiszev") {
      return "відчутті світу";
    } else if (caseWord === "genialnmiszev") {
      return "відчутті світу";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "відчуття світу";
    } else if (caseWord === "phantazmiszev") {
      return "відчутті світу";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "відчуття світу";
    } else if (caseWord === "vighisnyznahid") {
      return "відчуття світу";
    } else if (caseWord === "nathnennamiszev") {
      return "відчутті світу";
    } else if (caseWord === "obmanmiszev") {
      return "відчутті світу";
    } else if (caseWord === "samoobmanmiszev") {
      return "відчутті світу";
    } else if (caseWord === "zalegnostrodov") {
      return "відчуття світу";
    } else if (caseWord === "meditacznahid") {
      return "відчуття світу";
    } else if (caseWord === "transormznahid") {
      return "відчуття світу";
    } else if (caseWord === "extremsituazorudn") {
      return "відчуттям світу";
    } else if (caseWord === "vuchavolarodov") {
      return "відчуття світу";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "відчутті світу";
    } else if (caseWord === "tuskupravlinznahid") {
      return "відчуття світу";
    } else if (caseWord === "tuskupravlinznahid") {
      return "відчуття світу";
    } else if (caseWord === "narodgrodov") {
      return "відчуття світу";
    } else if (caseWord === "orgazmrodov") {
      return "відчуття світу";
    } else if (caseWord === "magiarodov") {
      return "відчуття світу";
    } else if (caseWord === "mafiaznahid") {
      return "відчуття світу";
    } else if (caseWord === "vladaznahid") {
      return "відчуття світу";
    } else if (caseWord === "manipulorudn") {
      return "відчуттям світу";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "відчуття світу";
    } else if (caseWord === "onkologrodov") {
      return "відчуття світу";
    } else if (caseWord === "rozorenznahid") {
      return "відчуття світу";
    } else if (caseWord === "pogransutznahid") {
      return "відчуття світу";
    } else if (caseWord === "duhmiscev") {
      return "відчутті світу";
    } else if (caseWord === "silvolimiscev") {
      return "відчутті світу";
    } else if (caseWord === "dushrodov") {
      return "відчуття світу";
    } else if (caseWord === "emozrodov") {
      return "відчуття світу";
    } else if (caseWord === "rodprogramrodov") {
      return "відчуття світу";
    } else if (caseWord === "sprsvitmisz") {
      return "відчутті світу";
    } else if (caseWord === "zonacomfmisz") {
      return "відчутті світу";
    } else if (caseWord === "spadkovistrodov") {
      return "відчуття світу";
    } else if (caseWord === "roduchmisz") {
      return "відчутті світу";
    } else if (caseWord === "matyindividualmaty") {
      return "має відчуття світу";
    } else if (caseWord === "intelectmisz") {
      return "відчутті світу";
    } else if (caseWord === "mislanalitmisz") {
      return "відчутті світу";
    } else if (caseWord === "zvazkorudn") {
      return "відчуттям світу";
    } else if (caseWord === "kontaktnistorudn") {
      return "відчуттям світу";
    } else if (caseWord === "movaznahid") {
      return "відчуття світу";
    } else if (caseWord === "vzaemotochznahid") {
      return "відчуття світу";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "відчуття світу";
    } else if (caseWord === "pochuttamisz") {
      return "відчутті світу";
    } else if (caseWord === "sumpatmisz") {
      return "відчутті світу";
    } else if (caseWord === "garmonmisz") {
      return "відчутті світу";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "відчуття світу";
    } else if (caseWord === "obrazkohanznahid") {
      return "відчуття світу";
    } else if (caseWord === "seksualnmisz") {
      return "відчутті світу";
    } else if (caseWord === "aktivnmisz") {
      return "відчутті світу";
    } else if (caseWord === "volyamisz") {
      return "відчутті світу";
    } else if (caseWord === "impulsrodov") {
      return "відчуття світу";
    } else if (caseWord === "musnmisz") {
      return "відчутті світу";
    } else {
      return "";
    }
  } else if (word === "Езотерика") {
    if (caseWord === "rishuchmisz") {
      return "езотериці";
    } else if (caseWord === "agresivmisz") {
      return "езотериці";
    } else if (caseWord === "borotbaorudn") {
      return "езотерикою";
    } else if (caseWord === "konkurenzorudn") {
      return "езотерикою";
    } else if (caseWord === "neobachnmisz") {
      return "езотериці";
    } else if (caseWord === "obmezenmisz") {
      return "езотериці";
    } else if (caseWord === "stusnenrodov") {
      return "езотерики";
    } else if (caseWord === "zakonymisz") {
      return "езотериці";
    } else if (caseWord === "pravularodov") {
      return "езотерики";
    } else if (caseWord === "konzentratmiszev") {
      return "езотериці";
    } else if (caseWord === "vutrummiszev") {
      return "езотериці";
    } else if (caseWord === "seriozrodov") {
      return "езотерики";
    } else if (caseWord === "skupistmiszev") {
      return "езотериці";
    } else if (caseWord === "zavzatmiszev") {
      return "езотериці";
    } else if (caseWord === "borgorudn") {
      return "езотерикою";
    } else if (caseWord === "rozshurenrodov") {
      return "езотерики";
    } else if (caseWord === "ghedristmiszev") {
      return "езотериці";
    } else if (caseWord === "mudristmiszev") {
      return "езотериці";
    } else if (caseWord === "spravedrodov") {
      return "езотерики";
    } else if (caseWord === "philosovsvitogladmiszev") {
      return "езотериці";
    } else if (caseWord === "duhovnzinnostimiszev") {
      return "езотериці";
    } else if (caseWord === "luksbrendznahid") {
      return "езотерику";
    } else if (caseWord === "zakordonomnazyv") {
      return "езотерика";
    } else if (caseWord === "vukladannyarodov") {
      return "езотерики";
    } else if (caseWord === "originalmiszev") {
      return "езотериці";
    } else if (caseWord === "svobodamiszev") {
      return "езотериці";
    } else if (caseWord === "spontanistmiszev") {
      return "езотериці";
    } else if (caseWord === "neochikuvanrodov") {
      return "езотерики";
    } else if (caseWord === "astrologrodov") {
      return "езотерики";
    } else if (caseWord === "vidkruttyarodov") {
      return "езотерики";
    } else if (caseWord === "informattehnologorudn") {
      return "езотерикою";
    } else if (caseWord === "fantastikrodov") {
      return "езотерики";
    } else if (caseWord === "kosmosmiszev") {
      return "езотериці";
    } else if (caseWord === "maibutnmiszev") {
      return "езотериці";
    } else if (caseWord === "genialnmiszev") {
      return "езотериці";
    } else if (caseWord === "ekstrasenszdibznahid") {
      return "езотерику";
    } else if (caseWord === "phantazmiszev") {
      return "езотериці";
    } else if (caseWord === "duhovnrozvutokznahid") {
      return "езотерику";
    } else if (caseWord === "vighisnyznahid") {
      return "езотерику";
    } else if (caseWord === "nathnennamiszev") {
      return "езотериці";
    } else if (caseWord === "obmanmiszev") {
      return "езотериці";
    } else if (caseWord === "samoobmanmiszev") {
      return "езотериці";
    } else if (caseWord === "zalegnostrodov") {
      return "езотерики";
    } else if (caseWord === "meditacznahid") {
      return "езотерику";
    } else if (caseWord === "transormznahid") {
      return "езотерику";
    } else if (caseWord === "extremsituazorudn") {
      return "езотерикою";
    } else if (caseWord === "vuchavolarodov") {
      return "езотерики";
    } else if (caseWord === "ruinivnasulmiszev") {
      return "езотериці";
    } else if (caseWord === "tuskupravlinznahid") {
      return "езотерику";
    } else if (caseWord === "tuskupravlinznahid") {
      return "езотерику";
    } else if (caseWord === "narodgrodov") {
      return "езотерики";
    } else if (caseWord === "orgazmrodov") {
      return "езотерики";
    } else if (caseWord === "magiarodov") {
      return "езотерики";
    } else if (caseWord === "mafiaznahid") {
      return "езотерику";
    } else if (caseWord === "vladaznahid") {
      return "езотерику";
    } else if (caseWord === "manipulorudn") {
      return "езотерикою";
    } else if (caseWord === "nediagnosthvorzhahid") {
      return "езотерику";
    } else if (caseWord === "onkologrodov") {
      return "езотерики";
    } else if (caseWord === "rozorenznahid") {
      return "езотерику";
    } else if (caseWord === "pogransutznahid") {
      return "езотерику";
    } else if (caseWord === "duhmiscev") {
      return "езотериці";
    } else if (caseWord === "silvolimiscev") {
      return "езотериці";
    } else if (caseWord === "dushrodov") {
      return "езотерики";
    } else if (caseWord === "emozrodov") {
      return "езотерики";
    } else if (caseWord === "rodprogramrodov") {
      return "езотерики";
    } else if (caseWord === "sprsvitmisz") {
      return "езотериці";
    } else if (caseWord === "zonacomfmisz") {
      return "езотериці";
    } else if (caseWord === "spadkovistrodov") {
      return "езотерики";
    } else if (caseWord === "roduchmisz") {
      return "езотериці";
    } else if (caseWord === "matyindividualmaty") {
      return "займалась езотерикою";
    } else if (caseWord === "intelectmisz") {
      return "езотериці";
    } else if (caseWord === "mislanalitmisz") {
      return "езотериці";
    } else if (caseWord === "zvazkorudn") {
      return "езотерикою";
    } else if (caseWord === "kontaktnistorudn") {
      return "езотерикою";
    } else if (caseWord === "movaznahid") {
      return "езотерику";
    } else if (caseWord === "vzaemotochznahid") {
      return "езотерику";
    } else if (caseWord === "zdatnistrosuminshznahid") {
      return "езотерику";
    } else if (caseWord === "pochuttamisz") {
      return "езотериці";
    } else if (caseWord === "sumpatmisz") {
      return "езотериці";
    } else if (caseWord === "garmonmisz") {
      return "езотериці";
    } else if (caseWord === "proyavlenvkoxanznahid") {
      return "езотерику";
    } else if (caseWord === "obrazkohanznahid") {
      return "езотерику";
    } else if (caseWord === "seksualnmisz") {
      return "езотериці";
    } else if (caseWord === "aktivnmisz") {
      return "езотериці";
    } else if (caseWord === "volyamisz") {
      return "езотериці";
    } else if (caseWord === "impulsrodov") {
      return "езотерики";
    } else if (caseWord === "musnmisz") {
      return "езотериці";
    } else {
      return "";
    }
  } else {
    return "";
  }
}
