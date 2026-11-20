import { calculateNextReview } from "../utils/CalculateNextReview"
import { LeetCodeDelete

 } from "./LeetCodeDelete"
export function LeetCodeStatusList({ leetCodeList, setLeetCodeList }) {
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
                                {leetCode.nextReviewedDate} | {leetCode.reviewNum} | {leetCode.questionLink} | 
                                <LeetCodeDelete targetID = {leetCode.id} leetCodeList={leetCodeList} setLeetCodeList={setLeetCodeList} />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="leetcode-list-item" id={leetCode.id} key={leetCode.id}>
                                {leetCode.questionName} | Complete | {leetCode.reviewNum} | {leetCode.questionLink}
                            </div>
                        )
                    }
                })}
            
            </div>
        </>
    )
}
