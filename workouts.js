import wod1Masc from "./wod1-masc.js";
import wod1Fem from "./wod1-fem.js";
import wod2Masc from "./wod2-masc.js";
import wod2Fem from "./wod2-fem.js";
import wod3Masc from "./wod3-masc.js";
import wod3Fem from "./wod3-fem.js";
import wod4Masc from "./wod4-masc.js";
import wod4Fem from "./wod4-masc.js";

export default {
  events: [
    ...wod1Masc,
    ...wod1Fem,
    ...wod2Masc,
    ...wod2Fem,
    ...wod3Masc,
    ...wod3Fem,
    ...wod4Masc,
    ...wod4Fem,
  ],
};
