import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Login from "./Login";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Authentication() {
    return (
        <>
            <Box component="nav">
                <Navigation />
            </Box>
            <Box component="main">
                <MainContainer>
                    <Logo />
                    <Login />
                </MainContainer>
            </Box>
        </>
    )
}

const MainContainer = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export default Authentication;