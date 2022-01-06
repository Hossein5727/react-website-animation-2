import styled from "styled-components";

export const StatsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

export const Heading = styled.h1`
  font-size: clamp(1.5rem,6vw,3rem);
  padding-left: 2rem;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 15px;

  @media screen and (max-width:768px ) {
      grid-template-columns: 1fr;
  }
`;

export const StatsBox = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const Icon = styled.div`
  font-size: clamp(1rem,6vw,2rem);
  color: ${({ color }) => color};
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: clamp(1.2rem,6vw,1.6rem);
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 1rem;
`;