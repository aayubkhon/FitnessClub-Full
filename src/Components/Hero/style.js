import styled from 'styled-components';


export const Container = styled.div`
display:flex;
justify-content:space-between;
@media only screen and  (max-width: 768px) {
    display:flex;
    flex-direction:column;  
}

`

export const LeftH = styled.div`
display:flex;
flex-direction:column;
gap:2rem;
padding: 2rem;
padding-top: 1.5rem;
flex:3;

`
export const RightH = styled.div`
flex:1;
position:relative;
background-color:var(--orange);
@media only screen and  (max-width: 768px) {
    position:relative;
    background:none;
}

`

LeftH.LeftSlideText = styled.div`
margin-top:4rem;
background-color: #363d42;
border-radius:4rem;
width:fit-content;
padding:20px 13px;
text-transform:uppercase;
color:white;
position:relative;
display:flex;
align-items:center;
justify-content:flex-start;

@media only screen and  (max-width: 768px) {
    margin-top:0;
    font-size:small;
    align-items:center;
    transform:scale(0.8);

}
`





LeftH.Texts = styled.span`
z-index:2;
`

export const Item = styled.div`
display:flex;
flex-direction:column;
gap:1.5rem;
text-transform:uppercase;
font-size:4.5rem;
color:white;
font-weight:bold;
text-overflow:inherit;

@media only screen and  (max-width: 768px) {
   font-size: xx-large;
   align-items:center;
   justify-content:center;

}
`

Item.Title = styled.p`
font-size:1rem;
font-weight:200;
text-transform:none;
letter-spacing:1px;
width:55%;

@media only screen and  (max-width: 768px) {
margin-left:70px;
font-size:small;
font-weight:200;
letter-spacing:1px;
text-align:center;
}
`

export const Figures = styled.div`
display:flex;
gap:2rem;


`

Figures.FiguresItem = styled.div`
display:flex;
flex-direction:column;
`

Figures.FiguresNumber = styled.p`
color:white;
font-size:2rem;
@media only screen and  (max-width: 768px) {
font-size:large;

}

`

Figures.FiguresTitle = styled.p`
color:var(--gray);
text-transform:uppercase;
@media only screen and  (max-width: 768px) {
font-size:small;

}

`
export const HeroBtn = styled.div`
display:flex;
gap:1rem;
font-weight:normal;

@media only screen and  (max-width: 768px) {
justify-content:center;
}
`

HeroBtn.HeroButtons = styled.button`
color:white;
background-color:var(--orange);
width:8rem;
`


HeroBtn.HeroButton = styled.button`
color:white;
background-color:transparent;
width:8rem;
border: 2px solid var(--orange);
`

RightH.RightBtn = styled.button`
position:absolute;
right:3rem;
top:2rem;
color:black;
`



RightH.RightLogoImg = styled.img`
width:2rem;
`

RightH.RightLogoTitle = styled.p`
color:var(--gray);
`

RightH.RightLogoTitles = styled.p`
color:white;
font-size:1.5rem;

`
RightH.HeroImg = styled.img`
position:absolute;
top:5rem;
right:8rem;
width:27rem;
@media only screen and  (max-width: 768px) {
position:relative;
width: 15rem;
left:7rem;
top:4rem;
align-self:center;
}

`

export const Caleroyis = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;

`

Caleroyis.CalerImg = styled.img`
width:3rem;
color:var(--gray);
@media only screen and  (max-width: 768px) {
width:2rem;
}

`
Caleroyis.CalorTitle = styled.p`
color:white;
font-size:1.5rem;
@media only screen and  (max-width: 768px) {
font-size:1rem;
color:white;
}
`

