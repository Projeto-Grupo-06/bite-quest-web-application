import styled from "styled-components";

export const Buttonformsubmit = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  border-radius: 6px;
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize};
  /* font-weight: bold; */
  cursor: pointer;

  &:hover {
    background-color: #F29C11;
  }
`;


