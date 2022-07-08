import React from 'react'
import Header from '../Header'
import { Caleroyis, Container, Figures, HeroBtn,
   Item, LeftH, RightH } from './style'

   import heart from '../Assets/heart.png'
   import heross from '../Assets/heross.png'
   import calories from '../Assets/calories.png'
   import hero_image from '../Assets/hero_image_back.png'
   import { motion } from "framer-motion"

   export const Hero = () => {
  const transitions = {type: 'spring', duration : 3}
  const mobile = window.innerWidth <= 768 ? true: false;
  return (
    <Container id='home'>

      <div className='blur hero-blur'></div>
      <LeftH>
        <Header/>
        {/* the best */}
        <LeftH.LeftSlideText>
          <motion.div 
          transition={{...transitions, type: 'tween'}}
          initial={{left: mobile? "145px": "238px" }}
          whileInView={{left: '8px'}}
          className='left-slide'></motion.div>
          <LeftH.Texts>the best fitness club in the town</LeftH.Texts>
        </LeftH.LeftSlideText>


        {/* Hero head */}
        <Item>
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <Item.Title>In here we will help you to shape and build your 
              ideal body and live up your life to fullest</Item.Title>
          </div>
        </Item>
        {/* figures */}
        <Figures>
          <Figures.FiguresItem >
            <Figures.FiguresNumber>+140</Figures.FiguresNumber>
            <Figures.FiguresTitle>expert coach</Figures.FiguresTitle>
          </Figures.FiguresItem>
          <Figures.FiguresItem >
            <Figures.FiguresNumber>+977</Figures.FiguresNumber>
            <Figures.FiguresTitle>members joined</Figures.FiguresTitle>
          </Figures.FiguresItem>
          <Figures.FiguresItem >
            <Figures.FiguresNumber>+50</Figures.FiguresNumber>
            <Figures.FiguresTitle>fitness programs</Figures.FiguresTitle>
          </Figures.FiguresItem>
        </Figures>
        {/* hero buttonh */}
        <HeroBtn>
          <HeroBtn.HeroButtons className='btn'>Get Started</HeroBtn.HeroButtons>
          <HeroBtn.HeroButton className='btn'>Learn More</HeroBtn.HeroButton>
        </HeroBtn>
      </LeftH>
      <RightH>
        <RightH.RightBtn className='btn'>Join Now</RightH.RightBtn>


        <motion.div 
        initial={{ right: "1-rem" }}
        whileInView={{ right: "4rem" }}
        transition={transitions}
        className='heart-rate'>
          <RightH.RightLogoImg src={heart} alt="" />
          <RightH.RightLogoTitle>Heart Rate</RightH.RightLogoTitle>
          <RightH.RightLogoTitles>117 bpm</RightH.RightLogoTitles>
        </motion.div>
        {/* hero image */}
        <RightH.HeroImg   src={heross} alt="" />
        <motion.img 
        initial={{right: "11rem"}}
        whileInView={{right: "20rem"}}
        transition={{transitions}}
        className='hero_back' src={hero_image} alt="" />
        {/* caloriyes */}
        <motion.div 
        initial={{right: "30rem"}}
        whileInView={{right: "40rem"}}
        transition={{transitions}}
        className='calory'>
          <Caleroyis.CalerImg src={calories} alt="" />
       <Caleroyis>
       <p>Caloriyes Burned</p>
        <Caleroyis.CalorTitle>220 kcalc</Caleroyis.CalorTitle>
       </Caleroyis>
        </motion.div>
      </RightH>
    </Container>
  )
}

export default Hero