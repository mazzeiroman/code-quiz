//set a variable with the number of corrects answers
var correct = 0;
// increment the question 
var currentQuestionNum = 0;

var usersChoice= "";
var getQuiz = document.getElementById("quiz");
var answ = document.getElementById("answ");
//   console.log(questions);

var questionPrompt = document.getElementById('questionPrompt');
var choiceA = document.getElementById('choiceA');
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');
var buttons = document.querySelectorAll('.button');

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
//starts clock countdown
 var startButton = document.querySelector('#startButton');
 startButton.addEventListener('click',function()
     {
    var totalMinutes = 60 * 1,
        display = document.querySelector('#time');
    // if (itemContent!= answerContent) {totalMinutes = (60*1)-10  }
    startTimer(totalMinutes, display);


    
});

//Makes start button disapear after clicking on it
  startButton.addEventListener('click', function(){
   startButton.style.display="none";
   renderQuestions();
  });


// this is a multidimensional array with 4 inner array elements with 6 elements inside them
var questions = [
    {
        question: "Which of the following type of variable takes precedence over other if names are same?",
        choices : ["global variable","local variable","Both of the above","None of the above"],
        answer: "local variable"
      },
    {
        question: "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
        choices: ["toSource()","valueOf()","toString()","None of the above"],
        answer: "valueOf()"
      },
    {
        question: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
        choices: ["slice()","split()","substr()","substring()"],
        answer: "substring()"
      },
    {
        question: "Which of the following function of String object creates a string to blink as if it were in a <blink> tag?",
        choices:["anchor()","big()","blink()","italics()"],
        answer: "blink()"
      },
    {
        question: "Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
        choices:["fixed()","fontcolor()","fontsize()","bold()"],
        answer: "fontsize()"
      }
    ];  

// renderQuestions();

// console.log(questions);

function renderQuestions() {
    
    console.log(questions[currentQuestionNum].question);
    

        // console.log(questions[currentQuestionNum].choices[i]);

       var qstp= questionPrompt.innerHTML = questions[currentQuestionNum].question;
       var chA= choiceA.innerHTML =questions[currentQuestionNum].choices[0];
       var chB= choiceB.innerHTML =questions[currentQuestionNum].choices[1];
       var chC= choiceC.innerHTML =questions[currentQuestionNum].choices[2];
       var chD= choiceD.innerHTML =questions[currentQuestionNum].choices[3];
      
};
       buttons.forEach(item => {
        item.addEventListener('click', function(){

    // evaluates the content of the button and compares it to the right answer
            console.log(item.textContent);
            console.log(questions[currentQuestionNum].answer)
            var itemContent = item.textContent;
            var answerContent = questions[currentQuestionNum].answer;
         if (itemContent=== answerContent) {
             correct+=1;
         }
        //  else {totalMinutes= totalMinutes - 10};
         console.log(correct);
       currentQuestionNum +=1;
       var qstp= questionPrompt.innerHTML = questions[currentQuestionNum].question;
       var chA= choiceA.innerHTML =questions[currentQuestionNum].choices[0];
       var chB= choiceB.innerHTML =questions[currentQuestionNum].choices[1];
       var chC= choiceC.innerHTML =questions[currentQuestionNum].choices[2];
       var chD= choiceD.innerHTML =questions[currentQuestionNum].choices[3];
       
    });
    });
    // buttons.forEach(item => {
    //     item.addEventListener('click', function(){

    // // evaluates the content of the button and compares it to the right answer
    //         console.log(item.textContent);
    //         console.log(questions[currentQuestionNum].answer)
    //         var itemContent = item.textContent;
    //         var answerContent = questions[currentQuestionNum].answer;
    //      if (itemContent=== answerContent) {
    //          correct+=1;
    //      }
    //     //  else {totalMinutes= totalMinutes - 10};
    //      console.log(correct);
    //    currentQuestionNum +=1;
    //    var qstp= questionPrompt.innerHTML = questions[currentQuestionNum].question;
    //    var chA= choiceA.innerHTML =questions[currentQuestionNum].choices[0];
    //    var chB= choiceB.innerHTML =questions[currentQuestionNum].choices[1];
    //    var chC= choiceC.innerHTML =questions[currentQuestionNum].choices[2];
    //    var chD= choiceD.innerHTML =questions[currentQuestionNum].choices[3];
       
    // });
    // });

   
    