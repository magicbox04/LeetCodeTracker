import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LeetCodeStatusList } from './components/LeetCodeStatusList.jsx'
import { LeetCodeAdd } from './components/LeetCodeAdd.jsx'
import { NeedReview } from './components/NeedReview.jsx'
import './App.css'

function App() {
  const [leetCodeList, setLeetCodeList] = useState([])

  return (
    <>
      <NeedReview  leetCodeList = {leetCodeList} setLeetCodeList = {setLeetCodeList}/>
      <LeetCodeAdd leetCodeList = {leetCodeList} setLeetCodeList = {setLeetCodeList}/>
      <LeetCodeStatusList leetCodeList = {leetCodeList} setLeetCodeList = {setLeetCodeList}/>
    </>
  )
}

export default App
