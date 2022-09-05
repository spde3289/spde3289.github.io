import React from 'react';
import '../css/reset.css'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return(
        <>
        <HeaderBar>
                <BlogName href='https://spde3289.github.io/'>spde3289.github.io</BlogName>
            <HeaderMenu>
                <HeaderMenuItem><Link to='/about'>about</Link></HeaderMenuItem>
                <HeaderMenuItem>posts</HeaderMenuItem>
                <Search>
                    <li><SearchTextara/></li>
                    <div>1</div>
                </Search>
            </HeaderMenu>
        </HeaderBar>
        </>
    );
};

const HeaderBar = styled.header`
    display:flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 1000px;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid #000;
`;

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


export default MainHeader;