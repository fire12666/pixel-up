import { Button, styled } from "@mui/material";

const PreviewPopup = () => {
    return (
        <Container>
            <div>
                <Canvas />
            </div>
            <Button variant="contained">Draw</Button>
        </Container>
    );
};


const Container = styled('div')`
    display: flex;
    flex-direction: column;
`


const Canvas = styled('img')`
    width: 30em;
    height: 40vmin;
    background-color: blue;
`

export default PreviewPopup;