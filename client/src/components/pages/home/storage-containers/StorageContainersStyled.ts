import styled from "styled-components";

const StorageContainersStyled = styled.div `
  background-color: var(--semi-light);
  div.container {
    padding-top: 5%;
    padding-bottom: 5%;
    h3, p {
      text-align: center;
      margin-bottom: 3%;
    }
    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.2rem;
    }
    div.containers {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 20px;
    }
    @media screen and (max-width: 768px) {
      div.containers {
        grid-template-columns: auto;
      }
    }
  }
`

export default StorageContainersStyled;