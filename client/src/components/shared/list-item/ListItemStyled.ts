import styled from "styled-components";
const ListItemStyled = styled.div `
  margin-bottom: 5px;
  display: flex;
  justify-content: left;
  gap: 15px;
  align-items: center;
  font-weight: bold;
  div.number {
    width: 1px;
    height: 1px;
    text-align: center;
    border-radius: 100%;
    background-color: var(--light);
    color: var(--dark);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`

export default ListItemStyled;