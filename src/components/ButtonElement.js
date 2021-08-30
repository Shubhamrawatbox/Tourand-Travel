
import styled from 'styled-components'
export const Button=styled.button`
border-radius:4px;
background:${({primary})=>(primary ? "#e74c3c" : "#8e44ad")};
padding:${({big})=>(big ? "1rem 2rem" : "0.5rem 1.5rem")};
color:#fff;
margin-top: 1.5rem;
cursor: pointer;
border:none;
outline:none;
font-size: ${({bigfont})=>(bigfont ? "1.3rem" : "0.8rem")};
&:hover{
background: ${({primary})=>(primary ? '#c0392b' : '#9b59b6')};
transition: all 0.5s ease-in-out;
}
`
