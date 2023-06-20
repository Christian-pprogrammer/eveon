import styled from "styled-components";

const CreateAccountStyled = styled.div `
  height: 100vh;
  background-image: url('/assets/images/signin-bg.png');
  background-size: cover;
  background-position: center;
  form {
    width: 450px;
    background-color: var(--light);
    margin: auto;
    padding: 50px;
    h3{
      margin-bottom: 20px;
    }
    label, input {
      display: block;
    }
    label {
      margin-bottom: 5px;
    }
    input[type="text"] {
      width: 100%;
      padding: 12px;
      outline: none;
      margin-bottom: 30px;
      border: 1px solid var(--border-color);
      font-size: 1rem;
    }
    input.submit-btn, button.submit-btn {
      background-color: var(--primary);
      color: var(--light);
      font-size: 1rem;
      border: none;
      padding: 15px 10px;
      cursor: pointer;
      display: inline-block;
    }
    &>p{
      font-size: 17px;
      font-weight: 400;
      margin: 20px 0px;
      color: #141414;
      line-height: 25px;
    }
    div.submit {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 20%;
      a {
        text-decoration: none;
      }
      p{
        font-size: 15px;
        color: #a1a1a1;
        font-weight: 200;
      }

    }
  }
  div.form-container {
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default CreateAccountStyled;