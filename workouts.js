import wod1Fem from "./wod1-fem.js";
import wod1Masc from "./wod1-masc.js";
import wod2Fem from "./wod2-fem.js";
import wod2Masc from "./wod2-masc.js";
import wod3Fem from "./wod3-fem.js";
import wod3Masc from "./wod3-masc.js";
import wod4Fem from "./wod4-fem.js";
import wod4Masc from "./wod4-masc.js";

function filterCategory(workouts, category, repeat = 1) {
  const categoryArr = Array.isArray(category) ? category : [category];
  const filtered = workouts.filter((workout) =>
    categoryArr.includes(workout.category)
  );
  const arr = new Array(repeat).fill(filtered).flat();

  arr.sort((a, b) => a.eventNumber - b.eventNumber);

  return arr;
}

export default {
  events: filterCategory(
    [
      ...wod1Fem,
      ...wod1Masc,
      ...wod2Fem,
      ...wod2Masc,
      ...wod3Fem,
      ...wod3Masc,
      ...wod4Fem,
      ...wod4Masc,
    ],
    ["Scaled Masculino"],
    5,
  ),
};
