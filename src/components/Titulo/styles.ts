import styled from "styled-components";

export type Props ={
  children: string
  fontSize?:number
}

export const Titulo= styled.h3<Props>`
  color:${(props) => props.theme.corPrincipal};
  font-size: ${(props)=> props.fontSize ? props.fontSize + 'px' : '14px'};
  font-weight: bold;
  margin-bottom: 16px;
`

export default Titulo


