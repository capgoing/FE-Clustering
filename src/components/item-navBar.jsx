import styled from "styled-components";
import colors from "../styles/colors";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1vw 0;
    cursor: pointer;
    border-right: ${({ $isActive }) => ($isActive ? `0.15vw solid ${colors.mainColor}` : "none")};
`

const InnerContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ImgLogo = styled.img`
    width: 2.6rem;
    height: 2.6rem;
`

const ItemP = styled.p`
    width: 80%;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ $isActive }) => ($isActive ? colors.mainColor : colors.textColor)};
`

const ItemNavBar = ({ id, name, image1, image2, isActive, onClick }) => {
    const handleClick = () => {
        onClick(id);
    };

    return (
        <ItemContainer $isActive={isActive}>
            <InnerContainer onClick={handleClick}>
                <ImgLogo src={isActive ? image2 : image1} alt={name} />
                <ItemP $isActive={isActive}>{name}</ItemP>
            </InnerContainer>
        </ItemContainer>
    )
}

export default ItemNavBar;