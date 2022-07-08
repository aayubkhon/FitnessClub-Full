import styled from "styled-components";

export const Container = styled.div`
padding:0 2rem;
display:flex;
grid-template:2rem;
gap:2rem;
@media only screen and  (max-width: 768px) {
    flex-direction:column;
   
}
`

export const LeftWrrapp = styled.div`
flex:1 1;
display:grid;
grid-template-columns:repeat(3,1fr);
gap:1rem;
object-fit:cover;
@media only screen and  (max-width: 768px) {
    grid-auto-rows:auto;
    overflow:hidden;   
}
`
LeftWrrapp.LeftFirst = styled.img`
width: 15rem;
grid-row:1/3;
height:28rem;
@media only screen and  (max-width: 768px) {
    width:7rem;
    height: 17rem;
}

`
LeftWrrapp.LeftSecont = styled.img`
width:auto;
height:16rem;
grid-column:2/4;
@media only screen and  (max-width: 768px) {
    width:15rem;
    height: 10rem;
}

`

LeftWrrapp.LeftThird = styled.img`
width:14rem;
grid-column:2/4;
grid-row:2;
@media only screen and  (max-width: 768px) {
    width:7rem;
    height: 6rem;
}

`
LeftWrrapp.LeftFour = styled.img`
width:10rem;
grid-row:2;
grid-column:3/4;
margin-right:50px;
height:11.2rem;
@media only screen and  (max-width: 768px) {
    width:7rem;
    height:6rem;
}
`


export const RightWrrapp =styled.div`
flex:1 1;
text-transform:uppercase;
gap:1rem;
display:flex;
flex-direction:column;
`

RightWrrapp.StrokeText = styled.p`
font-weight:bold;
color:var(--orange);
`

RightWrrapp.StrokeItem = styled.div`
color:white;
font-size:3rem;
font-weight:bold;

` 

export const DetalsR = styled.div`
display:flex;
flex-direction:column;
gap: 1rem;

`

DetalsR.DetailItem = styled.div`
color:white;
display:flex;
align-items:center;
font-size:1.5rem;
gap:1rem;
`

DetalsR.DetailLogo =styled.img`
width:2rem;
height:2rem;
`

DetalsR.DetailPartner = styled.div`
display:flex;
gap: 1rem;

`

DetalsR.DetailPartnerLogo = styled.img`
width: 2.5rem;
`