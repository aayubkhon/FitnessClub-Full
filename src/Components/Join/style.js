import styled from "styled-components";

export const Container = styled.div`
display:flex;
padding: 0 2rem;
gap:10rem;
@media only screen and  (max-width: 768px) {
    display:flex;
    flex-direction:column;
    gap:1rem;
}
`

export const LeftJ = styled.div`
color:white;
font-size:3rem;
font-weight:bold;
text-transform:uppercase;
position:relative;
@media only screen and  (max-width: 768px) {
flex-direction:column;
}
`

LeftJ.LeftFirst = styled.div`
display:flex;
gap: 1rem;
`

export const RightJ = styled.div`
display:flex;
justify-content:center;
align-items:flex-end;
margin-left:17rem;
@media only screen and  (max-width: 768px) {
margin-right:17rem;
justify-content:center;
align-self:center;
}

`

RightJ.Forms = styled.div`
display:flex;
gap:3rem;
background-color:gray;
padding:1rem;

`
RightJ.FormsInput = styled.input`
background-color:transparent;
border:none;
outline:none;
color:var(--lightgrayz);
width:12rem;

`

RightJ.FormsBtn = styled.button`
background-color:var(--orange);
color:white;
`