export function LeetCodeDelete ({targetID, leetCodeList, setLeetCodeList})
{
    function deleteLeetCode()
    {
        if (window.confirm())
        {
            const updatedList = leetCodeList.filter((leetCode) => leetCode.id !== targetID)
            setLeetCodeList(updatedList)
        }
        
    }
    return (<button className = "leetcode-delete-button" onClick={deleteLeetCode} >
        delete
    </button>)
}