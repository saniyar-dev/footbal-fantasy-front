import Row from '@src/atomComponents/Grid/Row'
import React, {FC, ReactElement, ReactNode} from 'react'
import styled from 'styled-components'

const RightBar = styled.span`
width: 174px;
height: 0px;

border: 3px solid #04F5EC;
`

const StyledText = styled.span`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 800;
font-size: 20px;

display: flex;
align-items: center;
text-align: center;

color: #3D195B;

`

const LeftBar = styled.span`
width: 174px;
height: 0px;

border: 3px solid #00FF87; 
`

const PageTitle: FC<{
    children: ReactNode,
}> = ({children}): ReactElement => {
    return <Row styles={{
        alignItems: 'center',
        gap: '54px'
    }}>
        <RightBar />
        <StyledText>
            {children}
        </StyledText>
        <LeftBar />
    </Row>
}

export default PageTitle