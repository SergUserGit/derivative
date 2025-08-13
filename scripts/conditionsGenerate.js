const generet = document.querySelector(".genegate_button");
const areaOne = document.querySelector(".text_one_generate");

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

  for (const key of keys) {
    console.log(typeof key);
  }
}
