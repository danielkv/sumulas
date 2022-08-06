export default {
  events: [
    {
      name: "Mete o louco",
      eventNumber: 1,
      category: "Scaled",
      timecap: 300,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "DB Hang Cluster", squares: 6, reps: 30 },
            { name: "DB Box Step Over", squares: 6, reps: 30 },
          ],
        },
        {
          exercices: [
            { name: "DB Hang Cluster", squares: 4, reps: 20 },
            { name: "DB Box Step Over", squares: 4, reps: 20 },
          ],
        },
        {
          exercices: [
            { name: "DB Hang Cluster", squares: 2, reps: 10 },
            { name: "DB Box Step Over", squares: 2, reps: 10 },
          ],
        },
      ],
    },
    {
      name: "Mete o louco",
      eventNumber: 1,
      category: "Intermediário",
      timecap: 300,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "DB Hang Cluster", squares: 6, reps: 30 },
            { name: "DB Box Step Over", squares: 6, reps: 30 },
          ],
        },
        {
          exercices: [
            { name: "DB Hang Cluster", squares: 4, reps: 20 },
            { name: "DB Box Step Over", squares: 4, reps: 20 },
          ],
        },
        {
          exercices: [
            { name: "DB Hang Cluster", squares: 2, reps: 10 },
            { name: "DB Box Step Over", squares: 2, reps: 10 },
          ],
        },
      ],
    },
    {
      name: "Mete o louco",
      eventNumber: 1,
      category: "RX Masculino",
      timecap: 300,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "DB Hang Cluster", reps: 21 },
            { name: "DB Box Step Over", reps: 21 },
          ],
        },
        {
          exercices: [
            { name: "DB Hang Cluster", reps: 15 },
            { name: "DB Box Step Over", reps: 15 },
          ],
        },
        {
          exercices: [
            { name: "DB Hang Cluster", reps: 9 },
            { name: "DB Box Step Over", reps: 9 },
          ],
        },
      ],
    },
    {
      name: "Mete o louco",
      eventNumber: 1,
      category: "RX Feminino",
      timecap: 300,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "DB Hang Cluster", reps: 21 },
            { name: "DB Box Step Over", reps: 21 },
          ],
        },
        {
          exercices: [
            { name: "DB Hang Cluster", reps: 15 },
            { name: "DB Box Step Over", reps: 15 },
          ],
        },
        {
          exercices: [
            { name: "DB Hang Cluster", reps: 9 },
            { name: "DB Box Step Over", reps: 9 },
          ],
        },
      ],
    },
    {
      name: "Quanto mais pesado melhor",
      eventNumber: 2,
      category: "Scaled",
      timecap: 240,
      type: "max_weight",
      rounds: [
        {
          name: "Atleta 1",
          exercices: [{ name: "Clean", squares: 3, reps: 1 }],
        },
        {
          name: "Atleta 2",
          exercices: [{ name: "Clean", squares: 3, reps: 1 }],
        },
        {
          name: "Atleta 2",
          exercices: [{ name: "Clean", squares: 3, reps: 1 }],
        },
      ],
    },
    {
      name: "Quanto mais pesado melhor",
      eventNumber: 2,
      category: "Intermediário",
      timecap: 240,
      type: "max_weight",
      rounds: [
        {
          name: "Atleta 1",
          exercices: [{ name: "Clean and Jerk", squares: 3, reps: 1 }],
        },
        {
          name: "Atleta 2",
          exercices: [{ name: "Clean and Jerk", squares: 3, reps: 1 }],
        },
        {
          name: "Atleta 2",
          exercices: [{ name: "Clean and Jerk", squares: 3, reps: 1 }],
        },
      ],
    },
    {
      name: "Quanto mais pesado melhor",
      eventNumber: 2,
      category: "RX masculino",
      timecap: 120,
      type: "max_weight",
      rounds: [
        {
          name: "Atleta",
          exercices: [{ name: "Clean and Jerk", squares: 3, reps: 1 }],
        },
      ],
    },
    {
      name: "Quanto mais pesado melhor",
      eventNumber: 2,
      category: "RX feminino",
      timecap: 120,
      type: "max_weight",
      rounds: [
        {
          name: "Atleta",
          exercices: [{ name: "Clean and Jerk", squares: 3, reps: 1 }],
        },
      ],
    },
    {
      name: "Tamo junto",
      eventNumber: 3,
      category: "Scaled",
      timecap: 480,
      type: "amrap",
      repeat: 6,
      rounds: [
        {
          exercices: [
            { name: "Single Under", reps: 50 },
            { name: "Leg Raises Syncro", reps: 10 },
            { name: "Front squat", reps: 10 },
            { name: "Wall walk Syncro", squares: 3, reps: 3 },
          ],
        },
      ],
    },
    {
      name: "Tamo junto",
      eventNumber: 3,
      category: "Intermediário",
      timecap: 480,
      type: "amrap",
      repeat: 6,
      rounds: [
        {
          exercices: [
            { name: "Double Under", reps: 50 },
            { name: "T2B Syncro", reps: 10 },
            { name: "Front squat", reps: 10 },
            { name: "Wall walk Syncro", squares: 3, reps: 3 },
          ],
        },
      ],
    },
    {
      name: "Tamo junto",
      eventNumber: 3,
      category: "RX Masculino",
      timecap: 480,
      type: "amrap",
      repeat: 6,
      rounds: [
        {
          exercices: [
            { name: "Double Under", reps: 50 },
            { name: "T2B", reps: 10 },
            { name: "Front squat", reps: 10 },
            { name: "Wall walk", squares: 3, reps: 3 },
          ],
        },
      ],
    },
    {
      name: "Tamo junto",
      eventNumber: 3,
      category: "RX Femino",
      timecap: 480,
      type: "amrap",
      repeat: 6,
      rounds: [
        {
          exercices: [
            { name: "Double Under", reps: 50 },
            { name: "T2B", reps: 10 },
            { name: "Front squat", reps: 10 },
            { name: "Wall walk", squares: 3, reps: 3 },
          ],
        },
      ],
    },
    {
      name: "O Braço tá On",
      eventNumber: 4,
      category: "Scaled",
      timecap: 600,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "Wall Ball", squares: 15, reps: 150 },
            { name: "Push Up", squares: 10, reps: 100 },
            { name: "Burpee Target", reps: 30 },
          ],
        },
      ],
    },
    {
      name: "O Braço tá On",
      eventNumber: 4,
      category: "Intermediário",
      timecap: 600,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "Wall Ball", squares: 15, reps: 150 },
            { name: "Pull Up", squares: 10, reps: 100 },
            { name: "HSPU", reps: 50 },
          ],
        },
      ],
    },
    {
      name: "O Braço tá On",
      eventNumber: 4,
      category: "RX masculino",
      timecap: 600,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "Wall Ball", reps: 60 },
            { name: "C2B", reps: 40 },
            { name: "HSPU", reps: 25 },
            { name: "Bar MU", reps: 10 },
          ],
        },
      ],
    },
    {
      name: "O Braço tá On",
      eventNumber: 4,
      category: "RX feminino",
      timecap: 600,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "Wall Ball", reps: 60 },
            { name: "C2B", reps: 40 },
            { name: "HSPU", reps: 25 },
            { name: "Bar MU", reps: 10 },
          ],
        },
      ],
    },
    {
      name: "Final de milhões",
      eventNumber: 5,
      category: "Scaled",
      timecap: 480,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "B O W Syncro", reps: 21 },
            { name: "Worm Squat", reps: 21 },
            { name: "Cal Row", squares: 3, reps: 9 },
          ],
        },
        {
          exercices: [
            { name: "B O W Syncro", reps: 15 },
            { name: "Worm Push Press", reps: 15 },
            { name: "Cal Row", squares: 3, reps: 9 },
          ],
        },
        {
          exercices: [
            { name: "B O W Syncro", squares: 3, reps: 9 },
            { name: "Worm Deadlift", squares: 3, reps: 9 },
            { name: "Cal Row", squares: 3, reps: 9 },
          ],
        },
      ],
    },
    {
      name: "Final de milhões",
      eventNumber: 5,
      category: "Intermediário",
      timecap: 480,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "B O W Syncro", reps: 21 },
            { name: "Worm Squat", reps: 21 },
            { name: "Cal Row", squares: 3, reps: 9 },
          ],
        },
        {
          exercices: [
            { name: "B O W Syncro", reps: 15 },
            { name: "Worm Thruster", reps: 15 },
            { name: "Cal Row", squares: 3, reps: 9 },
          ],
        },
        {
          exercices: [
            { name: "B O W Syncro", squares: 3, reps: 9 },
            { name: "Worm Clean and Jerk", squares: 3, reps: 9 },
            { name: "Cal Row", squares: 3, reps: 9 },
          ],
        },
      ],
    },
    {
      name: "Final de milhões",
      eventNumber: 5,
      category: "RX masculino",
      timecap: 480,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "Cal Row", reps: 10 },
            { name: "Burpee Over Row", reps: 10 },
            { name: "Thruster", reps: 10 },
          ],
        },
        {
          exercices: [
            { name: "Cal Row", reps: 10 },
            { name: "Burpee Over Row", reps: 10 },
            { name: "Snatch", reps: 10 },
          ],
        },
        {
          exercices: [
            { name: "Cal Row", reps: 10 },
            { name: "Burpee Over Row", reps: 10 },
            { name: "Clean", reps: 10 },
          ],
        },
      ],
    },
    {
      name: "Final de milhões",
      eventNumber: 5,
      category: "RX feminino",
      timecap: 480,
      type: "for_time",
      rounds: [
        {
          exercices: [
            { name: "Cal Row", reps: 10 },
            { name: "Burpee Over Row", reps: 10 },
            { name: "Thruster", reps: 10 },
          ],
        },
        {
          exercices: [
            { name: "Cal Row", reps: 10 },
            { name: "Burpee Over Row", reps: 10 },
            { name: "Snatch", reps: 10 },
          ],
        },
        {
          exercices: [
            { name: "Cal Row", reps: 10 },
            { name: "Burpee Over Row", reps: 10 },
            { name: "Clean", reps: 10 },
          ],
        },
      ],
    },
  ],
};
