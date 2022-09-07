import styled from "styled-components";
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
    return(
        <FooterBar>
            Contact Information
            <Footerinfo>
                <a href='mailto:spde3289@gmail.com'>
                    <AiOutlineMail style={{marginBottom: -6, marginRight: 5}} size='24'/>myer100756@gmail.com
                </a>
            </Footerinfo>
            <Footerinfo>
                <a href='https://github.com/spde3289'>
                    <AiFillGithub style={{marginBottom: -6, marginRight: 5}} size='24'/>spde3289
                </a>
            </Footerinfo>
            <Footerinfo>
                <a href='https://www.instagram.com/98._.hun/'>
                    <IoLogoInstagram style={{marginBottom: -6, marginRight: 5}} size='24'/>98._.hun
                </a>
            </Footerinfo>
        </FooterBar>
    );
};

const FooterBar = styled.footer`
    padding: 40px 20px ;
    text-align: center;
`;

const Footerinfo = styled.p`
    font-size: 15px;
    margin-right: 10px;
`




export default Footer;