import styled from "styled-components";
const StorageContainerStyled = styled.div `
  background-color: var(--light);
  div.product-image {
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    span.name {
      background-color: var(--yellow);
      font-size: .9rem;
      padding: 10px 20px;
      font-weight: bold;
      display: inline-block;
    }
  }
  div.footer {
    padding: 7%;
    h3, p {
      text-align: left;
    }
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
`

export default StorageContainerStyled;