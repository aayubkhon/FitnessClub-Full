import React,{ useRef } from 'react'
import { Container, LeftJ, RightJ } from './style'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_abv9fjg', 'template_ni7tp9p', form.current,
         '9IwAAvyL8XGfgK-TR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <Container>
        <LeftJ>
            <hr className='hr' />
            <LeftJ.LeftFirst>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </LeftJ.LeftFirst>
            <LeftJ.LeftFirst>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </LeftJ.LeftFirst>
        </LeftJ>
        <RightJ>
          <RightJ.Forms>
          <form ref={form} onSubmit={sendEmail}/>
            <RightJ.FormsInput type="email" name='user_email' 
            placeholder='Enter your Email address here' />
            <RightJ.FormsBtn className='btn'>Join now</RightJ.FormsBtn>
          </RightJ.Forms>
        </RightJ>
    </Container>
  )
}

export default Join