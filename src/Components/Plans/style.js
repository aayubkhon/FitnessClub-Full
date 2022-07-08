import styled from "styled-components";

export const Container = styled.div`
margin-top:-4rem;
padding:0 2rem;
display:flex;
flex-direction:column;
gap:4rem;
position:relative;

`

export const Wrapp = styled.div`
gap:2rem;
display:flex;
justify-content:space-evenly;
font-size:3.3rem;
    color:white;
    font-style:italic;
    @media only screen and  (max-width: 768px) {
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:large;
}
    
`
export const Plans = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap: 3rem;
@media only screen and  (max-width: 768px) {
    flex-direction:column;
}
`


Plans.PlanLogo = styled.div`
fill:white;
width: 2rem;
height: 2rem;
`

Plans.PlanTitl = styled.p`
font-size:1.3rem;
font-weight:bold;
`

Plans.PlanPrice = styled.p`
font-size:3rem;
font-weight:bold;
`

Plans.PlanSeeMore = styled.div`
font-size:0.8rem;
`
Plans.PlanArrowsLogo = styled.img`
width:30px;
height:15px;
padding-left:10px;
`

Plans.PlanArrows = styled.div`
display:flex;
align-items:center;
`

export const Feature = styled.div`
display:flex;
flex-direction:column;
gap:1rem;
`

Feature.Features = styled.div`
display:flex;
align-items:center;
gap:1rem;
`
Feature.FeaturLogo = styled.img`
width: 1rem;
`

Feature.FeaturButton = styled.button`
   background-color: white;
    padding: 0.5rem;
    font-weight: bold;
    border: 4px solid transparent;
    transition: 300ms all;
    display: flex;
    align-items: center;
    justify-content: center;
    width:17rem;
    margin-top:2rem;
    font-size:1rem;
    :hover{
        cursor:pointer;
        color:orange;
    }
`