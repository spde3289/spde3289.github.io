import './header.css'
import styled from "styled-components";

const Header = () => {
    return(
        <>
        <HeaderBar>
                <BlogName href='https://spde3289.github.io/'>spde3289.github.io</BlogName>
            <HeaderMenu>
                <HeaderMenuItem><a href='https://spde3289.github.io/'>about</a></HeaderMenuItem>
                <HeaderMenuItem>posts</HeaderMenuItem>
                <Search>
                    <li className="searchTextara"><input/></li>
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
    margin-top: 25px;
    width: 1200px;
    height: 70px;
    align-items: center;
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


export default Header;