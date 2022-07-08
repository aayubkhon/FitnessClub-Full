import React from 'react'
import { Container, LogoWrap, SocialImg } from './style'
import Github from '../Assets/github.png'
import Instagram from '../Assets/instagram.png'
import Linkedin from '../Assets/linkedin.png'
import Logo from '../Assets/logo.png'


export const Footer = () => {
  return (
    <Container>
      <hr className='foterHr' />
      <LogoWrap>
      <LogoWrap.SocialLinks>
        <SocialImg src={Github} alt="" />
        <SocialImg src={Instagram} alt="" />
        <SocialImg src={Linkedin} alt="" />
        </LogoWrap.SocialLinks>
      <div>
        <SocialImg.LogoF  src={Logo} alt="" />
      </div>
      </LogoWrap>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </Container>
  )
}

export default Footer