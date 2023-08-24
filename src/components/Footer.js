import React from 'react'
import { Button } from './Button'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import {BsDiscord} from "react-icons/bs";
import {AiFillInstagram ,AiFillYoutube} from "react-icons/ai";
const Footer = () => {
  return (
    <Wrapper>

        <section className="contact-short">
            <div className="grid grid-two-column">
                <div>
                    <h3>Ready to get started?</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button>
                        <NavLink to="/contact">Get started</NavLink>
                    </Button>
                </div>
            </div>

        </section>
        <footer>
            <div className='container grid grid-four-column'>

                <div className='footer-about' >
                    <h3>Thapa Technical</h3>
                    <p>Hedonist Roots. The placeholder text, beginning with the line“Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth,</p>
                </div>

                <div className="footer-subscribe">
                    <h3>Subscribe to get important updates</h3>
                    <form action="">
                        <input type="email" placeholder='your e-mail'/>
                        <input type="submit" value="subscribe" />
                    </form>

                </div>
                
                <div className="footer-social">
                    <h3>follow us</h3>
                    <div className="footer-social--icons">
                        <div>
                            <a href="#"  target='_blank'>
                            <AiFillInstagram className='icons'/>
                            </a>
                            
                        </div>
                        <div>
                            <a href="#"  target='_blank'>
                            <BsDiscord className='icons'/>
                            </a>
                            
                        </div>
                        <div>
                            <a href="#"  target='_blank'>
                            <AiFillYoutube className='icons'/>
                            </a>
                            
                        </div>
                        
                        

                    </div>

                </div>

                <div className="footer-contact">
                     <h3>Call Us</h3>
                     <a href="tel:1249382821"><p>7011238921</p></a>
                     
                </div>
                </div>

                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>@ {new Date().getFullYear()} thapatechnical .All Rights Reserved</p>
                    
                    <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS & CONDITIONS</p>
                    </div>
                    </div>

                </div>

            
        </footer>



    </Wrapper>
  )
}
const Wrapper= styled.section`

iSTEGg{
    margin:0;
}
.contact-short{
    max-width:60vw;
    margin:auto;
    padding:5rem 10rem;
    background-color:${({theme})=>theme.colors.bg};
    border-radius:1rem;
    box-shadow:${({theme})=>theme.colors.shadowSupport};
    transform:translateY(50%);

    .grid div:last-child{
        justify-self:end;
        align-self:center;
    }
}

footer{
    padding:14rem 0 9rem 0;
    background-color:${({theme})=>theme.colors.footer_bg};
    h3{
        color:${({theme})=>theme.colors.white};
    }
    p{
        color:${({theme})=>theme.colors.hr};
    }
}.footer-social--icons{
    display:flex;
    gap:2rem;

    div{
        padding:1rem;
        border-radius:50%;
        border:2px solid ${({theme})=>theme.colors.white};

        .icons{
            color:${({theme})=>theme.colors.white};
            font-size:2.4rem;
            position:relative;
            cursor:pointer;
        }
    }
}

.footer-bottom--section{
    padding-top: 10px;

    hr{
        margin-bottom:2rem;
        color:${({theme})=>theme.colors.hr};
        height:0.1px;

    }
}

@media(max-width:${({theme})=>theme.colors.mobile}){

    .contact-short{
        max-width:80vw;
        margin:4.8rem auto;
        transform: translateY(0%);
        text-align:center;

        .grid div:last-child{
            justify-self:center;
        }
    }

    footer{
        padding:9rem 0 9rem 0;
    }

    .footer-bottom-section{
        padding-top:4.8rem;
    }
}
`

export default Footer
