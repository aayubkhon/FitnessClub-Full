import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content:space-between;

`


export const MainLogo = styled.img`
width:10rem;
height:3rem;

`

export const MainList = styled.div`
list-style:none;
display:flex;
align-items:center;
gap:2rem;
color:white;
@media only screen and  (max-width: 768px) {
flex-direction:column;
background-color:var(--appColor);
padding:2rem;
}


`
