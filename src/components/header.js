import './header.css'

const Header = () => {
    return(
        <header className="header">
                <a href='https://spde3289.github.io/'>spde3289.github.io</a>
            <ul className='headerMenu'>
                <li><a href='https://spde3289.github.io/'>about</a></li>
                <li>posts</li>
                <ul className='search'>
                    <li className="searchTextara"><input/></li>
                    <div>1</div>
                </ul>
            </ul>

        </header>
    );
};

export default Header;