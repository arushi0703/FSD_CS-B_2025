import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="container">
      <h2>Welcome to React vite</h2>
      <h3 style={{backgroundColor: 'cyan', color:"brown"}}></h3>
      <Profile />
    </div>
  )
}

export default App
