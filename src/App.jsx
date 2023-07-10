import { useState } from 'react'
import './App.css'
import Header from './components/header'
import List  from './components/list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <List/>
    </>
  )
}

export default App
