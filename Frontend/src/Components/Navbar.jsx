import {AppBar, Toolbar, styled} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar) `
background: #FF69B4
` 
const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`
const Navbar = () => {
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to = '/'>Stock Management</Tabs>
                <Tabs to = '/all'>All Stock</Tabs>
                <Tabs to = 'add'>Add Stock</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar;