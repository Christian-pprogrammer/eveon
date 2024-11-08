import styled from "styled-components";

const SigninStyled = styled.div `
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
    input.submit-btn {
      background-color: var(--primary);
      color: var(--light);
      font-size: 1.1rem;
      border: none;
      padding: 15px 10px;
      cursor: pointer;
      width: 60%;
    }
    div.submit {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
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

export default SigninStyled;