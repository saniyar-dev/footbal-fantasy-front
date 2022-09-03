import React, {FC, ReactElement} from "react"
import styled from "styled-components"
import Button from "../../../atomComponents/Button/Button"

const BoldText = styled.span`
    font-weight: 700;
`

const PlayerCount: FC = (): ReactElement => {
    return (
        <Button
            active={true}
            styles={{
                activeBgColor: "linear-gradient(269.48deg, #04F5EC -30.14%, #03FBB8 109.7%)",
                defaultHeight: 30,
                defaultWidth: 180,
                font: {
                    fontSize: 11,
                    fontWeight: 300,
                }
            }}
            disabled
        >
            <BoldText>
                ۵۲۳
            </BoldText>
            {' '}
            بازیکن نمایش داده شده است
        </Button>
    )
}

export default PlayerCount