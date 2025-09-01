const generet = document.querySelector(".genegate_button");
const areaOne = document.querySelector(".text_one_generate");
const areaTwo = document.querySelector(".text_two_generate");

generet.addEventListener("click", generet_But);

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

  return arrayCases;
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
    if (caseWord === "rodov") {
      return "себе";
    } else if (caseWord === "orudn") {
      return "собою";
    } else {
      return "";
    }
  } else if (word === "Моє проявлення себе в соціумі") {
    if (caseWord === "rodov") {
      return "моє проявлення себе в соціумі";
    } else if (caseWord === "orudn") {
      return "моїм проявленням в соціумі";
    } else {
      return "";
    }
  } else if (word === "Мій зовнішній вигляд") {
    if (caseWord === "rodov") {
      return "мій зовнішній вигляд";
    } else {
      return "";
    }
  } else if (word === "Мої починання") {
    if (caseWord === "rodov") {
      return "мої починання";
    } else {
      return "";
    }
  } else if (word === "Як мене соціум зчитує") {
    if (caseWord === "rodov") {
      return "те як мене соціум зчитує";
    } else {
      return "";
    }
  } else if (word === "Блага") {
    if (caseWord === "rodov") {
      return "блага";
    } else {
      return "";
    }
  } else if (word === "Матеріальні цінності") {
    if (caseWord === "rodov") {
      return "матеріальні цінності";
    } else {
      return "";
    }
  } else if (word === "Фінанси") {
    if (caseWord === "rodov") {
      return "фінанси";
    } else {
      return "";
    }
  } else if (word === "Мої гроші") {
    if (caseWord === "rodov") {
      return "власні гроші";
    } else {
      return "";
    }
  } else if (word === "Мої статки") {
    if (caseWord === "rodov") {
      return "власні статки";
    } else {
      return "";
    }
  } else if (
    word === "Ситуації заробітку грошей та накоплення ресурсів своєю працею"
  ) {
    if (caseWord === "rodov") {
      return "ситуації заробітку грошей та накоплення ресурсів своєю працею";
    } else {
      return "";
    }
  } else if (word === "Запас сил") {
    if (caseWord === "rodov") {
      return "запас сил";
    } else {
      return "";
    }
  } else if (word === "Інтелект") {
    if (caseWord === "rodov") {
      return "інтелект";
    } else {
      return "";
    }
  } else if (word === "Пізнання") {
    if (caseWord === "rodov") {
      return "пізнання";
    } else {
      return "";
    }
  } else if (word === "Навчання") {
    if (caseWord === "rodov") {
      return "навчання";
    } else if (caseWord === "rodov") {
      return "навчання";
    } else {
      return "";
    }
  } else if (word === "Близьке оточення") {
    if (caseWord === "rodov") {
      return "близьке оточення";
    } else {
      return "";
    }
  } else if (word === "Брати/сестри") {
    if (caseWord === "rodov") {
      return "братів/сестер";
    } else {
      return "";
    }
  } else if (word === "Переміщення") {
    if (caseWord === "rodov") {
      return "переміщення";
    } else {
      return "";
    }
  } else if (word === "Короткі подорожі") {
    if (caseWord === "rodov") {
      return "короткі подорожі";
    } else {
      return "";
    }
  } else if (word === "Батьківський дім") {
    if (caseWord === "rodov") {
      return "батьківський дім";
    } else {
      return "";
    }
  } else if (word === "Батьки") {
    if (caseWord === "rodov") {
      return "батьків";
    } else {
      return "";
    }
  } else if (word === "Спадщина") {
    if (caseWord === "rodov") {
      return "спадщину";
    } else if (caseWord === "rodov") {
      return "спадщину";
    } else {
      return "";
    }
  } else if (word === "Домівка") {
    if (caseWord === "rodov") {
      return "домівку";
    } else {
      return "";
    }
  } else if (word === "Сімейність") {
    if (caseWord === "rodov") {
      return "сімейність";
    } else {
      return "";
    }
  } else if (word === "Родове коріння") {
    if (caseWord === "rodov") {
      return "родове коріння";
    } else {
      return "";
    }
  } else if (word === "Дом серця") {
    if (caseWord === "rodov") {
      return "дом серця";
    } else {
      return "";
    }
  } else if (word === "Випадкові позашлюбні зв'язки") {
    if (caseWord === "rodov") {
      return "випадкові позашлюбні зв'язки";
    } else {
      return "";
    }
  } else if (word === "Пристрасті") {
    if (caseWord === "rodov") {
      return "пристрасті";
    } else {
      return "";
    }
  } else if (word === "Пригоди") {
    if (caseWord === "rodov") {
      return "пригоди";
    } else {
      return "";
    }
  } else if (word === "Любов") {
    if (caseWord === "rodov") {
      return "любов";
    } else {
      return "";
    }
  } else if (word === "Діти") {
    if (caseWord === "rodov") {
      return "дітей";
    } else {
      return "";
    }
  } else if (word === "Розваги") {
    if (caseWord === "rodov") {
      return "розваги";
    } else {
      return "";
    }
  } else if (word === "Ігри") {
    if (caseWord === "rodov") {
      return "ігри";
    } else {
      return "";
    }
  } else if (word === "Дозвілля") {
    if (caseWord === "rodov") {
      return "дозвілля";
    } else {
      return "";
    }
  } else if (word === "Здоров'я") {
    if (caseWord === "rodov") {
      return "здоров'я";
    } else {
      return "";
    }
  } else if (word === "Набуті хвороби") {
    if (caseWord === "rodov") {
      return "набуті хвороби";
    } else {
      return "";
    }
  } else if (word === "Трудова діяльність") {
    if (caseWord === "rodov") {
      return "трудову діяльність";
    } else {
      return "";
    }
  } else if (word === "Робота") {
    if (caseWord === "rodov") {
      return "роботу";
    } else {
      return "";
    }
  } else if (word === "Корисність") {
    if (caseWord === "rodov") {
      return "корисність";
    } else {
      return "";
    }
  } else if (word === "Борги") {
    if (caseWord === "rodov") {
      return "борги";
    } else {
      return "";
    }
  } else if (word === "Домашні тварини") {
    if (caseWord === "rodov") {
      return "домашніх тварин";
    } else {
      return "";
    }
  } else if (word === "Персонал") {
    if (caseWord === "rodov") {
      return "персонал";
    } else {
      return "";
    }
  } else if (word === "Шлюб") {
    if (caseWord === "rodov") {
      return "шлюб";
    } else {
      return "";
    }
  } else if (word === "Партнерство") {
    if (caseWord === "rodov") {
      return "партнерство";
    } else {
      return "";
    }
  } else if (word === "Суди") {
    if (caseWord === "rodov") {
      return "суди";
    } else {
      return "";
    }
  } else if (word === "Розлучення") {
    if (caseWord === "rodov") {
      return "розлучення";
    } else {
      return "";
    }
  } else if (word === "Переродження") {
    if (caseWord === "rodov") {
      return "переродження";
    } else {
      return "";
    }
  } else if (word === "Трансформація") {
    if (caseWord === "rodov") {
      return "трансформацію";
    } else {
      return "";
    }
  } else if (word === "Великі чужі гроші") {
    if (caseWord === "rodov") {
      return "великі чужі гроші";
    } else {
      return "";
    }
  } else if (word === "Магія") {
    if (caseWord === "rodov") {
      return "магію";
    } else {
      return "";
    }
  } else if (word === "Гіпноз") {
    if (caseWord === "rodov") {
      return "гіпноз";
    } else {
      return "";
    }
  } else if (word === "Секс") {
    if (caseWord === "rodov") {
      return "секс";
    } else {
      return "";
    }
  } else if (word === "Народження") {
    if (caseWord === "rodov") {
      return "народження";
    } else {
      return "";
    }
  } else if (word === "Великі проблеми") {
    if (caseWord === "rodov") {
      return "великі проблеми";
    } else {
      return "";
    }
  } else if (word === "Кризи та ризики") {
    if (caseWord === "rodov") {
      return "кризи та ризики";
    } else {
      return "";
    }
  } else if (word === "Закордон") {
    if (caseWord === "rodov") {
      return "закордон";
    } else {
      return "";
    }
  } else if (word === "Неформальна влада") {
    if (caseWord === "rodov") {
      return "неформальну владу";
    } else {
      return "";
    }
  } else if (word === "Духовний розвиток") {
    if (caseWord === "rodov") {
      return "духовний розвиток";
    } else if (caseWord === "rodov") {
      return "духовний розвиток";
    } else {
      return "";
    }
  } else if (word === "Світогляд") {
    if (caseWord === "rodov") {
      return "світогляд";
    } else {
      return "";
    }
  } else if (word === "Мислення") {
    if (caseWord === "rodov") {
      return "мислення";
    } else {
      return "";
    }
  } else if (word === "Філософія") {
    if (caseWord === "rodov") {
      return "філософію";
    } else {
      return "";
    }
  } else if (word === "Релігіозність") {
    if (caseWord === "rodov") {
      return "релігіозність";
    } else {
      return "";
    }
  } else if (word === "Мораль") {
    if (caseWord === "rodov") {
      return "мораль";
    } else {
      return "";
    }
  } else if (word === "Вища освіта") {
    if (caseWord === "rodov") {
      return "вищу освіту";
    } else {
      return "";
    }
  } else if (word === "Етика") {
    if (caseWord === "rodov") {
      return "етику";
    } else {
      return "";
    }
  } else if (word === "Наука") {
    if (caseWord === "rodov") {
      return "науку";
    } else {
      return "";
    }
  } else if (word === "Стратегія") {
    if (caseWord === "rodov") {
      return "стратегію";
    } else {
      return "";
    }
  } else if (word === "Соціальний статус") {
    if (caseWord === "rodov") {
      return "соціальний статус";
    } else {
      return "";
    }
  } else if (word === "Моральні та матеріальні блага") {
    if (caseWord === "rodov") {
      return "моральні та матеріальні блага";
    } else {
      return "";
    }
  } else if (word === "Посада") {
    if (caseWord === "rodov") {
      return "посаду";
    } else {
      return "";
    }
  } else if (word === "Авторитет") {
    if (caseWord === "rodov") {
      return "авторитет";
    } else {
      return "";
    }
  } else if (word === "Репутація") {
    if (caseWord === "rodov") {
      return "репутацію";
    } else {
      return "";
    }
  } else if (word === "Політика") {
    if (caseWord === "rodov") {
      return "політику";
    } else {
      return "";
    }
  } else if (word === "Друзі") {
    if (caseWord === "rodov") {
      return "друзів";
    } else {
      return "";
    }
  } else if (word === "Колективна творчість") {
    if (caseWord === "rodov") {
      return "колективну творчість";
    } else {
      return "";
    }
  } else if (word === "Єдинодумці") {
    if (caseWord === "rodov") {
      return "єдинодумців";
    } else {
      return "";
    }
  } else if (word === "Тусовка") {
    if (caseWord === "rodov") {
      return "тусовку";
    } else {
      return "";
    }
  } else if (word === "Надії та плани") {
    if (caseWord === "rodov") {
      return "надії та плани";
    } else {
      return "";
    }
  } else if (word === "Майбутнє") {
    if (caseWord === "rodov") {
      return "майбутнє";
    } else {
      return "";
    }
  } else if (word === "Творчість") {
    if (caseWord === "rodov") {
      return "творчість";
    } else {
      return "";
    }
  } else if (word === "Благодійність") {
    if (caseWord === "rodov") {
      return "благодійність";
    } else {
      return "";
    }
  } else if (word === "Випробування долі") {
    if (caseWord === "rodov") {
      return "випробування долі";
    } else {
      return "";
    }
  } else if (word === "Приховані вороги") {
    if (caseWord === "rodov") {
      return "прихованих ворогів";
    } else {
      return "";
    }
  } else if (word === "Заточення") {
    if (caseWord === "rodov") {
      return "заточення";
    } else {
      return "";
    }
  } else if (word === "Хвороби") {
    if (caseWord === "rodov") {
      return "хвороби";
    } else {
      return "";
    }
  } else if (word === "Нещасні випадки") {
    if (caseWord === "rodov") {
      return "нещасні випадки";
    } else {
      return "";
    }
  } else if (word === "Служіння") {
    if (caseWord === "rodov") {
      return "служіння";
    } else {
      return "";
    }
  } else if (word === "Нетрадиційна медицина") {
    if (caseWord === "rodov") {
      return "нетрадиційну медицину";
    } else {
      return "";
    }
  } else if (word === "Акторська майстерність") {
    if (caseWord === "rodov") {
      return "акторську майстерність";
    } else {
      return "";
    }
  } else if (word === "Відчуття світу") {
    if (caseWord === "rodov") {
      return "відчуття світу";
    } else {
      return "";
    }
  } else if (word === "Езотерика") {
    if (caseWord === "rodov") {
      return "езотерику";
    } else {
      return "";
    }
  } else {
    return "";
  }
}
