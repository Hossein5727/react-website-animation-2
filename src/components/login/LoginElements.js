import styled from "styled-components";

export const LoginContainer = styled.form`
  width: 100vw;
  height: 87vh;
  background-color: #f1f5f9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
      justify-content: center;
  }
`;

export const LoginTextFiled = styled.input`
  width: 370px;
  border-radius: 50px;
  padding: 10px 40px;
  border: 1px solid #27272a;
  outline: none;
  color: #000;
  margin: 12px;
  transition: 0.2s all;

  &:hover{
      border: 1px solid #F59E0B;
  }
  
  @media screen and (max-width: 768px) {
      width: 320px;
}
`;

export const BoxLabel = styled.div`
  position: absolute;
  padding: 25px;
  font-size: 22px !important;
  color: #1d4ed8;
`;

export const LoginContent = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 130px;
  
  @media screen and (max-width: 678px) {
  margin-right: 0;
  }
`;

export const LoginImage = styled.img`
  height: 100%;
  object-fit: cover;
  flex: 1;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const LoginTitle = styled.h1`
  font-size: clamp(1.5rem,6vw,2.5rem);
  transform: translate(0,-120px);
  letter-spacing: 5px;

  @media screen and (max-width: 768px) {
      letter-spacing: 0;
  }
`;

export const LoginButton = styled.button`
  background: #077BF1;
    white-space: nowrap;
    padding: 10px 32px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: 50px;

    &:hover{
        background: #F26A2E;
        transform: translate(-2px);
    }
`;