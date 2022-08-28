import './header.css'
import styled from "styled-components";

const Header = () => {
    return(
        <>
        <HeaderBar className="header">
                <a href='https://spde3289.github.io/'>spde3289.github.io</a>
            <ul className='headerMenu'>
                <li><a href='https://spde3289.github.io/'>about</a></li>
                <li>posts</li>
                <ul className='search'>
                    <li className="searchTextara"><input/></li>
                    <div>1</div>
                </ul>
            </ul>
        </HeaderBar>
        </>
    );
};

const HeaderBar = styled.header`
    display:flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 25px;
    width: 1200px;
    height: 70px;
    align-items: center;
`;


export default Header;