import styled from "styled-components";
import colors from "../../../styles/colors";
import addLogo from "../../../assets/images/add/addLogo.png";

const AddContainer = styled.div`
    width: 100%;
    height: 5.2rem;
    background-color: ${colors.mainColor};
    border: none;
    border-radius: 0.4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2vw;
`

const AddImg = styled.img`
    width: 2.6rem;
    height: 2.6rem;
`

const AddP = styled.p`
    font-size: 1.4rem;
    color: ${colors.barColor};
    font-weight: 600;
`

const Add = () => {
    return (
        <AddContainer>
            <InnerContainer>
                <AddImg src={addLogo} alt="add" />
                <AddP>새 어휘 추가</AddP>
            </InnerContainer>
        </AddContainer>
    )
}

export default Add;