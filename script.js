const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


//get the element in HTML file whichever is needed
//quiz container

let quiz=document.getElementById('quiz')

//question heading calling

let questionHeading=document.getElementById('questionHeading')

//call all the option radio button so using queryselectorall

let optionList=document.querySelectorAll('.optionList')
console.log(optionList)

//call each option label
let aOption=document.getElementById('aOption')
let bOption=document.getElementById('bOption')
let cOption=document.getElementById('cOption')
let dOption=document.getElementById('dOption')

//call submit button
let submit=document.getElementById('submit')

//__________________________________________________________//

let score=0; //current score so zero (intial value)
let currentQuizCount=0; //for the given data the array value of question is 0

// console.log(quizData[currentQuizCount])
loadQuiz()

function loadQuiz(){
    deSelectOption() // to check wheather radio button on page load
// console.log("load quiz")
let currentQuizData=quizData[currentQuizCount];
questionHeading.innerText=currentQuizData.question
aOption.innerText=currentQuizData.a
bOption.innerText=currentQuizData.b
cOption.innerText=currentQuizData.c
dOption.innerText=currentQuizData.d
}

//Deselection for default option list are not selected

function deSelectOption(){
    optionList.forEach((element)=>{element.checked=false})
}

//selection of option

function getSelected(){
    let selectedanswer;
    optionList.forEach((element)=>{
        if(element.checked){
            selectedanswer=element.id;
            // console.log(selectedanswer)
        }
    })
    return selectedanswer;
}
// getSelected() we need call inside the funtion

 submit.addEventListener('click',()=>{
    let answer=getSelected() //returning funtion so we store and call the data 
    // console.log(answer)
    if(answer){
        if(answer===quizData[currentQuizCount].correct){
            score++;
        }
        currentQuizCount++;

        if(currentQuizCount<quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=(`
            <div class="card text-white bg-success mb-3" >
            <div class="card-header">Score</div>
            <div class="card-body">
                 <h5 class="card-title">You Scored ${score}/${quizData.length}</h5>
                 <button class="btn btn-outline-success" id="submit" onClick=location.reload()>Reload</button>
            </div>
        </div>
            `)
        }
        // document.body.style.backgroundImage="url('https://cdn.thenewstack.io/media/2020/03/005bd253-hawaii-4923130_1920-1024x683.jpg')"
    }
 })
