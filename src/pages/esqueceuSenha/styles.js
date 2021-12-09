import styled from "styled-components"

export const EsqueceuSenhaContainer = styled.div`

  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid var(--second-color);
  padding: 30px;
  gap: 2rem;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  form div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    input {
      width: 100%;
      height: 25px;
    }
    
    #dadosValidos {
      color: var(--second-color)
    }
  }
`

export const LinkButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`