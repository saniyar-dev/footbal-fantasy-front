import styled from "styled-components";
import LogoUrl from '../../assets/Logo.svg'

const LogoSvg = styled.img.attrs((props) => {
    return {
        src: LogoUrl,
    }
})`
    background: #37013B;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`

export default LogoSvg