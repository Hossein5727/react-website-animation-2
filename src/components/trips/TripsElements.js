import styled from "styled-components";
import { ImLocation } from 'react-icons/im'

export const TripsContainer = styled.section`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
  margin-top: 20px;
`;

export const TripsTitleContainer = styled.h1`
  margin-top: 150px;
  font-size: clamp(3rem,6vw,5.5rem);
  text-align: center;
  transition: 0.3s all !important;
  cursor: pointer;

  
  &:hover{
    letter-spacing: 40px;
    transition: 0.3s all !important;
  }
`;

export const TripsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const TripsCardItem = styled.div`
  width: 297px;
  height: 500px;
  position: relative;
  border-radius: 10px;
  margin: 12px;
  
@media screen and (max-width: 700px) {
  width: 330px;
}
`;

export const TripsImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  filter: brightness(60%);
  
  &:hover{
    filter: brightness(90%);
  }
`;


export const TripsLocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
  left: 30px;
  font-weight: bold;
  color: #fff;
`;

export const TripsTitle = styled.h1`
  font-size: 22px;
`;

export const TripsLocation = styled(ImLocation)`
  margin-right: 10px;
`;