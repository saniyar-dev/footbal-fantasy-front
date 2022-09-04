import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import PlayerPreview from "./PlayerPreview/PlayerPreview";
import Table from "./Table/Table";

const Container = styled.div`
    display: flex;
    background: #FFFFFF;
    border-radius: 16px;
`

const ListView: FC = (): ReactElement => {
    return (
        <Container>
            <Table />
            <PlayerPreview />
        </Container>
    )
}

export default ListView