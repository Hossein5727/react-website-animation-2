import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
    color: #fff;
    font-size: ${({ big }) => (big ? "20px" : "16px")};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ rounded }) => (rounded ? "50px" : "none")};

    &:hover{
        background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
        transform: translate(-2px);
    }

  ${props => props.responsive && css`
  @media screen and (max-width: 768px) {
      display: none;
  }
  `}

  ${props => props.forCard && css`
  position: absolute;
  bottom: 40px;
  left: 15px;
  `}

  ${props => props.forEmail && css`
  width: 370px;
  text-align: center;

  @media screen and (max-width: 768px) {
  width: 320px;

  }
  `}
`;