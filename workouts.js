import wod1Fem from "./wod1-fem.js";
import wod1Masc from "./wod1-masc.js";
import wod1Misto from "./wod1-misto.js";
import wod2Fem from "./wod2-fem.js";
import wod2Masc from "./wod2-masc.js";
import wod2Misto from "./wod2-misto.js";
import wod3Fem from "./wod3-fem.js";
import wod3Masc from "./wod3-masc.js";
import wod3Misto from "./wod3-misto.js";

function filterCategory(workouts, category, repeat = 1) {
  const categoryArr = category
    ? Array.isArray(category)
      ? category
      : [category]
    : null;
  const filtered = category
    ? workouts.filter((workout) => categoryArr.includes(workout.category))
    : workouts;

  const arr = new Array(repeat).fill(filtered).flat();

  arr.sort((a, b) => a.eventNumber - b.eventNumber);

  return arr;
}

export default {
  events: filterCategory(
    [
      ...wod1Fem,
      ...wod1Masc,
      ...wod1Misto,
      ...wod2Fem,
      ...wod2Masc,
      ...wod2Misto,
      ...wod3Fem,
      ...wod3Masc,
      ...wod3Misto,
    ],
    ["Intermediário Feminino"],
    11
  ),
};
