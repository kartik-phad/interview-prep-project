const questions = [
  {
    id: 1,
    question: "Which of the following are valid data types in Python?",
    options: [
      "List",
      "Dictionary",
      "Tuple",
      "Array"
    ],
    answer: [0, 1, 2] // List, Dictionary, Tuple
  },
  {
    id: 2,
    question: "Which statements about Python functions are true?",
    options: [
      "Functions can return multiple values.",
      "Functions must always have a return statement.",
      "Functions can be assigned to variables.",
      "Functions cannot be nested."
    ],
    answer: [0, 2] // Functions can return multiple values, can be assigned to variables
  },
  {
    id: 3,
    question: "Select all valid ways to create a set in Python.",
    options: [
      "set([1, 2, 3])",
      "{1, 2, 3}",
      "[1, 2, 3]",
      "set()"
    ],
    answer: [0, 1, 3] // set([1,2,3]), {1,2,3}, set()
  },
  {
    id: 4,
    question: "Which of the following are valid loop constructs in Python?",
    options: [
      "for",
      "while",
      "do-while",
      "foreach"
    ],
    answer: [0, 1] // for, while
  },
  {
    id: 5,
    question: "Which of the following are built-in Python modules?",
    options: [
      "os",
      "sys",
      "numpy",
      "math"
    ],
    answer: [0, 1, 3] // os, sys, math
  },
  // Single-answer questions start here
  {
    id: 6,
    question: "What is the output of print(type('Hello World')) in Python?",
    options: [
      "<class 'str'>",
      "<type 'string'>",
      "<str>",
      "string"
    ],
    answer: [0]
  },
  {
    id: 7,
    question: "Which keyword is used to define a function in Python?",
    options: [
      "func",
      "def",
      "function",
      "define"
    ],
    answer: [1]
  },
  {
    id: 8,
    question: "What is the correct file extension for Python files?",
    options: [
      ".pyth",
      ".pt",
      ".py",
      ".python"
    ],
    answer: [2]
  },
  {
    id: 9,
    question: "Which operator is used for exponentiation in Python?",
    options: [
      "^",
      "**",
      "exp()",
      "//"
    ],
    answer: [1]
  },
  {
    id: 10,
    question: "Which of the following is used to handle exceptions in Python?",
    options: [
      "try-except",
      "catch-throw",
      "error-catch",
      "handle-except"
    ],
    answer: [0]
  }
];

module.exports = questions;