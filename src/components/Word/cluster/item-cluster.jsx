import styled from "styled-components";
import colors from "../../../styles/colors";
import Main from "../../../assets/images/cluster/main.png";
import Menu from "../../../assets/images/cluster/menu.png";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
`

const ItemP = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${colors.textColor};
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const MainImg = styled.img`
    width: 2.6rem;
    height: 2.6rem;
`

const MenuContainer = styled.div`
    position: relative;
    cursor: pointer;
`

const ItemCluster = ({ title }) => {
    return (
        <ItemContainer>
            <TextContainer>
                <ItemP>{title}</ItemP>
                <MainImg src={Main} alt="main" />
            </TextContainer>

            <MenuContainer>
                <MainImg src={Menu} alt="menu" />
            </MenuContainer>
        </ItemContainer>
    )
}

export default ItemCluster;