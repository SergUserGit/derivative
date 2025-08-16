const generet = document.querySelector(".genegate_button");
const areaOne = document.querySelector(".text_one_generate");
const areaTwo = document.querySelector(".text_two_generate");

generet.addEventListener("click", generet_But);

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
  /*for (const key of keys) {
    console.log(typeof key);
  }*/
}

function getTextOfFunction(arrayCase, keys) {
  let curTextFunction = "";

  curTextFunction =
    curTextFunction + "function getTheCaseValue(word,case) {" + "\n";

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
