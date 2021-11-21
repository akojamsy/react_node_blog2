import { useState } from 'react'
import Signin from './signin/Signin'
import Signup from './signup/Signup'
import './app.css'
import Panel from './panel/Panel'

function App() {
  const initialState = ''
  const [signUpMode, setSignUpMode] = useState(initialState)

  const handleSignup = (event) => {
    event.preventDefault()
    setSignUpMode('sign-up-mode')
  }

  const handleSignin = (event) => {
    event.preventDefault()
    setSignUpMode('')
  }
  return (
    <div className={`container ${signUpMode}`}>
      <Signin />
      <Signup />
      <Panel handleSignup={handleSignup} handleSignin={handleSignin} />
    </div>
  )
}

export default App
