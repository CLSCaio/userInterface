import styled from "styled-components"

export const ContainerCadastro = styled.div`
  width: 100%;
  flex-direction: column;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px var(--second-color);
  padding: 1rem;
  gap: 1rem;

  .error {
  color: red;
  margin-left: 1rem;
  display: none;
}
`
export const Cadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    div{
      display: flex;
      flex-direction: column;
      width: 100%;

      input {
        width: 100%;
      }
 
    }
  }
`

export const ButtonCadastro = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .btn {
    background: none;
    outline: none;
    border: none;
    text-align: center;
  }
`






