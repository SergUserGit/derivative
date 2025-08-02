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

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Батьківський дім") {
    return "Людина отримує життєві сили в батьківському домі";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Батьки") {
    return "Людина отримує життєві сили від батьків";
  }

  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Переміщення") {
    return "Людина отримує життєві сили з переміщень";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Спадщина") {
    return "Людина отримує життєві сили від спадщини";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Домівка") {
    return "Людина отримує життєві сили у власній домівці";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Сімейність") {
    return "Людина отримує життєві сили в сімейності";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Родове коріння") {
    return "Людині дає життєві сили родове коріння";
  }
  if (
    keyOfPlanet === "Життєві сили" &&
    keysOfHouse === "Випадкові позашлюбні зв'язки"
  ) {
    return "Людина витрачає життєві сили на випадкові позашлюбні зв'язки";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Пристрасті") {
    return "Людина витрачає життєві сили на пристрасті";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Пригоди") {
    return "Людина витрачає життєві сили на пригоди";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Любов") {
    return "Людина витрачає життєві сили на любов, та отримує від любові їх";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Діти") {
    return "Людина витрачає життєві сили на дітей";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Розваги") {
    return "Людина витрачає життєві сили на розваги";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Ігри") {
    return "Людина витрачає життєві сили на ігри";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Дозвілля") {
    return "Людина витрачає життєві сили на дозвілля";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Здоров'я") {
    return "Людина витрачає життєві сили на здоров'я";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Набуті хвороби") {
    return "Набуті хвороби можуть забирати у людини життєві сили";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Трудова діяльність") {
    return "Людина витрачає життєві сили на трудову діяльність";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Робота") {
    return "Людина витрачає життєві сили на роботу";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Корисність") {
    return "Людина намагається бути корисною";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Борги") {
    return "Людина витрачає життєві сили на борги";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Домашні тварини") {
    return "Людина витрачає життєві сили на домашніх тварин";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Персонал") {
    return "Людина витрачає життєві сили на персонал";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Шлюб") {
    return "Людина вкладає життєві сили у шлюб";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Партнерство") {
    return "Людина вкладає життєві сили в партнерство";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Суди") {
    return "Людина може мати справи у судах";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Переродження") {
    return "Людина може набувати життєвих сил в переродженні";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Трансформація") {
    return "Людина може набувати життєвих сил у трансформації";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Спадщина") {
    return "Людина вкладає життєві сили, щоб отримати спадщину";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Великі чужі гроші") {
    return "Людина вкладає життєві сили, щоб отримати великі чужі гроші";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Магія") {
    return "Людина вкладає життєві сили у магію";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Гіпноз") {
    return "Людина вкладає життєві сили в гіпноз";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Секс") {
    return "Людина вкладає життєві сили в секс, або від сексу може отримувати життєві сили";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Народження") {
    return "Людина вкладає життєві сили для народження когось";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Великі проблеми") {
    return "Людина витрачає життєві сили для вирішення великих проблем";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Кризи та ризики") {
    return "Людині потрібні життєві сили для подолання криз";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Закордон") {
    return "Людина витрачає життєві сили для виїзду за кордон";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Неформальна влада") {
    return "Людина витрачає життєві сили щоб мати неформальну владу";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Духовний розвиток") {
    return "Людина вкладає життєві сили у власний духовний розвиток";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Філософія") {
    return "Людина вкладає життєві сили у філософію";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Релігіозність") {
    return "Людина вкладає життєві сили у релігіозність";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Вища освіта") {
    return "Людина вкладає життєві сили у вищу освіту";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Наука") {
    return "Людина вкладає життєві сили у науку";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Соціальний статус") {
    return "Людина вкладає життєві сили, щоб отримати соціальний статус";
  }
  if (
    keyOfPlanet === "Життєві сили" &&
    keysOfHouse === "Моральні та матеріальні блага"
  ) {
    return "Людина вкладає життєві сили в моральні та матеріальні блага";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Посада") {
    return "Людина вкладає життєві сили щоб отримати посаду";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Авторитет") {
    return "Людина вкладає життєві сили щоб отримати авторитет";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Репутація") {
    return "Людина вкладає життєві сили щоб отримати репутацію";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Політика") {
    return "Людина вкладає життєві сили у політику";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Друзі") {
    return "Людина отримує життєві сили від друзів";
  }
  if (
    keyOfPlanet === "Життєві сили" &&
    keysOfHouse === "Колективна творчість"
  ) {
    return "Людина вкладає життеві сили у колективну творчість";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Тусовка") {
    return "Людина вкладає життєві сили у тусовки";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Навчання") {
    return "Людина вкладає життєві сили у навчання";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Творчість") {
    return "Людина вкладає життєві сили у творчість";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Духовний розвиток") {
    return "Людина вкладає життєві сили у духовний розвиток";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Благодійність") {
    return "Людина вкладає життєві сили у благодійність";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Випробування долі") {
    return "Життєві сили потрібні щоб пройти випробування долі";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Хвороби") {
    return "Людина витрачає життєві сили на хвороби";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Нещасні випадки") {
    return "Нещасні випадки можуть забирати життєві сили людини";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Служіння") {
    return "Людина вкладає життєві сили у служіння";
  }
  if (
    keyOfPlanet === "Життєві сили" &&
    keysOfHouse === "Нетрадиційна медицина"
  ) {
    return "Людина вкладає життєві сили у нетрадиційну медицину";
  }
  if (
    keyOfPlanet === "Життєві сили" &&
    keysOfHouse === "Акторська майстерність"
  ) {
    return "Людина вкладає життєві сили в акторську майстерність";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Відчуття світу") {
    return "Людина яскраво відчуває світ";
  }
  if (keyOfPlanet === "Життєві сили" && keysOfHouse === "Езотерика") {
    return "Людина вкладає життєві сили в езотерику";
  }
  if (keyOfPlanet === "Дух" && keysOfHouse === "Я") {
    return "Людина проявляє дух";
  }
  if (
    keyOfPlanet === "Дух" &&
    keysOfHouse === "Моє проявлення себе в соціумі"
  ) {
    return "Людина проявляє дух у соціумі";
  }
  if (keyOfPlanet === "Дух" && keysOfHouse === "Мої починання") {
    return "Людина проявляє дух у власних починаннях";
  }
  if (keyOfPlanet === "Дух" && keysOfHouse === "Як мене соціум зчитує") {
    return "Соціум зчитує як людину сильну духом";
  }
  if (keyOfPlanet === "Дух" && keysOfHouse === "Блага") {
    return "Людина проявляє дух для отримання матеріальних благ";
  }

  if (keyOfPlanet === "Батько" && keysOfHouse === "Я") {
    return "Людина схожа на батька характером";
  }
  if (
    keyOfPlanet === "Батько" &&
    keysOfHouse === "Моє проявлення себе в соціумі"
  ) {
    return "По проявленню у соціумі людина схожа на батька";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Мій зовнішній вигляд") {
    return "Людина схожа на батька зовнішнім виглядом";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Мої починання") {
    return "Батько допомагав у моїх починаннях";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Як мене соціум зчитує") {
    return "Соціум зчитує мене так само, як мого батька";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Блага") {
    return "Батько любив матеріальні блага";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Матеріальні цінності") {
    return "Батько любив матеріальні цінності";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Фінанси") {
    return "Батько любив фінанси";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Мої гроші") {
    return "Батько займався власними грошима";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Мої статки") {
    return "Батько мав статки";
  }
  if (
    keyOfPlanet === "Батько" &&
    keysOfHouse ===
      "Ситуації заробітку грошей та накоплення ресурсів своєю працею"
  ) {
    return "Батько заробляв гроші своєю працею";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Інтелект") {
    return "Батько інтелектуал";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Навчання") {
    return "Батько любив навчатись";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Близьке оточення") {
    return "Батько у близькому оточенні";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Переміщення") {
    return "Батько либив переміщення";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Короткі подорожі") {
    return "Батько любив короткі подорожі";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Спадщина") {
    return "Батько мав спадщину";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Домівка") {
    return "Батько був главою в домівці";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Родове коріння") {
    return "Батько головний в родовому корінні";
  }
  if (
    keyOfPlanet === "Батько" &&
    keysOfHouse === "Випадкові позашлюбні зв'язки"
  ) {
    return "Батько опинявся у випадкових позашлюних зв'язках";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Пристрасті") {
    return "Батько пристрасний";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Пригоди") {
    return "Батько любив пригоди";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Любов") {
    return "Батько умів любити";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Діти") {
    return "Батько любить дітей";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Розваги") {
    return "Батько любив розваги";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Ігри") {
    return "Батько любив ігри";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Дозвілля") {
    return "Батько любив дозвілля";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Здоров'я") {
    return "Батько займався власним здоров'ям";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Набуті хвороби") {
    return "Набуті хвороби від батька";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Трудова діяльність") {
    return "Батько займався трудовою діяльністью";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Робота") {
    return "Батько займався роботою";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Корисність") {
    return "Батько приносив користь іншим";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Борги") {
    return "У батька були борги";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Домашні тварини") {
    return "У батька були домашні тварини";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Персонал") {
    return "У батька був персонал";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Шлюб") {
    return "Батько був у шлюбі";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Партнерство") {
    return "У батька були партнери";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Суди") {
    return "У батька можливо були судові справи";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Розлучення") {
    return "У батька можливо були розлучення";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Переродження") {
    return "Батько можливо проходив переродження";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Трансформація") {
    return "У батька можливо були трансформації";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Спадщина") {
    return "Спадщина від батька";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Великі чужі гроші") {
    return "Батько мав великі чужі гроші";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Магія") {
    return "Батько можливо займався магією";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Гіпноз") {
    return "Батько володів гіпнозом";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Секс") {
    return "Батько любив секс";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Великі проблеми") {
    return "У батька можливо були великі проблеми";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Кризи та ризики") {
    return "Батько переживав кризи";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Закордон") {
    return "Батько був за кордоном";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Неформальна влада") {
    return "У батька була неформальна влада";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Духовний розвиток") {
    return "Батько духовно розвинений";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Світогляд") {
    return "Батько мав власний світогляд";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Мислення") {
    return "Батько мислитель";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Філософія") {
    return "Батько філософ";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Релігіозність") {
    return "Батько релігіозний";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Мораль") {
    return "Батько мораліст";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Вища освіта") {
    return "Батько має вищу освіту";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Етика") {
    return "Батько етичний";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Наука") {
    return "Батько науковець";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Стратегія") {
    return "Батько стратег";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Соціальний статус") {
    return "У батька соціальний статус";
  }
  if (
    keyOfPlanet === "Батько" &&
    keysOfHouse === "Моральні та матеріальні блага"
  ) {
    return "Матеріальні та моральні блага у батька";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Посада") {
    return "Батько має посаду";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Авторитет") {
    return "Батько має авторитет";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Репутація") {
    return "Батько має репутацію";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Політика") {
    return "Батько у політиці";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Друзі") {
    return "Багато друзів у батька";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Колективна творчість") {
    return "Батько займався колективною творчістю";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Єдинодумці") {
    return "У батько була багато єдинодумців";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Тусовка") {
    return "Батько любив тусовки";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Навчання") {
    return "Батько займався навчанням";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Надії та плани") {
    return "Батько будував надії та плани на майбутнє";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Творчість") {
    return "Батько творчій";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Духовний розвиток") {
    return "Батько духовно розвинений";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Благодійність") {
    return "Батько займався благодійністю";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Випробування долі") {
    return "У батька були випробування долі";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Приховані вороги") {
    return "У батька були приховані вороги";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Заточення") {
    return "Батько був у заточенні";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Хвороби") {
    return "У батька були хвороби";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Нещасні випадки") {
    return "У батька були нещасні випадки";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Служіння") {
    return "Батько любив служіння";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Нетрадиційна медицина") {
    return "Батько любив нетрадиційну медицину";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Акторська майстерність") {
    return "Батько володів акторскою майстерністю";
  }
  if (keyOfPlanet === "Батько" && keysOfHouse === "Езотерика") {
    return "Батько езотерик";
  }

  if (keyOfPlanet === "Душа" && keysOfHouse === "Я") {
    return "Людина душевна";
  }
  if (
    keyOfPlanet === "Душа" &&
    keysOfHouse === "Моє проявлення себе в соціумі"
  ) {
    return "Людина проявляє себе душевно у соціумі";
  }
  if (keyOfPlanet === "Душа" && keysOfHouse === "Мої починання") {
    return "Людина вкладає душу у власні починання";
  }
  if (keyOfPlanet === "Душа" && keysOfHouse === "Як мене соціум зчитує") {
    return "Соціум зчитує як душевну людину";
  }
  if (keyOfPlanet === "Душа" && keysOfHouse === "Блага") {
    return "Блага повинні бути душевні";
  }
  if (keyOfPlanet === "Душа" && keysOfHouse === "Матеріальні цінності") {
    return "Людина вкладає душу у матеріальні цінності";
  }
  if (keyOfPlanet === "Душа" && keysOfHouse === "Фінанси") {
    return "Людина вкладає душу у фінанси";
  }
  if (keyOfPlanet === "Душа" && keysOfHouse === "Мої гроші") {
    return "Людина вкладає душу у власні гроші";
  }
  if (keyOfPlanet === "Душа" && keysOfHouse === "Мої статки") {
    return "Людина вкладає душу для накопичення власних статків";
  }

  return "";
}

function onClickBtnAsp() {
  let planetValue = planetName.options[planetName.value - 1].textContent;
  let houseValue = houseName.options[houseName.value - 1].textContent;

  const keysOfPlanet = getKeysOfPlanets();

  const keysOfHouses = getKeysOfHouses();

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

      const intert = getItnerpretation(strOne, strTwo);

      if (intert === "") {
        continue;
      }

      resString = resString + intert + "; ";
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
