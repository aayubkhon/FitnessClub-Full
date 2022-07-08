import React from 'react'
import { Container, ProgramCategor, Wrapp } from './style'
import { programData } from '../mockData'
import RightAroow from '../Assets/rightArrow.png'

export const Programming = () => {
  return (
    <Container id='programming'>
      {/* header */}
      <Wrapp>
        <p className='stroke-text'>Explore our</p>
        <p>Programs</p>
        <p className='stroke-text'>to shape you</p>
      </Wrapp>
      <ProgramCategor>
        {programData.map((program)=>(
          <ProgramCategor.ProCategory>
            <span className='CategorLogo'>{program.image}</span>
            <ProgramCategor.CategorItem>{program.heading}</ProgramCategor.CategorItem>
            <ProgramCategor.CategorItems>{program.details}</ProgramCategor.CategorItems>
            <ProgramCategor.ArrowWrap>
              <ProgramCategor.CategotParagraph>Join Now</ProgramCategor.CategotParagraph>
              <ProgramCategor.CategorArow src={RightAroow} alt="" />
            </ProgramCategor.ArrowWrap>
          </ProgramCategor.ProCategory>
        ))}
      </ProgramCategor>
    </Container>
  )
}

export default Programming