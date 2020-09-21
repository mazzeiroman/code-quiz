// timer starts after clicking the button with the #answers id
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

document.querySelector('#answers').addEventListener('click',function()
     {
    var totalMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(totalMinutes, display);
});

//set a variable with the number of corrects answers
var correct = 0;

// this is a multidimensional array with 4 inner array elements with 6 elements inside them
var questions = [
    {
        question: "Which of the following type of variable takes precedence over other if names are same?",
        a: "global variable",
        b: "local variable",
        c: "Both of the above",
        d: "None of the above",
        answer: "B"
      },
    {
        question: "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
        a: "toSource()",
        b: "valueOf()",
        c: "toString()",
        d: "None of the above",
        answer: "B"
      },
    {
        question: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
        a: "slice()",
        b: "split()",
        c: "substr()",
        d: "substring()",
        answer: "D"
      },
    {
        question: "Which of the following function of String object creates a string to blink as if it were in a <blink> tag?",
        a: "anchor()",
        b: "big()",
        c: "blink()",
        d: "italics()",
        answer: "C"
      },
    {
        question: "Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
        a: "fixed()",
        b: "fontcolor()",
        c: "fontsize()",
        d: "bold()",
        answer: "C"
      }
    ];  

    var getQuiz = document.getElementById("quiz");
    var answ = document.getElementById("answ")
//   console.log(questions);

renderQuestions();

console.log(questions);

function renderQuestions() {
    // var newQuestions0 = JSON.stringify(questions);
    // console.log(newQuestions0);
  
    var newQuestion1 = Object.entries(questions)
    var newQuestion2 = document.createTextNode(newQuestion1);
 getQuiz.appendChild(newQuestion2);
  // Render a new li for each todo
//   for (var i = 0; i < questions.length; i++) {
//     var qst = (questions[i]);
//   var val =  Object.values(questions);
//   console.log(val)
    // var questionsRendered = JSON.parse(qst);
   
    // var p = document.createElement("p");
    // p.innerText = qst[i];
    // console.log(p);
    // answ.appendChild(p);
  }
// }
