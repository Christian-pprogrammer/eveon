import styled from "styled-components";

type Props = {
  direction?: string
}

const StorageContainerStyled = styled.div <Props> `
  background-color: var(--light);
  display: ${(props: any)=>props.direction == 'horizontal' ? 'grid':'block'}; 
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
    p {
      font-size: .9rem !important;
      margin-bottom: 10px;
    }
  }
`

export default StorageContainerStyled;