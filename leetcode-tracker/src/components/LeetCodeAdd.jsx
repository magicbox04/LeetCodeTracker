import { useState } from "react"
import { addDays } from "../utils/ChangeDates"
export function LeetCodeAdd ({leetCodeList, setLeetCodeList})
{
    const [questionName, setQuestionName] = useState("")
    const [completedDate, setCompletedDate] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [questionLink, setQuestionLink] = useState("")

    function changeName(e)
    {
        setQuestionName(e.target.value);
    }

    function changeDate(e)
    {
        setCompletedDate(e.target.value);
    }

    function changeDifficulty(e)
    {
        setDifficulty(e.target.value);
    }

    function changeQuestionLink(e)
    {
        setQuestionLink(e.target.value);
    }

    function saveChange()
    {
        if (questionName !== "" && questionLink !== "")
        {
            const newLeetCode={
            id : crypto.randomUUID(),
            questionName : questionName, 
            completedDate : completedDate, 
            difficulty : difficulty,
            questionLink : questionLink,
            nextReviewedDate :  addDays(completedDate, 3),
            reviewNum : 0,
            isComplete:false
            }

            setLeetCodeList([...leetCodeList, newLeetCode])
            setQuestionName("")
            setCompletedDate("")
            setDifficulty("")
            setQuestionLink("")
            localStorage.setItem("leetCodeList", JSON.stringify(leetCodeList))
        }
        
    }
    return (
    <>
    <div className = "leetcode-add-container" id = "add"> 
        <input type = "text" name="question-name" value={questionName} onChange={changeName}/>
        <input type = "date" name="question-completed-date" value={completedDate} onChange={changeDate}/>
        <input type="radio" id="easy" name="difficulty" value="easy" checked={difficulty === 'easy'} onChange={changeDifficulty}/>
        <label htmlFor="easy">easy</label>
        <input type="radio" id="medium" name="difficulty" value="medium" checked={difficulty === 'medium'} onChange={changeDifficulty}/>
        <label htmlFor="medium">medium</label>
        <input type="radio" id="hard" name="difficulty" value="hard" checked={difficulty === 'hard'} onChange={changeDifficulty}/>
        <label htmlFor="hard">hard</label>
        <input type = "text" name = "question-link" value={questionLink} onChange={changeQuestionLink}/>
        <button onClick={saveChange}>Save</button>
    </div>
    </>
    )
}