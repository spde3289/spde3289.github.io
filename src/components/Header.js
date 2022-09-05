import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
        <HeaderBar>
            <NavBar>
                <BlogName href='https://spde3289.github.io/'>spde3289.github.io</BlogName>
            <HeaderMenu>
                <HeaderMenuItem><Link to='/about'>about</Link></HeaderMenuItem>
                <HeaderMenuItem>posts</HeaderMenuItem>
                <Search>
                    <li><SearchTextara/></li>
                    <div>1</div>
                </Search>
            </HeaderMenu>
            </NavBar>
        </HeaderBar>
        </>
    );
};

const HeaderBar = styled.header`
    border-bottom: 1px solid #666;
`;

const NavBar = styled.nav`
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1000px;
    padding: 10px;
    align-items: center;
`

const BlogName = styled.a`
    font-size: 20px;
    font-weight: bold;
`;

const HeaderMenu = styled.ul`
    display:flex;
    font-size: 20px;
   font-weight: bold;
`

const HeaderMenuItem = styled.li`
    margin-right: 10px;
`;

const Search = styled.ul`
    display: flex;
    border-bottom: 1px solid #000;

`
const SearchTextara = styled.input`
        border: none;
`;


export default Header;