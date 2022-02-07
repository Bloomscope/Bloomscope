const quizData = {
  title: "First quarterly test",
  description: "Lorem ipsum dolor sit amet",
  img: 'start-example.jpg',
  time: 60, // Time in mins
  questions: [
    {
      id: 1,
      text: "600 - 544:",
      alternatives: [
        {
          id: 1,
          text: "55",
          isCorrect: false,
        },
        {
          id: 2,
          text: "56",
          isCorrect: true,
        },
        {
          id: 3,
          text: "57",
          isCorrect: false,
        },
        {
          id: 4,
          text: "65.5",
          isCorrect: false,
        },
      ],      
      // alternatives: [
      // ],
      // answer: '56',
      type: "text",
      explanation: "lol",
      parameters: [
        {        
          parameter: "Remember",
          marks: 10
        },
        {        
          parameter: "Create",
          marks: 9
        },
        {        
          parameter: "Apply",
          marks: 4
        },
      ],
    },
    {
      id: 2,
      text: "Which the nearest tens of 4221?",
      alternatives: [
        {
          id: 1,
          text: "4220",
          isCorrect: true,
        },
        {
          id: 2,
          text: "4250",
          isCorrect: false,
        },
        {
          id: 3,
          text: "4200",
          isCorrect: false,
        },
        {
          id: 4,
          text: "4000",
          isCorrect: false,
        },
      ],
         
      type: "choice",
      explanation: "lol",
      parameters: [
        {        
          parameter: "Remember",
          marks: 10
        },
        {        
          parameter: "Create",
          marks: 9
        },
        {        
          parameter: "Apply",
          marks: 4
        },
      ],
    },
    {
      id: 3,
      text: "A, B, C or D?",
      img: "https://www.crossfitamatak.com/wp-content/uploads/option-1.png",
      alternatives: [
        {
          id: 1,
          text: "A",
          isCorrect: true,
        },
        {
          id: 2,
          text: "B",
          isCorrect: false,
        },
        {
          id: 3,
          text: "C",
          isCorrect: false,
        },
        {
          id: 4,
          text: "D",
          isCorrect: false,
        },
      ],   
      type: "choice",
      explanation: "lol",
      parameters: [
        {        
          parameter: "Remember",
          marks: 10
        },
        {        
          parameter: "Create",
          marks: 9
        },
        {        
          parameter: "Apply",
          marks: 4
        },
      ],
    },
    {
      id: 4,
      text: "Lorem or Ipsum?",
      img: "https://www.multimediaxp.com/images/article_190508124638.1557333998.jpg",
      alternatives: [
        {
          id: 1,
          text: "Lorem",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Ipsum",
          isCorrect: true,
        },
      ],   
      type: "choice",
      explanation: "lol",
      parameters: [
        {        
          parameter: "Remember",
          marks: 10
        },
        {        
          parameter: "Create",
          marks: 9
        },
        {        
          parameter: "Apply",
          marks: 4
        },
      ],
    },
  ],
  results:
  {    
      img: "result-example.jpg",
  },
};

export default quizData;
