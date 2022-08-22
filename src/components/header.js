import './header.css'

const Header = () => {
    return(
        <header className="header">
                <li><a href='https://spde3289.github.io/'>spde3289.github.io</a></li>
            <ul className='headerMenu'>
                <li><a href='https://spde3289.github.io/'>about</a></li>
                <li>posts</li>
                <li><div>1</div></li>
            </ul>

        </header>
    );
};

export default Header;