import styled from "styled-components";
import Row from "../Grid/Row";
import Column from "../Grid/Column";

export const Modal = styled(Column)`
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
border-radius: 16px;
background: #FFFFFF;
padding-bottom: 82px;
`

export const ModalHeader = styled(Row)`
background: #3D195B;
border-radius: 16px 16px 0px 0px;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 900;
font-size: 24px;
text-align: center;

color: #00FF87;

justify-content: center;
align-items: center;

width: 100%;
height: 60px;
`

export const ModalDescription = styled(Row)`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 20px;
text-align: center;

color: #3D195B;
`

export const ModalPrimaryButton = styled.button`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 16px;

display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-grow: 1;

height: 40px;

color: #FFFFFF;

background: #ED1B5D;
border-radius: 4px;
`

export const ModalSecondaryButton = styled.button`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 16px;

display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-grow: 1;

height: 40px;

color: #3D195B;

background: #FFFFFF;
border: 1px solid #3D195B;
border-radius: 4px;
`