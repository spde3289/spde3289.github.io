import styled from "styled-components";

const Footer = () => {
    return(
        <FooterBar>
            <p><a href='https://github.com/spde3289'>깃허브 아이콘</a></p>
            <p>myer100756@gmail.com, spde3289@naver.com</p>
        </FooterBar>
    );
};

const FooterBar = styled.footer`
    padding: 40px 20px ;
    text-align: center;
`

export default Footer;