import styled from "styled-components";

const OverviewStyled = styled.div `
  background-color: var(--semi-light);
  div.container {
    padding-top: 3%;
    padding-bottom: 5%;
    h3 {
      margin-bottom: 2%;
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 3%;
      font-weight: 400;
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

export default OverviewStyled;