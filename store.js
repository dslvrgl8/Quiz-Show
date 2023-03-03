// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

// // generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

// // function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// //   function showQuestions(questions, quizContainer){
//     function showQuestions(questions) {
//         let questionIndex = 0;
      
//         function showNextQuestion() {
//           const questionContainer = document.getElementById("question-container");
//           questionContainer.innerHTML = "";
      
//           if (questionIndex >= questions.length) {
//             questionContainer.innerText = "No more questions!";
//             return;
//           } //won't show any additional questions
      
//           const currentQuestion = questions[questionIndex];

//           const questionText = document.createElement("h2");

//           questionText.innerText = currentQuestion.question;

//           questionContainer.appendChild(questionText);
      
//           currentQuestion.options.forEach((option) => {
//             const optionLabel = document.createElement("label");
//             const optionInput = document.createElement("input");
//             optionInput.setAttribute("type", "radio");
//             optionInput.setAttribute("name", "answer");
//             optionInput.setAttribute("value", option);
//             optionLabel.appendChild(optionInput);
//             optionLabel.append(` ${option}`);
//             questionContainer.appendChild(optionLabel);
//           });
      
//           const submitButton = document.createElement("button");

//           submitButton.innerText = "Submit";
          
//           submitButton.addEventListener("click", () => {
//             const selectedOption = document.querySelector('input[name="answer"]:checked');
//             if (!selectedOption) {
//               alert("Please select an answer");
//               return;
//             }
      
//             const answer = selectedOption.value;
//             if (answer === currentQuestion.answer) {
//               alert("Correct!");
//             } else {
//               alert(`Incorrect. The correct answer is ${currentQuestion.answer}`);
//             }
      
//             questionIndex++;
//             showNextQuestion();
//           });
      
//           questionContainer.appendChild(submitButton);
//         }
      
//         showNextQuestion();
//       }
// //     }
// // }

//       showQuestions(questions);