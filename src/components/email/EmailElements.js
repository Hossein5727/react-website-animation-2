import styled from 'styled-components';

export const EmailContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
`;

export const EmailBg = styled.div`
  width: 850px;
  height: 350px;
  position: relative;
  
  ::before{
      border-radius: 10px;
      content:"";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      background: linear-gradient(
      180deg,
      rgba(0,0,0,0.2)0%,
      rgba(0,0,0,0.4)100%
      ),
      linear-gradient(180deg,rgba(0,0,0,0.2)0%,transparent 100%);
}
`;

export const EmailImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
   width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
      border-radius: 0;
  }
`;

export const EmailContent = styled.div`
  position: absolute;
  z-index: 5;
  color: #fff;
  text-align: center;
`;

export const EmailTitle = styled.h1`
  font-size: clamp(1.5rem,6vw,2rem);
  font-weight: 500;
  margin-bottom: 10px;
`;

export const EmailDesc = styled.p`
  margin-bottom: 40px;
  font-size: 1rem;
`;

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmailInput = styled.input`
  width: 370px;
  border-radius: 50px;
  padding: 10px 32px;
  border: none;
  outline: none;
  color: #000;

  @media screen and (max-width: 768px) {
  width: 320px;

  }
`;