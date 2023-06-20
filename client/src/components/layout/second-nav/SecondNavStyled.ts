import styled from "styled-components";

const SecondNavStyled = styled.div `
  background-color: var(--dark);
  div.container {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    ul {
      list-style-type: none;
      display: flex;
      gap: 25px;

      a {
        display: inline-block;
        text-decoration: none;
        color: var(--light);
        font-weight: 500;
        padding: 15px 0px;
      }
      a:hover {
        color: #3551ff;
      }
      a.active {
        color: #3551ff;
        
      }
    }

  }
`

export default SecondNavStyled;