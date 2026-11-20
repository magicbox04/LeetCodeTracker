import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LeetCodeStatusList } from './components/LeetCodeStatusList.jsx'
import { LeetCodeAdd } from './components/LeetCodeAdd.jsx'
import { NeedReview } from './components/NeedReview.jsx'
import { ManageLink } from './components/ManageLink.jsx'
import { ManagePage } from './pages/managePage.jsx'
import './App.css'

function App() {
  const [leetCodeList, setLeetCodeList] = useState(() => {
    if (localStorage.getItem("leetCodeList") === null) {
      return []
    }
    else {
      return JSON.parse(localStorage.getItem("leetCodeList"));
    }
  })

  useEffect(() => {
    localStorage.setItem("leetCodeList", JSON.stringify(leetCodeList))
  })

  return (

  
      <Routes>
        <Route path="/" element={
          <>
            <ManageLink/>
            <NeedReview leetCodeList={leetCodeList} setLeetCodeList={setLeetCodeList} />
            <LeetCodeAdd leetCodeList={leetCodeList} setLeetCodeList={setLeetCodeList} />
            <LeetCodeStatusList leetCodeList={leetCodeList} setLeetCodeList={setLeetCodeList} />
          </>
        } />
        <Route path="/manage" element={ <ManagePage key="leetCodeManage"leetCodeList={leetCodeList} setLeetCodeList={setLeetCodeList}/> } />
      </Routes>
  )
}

export default App
