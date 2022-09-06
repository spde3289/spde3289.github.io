import styled from "styled-components";
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return(
        <FooterBar>
            <Footerinfo><a href='https://github.com/spde3289'><AiFillGithub size='24'/></a></Footerinfo>
            <Footerinfo>myer100756@gmail.com, spde3289@naver.com</Footerinfo>
        </FooterBar>
    );
};

const FooterBar = styled.footer`
    padding: 40px 20px ;
`

const Footerinfo = styled.p`
    font-size: 15px;
    margin-right: 10px;
`

export default Footer;