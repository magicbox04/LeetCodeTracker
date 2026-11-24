import dayjs from "dayjs"
import { calculateNextReview } from "../utils/CalculateNextReview"
import {LeetCodeDelete} from "./LeetCodeDelete"

export function NeedReview({ leetCodeList, setLeetCodeList }) {
    return (
        <>
            <h1 className="leetcode-header">
                Need Review
            </h1>
            <div className="leetcode-list-container">
                {leetCodeList
                    .filter((leetCode) =>
                        dayjs(leetCode.nextReviewedDate).diff(dayjs().format('YYYY-MM-DD'), 'day') <= 0 &&
                        leetCode.isComplete === false
                    )
                    .map((leetCode) => (
                        <div className="leetcode-list-item" key={leetCode.id}>
                            <div className="leetcode-list-name" >{leetCode.questionName}</div>
                            <button className={`leetcode-reviewed-button ${leetCode.difficulty}`} onClick={() => {
                                setLeetCodeList(leetCodeList.map(thisLeetCode => thisLeetCode.id === leetCode.id ? calculateNextReview(leetCode) : thisLeetCode))
                            }}>
                                Reviewed
                            </button>

                            <div className="leetcode-list-nextdate">{leetCode.nextReviewedDate} </div>
                            <div className="leetcode-list-reviews" >{leetCode.reviewNum} / 4 Reviews  </div>
                            <div type="text" className="leetcode-list-memo">{leetCode.memo} </div >
                            <div className="leetcode-list-question-link">{leetCode.questionLink}  </div>
                            <LeetCodeDelete targetID={leetCode.id} leetCodeList={leetCodeList} setLeetCodeList={setLeetCodeList} />
                        </div>
                    ))}
            </div>
        </>
    )
}