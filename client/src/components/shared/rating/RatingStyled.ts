import styled from "styled-components";
const RatingStyled = styled.svg `
  height: ${props=>props.height ? props.height:'30%'}; 
  width: ${props=>props.width ? props.width:'30%'};
`
export default RatingStyled;