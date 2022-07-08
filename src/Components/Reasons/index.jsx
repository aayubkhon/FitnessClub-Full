import React from 'react'
import { Container, DetalsR, LeftWrrapp, RightWrrapp } from './style'
import image1 from '../Assets/image1.png'
import image2 from '../Assets/image2.png'
import image3 from '../Assets/image3.png'
import image4 from '../Assets/image4.png'
import nb from '../Assets/nb.png'
import nike from '../Assets/nike.png'
import tick from '../Assets/tick.png'
import adidas from '../Assets/adidas.png'




export const Expirience = () => {
  return (
    <Container id='expirience'>
      <LeftWrrapp>
        <LeftWrrapp.LeftFirst src={image1} alt="" />
        <LeftWrrapp.LeftSecont src={image2} alt="" />
        <LeftWrrapp.LeftThird src={image3} alt="" />
        <LeftWrrapp.LeftFour src={image4} alt="" />
      </LeftWrrapp>
      <RightWrrapp>
        <RightWrrapp.StrokeText>Some reasons</RightWrrapp.StrokeText>
        <RightWrrapp.StrokeItem>
          <span className='stroke-text'>why</span>
          <span> choose us?</span>
        </RightWrrapp.StrokeItem>


        <DetalsR>
          <DetalsR.DetailItem>
            <DetalsR.DetailLogo  src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </DetalsR.DetailItem>
          <DetalsR.DetailItem>
            <DetalsR.DetailLogo src={tick} alt="" />
            <span>TRAIN SMARTED AND FASTER FTHAN BEFORE</span>
          </DetalsR.DetailItem>
          <DetalsR.DetailItem>
            <DetalsR.DetailLogo src={tick} alt="" />
            <span>I FREE PROGRAM FOR MAN NEW MEMEBER</span>
          </DetalsR.DetailItem>
          <DetalsR.DetailItem>
            <DetalsR.DetailLogo src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </DetalsR.DetailItem>
        </DetalsR>
        <span style={{color: "var(--gray)", fontWeight:"normal"}}>
          OUR PARTENRS</span>
          <DetalsR.DetailPartner>
            <DetalsR.DetailPartnerLogo src={nb} alt="" />
            <DetalsR.DetailPartnerLogo src={adidas} alt="" />
            <DetalsR.DetailPartnerLogo src={nike} alt="" />
          </DetalsR.DetailPartner>
      </RightWrrapp>
    </Container>
  )
}

export default Expirience