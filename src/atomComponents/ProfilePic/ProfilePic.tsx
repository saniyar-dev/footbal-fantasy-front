import styled, { CSSProperties } from "styled-components";

const ProfilePic = styled.img<{
    styles?: Pick<CSSProperties, "width">
}>`
width: ${props => props.styles?.width};
height: ${props => props.styles?.width};
border-radius: 50%;
`

export default ProfilePic