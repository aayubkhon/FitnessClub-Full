import styled from "styled-components";

export const Container = styled.div`
display:flex;
gap:1rem;
padding:0 2rem;
@media only screen and  (max-width: 768px) {
    flex-direction:column;
}
`

export const LeftWrapp = styled.div`
display:flex;
gap:2rem;
flex: 1 1;
flex-direction:column;
text-transform:uppercase;
color:white;
@media only screen and  (max-width: 768px) {
    font-size:large;
}
`

LeftWrapp.FirstItem = styled.span`
color:var(--orange);
font-weight:bold;
`

LeftWrapp.SecondItem = styled.span`
font-weight:bold;
font-size:3rem;
`


LeftWrapp.TestItemName = styled.span`
color:var(--orange);

`


LeftWrapp.TestItemRev = styled.span`
text-transform:none;
text-align:justify;
letter-spacing:5px;
line-height:40px;
font-weight:600;
`

export const RightWrrap = styled.div`
flex: 1;
position:relative;
@media only screen and  (max-width: 768px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:2rem;
}
`

export const RightArrow = styled.div`
display:flex;
gap:1rem;
left:9rem;
position:absolute;
bottom:1rem;

`


RightArrow.ArrowImgF = styled.img`
width: 1.5rem;
cursor:pointer;

`