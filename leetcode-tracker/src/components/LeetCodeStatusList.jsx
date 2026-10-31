import dayjs from "dayjs";
import { addDays } from "../utils/ChangeDates";
export function LeetCodeStatusList({ leetCodeList, setLeetCodeList }) {

    function calculateNextReview(leetCode) {
        const newLeetCode = {
            id: leetCode.id,
            questionName: leetCode.questionName,
            completedDate: leetCode.completedDate,
            difficulty: leetCode.difficulty,
            questionLink: leetCode.questionLink,
            nextReviewedDate: leetCode.completedDate,
            reviewNum: leetCode.reviewNum,
            isComplete: leetCode.isComplete
        }

        switch (leetCode.reviewNum) {
            case 0:
                newLeetCode.reviewNum++;
                newLeetCode.completedDate = dayjs().format('YYYY-MM-DD')
                newLeetCode.nextReviewedDate = addDays(newLeetCode.completedDate, 4)
                break;
            case 1:
                newLeetCode.reviewNum++;
                newLeetCode.completedDate = dayjs().format('YYYY-MM-DD')
                newLeetCode.nextReviewedDate = addDays(newLeetCode.completedDate, 7)
                break;
            case 2:
                newLeetCode.reviewNum++;
                newLeetCode.completedDate = dayjs().format('YYYY-MM-DD')
                newLeetCode.nextReviewedDate = addDays(newLeetCode.completedDate, 16)
                break;
            case 3:
                newLeetCode.reviewNum++;
                newLeetCode.completedDate = dayjs().format('YYYY-MM-DD')
                newLeetCode.nextReviewedDate = -1;
                newLeetCode.isComplete = true
                break;
        }

        return newLeetCode;

    }
    return (
        <>
            <div className="leetcode-list-container">
                {leetCodeList.map((leetCode) => {
                    if (leetCode.isComplete === false) {
                        return (
                            <div className="leetcode-list-item" id={leetCode.id} key={leetCode.id}>
                                {leetCode.questionName}
                                <button className="leetcode-reviewed-button" onClick={() => {
                                    setLeetCodeList(leetCodeList.map(thisLeetCode => thisLeetCode.id === leetCode.id ? calculateNextReview(leetCode) : thisLeetCode))
                                }
                                }>Reviewed</button>
                                {leetCode.nextReviewedDate} | {leetCode.reviewNum} | {leetCode.questionLink} 
                            </div>
                        )
                    }
                    else
                    {
                        return (
                            <div className="leetcode-list-item" id={leetCode.id} key={leetCode.id}>
                                {leetCode.questionName}
                                Complete | {leetCode.reviewNum} | {leetCode.questionLink} 
                            </div>
                        )
                    }
                })}
            </div>

        </>
    )
}
