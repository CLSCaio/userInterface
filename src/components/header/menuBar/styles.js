import styled from "styled-components";

export const MenuBarDivPrincipal = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  width: 100%;

  @media(min-width: 650px ) {
    width: auto;
    .displayNone {
      display: none;
    }
  }

  button[type="submit"] {
    width: 35px;
    height: 15px;
    appearance: none;
    background-color: var(--reserv-color);
    border-radius: 50px;
    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.20);
    cursor: pointer;
    transition: .5s;
    overflow: hidden;

    :checked {
      background-color: var(--reserv-color);
    }
  }
`
export const MenuBarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 50px;
 
  svg {
    font-size: 1.3rem;
  }

  .imMenu {
    display: flex;
    cursor: pointer;
  }

  .imUsers {
    display: none;
  }

  @media(min-width: 650px) {
    gap: 0.5rem;

    .imMenu {
      display: none;
    }

    .imUsers {
      display: flex;
    }
  }
  
`

