const questions = [
  // Single answer questions
  {
    type: "single",
    question: "What is the main purpose of the Java Virtual Machine (JVM)?",
    options: [
      "To compile Java code to machine code",
      "To interpret Java bytecode",
      "To manage memory allocation",
      "To provide a graphical user interface"
    ],
    answer: 1
  },
  {
    type: "single",
    question: "Which keyword is used to inherit a class in Java?",
    options: [
      "implements",
      "extends",
      "inherits",
      "super"
    ],
    answer: 1
  },
  {
    type: "single",
    question: "Which of the following is not a Java primitive type?",
    options: [
      "int",
      "float",
      "String",
      "char"
    ],
    answer: 2
  },
  {
    type: "single",
    question: "What is the default value of a boolean variable in Java?",
    options: [
      "true",
      "false",
      "0",
      "null"
    ],
    answer: 1
  },
  {
    type: "single",
    question: "Which method is the entry point of a Java application?",
    options: [
      "start()",
      "main()",
      "run()",
      "init()"
    ],
    answer: 1
  },
  {
    type: "single",
    question: "Which of these is used to handle exceptions in Java?",
    options: [
      "catch",
      "throw",
      "try-catch",
      "final"
    ],
    answer: 2
  },
  {
    type: "single",
    question: "Which collection class allows duplicate elements?",
    options: [
      "Set",
      "Map",
      "List",
      "None of the above"
    ],
    answer: 2
  },
  {
    type: "single",
    question: "Which operator is used for concatenation in Java?",
    options: [
      "+",
      "&",
      ".",
      "*"
    ],
    answer: 0
  },
  {
    type: "single",
    question: "Which package contains the Scanner class?",
    options: [
      "java.io",
      "java.util",
      "java.lang",
      "java.net"
    ],
    answer: 1
  },
  {
    type: "single",
    question: "Which of the following is a checked exception?",
    options: [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IOException",
      "ArithmeticException"
    ],
    answer: 2
  },

  // Multiple answer questions
  {
    type: "multiple",
    question: "Which of the following are access modifiers in Java?",
    options: [
      "public",
      "private",
      "protected",
      "package"
    ],
    answers: [0, 1, 2]
  },
  {
    type: "multiple",
    question: "Which statements are true about interfaces in Java?",
    options: [
      "Interfaces can have default methods",
      "Interfaces can have constructors",
      "Interfaces can extend multiple interfaces",
      "Interfaces can have static methods"
    ],
    answers: [0, 2, 3]
  },
  {
    type: "multiple",
    question: "Which of the following are valid loop statements in Java?",
    options: [
      "for",
      "while",
      "loop",
      "do-while"
    ],
    answers: [0, 1, 3]
  },
  {
    type: "multiple",
    question: "Which of the following are valid Java data types?",
    options: [
      "byte",
      "double",
      "real",
      "long"
    ],
    answers: [0, 1, 3]
  },
  {
    type: "multiple",
    question: "Which of the following are features of Java?",
    options: [
      "Platform independent",
      "Object-oriented",
      "Manual memory management",
      "Robust"
    ],
    answers: [0, 1, 3]
  }
];

module.exports = questions;