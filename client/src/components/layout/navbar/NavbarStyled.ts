import styled from "styled-components";

const NavbarStyled = styled.div `
  background-color: var(--dark);
  &>div.container {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    div.right-bar {
      display: flex;
      gap: 15px;
      svg {
        width: 25px;
        height: 25px;
        fill: var(--light);
      }
      div.flags {
        border-color: var(--light);
        overflow: hidden;
      }
    }
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
`
export default NavbarStyled;