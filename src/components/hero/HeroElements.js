import styled from "styled-components";

export const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  
  :before{
    position: absolute;
    content: "";
    top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0.2)0%,
      rgba(0,0,0,0.4)100%
      ),
      linear-gradient(180deg,rgba(0,0,0,0.2)0%,transparent 100%);
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroVideo = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index:3;
  height: 100vh;
  min-height: 100%;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const HeroH1 = styled.h1`
  font-size: clamp(3rem,6vw,4.5rem);
`;

export const HeroP = styled.h1`
  font-size: clamp(1rem,6vw,3rem);
  margin-top: 30px;
`;