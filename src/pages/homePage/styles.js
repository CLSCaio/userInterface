import styled from "styled-components";

export const HomePageDiv = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  .divTitle {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .divCards {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }  

  span  {
    svg {
      cursor: pointer;

      :hover {
        transform: scale(1.1);
      }
    }
  }

  @media(min-width: 650px) {
    .divCards {
      flex-direction: row;
    }  
  }

  a {
    width: 100%;
  }
`

export const CardsHomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: solid 1px var(--second-color);
  border-radius: 1rem;

  width: 100%;
  max-width: 500px;
  height: 300px;

  svg {
    width: 80%;
    height: 80%;
  }

  .usuariosCadastrados {
    display: none;
  }
`