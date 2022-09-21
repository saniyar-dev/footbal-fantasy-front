import { TableRow } from '@src/atomComponents/Table/Table';
import React, {FC, ReactElement} from 'react';
import styled from 'styled-components';
import profileUrl from '@assets/Images/profile/fake1.jpg'
import Row from '@src/atomComponents/Grid/Row';

const StyledName = styled.p`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 500;
font-size: 12px;
display: flex;
align-items: center;
text-align: right;

color: #3D195B;
`

const Profile = styled.img`
width: 40px;
height: 40px;

border-radius: 60px;
`

const ViewButton = styled.button`
width: 70px;
height: 30px;

background: #FFFFFF;
border: 1px solid #E8E8E8;
border-radius: 4px;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 300;
font-size: 12px;

display: flex;
align-items: center;
justify-content: center;
text-align: center;

color: #555555;
`

const FollowerRow: FC<{userId: number}> = ({userId}): ReactElement => {
    return <TableRow styles={{}}>
        <Row styles={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '50px',
        }}>
            <Row styles={{
                alignItems: 'center',
                gap: '16px',
                justifyContent: 'center'
            }}>
                <Profile src={profileUrl} />
                <StyledName>
                    شایان رضایی
                </StyledName>
            </Row>
            <ViewButton>
                مشاهده
            </ViewButton>
        </Row>
    </TableRow>
}

export default FollowerRow