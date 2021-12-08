const quizData = {
  title: 'Quiz title',
  description:
    'Lorem ipsum dolor sit amet,',  questions: [
    {
      id: 1,
      text: '600 - 544:',
      alternatives: [
        {
          id: 1,
          text: '55',
          isCorrect: false,
        },
        {
          id: 2,
          text: '56',
          isCorrect: true,
        },
        {
          id: 3,
          text: '57',
          isCorrect: false,
        },
        {
          id: 4,
          text: '65.5',
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: "which the nearest tens of 4221?",
      alternatives: [
        {
          id: 1,
          text: '4220',
          isCorrect: true,
        },
        {
          id: 2,
          text: '4250',
          isCorrect: false,
        },
        {
          id: 3,
          text: '4200',
          isCorrect: false,
        },
        {
          id: 4,
          text: '4000',
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: 'A, B, C or D?',
      img: 'https://www.crossfitamatak.com/wp-content/uploads/option-1.png',
      alternatives: [
        {
          id: 1,
          text: 'A',
          isCorrect: true,
        },
        {
          id: 2,
          text: 'B',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'C',
          isCorrect: false,
        },
        {
          id: 4,
          text: 'D',
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: 'Lorem or Ipsum?',
      img: 'https://www.multimediaxp.com/images/article_190508124638.1557333998.jpg',
      alternatives: [
        {
          id: 1,
          text: 'Lorem',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Ipsum',
          isCorrect: true,
        },
      ],
    },
  ],
  results: [
    {
      id: 1,
      range: {
        from: 0,
        to: 2,
      },
      title: 'You only got a few questions right.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      range: {
        from: 3,
        to: 3,
      },
      title: 'You got more than half the quiz right!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      range: {
        from: 4,
        to: 4,
      },
      title: 'Congratulations, you got everything right!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'result-example.jpg',
    },
  ],
};

export default quizData;
