import styled from "styled-components";

export const Buttonformsubmit = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  border-radius: 6px;
  color: ${props => props.textColor};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 50px;

  &:hover {
    background-color: #F29C11;
  }
`;


