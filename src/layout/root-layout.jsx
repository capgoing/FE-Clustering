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

const RootLayout = () => {
    return (
        <RootContainer>
            <NavBar />
            <Outlet />
        </RootContainer>
    );
};

export default RootLayout;