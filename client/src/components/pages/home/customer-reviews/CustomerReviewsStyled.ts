import styled from "styled-components";

const CustomerReviewsStyled = styled.div `
  &>.container {
    padding-top: 5%;
    padding-bottom: 5%;
    text-align: center;
    div.rating {
      display: flex;
      flex-direction: column;
      margin: auto;
      width: fit-content;
      align-items: center;
    }
    h2{
      margin-bottom: 2%;
    }
    span {
      font-size: 1.1rem;
      margin-top: 10px;
    }
  }
`

export default CustomerReviewsStyled;