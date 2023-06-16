import styled from "styled-components";

const OverviewStyled = styled.div `
  background-color: var(--dark);
  color: var(--light);
  &>div.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4em;
    div.overview-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: calc(16px + 8 * (100vw - 480px)/ 760);
      font-weight: normal;
    }
    div.overview-img {
      background-image: url('/overview.png');
      background-color: red;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    h2{
      font-size: calc(30px + 10 * (100vw - 480px)/ 760);
      margin-bottom: calc(16px + 8 * (100vw - 480px)/ 760);
    }
    p.intro-body{
      font-size: calc(16px + 4 * (100vw - 480px)/ 760);
      margin-bottom: 3.2rem;
      line-height: 30px;
    }
    div.why-choose {
      margin: calc(40px + 8 * (100vw - 480px)/ 760) 0px;
      h4{
        margin-bottom: 25px;
        opacity: .5;
      }
    }
    @media screen and (max-width: 768px) {
      div.overview-img {
        display: none;
      }
      & {
        grid-template-columns: 1fr;
      }
    }
  }
`
export default OverviewStyled;