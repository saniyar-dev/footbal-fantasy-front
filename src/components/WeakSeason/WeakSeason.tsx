import React, {FC, ReactElement} from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 472px;
    height: 35px;
    margin: 0 auto 0 auto;
    bottom: 20px;

    background: #3D195B;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3rem;
`

const WeakText = styled.span`
    width: 121px;
    height: 23px;

    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    text-align: center;

    color: #00FF87;
`

const DateText = styled.span`
    width: 236px;
    height: 23px;

    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    text-align: center;

    color: #F7F7F7;

`

const WeakSeason: FC = (): ReactElement => {
    return (
        <Container>
            <WeakText>هفته سوم</WeakText>
            <DateText>شنبه ۳۰ مرداد ۱۴۰۰ - ساعت ۱۷</DateText>
        </Container>
    )
}

export default WeakSeason