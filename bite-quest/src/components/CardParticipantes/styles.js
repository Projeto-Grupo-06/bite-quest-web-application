import styled from "styled-components";

export const divImagesParticipants = styled.div`
    height: 90%;
    width: 90%;
    border-radius: 10px;
background-image: url(${props => props.imgUrl});
    background-size: cover;
`