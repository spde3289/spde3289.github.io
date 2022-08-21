import './header.css'

const Header = () => {
    return(
        <header className="header">
                <li><a href='https://spde3289.github.io/'>spde3289.github.io</a></li>
            <ul className='headerMenu'>
                <li><img src={require('../imgs/github.png')} alt='github Link'/></li>
                <li>POST</li>
                <li><div>검색기능</div></li>
            </ul>

        </header>
    );
};

export default Header;