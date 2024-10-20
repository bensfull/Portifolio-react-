import styled from "styled-components";

export const Lista = styled.ul`
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 38px;
      row-gap: 48px;

      @media (max-width:768px){
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 48px;

      }
`


