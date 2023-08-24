import React from 'react'
import { styled } from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated,user} = useAuth0();

  return (
    <Wrapper>
      <h2 className='common-heading'>Contact page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.421771529935!2d77.29797765!3d28.5966134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce485fbd999b7%3A0x4a53256223e0e332!2sStar%20City%20Mall!5e0!3m2!1sen!2sin!4v1691170443634!5m2!1sen!2sin"
       title='react' width="100%" height="450" style={{border:0}} allowFullScreen=""
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/mnqkjrkk" method='post' className='contact-inputs'>
              <input type="text" placeholder='username' name='username' value={isAuthenticated? user.name: ""} autoComplete='off' required/>
              <input type="email" name="Email" placeholder='Email'value={isAuthenticated? user.email: ""} autoComplete='off' required  />
              <textarea placeholder="Enter your message" name='message' cols="30" rows="10"></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`

padding: 9rem 0 5rem 0;
text-align:center;

.container{
  max-width:50rem;
  margin:auto;

  .contact-inputs{
    display:flex;
    flex-direction:column;
    gap:3rem;
    
    input[type="submit"]{
      cursor:pointer;
      transition:all 0.2s;

      &:hover{
        background-color:${({theme})=>theme.colors.white};
        border:1px solid ${({theme})=>theme.colors.btn};
        color:${({theme})=>theme.colors.btn};
        transform:scale(0.9);
      }
    }

  }
}

`
export default Contact
