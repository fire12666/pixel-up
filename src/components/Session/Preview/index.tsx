import { Box, styled, Typography } from '@mui/material';


export const Preview = ({ title, author, togglePopup }: { title: string, author: string, togglePopup: () => void }) => {
    return (
        <Container>
            <StyledPreviewTitle variant="h6" component="h6" color="textSecondary">
                {title}
            </StyledPreviewTitle>
            <Box sx={{ p: 1 }}>
                <Typography paragraph>
                    Drawn by {author}.
                    <br />
                    Last edited: ???
                </Typography>
            </Box>
            <Canvas onClick={togglePopup} />
        </Container>
    )
};

const Container = styled('div')(() => ({
    width: 'fit-content',
    border: 'solid 1px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

const StyledPreviewTitle = styled(Typography) <{ component: string }>`
    text-align: center;
`;


const Canvas = styled('img')`
    width: 15em;
    height: 20vmin;
    background-color: blue;
    cursor: pointer;
`