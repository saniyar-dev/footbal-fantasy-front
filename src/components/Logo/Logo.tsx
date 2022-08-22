import styled from "styled-components";
import LogoUrl from '../../assets/Logo.svg'

const LogoSvg = styled.img.attrs((props) => {
    return {
        src: LogoUrl,
    }
})`
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 118px;
    height: 150px;
`

export default LogoSvg