import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import colors from "../styles/colors";

const RootContainer = styled.div`
    background-color: ${colors.white};
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