export const quizTopics = {
  dsa: {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description: "Arrays, Linked Lists, Trees, Stacks, and Complexity",
    icon: "⚡",
    questions: [
      {
        id: "dsa-1",
        question: "What is the worst-case time complexity of QuickSort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: "O(n²)"
      },
      {
        id: "dsa-2",
        question: "Which data structure operates on a Last In First Out (LIFO) basis?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: "Stack"
      },
      {
        id: "dsa-3",
        question: "What data structure is typically used for Breadth-First Search (BFS)?",
        options: ["Stack", "Queue", "Heap", "Hash Table"],
        correctAnswer: "Queue"
      },
      {
        id: "dsa-4",
        question: "Which data structure uses non-contiguous memory locations?",
        options: ["Array", "Linked List", "Matrix", "Vector"],
        correctAnswer: "Linked List"
      },
      {
        id: "dsa-5",
        question: "What is the best-case time complexity of Binary Search on a sorted array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: "O(1)"
      }
    ]
  },
  c: {
    id: "c",
    title: "C Programming",
    description: "Pointers, Memory Management, Syntax, and Data Types",
    icon: "💻",
    questions: [
      {
        id: "c-1",
        question: "Which function dynamically allocates memory without initializing it to zero in C?",
        options: ["calloc()", "malloc()", "realloc()", "free()"],
        correctAnswer: "malloc()"
      },
      {
        id: "c-2",
        question: "What is the default return type of the main() function in modern C?",
        options: ["void", "int", "float", "char"],
        correctAnswer: "int"
      },
      {
        id: "c-3",
        question: "Which operator is used to access the memory address of a variable?",
        options: ["*", "&", "->", "."],
        correctAnswer: "&"
      },
      {
        id: "c-4",
        question: "What character signifies the end of a string literal in C?",
        options: ["\\n", "\\0", "\\t", "EOF"],
        correctAnswer: "\\0"
      },
      {
        id: "c-5",
        question: "What is the size of a double data type typically in standard C compilers?",
        options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
        correctAnswer: "8 bytes"
      }
    ]
  },
  python: {
    id: "python",
    title: "Python",
    description: "Lists, Dictionaries, OOP, and Pythonic Idioms",
    icon: "🐍",
    questions: [
      {
        id: "py-1",
        question: "Which of the following data types in Python is immutable?",
        options: ["List", "Dictionary", "Set", "Tuple"],
        correctAnswer: "Tuple"
      },
      {
        id: "py-2",
        question: "How do you start writing a function definition in Python?",
        options: ["function myFunc():", "def myFunc():", "func myFunc():", "define myFunc():"],
        correctAnswer: "def myFunc():"
      },
      {
        id: "py-3",
        question: "What is the output of bool([]) in Python?",
        options: ["True", "False", "None", "Error"],
        correctAnswer: "False"
      },
      {
        id: "py-4",
        question: "Which keyword is used to handle exceptions in Python?",
        options: ["catch", "except", "error", "handle"],
        correctAnswer: "except"
      },
      {
        id: "py-5",
        question: "Which method is used to remove whitespace from both ends of a string in Python?",
        options: ["trim()", "strip()", "clean()", "cut()"],
        correctAnswer: "strip()"
      }
    ]
  },
  java: {
    id: "java",
    title: "Java",
    description: "JVM, Collections, Inheritance, and Interfaces",
    icon: "☕",
    questions: [
      {
        id: "java-1",
        question: "Which component is responsible for running Java bytecode on any platform?",
        options: ["JDK", "JVM", "JRE", "JIT Compiler only"],
        correctAnswer: "JVM"
      },
      {
        id: "java-2",
        question: "Which keyword prevents a class from being inherited in Java?",
        options: ["static", "final", "abstract", "private"],
        correctAnswer: "final"
      },
      {
        id: "java-3",
        question: "What is the root class of all classes in Java?",
        options: ["java.lang.Class", "java.lang.Object", "java.lang.System", "java.lang.Root"],
        correctAnswer: "java.lang.Object"
      },
      {
        id: "java-4",
        question: "Which collection class allows unique elements only?",
        options: ["ArrayList", "Vector", "HashSet", "LinkedList"],
        correctAnswer: "HashSet"
      },
      {
        id: "java-5",
        question: "Can an interface in Java contain private methods starting in Java 9?",
        options: ["Yes", "No", "Only if static", "Only if protected"],
        correctAnswer: "Yes"
      }
    ]
  },
  dbms: {
    id: "dbms",
    title: "Database Management Systems (DBMS)",
    description: "SQL, Normalization, Keys, and Transactions",
    icon: "🗄️",
    questions: [
      {
        id: "db-1",
        question: "Which normal form removes partial dependency on a candidate key?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswer: "2NF"
      },
      {
        id: "db-2",
        question: "Which SQL clause is used to filter rows after an aggregation like GROUP BY?",
        options: ["WHERE", "HAVING", "ORDER BY", "FILTER"],
        correctAnswer: "HAVING"
      },
      {
        id: "db-3",
        question: "What property in ACID guarantees all operations succeed or none occur?",
        options: ["Atomicity", "Consistency", "Isolation", "Durability"],
        correctAnswer: "Atomicity"
      },
      {
        id: "db-4",
        question: "Which key uniquely identifies each record in a relational table and cannot be NULL?",
        options: ["Foreign Key", "Candidate Key", "Primary Key", "Alternate Key"],
        correctAnswer: "Primary Key"
      },
      {
        id: "db-5",
        question: "Which SQL command is classified under Data Definition Language (DDL)?",
        options: ["SELECT", "INSERT", "TRUNCATE", "UPDATE"],
        correctAnswer: "TRUNCATE"
      }
    ]
  }
};
export default quizTopics;