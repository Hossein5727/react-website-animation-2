import styled from "styled-components";

export const TestimonialContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const TestimonialContent = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
`;

export const TestimonialTitle1 = styled.h3`
  font-size: 20px;
  color: #3b82f6;
`;

export const TestimonialTitle2 = styled.h1`
  font-size: clamp(1.5rem,6vw,2.5rem);
  margin-top: 5px;
  font-weight: 500;
`;

export const TestimonialContentWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all ;
  
  @media screen and (max-width: 960px) {
      flex-wrap: wrap;
  }
`;

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconColumnOne = styled.div`
  font-size: 38px;
  margin-bottom: 2px;
  color: ${({ color }) => color};
`;

export const ColumnOneData = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  
  h1{
      margin-bottom: 18px;
      font-size: 2rem;
      font-style: italic;
  };

  p{
      color: #374151;
  }
`;

export const ColumnTwo = styled.div`
    /* width: 100%; */
    display: flex;

    @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    }
`;

export const ColumnTwoData = styled.div`
  border-radius: 10px;
  margin: 10px 10px;
  
  img{
      width: 700px;
      object-fit: cover;
      border-radius: 10px;

      @media screen and (max-width: 768px) {
      /* width: 200px; */
      }
  }
`;