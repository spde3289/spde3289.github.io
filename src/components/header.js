import './header.css'

const Header = () => {
    return(
        <header>
            <div><a href='https://spde3289.github.io/'>spde3289.github.io</a></div>
            <div>
                <img src={require('../imgs/github.png')} alt='github Link'/>
            </div>
            <ul>
                <li>as</li>
                <li><a href='/'>asd</a></li>
            </ul>
            <ol>
                <li>a</li>
                <li>a</li>
            </ol>
        </header>
    );
};

export default Header;