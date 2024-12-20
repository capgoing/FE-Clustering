import styled from "styled-components";
import colors from "../../styles/colors";
import Home from "../../assets/images/home.png";

const NavBarContainer = styled.div`
    width: 20%;
    height: 100%;
    background-color: ${colors.white};
    border: none;
    border-radius: 1.5vw;
    padding: 1.25vw 0;
    display: flex;
    justify-content: center;
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
    width: 2.15vw;
    height: 2.15vw;
`

const HomeP = styled.p`
    font-size: 1.7rem;
    font-weight: 600;
    color: ${colors.mainColor};
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
        </NavBarContainer>
    )
}

export default NavBar;