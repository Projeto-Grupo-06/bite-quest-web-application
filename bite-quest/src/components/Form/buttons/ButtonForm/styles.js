import styled from "styled-components";

export const Buttonformsubmit = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.fundocolor};
  border-radius: 6px;
  color: ${props => props.colordotext};
  font-size: ${props => props.fontsize};
  margin-top: ${props => props.margintop};
  font-weight: 100; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;