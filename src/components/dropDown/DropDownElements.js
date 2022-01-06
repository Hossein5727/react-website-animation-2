import styled from "styled-components";
import { MdOutlineClose } from 'react-icons/md'
import { Link } from "react-router-dom";

export const DropDownContainer = styled.section`
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: #f59e0b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  transition: 0.3s all;
  color: #fff;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
`;

export const DropDownNav = styled(MdOutlineClose)`
   font-size: 42px;
   position: absolute;
   top: 0;
   right: 0;
   cursor: pointer;
   transform: translate(-10px,20px);
`;

export const DropDownWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

export const DropDownLink = styled(Link)`
font-size: 2rem;
  margin: 10px 0;
`;