import React from 'react'
import { plansData } from '../mockData/PlansData'
import { Container, Wrapp,Plans, Feature } from './style'
import whiteTick from '../Assets/whiteTick.png'
import rightArrow from '../Assets/rightArrow.png'

const Planing = () => {
  return (
    <Container id='planet'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
    <Wrapp>
        <span className='stroke-text'>REDY TO START</span>
        <span style={{fontWeight: 'bold'}}>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
    </Wrapp>
    <Plans>
        {plansData.map((value,i)=>(
            <div className='plan' key={i}>
                <Plans.PlanLogo>{value.icon}</Plans.PlanLogo>
                <Plans.PlanTitl>{value.name}</Plans.PlanTitl>
                <Plans.PlanPrice>$ {value.price}</Plans.PlanPrice>

                <Feature>
                    {value.features.map((feature,i)=>(
                        <Feature.Features key={i}>
                            <Feature.FeaturLogo src={whiteTick} alt="" />
                            <span>{feature}</span>
                        </Feature.Features>
                    ))}
                </Feature>

                <div>
                    <Plans.PlanArrows>
                    <Plans.PlanSeeMore>See more benefits</Plans.PlanSeeMore>
                    <Plans.PlanArrowsLogo src={rightArrow} alt="" />
                    </Plans.PlanArrows>
                <div>
                        <Feature.FeaturButton >Join now</Feature.FeaturButton>
                    </div>
                </div>
            </div>
        ))}
    </Plans>
</Container>
  )
}

export default Planing