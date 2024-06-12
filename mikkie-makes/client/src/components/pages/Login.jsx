import { useState, useContext } from 'react'
import { Context } from '../../context'
import LoginForm from '../sections/LoginForm'
import { Navigate } from 'react-router-dom'

export default function Login() {
  const {token, signup, login, errMsg, resetAuthErr} = useContext(Context)
  const initInputs = { username: "", password: "" }
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
    setIsLoggedin(!isLoggedin)
  }

  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <main>
      { isLoggedin ?
        <Navigate to="/" />
      :
      <div className='loginContainer'>
        {!toggle ? 
            <>
              <LoginForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Sign up"
                errMsg={errMsg}              
              />
              <p onClick={toggleForm}>Already a Member?</p>
            </> 
        : 
            <>
              <LoginForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
                errMsg={errMsg}              
              />
              <p onClick={toggleForm}>Need to Signup?</p>
            </> 
        }
      </div>
      }
    </main>
  )
}

