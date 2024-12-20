import styled from "styled-components";
import colors from "../../styles/colors";
import ListNavBar from "./list-navBar";
import Home from "../../assets/images/navBar/home.png";

const NavBarContainer = styled.div`
    width: 20%;
    height: 100%;
    background-color: ${colors.white};
    border: none;
    border-radius: 1.5vw;
    padding: 2vw 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NavContainer = styled.div`
    width: 80%;
`

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.85vw;
    cursor: pointer;
`

const ImgLogo = styled.img`
    width: 4.3rem;
    height: 4.3rem;
`

const HomeP = styled.p`
    font-size: ${({ fontSize }) => fontSize || "1.7rem"};
    font-weight: ${({ weight }) => weight || "600"};
    color: ${({ color }) => color || colors.mainColor};
`;

const Bar = styled.div`
    width: 100%;
    height: 0.1vw;
    background-color: ${colors.barColor};
    margin: 2vw 0;
`


const NavBar = () => {
    return (
        <NavBarContainer>
            <NavContainer>
                <InnerContainer>
                    <ImgLogo src={Home} alt="homeLogo" />
                    <HomeP>홈</HomeP>
                </InnerContainer>
            </NavContainer>

            <Bar />
            
            <NavContainer>
                <HomeP fontSize="1.5rem" color={colors.textColor} weight="500">포도품종</HomeP>
            </NavContainer>

            <ListNavBar />
        </NavBarContainer>
    )
}

export default NavBar;