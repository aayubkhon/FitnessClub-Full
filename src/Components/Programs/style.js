import styled from "styled-components";



export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
gap:2rem;
padding: 0 2rem;


`
export const Wrapp = styled.div`
display:flex;
gap:5rem;
font-weight:bold;
font-size:3rem;
justify-content:center;
color:white;
text-transform:uppercase;
font-style:italic;
@media only screen and  (max-width: 768px) {
    flex-direction:column;
    gap:1rem;
    font-size:large;
    align-items:center;
    justify-content:center;
    margin-top:2rem;
    margin-left:3rem;

}
`

export const ProgramCategor = styled.div`
display:flex;
gap:1rem;
@media only screen and  (max-width: 768px) {
    flex-direction:column;
   

}
`

ProgramCategor.ProCategory = styled.div`
display:flex;
flex-direction:column;
background-color:gray;
padding:2rem;
gap:1rem;
color:white;
justify-content:space-between;
:hover{
    background-color:#ffa739;
    cursor: pointer;
}

`



ProgramCategor.CategorItem = styled.p`
font-size:1.45rem;
font-weight:bold;
`

ProgramCategor.CategorItems = styled.p`
font-size:0.9rem;
line-height:25px;
`

ProgramCategor.ArrowWrap = styled.div`
display:flex;
align-items:center;
gap:2rem;
`

ProgramCategor.CategotParagraph = styled.p`
font-weight:bold;
`

ProgramCategor.CategorArow = styled.img`
width: 1rem;
`