import styled from "@emotion/styled"
import { Button, Paper, TextField } from "@mui/material"
import { useState } from "react";

const Login = () => {
    const [userInput, setUserInput] = useState<string>("");
    const [passwordInput, setPasswordInput] = useState<string>("");

    const onUserChange = (e: any) => setUserInput(e.target.value);
    const onPasswordChange = (e: any) => setPasswordInput(e.target.value);

    const handleSubmit = () => console.log(userInput);

    return (
        <Container>
            <Paper style={{ 'minHeight': '60vmin', padding: '2em' }}>
                <h2>Login</h2>
                <TextField
                    style={{ 'width': '100%', paddingBottom: '1em' }}
                    onChange={onUserChange}
                    value={userInput}
                    label={"Username"}
                />
                <TextField
                    style={{ 'width': '100%', paddingBottom: '1em' }}
                    onChange={onPasswordChange}
                    value={passwordInput}
                    label={"Password"}
                />
                <Button 
                    style={{border: 'solid', marginBottom: '1em'}}
                    onClick={handleSubmit}>Submit</Button>
                <hr />
                No account? Click here to sign up!
            </Paper>
        </Container>
    )
}

const Container = styled('div')`
    flex: 1;
    text-align: center;
    padding: 5em;
`

export default Login