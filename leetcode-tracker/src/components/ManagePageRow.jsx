import { useState } from "react"
export function ManagePageRow({ leetcode, onSave }) {
    const [questionName, setQuestionName] = useState(leetcode.questionName)
    const [completedDate, setCompletedDate] = useState(leetcode.completedDate)
    const [difficulty, setDifficulty] = useState(leetcode.difficulty)
    const [questionLink, setQuestionLink] = useState(leetcode.questionLink)
    const [nextReviewedDate, setNextReviewedDate] = useState(leetcode.nextReviewedDate)
    const [reviewNum, setReviewNum] = useState(leetcode.reviewNum)
    const [isComplete, setIsComplete] = useState(leetcode.isComplete)
    const [memo, setMemo] = useState(leetcode.memo)
    const [type,  setType] = useState("")

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

    function changeReviewDate(e) {
        e.target.value !== null ? setNextReviewedDate(e.target.value) : "";
    }

    function changeReviewNum(e) {
        setReviewNum(Number(e.target.value));
    }

    function changeIsComplete(e) {
        setIsComplete(e.target.checked);
    }

    function changeMemo(e)
    {
        setMemo(e.target.value)
    }

    function changeType(e) {
        setType(e.target.value)
    }

    function saveChange() {
        if (questionName !== "" && questionLink !== "") {
            const newLeetCode = {
                id: leetcode.id,
                questionName: questionName,
                completedDate: completedDate,
                type:type,
                difficulty: difficulty,
                questionLink: questionLink,
                nextReviewedDate: nextReviewedDate,
                memo:memo,
                reviewNum: reviewNum,
                isComplete: isComplete
            }

            onSave(newLeetCode)
        }

    }
    return (
        <>
            <div className="leetcode-edit-container" id={`edit-${leetcode.id}`}>
                <input type="text" name="question-name" value={questionName} onChange={changeName} />
                <input type="date" name="question-completed-date" value={completedDate} onChange={changeDate} />
                <input type="date" name="question-next-review-date" value={nextReviewedDate} onChange={changeReviewDate} />
                <input type="text" className="main-text-type" value={type} onChange={changeType} placeholder="Type" />
                <input type="radio" id={`easy-${leetcode.id}`} name={`difficulty-${leetcode.id}`} value="easy" checked={difficulty === 'easy'} onChange={changeDifficulty} />
                <label htmlFor="easy">easy</label>
                <input type="radio" id={`medium-${leetcode.id}`} name={`difficulty-${leetcode.id}`} value="medium" checked={difficulty === 'medium'} onChange={changeDifficulty} />
                <label htmlFor="medium">medium</label>
                <input type="radio" id={`hard-${leetcode.id}`} name={`difficulty-${leetcode.id}`} value="hard" checked={difficulty === 'hard'} onChange={changeDifficulty} />
                <label htmlFor="hard">hard</label>
                <input type="text" value={memo} onChange={changeMemo}/>
                <input type="text" name="question-link" value={questionLink} onChange={changeQuestionLink} />
                <input type="number" name="review-number" value={reviewNum} onChange={changeReviewNum} />
                <input type="checkbox" name="is-complete" checked={isComplete} onChange={changeIsComplete} />

                <button onClick={saveChange}>Save</button>
            </div>
        </>
    )
}