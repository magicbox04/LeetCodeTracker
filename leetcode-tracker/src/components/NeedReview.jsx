import dayjs from "dayjs"
export function NeedReview({ leetCodeList }) {
    return (
        <>
            <div className="need-review-container">
                {leetCodeList
                    .filter((leetCode) =>
                        dayjs(leetCode.nextReviewedDate).diff(dayjs().format('YYYY-MM-DD'), 'day') <= 0 &&
                        leetCode.isComplete === false
                    )
                    .map((leetCode) => (
                        <div className="leetcode-list-item" key={leetCode.id}>
                            {leetCode.questionName} | {leetCode.nextReviewedDate} | {leetCode.reviewNum} | {leetCode.questionLink}
                        </div>
                    ))}
            </div>
        </>
    )
}