import styled from "@emotion/styled"
import { APP_TITLE } from "../../../utils/constants"


const Navigation = () => {
    return (
        <Container>
            <Header>
                {APP_TITLE}
            </Header>
            <Content>
                <MenuList>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </MenuList>
            </Content>
        </Container>
    )
}

const Container = styled('div')`
    border-color: rgba(255,255,255,.3);
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-left: 1em;
    padding-right: 1em;
    border-bottom: solid 1px;
`

const Header = styled('div')`

`

const Content = styled('div')`
    display: block;
    float: right;
    margin-left: auto;
`

const MenuList = styled('ul')`
    float: center;
    list-style: none;
    display: flex;
    flex-direction: row;
`

const MenuItem = styled('li')`
    padding: .7em;
`

export default Navigation