import React from 'react'
import Header from '../components/Header'
import LoginButton from '../components/LoginButton'
import LoginForm from '../components/LoginForm'
import Icon from '../components/Icon'
function Login1() {
  return (
    <div>
      <Header></Header>
      <div>
        <div style={{
                    display: 'flex',
                    justifyContent: "center",
                    alignContent: 'center'
                }}>
                    <Icon></Icon>
            </div>
      </div>
      <LoginForm></LoginForm>
      <LoginButton></LoginButton>
      
    </div>
                
      
    
  )
}

export default Login1
