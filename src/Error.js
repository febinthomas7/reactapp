import React from 'react'
import { styled } from 'styled-components'
import { Button } from './components/Button'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
   <Wrapper>
    <div className="container">
      <div>
        <h2>404</h2>
        <h3>UH OH! You're lost</h3>
        <p>the page you are looking for does not exist .how you got here is a mystery. nut you can click the button to redirect to homepage </p>
      </div>
      <NavLink to="/">
      <Button>Go back to home</Button>


      </NavLink>
      
    </div>
    


   </Wrapper>
  )
}
const Wrapper = styled.section`

.container{
  padding:9rem 0;
  text-align:center;

  h2{
    font-size:10rem;
  }
  h3{
    font-size:4.2rem;
  }
  p{
    margin:2rem 0;
  }
}
`

export default Error
