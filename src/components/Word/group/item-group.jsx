import styled from "styled-components";
import colors from "../../../styles/colors";
import radioBox from "../../../assets/images/group/radioBox.png";
import radioBoxClick from "../../../assets/images/group/radioBox-click.png";

const ItemContainer = styled.div`
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`

const RadioImg = styled.img`
    width: 2.6rem;
    height: 2.6rem;
`

const ItemP = styled.p`
    font-size: 1.4rem;
    color: ${({ $isSelected }) => ($isSelected ? colors.black : colors.textColor)};
    font-weight: 600;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const ItemGroup = ({ id, name, isSelected, onClick }) => {
    return (
        <ItemContainer onClick={() => onClick(id)}>
            <RadioImg src={isSelected ? radioBoxClick : radioBox} alt="radio" />
            <ItemP $isSelected={isSelected}>{name}</ItemP>
        </ItemContainer>
    )
}

export default ItemGroup;