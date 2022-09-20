import Column from "@src/atomComponents/Grid/Column";
import Container from "@src/atomComponents/Grid/Container";
import Header from "@src/components/Header/Header";
import CreateTeamNavbar from "@src/components/Navbar/Navbar";
import React, { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

const AppLayout: FC<{
}> = (): ReactElement => {
    return <Container styles={{
        width: '100%',
        height: '100%',
        gridTemplateColumns: 'auto',
        gridTemplateRows: 'auto auto'
    }}>
        <Column styles={{
            width: '100%',
        }}>
            <Header />
            <CreateTeamNavbar />
        </Column>
        <div>
            <Outlet />
        </div>
    </Container>
}

export default AppLayout