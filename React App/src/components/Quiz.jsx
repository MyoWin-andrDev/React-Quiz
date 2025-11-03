import {useState} from "react";
import Result from "./result.jsx";


function Quiz(){
    const questionList = [
        {
            question: "Which word is a noun?",
            options: ["run", "beautiful", "school", "quickly"],
            answer: "school"
        },
        {
            question: "What is the past tense of 'walk'?",
            options: ["walked", "walking", "will walk", "walks"],
            answer: "walked"
        },
        {
            question: "Which sentence is correct?",
            options: [
                "She go to the store.",
                "She goes to the store.",
                "She going to the store.",
                "She gone to the store."
            ],
            answer: "She goes to the store."
        },
        {
            question: "What is the opposite of 'hot'?",
            options: ["warm", "cold", "spicy", "boiling"],
            answer: "cold"
        },
        {
            question: "Which word rhymes with 'cat'?",
            options: ["dog", "hat", "car", "cake"],
            answer: "hat"
        },
        {
            question: "What punctuation ends a question?",
            options: [".", "!", ",", "?"],
            answer: "?"
        },
        {
            question: "Which word is a color?",
            options: ["apple", "blue", "run", "happy"],
            answer: "blue"
        },
        {
            question: "What is the plural of 'book'?",
            options: ["bookes", "books", "bookies", "book"],
            answer: "books"
        },
        {
            question: "Which word describes a person, place, or thing?",
            options: ["verb", "adjective", "noun", "adverb"],
            answer: "noun"
        },
        {
            question: "Complete the sentence: I ___ to school every day.",
            options: ["go", "went", "going", "gone"],
            answer: "go"
        }
    ];

    const [selectedOption, setSelectedOption] = useState("None");

    const initialAnswer = [null,null,null];
    const [userAnswer, setUserAnswer] = useState(initialAnswer);

    const[currentQuestion, setCurrentQuestion] = useState(0);

    const selectedAnswer = userAnswer[currentQuestion];

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleSelectedOption = (option) => {
        const newUserAnswer = [...userAnswer];
        newUserAnswer[currentQuestion] = option;
        setUserAnswer(newUserAnswer);
    }

    const goToNext = () => {
        if(currentQuestion === questionList.length-1){
            setIsQuizFinished(true);
        }else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    const goToPrevious = () => {
        if(currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    }

    function restartQuiz() {
        setUserAnswer(initialAnswer);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    if(isQuizFinished){
        return <Result userAnswer={userAnswer} questionList={questionList} restartQuiz={restartQuiz}/>
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p className="question">{questionList[currentQuestion].question}</p>
            {questionList[currentQuestion].options.map((option) => (
                <button className={"option" + (selectedAnswer === option ? " selected" : " ")} onClick={() => handleSelectedOption(option)}>{option}</button>
            ))}
            <div className="nav-buttons">
                <button onClick={goToPrevious} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={goToNext} disabled={selectedAnswer == null}>{currentQuestion === questionList.length -1 ? "Finish Quiz" : "Next"}</button>
            </div>
        </div>
    );
}


export default Quiz;