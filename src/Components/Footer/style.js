import styled from "styled-components";

export const Container = styled.div`
position:relative;
`

export const LogoWrap = styled.div`
padding: 1rem 2rem;
display:flex;
flex-direction:column;
gap:4rem;
align-items:center;
justify-content:center;
height:20rem;
`
LogoWrap.SocialLinks = styled.div`
display:flex;
gap:4rem;

`
export const SocialImg = styled.img`
width:2rem;
height:2rem;
cursor:pointer;
`

SocialImg.LogoF = styled.img`
width: 10rem;
`