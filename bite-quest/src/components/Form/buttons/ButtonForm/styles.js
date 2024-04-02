import styled from "styled-components";

export const Buttonformsubmit = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.fundoColor};
  border-radius: 6px;
  color: ${props => props.colorDoText};
  font-size: ${props => props.fontSize};
  margin-top: ${props => props.marginTop};
  font-weight: 100; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;