import React from 'react';
import styled from "styled-components";
import { useRef } from "react"; 
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'

const Header = (props) => {
    console.log()

    const input = useRef();
    
    const inputOnClick = () => {
        input.current.focus();
    };

    const search = (e) => {
        console.log(props);
    }


   
    return(
        <HeaderBar>
            <NavBar>
                <BlogName><Link to='/'>spde3289.github.io</Link></BlogName>
            <HeaderMenu>
                <HeaderMenuItem><Link to='/posts'>posts</Link></HeaderMenuItem>
                <HeaderMenuItem><Link to='/about'>about</Link></HeaderMenuItem>
                <Search >
                    <SearchTextara 
                    type='text' 
                    onChange={(e)=>{search(e)}}
                    ref={input} 
                    placeholder='search'/>
                    <AiOutlineSearch 
                        onClick={()=>{inputOnClick()
                        }}/>
                </Search>
            </HeaderMenu>
            </NavBar>
        </HeaderBar>
    );
};

const HeaderBar = styled.header`
    margin-bottom: 70px;
    border-bottom: 0.5px solid #888;
`;

const NavBar = styled.nav`
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1000px;
    padding: 10px;
    
`

const BlogName = styled.div`
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

const Search = styled.span`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &:hover {
        cursor: text;
    }
    &:after{
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        border-bottom: 1px solid #000;
    }
    &:hover:after{
        border-bottom: 2px solid #000;
    }
    &:click {
        
    }
`
const SearchTextara = styled.input`
    border: none;
    outline: none;
    width: 150px;
    height: 30px;
    font-size: 14px;
`;

export default Header;