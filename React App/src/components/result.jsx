
function Result({userAnswer, questionList, restartQuiz}){
    let finalScore = 0;
    function getScore(){
        userAnswer.forEach((answer,index) => {
            if(answer === questionList[index].answer){
                finalScore ++;
            }
        })
        return finalScore;
    }
    const score = getScore();
    return (
        <div>
            <h2>Quiz Completed !</h2>
            <p>Your Score is {score} out of {questionList.length}</p>
            <button className="restart-button" onClick={restartQuiz}>Restart</button>
        </div>
    )
}

export default Result;