import styled from 'styled-components';

const TopBarStyled = styled.div `
  background-color: var(--primary);
  &>div.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    
    &>div{
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 15px;
      p,h2{
        color: var(--light);
      }
      p{
        font-size: 13px;
        font-weight: bold;
      }
      h2{
        font-size: 18px;
      }
    }
    &>div.middle-wrapper {
      justify-content: center;
    }
    
    div.right-wrapper {
      display: flex;
      justify-content: right;
    }
  }
  @media screen and (max-width: 768px) {
    &>div.container{
      grid-template-columns: 1fr;
      div.right-wrapper{
        width: 100%;
        flex: 1;
        justify-content: center;
      }
    }
    div.left-wrapper, div.middle-wrapper {
      display: none !important;
    }
    
  }
`
export default TopBarStyled;