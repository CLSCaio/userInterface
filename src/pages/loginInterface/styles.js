import styled from "styled-components";

export const LoginInterfaceDiv = styled.div`
  width: 100%;
  flex-direction: column;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border: 2px solid;
`

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
    }

    input {
      width: 100%;
      height: 25px;
    }
  }

  select {
    background: transparent;
    border-color: var(--second-color);
    height: 25px;
  }

  option {
   text-align: center;
   background: var(--main-color);
  }
`

export const DivLinks = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  p {
    cursor: pointer;
    :hover {
      color: skyblue;
      text-decoration: underline;
    }
  }

  @media(min-width: 650px) {
    flex-direction: row;
  }
`