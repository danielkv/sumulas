import file from "./workouts.js";

const root = document.getElementById("root");

const workouts_type = {
  amrap: "AMRAP",
  for_time: "For Time",
  max_weight: "Carga máxima",
};

const SQUARE_DIVIDER = 5;
const EVENT_NUMBER_PREFIX = "WOD";

const PAGE_CONTAINER_CLASS = "page";

const EVENT_CONTAINER_CLASS = "eventContainer";

const HEADER_CONTAINER_CLASS = "headerContainer";
const HEADER_TITLE_CONTAINER_CLASS = "headerTitleContainer";
const HEADER_EVENT_NUMBER_CLASS = "eventNumber";
const HEADER_TITLE_CLASS = "eventTitle";
const HEADER_EVENT_CATEGORY_CLASS = "eventCategory";
const HEADER_TIMECAP_CLASS = "eventTimecap";
const HEADER_EVENT_TYPE_CLASS = "eventType";
const HEADER_SECONDARY_CLASS = "subHeader";
const HEADER_TEAM_NAME_CLASS = "teamName";
const HEADER_JUDGE_NAME_CLASS = "teamName";

const ROUND_CONTAINER_CLASS = "roundContainer";
const ROUND_TITLE_CLASS = "roundTitle";
const ALL_ROUNDS_CONTAINER_CLASS = "allRoundsContainer";

const ALL_EXERCICES_CONTAINER_CLASS = "allExerciceContainer";
const EXERCICE_CONTAINER_CLASS = "exerciceContainer";
const EXERCICE_SQUARE_COLUMN_CLASS = "exerciceSquareColumn";
const EXERCICE_SQUARE_CONTAINER_CLASS = "exerciceSquareContainer";
const EXERCICE_SQUARE_CLASS = "exerciceSquare";
const EXERCICE_SQUARE_NUMBER_CLASS = "exerciceSquareNumber";
const EXERCICE_SQUARE_MAX_WEIGHT_CLASS = "exerciceSquareMaxWeight";
const EXERCICE_TITLE_CLASS = "exerciceTitle";

const FOOTER_CONTAINER_CLASS = "footerContainer";
const FOOTER_RESULTS_CLASS = "results";
const FOOTER_SIGNATURE_CLASS = "signature";

const PAGE_BREAK = "pageBreak";
const UNDERLINED_CLASS = "underlined";

let ROUND_COUNT = 1;

function createElement(className, elementType = "div") {
  const element = document.createElement(elementType);
  element.classList.add(className);

  return element;
}

function build(file) {
  const pageElem = createElement(PAGE_CONTAINER_CLASS);

  file.events.forEach((event) => pageElem.appendChild(buildEvent(event)));

  root.appendChild(pageElem);
}

function buildEvent({ rounds, repeat = 1, ...header }) {
  ROUND_COUNT = 1;
  const eventElem = createElement(EVENT_CONTAINER_CLASS);
  const headerElem = buildHeader(header);

  const repeatedRoundContainerElem = buildRounds(rounds, repeat, header.type);

  const footerElem = buildFooter();

  eventElem.appendChild(headerElem);
  eventElem.appendChild(repeatedRoundContainerElem);
  eventElem.appendChild(footerElem);

  return eventElem;
}

function buildHeader(header) {
  const headerContainerElem = createElement(HEADER_CONTAINER_CLASS);
  const headerTitleContainerElem = createElement(HEADER_TITLE_CONTAINER_CLASS);
  const eventNumberElem = createElement(HEADER_EVENT_NUMBER_CLASS);
  const eventTitleElem = createElement(HEADER_TITLE_CLASS);
  const eventCategoryElem = createElement(HEADER_EVENT_CATEGORY_CLASS);
  const eventTimecapElem = createElement(HEADER_TIMECAP_CLASS);
  const eventTypeElem = createElement(HEADER_EVENT_TYPE_CLASS);
  const subHeaderElem = createElement(HEADER_SECONDARY_CLASS);
  const teamNameElem = createElement(HEADER_TEAM_NAME_CLASS);
  const judgeNameElem = createElement(HEADER_JUDGE_NAME_CLASS);

  teamNameElem.classList.add(UNDERLINED_CLASS);
  judgeNameElem.classList.add(UNDERLINED_CLASS);

  eventNumberElem.innerText = `${EVENT_NUMBER_PREFIX} ${header.eventNumber}`;
  eventTitleElem.innerText = header.name;
  eventCategoryElem.innerText = header.category;
  eventTimecapElem.innerText = `TC: ${header.timecap / 60}'`;
  eventTypeElem.innerText = workouts_type[header.type];
  teamNameElem.innerText = "Equipe:";
  judgeNameElem.innerText = "Judge:";

  headerTitleContainerElem.appendChild(eventNumberElem);
  if (header.name) headerTitleContainerElem.appendChild(eventTitleElem);
  headerTitleContainerElem.appendChild(eventCategoryElem);
  headerTitleContainerElem.appendChild(eventTypeElem);
  headerTitleContainerElem.appendChild(eventTimecapElem);

  subHeaderElem.appendChild(teamNameElem);
  subHeaderElem.appendChild(judgeNameElem);

  headerContainerElem.appendChild(headerTitleContainerElem);
  headerContainerElem.appendChild(subHeaderElem);

  return headerContainerElem;
}

function buildFooter() {
  const footerElem = createElement(FOOTER_CONTAINER_CLASS);

  const resultsElem = createElement(FOOTER_RESULTS_CLASS);
  const signatureElem = createElement(FOOTER_SIGNATURE_CLASS);

  resultsElem.classList.add(UNDERLINED_CLASS);
  signatureElem.classList.add(UNDERLINED_CLASS);

  resultsElem.innerText = "Resultado:";
  signatureElem.innerText = "Assinatura:";

  footerElem.appendChild(resultsElem);
  footerElem.appendChild(signatureElem);

  return footerElem;
}

function buildRounds(rounds, repeat, type) {
  const allRoundsContainerElem = createElement(ALL_ROUNDS_CONTAINER_CLASS);

  Array.from({ length: repeat }).forEach(() => {
    rounds.forEach((round, index) => {
      allRoundsContainerElem.appendChild(buildRound(round, type));
    });
  });

  return allRoundsContainerElem;
}

function buildRound(round, type) {
  const roundContainerElem = createElement(ROUND_CONTAINER_CLASS);
  const allExerciceContainerElem = createElement(
    ALL_EXERCICES_CONTAINER_CLASS,
    "table",
  );
  const roundTitleElem = createElement(ROUND_TITLE_CLASS);

  roundTitleElem.innerText = round.name || `Round ${ROUND_COUNT}`;

  round.exercices.forEach((exercice) => {
    allExerciceContainerElem.appendChild(buildExercice(exercice, type));
  });

  roundContainerElem.appendChild(roundTitleElem);
  roundContainerElem.appendChild(allExerciceContainerElem);

  ROUND_COUNT++;

  return roundContainerElem;
}

function buildExercice(exercice, type) {
  const rowElem = createElement(EXERCICE_CONTAINER_CLASS, "tr");
  const titleElem = createElement(EXERCICE_TITLE_CLASS, "td");
  const squareColumnElem = createElement(EXERCICE_SQUARE_COLUMN_CLASS, "td");
  const squareContainerElem = createElement(EXERCICE_SQUARE_CONTAINER_CLASS);
  const reps = exercice.reps;
  const units = exercice.units || "x";

  const countSquare = reps === "max"
    ? exercice.squares || SQUARE_DIVIDER
    : exercice.squares ||
      Math.ceil(exercice.reps / SQUARE_DIVIDER);

  const squareNumber = Math.ceil(exercice.reps / countSquare);

  const repsLabel = reps === "max" ? "MAX" : `${reps}${units}`;

  titleElem.innerText = `${repsLabel} ${exercice.name}`;

  Array.from({ length: countSquare }).forEach((_, index) => {
    const squareElem = createElement(EXERCICE_SQUARE_CLASS);
    if (type !== "max_weight") {
      const squareNumberElem = createElement(EXERCICE_SQUARE_NUMBER_CLASS);
      const number = exercice.squareNumber || Math.max(
        0,
        Math.min(squareNumber, exercice.reps - index * squareNumber),
      );

      if (!exercice.emptySquare) squareNumberElem.innerText = number;
      squareElem.appendChild(squareNumberElem);
    } else {
      squareElem.classList.add(EXERCICE_SQUARE_MAX_WEIGHT_CLASS);
    }

    squareContainerElem.appendChild(squareElem);
    squareColumnElem.appendChild(squareContainerElem);
  });

  rowElem.appendChild(titleElem);
  rowElem.appendChild(squareColumnElem);

  return rowElem;
}

build(file);
