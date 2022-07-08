import React,{useState} from 'react'
import { Container, LeftWrapp, RightArrow, RightWrrap } from './style'
import {testimonialsData} from '../mockData/TestimonData'
import leftArrow from '../Assets/leftArrow.png'
import rightArrow from '../Assets/rightArrow.png'
import { motion } from "framer-motion"


const Testimonials = () => {
    const [sected,setSelect] = useState(0)
    const tleng = testimonialsData.length;
    const transitions = {type: 'spring', duration : 3}
  return (
    <Container id='testi'>
        <LeftWrapp>
            <LeftWrapp.FirstItem>Testimonials</LeftWrapp.FirstItem>
            <LeftWrapp.SecondItem className='stroke-text'>What They</LeftWrapp.SecondItem>
            <LeftWrapp.SecondItem>Says about us</LeftWrapp.SecondItem>
            <LeftWrapp.TestItemRev>
                <motion.span
                key={sected}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{transitions}}
                >{testimonialsData[sected].review}</motion.span>
            </LeftWrapp.TestItemRev>
            <span>
                <LeftWrapp.TestItemName>
                    {testimonialsData[sected].name}
                </LeftWrapp.TestItemName>{" "}
                - {testimonialsData[sected].status}
            </span>
        </LeftWrapp>
        <RightWrrap>
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            transition={{...transitions,duration: 2}}
            whileInView={{ opacity: 1, x: 0}}
            className='righ_border'></motion.div>
            <motion.div 
             initial={{ opacity: 0, x: 100 }}
             transition={{...transitions,duration: 2}}
             whileInView={{ opacity: 1, x: 0}}
            className='righ_borders'></motion.div>
            <motion.img 
            key={sected}
            initial={{ opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            animate={{opacity: 1, x: -100}}
            transition={{transitions}}
            className='rigtht-image' src={testimonialsData[sected].image} alt="" />
            
            <RightArrow>
               <div className='righ-t'>
               <RightArrow.ArrowImgF  src={leftArrow} alt="" 
                 onClick={()=>
                    sected === 0
                    ?setSelect(tleng -1)
                    :setSelect((prev)=> prev -1)
                  }    />                
                <RightArrow.ArrowImgF  src={rightArrow} alt="" 
                  onClick={()=>
                   sected === tleng -1 
                   ?setSelect(0)
                   :setSelect((prev)=> prev +1)     }  />  </div>              
            </RightArrow>
        </RightWrrap>
    </Container>
  )
}

export default Testimonials