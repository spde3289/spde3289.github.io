import {React, useState } from 'react';
import styled from "styled-components";
import { useRef } from "react"; 
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import content from '../postInfo'



const Header = () => {

    var pattern = /\s/g;   // 공백 체크 정규표현식 - 탭, 스페이스

    
    const [value, setValue] = useState();
    
    const navigate = useNavigate();
    const input = useRef();

    const inputOnClick = () => {
        input.current.focus();
    };

    const onSearch = (e) => {
        setValue(e.target.value);
        content.filter((list) => list.title.includes(value))
    }
    
    const onKeyDown = (e) => {
        
        
        if(e.key ==='Enter'){
            console.log(value.match(pattern))
            navigate('/search',{
                state: {
                    value : value
                }
            });
        }
    }


    return(
        <HeaderBar>
            <NavBar>
                <BlogName><Link to='/'>spde3289.github.io</Link></BlogName>
            <HeaderMenu>
                <HeaderMenuItem><Link to='/posts'>posts</Link></HeaderMenuItem>
                <HeaderMenuItem><Link to='/about'>about</Link></HeaderMenuItem>
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

const SearchArea = styled.span`
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
`
const SearchTextara = styled.input`
    border: none;
    outline: none;
    width: 150px;
    height: 30px;
    font-size: 14px;
`;

export default Header;