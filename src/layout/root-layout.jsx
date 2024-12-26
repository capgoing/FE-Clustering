import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import colors from "../styles/colors";

const RootContainer = styled.div`
    width: 90%;
    height: 88%;
    border: none;
    border-radius: 1.5vw;
    background-color: ${colors.outletBackgroundColor};
    display: flex;
`

const OutletContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RootLayout = () => {
    return (
        <RootContainer>
            <NavBar />
            <OutletContainer>
                <Outlet />
            </OutletContainer>
        </RootContainer>
    );
};

export default RootLayout;