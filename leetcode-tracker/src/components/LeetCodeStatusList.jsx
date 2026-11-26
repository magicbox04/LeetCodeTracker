import { calculateNextReview } from "../utils/CalculateNextReview"
import {LeetCodeDelete} from "./LeetCodeDelete"
import "./LeetCodeStatusList.css"

export function LeetCodeStatusList({ leetCodeList, setLeetCodeList }) {
    return (
        <>
            <h1 className="leetcode-header">
                Status
            </h1>
            <div className="leetcode-list-container">
                {leetCodeList.map((leetCode) => {
                    if (leetCode.isComplete === false) {
                        return (
                            <div className="leetcode-list-item" id={leetCode.id} key={leetCode.id}>
                                <div className="leetcode-list-name" >{leetCode.questionName}</div>
                                <div className="leetcode-list-type" >{leetCode.type}</div>  
                                <button className={`leetcode-reviewed-button ${leetCode.difficulty}`} onClick={() => {
                                    setLeetCodeList(leetCodeList.map(thisLeetCode => thisLeetCode.id === leetCode.id ? calculateNextReview(leetCode) : thisLeetCode))
                                }}>
                                    Reviewed
                                </button>

                                <div className="leetcode-list-nextdate">{leetCode.nextReviewedDate} </div>
                                <div className="leetcode-list-reviews" >{leetCode.reviewNum} / 4 Reviews  </div>
                                <div  type="text" className="leetcode-list-memo">{leetCode.memo} </div >
                                <div className="leetcode-list-question-link">{leetCode.questionLink}  </div>
                                <LeetCodeDelete targetID={leetCode.id} leetCodeList={leetCodeList} setLeetCodeList={setLeetCodeList} />
                            </div>
                        )
                    }
                })}

            </div>
        </>
    )
}
