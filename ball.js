var submit = document.getElementById("submit");
var answer = document.getElementById("answer");

var answers = [
    'It is certain',
    'Without a doubt',
    'Most likely',
    'Yes',
    'Reply hazy try again',
    'Ask again later',
    'My reply is no',
    'No',
    'Very doubtful',
]


console.log("b");
submit.addEventListener("click", () => {
    var question = document.getElementById("question").value;
    console.log(question);


    var array = [];
    var array = question.split('');

    if(question !== "" && array.includes("?")){
        var random = Math.floor(Math.random() * answers.length);
        console.log(random);
        var answered = answers[random];
    
        answer.innerText = answered;
        }
    if(question !== "" && !array.includes("?")){
        answer.innerText = "Please add a question mark"
    }

    if(!array.includes("?") && question === ""){
        answer.innerText = "No question to answer...try again."
        
    }

})