import styled from "styled-components";

export const TableUsuariosCadastrados = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  gap: 1rem;

  button {
    align-self: flex-start;
  }

  table {
    border: solid 1px var(--second-color);
    text-align: center;
    width: 100%;

    select {
      width: 90%;
      background-color: transparent;
      height: 2rem;
      cursor: pointer;

      option {
        background-color: var(--main-color);
        cursor: pointer;
      }
    }
  }

  tr, td {
    padding: 0.5rem;
  }

  tr {

  }

  thead {
    background-color: var(--second-color);

    td {
      color: var(--main-color);
    }
  }

  td:nth-child(1) {
    width: 5%;
  }

  td:nth-child(2) {
    width: 20%;
  }

  td:nth-child(3) {
    width: 25%;
  }

  td:nth-child(4) {
    width: 15%;
  }

  td:nth-child(5) {
    width: 15%;
  }

  td:nth-child(6) {
    width: 20%;

    div {
      display: flex;
      width: 100%;
      justify-content: space-around;

      :nth-child(1) {
        color: red;
      }

      svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
        
        :hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .deletUser, .saveUser {
    border: none;
    background: transparent;
    outline: none;
    width: 50px;
  }

  .deletUser {
    svg {
      fill: red;
    }
  }
`