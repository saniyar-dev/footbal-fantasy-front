import React, { CSSProperties, FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Row from "../Grid/Row";
import Column from "../Grid/Column";

const TableContext = React.createContext(null)

type StyleTableType = Pick<CSSProperties, "width" | "height" | "gap">

export const Table: FC<{
    children: ReactNode,
    styles: StyleTableType,
}> = ({children, styles}): ReactElement => {
    return <Column styles={styles}>{children}</Column>
}

type StyleTableHeaderType = Pick<CSSProperties, "width" | "height">

const StyledTableHeader = styled(Row)<{
    styles: StyleTableHeaderType
}>`
    justify-content: space-between;
    width: ${props => props.styles.width};
    height: ${props => props.styles.height};

    border-bottom: 1px solid #EFEFEF;

    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    text-align: center;

    color: #999999;
`

export const TableHeader: FC<{
    styles: StyleTableHeaderType,
    children: ReactNode
}> = ({styles, children}): ReactElement => {
    return <StyledTableHeader styles={styles}>{children}</StyledTableHeader>
}

type StyleTableRowType = StyleTableHeaderType

const StyledTableRow = styled(Row)<{
    styles: StyleTableRowType
}>`
    justify-content: space-between;
    width: ${props => props.styles.width};
    height: ${props => props.styles.height};

    border-bottom: 1px solid #EFEFEF;

    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-align: right;

    color: #3D195B;

    box-sizing: border-box;

    background: #FFFFFF;
`

export const TableRow: FC<{
    children: ReactNode
    styles: StyleTableRowType
}> = ({children, styles}): ReactElement => {
    return <StyledTableRow styles={styles}>{children}</StyledTableRow>
}

type StyleTableTitleType = StyleTableHeaderType

const StyledTableTitle = styled(Row)<{
    styles: StyleTableTitleType
}>`
    justify-content: space-between;
    align-items: center;

    width: ${props => props.styles.width};
    height: ${props => props.styles.height};

    background: #3D195B;
    border-radius: 4px;

    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    text-align: right;
    padding-right: 12px;

    color: #00FF87;
`

export const TableTitle: FC<{
    children: ReactNode,
    styles: StyleTableTitleType
}> = ({children, styles}): ReactElement => {
    return <StyledTableTitle styles={styles}>{children}</StyledTableTitle>
}
