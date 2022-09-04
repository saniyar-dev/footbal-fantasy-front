import React, { FC, ReactElement, ReactNode } from "react";
import { Container, Header } from "./styled";


class atomTable {
    Header: FC<{children: ReactNode}> = ({children}): ReactElement => {
        return <Header>{children}</Header>
    }
}
// const Table: FC<{
//     children: ReactNode,
//     Header: any 
// }> = ({children}): ReactElement => {
//     return <Container>{children}</Container>
// }

// Table.Header: FC<{
//     children: ReactNode
// }> = ({children}): ReactElement => {
//     return <Header>{children}</Header>
// }


export default atomTable