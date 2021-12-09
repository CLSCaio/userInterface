import styled from "styled-components";

export const DivUlLi = styled.div`

  margin-top: 40px;
  display: flex;

  ul {
    list-style: none;
    display: flex;
    
    li {
      cursor: pointer;
      :hover {
        text-decoration: underline;
        color: skyblue;
        transform: scale(1.1);
      }
    }
  }

  @media(min-width: 650px) {
    margin-top: 0px;
  }
`