import { ManagePageRow } from "../components/ManagePageRow"
import { Link } from "react-router-dom"
export function ManagePage ({ leetCodeList, setLeetCodeList })
{
    function handleSave(newLeetCode) {
        setLeetCodeList(leetCodeList.map((leetcode) => (
            leetcode.id === newLeetCode.id ? newLeetCode : leetcode
        )))
    }

    return (
        <>
        {leetCodeList.map((leetcode)=> (
            <ManagePageRow key= {`manageRow${leetcode.id}`}leetcode={leetcode} onSave={handleSave}/>
        ))}
            <Link to="/">To Homepage</Link>
        </>        
    )
}