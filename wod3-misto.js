export default [
  {
    name: "WOD 3",
    eventNumber: 3,
    category: "RX Misto",
    timecap: 840,
    type: "for_time",
    rounds: [
      {
        name: "Carga máxima",
        type: "max_weight",
        exercices: [{ name: "Snatch", squares: 2 }],
      },
      {
        exercices: [{ name: "Run", reps: 800, units: "m", squares: 1 }],
      },
      {
        exercices: [
          { name: "Hang Squat Clean 60/45kg (Atleta A)", reps: 9, squares: 3 },
          { name: "Hang Squat Clean 60/45kg (Atleta B)", reps: 9, squares: 3 },
          { name: "STOH 60/45kg (Atleta A)", reps: 9, squares: 3 },
          { name: "STOH 60/45kg (Atleta B)", reps: 9, squares: 3 },
        ],
      },
      {
        exercices: [
          { name: "Hang Squat Clean 60/45kg (Atleta A)", reps: 6, squares: 3 },
          { name: "Hang Squat Clean 60/45kg (Atleta B)", reps: 6, squares: 3 },
          { name: "STOH 60/45kg (Atleta A)", reps: 6, squares: 3 },
          { name: "STOH 60/45kg (Atleta B)", reps: 6, squares: 3 },
        ],
      },
      {
        exercices: [
          { name: "Hang Squat Clean 60/45kg (Atleta A)", reps: 3, squares: 3 },
          { name: "Hang Squat Clean 60/45kg (Atleta B)", reps: 3, squares: 3 },
          { name: "STOH 60/45kg (Atleta A)", reps: 3, squares: 3 },
          { name: "STOH 60/45kg (Atleta B)", reps: 3, squares: 3 },
        ],
      },
      {
        name: "Carga máxima",
        type: "max_weight",
        exercices: [{ name: "Clean", squares: 2 }],
      },
    ],
  },
];
