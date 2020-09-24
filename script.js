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
var userdisplay = document.getElementById('userdisplay');
var downloadTimer;
var timeleft = 60;
//starts clock countdown
 var startButton = document.querySelector('#startButton');

 startButton.addEventListener('click',function()
     {
     downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("time").textContent = timeleft;
    if(timeleft <= 0) {
        clearInterval(downloadTimer);
        endGame();
    }
        
    },1000);
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


// console.log(questions);
function endGame(){
    
  var qp =  questionPrompt.textContent = "You have finished the Quiz!";
    choiceA.style.display = "none";
    choiceB.style.display = "none";
    choiceC.style.display = "none";
    choiceD.style.display = "none";
    
    if (qp ="You have finished the Quiz!") {
     var initials =   prompt("What are your initials?");
     console.log(initials);
    var finaltime = document.getElementById("time").textContent;
     console.log(finaltime);
     if( !initials) {
         initials = "--";
     }
  }
  
    var usersInfo = 
    {
        name: initials,
        time : finaltime,
        correctA: correct
    };
    var usersArray =  JSON.parse(localStorage.getItem('usersInfo')) || [];
    console.log(usersArray);
    usersArray.push(usersInfo);
    localStorage.setItem('usersInfo', JSON.stringify(usersArray));
    
    clearInterval(downloadTimer)
}

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
             // WORK ON PROMPTS FOR RIGHT 
            //  var timel1 = 2;
            //  var downloadT1 = setInterval(function(){
            //     timel1--;
            //     answ.textContent = "YOU ARE RIGHT!", timel1;
            //     if(timel1 <= 0)
            //         clearInterval(downloadT1, answ.textContent="");
            //     },1000);


            //  answ.textContent = "YOU ARE RIGHT!";
         }
         else {timeleft -= 10;
            document.getElementById("time").textContent = timeleft + " sec";};
             //WORK ON PROMPTS FOR WRONG 
            // var timel = 2;
            // var downloadT = setInterval(function(){
            //    timel--;
            //    answ.textContent = "Wrong!", timel;
            //    if(timel <= 0)
            //        clearInterval(downloadT, answ.textContent="");
            //    },1000);


            // answ.textContent = "Wrong!";
         console.log(correct);
       currentQuestionNum +=1;
       if (currentQuestionNum < questions.length) {
       var qstp= questionPrompt.innerHTML = questions[currentQuestionNum].question;
       var chA= choiceA.innerHTML =questions[currentQuestionNum].choices[0];
       var chB= choiceB.innerHTML =questions[currentQuestionNum].choices[1];
       var chC= choiceC.innerHTML =questions[currentQuestionNum].choices[2];
       var chD= choiceD.innerHTML =questions[currentQuestionNum].choices[3];

       }
       else {
        //    return
           endGame()
       }
       
    });
 }); 
