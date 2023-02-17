import React, { useState } from 'react';
import styled from "styled-components";
import { useRef } from "react"; 
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import useTitle from './ChangeTitle';

const Header = () => {
  
    const [value, setValue] = useState(null);
    const navigate = useNavigate();
    const input = useRef();
    const changeTitle = useTitle();

    const inputOnClick = () => {
        input.current.focus();
    };

    const onSearch = (e) => {
        setValue(e.target.value);
    };

   const onKeyDown = (e) => {
        if(e.key ==='Enter' && value !== undefined){
            navigate('/search',{
                state: {
                    value : value
                }
            });
            changeTitle('Search')
        }else if(value === null && e.key ==='Enter' ){
            alert('검색어를 입력해주세요');
        };
    };  

    return(
        <HeaderBar>
            <NavBar>
                <BlogName><Link onClick={()=>{changeTitle('Home')}} to='/'>spde3289.github.io</Link></BlogName>
            <HeaderMenu>
                <HeaderMenuItem><Link onClick={()=>{changeTitle('Posts')}} to='/posts'>posts</Link></HeaderMenuItem>
                <HeaderMenuItem><Link onClick={()=>{changeTitle('About')}} to='/about'>about</Link></HeaderMenuItem>
                <SearchArea>
                    <SearchTextara 
                    type='text' 
                    onChange={onSearch}
                    onKeyDown={onKeyDown}  
                    ref={input} 
                    placeholder='search'/>
                    <AiOutlineSearch 
                        onClick={()=>{inputOnClick()}}/>
                </SearchArea>
            </HeaderMenu>
            </NavBar>
        </HeaderBar>
    );
};

const HeaderBar = styled.header`
    height: 75px;
    margin-bottom: 70px;
    border-bottom: 0.5px solid #a8a8a8;
    display: flex;
    align-items: center;
`;

const NavBar = styled.nav`
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1000px;
    padding: 10px;
`;

const BlogName = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const HeaderMenu = styled.ul`
    display:flex;
    font-size: 20px;
    font-weight: bold;
`;

const HeaderMenuItem = styled.li`
    margin-right: 10px;
`;

const SearchArea = styled.span`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &:hover {
        cursor: text;
    };
    &:after{
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        border-bottom: 1px solid #000;
    };
    &:hover:after{
        border-bottom: 2px solid #000;
    };
`;

const SearchTextara = styled.input`
    border: none;
    outline: none;
    width: 150px;
    height: 30px;
    font-size: 14px;
`;

export default Header;