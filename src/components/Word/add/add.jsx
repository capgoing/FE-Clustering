import styled from "styled-components";
import colors from "../../../styles/colors";
import addLogo from "../../../assets/images/add/addLogo.png";

const AddContainer = styled.div`
    width: 100%;
    height: 2.6vw;
    background-color: ${(props) => (props.focused ? colors.mainColor : props.clicked ? colors.white : colors.mainColor)};
    border: 0.05vw solid ${(props) => (props.focused ? colors.textColor : props.clicked ? colors.textColor : "none")};
    border-radius: 0.4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    pointer-events: ${(props) => (props.focused || !props.clicked ? "auto" : "none")}; // 배경이 흰색일 때 클릭 방지

`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2vw;
`;

const AddImg = styled.img`
    width: 1.3vw;
    height: 1.3vw;
    display: ${(props) => (props.clicked ? "none" : "block")};
`;

const AddP = styled.p`
    font-size: 0.7vw;
    color: ${(props) => (props.focused ? colors.white : props.clicked ? colors.textColor : colors.white)};
    font-weight: 600;
`;

const Add = ({ clickAddBtn, setClickAddBtn, isFocus }) => {
    const handleClick = () => {
        setClickAddBtn(!clickAddBtn);
    };

    return (
        <AddContainer onClick={handleClick} clicked={clickAddBtn} focused={isFocus}>
            <InnerContainer>
                <AddImg src={addLogo} alt="add" clicked={clickAddBtn} />
                <AddP 
                    clicked={clickAddBtn} 
                    focused={isFocus}>
                    {clickAddBtn ? "추가하기" : "새 어휘 추가"}
                </AddP>
            </InnerContainer>
        </AddContainer>
    );
};

export default Add;
