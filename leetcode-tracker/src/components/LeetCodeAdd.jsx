import { useState } from "react"
import { addDays } from "../utils/ChangeDates"
import './LeetCodeAdd.css'
export function LeetCodeAdd({ leetCodeList, setLeetCodeList }) {
    const [questionName, setQuestionName] = useState("")
    const [completedDate, setCompletedDate] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [questionLink, setQuestionLink] = useState("")

    function changeName(e) {
        setQuestionName(e.target.value);
    }

    function changeDate(e) {
        setCompletedDate(e.target.value);
    }

    function changeDifficulty(e) {
        setDifficulty(e.target.value);
    }

    function changeQuestionLink(e) {
        setQuestionLink(e.target.value);
    }

    function saveChange() {
        if (questionName !== "" && questionLink !== "") {
            const newLeetCode = {
                id: crypto.randomUUID(),
                questionName: questionName,
                completedDate: completedDate,
                difficulty: difficulty,
                questionLink: questionLink,
                nextReviewedDate: addDays(completedDate, 3),
                reviewNum: 0,
                isComplete: false
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
        <h1 className="leetcode-header">Add Leetcode</h1>
            <div className="leetcode-add-container" id="add">
                <div className="add-container-main-text">
                    <input type="text" className="main-text-name" value={questionName} onChange={changeName} placeholder="Question Name" />
                    <input type="date" className="main-text-date" value={completedDate} onChange={changeDate} label="Finished Date" />
                    <input type="text" className="main-text-link" value={questionLink} onChange={changeQuestionLink} placeholder="Question Link" />
                </div>
                <fieldset className="difficulty-group">
                    <input type="radio" id="easy" name="difficulty" value="easy" checked={difficulty === 'easy'} onChange={changeDifficulty} />
                    <label htmlFor="easy" className="difficulty easy">easy</label>
                    <input type="radio" id="medium" name="difficulty" value="medium" checked={difficulty === 'medium'} onChange={changeDifficulty} />
                    <label htmlFor="medium" className="difficulty medium">medium</label>
                    <input type="radio" id="hard" name="difficulty" value="hard" checked={difficulty === 'hard'} onChange={changeDifficulty} />
                    <label htmlFor="hard" className="difficulty hard">hard</label>
                </fieldset>
                <div className="save-button">
                    <button onClick={saveChange} className="save">Save</button>
                </div>

            </div>
        </>
    )
}