import styled from "styled-components";

export const FormGroup = styled.div`
	color: black;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: black;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: black;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: black;
    display: block;
`;

export const Titre = styled.h3`
width: 491px;
margin: 50px auto;
color: black;
`;

export const Button = styled.button`
  font-weight: bold;
  border-radius: 20px;
  background-color: background-color: ${({primary}) => primary? '#E38B06': '#000'};
  color: color: ${({primary}) => primary ? '#000': '#fff'};
  padding: 18px 30px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: transform .2s ease;
  &:hover{ 
    transform: translateY(-.5rem) scale(1.02);
    color: #000;
  }
`;